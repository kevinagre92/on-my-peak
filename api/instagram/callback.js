const TOKEN_ENDPOINT = 'https://api.instagram.com/oauth/access_token';
const LONG_LIVED_ENDPOINT = 'https://graph.instagram.com/access_token';
const REFRESH_ENDPOINT = 'https://graph.instagram.com/refresh_access_token';
const DEFAULT_REDIRECT_URI = 'https://on-my-peak-peach.vercel.app/api/instagram/callback';

function html(response, status, body) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  return response.status(status).send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Instagram conectado · OMP</title>
  <style>
    body{margin:0;background:#090909;color:#f5f5f5;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;display:grid;min-height:100vh;place-items:center;padding:24px}
    main{max-width:760px;border:1px solid rgba(255,255,255,.18);padding:28px;background:rgba(255,255,255,.04)}
    h1{font-size:clamp(28px,6vw,54px);line-height:.95;margin:0 0 18px;text-transform:uppercase}
    p{color:#cfcfcf;line-height:1.55}
    code,textarea{width:100%;box-sizing:border-box;border:1px solid rgba(255,255,255,.18);background:#111;color:#ff5a1f;padding:12px;font:13px ui-monospace,SFMono-Regular,Menlo,monospace}
    textarea{min-height:180px;resize:vertical}
    .ok{color:#5dff9a}.warn{color:#ffb25d}
  </style>
</head>
<body><main>${body}</main></body></html>`);
}

async function exchangeCode({ code, request }) {
  const clientId = process.env.INSTAGRAM_APP_ID || process.env.INSTAGRAM_CLIENT_ID;
  const clientSecret = process.env.INSTAGRAM_APP_SECRET || process.env.INSTAGRAM_CLIENT_SECRET;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI || DEFAULT_REDIRECT_URI;

  if (!clientId || !clientSecret) {
    return {
      missingConfig: true,
      code,
      redirectUri,
      requiredEnv: ['INSTAGRAM_APP_ID', 'INSTAGRAM_APP_SECRET', 'INSTAGRAM_REDIRECT_URI']
    };
  }

  const form = new URLSearchParams();
  form.set('client_id', clientId);
  form.set('client_secret', clientSecret);
  form.set('grant_type', 'authorization_code');
  form.set('redirect_uri', redirectUri);
  form.set('code', code);

  const shortResponse = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: form
  });
  const shortPayload = await shortResponse.json();
  if (!shortResponse.ok) {
    return { exchangeFailed: true, status: shortResponse.status, payload: shortPayload };
  }

  const longUrl = new URL(LONG_LIVED_ENDPOINT);
  longUrl.searchParams.set('grant_type', 'ig_exchange_token');
  longUrl.searchParams.set('client_secret', clientSecret);
  longUrl.searchParams.set('access_token', shortPayload.access_token);

  const longResponse = await fetch(longUrl);
  const longPayload = await longResponse.json();
  if (!longResponse.ok) {
    return { exchangeFailed: true, status: longResponse.status, payload: longPayload };
  }

  const refreshUrl = new URL(REFRESH_ENDPOINT);
  refreshUrl.searchParams.set('grant_type', 'ig_refresh_token');
  refreshUrl.searchParams.set('access_token', longPayload.access_token);

  return {
    success: true,
    token: longPayload.access_token,
    expiresIn: longPayload.expires_in,
    tokenType: longPayload.token_type,
    refreshUrl: refreshUrl.toString()
  };
}

module.exports = async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).end('Method not allowed');
  }

  const host = request.headers.host || 'localhost';
  const requestUrl = new URL(request.url, `https://${host}`);
  const error = requestUrl.searchParams.get('error') || '';
  const errorReason = requestUrl.searchParams.get('error_reason') || '';
  const errorDescription = requestUrl.searchParams.get('error_description') || '';
  const code = requestUrl.searchParams.get('code') || '';

  if (error) {
    return html(response, 400, `
      <h1>No autorizado</h1>
      <p class="warn">${error} ${errorReason}</p>
      <p>${errorDescription || 'Instagram no completó la autorización.'}</p>
    `);
  }

  if (!code) {
    return html(response, 400, `
      <h1>Falta el code</h1>
      <p>Instagram no ha devuelto un código de autorización.</p>
    `);
  }

  try {
    const result = await exchangeCode({ code, request });

    if (result.missingConfig) {
      return html(response, 200, `
        <h1>Code recibido</h1>
        <p class="warn">Faltan variables privadas en Vercel para convertirlo automáticamente en token.</p>
        <p>Guarda estas variables y vuelve a autorizar:</p>
        <code>${result.requiredEnv.join('<br>')}</code>
        <p>Code temporal:</p>
        <textarea readonly>${result.code}</textarea>
      `);
    }

    if (result.exchangeFailed) {
      return html(response, 502, `
        <h1>Error al cambiar token</h1>
        <p class="warn">Instagram respondió con estado ${result.status}.</p>
        <textarea readonly>${JSON.stringify(result.payload, null, 2)}</textarea>
      `);
    }

    return html(response, 200, `
      <h1><span class="ok">Instagram conectado</span></h1>
      <p>Copia este token y guárdalo en Vercel como <code>INSTAGRAM_ACCESS_TOKEN</code>.</p>
      <textarea readonly>${result.token}</textarea>
      <p>Duración aproximada: ${Math.round((result.expiresIn || 0) / 86400)} días.</p>
      <p>También guarda <code>INSTAGRAM_PROVIDER=instagram</code>.</p>
    `);
  } catch (callbackError) {
    return html(response, 500, `
      <h1>Error interno</h1>
      <p>${callbackError.message}</p>
    `);
  }
};
