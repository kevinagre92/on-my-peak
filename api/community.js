const DEFAULT_COMMUNITY_JSONBLOB_URL = 'https://jsonblob.com/api/jsonBlob/019e4ece-6d1c-79b9-9a49-c39ca8da01fb';
const MAX_SUBMISSIONS = 120;
const MAX_LEADS = 1000;
const MAX_PHOTO_LENGTH = 900000;

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-OMP-Admin-Key');
  res.end(JSON.stringify(body));
}

function getStoreUrl() {
  return process.env.COMMUNITY_JSONBLOB_URL || DEFAULT_COMMUNITY_JSONBLOB_URL;
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

async function readStore() {
  const response = await fetch(getStoreUrl(), { headers: { Accept: 'application/json' } });
  if (!response.ok) throw new Error(`community_store_${response.status}`);
  return normalizeStore(await response.json());
}

async function writeStore(store) {
  const payload = normalizeStore({
    ...store,
    updatedAt: new Date().toISOString(),
    submissions: store.submissions.slice(0, MAX_SUBMISSIONS),
    leads: store.leads.slice(0, MAX_LEADS)
  });
  const response = await fetch(getStoreUrl(), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!response.ok) throw new Error(`community_store_put_${response.status}`);
  return payload;
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
