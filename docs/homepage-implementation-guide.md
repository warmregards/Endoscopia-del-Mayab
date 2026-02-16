# Homepage Implementation Guide
## Endoscopia del Mayab — For Claude Code

**Input files:**
- `homepage-wireframe.jsx` — Content architecture and component structure (React artifact)
- `schema-graph-homepage.jsonld` — Complete JSON-LD @graph for the homepage
- `design-tokens-v2.jsx` — Design token system (colors, typography, spacing)
- `Project_Context_and_Decisions_v2.md` — Full project context and decisions

---

## What This Page Must Do

The homepage serves **three simultaneous roles:**
1. **Brand homepage** — first impression for all visitors
2. **GBP landing page** — where Google Business Profile "Website" link sends people
3. **Services page** — `/servicios` redirects here; this IS the service catalog

---

## Schema Implementation

### Global @graph (inject on EVERY page via `<script type="application/ld+json">`)

The `schema-graph-homepage.jsonld` file contains the complete @graph with 5 entities:

| Entity | @id | Present On |
|--------|-----|------------|
| WebSite | `#website` | Every page |
| Organization | `#organization` | Every page |
| MedicalClinic | `#clinic` | Every page |
| Physician | `#physician` | Every page |
| FAQPage | `#faq` | Homepage only (procedure pages get their own) |

### Per-Procedure Page Additions (not homepage)

On each procedure page (e.g., `/endoscopia-merida`), ADD to the global @graph:

```json
{
  "@type": "MedicalProcedure",
  "name": "Endoscopia en Mérida",
  "alternateName": "Esofagogastroduodenoscopia (EGD)",
  "procedureType": "https://health-lifesci.schema.org/DiagnosticProcedure",
  "bodyLocation": "Tracto digestivo superior",
  "howPerformed": "Endoscopia con sedación consciente",
  "preparation": "Ayuno de 8 horas previo al procedimiento",
  "followup": "Reposo de 30-60 minutos en sala de recuperación",
  "offers": {
    "@type": "Offer",
    "price": "4500",
    "priceCurrency": "MXN",
    "description": "Desde $4,500 MXN. Incluye anestesia, biopsias, recuperación."
  },
  "provider": { "@id": "https://www.endoscopiadelmayab.com/#clinic" }
}
```

### Placeholders to Resolve Before Launch

| Placeholder | Where | What's Needed |
|-------------|-------|---------------|
| `_DOCTORALIA_URL_` | Organization.sameAs | Dr. Quiroz's Doctoralia profile URL |
| `logo.png` | Organization.logo | Actual logo asset URL |
| `dr-omar-quiroz-photo.jpg` | Physician.image | Professional headshot URL |
| `clinic-photo.jpg` | MedicalClinic.image | Clinic/hospital exterior or interior photo |
| `geo.latitude` / `geo.longitude` | MedicalClinic.geo | Exact GPS from GBP pin for Hospital Amerimed |

---

## HTML Head Requirements

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <!-- Title: procedure + location + price + brand -->
  <title>Endoscopia y Colonoscopia en Mérida | Desde $4,500 MXN | Endoscopia del Mayab</title>

  <!-- Meta description: serves P1 (location), P2 (price), P3 (procedure) -->
  <meta name="description" content="Endoscopia desde $4,500 MXN y colonoscopia desde $5,000 MXN en Mérida, Yucatán. Precios transparentes, sedación incluida. Hospital Amerimed. Agenda directo con el Dr. Quiroz por WhatsApp." />

  <!-- Canonical: www + https enforced -->
  <link rel="canonical" href="https://www.endoscopiadelmayab.com/" />

  <!-- Language -->
  <html lang="es-MX">

  <!-- Schema JSON-LD: inject full @graph here -->
  <script type="application/ld+json">
    { ... schema-graph-homepage.jsonld contents ... }
  </script>
</head>
```

---

## Component Build Order

Build in this sequence — each component is reused across procedure pages:

### 1. StickyMobileCTA (site-wide)
- WhatsApp primary + Phone secondary
- Visible only on mobile (≤768px)
- Appears after user scrolls past hero CTAs (use IntersectionObserver)
- WhatsApp: `https://wa.me/529992360153`
- Phone: `tel:+529992360153`
- z-index above all content
- Track: `whatsapp_click`, `phone_click`

