# On My Peak

Landing page oficial de On My Peak, una marca de ropa deportiva de edición limitada.

## Proyecto

Este sitio presenta el primer drop de OMP con una estética premium, oscura y editorial. Incluye:

- Hero principal con claim de marca.
- Manifiesto.
- Colección actual con carrusel lateral.
- Calendario de drops.
- Carrito con pedido por WhatsApp.
- Feed de Instagram con fallback local.

## Despliegue

Producción en Vercel:

https://on-my-peak-peach.vercel.app

## Estructura

- `index.html`: página principal.
- `css/style.css`: estilos visuales y responsive.
- `js/script.js`: interacciones, animaciones y galería.
- `assets/`: imágenes, vídeo, poster, portadas de drops y calendario.

## Instagram en vivo

La sección de Instagram carga `/api/instagram`, que devuelve las últimas 9 publicaciones reales cuando Vercel tiene configurado un token oficial de Meta/Instagram.

Opción recomendada si no hay Facebook conectado a OnMyPeak:

- `INSTAGRAM_ACCESS_TOKEN`: token válido de Instagram API with Instagram Login.
- `INSTAGRAM_PROVIDER`: `instagram`.

Opción alternativa con Instagram Graph API/Facebook:

- `INSTAGRAM_ACCESS_TOKEN`: token válido de Instagram Graph API.
- `INSTAGRAM_USER_ID`: ID de la cuenta profesional/creator de Instagram conectada a una página de Facebook.
- `INSTAGRAM_PROVIDER`: `facebook`.

Opcionales:

- `INSTAGRAM_GRAPH_VERSION`: versión de Graph API, por defecto `v21.0`.
- `INSTAGRAM_API_BASE`: por defecto `https://graph.instagram.com` con Instagram Login o `https://graph.facebook.com` con Facebook/Graph.
- `INSTAGRAM_MEDIA_URL`: URL completa alternativa del endpoint de medios si se quiere forzar una ruta concreta.

El endpoint soporta imágenes, vídeos/reels y carruseles; cachea la respuesta para producción en Vercel.

## Guía

No inventar dirección de marca fuera de la guía actual del proyecto. Mantener el tono OMP: premium, directo, intenso y elegante.
