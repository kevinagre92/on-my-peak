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

const {
  getInstagramAccessToken,
  refreshInstagramToken
} = require('../lib/instagram-token');

const EXTENDED_FIELDS = `${DEFAULT_FIELDS},children{media_type,media_url,thumbnail_url,permalink}`;
const DEFAULT_INSTAGRAM_CACHE_URL = 'https://jsonblob.com/api/jsonBlob/019e598c-d6a3-7f97-8af6-0b8cd916447a';

const FALLBACK_IMAGES = [
  '/assets/collection/drop-02/thumbs/drop-02-05.jpg',
  '/assets/collection/drop-02/thumbs/drop-02-04.jpg',
  '/assets/collection/drop-02/thumbs/drop-02-03.jpg',
  '/assets/collection/drop-02/thumbs/drop-02-02.jpg',
  '/assets/collection/drop-02/thumbs/drop-02-01.jpg',
  '/assets/instagram/post-omp1-31.jpg',
  '/assets/instagram/post-omp1-30.jpg',
  '/assets/instagram/post-omp1-29.jpg',
  '/assets/instagram/post-omp1-28.jpg'
];

const ALLOWED_API_HOSTS = new Set([
  'graph.instagram.com',
  'graph.facebook.com'
]);

const INSTAGRAM_USERNAME = 'onmypeak_';
const INSTAGRAM_WEB_PROFILE_URL = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${encodeURIComponent(INSTAGRAM_USERNAME)}`;
const INSTAGRAM_WEB_APP_ID = '936619743392459';

function isAllowedApiUrl(url) {
  return url.protocol === 'https:' && ALLOWED_API_HOSTS.has(url.hostname);
}

function buildInstagramUrlCandidates(accessToken) {
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
  const urls = [];

  if (useInstagramLogin) {
    const extendedUrl = new URL(`${base.replace(/\/$/, '')}/${userId}/media`);
    extendedUrl.searchParams.set('fields', EXTENDED_FIELDS);
    extendedUrl.searchParams.set('limit', limit);
    extendedUrl.searchParams.set('access_token', accessToken);
    urls.push(extendedUrl);
    urls.push(new URL(`${base.replace(/\/$/, '')}/${userId}/media`));
    urls.push(new URL(`${base.replace(/\/$/, '')}/${version}/${userId}/media`));
  } else if (!process.env.INSTAGRAM_FIELDS) {
    urls.push(new URL(`${base.replace(/\/$/, '')}/${version}/${userId}/media`));
    const extendedUrl = new URL(`${base.replace(/\/$/, '')}/${version}/${userId}/media`);
    extendedUrl.searchParams.set('fields', EXTENDED_FIELDS);
    extendedUrl.searchParams.set('limit', limit);
    extendedUrl.searchParams.set('access_token', accessToken);
    urls.push(extendedUrl);
  } else {
    urls.push(new URL(`${base.replace(/\/$/, '')}/${version}/${userId}/media`));
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

function buildInstagramDiagnosticUrls(accessToken) {
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

function normalizeWebPost(edge, index = 0) {
  const node = edge?.node || {};
  const firstChild = node.edge_sidecar_to_children?.edges?.find(child => child?.node?.display_url || child?.node?.thumbnail_src)?.node;
  const captionEdge = node.edge_media_to_caption?.edges?.[0]?.node;
  const shortcode = node.shortcode || '';
  const imageUrl = node.display_url || node.thumbnail_src || firstChild?.display_url || firstChild?.thumbnail_src || '';
  const timestamp = node.taken_at_timestamp
    ? new Date(Number(node.taken_at_timestamp) * 1000).toISOString()
    : '';

  return {
    id: node.id || `instagram-web-${shortcode || index + 1}`,
    caption: captionEdge?.text || '',
    media_type: node.is_video ? 'VIDEO' : 'IMAGE',
    media_url: imageUrl,
    thumbnail_url: node.thumbnail_src || imageUrl,
    fallback_image: FALLBACK_IMAGES[index % FALLBACK_IMAGES.length],
    permalink: shortcode ? `https://www.instagram.com/p/${shortcode}/` : 'https://instagram.com/onmypeak_',
    timestamp,
    username: INSTAGRAM_USERNAME
  };
}

function fallbackPosts() {
  return FALLBACK_IMAGES.map((image, index) => ({
    id: `fallback-${index + 1}`,
    caption: index < 5 ? 'DROP 02/XX de On My Peak' : 'Post reciente de On My Peak',
    media_type: 'IMAGE',
    media_url: image,
    thumbnail_url: '',
    fallback_image: image,
    permalink: 'https://instagram.com/onmypeak_',
    timestamp: '',
    username: 'onmypeak_'
  }));
}

function getInstagramCacheUrl() {
  return process.env.INSTAGRAM_CACHE_JSONBLOB_URL || DEFAULT_INSTAGRAM_CACHE_URL;
}

async function readCachedPosts() {
  const cacheUrl = getInstagramCacheUrl();
  if (!cacheUrl) return [];
  try {
    const response = await fetch(cacheUrl, { headers: { Accept: 'application/json' } });
    if (!response.ok) return [];
    const payload = await response.json();
    return Array.isArray(payload.posts) ? payload.posts.slice(0, 9) : [];
  } catch (error) {
    return [];
  }
}

