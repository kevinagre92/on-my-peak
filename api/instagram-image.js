const ALLOWED_HOST = /(^|\.)cdninstagram\.com$/i;
const MAX_URL_LENGTH = 4096;

function getTargetUrl(request) {
  const host = request.headers.host || 'localhost';
  const requestUrl = new URL(request.url, `https://${host}`);
  const rawUrl = requestUrl.searchParams.get('url') || '';

  if (!rawUrl || rawUrl.length > MAX_URL_LENGTH) return null;

  try {
    const target = new URL(rawUrl);
    if (target.protocol !== 'https:') return null;
    if (!ALLOWED_HOST.test(target.hostname)) return null;
    return target;
  } catch (error) {
    return null;
  }
}

module.exports = async function handler(request, response) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.setHeader('Allow', 'GET, HEAD');
    return response.status(405).end('Method not allowed');
  }

  const target = getTargetUrl(request);
  if (!target) {
    return response.status(400).end('Invalid image URL');
  }

  try {
    const instagramResponse = await fetch(target, {
      headers: {
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'User-Agent': 'Mozilla/5.0 OnMyPeak/1.0'
      }
    });

    if (!instagramResponse.ok) {
      return response.status(instagramResponse.status).end('Image unavailable');
    }

    const contentType = instagramResponse.headers.get('content-type') || '';
    if (!contentType.toLowerCase().startsWith('image/')) {
      return response.status(415).end('Unsupported media type');
    }

    const imageBuffer = Buffer.from(await instagramResponse.arrayBuffer());
    response.setHeader('Content-Type', contentType);
    response.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Content-Length', imageBuffer.length);

    if (request.method === 'HEAD') {
      return response.status(200).end();
    }

    return response.status(200).send(imageBuffer);
  } catch (error) {
    return response.status(502).end('Image proxy unavailable');
  }
};
