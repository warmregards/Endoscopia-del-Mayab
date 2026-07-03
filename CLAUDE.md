# CLAUDE.md — Endoscopia del Mayab Website Redesign

> This file is the single source of truth for Claude Code working on this project.
> Read it fully before making any changes.

---

## TODO — Manual Actions Required (Audit 2026-02-16)

- [ ] GBP: Verify services link changed from `http://www.endoscopiadelmayab.com/servicios` to `https://www.endoscopiadelmayab.com/` (Search Console shows 390 impressions still hitting the old HTTP URL)
- [ ] GSC: Use URL Inspection tool to request re-indexing of `https://www.endoscopiadelmayab.com/precios` (currently only non-www version indexed)

---

## Project Overview

**Client:** Endoscopia del Mayab — endoscopy practice in Mérida, Yucatán, Mexico
**Doctor:** Dr. Omar Quiroz (solo practitioner, gastroenterologist)
**Location:** Hospital Amerimed, Consultorio 517, Chichí Suárez, Mérida, Yucatán 97306
**Domain:** https://www.endoscopiadelmayab.com
**Deployed on:** Vercel

**Goal:** Redesign/refactor the existing website to improve conversions, SEO performance, and organic traffic — guided by 6 months of Google Ads, Search Console, and GA4 data analysis.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + `tw-animate-css` + CSS custom properties (HSL tokens)
- **Fonts:** Montserrat (headings, via `--font-serif`) + Open Sans (body, via `--font-sans`) — loaded via `next/font/google`
- **Icons:** lucide-react
- **UI primitives:** Radix UI (accordion, dialog, dropdown, tabs, etc.)
- **Analytics:** GTM (via `next/script`, prod-only), custom GTM events via lib/gtm.ts
- **Package manager:** pnpm
- **Deployment:** Vercel with non-www → www redirect

---

## Critical Architecture Rules

### DO NOT change:
- **Any existing URL paths.** All 27 current routes must be preserved exactly. No slug changes.
- **The WhatsApp-first booking flow.** WhatsApp remains the primary CTA everywhere. The ONE sanctioned exception is the appointment intake form (`AppointmentForm` → `/api/intake`) on the endoscopia/colonoscopia pages — see "Appointment Intake Form" below. No new forms on other pages, no Doctoralia integration, no multi-step booking.
- **The "Desde $X MXN" pricing format.** Use `displayFrom()` or `mxn()` from `lib/pricing.ts`.
- **Spanish-only content.** No English pages (yet).
- **The phone number:** +52 999 236 0153

### DO:
- **Add `/precios` as a new page** — #1 priority. 6,219 organic impressions with no landing page.
- **Keep all content mobile-first.** 82-94% of traffic is mobile. Design for 375px minimum.
- **Show pricing in hero sections.** "Desde $X MXN" must be visible in the first viewport of every procedure page that has a fixed price.
- **Make WhatsApp CTA sticky on mobile** and above the fold on desktop.
- **Use semantic HTML** — proper heading hierarchy, landmark roles, schema markup.

---

## Appointment Intake Form

The ONE sanctioned form on the site. WhatsApp is still the primary CTA everywhere; this
is an additive lead-capture experiment, not a replacement for the WhatsApp flow.

- **Component:** `components/AppointmentForm.tsx` (client). Takes a `procedure` prop
  (`"endoscopia" | "colonoscopia"`). Rendered only on `app/endoscopia-merida/page.tsx`
  and `app/colonoscopia-merida/page.tsx`. Do not add it to other pages.
- **API route:** `app/api/intake/route.ts` (`POST /api/intake`, `runtime = "nodejs"`).
  Validates input (Zod + libphonenumber-js MX phone), runs an anti-spam honeypot,
  generates a folio (`EDM-XXXX`), and notifies Telegram. No DB, no email.
- **Delivery:** Telegram Bot API `sendMessage`. Requires `TELEGRAM_BOT_TOKEN` +
  `TELEGRAM_CHAT_ID` (server-only env vars). Missing/invalid → route returns 500 and
  the form shows its WhatsApp fallback ("No pudimos enviar tu solicitud…"). It never
  silently drops a request.
- **Attribution:** captures `gclid`/`gbraid`/`wbraid` + UTM from `lib/attribution.ts`
  (cookie + localStorage, ~90 days) and fires the `appointment_request` GTM event only
  after a 200 response.
- **Debugging "form not working":** it's almost always the Telegram config, not the
  code. Check Vercel function logs for `[intake] Telegram …`. Known gotcha: if the
  Telegram group is upgraded to a supergroup, its chat ID changes (to the `-100…` form)
  and `TELEGRAM_CHAT_ID` in Vercel must be updated + redeployed.

---

## Video Embeds (YouTube)

All embedded videos MUST follow this structure — never hardcode a YouTube ID,
`<iframe>`, or VideoObject schema inline on a page.

