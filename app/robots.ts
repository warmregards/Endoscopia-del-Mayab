// app/robots.ts
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com"
  const url = new URL(rawBase)
  const host = url.hostname // ✅ just "www.endoscopiadelmayab.com"

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: [`${url.origin}/sitemap.xml`],
    host,
  }
}
