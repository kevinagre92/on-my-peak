# On My Peak

Landing page oficial de On My Peak, una marca de ropa deportiva de edición limitada.

## Proyecto

Este sitio presenta el primer drop de OMP con una estética premium, oscura y editorial. Incluye:

- Hero principal con claim de marca.
- Manifiesto.
- Sección de colección.
- Lookbook.
- Galería editorial disruptiva con fotos del producto.
- Lista de espera.

## Despliegue

Producción en Vercel:

https://on-my-peak.vercel.app

## Estructura

- `index.html`: página principal.
- `css/style.css`: estilos visuales y responsive.
- `js/script.js`: interacciones, animaciones y galería.
- `*.jpg`: imágenes del producto y material editorial.

## Instagram en vivo

La sección de Instagram carga `/api/instagram`, que devuelve las últimas 9 publicaciones reales cuando Vercel tiene configuradas estas variables:

- `INSTAGRAM_ACCESS_TOKEN`: token válido de Instagram Graph API.
- `INSTAGRAM_USER_ID`: ID de la cuenta profesional/creator de Instagram conectada a Meta.

Opcionales:

- `INSTAGRAM_GRAPH_VERSION`: versión de Graph API, por defecto `v21.0`.
- `INSTAGRAM_API_BASE`: por defecto `https://graph.facebook.com`.
- `INSTAGRAM_MEDIA_URL`: URL completa alternativa del endpoint de medios si se quiere forzar una ruta concreta.

El endpoint soporta imágenes, vídeos/reels y carruseles; cachea la respuesta para producción en Vercel.

## Guía

No inventar dirección de marca fuera de la guía actual del proyecto. Mantener el tono OMP: premium, directo, intenso y elegante.
