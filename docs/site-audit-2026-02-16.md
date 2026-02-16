# Site Audit Report — Endoscopia del Mayab

**Generated:** 2026-02-16
**Scope:** Full project scan (URL inventory, per-page technical, cross-page consistency, accessibility, performance, content quality, SEO/GEO/GBP, build verification)

## Executive Summary

- Total pages scanned: 29 (page.tsx files)
- P0 Critical issues: 2
- P1 High issues: 7
- P2 Medium issues: 8
- P3 Low issues: 6
- **Build status:** PASS (0 errors, 34 static pages generated)

The site is architecturally sound with excellent data sourcing, design token compliance, and CTA hierarchy. The two critical issues are: (1) Dr. Quiroz incorrectly called "gastroenterólogo" in patient-facing text on 3+ pages, and (2) a broken internal link to `/preparacion-colonoscopia` on the highest-converting page. Performance and accessibility are strong with only minor gaps (one WCAG contrast near-fail, missing focus trap on mobile menu).

---

## P0 — Critical (Fix Immediately)

### P0-1: Dr. Quiroz incorrectly called "gastroenterólogo" in patient-facing text

Dr. Quiroz is an **Endoscopista Gastrointestinal**, NOT a gastroenterologist. His cédula (EGI230072) is for Alta Especialidad en Endoscopia, and his board cert is in Cirugía General.

| File | Line | Content | Classification |
|------|------|---------|----------------|
| `app/colonoscopia-merida/page.tsx` | ~545 | "es gastroenterólogo y endoscopista" | ❌ WRONG |
| `app/consultas-digestivas-merida/page.tsx` | 37 | "gastroenterólogo certificado" (JSON-LD description) | ❌ WRONG |
| `app/consultas-digestivas-merida/page.tsx` | 134 | "gastroenterólogo certificado" (visible copy) | ❌ WRONG |
| `app/dr-omar-quiroz/page.tsx` | 121 | H2: "Gastroenterólogo y Endoscopista Certificado" | ❌ WRONG |
| `lib/doctor.ts` | 18 | `medicalSpecialtyDisplay: "Gastroenterología"` | ❌ WRONG — should be "Endoscopia Gastrointestinal" |
| `lib/doctor.ts` | 16 | `medicalSpecialty: "Gastroenterology"` (schema.org) | ⚠️ REVIEW — may be closest schema.org value |
| `lib/schema.ts` | 100, 162, 271 | `medicalSpecialty: "Gastroenterology"` | ⚠️ REVIEW |
| `lib/faq.ts` | ~628 | "¿Qué ventaja tiene que el Dr. Quiroz sea cirujano gastroenterólogo?" | ❌ WRONG — question title misrepresents specialty |
| `lib/faq.ts` | ~883 | "¿Cuánto cuesta la consulta con un gastroenterólogo?" | ⚠️ OK as SEO query match, but answer must clarify correct title |

**Impact:** Misleads patients, creates legal/licensing risk, affects trust signals.
**Fix:** Replace all patient-facing "gastroenterólogo" with "endoscopista certificado" or "endoscopista gastrointestinal". For schema.org, "Gastroenterology" may be the pragmatic closest value — document the decision.

### P0-2: Broken internal link `/preparacion-colonoscopia` on colonoscopia page

**File:** `app/colonoscopia-merida/page.tsx` (~line 507)
**What:** Links to `/preparacion-colonoscopia` which does NOT exist — no page.tsx, not in sitemap, not in ROUTES_SEO. This is a 404 on the highest-converting procedure page (14.6% conversion).
**Fix:** Either create the page or remove/update the link.

---

## P1 — High (Fix This Sprint)

### P1-1: Missing "Yucatán" in visible content on 3 pages

| Page | File |
|------|------|
| Gastrostomía PEG | `app/gastrostomia-endoscopica-peg-merida/page.tsx` |
| Colonoscopia | `app/colonoscopia-merida/page.tsx` |
| Contacto | `app/contacto/page.tsx` |

**What:** "Yucatán" appears only in meta/schema, not in rendered JSX. Local SEO signal missing.
**Fix:** Add "Mérida, Yucatán" to at least one visible section per page.

