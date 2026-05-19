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

const EXTENDED_FIELDS = `${DEFAULT_FIELDS},children{media_type,media_url,thumbnail_url,permalink}`;

const FALLBACK_IMAGES = [
  '/assets/collection/drop-current/thumbs/drop-current-01.jpg',
  '/assets/collection/drop-current/thumbs/drop-current-02.jpg',
  '/assets/collection/drop-current/thumbs/drop-current-03.jpg',
  '/assets/collection/drop-current/thumbs/drop-current-04.jpg',
  '/assets/collection/drop-current/thumbs/drop-current-05.jpg',
  '/assets/collection/drop-current/thumbs/drop-current-06.jpg',
  '/assets/collection/drop-current/thumbs/drop-current-07.jpg',
  '/assets/collection/drop-current/thumbs/drop-current-08.jpg',
  '/assets/collection/drop-current/thumbs/drop-current-09.jpg'
];

const ALLOWED_API_HOSTS = new Set([
  'graph.instagram.com',
  'graph.facebook.com'
]);

function isAllowedApiUrl(url) {
  return url.protocol === 'https:' && ALLOWED_API_HOSTS.has(url.hostname);
}

function buildInstagramUrlCandidates() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) return [];

  if (process.env.INSTAGRAM_MEDIA_URL) {
    const customUrl = new URL(process.env.INSTAGRAM_MEDIA_URL);
    if (!isAllowedApiUrl(customUrl)) return [];
    customUrl.searchParams.set('access_token', accessToken);
    return [customUrl];
  }

  const provider = (process.env.INSTAGRAM_PROVIDER || '').toLowerCase();
  const useInstagramLogin = provider === 'instagram' || (!provider && !process.env.INSTAGRAM_USER_ID);
  const base = process.env.INSTAGRAM_API_BASE || (useInstagramLogin ? 'https://graph.instagram.com' : 'https://graph.facebook.com');
  const version = process.env.INSTAGRAM_GRAPH_VERSION || 'v21.0';
  const userId = process.env.INSTAGRAM_USER_ID || 'me';
  const fields = process.env.INSTAGRAM_FIELDS || DEFAULT_FIELDS;
  const limit = process.env.INSTAGRAM_LIMIT || '9';
  const urls = [
    new URL(`${base.replace(/\/$/, '')}/${version}/${userId}/media`)
  ];

  if (useInstagramLogin) {
    urls.push(new URL(`${base.replace(/\/$/, '')}/${userId}/media`));
  } else if (!process.env.INSTAGRAM_FIELDS) {
    const extendedUrl = new URL(`${base.replace(/\/$/, '')}/${version}/${userId}/media`);
    extendedUrl.searchParams.set('fields', EXTENDED_FIELDS);
    extendedUrl.searchParams.set('limit', limit);
    extendedUrl.searchParams.set('access_token', accessToken);
    urls.push(extendedUrl);
  }

  return urls
    .filter(isAllowedApiUrl)
    .map((url) => {
      if (!url.searchParams.has('fields')) url.searchParams.set('fields', fields);
      if (!url.searchParams.has('limit')) url.searchParams.set('limit', limit);
      if (!url.searchParams.has('access_token')) url.searchParams.set('access_token', accessToken);
      return url;
    });
}

function buildInstagramDiagnosticUrls() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!accessToken) return [];

  const provider = (process.env.INSTAGRAM_PROVIDER || '').toLowerCase();
  const useInstagramLogin = provider === 'instagram' || (!provider && !process.env.INSTAGRAM_USER_ID);
  const base = process.env.INSTAGRAM_API_BASE || (useInstagramLogin ? 'https://graph.instagram.com' : 'https://graph.facebook.com');
  const version = process.env.INSTAGRAM_GRAPH_VERSION || 'v21.0';
  const userId = process.env.INSTAGRAM_USER_ID || 'me';
  const profileUrl = new URL(`${base.replace(/\/$/, '')}/${useInstagramLogin ? '' : `${version}/`}${userId}`);
  profileUrl.searchParams.set('fields', useInstagramLogin ? 'id,username,account_type,media_count' : 'id,username');
  profileUrl.searchParams.set('access_token', accessToken);
  return isAllowedApiUrl(profileUrl) ? [profileUrl] : [];
}

