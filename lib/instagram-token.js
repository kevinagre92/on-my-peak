const TOKEN_KEY = 'omp:instagram:access-token:v1';
const REFRESH_ENDPOINT = 'https://graph.instagram.com/refresh_access_token';

function getKvConfig() {
  const url = process.env.KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return {
    url: url.replace(/\/$/, ''),
    token
  };
}

async function kvFetch(path, options = {}) {
  const config = getKvConfig();
  if (!config) return null;
  const response = await fetch(`${config.url}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
      ...(options.headers || {})
    }
  });
  if (!response.ok) throw new Error(`instagram_kv_${response.status}`);
  return response.json();
}

function parseKvValue(value) {
  if (!value) return null;
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

async function getStoredInstagramToken() {
  try {
    const payload = await kvFetch(`/get/${encodeURIComponent(TOKEN_KEY)}`);
    const value = parseKvValue(payload?.result);
    if (typeof value === 'string') return value;
    return value?.token || '';
  } catch (error) {
    return '';
  }
}

async function saveInstagramToken(token, meta = {}) {
  const cleanToken = String(token || '').trim();
  if (!cleanToken || !getKvConfig()) return false;
  await kvFetch(`/set/${encodeURIComponent(TOKEN_KEY)}`, {
    method: 'POST',
    body: JSON.stringify({
      token: cleanToken,
      savedAt: new Date().toISOString(),
      ...meta
    })
  });
  return true;
}

async function getInstagramAccessToken() {
  return (await getStoredInstagramToken()) || process.env.INSTAGRAM_ACCESS_TOKEN || '';
}

async function refreshInstagramToken(token) {
  const currentToken = String(token || '').trim();
  if (!currentToken || !getKvConfig()) {
    return { ok: false, reason: 'missing_token_or_store' };
  }

  const refreshUrl = new URL(REFRESH_ENDPOINT);
  refreshUrl.searchParams.set('grant_type', 'ig_refresh_token');
  refreshUrl.searchParams.set('access_token', currentToken);

  const response = await fetch(refreshUrl);
  const payload = await response.json();
  if (!response.ok || !payload.access_token) {
    return { ok: false, status: response.status, payload };
  }

  await saveInstagramToken(payload.access_token, {
    refreshedAt: new Date().toISOString(),
    expiresIn: payload.expires_in,
    tokenType: payload.token_type || ''
  });

  return { ok: true, token: payload.access_token, expiresIn: payload.expires_in };
}

module.exports = {
  getInstagramAccessToken,
  refreshInstagramToken,
  saveInstagramToken
};