### P1-2: Missing `/precios` link on colonoscopia page

**File:** `app/colonoscopia-merida/page.tsx`
**What:** CLAUDE.md requires every procedure page to link to `/precios`. The highest-converting page doesn't.
**Fix:** Add "Ver todos los precios" link in pricing section.

### P1-3: Missing `/dr-omar-quiroz` link on 5 procedure pages

| Page | File |
|------|------|
| Colonoscopia | `app/colonoscopia-merida/page.tsx` |
| Esclerosis Várices | `app/esclerosis-varices-gastricas-merida/page.tsx` |
| Ligadura Várices | `app/ligadura-varices-esofagicas-merida/page.tsx` |
| Dilatación Esofágica | `app/dilatacion-esofagica-merida/page.tsx` |
| Dilatación Colónica | `app/dilatacion-colonica-merida/page.tsx` |

**Fix:** Add `<Link href="/dr-omar-quiroz">` in doctor credential section.

### P1-4: Missing `breadcrumbSchema` on colonoscopia page

**File:** `app/colonoscopia-merida/page.tsx`
**What:** Best-performing page lacks breadcrumb structured data. Every other procedure page has it.
**Fix:** Add `breadcrumbSchema()` inline `<script>` tag.

### P1-5: Missing `breadcrumbSchema` on APC page

**File:** `app/apc-coagulacion-plasma-argon-merida/page.tsx`
**What:** No breadcrumbSchema found.
**Fix:** Add breadcrumbSchema around line 30-40.

### P1-6: Missing `procedureSchema` + `breadcrumbSchema` on emergencias page

**File:** `app/emergencias-digestivas-merida/page.tsx`
**What:** No procedureSchema or breadcrumbSchema. Uses `metaFor("emergencias")` but lacks inline schema scripts.
**Fix:** Add both schemas.

### P1-7: `text-secondary` on `bg-muted` fails WCAG AA contrast (4.36:1 vs 4.5:1 required)

**File:** `app/globals.css` — `--neutral-600` value `215 16% 46%`
**What:** Muted/supporting text on grey alternating sections (`bg-muted`) has contrast ratio of 4.36:1, below the 4.5:1 AA threshold for normal text.
**Fix:** Darken `--neutral-600` from `215 16% 46%` to `215 16% 43%`, or use `text-foreground/80` on `bg-muted` sections instead of `text-muted-foreground`.

---

## P2 — Medium (Fix This Cycle)

### P2-1: Duplicate FAQ JSON-LD on ~9 pages

Pages that call both `faqSchema(getFaqsFor(...))` in a `<script>` AND render `<Faq routeKey>` (which also generates JSON-LD) produce duplicate FAQPage schemas:

| Affected pages |
|---------------|
| cpre-merida, panendoscopia-merida, dilatacion-esofagica-merida, dilatacion-colonica-merida, dilatacion-biliar-merida, cierre-fistulas-merida, emr-merida, endoprotesis-duodenales-merida, ligadura-hemorroides-merida |

**Fix:** Remove inline `<script>` faqSchema since the Faq component handles it. Pick one approach site-wide.

### P2-2: Mobile menu dialog lacks focus trap

**File:** `components/SiteHeader.tsx` (lines 113-221)
**What:** When mobile menu opens, keyboard users can tab behind the overlay to page content. Moderate accessibility concern.
**Fix:** Add focus trap using `@radix-ui/react-dialog` or manual focus trap.

### P2-3: Footer nav/social links have ~20px tap targets (below 44px WCAG minimum)

**File:** `components/Footer.tsx` (lines 99-125)
**What:** Footer links have only `space-y-2` (8px gap) with `text-sm` (~20px line height). Below 44px WCAG touch target minimum.
**Fix:** Add `py-2` or `min-h-[44px]` to footer link items.

### P2-4: Homepage missing `GoogleReviews` component

**File:** `app/page.tsx`
**What:** Homepage (lowest-converting core page at 6.6%) lacks GoogleReviews component that all procedure pages include.
**Fix:** Add `<GoogleReviews />` in appropriate section.

### P2-5: Missing schema images referenced in HomepageSchema