- **Data:** every video is one entry in `lib/videos.ts` → `VIDEOS`, keyed by a
  short slug (usually the page key). The `Video` type carries everything both
  the player and the schema need: `id`, `title`, `description`, `uploadDate`
  (ISO 8601 **with timezone offset**, e.g. `2026-06-26T10:08:29-07:00` — a bare
  date trips Search Console's "missing a timezone" warning), `duration`
  (ISO 8601, e.g. `PT6M18S`), `durationSeconds`, `path`,
  `service`, and optional `chapters` (`{ name, start }` in seconds).
- **Player:** `components/YouTubeEmbed.tsx` — a lazy click-to-load facade
  (thumbnail + play button; loads the `youtube-nocookie` iframe only on click,
  to stay fast on mobile). It fires `pushVideoPlay()` on play.
- **Schema:** `videoSchema(video)` in `lib/schema.ts` emits `VideoObject`
  JSON-LD (with `Clip` "key moments" from `chapters`) for video rich-result
  eligibility — this is the SEO point of embedding on-domain.

**Pattern to add a video to a page:**

```tsx
import { videoSchema } from "@/lib/schema"
import { getVideo } from "@/lib/videos"
import YouTubeEmbed from "@/components/YouTubeEmbed"

const video = getVideo("cpre")
// ...
<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(video)) }} />
<YouTubeEmbed id={video.id} title={video.title} caption={video.title} service={video.service} />
```

**Where it goes:** high on the page (top ~25%), and inside an existing section
so the `bg-background`↔`bg-muted` alternation is preserved (don't add a new
section that forces a cascade of background flips).

**Getting the metadata:** `id`, `uploadDate`, `duration`/`durationSeconds`, and
`title` can be read straight off YouTube; `description` + `chapters` come from
the video's YouTube description (the timestamp list). The channel
(`@DrOmarQuiroz`) is already in `CLINIC.sameAs`, so the site↔channel entity link
exists — embedding videos on-domain reinforces it but does NOT transfer channel
authority to the site.

---

## File Structure

```
app/
├── layout.tsx              # Root layout (GTM, fonts, header/footer, JSON-LD)
├── page.tsx                # Homepage (/)
├── globals.css             # Tailwind v4 + CSS custom properties (HSL tokens)
├── fonts.ts                # Font exports (montserrat, openSans)
├── robots.ts               # Dynamic robots.txt
├── sitemap.ts              # Dynamic sitemap.xml
├── api/intake/route.ts     # POST /api/intake — appointment form → Telegram (see "Appointment Intake Form")
├── [procedure-slug]/       # 22 procedure pages, each has page.tsx
│   └── page.tsx
├── dr-omar-quiroz/         # Doctor profile
├── contacto/               # Contact page
├── servicios/              # Services overview
├── emergencias-digestivas-merida/
├── consultas-digestivas-merida/
└── preparacion-colonoscopia/  # Prep guide (TODO — planned, not yet created)

components/                   # ⚠️ READ components/README.md BEFORE ADDING COMPONENTS
├── README.md               # Component map, props reference, usage patterns
├── SiteHeader.tsx          # Sticky header with mobile drawer (client)
├── Footer.tsx              # Site footer — all NAP+W from CLINIC (server)
├── WhatsAppButton.tsx      # Primary CTA — pushWhatsAppClick() (client)
├── CallButton.tsx          # Secondary CTA — pushPhoneClick() (client)
├── AppointmentForm.tsx     # Intake form (endoscopia/colonoscopia only) → /api/intake (client)
├── Faq.tsx                 # Accordion FAQ + inline faqSchema() JSON-LD (client)
├── GoogleReviews.tsx       # Review display — getGoogleReviews() with fallback (server async)
├── MapEmbed.tsx            # Google Maps iframe (server)
├── ProceduresGrid.tsx      # Service catalog — derives from SERVICES data (server)
├── YouTubeEmbed.tsx        # Lazy click-to-load YouTube facade → pushVideoPlay() (client) — see "Video Embeds"
├── ScrollToTop.tsx         # Scroll restoration on route change (client)
└── theme-provider.tsx      # next-themes wrapper, forces light mode (client)

lib/                          # ⚠️ READ lib/README.md BEFORE TOUCHING COMPONENTS
├── README.md               # Import patterns and "never hardcode" rules
├── clinic.ts               # NAP+W, hours, geo, reviews, contact helpers (merged contact.ts)
├── doctor.ts               # Dr. Quiroz profile, credentials, schema data
├── pricing.ts              # PRICING record, mxn(), displayFrom(), hasPrice(), priceData()
├── services.ts             # SERVICES[], CONSULTATIONS[], SERVICE_ALIASES[], schema helpers
├── seo.ts                  # buildMeta(), buildServiceMeta(), buildHomeMeta(), etc.
├── routes-seo.ts           # Per-route SEO config → metaFor() generates Metadata
├── schema.ts               # globalGraph(), procedureSchema(), faqSchema(), breadcrumbSchema()
├── faq.ts                  # FAQ content for every page → getFaqsFor()
├── gtm.ts                  # pushWhatsAppClick(), pushPhoneClick(), scroll/view events
├── reviews.ts              # Google Reviews API + static fallback + schema helper
├── videos.ts               # VIDEOS registry + getVideo() — embedded YouTube data (see "Video Embeds")
└── utils.ts                # cn() (clsx + tailwind-merge)
```

---

## Key Data Constants — /lib/ Modules

> **Read `/lib/README.md` before writing any component.**
> Never hardcode prices, phone numbers, addresses, service names, or doctor info.
> Every piece of structured data has a canonical source in /lib/.

## Before Writing Any Component

1. Colors: Only use classes that have a --color-* entry in @theme inline (globals.css)
2. Layout: Use container-page and section-padding for page sections
3. Buttons: Use WhatsAppButton variant="primary" or CallButton variant="secondary|inverse|ghost"
4. Data: Import from lib/ — never hardcode prices, names, phones, addresses
5. Photos: DOCTOR.photos.headshot, not DOCTOR.photoPath

### Gotcha: @theme inline is the gatekeeper
A CSS variable in :root does NOT automatically become a Tailwind class.
It must also have a --color-* mapping in the @theme inline block.
If you add a new semantic token to :root, you MUST also add its bridge.

### Pricing (`lib/pricing.ts`)
- `PRICING` record — 22 procedures, each with optional `from` price
- `ADDITIONAL_FEES` — biopsy ($1,200) and consultation ($800) fees
- `INCLUDED_IN_PRICE` — array of what's included in base price (for UI display)
- `mxn()`, `displayFrom()`, `hasPrice()`, `priceData()` — formatting helpers

### Services (`lib/services.ts`)
- `SERVICES[]` — 22 procedures with: name, displayName, gbpServiceName, slug, pricingKey, category, trafficTier
- `CONSULTATIONS[]` — 5 GBP consultation services (H2 sections, not standalone pages)
- `SERVICE_ALIASES[]` — colloquial names that 301-redirect to canonical pages
- `toSchemaOfferCatalog()` — all 27 GBP services for JSON-LD
- `servicesByPriority()`, `pricedServices()`, `quoteOnlyServices()` — filtered lists

### SEO (`lib/seo.ts` + `lib/routes-seo.ts`)
- Title formula: `[Service] en Mérida | Desde $X MXN | Endoscopia del Mayab`
- `metaFor("routeKey")` generates full Next.js `Metadata` object
- Special pages use dedicated builders: `buildHomeMeta()`, `buildPricingMeta()`, `buildDoctorMeta()`, `buildContactMeta()`
- Titles capped at 70 chars (Google measures pixels), descriptions at 160 chars

### Clinic (`lib/clinic.ts`) — merged with former contact.ts
- Single source of truth for NAP+W, hours, geo, reviews, sameAs, areaServed
- `CLINIC.phone.display` / `.e164` / `.schema` — three formats for UI, tel: links, and JSON-LD
- `CLINIC.address.display` / `.streetAddress` / `.addressLocality` etc. — UI and schema
- `telHref()`, `waHref()`, `waMessage(procedureName)` — contact link builders

### Doctor (`lib/doctor.ts`)
- `DOCTOR.name`, `.bio`, `.bioShort`, `.credentials`, `.cedulas`
- `DOCTOR.photos.headshot` / `.og` — image paths
- `DOCTOR.schemaCredentials`, `.schemaMemberOf`, `.schemaKnowsAbout` — JSON-LD ready
- `DOCTOR.worksFor` — links Physician → MedicalClinic in schema

### Schema (`lib/schema.ts`)
- `globalGraph()` — single JSON-LD @graph with WebSite + MedicalClinic + Physician (inject in layout.tsx)
- `procedureSchema({ name, path, pricingKey, ... })` — per-procedure page JSON-LD
- `faqSchema(items)` — FAQPage JSON-LD from question/answer pairs
- `breadcrumbSchema(items)` — BreadcrumbList JSON-LD
- Entities linked via `@id` references — no duplicate data

### FAQ (`lib/faq.ts`)
- `getFaqsFor("routeKey")` — returns FAQ[] for any route
- Content informed by Google Ads + Search Console query data
- Covers all 22 procedures + homepage + precios + emergencias + consultas
- Pipe into `faqSchema()` from schema.ts for JSON-LD

### GTM (`lib/gtm.ts`)
- `pushWhatsAppClick(pagePath?, service?)` — fires `whatsapp_click` event
- `pushPhoneClick(pagePath?, service?)` — fires `phone_click` event
- `pushScrollDepth(threshold, pagePath?)` — fires `scroll_depth` event
- `pushCtaView(pagePath?, service?)`, `pushPricingView(pagePath?, service?)`, `pushFaqExpand(question, pagePath?, service?)`

### Reviews (`lib/reviews.ts`)
- `getGoogleReviews(opts?)` — fetches from Google Places API with static fallback
- `toSchemaRating()` — returns AggregateRating for JSON-LD
- Falls back to 3 curated reviews when API unavailable

---

## Design Tokens (CSS Custom Properties) — UPDATED

All colors use raw HSL triplets (no `hsl()` wrapper) for Tailwind opacity modifier support.
Format in CSS: `hsl(var(--primary))` | In Tailwind: `bg-primary`, `text-accent/80`

### Architecture (3 tiers — never skip levels)
```
Primitives (--brand-navy-500, --brand-teal-300, --neutral-600)
  ↔ mapped to
Semantic tokens (--primary, --accent, --action-primary, --text-secondary)
  ↔ bridged via @theme inline to
Tailwind utilities (bg-primary, text-accent, border-muted)

Primitive utilities (bg-navy-*, bg-teal-*, border-teal-*) are bridged for one-off use in globals.css or static decorations only. Prefer semantic tokens in components: border-accent not border-teal-100, bg-accent-light not bg-teal-50.
```

**Rule:** Components use semantic tokens or Tailwind utilities. Primitives are for the globals.css mapping only — never reference `--brand-navy-500` directly in a component.

### Key Semantic Mappings

| Tailwind class / CSS var | Token | HSL Value | Use |
|---|---|---|---|
| `bg-primary` / `--primary` | brand-navy-500 | `224 76% 40%` | Headings, links, secondary CTA bg |
| `bg-accent` / `--accent` | brand-teal-500 | `169 80% 25%` | WhatsApp CTA bg, action-primary |
| `bg-background` / `--background` | surface-base | `0 0% 100%` | Page background |
| `text-foreground` / `--foreground` | text-primary | `222 84% 4.9%` | Body text |
| `text-muted-foreground` / `--muted-foreground` | text-secondary | `215 16% 46%` | Subtle text |
| `bg-muted` / `--muted` | surface-sunken | `220 14% 96%` | Alt section backgrounds |
| `bg-footer` / `--footer` | surface-inverse | `222 47% 11%` | Footer background |
| `text-text-accent` / `--text-accent` | brand-teal-700 | `169 80% 20%` | Price display color |
| `text-text-brand` / `--text-brand` | brand-navy-500 | `224 76% 40%` | Branded text accents |
| `bg-action-primary` | action-primary | `169 80% 25%` | WhatsApp button bg |
| `bg-action-secondary` | action-secondary | `224 76% 40%` | Phone/secondary button bg |

### CTA Button Colors
- **WhatsApp (primary CTA):** `bg-action-primary hover:bg-action-primary-hover text-action-primary-text`
- **Phone (secondary CTA):** `bg-action-secondary hover:bg-action-secondary-hover text-action-secondary-text`
- **Button text is ALWAYS white** — `--action-*-text: 0 0% 100%`

### Extended Utilities Available
- `bg-navy-{50,100,300,500,700,900}` — Brand navy primitives via Tailwind
- `bg-teal-{50,100,300,500,700,900}` — Brand teal primitives via Tailwind
- `text-text-{primary,secondary,disabled,brand,accent,inverse}` — Semantic text colors
- `border-border-strong` — Stronger border variant
- `bg-accent-light` — Badges, credential chips, trust signals

### Font Mapping (unchanged)
- `font-sans` → Open Sans (body text)
- `font-serif` → Montserrat (headings — intentional, not an error)

### ⚠️ Token Usage Rules for Components

1. **@theme inline is the gatekeeper.** A CSS variable in `:root` does NOT automatically
   become a Tailwind class. It must ALSO have a `--color-*` mapping in the `@theme inline`
   block of globals.css. If you add a new token to `:root`, add its bridge too.

2. **Prefer semantic tokens over primitives.** Use `border-accent/20` not `border-teal-100`,
   `bg-muted` not `bg-neutral-100`. Primitives are bridged for convenience but semantic
   tokens are the correct abstraction layer for components.

3. **Button text is always `text-white`.** Do not use `text-action-primary-text` or
   `text-accent-foreground` — just hardcode `text-white`. Per brand spec, CTA button
   text never flips.

4. **Before using a color class, verify it exists.** Search `@theme inline` in globals.css
   for `--color-{name}`. If it's not there, the class won't work and Tailwind fails silently.

### Pre-Commit Component Checklist

Before shipping any component or page change:

1. **Colors:** Every color class used has a `--color-*` entry in `@theme inline`
2. **Data:** All prices, names, phones, addresses imported from lib/ — nothing hardcoded
3. **Buttons:** Use `WhatsAppButton` (variant: primary|outline) or `CallButton` (variant: secondary|inverse|ghost)
4. **Layout:** Sections use `container-page` + `section-padding`
5. **Photos:** `DOCTOR.photos.headshot` (not `DOCTOR.photoPath` — that doesn't exist)

---

## Design System Standards

These rules govern all visual implementation. They are non-negotiable.

### Spatial System: 8-Point Grid

ALL spacing values must be multiples of 8px. The only exception is 4px for
tight typography pairs (heading directly above its subtitle).

| Tailwind | Pixels | Use |
|----------|--------|-----|
| `1` | 4px | Tight pairs only: heading → subtitle |
| `2` | 8px | Minimum gap between any elements |
| `4` | 16px | Standard element gap within a section |
| `6` | 24px | Between visual groups within a section |
| `8` | 32px | Between sections or major content breaks |

**Banned values:** `mb-1.5` (6px), `mb-3` (12px), `mb-5` (20px), `mb-7` (28px),
`py-2.5` (10px), `py-3.5` (14px), `gap-3` (12px), `gap-5` (20px), `gap-7` (28px).

**Rule: Internal ≤ External.** Padding inside a component must be ≤ margin
between components. Card internal padding of 24px means cards must be spaced
≥ 24px apart.

### Icon Sizes

Icons follow the same 8px grid: `16px` (h-4), `20px` (h-5), `24px` (h-6), `32px` (h-8).

| Context | Size | Tailwind |
|---------|------|----------|
| Inline with text | 16px | `h-4 w-4` |
| Standalone small | 20px | `h-5 w-5` |
| Feature/callout | 24px | `h-6 w-6` |
| Hero/large | 32px | `h-8 w-8` |

### Section Layout Pattern

Every page section follows this structure:

```tsx
<section className="bg-background"> {/* or bg-muted — ALTERNATING */}
  <div className="container-page section-padding">
    {/* content */}
  </div>
</section>
```

**Background alternation:** Consecutive sections MUST alternate between
`bg-background` (white) and `bg-muted` (grey). Never put two `bg-background`
or two `bg-muted` sections adjacent. The only exceptions are:
- Special-purpose banners (emergency: `bg-red-50`, CTA: `bg-primary`)
- Thin accent banners (`bg-accent-light`) that act as visual separators

### Mobile-First Layout Rules

Design for 375px first, then enhance for larger screens.

**Stacking:** Any `flex-row` or grid layout must have a `flex-col` or single-column
mobile equivalent. Use `flex-col sm:flex-row` or `grid-cols-1 md:grid-cols-3`.

**Price badges:** Stack price + description vertically on mobile, inline on sm+.
Never let a price wrap mid-value ("$4,500\nMXN" is broken).

**Service rows:** On mobile, stack name above price (flex-col) to prevent long
service names from being squeezed. Use `flex-col sm:flex-row sm:justify-between`.

**CTA hierarchy on mobile stack:** When CTAs stack vertically, WhatsApp stays
full-width and prominent. Call button should be slightly smaller (shorter
`min-h`, smaller `text-sm`) to create visual deference even at full width.

**Sticky CTA clearance:** If a sticky mobile CTA bar exists, the page must have
enough bottom padding (`pb-20` or equivalent) so the last section's content
doesn't hide behind the bar.

**Touch targets:** All interactive elements must be at least 44x44px (WCAG) on
mobile. Buttons use `min-h-[48px]` for comfortable thumb tapping.

### Typography Hierarchy

| Element | Font | Size (mobile → desktop) | Weight |
|---------|------|------------------------|--------|
| Page H1 | Montserrat (`font-serif`) | `text-3xl md:text-4xl lg:text-5xl` | `font-extrabold` |
| Section H2 (primary) | Montserrat | `text-2xl md:text-3xl` | `font-bold` |
| Section H2 (supporting) | Montserrat | `text-xl md:text-2xl` | `font-bold` |
| Subsection H3 | Montserrat | `text-lg` | `font-semibold` |
| Body text | Open Sans (`font-sans`) | `text-base` (default) | `font-normal` |
| Supporting text | Open Sans | `text-sm` | `font-normal` |
| Micro text (badges, chips) | Open Sans | `text-xs` | `font-medium` |

**H2 sizing is NOT uniform.** Primary sections (Hero, Procedure Cards) get
`text-2xl md:text-3xl`. Supporting sections (FAQ, Services Catalog) get
`text-xl md:text-2xl`. This creates visual hierarchy between sections.

All heading text uses `tracking-tight`. Body text uses default tracking.

Heading text color is always `text-foreground`. Reserve `text-primary` exclusively for interactive elements (links, CTAs, clickable text).

### CTA Hierarchy

WhatsApp is ALWAYS the primary CTA. Call is ALWAYS secondary. This hierarchy
must be visually enforced everywhere they appear together:

| Context | WhatsApp | Call |
|---------|----------|------|
| Hero | `variant="primary"` + wider (`sm:px-8`) | `variant="ghost"` |
| Doctor section | `variant="primary"` (compact: `text-sm px-4 py-2`) | Not shown — use text link instead |
| Bottom CTA | `variant="primary"` + wider (`sm:px-10`) | `variant="inverse"` |
| Mobile sticky | `variant="primary"` (full width) | Small icon-only call button |
| Emergency | Not used | `variant="ghost"` with red tint |

**Visual hierarchy rules:**
- WhatsApp button must always be wider than Call button when side by side
- WhatsApp uses filled background; Call uses outline/ghost/transparent
- On mobile stack (flex-col), WhatsApp is always first (top)

### Component Button Variants

**WhatsAppButton** (`components/WhatsAppButton.tsx`):
- `variant="primary"` — teal bg, white text (default, most common)
- `variant="outline"` — transparent bg, teal border + text

**CallButton** (`components/CallButton.tsx`):
- `variant="secondary"` — navy bg, white text (default)
- `variant="inverse"` — transparent bg, white border + text (for dark backgrounds)
- `variant="ghost"` — transparent bg, subtle border, foreground text (inline use)

### Card Design Patterns

| Card Type | Background | Border | Shadow | Radius |
|-----------|------------|--------|--------|--------|
| Procedure card | `bg-card` | `border border-border` | `shadow-sm hover:shadow-md` | `rounded-xl` |
| Trust card (doctor) | `bg-muted` | `border border-border` | none | `rounded-2xl` |
| Service row | `bg-card` | `border-t border-border` (between rows) | none | Container: `rounded-xl` |
| FAQ item | `bg-background` | `border border-border` | `shadow-sm hover:shadow-md` | `rounded-2xl` |
| Callout/banner | `bg-accent-light` | `border border-accent/20` | none | `rounded-xl` |

### Color Punctuation

The mid-page (between hero and footer) must not be a monotonous white/grey
alternation. Use these color moments:

1. **Hero price badge** — `bg-accent-light` teal tint
2. **Procedure card hover** — `hover:border-accent/30` teal border
3. **Biopsias differentiator** — `bg-accent-light` banner
4. **Emergency banner** — `bg-red-50` red urgency
5. **Bottom CTA** — `bg-primary` navy block

At least 2 of these color moments must be visible between the hero and footer.

### Hover & Interaction States

Every clickable element must have a visible hover state:

| Element | Hover Effect |
|---------|-------------|
| Procedure cards | `hover:shadow-md hover:border-accent/30` + arrow slides: `group-hover:gap-3` |
| Service rows | `hover:bg-muted/50` + left border accent: `hover:border-l-accent` |
| Text links | `hover:underline` |
| Buttons | `hover:bg-{variant}-hover` (defined in component) |
| FAQ items | `hover:shadow-md` |

### Progressive Disclosure

Long content sections must use progressive disclosure:

- **FAQ:** Show `maxVisible` items (default 6), rest behind "Ver más preguntas"
- **Therapeutic services:** Show first 4, rest behind "Ver N más" `<details>`
- **Advanced services:** Collapsed by default behind `<details>`
- **Never hide:** Diagnostic services, Consultas, emergency info

---

## Procedure Page Pattern

Every procedure page follows this structure:

```tsx
import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
// ... component imports

export const revalidate = 86400
export const metadata = metaFor("routeKey")

export default function ProcedurePage() {
  return (
    <>
      {/* 1. Hero: H1 + "Desde $X MXN" + WhatsApp CTA + trust badges */}
      {/* 2. What is the procedure (1-sentence definition) */}
      {/* 3. What's included in the price */}
      {/* 4. Preparation / what to expect */}
      {/* 5. Dr. Quiroz credentials snippet */}
      {/* 6. FAQ section (Radix accordion + FAQ schema) */}
      {/* 7. Related procedures grid */}
      {/* 8. Bottom CTA (WhatsApp) */}
    </>
  )
}
```

**H1 format:** `{Procedure} en Mérida` — must match exact procedure name for SEO.

### Homepage Section Structure

The homepage is a routing engine, not a brochure. Each section serves a specific
patient persona and routes them to the right page.

```
Section 1: Hero                    → bg-background
  Trust bar (stars, hours) → H1 → subtitle → price badge → CTAs → location
  Serves: ALL personas (first impression)

Section 2: Procedure Cards (3)     → bg-muted
  Endoscopia | Colonoscopia | CPRE — each card has: price, description, included features, CTA
  Serves: Persona 2 (price shoppers), Persona 4 (procedure seekers)

Section 3: Doctor Trust Strip      → bg-background
  Card with: credential bar, photo, name, quote, WhatsApp CTA
  Serves: Persona 3 (referred patients)

Banner: Biopsias Differentiator    → bg-accent-light (thin strip, not a full section)
  "Biopsias incluidas sin límite" + "Ver todos los precios" link
  Serves: Persona 2 (price shoppers)

Section 4: Services Catalog        → bg-background
  Full service list by category with prices, progressive disclosure for long lists
  Serves: Persona 2 + 4 (price shoppers + procedure seekers)

Section 5: FAQ                     → bg-muted
  6 visible questions, rest behind disclosure. Left-aligned heading.
  Serves: Persona 5 (info seekers)

Emergency Banner                   → bg-red-50 (urgency)
  Quick link + call button for digestive emergencies
  Serves: Emergency traffic

Section 6: Bottom CTA              → bg-primary (navy)
  "¿Listo para agendar?" + WhatsApp (primary) + Call (inverse)
  Serves: ALL personas (conversion)
```

---

## Patient Personas (Priority Order)

Design decisions should serve these personas in order:

| # | Persona | Conv Rate | What They Need |
|---|---------|-----------|---------------|
| 1 | **El Buscador Local** (location seeker) | 15.0% | Location-first: map, address, hospital name, WhatsApp above fold |
| 2 | **El Comparador de Precios** (price shopper) | 7.2% | Pricing page (/precios), "Desde $X" in hero, what's included |
| 3 | **El Paciente Referido** (doctor/brand seeker) | 9.3% | Dr. profile, credentials, fast booking CTA |
| 4 | **El Paciente Directo** (procedure seeker) | 6.1% | Procedure definition + Schedule CTA in first scroll |
| 5 | **El Investigador** (info seeker) | 0.7% | FAQ/blog content, fear-based answers, soft CTAs (organic only) |

---

## Performance Gaps to Fix

### CRITICAL: Build /precios page
- 6,219 Search Console impressions on pricing queries → nowhere to land
- Include: all 22 services, "Desde" prices for 14, "Cotización" for 8
- What's included: anesthesia, biopsy collection, recovery room, consultation
- What's NOT included: pathology readings ($1,200 extra)
- Competitive differentiator: single flat fee for biopsies (competitors charge per biopsy)

### CRITICAL: Fix homepage conversion
- 2,774 sessions, 17s avg engagement, 6.6% conversion → worst core page
- Redesign as routing engine: segment by procedure/intent, route to right page in <5 seconds

### HIGH: Rewrite CPRE page
- Worst performer at every level: 0.65% organic CTR, 38s engagement, 7.7% conversion
- $21,056 ad spend with only 46.3 conversions
- Highest-margin procedure ($15,000 profit) — fixing this directly impacts revenue

### HIGH: Use colonoscopia page as content model
- Best engagement: 67s avg time, 14.6% conversion
- Whatever structure it uses → replicate across endoscopia and CPRE pages

---

## What's Included in the Price (for content)

**Included:**
- Anesthesia (sedación)
- Biopsy collection — flat fee regardless of number (competitors charge per biopsy)
- Recovery room
- Pre-procedure consultation

**NOT included:**
- Pathology readings (lecturas de biopsias): $1,200 MXN additional

**Pricing notes:**
- All "Desde" prices are base rates for scheduled weekday procedures (Mon-Fri)
- Weekend/holiday procedures may cost more
- Dr. Quiroz works with all major insurance companies

---

## Competitive Positioning (for content)

| Procedure | Endoscopia del Mayab | Mérida Competitors | Cancún |
|-----------|---------------------|-------------------|--------|
| Endoscopia | $4,500 MXN | ~$5,500–6,500 | — |
| Colonoscopia | $5,000 MXN | ~$6,000–7,000 | — |
| CPRE | $26,000 MXN | ~$34,000 | ~$40,000 |

**Why prices are low:** Dr. Quiroz owns his equipment outright (paid cash), hospital overhead fixed at ~$20K/month. Not a budget-quality play — same hospital, same equipment, lower cost.

---

## Brand Voice

- **Warm, not clinical.** Patients are scared. Reassure, don't lecture.
- **Simple Spanish.** Procedure names in H1 for SEO, plain language immediately after.
- **Answer the real questions first:** ¿Qué es? ¿Cuánto cuesta? ¿Duele?
- **Don't oversell.** Educational content builds trust. Soft CTAs: "Si estás listo para agendar, el Dr. Quiroz te puede orientar."
- **Emphasize direct contact.** "Cuando nos escribes, te contesta el Dr. Quiroz directamente."
- **Price-forward.** Never bury pricing. Show "Desde $X MXN" in hero sections.

---

## Event Tracking

CTA tracking is handled by the component layer — you rarely call GTM functions directly:

```tsx
// WhatsApp — just use the component, tracking is built in
<WhatsAppButton service="colonoscopia" position="hero" procedureName="Colonoscopia" />

// Phone — same pattern
<CallButton service="colonoscopia" position="hero" />

// FAQ — pushFaqExpand() fires automatically on <details> toggle
<Faq routeKey="colonoscopia" service="colonoscopia" />
```

For non-component tracking (scroll depth, pricing views, CTA viewport), use `lib/gtm.ts` directly:

```ts
import { pushScrollDepth, pushPricingView, pushCtaView } from "@/lib/gtm"
```

**All old `pushCta()` calls have been migrated.** If you see `pushCta` anywhere, it's dead code.

### Google Ads conversions must trigger on the bare event, never path-scoped

Conversion triggers (`whatsapp_click` / `phone_click`) in the GTM container MUST fire
on the Custom Event name alone. NEVER add a Page Path, `cta_id`, or `position`
condition to an Ads conversion trigger.

Why: every CTA emits a byte-identical event regardless of page — same event name,
`service`, `cta_number`, `ref_code`. The ONLY fields that differ by page are
`page_path`, `cta_id` (`…-lp-…`), and `position` (`lp-…`). A trigger scoped to old
URLs (e.g. "Page Path contains `endoscopia-merida`" or "excludes `/lp/`") fires on
public pages and SILENTLY misses every `/lp/` click. GA4 still logs it (the GA4 tag
has no such condition), so the symptom is: GA4 realtime shows `whatsapp_click`, but
Ads conversions read zero on the new pages.

**Regression signature** (any new route — LP, microsite, campaign page):
GA4 = events present, Google Ads = 0 conversions on the new path.
**Fix:** open the Ads conversion trigger in GTM → remove any path/`cta_id`/`position`
condition → trigger on Custom Event = `whatsapp_click` (and `phone_click`) only →
publish. Same applies to the GCLID/ref-code offline beacon trigger — path-scoping it
breaks Cita Realizada reconciliation for the new pages.

This lives in the GTM container UI, NOT the repo. **No code change causes or fixes it** —
so when Ads conversions read zero on a new route, check the trigger scope here before
touching `lib/gtm.ts` or the button components (which are already correct).

---

## Pre-Commit Checklist

Run through this before every `git commit`:

- [ ] `pnpm build` passes with zero errors
- [ ] All spacing values are 8px grid multiples (no `mb-3`, `mb-5`, `py-2.5`, etc.)
- [ ] All color classes exist in `@theme inline` (no silent Tailwind failures)
- [ ] Prefer semantic tokens over primitives in components
- [ ] CTA hierarchy: WhatsApp primary (wider, filled), Call secondary (narrower, ghost/outline)
- [ ] Section backgrounds alternate: `bg-background` ↔ `bg-muted`
- [ ] All data (prices, names, phones) from lib/ — nothing hardcoded
- [ ] This app is light-mode only — no dark mode
- [ ] Mobile layout at 375px: no horizontal scroll, all content readable
- [ ] Heading hierarchy: H1 → H2 → H3, no skipped levels

---

## Git Conventions

- Branch from `main`
- Commit messages: `feat:`, `fix:`, `refactor:`, `content:`, `seo:`
- Keep procedure pages self-contained (each page.tsx has its own content, not pulled from a CMS)
- Run `pnpm build` before pushing — must pass without errors

---

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Base URL (default: https://www.endoscopiadelmayab.com) |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager container ID |
| `NEXT_PUBLIC_PHONE_E164` | Phone in E.164 format (default: +529992360153) |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number digits only (default: 529992360153) |
| `GOOGLE_PLACE_ID` | Google Place ID for reviews API |
| `GOOGLE_PLACES_API_KEY` | Google Places API key (optional — fallback reviews used without it) |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token for appointment intake notifications (server-only, no `NEXT_PUBLIC_`) |
| `TELEGRAM_CHAT_ID` | Telegram chat/supergroup ID that receives intake submissions. ⚠️ Supergroups use the `-100…` form; if a group is upgraded to a supergroup its ID changes and must be updated here |

---

## Quick Reference: Adding a New Page

1. Add service to `lib/services.ts` → `SERVICES[]` (if it's a procedure)
2. Add pricing to `lib/pricing.ts` → `PRICING` (if applicable)
3. Add route config to `lib/routes-seo.ts` → `ROUTES_SEO`
4. Add FAQ entries to `lib/faq.ts` + add route key to `BY_ROUTE` map
5. Create `app/{slug}/page.tsx` using the procedure page pattern
6. Use `export const metadata = metaFor("routeKey")` for SEO
7. Add `procedureSchema()` and `faqSchema(getFaqsFor("key"))` JSON-LD scripts
8. Add to sitemap in `app/sitemap.ts`
9. Run `pnpm build` — must pass

---

## Deleted Modules & Components — Migration Complete

### Deleted /lib/ modules

| Old Import | New Import |
|-----------|-----------|
| `from "@/lib/contact"` | `from "@/lib/clinic"` |
| `from "@/lib/places"` | `from "@/lib/reviews"` |
| `pushCta({ cta_type: "whatsapp" })` | `pushWhatsAppClick()` from `"@/lib/gtm"` |
| `pushCta({ cta_type: "call" })` | `pushPhoneClick()` from `"@/lib/gtm"` |
| `buildFaqSchema()` from faq.ts | `faqSchema()` from `"@/lib/schema"` |
| `serviceJSONLD()` from schema.ts | `procedureSchema()` from `"@/lib/schema"` |
| `medicalClinicJSONLD()` from schema.ts | `globalGraph()` from `"@/lib/schema"` |

### Deleted components — do NOT recreate

| Deleted Component | Replaced By |
|---|---|
| `ClinicJsonLd.tsx` | `globalGraph()` in layout.tsx — one `<script>` tag, no component needed |
| `ServiceJsonLd.tsx` | `procedureSchema()` inline per procedure page.tsx |
| `ServiceJsonLdAuto.tsx` | Same — each page owns its schema, no auto-injector |

Schema is now handled exclusively by `/lib/schema.ts` functions called inline in layouts and pages. See `components/README.md` for the pattern.

---

## What NOT to Do

- **Don't create a blog/CMS system yet.** Content lives in page.tsx files directly.
- **Don't add authentication or user accounts.**
- **Don't add new contact forms.** WhatsApp is the contact mechanism everywhere except the one sanctioned appointment intake form on the endoscopia/colonoscopia pages (see "Appointment Intake Form"). Don't add forms to other pages.
- **Don't use `next/image` with external URLs** unless configured in `next.config.mjs`.
- **Don't add English content** (data shows US traffic is bots).
- **This app is light-mode only. No dark mode.** The `@custom-variant dark` registration is kept in globals.css for shadcn compatibility but `.dark` class is never applied via `forcedTheme="light"` in the theme provider.
- **Don't change the Vercel deployment config** without checking redirects.
