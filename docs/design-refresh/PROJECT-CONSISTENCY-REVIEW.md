# Project consistency review — design-refresh (all 39 public routes)

Date: 2026-09-13 · Worktree `endoscopia-del-mayab-design`, branch `design-refresh` at `9af5513` (working tree clean).
Reviewer did not modify any application file; this report is the only file written.
Everything below was re-measured against the running dev server (`127.0.0.1:3001`) and the repository; report claims were not taken as proof.

## Verdict: **ready with minor issues** (after fixes applied 2026-09-13, same session)

- The one medium defect found by this review (finding 1) and the bounded low items 2, 3, 4 and 9 were fixed after the review, re-measured, and are committed together with this report (see "Fixes applied" below). Nothing else in the migration needed to change.
- Everything else checked is consistent: all 39 routes exist and are migrated, content/SEO parity holds on all 36 baselined routes (the only diffs come from a later, intentional content commit), LP directives and conversion chrome are intact, tracking hooks and IDs are unchanged, sticky bars, disclosures, calendar, booking arrival, keyboard focus and reduced motion behave as specified, and the earlier contacto-contrast and tablet-price failures are fixed.

## Fixes applied after the review

| Finding | Change | Re-verification |
| --- | --- | --- |
| 1 (medium) endoscopia 320 price wrap | `app/(site)/endoscopia-merida/procedure-design.module.css`: in the existing `@media (max-width:380px)` block, cost-panel price and benchmark price → 24px + `white-space: nowrap` | 320: no display-price wrap/overrun (only the accepted inline H2 remains); 390 unchanged; screenshot `scratchpad/after320/` |
| 2 (low) form "Estimado desde" wrap at 320 | `components/AppointmentForm.tsx`: `whitespace-nowrap` on the estimate figure | endoscopia + colonoscopia 320: clean |
| 3 (low) 320 badge/price-bar overruns | `app/(site)/design-pages.module.css`: `.priceFigure` → `clamp(22px, 7.5vw, 26px)` at ≤380px | `/lp/cpre`, `/lp/hemorroides`, `/lp/ligadura-varices`, `/precios`, PEG, pacientes at 320: no overrun |
| 4 (low) ligadura related price wraps at 768 | `design-pages.module.css`: `.relatedPrice` `white-space: nowrap`, 18px at 768–1023px | ligadura 390/768/1024: clean |
| 9 (low) hard-coded portrait src | 35 occurrences across 34 page files → `DOCTOR.photos.headshot` (`<Image src>` and `portraitSrc` props) | `grep` finds no literal outside `lib/doctor.ts`; snapshots (text, links, IDs, alts, JSON-LD, CTAs) identical before/after on endoscopia, colonoscopia, lp/cpre, precios, dilatacion-biliar |

`tsc --noEmit` after the fixes: the same 10 baseline errors, none new. `git diff --check`: clean.

## State of the worktree vs. the reports

Both migration reports say "nothing committed". That is stale: since they were written, two commits landed on `design-refresh`:

- `c7d1b2a` content: footer credits + COFEPRIS line, SVG wordmark, nurse name corrected to "Estefania Baas" (photo renamed), `DOCTOR.photos.headshot`/`team` now point to the new portrait. Touches `lib/clinic.ts`, `lib/doctor.ts`, `lib/team.ts`, `components/Footer.tsx`, `components/SiteHeader.tsx`.
- `9af5513` feat: the whole design refresh (site + LP pages, modules, baselines, screenshots).

`git status` is clean; there is no uncommitted work to preserve. Every stored-baseline difference found below traces to `c7d1b2a`, not to the migration.

## Route coverage

Actual routes were enumerated from `app/**/page.tsx` (40 files), `next.config.mjs` redirects, `app/sitemap.ts` and `lib/services.ts` (`SERVICE_ALIASES` empty, no middleware, no dynamic segments).