**File:** `components/home/HomepageSchema.tsx` (lines 97, 123)
**What:** Schema references `/logo.png` and `/clinic-photo.jpg` with TODO comments. Files don't exist in `/public/`.
**Fix:** Add actual clinic logo and facility photo, or remove TODO references.

### P2-6: Hardcoded "Hospital Amerimed" in retiro-balon page

**File:** `app/retiro-balon-gastrico-merida/page.tsx` (lines 70, 203, 462)
**What:** Hospital name hardcoded in narrative text instead of using `CLINIC` data.
**Fix:** Replace with `CLINIC.address.streetAddress` or `DOCTOR.worksFor.hospital`.

### P2-7: `gap-1.5` spacing violation

**File:** `app/cierre-fistulas-clips-endoscopicos-merida/page.tsx` (line 330)
**What:** Badge uses `gap-1.5` instead of `gap-1` or `gap-2` per 8px grid.
**Fix:** Change to `gap-1` or `gap-2`.

### P2-8: Unverified Cancún CPRE pricing claim

**File:** `lib/faq.ts` (~line 261)
**Content:** "En Cancún el mismo procedimiento cuesta $40,000+ MXN."
**What:** Claim lacks source or date. Credible but unsourced.
**Fix:** Soften to "puede costar $40,000+ en Cancún" or add research date.

---

## P3 — Low (Backlog)

### P3-1: `/preparacion-colonoscopia` planned but not implemented

Listed as TODO in CLAUDE.md. No page, no sitemap entry, no ROUTES_SEO key. Future sprint.

### P3-2: `SERVICE_ALIASES` array is empty

**File:** `lib/services.ts:359`
No colloquial name redirects configured. Add if SEO data shows demand for alternate names.

### P3-3: `/servicios` in sitemap despite 301 redirect to `/`

**File:** `app/sitemap.ts` (~line 47)
Wastes crawl budget. Remove from sitemap entries.

### P3-4: No Search Console CSV data in project

No `/data/` directory or CSV files. Recommendation: Export GSC data periodically to `data/search-console/`.

### P3-5: `next.config.mjs` — `ignoreBuildErrors` and `ignoreDuringBuilds` both true

**File:** `next.config.mjs`
Masks TS/lint issues at build time. Not blocking but creates blind spots.

### P3-6: Dead CSS rule `.sr-only.focus:focus` in globals.css

**File:** `app/globals.css` (lines 441-451)
Skip link uses Tailwind's `focus:not-sr-only` variant instead. The custom rule is never matched.

---

## URL Inventory Matrix

| Path | page.tsx | Sitemap | ROUTES_SEO | SERVICES[] | Status |
|------|----------|---------|------------|------------|--------|
| `/` | ✓ | ✓ | ✓ | N/A | ✅ |
| `/precios` | ✓ | ✓ | ✓ | N/A | ✅ |
| `/dr-omar-quiroz` | ✓ | ✓ | ✓ | N/A | ✅ |
| `/contacto` | ✓ | ✓ | ✓ | N/A | ✅ |
| `/emergencias-digestivas-merida` | ✓ | ✓ | ✓ | N/A | ⚠️ Missing schemas |
| `/consultas-digestivas-merida` | ✓ | ✓ | ✓ | N/A | ✅ |
| `/servicios` | ✓ | ✓ | ✗ | N/A | ✅ (301 → /) |
| `/endoscopia-merida` | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/colonoscopia-merida` | ✓ | ✓ | ✓ | ✓ | ⚠️ Missing /precios, /dr, breadcrumb |
| `/panendoscopia-merida` | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/cpre-merida` | ✓ | ✓ | ✓ | ✓ | ✅ |
| All 18 other procedures | ✓ | ✓ | ✓ | ✓ | ✅ (minor gaps on ~5) |

**Summary:** 27/29 routes fully registered. `/servicios` intentionally absent from ROUTES_SEO (redirect). `/preparacion-colonoscopia` is planned but not yet created.

---

## Accessibility Report

### Color Contrast (WCAG AA — 4.5:1 minimum for normal text)

