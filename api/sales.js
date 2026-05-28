const SALES_KEY = 'omp:sales:v1';
const MAX_SALES = 1000;
const DEFAULT_JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019e63bb-dfce-78dd-b5a6-f27c26b8e4a3';
const LEGACY_JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019e545a-dadf-7137-a85d-bebff86313fe';
const SEED_SALES_ROWS = [
  ['DROP 01/XX', 1, 'Dominica', 'Rosa', 'S', 'Yamiley', 18],
  ['DROP 01/XX', 2, 'Bull', 'Verde mist', 'L', 'Jonay Granatti', 18],
  ['DROP 01/XX', 3, 'Bull', 'Coral', 'M', 'Esther Lanza', 15],
  ['DROP 01/XX', 4, 'Dominica', 'Negro', 'S', 'Carla Xabi', 12],
  ['DROP 01/XX', 5, 'Chow', 'Negra', 'L', 'Xabi', 12],
  ['DROP 01/XX', 6, 'Bull', 'Verde mist', 'M', 'Paula Alayon', 0],
  ['DROP 01/XX', 7, 'Dominica', 'Azul lavado', 'M', 'Macías', 20],
  ['DROP 01/XX', 8, 'Chow', 'Negra', 'L', 'Omar Gonzalez', 20],
  ['DROP 01/XX', 9, 'Chow', 'Negra', 'M', 'Carlos Santana', 20],
  ['DROP 01/XX', 10, 'Bull', 'Verde mist', 'L', 'Lucas Soto', 18],
  ['DROP 01/XX', 11, 'Bull', 'Azul Zen', 'L', 'Lucas Soto', 18],
  ['DROP 01/XX', 12, 'Bull', 'Coral', 'M', 'Raquel cuñada', 15],
  ['DROP 01/XX', 13, 'Chow', 'Gris', 'M', 'Marquitos', 15],
  ['DROP 01/XX', 14, 'Chow', 'Negra', 'L', 'Oliver', 0],
  ['DROP 01/XX', 15, 'Chow', 'Negra', 'L', 'Borja', 0],
  ['DROP 01/XX', 16, 'Chow', 'Blanca', 'XL', 'Juan', 0],
  ['DROP 01/XX', 17, 'Bull', 'Azul Zen', 'M', 'Cintia Quintana', 20],
  ['DROP 01/XX', 18, 'Chow', 'Negro', 'M', 'Omar olí', 15],
  ['DROP 01/XX', 19, 'Bull', 'Verde mist', 'XL', 'Parker', 0],
  ['DROP 01/XX', 20, 'Bull', 'Jade', 'M', 'Airam M', 20],
  ['DROP 01/XX', 21, 'Dominica', 'Rosa lady fluor', 'S', 'Airam M', 20],
  ['DROP 01/XX', 22, 'Bull', 'Jade', 'M', 'Paula Artiles', 20],
  ['DROP 01/XX', 23, 'Chow', 'Ébano', 'M', 'Christian Santana', 15],
  ['DROP 01/XX', 24, 'Dominica', 'Azul lavado', 'S', 'Pau Mart', 12],
  ['DROP 01/XX', 25, 'Dominica', 'Rosa', 'M', 'Paola', 19.8],
  ['DROP 01/XX', 26, 'Dominica', 'Azul lavado', 'XS', 'Karla', 12],
  ['DROP 01/XX', 27, 'Chow', 'Gris ébano', 'L', 'Tomas Soto', 20],
  ['DROP 01/XX', 28, 'Chow', 'Ébano', 'M', 'Edgar', 12],
  ['DROP 01/XX', 29, 'Otto', 'Gris piedra', 'M', 'Edgar', 20],
  ['DROP 01/XX', 30, 'Otto', 'Gris piedra', 'L', 'Adil', 20],
  ['DROP 01/XX', 31, 'Otto', 'Gris piedra', 'M', 'Borja percu', 30],
  ['DROP 01/XX', 32, 'Otto', 'Negro', 'L', 'Dani (Felix Lanza)', 30],
  ['DROP 01/XX', 33, 'Otto', 'Gris', 'L', 'Dompu', 20],
  ['DROP 01/XX', 34, 'Dominica', 'Azul lavado', 'S', 'Claudia P', 20],
  ['DROP 01/XX', 35, 'Otto', 'Gris', 'L', 'Querol', 0],
  ['DROP 01/XX', 36, 'Bull', 'Azul Zen', 'L', 'Querol', 12],
  ['DROP 01/XX', 37, 'Bull', 'Jade', 'L', 'Kilian', 18],
  ['DROP 01/XX', 38, 'Dominica', 'Azul lavado', 'M', 'Carol', 12],
  ['DROP 01/XX', 39, 'Bull', 'Jade', 'M', 'Marquitos', 18],
  ['DROP 01/XX', 40, 'Chow', 'Ébano', 'S', 'Brenda', 18],
  ['DROP 01/XX', 41, 'Bull', 'Jade', 'M', 'Laura Búho', 18],
  ['DROP 01/XX', 42, 'Bull', 'Jade', 'S', 'Carla Ojeda', 18],
  ['DROP 01/XX', 43, 'Bull', 'Jade', 'M', 'Jaime Falcon', 22, 'WP'],
  ['DROP 01/XX', 44, 'Bull', 'Verde mist', 'L', 'Jaime Falcon', 22, 'WP'],
  ['DROP 01/XX', 45, 'Dominica', 'Azul lavado', 'S', 'Claudia', 0],
  ['DROP 01/XX', 46, 'Bull', 'Jade', 'S', 'Evelyn coach', 18],
  ['DROP 01/XX', 47, 'Chow', 'Ébano', 'XXL', 'Garoli', 12],
  ['DROP 01/XX', 48, 'Dominica', 'Azul lavado', 'M', 'Lucia', 19.8],
  ['DROP 01/XX', 49, 'Otto', 'Azul tormenta', 'M', 'Lucia', 31.5],
  ['DROP 01/XX', 50, 'Dominica', 'Rosa', 'M', 'Laura Mar', 19.8],
  ['DROP 01/XX', 51, 'Chow', 'Ébano', 'S', 'Laura Mar', 19.8],
  ['DROP 01/XX', 52, 'Otto', 'Marino', 'L', 'Paola Báez', 31.5],
  ['DROP 01/XX', 53, 'Dominica', 'Negra', 'M', 'Marta G', 18],
  ['DROP 01/XX', 54, 'Chow', 'Ébano', 'L', 'Eche', 18],
  ['DROP 01/XX', 55, 'Otto', 'Gris', 'M', 'Nati', 30],
  ['DROP 02/XX', 1, 'Chow', 'Ébano', 'M', 'Nati', 18]
];

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
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
  return [...new Set([process.env.SALES_JSONBLOB_URL, DEFAULT_JSONBLOB_URL, LEGACY_JSONBLOB_URL].filter(Boolean))];
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
  let data = null;
  try {
    data = await kvFetch(`/get/${encodeURIComponent(SALES_KEY)}`);
  } catch (error) {
    data = null;
  }
  if (!data) {
    let blob = null;
    try {
      blob = await jsonBlobFetch();
    } catch (error) {
      blob = null;
    }
    if (blob && Array.isArray(blob.sales)) return salesOrSeed(blob.sales);
    return salesOrSeed(memoryStore());
  }
  const value = data.result;
  if (Array.isArray(value)) return salesOrSeed(value);
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? salesOrSeed(parsed) : seedSales();
    } catch (error) {
      return seedSales();
    }
  }
  return seedSales();
}

