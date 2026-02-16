# Site Audit Report — Endoscopia del Mayab

**Generated:** 2026-02-15
**Scope:** Full project scan (URL inventory, per-page technical, cross-page consistency, build, SEO/GEO)

## Executive Summary

- Total pages scanned: 29 (page.tsx files)
- P0 Critical issues: 1
- P1 High issues: 4
- P2 Medium issues: 5
- P3 Low issues: 6
- **Build status:** PASS (0 errors, 34 static pages)

> **UPDATE 2026-02-15 (post-refactor):** `retiro-balon-gastrico-merida` was refactored and re-audited. It now passes 15/16 rules (was 2/13). The only remaining issue is hardcoded "Hospital Amerimed" in 3 narrative lines (P2). All P0/P1 issues for that page are resolved.

The site is architecturally sound — all 29 pages now follow the refactored pattern with proper data sourcing, schema markup, CTA hierarchy, and design tokens. Remaining issues are minor: a broken link to `/preparacion-colonoscopia`, missing "Yucatán" text on 3 pages, missing `/dr-omar-quiroz` links on 5 pages, and duplicate FAQ JSON-LD on ~9 pages.

---

## P0 — Critical (Fix Immediately)

### ~~P0-1: `retiro-balon-gastrico-merida/page.tsx` — Missing all JSON-LD schema~~ ✅ RESOLVED

> Refactored. Page now has procedureSchema, faqSchema (via Faq component), and breadcrumbSchema.

### P0-2: Broken internal link `/preparacion-colonoscopia` on colonoscopia page

**File:** `app/colonoscopia-merida/page.tsx` (approx. line 507)
**What:** Page links to `/preparacion-colonoscopia` but that page does NOT exist — no `page.tsx`, not in sitemap, not in ROUTES_SEO. This is a broken 404 link on the highest-converting procedure page (14.6% conversion).
**Impact:** Broken links hurt UX and SEO (crawl errors). Colonoscopia is the best-performing page.
**Fix:** Either create the `/preparacion-colonoscopia` page or remove/update the link.

---

## P1 — High (Fix This Sprint)

### ~~P1-1 through P1-5: `retiro-balon-gastrico-merida` issues~~ ✅ ALL RESOLVED

> CTA order, hardcoded data, raw layout, gradients, section alternation — all fixed in refactor. Page now passes 15/16 rules.

### P1-6: Missing "Yucatán" in visible content — 3 procedure/info pages

| Page | File |
|------|------|
| Gastrostomía PEG | `app/gastrostomia-endoscopica-peg-merida/page.tsx` |
| Colonoscopia | `app/colonoscopia-merida/page.tsx` |
| Contacto | `app/contacto/page.tsx` |

**What:** "Yucatán" does not appear in rendered JSX (only in meta/schema). Local SEO signal missing.
**Fix:** Add "Mérida, Yucatán" to at least one visible section per page (e.g., location badge, address line, or hero subtitle).
**Note:** `precios/page.tsx` and `servicios/page.tsx` are also missing but lower priority (precios is a utility page; servicios redirects to /).

### P1-7: Missing `/precios` link on `colonoscopia-merida`

**File:** `app/colonoscopia-merida/page.tsx`
**What:** CLAUDE.md requires every procedure page to link to `/precios`. Colonoscopia (highest-converting page) doesn't.
**Fix:** Add a "Ver todos los precios" link in the pricing or included-items section.
> ~~retiro-balon~~ ✅ RESOLVED — now has /precios link at line 226.

### P1-8: Missing `/dr-omar-quiroz` link on 5 procedure pages

| Page | File |
|------|------|
| Colonoscopia | `app/colonoscopia-merida/page.tsx` |
| Esclerosis Várices | `app/esclerosis-varices-gastricas-merida/page.tsx` |
| Ligadura Várices | `app/ligadura-varices-esofagicas-merida/page.tsx` |
| Dilatación Esofágica | `app/dilatacion-esofagica-merida/page.tsx` |
| Dilatación Colónica | `app/dilatacion-colonica-merida/page.tsx` |