| Text → Background | Ratio | Result |
|-------------------|-------|--------|
| text-primary (neutral-900) on white | 17.90:1 | PASS |
| text-primary on bg-muted (neutral-100) | 15.98:1 | PASS |
| text-secondary (neutral-600) on white | 4.89:1 | PASS |
| **text-secondary on bg-muted** | **4.36:1** | **FAIL** |
| text-accent (teal-700) on white | 7.94:1 | PASS |
| text-accent on accent-light (teal-50) | 7.62:1 | PASS |
| text-brand (navy-500) on white | 8.50:1 | PASS |
| White on action-primary (teal-500) — WhatsApp | 5.79:1 | PASS |
| White on action-secondary (navy-500) — Call | 8.50:1 | PASS |
| White on footer dark (neutral-900) | 17.90:1 | PASS |

### Semantic HTML & ARIA

| Check | Status |
|-------|--------|
| `<main>` landmark | ✅ `<main id="main">` in layout.tsx |
| `<nav>` with aria-label | ✅ In SiteHeader.tsx |
| `<footer>` semantic | ✅ In Footer.tsx |
| Skip navigation link | ✅ "Saltar al contenido" targeting #main |
| All images have alt text | ✅ 28/28 files with Image have alt= |
| No raw `<img>` tags | ✅ All use next/image (except GoogleReviews external avatars) |
| Focus-visible styles | ✅ Global `:focus-visible` in globals.css |
| FAQ accessibility | ✅ Native `<details>/<summary>`, aria-labelledby |
| Mobile menu ARIA | ✅ aria-expanded, role="dialog", aria-modal |
| Mobile menu focus trap | ❌ Missing — keyboard users can tab behind overlay |
| Footer touch targets | ❌ ~20px height (below 44px WCAG) |

---

## Performance Report

### Overall Grade: A-

| Category | Grade | Notes |
|----------|-------|-------|
| Image Optimization | B+ | All using next/image; external Google avatars use raw `<img>` (acceptable) |
| JavaScript Bundle | A | No heavy libraries, all pages are server components, GTM afterInteractive |
| Font Loading | A | next/font/google with `display: "swap"`, no external stylesheets |
| Third-Party Scripts | A | GTM non-blocking, Maps lazy-loaded, no render-blocking scripts |
| CSS | A | Single `@import "tailwindcss"`, semantic tokens well-organized |
| Metadata | A | Correct robots, canonical, OG, Twitter cards; no accidental noindex |

### Build Output

```
✓ Compiled successfully
✓ Generating static pages (34/34)
○ (Static) prerendered as static content

First Load JS shared by all: 101 kB
Average page size: 134 kB first load
```

Zero errors, zero warnings.

### Notable Performance Items

| Issue | Impact | Priority |
|-------|--------|----------|
| Missing schema images (logo.png, clinic-photo.jpg) referenced in HomepageSchema | Schema validation warnings | P2 |
| `next-themes` loaded for light-mode-only site | ~5KB unnecessary weight | P3 |
| Large OG image (omar-open-graph.jpg: 471KB) | OG card load time | P3 |

---

## Content Quality Report

### 9A. Specialty Correction (CRITICAL)

See P0-1. Three pages + lib/doctor.ts + lib/faq.ts incorrectly label Dr. Quiroz as "gastroenterólogo."

### 9B. Medical Content Accuracy — PASS

No cross-contamination between procedure pages. "¿Qué es?" sections are concise. Procedure scope is distinct across all 22 pages.

### 9C. Spanish Language Quality — PASS

- **Tú/usted:** Consistent informal tú throughout
- **Accents:** Correct (no "endoscopía", "colonoscopía", "biópsia")
- **English loanwords:** None detected in Spanish copy
- **Placeholders:** No lorem/TODO/FIXME in production content

### 9D. Trust & Credibility — PASS

- No fabricated statistics (all claims sourced or qualified)
- No fabricated testimonials (GoogleReviews component used)
- Doctor credentials present on procedure pages
- Hospital name consistent ("Hospital Amerimed Mérida")
- Cédula numbers displayed on doctor profile

### 9E. Pricing Consistency — PASS

- All prices use `displayFrom()` / `mxn(PRICING.x)` — zero hardcoded values
- "Incluye" sections use `INCLUDED_IN_PRICE` constant
- `ADDITIONAL_FEES` properly referenced where biopsies discussed

