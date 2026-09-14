# Design-refresh migration report — remaining public pages

Date: 2026-09-13 · Worktree: `endoscopia-del-mayab-design` (branch `design-refresh`) · Nothing committed, pushed or deployed.
Preview: the existing dev server at `http://127.0.0.1:3001` (left running). No production build, no dependency installs.

## 1. Route manifest

How routes were enumerated:
- every `page.tsx` under `app/`, including both route groups (`(site)`, `(lp)`);
- dynamic segments: none exist (no `[param]` folders or `generateStaticParams`);
- other framework and route files: `app/api/*/route.ts`, `robots.ts`, `sitemap.ts`, layouts;
- redirects: `next.config.mjs` and `vercel.json` (only the non-www → www host redirect);
- `SERVICE_ALIASES` in `lib/services.ts` is empty; there is no middleware.

Migration status was inferred from source (whether a page imports `design-system.module.css` / `design-pages.module.css`) and from `MIGRATION-REPORT.md`, not from git status.

| Status | Routes |
| --- | --- |
| **Already migrated** (15, untouched) | `/`, `/endoscopia-merida`, `/colonoscopia-merida` (pilots); `/cpre-merida`, `/ligadura-varices-esofagicas-merida`, `/precios`, `/equipo-medico`, `/contacto`, `/emergencias-digestivas-merida`, `/dr-omar-quiroz`, `/lp/colonoscopia`, `/lp/cpre`, `/lp/endoscopia`, `/lp/hemorroides`, `/lp/ligadura-varices` |
| **Migrated in this pass** (24) | See §2 |
| **Excluded** | `/servicios`: redirect (next.config 301 to `/`; the page only calls `redirect("/")`) · `/panendoscopia-merida`: redirect only, no page · `/api/intake`, `/api/ref`: API · `robots.txt`, `sitemap.xml`: framework metadata routes · `not-found` / error: framework defaults, no custom page · layouts, `fonts.ts`, `globals.css` |
| **Uncertain scope** | None blocking. Notes: <ul><li>`/cpre-playa-del-carmen` is a geo landing page inside the `(site)` layout (sitemap-listed, full chrome, not an `/lp/*` Ads page), so it got the procedure treatment.</li><li>`/pacientes-de-fuera-de-merida`, `/preparacion-colonoscopia` and `/preparacion-endoscopia` are organic utility/article guides. Their single-column guide layouts were kept; only tokens and roles were applied.</li><li>Sitemap TODOs (`/aviso-de-privacidad`, `/terminos-y-condiciones`, `/blog`, `/ubicacion-hospitales-merida`) have no pages, so there is nothing to migrate.</li><li>No legal pages exist.</li></ul> |

## 2. Per-route status

All 24 are **completed**; none are blocked. Preview base: `http://127.0.0.1:3001`.

