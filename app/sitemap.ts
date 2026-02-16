import type { MetadataRoute } from "next"

// Revalidate the sitemap daily so lastModified doesn't go stale
export const revalidate = 86400

// Use the canonical host (www) by default; strip any trailing slash
const rawBase = process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com"
const baseUrl = rawBase.replace(/\/$/, "")

type RouteCfg = {
  path: string
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>
  priority: NonNullable<MetadataRoute.Sitemap[number]["priority"]>
}

const routes: RouteCfg[] = [
  // Core
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/endoscopia-merida", changeFrequency: "weekly", priority: 0.9 },
  { path: "/colonoscopia-merida", changeFrequency: "weekly", priority: 0.9 },
  { path: "/panendoscopia-merida", changeFrequency: "weekly", priority: 0.85 },

  // Terapéuticas / avanzadas
  { path: "/cpre-merida", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ligadura-varices-esofagicas-merida", changeFrequency: "monthly", priority: 0.75 },
  { path: "/esclerosis-varices-gastricas-merida", changeFrequency: "monthly", priority: 0.75 },
  { path: "/ligadura-hemorroides-internas-merida", changeFrequency: "monthly", priority: 0.75 },
  { path: "/gastrostomia-endoscopica-peg-merida", changeFrequency: "monthly", priority: 0.75 },
  { path: "/extraccion-cuerpos-extranos-endoscopia-merida", changeFrequency: "monthly", priority: 0.75 },
  { path: "/dilatacion-esofagica-merida", changeFrequency: "monthly", priority: 0.75 },
  { path: "/dilatacion-biliar-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/dilatacion-colonica-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/endoprotesis-esofagicas-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/endoprotesis-biliares-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/endoprotesis-duodenales-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/endoprotesis-colonicas-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/cierre-fistulas-clips-endoscopicos-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/sutura-endoscopica-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/diseccion-endoscopica-submucosa-esd-merida", changeFrequency: "monthly", priority: 0.75 },
  { path: "/reseccion-endoscopica-mucosa-emr-merida", changeFrequency: "monthly", priority: 0.75 },
  { path: "/apc-coagulacion-plasma-argon-merida", changeFrequency: "monthly", priority: 0.7 },

  // Otros
  { path: "/retiro-balon-gastrico-merida", changeFrequency: "monthly", priority: 0.7 },
  { path: "/emergencias-digestivas-merida", changeFrequency: "weekly", priority: 0.85 },
  { path: "/consultas-digestivas-merida", changeFrequency: "weekly", priority: 0.8 },
  // Institucional
  { path: "/dr-omar-quiroz", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contacto", changeFrequency: "monthly", priority: 0.6 },

  { path: "/precios", changeFrequency: "weekly", priority: 0.9 },

  // TODO (recommended to add soon)
  // { path: "/ubicacion-hospitales-merida", changeFrequency: "monthly", priority: 0.7 },
  // { path: "/aviso-de-privacidad", changeFrequency: "yearly", priority: 0.3 },
  // { path: "/terminos-y-condiciones", changeFrequency: "yearly", priority: 0.3 },
  // { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    // alternates: { languages: { "es-MX": `${baseUrl}${path}` } }, // enable when you add more locales
  }))
}
