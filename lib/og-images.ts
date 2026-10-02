import type { Metadata } from "next"

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
  "/precios": "/og/precios.jpg",
  "/capsula-endoscopica-merida": "/og/capsula-endoscopica.jpg",
  "/cpre-playa-del-carmen": "/og/cpre-playa-del-carmen.jpg",
  "/esclerosis-varices-gastricas-merida": "/og/esclerosis-varices.jpg",
  "/gastrostomia-endoscopica-peg-merida": "/og/gastrostomia.jpg",
  "/extraccion-cuerpos-extranos-endoscopia-merida": "/og/extraccion-cuerpos-extranos.jpg",
  "/dilatacion-esofagica-merida": "/og/dilatacion-esofagica.jpg",
  "/dilatacion-biliar-merida": "/og/dilatacion-biliar.jpg",
  "/dilatacion-colonica-merida": "/og/dilatacion-colonica.jpg",
  "/retiro-balon-gastrico-merida": "/og/retiro-balon-gastrico.jpg",
  "/apc-coagulacion-plasma-argon-merida": "/og/apc.jpg",
  "/endoprotesis-esofagicas-merida": "/og/endoprotesis-esofagicas.jpg",
  "/endoprotesis-biliares-merida": "/og/endoprotesis-biliares.jpg",
  "/endoprotesis-duodenales-merida": "/og/endoprotesis-duodenales.jpg",
  "/endoprotesis-colonicas-merida": "/og/endoprotesis-colonicas.jpg",
  "/cierre-fistulas-clips-endoscopicos-merida": "/og/cierre-fistulas.jpg",
  "/sutura-endoscopica-merida": "/og/sutura-endoscopica.jpg",
  "/diseccion-endoscopica-submucosa-esd-merida": "/og/esd.jpg",
  "/reseccion-endoscopica-mucosa-emr-merida": "/og/emr.jpg",
  "/ultrasonido-endoscopico-merida": "/og/ultrasonido-endoscopico.jpg",
  "/emergencias-digestivas-merida": "/og/emergencias-digestivas.jpg",
  "/consultas-digestivas-merida": "/og/consultas-digestivas.jpg",
  "/pacientes-de-fuera-de-merida": "/og/pacientes-fuera-merida.jpg",
  "/preparacion-endoscopia": "/og/preparacion-endoscopia.jpg",
  "/preparacion-colonoscopia": "/og/preparacion-colonoscopia.jpg",
  "/contacto": "/og/contacto.jpg"
}

export function ogImageForPath(path: string): string {
  const normalizedPath = path.replace(/\/+$/, "") || "/"
  return OG_IMAGES[normalizedPath] ?? DEFAULT_OG_IMAGE
}

/** Image-only metadata for paid landing pages; preserves their title and noindex. */
export function socialImagesForPath(path: string, alt: string): Pick<Metadata, "openGraph" | "twitter"> {
  const url = ogImageForPath(path)
  return {
    openGraph: {
      type: "website",
      siteName: "Endoscopia del Mayab",
      locale: "es_MX",
      images: [{ url, width: 1200, height: 630, alt }],
    },
    twitter: { card: "summary_large_image", images: [url] },
  }
}