| Set | Count | Routes | Checked |
| --- | --- | --- | --- |
| Pilots | 3 | `/`, `/endoscopia-merida`, `/colonoscopia-merida` | 390 sheet, 320/640/768/1024/1280 audits, probes, role comparison, calendar + booking arrival |
| First migration | 7 site + 5 LP | `/cpre-merida`, `/ligadura-varices-esofagicas-merida`, `/precios`, `/equipo-medico`, `/contacto`, `/emergencias-digestivas-merida`, `/dr-omar-quiroz`, `/lp/{colonoscopia,cpre,endoscopia,hemorroides,ligadura-varices}` | same audits; 390 sheets all; 1280 sheets for precios, contacto, equipo, emergencias, dr, cpre, lp/colonoscopia; 768 sheets for precios, contacto, cpre, ligadura |
| Remaining migration | 24 | the 24 routes in `REMAINING-MIGRATION-REPORT.md` §2 | same audits; 390 sheets all; 1280 sheets for dilatacion-biliar (representative), pacientes, apc, endoprotesis-duodenales; 768 sheet apc |
| Excluded (verified) | — | `/servicios` (301 → `/`, page only calls `redirect`), `/panendoscopia-merida` (redirect only), `/api/intake`, `/api/ref`, `robots.txt`, `sitemap.xml` | not user-facing |

The manifest in `REMAINING-MIGRATION-REPORT.md` §1 is correct: 15 + 24 = 39 public routes, and the sitemap's 34 entries plus the 5 noindex LPs cover exactly that set. All 34 `(site)` routes are in `DESIGN_REFRESH_ROUTES` in `components/StickyMobileCTA.tsx:20-55`; every route imports the design modules.

## Findings (prioritized, confirmed)

### 1. [Medium · pilot-era, reference page · FIXED] `/endoscopia-merida` display prices wrap mid-value at 320px

- **Where:** `app/(site)/endoscopia-merida/procedure-design.module.css:212` sets the cost-panel price to 28px at ≤767px with no ≤380px step and no `white-space: nowrap`; the `@media (max-width:380px)` block at lines 216-220 only covers the calendar and header. The pricing-section sage panel (`app/(site)/endoscopia-merida/page.tsx:143`, `<p class="font-serif font-bold text-text-accent text-3xl">`) has the same problem.
- **Evidence (320×844):** hero panel renders "Desde $4,500" / "MXN" on two lines (28px Georgia, panel inner width ≈ 222px); the sage panel renders the same two-line break; screenshots in `scratchpad/wrap/_endoscopia-merida-320-wrap{0,1}.png`. At 390px both fit on one line. `/colonoscopia-merida`'s panel does **not** wrap at 320 (its module keeps 28px but its panel text is shorter: "$5,000 MXN" without "Desde"). Every remaining-migration route uses `design-pages.module.css:382-383` (`.panelPrice` → 24px + nowrap at ≤380px) and passes.
- **User impact:** the highest-traffic procedure page shows a broken "$4,500 / MXN" in the first viewport on 320px-class phones. CLAUDE.md forbids mid-value price wraps; the migration constraints require display-price fit at 320.
- **Old vs new:** not introduced by either migration pass (the endoscopy module predates them). Whether `main` also wrapped at 320 could not be verified (no pre-pilot baseline); it is a current violation regardless.
- **Bounded fix:** in the endoscopia module's existing `@media (max-width:380px)` block add `.pricePanel > div > div:first-child > p:last-child { font-size: 24px; white-space: nowrap; }` and a matching ≤380px 24px/nowrap rule for the sage-panel figure (it computes to 30px at 320; the existing `.hero + section :global(.font-serif)` rules at lines 110/233/269 do not reach it, so add a scoped class hook on `page.tsx:143` or a selector for that panel), mirroring `design-pages.module.css:382-383`. Re-measure at 320 only.

### Accepted / low (do not block)

