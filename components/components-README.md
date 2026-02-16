# /components/ — Component Reference

> **RULE: Read `/lib/README.md` before building new components.**
> Components consume data from `/lib/` modules — never hardcode prices, phone numbers,
> addresses, service names, or doctor info.

---

## Component Map

| Component | Type | Description |
|-----------|------|-------------|
| `SiteHeader.tsx` | Client | Sticky header with desktop nav + mobile drawer. CTAs use tracked CallButton/WhatsAppButton. |
| `Footer.tsx` | Server | Site footer. All NAP+W data pulled from `CLINIC`. Social links from `CLINIC.sameAs`. |
| `WhatsAppButton.tsx` | Client | Primary CTA. Fires `pushWhatsAppClick()`. Uses `waHref()` from clinic.ts. |
| `CallButton.tsx` | Client | Secondary CTA. Fires `pushPhoneClick()`. Uses `telHref()` from clinic.ts. |
| `Faq.tsx` | Client | Accordion FAQ with inline JSON-LD via `faqSchema()`. Fires `pushFaqExpand()` on toggle. |
| `GoogleReviews.tsx` | Server (async) | Fetches reviews via `getGoogleReviews()`. Falls back to static reviews automatically. |
| `ProceduresGrid.tsx` | Server | Full service catalog. Derives categories and pricing from `SERVICES` data. |
| `MapEmbed.tsx` | Server | Google Maps iframe. Uses `NEXT_PUBLIC_GBP_PLACE_ID` + `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`. |
| `ScrollToTop.tsx` | Client | Scroll restoration on route change. Zero dependencies. |
| `theme-provider.tsx` | Client | Thin next-themes wrapper. Dark mode exists but isn't a priority. |

---

## Deleted Components — Do NOT Recreate

| Deleted Component | Replaced By |
|---|---|
| `ClinicJsonLd.tsx` | `globalGraph()` from `@/lib/schema` — inject once in `layout.tsx` |
| `ServiceJsonLd.tsx` | `procedureSchema()` from `@/lib/schema` — inline per procedure `page.tsx` |
| `ServiceJsonLdAuto.tsx` | Same as above — each page owns its own schema |

---

## CTA Components — Props Reference

### `WhatsAppButton`

```tsx
import WhatsAppButton from "@/components/WhatsAppButton"

<WhatsAppButton
  service="colonoscopia"           // GTM tracking label
  position="hero"                  // GTM position (hero, footer, header-mobile, etc.)
  procedureName="Colonoscopia"     // Optional: generates procedure-specific pre-filled message
  label="Agendar por WhatsApp"     // Optional: button text (default: "WhatsApp")
  message="Custom message"         // Optional: overrides all auto-generated messages
  className="..."                  // Optional: additional Tailwind classes
  id="custom-id"                   // Optional: overrides auto-generated cta id
/>
```

**Message priority:** explicit `message` → `procedureName` (via `waMessage()`) → `CLINIC.whatsapp.defaultText`

### `CallButton`

```tsx
import CallButton from "@/components/CallButton"

<CallButton
  service="colonoscopia"           // GTM tracking label
  position="hero"                  // GTM position
  label="Llamar"                   // Optional: button text (default: "Llamar")
  className="..."                  // Optional
  id="custom-id"                   // Optional
/>
```

Phone number is always `CLINIC.phone.e164` — no override prop. This is intentional for NAP consistency.

---

## FAQ Component — Props Reference

```tsx
import Faq from "@/components/Faq"

// By route key (pulls FAQs automatically)
<Faq routeKey="colonoscopia" service="colonoscopia" />

// With explicit FAQ array
<Faq faqs={customFaqs} service="generic" heading="Preguntas sobre preparación" />
```

- `routeKey` and `faqs` are mutually exclusive (TypeScript union enforces this)
- `service` is optional — used for `pushFaqExpand()` GTM attribution
- JSON-LD is generated inline via `faqSchema()` from `@/lib/schema`

---

## Schema Pattern — No Dedicated Schema Components

Schema JSON-LD is **not** handled by components. It's inline in layouts and pages:

```tsx
// layout.tsx — global graph (once)
import { globalGraph } from "@/lib/schema"
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(globalGraph()) }}
/>

// procedure page.tsx — per-procedure
import { procedureSchema, faqSchema } from "@/lib/schema"
import { getFaqsFor } from "@/lib/faq"
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema({
    name: "Colonoscopia en Mérida",
    path: "/colonoscopia-merida",
    pricingKey: "colonoscopia",
    description: "Estudio del colon con cámara flexible...",
    procedureType: "Diagnostic",
  })) }}
/>
```

The `Faq` component handles its own `faqSchema()` JSON-LD internally — no need to add it separately when using `<Faq>`.

---

## What NOT to Do in Components

- **Don't import from `@/lib/contact`** — it was deleted. Use `@/lib/clinic`.
- **Don't use `pushCta()`** — it was deleted. Use `pushWhatsAppClick()` or `pushPhoneClick()`.
- **Don't hardcode phone numbers, addresses, or hours** — import from `CLINIC`.
- **Don't create new schema components** — use `globalGraph()`, `procedureSchema()`, `faqSchema()` inline.
- **Don't duplicate slug→pricing mappings** — `ServiceItem.pricingKey` already exists on every service.
- **Don't pass custom phone numbers to CTA buttons** — single source of truth is `CLINIC`.
