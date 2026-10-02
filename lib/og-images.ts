// Static social cards shipped with the site; shared by Open Graph and Twitter.
// Keep dimensions in lib/seo.ts and app/layout.tsx aligned with these 1200×630 JPEGs.
export const DEFAULT_OG_IMAGE = "/og/home.jpg"

export const OG_IMAGES: Readonly<Record<string, string>> = {
  "/": "/og/home.jpg",
  "/endoscopia-merida": "/og/endoscopia.jpg",
  "/colonoscopia-merida": "/og/colonoscopia.jpg",
  "/cpre-merida": "/og/cpre.jpg",
  "/ligadura-varices-esofagicas-merida": "/og/ligadura-varices.jpg",
  "/ligadura-hemorroides-internas-merida": "/og/ligadura-hemorroides.jpg",
  "/equipo-medico": "/og/equipo-medico.jpg",
  "/dr-omar-quiroz": "/og/dr-omar-quiroz.jpg",
  "/precios": "/og/precios.jpg"
}

export function ogImageForPath(path: string): string {
  const normalizedPath = path.replace(/\/+$/, "") || "/"
  return OG_IMAGES[normalizedPath] ?? DEFAULT_OG_IMAGE
}