2. **[Low · FIXED] AppointmentForm estimate figure "Estimado desde" cell wraps at 320px** on `/endoscopia-merida` and `/colonoscopia-merida` ("Estimado desde … $4,500 / MXN", 20px bold, `components/AppointmentForm.tsx:527`, the estimate row of the intake form). Component unchanged vs `main`; at 390px it fits.
3. **[Low · FIXED] 320px price-badge overruns of 5–11px** into the card padding on `/lp/cpre`, `/lp/hemorroides`, `/lp/ligadura-varices` and the `/precios` price bar (re-measured: 11/6/6/9px past the padded inner edge, none past the viewport gutter). Unchanged from review finding 4.
4. **[Low · FIXED] `/ligadura-varices-esofagicas-merida` related-procedure price wraps at 768px** ("Desde $26,000 MXN", 22px). Unchanged from review finding 5; not reproduced on the newly migrated pages (esclerosis avoids `relatedPrice`).
5. **[Low · pre-existing] Inline heading/prose prices wrap** ("Precio de endoscopia en Mérida: Desde $4,500 MXN todo incluido" H2 at 390/320, BiopsyDifferentiator prose). Accepted category per the review addendum.
6. **[Low · pre-existing] Small-text metadata at 3.70:1** — review dates, "Fuente: Google", hero chips and location lines that use `text-muted-foreground/60` (12–13px) on the paper background measure 3.70:1 after correct alpha compositing (canvas-composited; the `oklab()` values were parsed, not guessed). Below AA for small text but strictly better than `main`'s token (≈2.6:1 for the same class). Present on all 39 routes, from shared components (`GoogleReviews`, hero chips). No text is invisible; no dark-band paragraph fails (contacto fix verified: `rgb(210,223,211)` on `rgb(25,61,53)` at 390 and 1280).
7. **[Low · pre-existing] Desktop header nav links are 21px tall, the mobile menu button 40×40**, and a few in-page text links (`Ver su papel en tu procedimiento`, LP `lp-exit-to-guide`, FAQ pointer links) are under 44px. Shared header and pre-existing link styles; same on `main`.
8. **[Low · pilot-era] Reduced motion leaves a few `transition: all/transform` rules active**: home procedure-card links (`transition-all .15s`, hover changes background only, no movement) and the home doctor-section arrow link; endoscopia's two inline arrow links; YouTubeEmbed thumbnail scale (documented). None moves content on scroll; `scroll-behavior` is `auto` and all CTA/sticky/FAQ transitions are 0s on all 39 routes.
9. **[Low · FIXED] Portrait `src` was hard-coded** as `"/equipo/omar-quiroz-portrait.webp"` on 24 pages instead of `DOCTOR.photos.headshot`. Since `c7d1b2a` both resolve to the same file, so there is no visible effect, but it contradicts the lib/README "never hardcode" rule and will drift if the portrait changes again. Bounded fix: replace the literal with `DOCTOR.photos.headshot` (pure refactor, no output change).
10. **[Low · 320 only] `/cpre-playa-del-carmen` travel table** exceeds the 320px column inside its `overflow-x-auto` wrapper (horizontal scroll within the table only, no page overflow). Tables are allowed to scroll; noted for completeness.
11. **[Low · earlier review 6–7, unchanged]** LP/dr location-row icon gap; `/precios` out-of-town strip icon above its text on mobile.

### Not defects (checked and cleared)

