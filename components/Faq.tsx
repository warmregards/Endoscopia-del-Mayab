// /components/Faq.tsx
import Script from "next/script"
import { ROUTES_SEO, type RouteKey } from "@/lib/routes-seo"
import { buildFaqSchema, getFaqsFor, type FAQ } from "@/lib/faq"

type Props =
  | { routeKey: RouteKey; faqs?: never; heading?: string; jsonldIdOverride?: string }
  | { routeKey?: never; faqs: FAQ[]; heading?: string; jsonldIdOverride?: string }

export default function Faq({
  routeKey,
  faqs: override,
  heading = "Preguntas frecuentes",
  jsonldIdOverride,
}: Props) {
  // Resolve base + path → stable @id for JSON‑LD
  const site = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")
  const { path } = routeKey ? ROUTES_SEO[routeKey] : { path: "/" }

  // Pick FAQs: explicit list wins, else by route
  const faqs: FAQ[] = override ?? (routeKey ? getFaqsFor(routeKey) : [])

  if (!faqs.length) return null

  // Allow manual override for odd placements (e.g. blog pages)
  const jsonldId = jsonldIdOverride || `${site}${path}#faq`
  const schema = buildFaqSchema(jsonldId, faqs)

  return (
    <section aria-labelledby="faq-heading" className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros procedimientos
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <summary className="cursor-pointer p-6 marker:none list-none flex justify-between items-start gap-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <span aria-hidden className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="font-semibold text-foreground leading-relaxed pr-4">
                    {item.question}
                  </span>
                </div>
                <span aria-hidden className="flex-shrink-0">
                  <svg className="w-5 h-5 text-foreground/60 group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </summary>

              <div className="px-6 pb-6">
                <div className="pl-12 pr-4">
                  <div className="pt-2 border-t border-border/50">
                    <div className="pt-4 text-foreground/80 leading-relaxed">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-strong/10 border border-accent-strong/20">
            <svg className="w-4 h-4 text-accent-strong" viewBox="0 0 24 24" fill="none">
              <path
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium text-foreground">
              ¿No encuentras tu respuesta? Contáctanos directamente
            </span>
          </div>
        </div>

        {/* JSON‑LD for rich results */}
        <Script
          id={`faq-jsonld${routeKey ? `-${routeKey}` : ""}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </div>
    </section>
  )
}
