const ALLOWED_CODES = new Set([
  'JOELO10',
  'CABELLO10',
  'LUCHINI10',
  'KEVINAGRE10',
  '92810',
  'CLAUDIA10',
  'QUEROLI10',
  'GALVAN10',
  'SALAN10'
]);

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(payload));
}

async function readJsonBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  return JSON.parse(raw);
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { ok: false, error: 'method_not_allowed' });
  }

  let payload;
  try {
    payload = await readJsonBody(req);
  } catch (error) {
    return sendJson(res, 400, { ok: false, error: 'invalid_json' });
  }

  const code = String(payload.code || '').trim().toUpperCase();
  if (!ALLOWED_CODES.has(code)) {
    return sendJson(res, 400, { ok: false, error: 'invalid_code' });
  }

  const event = {
    code,
    confirmedAt: payload.confirmedAt || new Date().toISOString(),
    total: String(payload.total || ''),
    source: String(payload.source || ''),
    userAgent: req.headers['user-agent'] || ''
  };

  const webhookUrl = process.env.DISCOUNT_USAGE_WEBHOOK_URL;
  if (!webhookUrl) {
    return sendJson(res, 202, {
      ok: true,
      stored: false,
      reason: 'missing_discount_usage_webhook_url'
    });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(event)
    });

    if (!response.ok) {
      return sendJson(res, 502, { ok: false, error: 'webhook_failed' });
    }

    return sendJson(res, 200, { ok: true, stored: true });
  } catch (error) {
    return sendJson(res, 502, { ok: false, error: 'webhook_unreachable' });
  }
};