- **Missing routes / lost directives:** none. All 39 routes return 200 with the expected chrome. LPs: `robots` `noindex, nofollow`, no canonical, no footer, no JSON-LD, one LP sticky bar, `#hero-ctas` and `lp-exit-to-guide` links present (fresh snapshot). Site routes: canonical present on all 34; `robots` is the dev default `noindex, nofollow` on every route, identical to the stored baselines; `lib/seo.ts`, `lib/routes-seo.ts`, `app/robots.ts`, `app/sitemap.ts` are byte-identical to `main`.
- **Forms:** only endoscopia/colonoscopia have the intake form. Field IDs (`apt-name`, `apt-phone`, `apt-message`, `apt-website`) and section IDs unchanged (pilot baseline). `AppointmentForm.tsx` diff vs `main` is one line (`collisionPadding={8}`). Nothing was submitted.
- **Tracking hooks:** normalized source diff (className/data-sticky/portrait props stripped) of all 40 page files vs `main` shows no change to any `service`, `position`, `procedureName`, `label`, `message`, `id`, `href` or `data-cta`. CTA id lists in fresh snapshots match the baselines on all 36 routes. `lib/gtm.ts`, `WhatsAppButton`, `CallButton`, `useWhatsAppRef` are unchanged.
- **Console:** zero console errors/warnings/exceptions on all 39 routes at 390 (CDP `Runtime`/`Log` capture). A Next dev "1 issue" badge seen once in the consultas contact sheet did not reproduce.
- **Overflow:** `scrollWidth == clientWidth` and no offending elements on all 39 routes at 320/390/640/768/1024/1280.
- **Display-price fit at 320/390/640/768/1024/1280** measured against each price's own padded box, its parent, nearest clipping ancestor and the viewport gutter, plus arrow overlap: only items 1–4 above. The earlier tablet failures are fixed: no wrap/overrun at 640–1280 on `/cpre-merida` compare, `/precios` and `/contacto` anchors (contacto anchors verified visually at 768).
- **Hidden/clipped text:** the only clamped text is the review `line-clamp-4` with a working "Leer más/menos" toggle (shared component); no text is cut by an overflow ancestor except the cpre-playa table (item 10).
- **Sticky bar (390×844, stepwise scroll + direct 60% jump) on all 34 site routes: PASS** — hidden at load and with the hero CTA on screen, shown past the hero, hidden over the closing CTA, hidden back at top, shown after a direct jump. `/precios`, `/equipo-medico`, `/consultas-digestivas-merida` use the documented 300px fallback and pass. At page end the bar overlaps no footer text (footer has 80px bottom padding). LPs show their own always-visible bar (LP-specific behaviour, unchanged).
- **FAQ:** first question opens/closes and "Ver N preguntas más" is 52px on every route that has one; hero WhatsApp/Call are 48px; review quotes Georgia 19px/1.65 wherever reviews exist.
- **Calendar at 320 (endoscopia and colonoscopia):** popover 34–312px inside the viewport, seven day columns (lu…do) at 34px each, all cells inside the popover.
- **Booking arrival (`highlightArrival`) at 390:** click scrolls smoothly to `#agendar`, the form gets a 3px sage outline animation that ends after ~1.2s, no input is focused. With reduced motion emulated: instant jump, static outline, removed after 1.2s.
- **Keyboard focus (Tab through `/dilatacion-biliar-merida` at 1280 and `/lp/colonoscopia` at 390):** every stop is `:focus-visible` with a 2px solid outline (4px offset on design CTAs); skip link first.
- **Shared-role consistency (computed styles at 390 and 1280 on `/`, endoscopia, colonoscopia, dilatacion-biliar, precios):** header height/padding, H1, hero CTAs, doctor band H2/CTA, review H2/quote, FAQ H2/summary/disclosure, closing H2/CTAs, footer H3/copyright and sticky bar are identical across pages. Only closing-band paragraph colour differs (references `text-white/80`, migrated pages `--inverse-muted` `rgb(210,223,211)`), both ≥9:1.
- **Shared edits (`iconBox`, `eyebrowAlert`, `.inverse .related`, `closingSub`, `.emergency`, StickyMobileCTA icon):** no visible regression on `/`, endoscopia, colonoscopia or emergencias; emergency actions stay maroon (`rgb(113,60,49)`), home emergency banner and FAQ contact link intact.

## Content / SEO parity

- **36 baselined routes (12 `migration-baseline` + 24 `remaining-baseline`):** fresh 1280px snapshots compared field by field (title, canonical, all meta incl. robots, ordered headings, link text+href, IDs, image alts, every JSON-LD block, normalized main text). Raw result: 0/36 identical. After normalizing exactly the changes made by commit `c7d1b2a` (`Estephania Bass → Estefania Baas`, `estephania-bass.webp → estefania-baas.webp`, `/dr-omar-quiroz.webp` and `/equipo/omar-quiroz.webp → /equipo/omar-quiroz-portrait.webp` in JSON-LD `image`): **36/36 identical**. No other text, heading, link, ID, alt, meta or schema difference exists.
- **`/colonoscopia-merida` pilot:** compared against the pilot session's own pre-change baseline (different schema, normalized): headings, links, image alts, IDs, meta, canonical, JSON-LD and whitespace-insensitive text identical (same `c7d1b2a` normalization).
- **`/` and `/endoscopia-merida`:** no stored pre-pilot baseline exists; not manufactured. Source-level normalized diff vs `main` shows two pilot-era content additions the baselines cannot cover: the homepage hero portrait `<Image alt="Dr. Omar Quiroz">` and, via `components/Faq.tsx:158-163`, the home FAQ closing line now links "Contáctanos directamente" to `/contacto` (plain text on `main`). Both are deliberate design-pilot changes but are content/link deltas the user should consciously accept.
- **Footer (all routes):** phone text line removed, "Diseño Sanel Design Studio" link and COFEPRIS number added by `c7d1b2a` — intentional, outside the migration.