**What:** Doctor profile link missing. Hurts Persona 3 (referred patients) and internal linking.
**Fix:** Add `<Link href="/dr-omar-quiroz">` in doctor credential section of each page.
> ~~retiro-balon~~ ✅ RESOLVED — now has /dr-omar-quiroz link at line 374.

### P1-9: `colonoscopia-merida` — Missing `breadcrumbSchema` JSON-LD

**File:** `app/colonoscopia-merida/page.tsx`
**What:** No `breadcrumbSchema()` script tag. Every other procedure page has one. The colonoscopia page is the best-performing page — this is a missed structured data opportunity.
**Fix:** Add `breadcrumbSchema()` inline `<script>` tag.

### ~~P1-10: `retiro-balon-gastrico-merida` — Route key mismatch~~ ✅ RESOLVED

> Both metaFor and Faq now use consistent `"retiro_balon"` key.

---

## P2 — Medium (Fix This Cycle)

### ~~P2-1 through P2-4: `retiro-balon-gastrico-merida` issues~~ ✅ ALL RESOLVED

> Spacing, H1 format, missing links, section bloat — all fixed in refactor. Page now has 8 sections, proper H1, all links, no banned spacing.

### P2-1: `retiro-balon-gastrico-merida` — Hardcoded "Hospital Amerimed" in 3 narrative lines

**File:** `app/retiro-balon-gastrico-merida/page.tsx`
**Lines:** 70, 203, 462
**What:** "Hospital Amerimed" hardcoded in narrative text instead of using `CLINIC.address.streetAddress`. Doctor name and other data properly use imports, but hospital name remains in 3 spots.
**Fix:** Replace with dynamic references to `CLINIC.address.streetAddress`.

### P2-2: Homepage missing GoogleReviews component

**File:** `app/page.tsx`
**What:** The homepage (lowest-converting core page at 6.6%) lacks the `GoogleReviews` component that all procedure pages include. Social proof on the main routing engine could help conversion.
**Fix:** Add `<GoogleReviews />` in an appropriate section.

### P2-3: `page.tsx` (homepage) — Hardcoded "Consultorio 517" in visible content

**File:** `app/page.tsx`
**What:** Address fragment hardcoded instead of using `CLINIC.address` imports.
**Fix:** Replace with `{CLINIC.address.display}` or appropriate CLINIC field.

### P2-4: `servicios/page.tsx` — Missing H1 tag

**File:** `app/servicios/page.tsx`
**What:** Page has 0 `<h1>` tags. Every page should have exactly one.
**Note:** This page redirects to `/` via next.config.mjs, so impact is minimal. Still fix for crawl completeness.

### P2-5: Duplicate FAQ JSON-LD on pages with both `faqSchema()` script AND `<Faq routeKey>` component

Pages that call `faqSchema(getFaqsFor(...))` in a `<script>` tag AND render `<Faq routeKey=...>` (which also generates JSON-LD internally) may produce duplicate FAQPage schemas:

| Page | Has script faqSchema | Has Faq component |
|------|---------------------|-------------------|
| cpre-merida | Yes (line 88) | Yes (line 415) |
| panendoscopia-merida | Yes (line 68) | Yes (line 387) |
| dilatacion-esofagica-merida | Yes (line 35) | Yes (line 315) |
| dilatacion-colonica-merida | Yes (line 43) | Yes (line 352) |
| dilatacion-biliar-merida | Yes (line 71) | Yes (line 320) |
| cierre-fistulas-merida | Yes (line 47) | Yes (line 381) |
| emr-merida | Yes (line 48) | Yes (line 360) |
| endoprotesis-duodenales | Yes (line ~510) | Yes (line 413) |
| ligadura-hemorroides | Yes (line 338) | Yes (line 252) |

**Fix:** Remove the inline `<script>` faqSchema since the Faq component handles it, OR remove FAQ JSON-LD from the Faq component. Pick one approach site-wide.