function normalizePost(post, index = 0) {
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
    fallback_image: FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
    permalink: post.permalink || firstCarouselItem?.permalink || 'https://instagram.com/onmypeak_',
    timestamp: post.timestamp || '',
    username: post.username || 'onmypeak_'
  };
}

function fallbackPosts() {
  return FALLBACK_IMAGES.map((image, index) => ({
    id: `fallback-${index + 1}`,
    caption: 'Post reciente de On My Peak',
    media_type: 'IMAGE',
    media_url: image,
    thumbnail_url: '',
    fallback_image: image,
    permalink: 'https://instagram.com/onmypeak_',
    timestamp: '',
    username: 'onmypeak_'
  }));
}

function redactInstagramUrl(url) {
  const safeUrl = new URL(url.toString());
  if (safeUrl.searchParams.has('access_token')) {
    safeUrl.searchParams.set('access_token', '[redacted]');
  }
  return safeUrl.toString();
}

module.exports = async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const instagramUrls = buildInstagramUrlCandidates();
  if (!instagramUrls.length) {
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return response.status(200).json({
      error: 'Instagram feed is not configured',
      configured: false,
      requiredEnv: ['INSTAGRAM_ACCESS_TOKEN', 'INSTAGRAM_PROVIDER=instagram'],
      source: 'fallback',
      posts: fallbackPosts()
    });
  }

  try {
    let payload = null;
    let instagramResponse = null;
    const diagnostics = [];

    for (const instagramUrl of instagramUrls) {
      instagramResponse = await fetch(instagramUrl, {
        headers: { Accept: 'application/json' }
      });
      payload = await instagramResponse.json();
      diagnostics.push({
        url: redactInstagramUrl(instagramUrl),
        status: instagramResponse.status,
        ok: instagramResponse.ok,
        error: payload?.error
          ? {
              message: payload.error.message,
              type: payload.error.type,
              code: payload.error.code,
              error_subcode: payload.error.error_subcode,
              fbtrace_id: payload.error.fbtrace_id
            }
          : null
      });
      if (instagramResponse.ok) break;
    }

    if (!instagramResponse?.ok) {
      if (request.query?.debug === '1') {
        for (const diagnosticUrl of buildInstagramDiagnosticUrls()) {
          const diagnosticResponse = await fetch(diagnosticUrl, {
            headers: { Accept: 'application/json' }
          });
          const diagnosticPayload = await diagnosticResponse.json();
          diagnostics.push({
            url: redactInstagramUrl(diagnosticUrl),
            status: diagnosticResponse.status,
            ok: diagnosticResponse.ok,
            profile: diagnosticResponse.ok
              ? {
                  id: diagnosticPayload.id,
                  username: diagnosticPayload.username,
                  account_type: diagnosticPayload.account_type,
                  media_count: diagnosticPayload.media_count
                }
              : null,
            error: diagnosticPayload?.error
              ? {
                  message: diagnosticPayload.error.message,
                  type: diagnosticPayload.error.type,
                  code: diagnosticPayload.error.code,
                  error_subcode: diagnosticPayload.error.error_subcode,
                  fbtrace_id: diagnosticPayload.error.fbtrace_id
                }
              : null
          });
        }
      }
      response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
      return response.status(200).json({
        error: 'Instagram API request failed',
        configured: true,
        source: 'fallback',
        diagnostics: request.query?.debug === '1' ? diagnostics : undefined,
        posts: fallbackPosts()
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
    return response.status(200).json({
      error: 'Instagram feed unavailable',
      configured: true,
      source: 'fallback',
      diagnostics: request.query?.debug === '1'
        ? [{ message: error.message, name: error.name }]
        : undefined,
      posts: fallbackPosts()
    });
  }
};
