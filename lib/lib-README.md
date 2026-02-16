# /lib/ — Data Module Reference

> **RULE: Never hardcode data that exists in these modules.**
> If you need a price, phone number, address, service name, FAQ, or SEO title — import it.
> These modules are the single source of truth for all structured data on the site.

---

## Module Map

| Module | What It Owns | Key Exports |
|--------|-------------|-------------|
| `clinic.ts` | NAP+W, hours, geo, reviews, sameAs | `CLINIC`, `telHref()`, `waHref()`, `waMessage()` |
| `doctor.ts` | Dr. Quiroz profile, credentials, schema data | `DOCTOR` |
| `pricing.ts` | All 22 service prices, additional fees, formatting | `PRICING`, `ADDITIONAL_FEES`, `INCLUDED_IN_PRICE`, `mxn()`, `displayFrom()`, `hasPrice()`, `priceData()` |
| `services.ts` | 22 procedures + 5 consultations + aliases | `SERVICES`, `CONSULTATIONS`, `SERVICE_ALIASES`, `toSchemaOfferCatalog()` |
| `seo.ts` | Metadata generation for all pages | `buildServiceMeta()`, `buildHomeMeta()`, `buildPricingMeta()`, `buildDoctorMeta()`, `buildContactMeta()` |
| `routes-seo.ts` | Per-route SEO config | `ROUTES_SEO`, `metaFor()` |
| `schema.ts` | All JSON-LD generation | `globalGraph()`, `procedureSchema()`, `faqSchema()`, `breadcrumbSchema()` |
| `faq.ts` | FAQ content for every page | `getFaqsFor()`, individual `*Faqs` arrays |
| `gtm.ts` | Analytics event helpers | `pushWhatsAppClick()`, `pushPhoneClick()`, `pushScrollDepth()`, `pushCtaView()`, `pushPricingView()`, `pushFaqExpand()` |
| `reviews.ts` | Google Reviews API + fallback | `getGoogleReviews()`, `toSchemaRating()` |
| `utils.ts` | Tailwind class merging | `cn()` |

---

## Import Patterns

### Prices — never write "$4,500" or "$5,000" in a component

```tsx
// ✅ Correct
import { PRICING, mxn, displayFrom } from "@/lib/pricing"
const price = mxn(PRICING.colonoscopia.from)        // "$5,000 MXN"
const display = displayFrom("colonoscopia")          // "Desde $5,000 MXN"

// ❌ Wrong — hardcoded price will drift
<span>Desde $5,000 MXN</span>
```

### Additional fees — never hardcode "$1,200" or "$800"

```tsx
// ✅ Correct
import { ADDITIONAL_FEES, mxn } from "@/lib/pricing"
const biopsyPrice = mxn(ADDITIONAL_FEES.biopsy.amount)        // "$1,200 MXN"
const consultPrice = mxn(ADDITIONAL_FEES.consultation.amount) // "$800 MXN"

// ❌ Wrong — hardcoded fees will drift
<span>Biopsia: $1,200 MXN extra</span>
```

### Contact info — never write phone numbers or WhatsApp URLs

```tsx
// ✅ Correct
import { CLINIC, telHref, waHref, waMessage } from "@/lib/clinic"
<a href={telHref()}>{CLINIC.phone.display}</a>
<a href={waMessage("Colonoscopia")}>WhatsApp</a>

// ❌ Wrong — hardcoded numbers create NAP inconsistency
<a href="tel:+529992360153">999 236 0153</a>
```

### Address — never write the address string manually

```tsx
// ✅ Correct
import { CLINIC } from "@/lib/clinic"
<p>{CLINIC.address.display}</p>

// ❌ Wrong — address format must match GBP exactly
<p>Hospital Amerimed, Consultorio 517, Mérida</p>
```

### Doctor info — never hardcode credentials or bio text