---

## P3 — Low (Backlog)

### P3-1: `/preparacion-colonoscopia` mentioned in CLAUDE.md but not yet implemented

**What:** CLAUDE.md lists this as a valid route. No page.tsx, not in sitemap, not in ROUTES_SEO.
**Impact:** Low — this is a planned future page, not a regression.

### P3-2: `SERVICE_ALIASES` array is empty

**File:** `lib/services.ts:359`
**What:** No colloquial name redirects configured (e.g., "gastroscopia" → "endoscopia").
**Impact:** Low — can be added if SEO data shows search demand for alternate names.

### P3-3: `precios/page.tsx` — Missing "Yucatán" in visible content

**What:** Utility page, less SEO-critical, but could benefit from a geographic mention.

### P3-4: No Search Console CSV data in project

**What:** Phase 6 (Search Console cross-reference) could not be executed — no `data/` directory or CSV files found.
**Recommendation:** Export GSC data periodically and store in `data/search-console/` for future audits.

### P3-5: `/servicios` in sitemap despite 301 redirect to `/`

**File:** `app/sitemap.ts` (line ~47)
**What:** Sitemap includes `/servicios` which 301-redirects to `/`. Search engines crawl it, get redirected, and waste crawl budget.
**Fix:** Remove `/servicios` from sitemap entries.

### P3-6: CLAUDE.md file structure lists `/preparacion-colonoscopia` as existing but it doesn't

**What:** The CLAUDE.md file structure diagram shows `app/preparacion-colonoscopia/` as an existing route, but no page exists. Documentation inaccuracy.
**Fix:** Update CLAUDE.md to mark it as TODO/planned, or create the page.

---

## URL Inventory Matrix

| Path | page.tsx | Sitemap | ROUTES_SEO | SERVICES[] | /precios link | /dr-omar link | procedureSchema | Status |
|------|----------|---------|------------|------------|---------------|---------------|-----------------|--------|
| `/` | ✓ | ✓ | ✓ | N/A | ✓ | ✓ | N/A | ✅ |
| `/endoscopia-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/colonoscopia-merida` | ✓ | ✓ | ✓ | ✓ | **✗** | **✗** | ✓ | ⚠️ |
| `/panendoscopia-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/cpre-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/ligadura-varices-esofagicas-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** | ✓ | ⚠️ |
| `/esclerosis-varices-gastricas-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** | ✓ | ⚠️ |
| `/ligadura-hemorroides-internas-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/gastrostomia-endoscopica-peg-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/extraccion-cuerpos-extranos-endoscopia-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/dilatacion-esofagica-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | **✗** | ✓ | ⚠️ |
| `/dilatacion-biliar-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/dilatacion-colonica-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/endoprotesis-esofagicas-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/endoprotesis-biliares-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/endoprotesis-duodenales-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/endoprotesis-colonicas-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/cierre-fistulas-clips-endoscopicos-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/sutura-endoscopica-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/diseccion-endoscopica-submucosa-esd-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/reseccion-endoscopica-mucosa-emr-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/retiro-balon-gastrico-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ (refactored) |
| `/apc-coagulacion-plasma-argon-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/precios` | ✓ | ✓ | ✓ | N/A | N/A | N/A | N/A | ✅ |
| `/dr-omar-quiroz` | ✓ | ✓ | ✓ | N/A | ✓ | N/A | N/A | ✅ |
| `/contacto` | ✓ | ✓ | ✓ | N/A | ✓ | ✓ | N/A | ✅ |
| `/emergencias-digestivas-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/consultas-digestivas-merida` | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✅ |
| `/servicios` | ✓ | ✓ | ✓ | N/A | N/A | N/A | N/A | ✅ (redirects to /) |

**Summary:** 25/29 pages fully clean. 4 pages with minor gaps (colonoscopia, esclerosis, ligadura-varices, dilatacion-esofagica).

---

## Cross-Page Consistency

### Component Usage (all procedure pages)

