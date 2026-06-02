const DEFAULT_REDIRECT_URI = 'https://onmypeak.vercel.app/api/instagram/callback';
const DEFAULT_SCOPE = 'instagram_business_basic';

function html(response, status, body) {
  response.setHeader('Content-Type', 'text/html; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  return response.status(status).send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Conectar Instagram · OMP</title>
  <style>
    body{margin:0;background:#090909;color:#f5f5f5;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;display:grid;min-height:100vh;place-items:center;padding:24px}
    main{max-width:760px;border:1px solid rgba(255,255,255,.18);padding:28px;background:rgba(255,255,255,.04)}
    h1{font-size:clamp(28px,6vw,54px);line-height:.95;margin:0 0 18px;text-transform:uppercase}
    p{color:#cfcfcf;line-height:1.55}
    code{display:block;border:1px solid rgba(255,255,255,.18);background:#111;color:#ff5a1f;padding:12px;font:13px ui-monospace,SFMono-Regular,Menlo,monospace}
    .warn{color:#ffb25d}
  </style>
</head>
<body><main>${body}</main></body></html>`);
}

module.exports = async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).end('Method not allowed');
  }

  const clientId = process.env.INSTAGRAM_APP_ID || process.env.INSTAGRAM_CLIENT_ID;
  const redirectUri = process.env.INSTAGRAM_REDIRECT_URI || DEFAULT_REDIRECT_URI;
  const scope = process.env.INSTAGRAM_AUTH_SCOPE || DEFAULT_SCOPE;

  if (!clientId) {
    return html(response, 200, `
      <h1>Falta configurar Instagram</h1>
      <p class="warn">No encuentro <code>INSTAGRAM_APP_ID</code> o <code>INSTAGRAM_CLIENT_ID</code> en Vercel.</p>
      <p>Cuando esté añadido, vuelve a abrir esta ruta:</p>
      <code>https://onmypeak.vercel.app/api/instagram/auth</code>
    `);
  }

  const authUrl = new URL('https://www.instagram.com/oauth/authorize');
  authUrl.searchParams.set('enable_fb_login', '0');
  authUrl.searchParams.set('force_authentication', '1');
  authUrl.searchParams.set('client_id', clientId);
  authUrl.searchParams.set('redirect_uri', redirectUri);
  authUrl.searchParams.set('response_type', 'code');
  authUrl.searchParams.set('scope', scope);

  return response.redirect(302, authUrl.toString());
};