```tsx
// ✅ Correct
import { DOCTOR } from "@/lib/doctor"
<h2>{DOCTOR.name}</h2>
<p>{DOCTOR.bioShort}</p>
<img src={DOCTOR.photos.headshot} />

// ❌ Wrong
<h2>Dr. Omar Quiroz</h2>
```

### Service names and slugs — always reference SERVICES

```tsx
// ✅ Correct
import { SERVICES } from "@/lib/services"
const cpre = SERVICES.find(s => s.slug === "cpre-merida")
<h1>{cpre.displayName}</h1>  // "CPRE en Mérida"

// ❌ Wrong
<h1>CPRE en Mérida</h1>
```

### SEO metadata — always use builders

```tsx
// ✅ Correct — in page.tsx
import { metaFor } from "@/lib/routes-seo"
export const metadata = metaFor("colonoscopia")

// ❌ Wrong — manual metadata bypasses title formula and canonical URLs
export const metadata = { title: "Colonoscopia en Mérida..." }
```

### Schema JSON-LD — use schema.ts generators

```tsx
// ✅ Correct — global graph in layout.tsx
import { globalGraph } from "@/lib/schema"
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(globalGraph()) }}
/>

// ✅ Correct — procedure page
import { procedureSchema, faqSchema } from "@/lib/schema"
import { getFaqsFor } from "@/lib/faq"
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema({ ... })) }}
/>
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(getFaqsFor("cpre"))) }}
/>
```

### FAQs — always use getFaqsFor()

```tsx
// ✅ Correct
import { getFaqsFor } from "@/lib/faq"
const faqs = getFaqsFor("colonoscopia")

// ❌ Wrong — importing individual arrays is fine for type-checking but
// getFaqsFor() is the standard pattern for components
```

### GTM events — use typed helpers

```tsx
// ✅ Correct
import { pushWhatsAppClick, pushPhoneClick } from "@/lib/gtm"
onClick={() => pushWhatsAppClick("/colonoscopia-merida", "colonoscopia")}

// ❌ Wrong — old pattern, removed
pushCta({ cta_type: "whatsapp", ... })
```

### "What's included" — use INCLUDED_IN_PRICE

```tsx
// ✅ Correct
import { INCLUDED_IN_PRICE, BIOPSY_FEE, CONSULTATION_FEE } from "@/lib/clinic"
{INCLUDED_IN_PRICE.map(item => <li>{item}</li>)}

// ❌ Wrong — hardcoded list will drift
<li>Anestesia incluida</li>
<li>Biopsias sin límite</li>
```

---

## Deleted Modules

| Old Module | Replacement | Migration |
|-----------|------------|-----------|
| `contact.ts` | `clinic.ts` | Change `import { waHref } from "@/lib/contact"` → `from "@/lib/clinic"` |
| `places.ts` | `reviews.ts` | `placeId` now lives on `CLINIC` object; reviews API in `reviews.ts` |

---

## Key Constants Quick Reference

| Data Point | Where It Lives | Access Pattern |
|-----------|---------------|----------------|
| Business name | `CLINIC.name` | `"Endoscopia del Mayab"` |
| Phone (display) | `CLINIC.phone.display` | `"999 236 0153"` |
| Phone (tel: link) | `telHref()` | `"tel:+529992360153"` |
| WhatsApp link | `waHref()` or `waMessage("Service")` | `"https://wa.me/529992360153?text=..."` |
| Address (full) | `CLINIC.address.display` | `"Hospital Amerimed Mérida, Consultorio 517..."` |
| Hours | `CLINIC.hours.display` | `"Lunes a Domingo, 7:00 AM – 9:00 PM"` |
| Doctor name | `DOCTOR.name` | `"Dr. Omar Quiroz"` |
| Doctor bio (short) | `DOCTOR.bioShort` | 1-2 line trust snippet |
| Any price | `mxn(PRICING[key].from)` | `"$5,000 MXN"` |
| Service count | `SERVICES.length` | 22 procedures |
| Reviews | `CLINIC.aggregateRating` | `{ ratingValue: 5.0, reviewCount: 52 }` |