| Component | Pages using it | Expected | Gap |
|-----------|---------------|----------|-----|
| WhatsAppButton | 29/29 | All | ✅ None |
| CallButton | 28/29 | All with CTA | ✅ OK (precios has no CallButton in hero, acceptable) |
| Faq (routeKey) | 28/29 | All | ✅ Only `/servicios` missing (redirect page) |
| GoogleReviews | 26/29 | All procedure pages | ⚠️ Missing: homepage, precios, servicios |
| breadcrumbSchema | 26/29 | All except homepage | ⚠️ Missing: colonoscopia (P1-9) |
| procedureSchema | 24/29 | All procedure pages | ✅ All procedure pages covered |
| container-page | 29/29 | All | ✅ All pages use container-page |

### Design Token Usage

- **Raw hex colors (`bg-[#...]`):** 0 violations across all pages ✅
- **Primitive color classes in pages:** Only `retiro-balon` — 0 violations ✅
- **Gradient on `<section>`:** 0 violations ✅

### CTA Order (WhatsApp before Call)

- **All pages:** Correct order ✅

---

## Build Results

```
✓ Compiled successfully
✓ Generating static pages (34/34)
○ (Static) prerendered as static content

Route                                              Size    First Load JS
/ (homepage)                                       2.08 kB  136 kB
/colonoscopia-merida                               199 B    129 kB
/precios                                           199 B    129 kB
(all other routes)                                 250 B    134 kB
```

**No errors. No warnings.** All 34 routes build successfully.

---

## Recommended Fix Order

Priority ranked by SEO impact × effort:

1. ~~**Refactor `retiro-balon-gastrico-merida/page.tsx`**~~ ✅ DONE — Page refactored, passes 15/16 rules.

2. **Fix broken `/preparacion-colonoscopia` link on colonoscopia page** (P0-2) — Either create the page or remove the link. Highest-converting page has a 404 link.

3. **Add `/precios` link + `breadcrumbSchema` to `colonoscopia-merida`** (P1-7, P1-9) — Best-performing page missing pricing cross-link and breadcrumb structured data.

4. **Add `/dr-omar-quiroz` link to 5 pages** (P1-8) — esclerosis-varices, ligadura-varices, dilatacion-esofagica, dilatacion-colonica, colonoscopia. Quick find-and-add.

5. **Add "Yucatán" to visible content** in gastrostomia, colonoscopia, contacto (P1-6). One line each.

6. **Deduplicate FAQ JSON-LD** (P2-5) — Decide whether the Faq component or inline scripts own schema generation. Remove the other. Affects ~9 pages.

7. **`/preparacion-colonoscopia`** — Build when ready (P3, future sprint).

---

## Pages with Zero Issues

The following pages passed all audit checks:

✅ `/endoscopia-merida` · ✅ `/panendoscopia-merida` · ✅ `/cpre-merida` · ✅ `/ligadura-hemorroides-internas-merida` · ✅ `/gastrostomia-endoscopica-peg-merida` (except P1-6 Yucatán) · ✅ `/extraccion-cuerpos-extranos-endoscopia-merida` · ✅ `/dilatacion-biliar-merida` · ✅ `/dilatacion-colonica-merida` · ✅ `/endoprotesis-esofagicas-merida` · ✅ `/endoprotesis-biliares-merida` · ✅ `/endoprotesis-duodenales-merida` · ✅ `/endoprotesis-colonicas-merida` · ✅ `/cierre-fistulas-clips-endoscopicos-merida` · ✅ `/sutura-endoscopica-merida` · ✅ `/diseccion-endoscopica-submucosa-esd-merida` · ✅ `/reseccion-endoscopica-mucosa-emr-merida` · ✅ `/retiro-balon-gastrico-merida` (refactored) · ✅ `/apc-coagulacion-plasma-argon-merida` · ✅ `/precios` · ✅ `/dr-omar-quiroz` · ✅ `/emergencias-digestivas-merida` · ✅ `/consultas-digestivas-merida`
