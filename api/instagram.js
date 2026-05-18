const DEFAULT_FIELDS = [
  'id',
  'caption',
  'media_type',
  'media_url',
  'permalink',
  'thumbnail_url',
  'timestamp',
  'username',
  'children{media_type,media_url,thumbnail_url,permalink}'
].join(',');

function buildInstagramUrl() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) return null;

  if (process.env.INSTAGRAM_MEDIA_URL) {
    const customUrl = new URL(process.env.INSTAGRAM_MEDIA_URL);
    customUrl.searchParams.set('access_token', accessToken);
    return customUrl;
  }

  const provider = (process.env.INSTAGRAM_PROVIDER || '').toLowerCase();
  const useInstagramLogin = provider === 'instagram' || (!provider && !process.env.INSTAGRAM_USER_ID);
  const base = process.env.INSTAGRAM_API_BASE || (useInstagramLogin ? 'https://graph.instagram.com' : 'https://graph.facebook.com');
  const version = process.env.INSTAGRAM_GRAPH_VERSION || 'v21.0';
  const userId = process.env.INSTAGRAM_USER_ID || 'me';
  const url = new URL(`${base.replace(/\/$/, '')}/${version}/${userId}/media`);

  url.searchParams.set('fields', process.env.INSTAGRAM_FIELDS || DEFAULT_FIELDS);
  url.searchParams.set('limit', process.env.INSTAGRAM_LIMIT || '9');
  url.searchParams.set('access_token', accessToken);

  return url;
}

function normalizePost(post) {
  const firstCarouselItem = post.children?.data?.find(child => child.media_url || child.thumbnail_url);
  const imageUrl =
    post.media_type === 'VIDEO'
      ? post.thumbnail_url || post.media_url
      : post.media_url || firstCarouselItem?.media_url || firstCarouselItem?.thumbnail_url;

  return {
    id: post.id,
    caption: post.caption || '',
    media_type: post.media_type || firstCarouselItem?.media_type || 'IMAGE',
    media_url: imageUrl || post.media_url || '',
    thumbnail_url: post.thumbnail_url || '',
    permalink: post.permalink || firstCarouselItem?.permalink || 'https://instagram.com/onmypeak_',
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
      configured: false,
      requiredEnv: ['INSTAGRAM_ACCESS_TOKEN', 'INSTAGRAM_PROVIDER=instagram'],
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
        configured: true,
        posts: []
      });
    }

    const posts = (payload.data || [])
      .map(normalizePost)
      .filter(post => post.media_url)
      .slice(0, 9);

    response.setHeader('Cache-Control', 's-maxage=900, stale-while-revalidate=3600');
    return response.status(200).json({
      configured: true,
      source: 'instagram',
      posts
    });
  } catch (error) {
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return response.status(500).json({
      error: 'Instagram feed unavailable',
      configured: true,
      posts: []
    });
  }
};
