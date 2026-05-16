const DEFAULT_FIELDS = [
  'id',
  'caption',
  'media_type',
  'media_url',
  'permalink',
  'thumbnail_url',
  'timestamp',
  'username'
].join(',');

function buildInstagramUrl() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) return null;

  const base = process.env.INSTAGRAM_API_BASE || 'https://graph.instagram.com';
  const version = process.env.INSTAGRAM_GRAPH_VERSION || 'v21.0';
  const userId = process.env.INSTAGRAM_USER_ID || 'me';
  const url = new URL(`${base.replace(/\/$/, '')}/${version}/${userId}/media`);

  url.searchParams.set('fields', process.env.INSTAGRAM_FIELDS || DEFAULT_FIELDS);
  url.searchParams.set('limit', process.env.INSTAGRAM_LIMIT || '9');
  url.searchParams.set('access_token', accessToken);

  return url;
}

function normalizePost(post) {
  const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url;

  return {
    id: post.id,
    caption: post.caption || '',
    media_type: post.media_type,
    media_url: imageUrl || post.media_url || '',
    thumbnail_url: post.thumbnail_url || '',
    permalink: post.permalink || 'https://instagram.com/onmypeak_',
    timestamp: post.timestamp || '',
    username: post.username || 'onmypeak_'
  };
}

module.exports = async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const instagramUrl = buildInstagramUrl();
  if (!instagramUrl) {
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return response.status(503).json({
      error: 'Instagram feed is not configured',
      posts: []
    });
  }

  try {
    const instagramResponse = await fetch(instagramUrl, {
      headers: { Accept: 'application/json' }
    });
    const payload = await instagramResponse.json();

    if (!instagramResponse.ok) {
      return response.status(instagramResponse.status).json({
        error: 'Instagram API request failed',
        details: payload?.error?.message || 'Unknown Instagram API error',
        posts: []
      });
    }

    const posts = (payload.data || [])
      .map(normalizePost)
      .filter(post => post.media_url)
      .slice(0, 9);

    response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    return response.status(200).json({ posts });
  } catch (error) {
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return response.status(500).json({
      error: 'Instagram feed unavailable',
      posts: []
    });
  }
};
