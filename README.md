# On My Peak

Landing page oficial de On My Peak, una marca de ropa deportiva de edición limitada.

## Proyecto

Este sitio presenta el primer drop de OMP con una estética premium, oscura y editorial. Incluye:

- Hero principal con claim de marca.
- Manifiesto.
- Colección actual con carrusel lateral.
- Calendario de drops.
- Carrito con pedido por WhatsApp.
- Mini ERP oculto para ventas confirmadas y control de pagos.
- Feed de Instagram con fallback local.

## Despliegue

Producción en Vercel:

https://onmypeak.vercel.app

## Estructura

- `index.html`: página principal.
- `css/style.css`: estilos visuales y responsive.
- `js/script.js`: interacciones, animaciones y galería.
- `assets/`: imágenes, vídeo, poster, portadas de drops y calendario.

## ERP de ventas

El panel oculto de ventas se abre en:

https://onmypeak.vercel.app/?seller=ventas

Cada vez que un cliente pulsa **Confirmar por WhatsApp**, la web intenta registrar las líneas del pedido en `/api/sales`. Desde el panel se puede:

- Ver modelo, color, talla, cliente, código y total.
- Marcar una venta como pagada.
- Eliminar una fila si se registró por error.

Para que el historial sea global y persistente entre navegadores, Vercel debe tener conectado Vercel KV/Redis con estas variables:

- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`

Opcionalmente, para proteger el panel de vendedor:

- `OMP_ERP_ADMIN_KEY`

Si se configura `OMP_ERP_ADMIN_KEY`, abre el panel una vez con `?seller=ventas&erpKey=TU_CLAVE`; la web guardará esa clave en tu navegador.

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
