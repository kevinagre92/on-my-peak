const SALES_KEY = 'omp:sales:v1';
const MAX_SALES = 1000;
const DEFAULT_JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019e545a-dadf-7137-a85d-bebff86313fe';

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-OMP-Admin-Key');
  res.end(JSON.stringify(body));
}

function isAdminRequest(req) {
  const adminKey = process.env.OMP_ERP_ADMIN_KEY || '';
  if (!adminKey) return true;
  const url = new URL(req.url, 'https://onmypeak.vercel.app');
  return req.headers['x-omp-admin-key'] === adminKey || url.searchParams.get('key') === adminKey;
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch (error) {
    return {};
  }
}

function memoryStore() {
  globalThis.__ompSalesStore ||= [];
  return globalThis.__ompSalesStore;
}

async function kvFetch(path, options = {}) {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  const response = await fetch(`${url}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });
  if (!response.ok) {
    throw new Error(`KV ${response.status}`);
  }
  return response.json();
}

function getJsonBlobUrls() {
  return [...new Set([process.env.SALES_JSONBLOB_URL, DEFAULT_JSONBLOB_URL].filter(Boolean))];
}

async function jsonBlobFetch(options = {}) {
  const urls = getJsonBlobUrls();
  if (!urls.length) return null;

  let lastError = null;
  for (const url of urls) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {})
        }
      });
      if (!response.ok) {
        lastError = new Error(`JSONBlob ${response.status}`);
        continue;
      }
      return response.json();
    } catch (error) {
      lastError = error;
    }
  }

  if (lastError) throw lastError;
  return null;
}

async function getSales() {
  const data = await kvFetch(`/get/${encodeURIComponent(SALES_KEY)}`);
  if (!data) {
    const blob = await jsonBlobFetch();
    if (blob && Array.isArray(blob.sales)) return blob.sales;
    return memoryStore();
  }
  const value = data.result;
  if (Array.isArray(value)) return value;
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return [];
    }
  }
  return [];
}

async function setSales(sales) {
  const normalized = Array.isArray(sales) ? sales.slice(0, MAX_SALES) : [];
  const data = await kvFetch(`/set/${encodeURIComponent(SALES_KEY)}`, {
    method: 'POST',
    body: JSON.stringify(normalized)
  });
  if (!data) {
    await jsonBlobFetch({
      method: 'PUT',
      body: JSON.stringify({
        updatedAt: new Date().toISOString(),
        sales: normalized
      })
    });
    globalThis.__ompSalesStore = normalized;
  }
}

function cleanText(value, max = 120) {
  return String(value || '').trim().slice(0, max);
}

function getUnitCost(model) {
  const normalized = cleanText(model).toLowerCase();
  if (normalized.includes('hoodie') || normalized.includes('hoddie')) return 19;
  if (normalized.includes('crop') || normalized.includes('oversized')) return 12;
  return 0;
}

function cleanSale(row = {}) {
  const id = cleanText(row.id) || `sale-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const model = cleanText(row.model, 80);
  const quantity = Math.max(1, Math.min(99, Number(row.quantity || 1)));
  const unitCost = Math.max(0, Number(row.unitCost ?? getUnitCost(model)));
  const cost = Math.max(0, Number(row.cost ?? unitCost * quantity));
  const total = Math.max(0, Number(row.total || 0));
  return {
    id,
    orderId: cleanText(row.orderId) || id,
    createdAt: cleanText(row.createdAt) || new Date().toISOString(),
    model,
    color: cleanText(row.color, 80),
    size: cleanText(row.size, 20),
    quantity,
    client: cleanText(row.client, 120),
    phone: cleanText(row.phone, 60),
    email: cleanText(row.email, 120),
    code: cleanText(row.code, 40).toUpperCase(),
    unitPrice: Math.max(0, Number(row.unitPrice || (quantity ? total / quantity : total))),
    unitCost,
    cost,
    total,
    netProfit: total - cost,
    paid: Boolean(row.paid),
    paidAt: cleanText(row.paidAt, 60),
    delivered: Boolean(row.delivered),
    deliveredAt: cleanText(row.deliveredAt, 60),
    deliveryDetails: cleanText(row.deliveryDetails, 240)
  };
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return json(res, 204, {});

  try {
    if (req.method === 'GET') {
      if (!isAdminRequest(req)) return json(res, 401, { ok: false, error: 'unauthorized' });
      const sales = await getSales();
      return json(res, 200, { ok: true, storage: process.env.KV_REST_API_URL ? 'kv' : 'jsonblob', sales });
    }

    if (req.method === 'POST') {
      const body = await readBody(req);
      const incoming = Array.isArray(body.sales) ? body.sales : [body.sale || body];
      const cleaned = incoming.map(cleanSale).filter(sale => sale.model && sale.color && sale.size && sale.client);
      if (!cleaned.length) return json(res, 400, { ok: false, error: 'missing_sale_data' });
      const current = await getSales();
      const knownIds = new Set(current.map(sale => sale.id));
      const next = [...cleaned.filter(sale => !knownIds.has(sale.id)), ...current].slice(0, MAX_SALES);
      await setSales(next);
      return json(res, 200, { ok: true, inserted: next.length - current.length, storage: process.env.KV_REST_API_URL ? 'kv' : 'jsonblob' });
    }

    if (req.method === 'PATCH') {
      if (!isAdminRequest(req)) return json(res, 401, { ok: false, error: 'unauthorized' });
      const body = await readBody(req);
      const id = cleanText(body.id);
      if (!id) return json(res, 400, { ok: false, error: 'missing_id' });
      const sales = await getSales();
      const sale = sales.find(item => item.id === id);
      if (!sale) return json(res, 404, { ok: false, error: 'not_found' });
      if (Object.prototype.hasOwnProperty.call(body, 'paid')) {
        sale.paid = Boolean(body.paid);
        sale.paidAt = sale.paid ? new Date().toISOString() : '';
      }
      if (Object.prototype.hasOwnProperty.call(body, 'delivered')) {
        sale.delivered = Boolean(body.delivered);
        sale.deliveredAt = sale.delivered ? new Date().toISOString() : '';
      }
      if (Object.prototype.hasOwnProperty.call(body, 'deliveryDetails')) {
        sale.deliveryDetails = cleanText(body.deliveryDetails, 240);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'total')) {
        sale.total = Math.max(0, Number(body.total || 0));
        sale.unitPrice = Math.max(0, Number(sale.quantity || 1) ? sale.total / Number(sale.quantity || 1) : sale.total);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'unitCost')) {
        sale.unitCost = Math.max(0, Number(body.unitCost || 0));
      }
      sale.cost = Math.max(0, Number(sale.unitCost ?? getUnitCost(sale.model)) * Number(sale.quantity || 1));
      sale.netProfit = Number(sale.total || 0) - sale.cost;
      await setSales(sales);
      return json(res, 200, { ok: true, sale });
    }

    if (req.method === 'DELETE') {
      if (!isAdminRequest(req)) return json(res, 401, { ok: false, error: 'unauthorized' });
      const url = new URL(req.url, 'https://onmypeak.vercel.app');
      const body = await readBody(req);
      const id = cleanText(body.id || url.searchParams.get('id'));
      if (!id) return json(res, 400, { ok: false, error: 'missing_id' });
      const sales = await getSales();
      const next = sales.filter(item => item.id !== id);
      await setSales(next);
      return json(res, 200, { ok: true, deleted: sales.length - next.length });
    }

    return json(res, 405, { ok: false, error: 'method_not_allowed' });
  } catch (error) {
    return json(res, 500, { ok: false, error: 'sales_api_error' });
  }
};