### 2. HeroSection (homepage variant + procedure page variant)
- Homepage H1: `Endoscopia y Colonoscopia en Mérida, Yucatán`
- Trust strip: 52 reseñas ⭐⭐⭐⭐⭐ · 7 días, 7am–9pm
- Price anchor: `Desde $4,500 MXN · Sedación incluida`
- WhatsApp CTA (green, #25D366) + Phone CTA (action-secondary)
- Location bar: Hospital Amerimed Mérida, Consultorio 517
- Track: `cta_view` (when WhatsApp button enters viewport)

### 3. IncludedStrip (site-wide)
- Anestesia incluida · Biopsias sin límite · Sala de recuperación · Valoración incluida
- Teal-50 background, subtle border
- Track: `pricing_view` (when strip enters viewport)

### 4. ProcedureCard (reused in grid)
- Tag badge (optional)
- Procedure name (h3)
- One-line description
- Price: `Desde $X MXN`
- "Ver detalles →" link
- Links to procedure page URL

### 5. ServiceCatalog (homepage)
- Therapeutic procedures: expandable list (show 4, expand to all)
- Advanced procedures: collapsed by default, "Precio bajo cotización" label
- Link to `/precios` at bottom
- Every service name + price visible in crawlable HTML

### 6. DoctorSnippet (homepage variant)
- Photo placeholder (80px mobile, 120px desktop)
- Name, title, specialty
- Real credentials: UNAM, Cédula EGI230072, CMCG C18044318, AMCE, COFEPRIS
- "15+ años experiencia" + "Equipo Olympus HD"
- Link to `/dr-omar-quiroz`

### 7. FAQAccordion (homepage + procedure pages)
- Accordion with expand/collapse
- FAQPage schema injected per-page
- Each FAQ addresses a Persona 5 fear-based query
- Track: `faq_expand` (which question was opened)

### 8. EmergencyBanner
- Red tint background
- "Emergencias Digestivas — 7 días"
- Direct phone CTA
- Links to `/emergencias-digestivas-merida`

### 9. Footer (site-wide)
- NAP in crawlable `<address>` tag — MUST match GBP exactly:
  - Endoscopia del Mayab
  - Hospital Amerimed Mérida, Consultorio 517
  - Chichi Suárez, 97306, Mérida, Yuc.
  - Tel: 999 236 0153
  - WhatsApp: 999 236 0153
- Hours: Lunes a Domingo, 7:00 AM – 9:00 PM
- Instagram: @endoscopiadelmayab
- Google Map embed (or link to directions)
- Copyright

---

## Redirects (implement at server/routing level)

| From | To | Type |
|------|----|------|
| `/servicios` | `/` | 301 |
| `/esclerosis-varices-gastricas-merida` | `/ligadura-varices-esofagicas-merida` | 301 |
| All `http://` | `https://` | 301 |
| All non-www | www | 301 |

---

## Event Tracking (GA4)

Implement these events on the homepage. Fire on actual user interaction, NOT page load.

| Event | Trigger | Element |
|-------|---------|---------|
| `whatsapp_click` | Click on any WhatsApp CTA | All WhatsApp buttons + sticky CTA |
| `phone_click` | Click on any `tel:` link | All phone buttons + sticky CTA |
| `scroll_depth` | Scroll milestones | 25%, 50%, 75%, 90% |
| `cta_view` | IntersectionObserver | Hero WhatsApp button enters viewport |
| `pricing_view` | IntersectionObserver | Included strip or pricing section enters viewport |
| `faq_expand` | Click on accordion item | `{ question: "¿Duele la endoscopia?" }` |

---

## Design Token Reference

Use tokens from `design-tokens-v2.jsx`. Key mappings:

| Use Case | Token |
|----------|-------|
| Page background | `surface-base` |
| Cards | `surface-raised` + `shadow` |
| Alt sections (catalog, FAQ) | `surface-sunken` |
| Footer | `surface-inverse` |
| WhatsApp CTA | `#25D366` (WhatsApp green, not from tokens) |
| Phone/secondary CTA | `action-secondary` |
| Prices | `text-accent` (teal) |
| Body text | `text-primary` |
| Subtext | `text-secondary` |
| Headings font | Montserrat 600–800 |
| Body font | Open Sans 400 |

---

## Mobile-First Breakpoints

| Breakpoint | Width | Notes |
|------------|-------|-------|
| Mobile | 375px | Default. All components designed here first. |
| Tablet | 768px | Procedure cards → 2 columns. Service catalog → 2 columns. |
| Desktop | 1024px | Procedure cards → 3 columns. Doctor section → horizontal layout. |

94% of traffic is mobile (Chrome + Safari). Every CTA must be tap-accessible at 375px without scrolling past the first fold.

---

## Validation Checklist (Pre-Launch)

- [ ] Schema validates via Google Rich Results Test (https://search.google.com/test/rich-results)
- [ ] NAP in footer matches GBP exactly (character-for-character)
- [ ] All 27 services present in `hasOfferCatalog` with correct URLs
- [ ] Canonical URL resolves: `https://www.endoscopiadelmayab.com/`
- [ ] `/servicios` 301 redirects to `/`
- [ ] `http://` and non-www 301 redirect to canonical
- [ ] WhatsApp link opens: `https://wa.me/529992360153`
- [ ] Phone link works: `tel:+529992360153`
- [ ] All GA4 events fire on interaction, not page load
- [ ] LCP < 2.5s (no blocking hero images)
- [ ] Mobile viewport renders correctly at 375px
- [ ] FAQ accordion opens/closes and schema matches visible content