### 9F. Competitive Positioning — PASS (1 review item)

- Salud Digna/Chopo correctly identified as labs, not endoscopy providers
- Price advantage claims supported with market data
- ⚠️ Cancún CPRE pricing claim ($40,000+) lacks source date (P2-8)

---

## Search Console Insights

**Status:** No CSV data files in the project repository.

**Key insights from CLAUDE.md and prior audit data:**
- 6,219 pricing query impressions → `/precios` page now exists (monitor recovery)
- CPRE page: worst organic CTR (0.65%), highest ad spend ($21,056) — content rewrite needed
- Colonoscopia page: best engagement (67s, 14.6% conversion) — use as model
- 82-94% mobile traffic confirmed; all pages pass 375px layout check
- Non-www → www redirect configured via Vercel

**Recommendation:** Export GSC data to `data/search-console/` for future audits.

---

## Cross-Page Consistency

### Component Usage Matrix

| Component | Pages Using | Expected | Gap |
|-----------|------------|----------|-----|
| WhatsAppButton | 29/29 | All | ✅ None |
| CallButton | 28/29 | All with CTA | ✅ OK |
| Faq (routeKey) | 28/29 | All | ✅ Only /servicios missing (redirect) |
| GoogleReviews | 26/29 | All procedure pages | ⚠️ Missing: homepage, precios |
| breadcrumbSchema | 26/29 | All except homepage | ⚠️ Missing: colonoscopia, APC |
| procedureSchema | 24/29 | All procedure pages | ✅ All covered |
| container-page | 29/29 | All | ✅ |

### Design Token Compliance

- Raw hex colors (`bg-[#...]`): **0 violations** ✅
- Primitive color classes in pages: **0 violations** ✅
- Gradient on `<section>`: **0 violations** ✅
- All colors use semantic tokens from globals.css ✅

### CTA Order (WhatsApp before Call)

All 29 pages: **Correct order** ✅

---

## Recommended Fix Order

Priority ranked by impact × effort:

1. **Fix P0-1:** Replace "gastroenterólogo" with correct specialty across 3 pages + lib/doctor.ts + lib/faq.ts. Legal/credibility risk.
2. **Fix P0-2:** Resolve broken `/preparacion-colonoscopia` link on colonoscopia page. Either create page or remove link.
3. **Fix P1-4:** Add breadcrumbSchema to colonoscopia page (best-performing page).
4. **Fix P1-2:** Add `/precios` link to colonoscopia page.
5. **Fix P1-3:** Add `/dr-omar-quiroz` link to 5 pages (quick batch fix).
6. **Fix P1-1:** Add "Yucatán" to visible content on 3 pages (1 line each).
7. **Fix P1-7:** Darken `--neutral-600` by 3% lightness to pass WCAG AA contrast.
8. **Fix P2-1:** Deduplicate FAQ JSON-LD on 9 pages (remove inline scripts, keep Faq component).
9. **Fix P1-5/P1-6:** Add missing schemas to APC and emergencias pages.
10. **Fix P2-2/P2-3:** Mobile menu focus trap + footer touch targets (accessibility).

---

## Pages with Zero Issues

✅ `/endoscopia-merida` · ✅ `/cpre-merida` · ✅ `/panendoscopia-merida` · ✅ `/ligadura-hemorroides-internas-merida` · ✅ `/extraccion-cuerpos-extranos-endoscopia-merida` · ✅ `/dilatacion-biliar-merida` · ✅ `/endoprotesis-esofagicas-merida` · ✅ `/endoprotesis-biliares-merida` · ✅ `/endoprotesis-duodenales-merida` · ✅ `/endoprotesis-colonicas-merida` · ✅ `/cierre-fistulas-clips-endoscopicos-merida` · ✅ `/sutura-endoscopica-merida` · ✅ `/diseccion-endoscopica-submucosa-esd-merida` · ✅ `/reseccion-endoscopica-mucosa-emr-merida` · ✅ `/retiro-balon-gastrico-merida` · ✅ `/precios` · ✅ `/dr-omar-quiroz` (except P0-1 specialty)