## Intentional exceptions (documented, acceptable)

- Utility/article pages (`/pacientes-de-fuera-de-merida`, both `/preparacion-*`) keep single-column guide layouts and stacked hero CTAs; `/cpre-playa-del-carmen` keeps its travel table.
- No hero sticky hook on `/precios`, `/equipo-medico`, `/consultas-digestivas-merida` (300px fallback, verified).
- CPRE, EMR and cápsula closings became forest bands; colónicas and balón keep an enclosed CTA in a light section; duodenales FAQ/related split in same DOM order.
- Adjacent paper sections separated by the FAQ top rule (equipo, dr, pacientes, preparación colonoscopia).
- LP team block keeps 64px avatars; hemorroides hero buttons equal width (pre-existing `flex-1`).
- Emergency maroon role on emergencias hero/alarm actions.
- LPs keep the full site header (route-group design) and their own sticky bar.

## Checks run

- Route enumeration (`app/**/page.tsx`, redirects, sitemap, aliases) vs both reports' manifests.
- `git diff main` of all shared files (lib/, components/, layouts, config); normalized source diff of all 40 page files.
- Automated audit, all 39 routes × 320/390/640/768/1024/1280: overflow, display-price fit, canvas-composited contrast, clipped/hidden text, tap targets; 1280 content/SEO snapshot.
- Sticky/FAQ/CTA probe and reduced-motion probe (emulated) on all 39 routes at 390.
- Console error capture, 39 routes.
- Full-page 390 contact sheets, all 39 routes, visually reviewed (three >20000px pages split in two). 1280 sheets: 12 representatives. 768 sheets: 5 tablet-risk routes.
- Calendar (320), booking arrival (normal + reduced motion), sticky page-end overlap, keyboard Tab pass, cross-page computed-style role comparison.
- `git diff --check`: clean (tree clean). `tsc --noEmit`: 10 errors, all the documented baseline (`lib/routes-seo.ts` ×8, `lib/seo.ts` ×1, `components/GoogleReviews.tsx` ×1); re-run because `c7d1b2a` changed lib/components after the report's run. No new errors.
- Not run: `pnpm build` (dev server occupies `.next`).
- Nothing submitted or opened: no WhatsApp/`tel:` links followed, no form submissions, no video playback.

## Uncertainty / limitations

- No pre-pilot baseline for `/` and `/endoscopia-merida`; parity there rests on the source diff only.
- Visual review at 390 used contact sheets (0.6 scale); fine typography was checked by computed styles, not pixels. 1280 and 768 were reviewed on representatives only.
- Live Google Reviews, Google Maps (dev placeholder), video playback, real-device touch/hover and GTM payloads were not exercised; tracking parity is source/ID-level.
- Whether `main` also wrapped the endoscopia panel price at 320 is unknown; the finding stands as a current violation.
- 320px is below CLAUDE.md's 375px design floor; the medium severity of finding 1 follows the migration/review constraints that explicitly list 320. The user may reclassify.

## Artifacts (session scratchpad, not in the repo)

`/private/tmp/claude-501/-Users-sanel-dev-personal-endoscopia-del-mayab-design/8c3b692e-a8d0-40bf-b223-352ecdf5ba18/scratchpad/`: `audit.mjs` + `audit2.js`/`price-fit2.js`/`overflow.js`/`probe.js`/`review-motion.js`/`calendar.js`/`arrival.js`/`stickyend.js`/`roles.js`, `out/*.audit.json` and `*.snapshot.json`, `audit-all.log`, `probe-all.log`, `console.log`, `tsc.log`, `normdiff.txt`, `sheets/` (390 sheets all routes, 768 sheets), `sheets1280b/`, `wrap/` (finding 1 screenshots).