| Group | Route | Status |
| --- | --- | --- |
| A · simple procedure | [/dilatacion-biliar-merida](http://127.0.0.1:3001/dilatacion-biliar-merida) (representative) | done |
| A | [/dilatacion-colonica-merida](http://127.0.0.1:3001/dilatacion-colonica-merida) | done |
| A | [/dilatacion-esofagica-merida](http://127.0.0.1:3001/dilatacion-esofagica-merida) | done |
| A | [/cierre-fistulas-clips-endoscopicos-merida](http://127.0.0.1:3001/cierre-fistulas-clips-endoscopicos-merida) | done |
| A | [/diseccion-endoscopica-submucosa-esd-merida](http://127.0.0.1:3001/diseccion-endoscopica-submucosa-esd-merida) | done |
| B · quote / cost panel | [/endoprotesis-esofagicas-merida](http://127.0.0.1:3001/endoprotesis-esofagicas-merida) | done |
| B | [/sutura-endoscopica-merida](http://127.0.0.1:3001/sutura-endoscopica-merida) | done |
| B | [/reseccion-endoscopica-mucosa-emr-merida](http://127.0.0.1:3001/reseccion-endoscopica-mucosa-emr-merida) | done |
| C · stents / EUS | [/endoprotesis-colonicas-merida](http://127.0.0.1:3001/endoprotesis-colonicas-merida) | done |
| C | [/endoprotesis-biliares-merida](http://127.0.0.1:3001/endoprotesis-biliares-merida) | done |
| C | [/endoprotesis-duodenales-merida](http://127.0.0.1:3001/endoprotesis-duodenales-merida) | done |
| C | [/ultrasonido-endoscopico-merida](http://127.0.0.1:3001/ultrasonido-endoscopico-merida) | done |
| D · richer procedure | [/capsula-endoscopica-merida](http://127.0.0.1:3001/capsula-endoscopica-merida) | done |
| D | [/extraccion-cuerpos-extranos-endoscopia-merida](http://127.0.0.1:3001/extraccion-cuerpos-extranos-endoscopia-merida) | done |
| D | [/gastrostomia-endoscopica-peg-merida](http://127.0.0.1:3001/gastrostomia-endoscopica-peg-merida) | done |
| D | [/retiro-balon-gastrico-merida](http://127.0.0.1:3001/retiro-balon-gastrico-merida) | done |
| D | [/apc-coagulacion-plasma-argon-merida](http://127.0.0.1:3001/apc-coagulacion-plasma-argon-merida) | done |
| D | [/esclerosis-varices-gastricas-merida](http://127.0.0.1:3001/esclerosis-varices-gastricas-merida) | done |
| D | [/ligadura-hemorroides-internas-merida](http://127.0.0.1:3001/ligadura-hemorroides-internas-merida) | done |
| D | [/cpre-playa-del-carmen](http://127.0.0.1:3001/cpre-playa-del-carmen) | done |
| E · information / utility | [/consultas-digestivas-merida](http://127.0.0.1:3001/consultas-digestivas-merida) | done |
| E | [/pacientes-de-fuera-de-merida](http://127.0.0.1:3001/pacientes-de-fuera-de-merida) | done |
| E | [/preparacion-colonoscopia](http://127.0.0.1:3001/preparacion-colonoscopia) | done |
| E | [/preparacion-endoscopia](http://127.0.0.1:3001/preparacion-endoscopia) | done |

## 3. Composition used

Every route opts in with `pages.page` + `system.system` on a root wrapper (which replaced the page fragment) and uses the shared roles:
- `system.hero`
- `system.doctor` + `pages.inverse` (dark doctor band, new portrait at 200×250 / 160×200)
- `system.reviews`
- `system.faq`
- `system.closing`

Content sections alternate `pages.paper` and `pages.surface`. Cards became open ruled columns (`open`, `step`, `related`); callouts became `note`, `quietNote`, `panelSurface` or `alert` (maroon). Sticky hooks (`data-sticky-hero-cta`, `data-sticky-bottom-cta`) were added to the existing CTA groups.

The representative page (`/dilatacion-biliar-merida`) was implemented and verified first. Its composition was then reused group by group.

- **A · simple procedure.**
  - Hero: price pill row → `badges` + `heroPrice` (sage badge, serif, nowrap); CTA row → `actions`.
  - Price section → `priceFigure`; before/during/after cards → `steps`/`step`.
  - Closing: dark band with related-procedure links (`closingLinks`) and a secondary H2 (`system.closingSub`).
  - Dilatación esofágica had a centred hero, now left-aligned via `heroStart`.
  - ESD's related cards sit in the closing band as ruled `related` columns.
- **B · quote / cost panel.**
  - EMR's hero quote card → the cost-panel roles (`pricePanel`/`panel`/`panelHead`/`panelPrice`/`panelBody`; decorative icon hidden).
  - EMR's light "CTA + related" section → the forest closing band (as CPRE's closing did previously).
  - Sutura's hero side cards → `panelSurface`; its process list → `stepList` + `numberBadge`; its warning → `alert`.
  - Endoprótesis esofágicas' closing uses `text-primary-foreground` utilities, so it has the `closingText` fix.
- **C · stents / EUS.**
  - Colónicas: maroon emergency eyebrow (`eyebrow eyebrowAlert`); the rounded navy CTA box inside a surface section keeps its enclosure with `system.closing`.
  - Duodenales: the combined "FAQ + related" section was split into an FAQ section and a related section, in the same DOM order. Without the split, the FAQ role would clamp the related column.
  - EUS: the doctor stats use the dark `stats` / `statValue` roles.
- **D · richer procedure.**
  - Cápsula: cost panel; CTA + related → closing band.
  - Extracción: maroon eyebrow, a maroon `alert` in the hero, and a sage `heroPrice`.
  - PEG: `section-padding-lg` normalized to the shared rhythm; related cards in the closing band → `closingCards`; price figure → `fitPrice`.
  - Balón: price enclosure → `note` with `lg:self-start`.
  - APC: cost panel, the three-way comparison on the existing `compare` role, and dark stats.
  - Esclerosis: mirrors the migrated ligadura-várices page (cost panel, `biopsy` wrapper, `DoctorAuthority` strip) but **without** `relatedPrice`, so review finding 5 isn't reproduced.
  - Ligadura de hemorroides: `DoctorAuthority` strip and a five-column step row.
  - CPRE Playa del Carmen: two `heroPrice` badges; the travel table is kept as-is.
- **E · information / utility (dedicated layouts preserved).**
  - Consultas follows the procedure pattern (hero, open cards, doctor band, related, closing).
  - Pacientes and both prep guides keep their single-column guide structure. Cards became open ruled blocks and highlighted rules became `note`.
  - The particular-price table and the prep schedule list keep their enclosure.
  - Their long WhatsApp labels keep the stacked hero CTAs, as contacto did.
  - The pacientes price badge uses `priceNote` (it tightens at ≤380px).
  - Legacy `font-serif` figures use `serifFigure` (Georgia, weight 400).

## 4. Changed files and shared blast radius

**Route files (24):** `app/(site)/<route>/page.tsx` for the routes in §2. Changes are className hooks, `data-sticky-*` attributes and the root wrapper `div`. Other markup changes, all content-neutral:
- **Reviews/FAQ wrappers flattened** to the reference pattern (component inside its own section) wherever the page had `section > container > component`.
- **Duodenales:** the FAQ/related section was split (see §3); a spacing-only `mt-16` wrapper class was dropped.
- **Esclerosis:** a wrapper div around `BiopsyDifferentiator` (the ligadura pattern).
- **Doctor portraits:**
  - `src` → `/equipo/omar-quiroz-portrait.webp` on the 21 routes that show the doctor photo; alt text unchanged.
  - Intrinsic `width`/`height` raised from 128/160 to 320×400 on esclerosis, APC, EUS and biliares, so the 200×250 render isn't blurry.
- **Balón:** added a `lg:self-start` utility class.

**Shared files:**
- **`app/(site)/design-pages.module.css`**, additions (opt-in; only pages importing the module are affected). The first nine roles are used only by this pass's routes:
  - `badges`, `heroPrice` (including `box-shadow: none`), `heroStart`
  - `closingLinks`, `closingCards`, `fitPrice`, `priceNote`, `serifFigure`
  - `section-padding-lg` normalization (no earlier migrated route uses that class; checked by grep)
  - inverse faded captions (`.text-text-inverse/50`, `/70`), used only by ESD (grep)
- **`app/(site)/design-pages.module.css`**, edits to existing roles that can reach earlier migrated routes:
  - `.eyebrowAlert` now also recolours **child** `.text-red-700`. Earlier routes put that class on the eyebrow itself, so it doesn't match there.
  - `.page .iconBox { justify-content: flex-start }`. Emergencias is the only earlier user; it was spot-checked at 390 and 1280 (see §5).
  - `.page .inverse .related` gets no underline and a pale border. By source check, no earlier route or LP nests `.related` inside `.inverse`.
- **`app/(site)/design-system.module.css`:** adds one opt-in `.closing .closingSub` rule (secondary H2 inside a closing band). No reference page uses the class.
- **`components/StickyMobileCTA.tsx`:** the 24 routes were added to `DESIGN_REFRESH_ROUTES` (outlined MessageCircle icon only). The visibility logic is untouched.

No changes were made to lib/, the other components, metadata, schema, analytics or the LPs.

## 5. QA performed (exact)

- **Pre-edit record:**
  - `git status`: `remaining-baseline/git-status-before.txt`
  - one content/SEO baseline per target at 1280px: `remaining-baseline/before/*.json`
  - Fields: title, canonical, all meta (including robots), ordered headings in `<main>`, link text + href, element IDs, image alts, every JSON-LD block, normalized `<main>` innerText.
- **Content/SEO compare after changes:** **all 24 IDENTICAL** on every field. Six routes whose TSX changed after their first compare were re-compared once more at the end and were again IDENTICAL: consultas, pacientes, both prep guides, balón, PEG. (`remaining-baseline/after/*.json`). `robots` is `noindex, nofollow` on all 24 both before and after. This is the dev-environment default (`lib/seo.ts`), the same as the earlier migration's baselines.
- **Overflow:**
  - 320px on every route: `scrollWidth == clientWidth` and no offending elements, after one fix. `/pacientes-de-fuera-de-merida` first measured `scrollWidth` 327 because of the hero price badge; fixed with `priceNote`, re-measured at 320 with the badge right edge 276 against an inner edge of 296, 14px, one line.
  - 390, 768 and 1280: no overflow on any route.
- **Display-price fit** (serif/sans prices ≥20px): measured at 320, 390, 640, 768, 1024 and 1280 on every route. Checks: wrap, overrun of the element's or parent's padded inner edge, viewport gutter, arrow overlap.
  - One failure was found and fixed: `/gastrostomia-endoscopica-peg-merida` at 320, "$16,000 MXN" at 32px wrapped onto 2 lines. Now `fitPrice`; re-measured clean at all six widths.
  - Inline prose price wraps (<20px, accepted per the review) were counted but not changed.
  - Quote-only routes show "Precio bajo cotización" and have no numeric display price to measure.
- **Visual inspection:**
  - Representative page: all 390 and 1280 slices reviewed.
  - Every other route: at least the hero and one further section at 390 **and** 1280 were reviewed from full-page slice captures, plus targeted slices (doctor band, closing, pricing) where composition differed.
  - 768: a layout capture was taken on every route; only the representative's was opened visually, the others were measured (overflow and price).
- **Defects found visually and fixed:**
  - closing-band spacing between the related links and the H2;
  - colónicas step icons centred above left-aligned headings (`iconBox`);
  - ESD related cards fully underlined in the dark band;
  - balón price enclosure stretched empty on desktop;
  - CPRE Playa's second price badge kept its shadow;
  - legacy bold Montserrat figures on the utility pages.
- **Interactions at 390 (all 24 routes; `probe.js`):**
  - **Sticky bar:** hidden at load and while the hero CTA is on screen; shown past the hero; hidden over the closing CTA; hidden back at the top; shown after a direct jump to 60% of the page. Outlined icon.
  - **FAQ and CTAs:** a FAQ question opens and closes; the "Ver N preguntas más" disclosure is 52px where present; hero WhatsApp and Call are 48px high; review quote Georgia 19px.
  - Results: see §5a.
- **Reduced motion (emulated), all 24 routes:** `html` `scroll-behavior: auto`; hero CTA, FAQ chevron and sticky bar/link transitions 0s; zero transform/gap transitions inside `<main>`.
- **Not submitted or opened:** no WhatsApp or `tel:` links followed, no videos played. None of the 24 routes has a form or calendar.
- **Shared-change spot-check:** `/emergencias-digestivas-merida` (the only earlier user of the edited `iconBox`) at 390 and 1280, covering the alarm / "Agenda lo antes posible" rows, procedures, steps, doctor band and perforation block. Icons stay beside their headings; the maroon alert and emergency WhatsApp are intact; no overflow. References (home, endoscopy, colonoscopy) import neither changed module, so they weren't re-checked. The StickyMobileCTA edit only adds route strings.
- **`tsc --noEmit` (one batch run):** see §6.
- **`git diff --check`:** see §6.
- **Not run:** `pnpm build` (not allowed alongside the dev server).

### 5a. Interaction probe results

**Sticky sequence** (390×844, stepwise scroll): hidden at load → hidden with the hero CTA on screen → shown past the hero → hidden over the closing CTA → shown at page end (footer) → hidden back at top → shown after a direct jump. "PASS" means every step matched. Hero CTA bottom is the CTA group's bottom edge at load.

**Reduced motion:** 0s CTA, chevron and sticky transitions, `scroll-behavior: auto`, and zero transform/gap transitions in `<main>` unless stated.

| Route | Hero CTA bottom | Sticky | FAQ open/close | "Ver más" disclosure | Reduced motion |
| --- | --- | --- | --- | --- | --- |
| /dilatacion-biliar-merida | 517 | PASS | ✓ | — | ✓ |
| /dilatacion-colonica-merida | 769 | PASS | ✓ | 52px | ✓ |
| /dilatacion-esofagica-merida | 527 | PASS | ✓ | — | ✓ |
| /cierre-fistulas-clips-endoscopicos-merida | 804 | PASS | ✓ | — | ✓ |
| /diseccion-endoscopica-submucosa-esd-merida | 714 | PASS | ✓ | — | ✓ |
| /endoprotesis-esofagicas-merida | 687 | PASS | ✓ | — | ✓ |
| /sutura-endoscopica-merida | 585 | PASS | ✓ | — | ✓ |
| /reseccion-endoscopica-mucosa-emr-merida | 614 | PASS | ✓ | — | ✓ |
| /endoprotesis-colonicas-merida | 444 | PASS | ✓ | — | ✓ |
| /endoprotesis-biliares-merida | 614 | PASS | ✓ | — | ✓ |
| /endoprotesis-duodenales-merida | 798 | PASS | ✓ | — | ✓ |
| /ultrasonido-endoscopico-merida | 744 | PASS | ✓ | 52px | ✓ |
| /capsula-endoscopica-merida | 634 | PASS | ✓ | 52px | ✓ |
| /extraccion-cuerpos-extranos-endoscopia-merida | 670 | PASS | ✓ | 52px | ✓ |
| /gastrostomia-endoscopica-peg-merida | 847 (group top 799, inside the fold) | PASS | ✓ | — | ✓ |
| /retiro-balon-gastrico-merida | 719 | PASS | ✓ | — | 2 transitions: the YouTubeEmbed thumbnail/play scale (pre-existing component, see §7) |
| /apc-coagulacion-plasma-argon-merida | 764 | PASS | ✓ | 52px | ✓ |
| /esclerosis-varices-gastricas-merida | 518 | PASS | ✓ | — | ✓ |
| /ligadura-hemorroides-internas-merida | 521 | PASS | ✓ | — | 2 transitions: YouTubeEmbed (pre-existing) |
| /cpre-playa-del-carmen | 625 | PASS | ✓ | — | ✓ |
| /consultas-digestivas-merida | 953 (fully below the fold) | **Failed "shown after a direct jump"** with the hero hook, so the hook was removed (300px fallback, same as precios/equipo). Re-probe on the fallback: **PASS**. Hidden at load and at top; shown past 300px and after a direct jump; hidden over the closing CTA. | ✓ | 52px | ✓ |
| /pacientes-de-fuera-de-merida | 647 | PASS | ✓ | 52px | ✓ |
| /preparacion-colonoscopia | 941 (group top ≈829, inside the fold) | PASS | ✓ | — | ✓ |
| /preparacion-endoscopia | 833 | PASS | ✓ | — | ✓ |

Hero WhatsApp and Call measured 48px high on all 24. Review quotes (where reviews exist) are Georgia 19px. Every route's sticky icon is the outlined MessageCircle.

## 6. Existing vs new errors

`tsc --noEmit` reports 10 errors, all pre-existing and matching the documented baseline:
- `lib/routes-seo.ts`: 8 × TS2339 (lines 350–357, `SpecialRouteCfg` union)
- `lib/seo.ts:191`: 1 × TS2322 (Robots)
- `components/GoogleReviews.tsx:68`: 1 × TS2786 (async JSX component)

**No new errors**, and none in any file changed here. The typecheck ran after all structural TSX edits. After it, the only TSX changes were className hooks (`priceNote`, `serifFigure`) and removal of one `data-sticky-hero-cta` attribute (consultas), none type-relevant, so it was not re-run.

`git diff --check` (run once, after the last edit): clean, exit 0. `design-pages.module.css`, `design-system.module.css` and this report are untracked, so that check doesn't cover them. A trailing-whitespace grep on them found nothing.

## 7. Known issues, deviations, unverified behaviour

**Deliberate deviations (content-neutral):**
- **Consultas sticky hook:** no hero hook; the 300px fallback is used (measured failure; see §5a).
- **Closing bands:**
  - EMR and cápsula: the light "CTA + related" sections became the forest closing band.
  - Colónicas and balón keep the CTA as a dark enclosure inside a light section, as the original composition had it.
- **Duodenales:** the FAQ + related section was split in two (same DOM order).
- **Utility pages:**
  - Pacientes and both prep guides keep stacked hero CTAs, their price table and schedule enclosures, and single-column guide structure.
  - Adjacent paper sections occur at pacientes (Qué traer + FAQ) and preparación colonoscopia (fuera de Mérida + FAQ), separated by the FAQ's top rule. This is the accepted equipo/dr pattern.
- **Portraits:** the intrinsic `width`/`height` change on four pages changes the next/image srcset URLs (not content or alt).

**Known low-priority issues (not fixed; mostly pre-existing classes that were preserved):**
- **Marginal fold positions:** PEG (847) and preparación colonoscopia (941) pass at 390×844 only because the CTA group's top is inside the fold. On shorter viewports the IntersectionObserver hook would miss a direct jump, the same limitation as the reference and earlier pages. No viewport shorter than 844px was tested.
- **Hemorroides:** hero WhatsApp and Call are equal width on mobile and desktop, because both buttons carry pre-existing `flex-1` classes. WhatsApp is still first and filled.
- **APC `compare`:** at 768–1023px the third column loses its left rule. The existing role targets the two-column tablet layout it was written for (CPRE).
- **Sutura:** the hero side card's "Precio bajo cotización" (serif `figure`, text rather than a numeric price) wraps onto two lines inside the narrow desktop card.
- **CPRE Playa del Carmen:** on desktop, the pricing WhatsApp button and the "Ver todos nuestros precios" link sit next to each other without a gap (pre-existing inline layout).
- **Pre-existing, listed in the review:**
  - YouTubeEmbed thumbnail scale transitions remain under reduced motion (balón, hemorroides);
  - header menu button is 40×40;
  - inline prose price wraps.

**Unverified:**
- visual review of every 768px capture (only the representative page's was viewed; the others were measured);
- viewports other than 320/390/640/768/1024/1280 (price fit) and 390×844 (probes);
- video playback, Google Maps (dev placeholder), live Google Reviews data;
- real-device touch/hover, keyboard focus order;
- GTM payloads (tracking props and CTA IDs unchanged per the link/ID parity check);
- `pnpm build`.

**QA incident:** one capture (pacientes at 320) hit a transient Next dev 404 while the route recompiled after a CSS edit. Measurements in the same run loaded the real page, and the slice was recaptured (§8).

## 8. Artifacts

- `docs/design-refresh/remaining-baseline/git-status-before.txt`: git status before any edit.
- `docs/design-refresh/remaining-baseline/before/*.json` and `after/*.json`: the 24 content/SEO snapshots compared field by field.
- `docs/design-refresh/remaining-baseline/screenshots/`: 96 JPEGs (6.1 MB). The first two full-page slices of each of the 24 routes at 390 (1:1) and 1280 (scaled 0.6), taken after the final fixes: `_<route>-<width>-<slice>.jpg`. All other captures (320/768 slices, deeper slices, the emergencias spot-check) remain in the session scratchpad (`after/`, `spot/`).
- Scratch tooling (session scratchpad, not in the repo): the `cdp.mjs` DevTools driver and `compare.py` (both reused from the previous migration), `verify.sh`, `price-fit.js`, `probe.js`, `probe-all.sh`, `apply.py` (count-checked exact replacements), plus the logs `verify-group*.log` and `final.log`.
