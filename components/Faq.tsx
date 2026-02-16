// /components/Faq.tsx
"use client";

import { useEffect, useRef } from "react";
import { ROUTES_SEO, type RouteKey } from "@/lib/routes-seo";
import { getFaqsFor, type FAQ } from "@/lib/faq";
import { faqSchema } from "@/lib/schema";
import { pushFaqExpand } from "@/lib/gtm";

type Props =
  | { routeKey: RouteKey; faqs?: never; heading?: string; service?: string; maxVisible?: number }
  | { routeKey?: never; faqs: FAQ[]; heading?: string; service?: string; maxVisible?: number };

export default function Faq({
  routeKey,
  faqs: override,
  heading = "Preguntas frecuentes",
  service,
  maxVisible = 6,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  // Pick FAQs: explicit list wins, else by route
  const faqs: FAQ[] = override ?? (routeKey ? getFaqsFor(routeKey) : []);

  // Track FAQ accordion expansions via event delegation
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handler = (e: ToggleEvent) => {
      const details = e.target as HTMLDetailsElement;
      if (details.open) {
        const question = details.dataset.question;
        if (question) pushFaqExpand(question, service);
      }
    };

    // <details> fires "toggle" event on open/close
    section.addEventListener("toggle", handler as EventListener, true);
    return () =>
      section.removeEventListener("toggle", handler as EventListener, true);
  }, [service]);

  if (!faqs.length) return null;

  const schema = faqSchema(faqs);

  const faqItem = (item: FAQ, i: number) => (
    <details
      key={i}
      data-question={item.question}
      className="group bg-background rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <summary className="cursor-pointer p-6 marker:none list-none flex justify-between items-start gap-4 hover:bg-muted/50 transition-colors">
        <span className="flex items-start gap-4 flex-1">
          <span
            aria-hidden
            className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1"
          >
            <svg
              className="w-4 h-4 text-primary"
              viewBox="0 0 24 24"
              fill="none"
            >
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
        </span>
        <span aria-hidden className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-foreground/60 group-open:rotate-180 transition-transform duration-200"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="faq-heading"
      className="section-padding"
    >
      <div className="container-page">
        <div className="mb-8">
          <h2
            id="faq-heading"
            className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-1"
          >
            {heading}
          </h2>
          <p className="text-muted-foreground">
            Encuentra respuestas a las preguntas más comunes sobre nuestros
            procedimientos
          </p>
        </div>

        <div className="space-y-4">
          {faqs.slice(0, maxVisible).map((item, i) => faqItem(item, i))}
        </div>

        {faqs.length > maxVisible && (
          <details className="mt-4 group/disclosure">
            <summary className="flex items-center justify-center gap-2 text-sm font-semibold text-primary cursor-pointer py-4 rounded-xl hover:bg-muted/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
              Ver {faqs.length - maxVisible} preguntas más
              <svg
                className="w-4 h-4 group-open/disclosure:rotate-180 transition-transform duration-200"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <div className="space-y-4 mt-4">
              {faqs.slice(maxVisible).map((item, i) => faqItem(item, maxVisible + i))}
            </div>
          </details>
        )}

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-strong/10 border border-accent-strong/20">
            <svg
              className="w-4 h-4 text-accent-strong"
              viewBox="0 0 24 24"
              fill="none"
            >
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
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        )}
      </div>
    </section>
  );
}
