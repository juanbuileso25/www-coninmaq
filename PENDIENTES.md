# Pendientes SEO — Coninmaq

Acciones manuales necesarias para que el sitio aparezca correctamente en Google y otros buscadores.

---

## 1. Registrar el sitio en Google Search Console

1. Ir a <https://search.google.com/search-console>
2. Hacer clic en **Agregar propiedad** → ingresar `https://coninmaqsas.com`
3. Verificar la propiedad (método recomendado: archivo HTML o meta tag)
4. Una vez verificada, ir a **Sitemaps** y enviar: `https://coninmaqsas.com/sitemap.xml`

> Esto le indica a Google todas las páginas del sitio y acelera la indexación.

---

## 2. Crear la imagen OG (Open Graph)

- Crear un archivo `og-image.jpg` de **1200 × 630 px**
- Incluir el logo de Coninmaq y el texto *"Maquinaria Pesada en Colombia"*
- Colocarlo en: `public/og-image.jpg`

> Esta imagen aparece cuando alguien comparte el sitio en WhatsApp, Facebook, LinkedIn, etc.

---

## 3. Verificar la URL real del sitio

- Si el dominio final **no es** `coninmaqsas.com`, actualizar la constante `SITE_URL` en:
  `src/seo/config.ts` → línea `export const SITE_URL = "..."`
- También actualizar `public/sitemap.xml` y `public/robots.txt` con la URL correcta.

---

## 4. Conseguir backlinks (enlaces entrantes)

Los backlinks aumentan la autoridad del sitio en Google. Registrar en:

| Directorio / Plataforma | URL |
|---|---|
| Google Business Profile | <https://business.google.com> |
| Páginas Amarillas Colombia | <https://www.paginasamarillas.com.co> |
| Cámara de Comercio de Medellín | <https://www.camaramedellin.com.co> |
| LinkedIn Company Page | Publicar posts con enlace al sitio |
| Instagram | Agregar `https://coninmaqsas.com` en la bio |
| Facebook | Completar campo "Sitio web" con la URL |

---

## Estado actual del SEO implementado

- [x] Meta tags (title, description, keywords) en todas las páginas
- [x] Open Graph y Twitter Card
- [x] JSON-LD: Organization, LocalBusiness, Product, WebSite
- [x] Canonical URLs por página
- [x] `sitemap.xml` con todas las rutas
- [x] `robots.txt` configurado
- [x] Meta tags de geolocalización (`geo.region: CO-ANT`)
- [ ] Google Search Console registrado
- [ ] `og-image.jpg` creada
- [ ] Backlinks conseguidos