async function setSales(sales) {
  const normalized = Array.isArray(sales) ? sales.slice(0, MAX_SALES) : [];
  let data = null;
  try {
    data = await kvFetch(`/set/${encodeURIComponent(SALES_KEY)}`, {
      method: 'POST',
      body: JSON.stringify(normalized)
    });
  } catch (error) {
    data = null;
  }
  if (!data) {
    try {
      await jsonBlobFetch({
        method: 'PUT',
        body: JSON.stringify({
          updatedAt: new Date().toISOString(),
          sales: normalized
        })
      });
    } catch (error) {
      // Keep the API responsive even if the external fallback is temporarily down.
    }
    globalThis.__ompSalesStore = normalized;
  }
}

function cleanText(value, max = 120) {
  return String(value || '').trim().slice(0, max);
}

function getUnitCost(model) {
  const normalized = cleanText(model).toLowerCase();
  if (normalized.includes('hoodie') || normalized.includes('hoddie') || normalized.includes('otto')) return 19;
  if (
    normalized.includes('crop') ||
    normalized.includes('oversized') ||
    normalized.includes('dominica') ||
    normalized.includes('bull') ||
    normalized.includes('chow')
  ) return 12;
  return 0;
}

function seedCreatedAt(drop, number) {
  if (drop === 'DROP 02/XX') return '2026-05-28T12:00:00.000Z';
  const base = number <= 40 ? Date.UTC(2026, 4, 20, 18, 0, 0) : Date.UTC(2026, 4, 24, 18, 0, 0);
  return new Date(base + (number * 60000)).toISOString();
}

