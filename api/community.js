const DEFAULT_COMMUNITY_JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019e6e3c-e6af-7a24-9856-d50147b4b072';
const LEGACY_COMMUNITY_JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019e597d-5bb5-757e-b876-18984e01bc7c';
const COMMUNITY_KEY = 'omp:community:v1';
const MAX_SUBMISSIONS = 120;
const MAX_LEADS = 1000;
const MAX_PHOTO_LENGTH = 3600000;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-OMP-Admin-Key');
  res.end(JSON.stringify(body));
}

function getStoreUrls() {
  return [...new Set([process.env.COMMUNITY_JSONBLOB_URL, DEFAULT_COMMUNITY_JSONBLOB_URL, LEGACY_COMMUNITY_JSONBLOB_URL].filter(Boolean))];
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
  if (!response.ok) throw new Error(`community_kv_${response.status}`);
  return response.json();
}

function isAdminRequest(req) {
  const adminKey = process.env.OMP_ERP_ADMIN_KEY || '';
  if (!adminKey) return false;
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

function cleanText(value, max = 140) {
  return String(value || '').trim().slice(0, max);
}

function cleanPhoto(value) {
  const photo = String(value || '');
  if (!photo.startsWith('data:image/')) return '';
  if (photo.length > MAX_PHOTO_LENGTH) return '';
  return photo;
}

function normalizeStore(data) {
  return {
    updatedAt: cleanText(data?.updatedAt) || new Date().toISOString(),
    submissions: Array.isArray(data?.submissions) ? data.submissions : [],
    leads: Array.isArray(data?.leads) ? data.leads : []
  };
}

function mergeIntoStore(target, source) {
  const store = normalizeStore(source);
  const seenSubmissions = new Set(target.submissions.map(item => item.id).filter(Boolean));
  const seenLeads = new Set(target.leads.map(item => item.id).filter(Boolean));
  store.submissions.forEach(item => {
    if (!item?.id || seenSubmissions.has(item.id)) return;
    seenSubmissions.add(item.id);
    target.submissions.push(item);
  });
  store.leads.forEach(item => {
    if (!item?.id || seenLeads.has(item.id)) return;
    seenLeads.add(item.id);
    target.leads.push(item);
  });
  if (store.updatedAt && store.updatedAt > target.updatedAt) target.updatedAt = store.updatedAt;
}

async function readStore() {
  const merged = normalizeStore({});
  let readAny = false;
  try {
    const data = await kvFetch(`/get/${encodeURIComponent(COMMUNITY_KEY)}`);
    const value = data?.result;
    if (value) {
      const parsed = typeof value === 'string' ? JSON.parse(value) : value;
      mergeIntoStore(merged, parsed);
      readAny = true;
    }
  } catch (error) {
    // Continue with JSONBlob fallbacks.
  }
  for (const url of getStoreUrls()) {
    try {
      const response = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!response.ok) {
        continue;
      }
      const store = normalizeStore(await response.json());
      readAny = true;
      mergeIntoStore(merged, store);
    } catch (error) {
      // Keep trying the remaining stores so older approved photos are not hidden by an empty store.
    }
  }
  merged.submissions.sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
  merged.leads.sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
  return readAny ? merged : normalizeStore({});
}

async function writeStore(store) {
  const payload = normalizeStore({
    ...store,
    updatedAt: new Date().toISOString(),
    submissions: store.submissions.slice(0, MAX_SUBMISSIONS),
    leads: store.leads.slice(0, MAX_LEADS)
  });
  let wroteAny = false;
  try {
    await kvFetch(`/set/${encodeURIComponent(COMMUNITY_KEY)}`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    wroteAny = true;
  } catch (error) {
    // Continue with JSONBlob fallback sync.
  }
  for (const url of getStoreUrls()) {
    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        continue;
      }
      wroteAny = true;
    } catch (error) {
      // Best effort sync across all configured stores.
    }
  }
  if (wroteAny) return payload;
  throw new Error('community_store_write_failed');
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') return json(res, 204, {});

  try {
    if (req.method === 'GET') {
      const store = await readStore();
      if (!isAdminRequest(req)) {
        return json(res, 200, {
          ok: true,
          submissions: store.submissions
            .filter(item => item.approved)
            .map(item => ({
              id: item.id,
              name: item.name,
              handle: item.handle,
              photo: item.photo,
              approvedAt: item.approvedAt
            }))
        });
      }
      return json(res, 200, { ok: true, ...store });
    }

    if (req.method === 'POST') {
      const body = await readBody(req);
      const type = cleanText(body.type, 30);
      const store = await readStore();

      if (type === 'lead') {
        const lead = {
          id: `lead-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          createdAt: new Date().toISOString(),
          name: cleanText(body.name),
          email: cleanText(body.email, 160),
          phone: cleanText(body.phone, 80),
          channels: Array.isArray(body.channels) ? body.channels.map(channel => cleanText(channel, 20)).filter(Boolean).slice(0, 2) : []
        };
        if (!lead.name || (!lead.email && !lead.phone)) {
          return json(res, 400, { ok: false, error: 'missing_lead_data' });
        }
        store.leads = [lead, ...store.leads].slice(0, MAX_LEADS);
        await writeStore(store);
        return json(res, 200, { ok: true, lead: { id: lead.id } });
      }

      if (type === 'submission') {
        const submission = {
          id: `community-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          createdAt: new Date().toISOString(),
          name: cleanText(body.name),
          handle: cleanText(body.handle || body.name, 80),
          photo: cleanPhoto(body.photo),
          approved: false,
          approvedAt: ''
        };
        if (!submission.name || !submission.photo) {
          return json(res, 400, { ok: false, error: 'missing_submission_data' });
        }
        store.submissions = [submission, ...store.submissions].slice(0, MAX_SUBMISSIONS);
        await writeStore(store);
        return json(res, 200, { ok: true, submission: { id: submission.id, approved: false } });
      }

      return json(res, 400, { ok: false, error: 'unknown_type' });
    }

    if (req.method === 'PATCH') {
      if (!isAdminRequest(req)) return json(res, 401, { ok: false, error: 'unauthorized' });
      const body = await readBody(req);
      const id = cleanText(body.id);
      const store = await readStore();
      const submission = store.submissions.find(item => item.id === id);
      if (!submission) return json(res, 404, { ok: false, error: 'not_found' });
      submission.approved = Boolean(body.approved);
      submission.approvedAt = submission.approved ? new Date().toISOString() : '';
      await writeStore(store);
      return json(res, 200, { ok: true, submission });
    }

    if (req.method === 'DELETE') {
      if (!isAdminRequest(req)) return json(res, 401, { ok: false, error: 'unauthorized' });
      const url = new URL(req.url, 'https://onmypeak.vercel.app');
      const body = await readBody(req);
      const id = cleanText(body.id || url.searchParams.get('id'));
      const store = await readStore();
      const before = store.submissions.length;
      store.submissions = store.submissions.filter(item => item.id !== id);
      await writeStore(store);
      return json(res, 200, { ok: true, deleted: before - store.submissions.length });
    }

    return json(res, 405, { ok: false, error: 'method_not_allowed' });
  } catch (error) {
    return json(res, 500, { ok: false, error: 'community_api_error' });
  }
};