async function writeCachedPosts(posts) {
  const cacheUrl = getInstagramCacheUrl();
  if (!cacheUrl || !Array.isArray(posts) || posts.length < 1) return;
  try {
    await fetch(cacheUrl, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        updatedAt: new Date().toISOString(),
        posts: posts.slice(0, 9)
      })
    });
  } catch (error) {
    // The public fallback still keeps the feed visible if the cache store is unavailable.
  }
}

async function fetchInstagramWebPosts() {
  try {
    const response = await fetch(INSTAGRAM_WEB_PROFILE_URL, {
      headers: {
        Accept: 'application/json,text/plain,*/*',
        'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
        Referer: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'X-IG-App-ID': INSTAGRAM_WEB_APP_ID
      }
    });
    if (!response.ok) return [];
    const payload = await response.json();
    const edges = payload?.data?.user?.edge_owner_to_timeline_media?.edges || [];
    return sortPostsByDate(edges
      .map(normalizeWebPost)
      .filter(post => post.media_url))
      .slice(0, 9);
  } catch (error) {
    return [];
  }
}

async function resilientPosts(source = 'fallback') {
  const cached = await readCachedPosts();
  if (cached.length) {
    return { source: source === 'fallback' ? 'cached' : source, posts: cached };
  }
  return { source: 'fallback', posts: fallbackPosts() };
}

function ensureNinePosts(posts) {
  const fallback = fallbackPosts();
  const byId = new Set();
  const merged = [...(Array.isArray(posts) ? posts : []), ...fallback].filter((post) => {
    const key = post.id || post.media_url || post.fallback_image;
    if (byId.has(key)) return false;
    byId.add(key);
    return true;
  });
  return merged.slice(0, 9);
}

function sortPostsByDate(posts) {
  return [...(Array.isArray(posts) ? posts : [])].sort((a, b) => {
    const dateA = Date.parse(a.timestamp || '') || 0;
    const dateB = Date.parse(b.timestamp || '') || 0;
    return dateB - dateA;
  });
}

function redactInstagramUrl(url) {
  const safeUrl = new URL(url.toString());
  if (safeUrl.searchParams.has('access_token')) {
    safeUrl.searchParams.set('access_token', '[redacted]');
  }
  return safeUrl.toString();
}

function canShowDiagnostics(request) {
  const debugKey = process.env.INSTAGRAM_DEBUG_KEY;
  if (debugKey) return request.query?.debug_key === debugKey || request.query?.debug === debugKey;
  return request.query?.debug === '1';
}

module.exports = async function handler(request, response) {
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const accessToken = await getInstagramAccessToken();
  const instagramUrls = buildInstagramUrlCandidates(accessToken);
  if (!instagramUrls.length) {
    const webPosts = await fetchInstagramWebPosts();
    if (webPosts.length) {
      await writeCachedPosts(webPosts);
      response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
      return response.status(200).json({
        configured: false,
        source: 'instagram-web',
        count: ensureNinePosts(webPosts).length,
        posts: ensureNinePosts(webPosts)
      });
    }
    const fallback = await resilientPosts('fallback');
    response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
    return response.status(200).json({
      error: 'Instagram feed is not configured',
      configured: false,
      requiredEnv: ['INSTAGRAM_ACCESS_TOKEN', 'INSTAGRAM_PROVIDER=instagram'],
      source: fallback.source,
      count: fallback.posts.length,
      posts: fallback.posts
    });
  }

  try {
    let payload = null;
    let instagramResponse = null;
    const showDiagnostics = canShowDiagnostics(request);
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
      if (showDiagnostics) {
        for (const diagnosticUrl of buildInstagramDiagnosticUrls(accessToken)) {
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
      const webPosts = await fetchInstagramWebPosts();
      if (webPosts.length) {
        await writeCachedPosts(webPosts);
        response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
        return response.status(200).json({
          error: 'Instagram Graph API request failed',
          configured: true,
          source: 'instagram-web',
          count: ensureNinePosts(webPosts).length,
          diagnostics: showDiagnostics ? diagnostics : undefined,
          posts: ensureNinePosts(webPosts)
        });
      }
      const fallback = await resilientPosts('fallback');
      response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
      return response.status(200).json({
        error: 'Instagram API request failed',
        configured: true,
        source: fallback.source,
        count: fallback.posts.length,
        diagnostics: showDiagnostics ? diagnostics : undefined,
        posts: fallback.posts
      });
    }

    const posts = sortPostsByDate((payload.data || [])
      .map(normalizePost)
      .filter(post => post.media_url))
      .slice(0, 9);

    if (!posts.length) {
      const fallback = await resilientPosts('fallback');
      response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
      return response.status(200).json({
        error: 'Instagram feed returned no media',
        configured: true,
        source: fallback.source,
        count: fallback.posts.length,
        posts: fallback.posts
      });
    }

    response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
    await writeCachedPosts(posts);
    await refreshInstagramToken(accessToken).catch(() => null);
    return response.status(200).json({
      configured: true,
      source: 'instagram',
      count: ensureNinePosts(posts).length,
      posts: ensureNinePosts(posts)
    });
  } catch (error) {
    const fallback = await resilientPosts('fallback');
    response.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
    return response.status(200).json({
      error: 'Instagram feed unavailable',
      configured: true,
      source: fallback.source,
      count: fallback.posts.length,
      diagnostics: canShowDiagnostics(request)
        ? [{ message: error.message, name: error.name }]
        : undefined,
      posts: fallback.posts
    });
  }
};