function seedSales() {
  return SEED_SALES_ROWS.map(([drop, number, model, color, size, client, total, code = '']) => {
    const unitCost = getUnitCost(model);
    const id = `${drop === 'DROP 02/XX' ? 'drop02' : 'drop01'}-${String(number).padStart(3, '0')}`;
    return cleanSale({
      id,
      orderId: id,
      drop,
      createdAt: seedCreatedAt(drop, number),
      model,
      color,
      size,
      quantity: 1,
      client,
      code,
      unitPrice: total,
      unitCost,
      cost: unitCost,
      total,
      netProfit: total - unitCost
    });
  });
}

function salesOrSeed(sales) {
  return Array.isArray(sales) && sales.length ? sales : seedSales();
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
    drop: cleanText(row.drop, 40) || 'DROP 01/XX',
    createdAt: Object.prototype.hasOwnProperty.call(row, 'createdAt') ? cleanText(row.createdAt, 60) : new Date().toISOString(),
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
    manufactured: Boolean(row.manufactured),
    manufacturedAt: cleanText(row.manufacturedAt, 60),
    paid: Boolean(row.paid),
    paidAt: cleanText(row.paidAt, 60),
    delivered: Boolean(row.delivered),
    deliveredAt: cleanText(row.deliveredAt, 60),
    deliveryDetails: cleanText(row.deliveryDetails, 240)
  };
}

function refreshSaleMath(sale) {
  const quantity = Math.max(1, Math.min(99, Number(sale.quantity || 1)));
  sale.quantity = quantity;
  sale.unitCost = Math.max(0, Number(sale.unitCost ?? getUnitCost(sale.model)));
  sale.cost = Math.max(0, sale.unitCost * quantity);
  sale.total = Math.max(0, Number(sale.total || 0));
  sale.unitPrice = Math.max(0, quantity ? sale.total / quantity : sale.total);
  sale.netProfit = sale.total - sale.cost;
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

    if (req.method === 'PUT') {
      if (!isAdminRequest(req)) return json(res, 401, { ok: false, error: 'unauthorized' });
      const body = await readBody(req);
      const incoming = Array.isArray(body.sales) ? body.sales : [];
      const cleaned = incoming.map(cleanSale).filter(sale => sale.model && sale.color && sale.size && sale.client);
      await setSales(cleaned);
      return json(res, 200, { ok: true, replaced: cleaned.length, storage: process.env.KV_REST_API_URL ? 'kv' : 'jsonblob' });
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
      if (Object.prototype.hasOwnProperty.call(body, 'manufactured')) {
        sale.manufactured = Boolean(body.manufactured);
        sale.manufacturedAt = sale.manufactured ? new Date().toISOString() : '';
      }
      if (Object.prototype.hasOwnProperty.call(body, 'delivered')) {
        sale.delivered = Boolean(body.delivered);
        sale.deliveredAt = sale.delivered ? new Date().toISOString() : '';
      }
      if (Object.prototype.hasOwnProperty.call(body, 'deliveryDetails')) {
        sale.deliveryDetails = cleanText(body.deliveryDetails, 240);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'drop')) {
        sale.drop = cleanText(body.drop, 40) || 'DROP 01/XX';
      }
      if (Object.prototype.hasOwnProperty.call(body, 'createdAt')) {
        sale.createdAt = cleanText(body.createdAt, 60);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'model')) {
        sale.model = cleanText(body.model, 80);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'color')) {
        sale.color = cleanText(body.color, 80);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'size')) {
        sale.size = cleanText(body.size, 20);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'quantity')) {
        sale.quantity = Math.max(1, Math.min(99, Number(body.quantity || 1)));
      }
      if (Object.prototype.hasOwnProperty.call(body, 'client')) {
        sale.client = cleanText(body.client, 120);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'phone')) {
        sale.phone = cleanText(body.phone, 60);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'email')) {
        sale.email = cleanText(body.email, 120);
      }
      if (Object.prototype.hasOwnProperty.call(body, 'code')) {
        sale.code = cleanText(body.code, 40).toUpperCase();
      }
      if (Object.prototype.hasOwnProperty.call(body, 'total')) {
        sale.total = Math.max(0, Number(body.total || 0));
      }
      if (Object.prototype.hasOwnProperty.call(body, 'unitCost')) {
        sale.unitCost = Math.max(0, Number(body.unitCost || 0));
      }
      refreshSaleMath(sale);
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
