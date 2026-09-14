# Design-refresh migration report — procedures, information pages, landing pages

Date: 2026-09-13 · Worktree: `endoscopia-del-mayab-design` (branch `design-refresh`) · Nothing committed, pushed or deployed.
Dev preview: existing server at `http://127.0.0.1:3001` (left running for review).

## 1. Route status

All 12 routes are **completed**. None are partial or blocked.

| Group | Route | Preview |
| --- | --- | --- |
| 1 Procedures | `/cpre-merida` | http://127.0.0.1:3001/cpre-merida |
| 1 Procedures | `/ligadura-varices-esofagicas-merida` | http://127.0.0.1:3001/ligadura-varices-esofagicas-merida |
| 2 Information | `/precios` | http://127.0.0.1:3001/precios |
| 2 Information | `/equipo-medico` | http://127.0.0.1:3001/equipo-medico |
| 2 Information | `/contacto` | http://127.0.0.1:3001/contacto |
| 2 Information | `/emergencias-digestivas-merida` | http://127.0.0.1:3001/emergencias-digestivas-merida |
| 2 Information | `/dr-omar-quiroz` | http://127.0.0.1:3001/dr-omar-quiroz |
| 3 Ads LPs | `/lp/ligadura-varices` | http://127.0.0.1:3001/lp/ligadura-varices |
| 3 Ads LPs | `/lp/colonoscopia` | http://127.0.0.1:3001/lp/colonoscopia |
| 3 Ads LPs | `/lp/hemorroides` | http://127.0.0.1:3001/lp/hemorroides |
| 3 Ads LPs | `/lp/cpre` | http://127.0.0.1:3001/lp/cpre |
| 3 Ads LPs | `/lp/endoscopia` | http://127.0.0.1:3001/lp/endoscopia |

## 2. Design adaptation per route

Every route opts in with `system.system` (shared tokens, headings, CTAs, header/footer chrome, focus, motion). Where they exist, sections use `system.hero`, `system.doctor`, `system.reviews`, `system.faq` and `system.closing`. Composition comes from class hooks on existing elements; no markup was rewritten.

- **/cpre-merida:** procedure pattern.
  - Hero: intro left and cost panel right (dark price header; the decorative icon is hidden). On mobile the copy and WhatsApp/Call row come before the panel.
  - Indication, comparison and fear cards became open ruled columns; the CPRE option has a 3px ink rule.
  - Three-way price comparison uses ruled columns with a sage practice column.
  - Steps use serif numerals and the duration note is sage.
  - "¿Cuándo recibo los resultados?" is a sage enclosure; post-CPRE warning signs get a maroon rule.
  - The bespoke doctor section became the forest band: new portrait at 200×250, open stats, pale credentials, outlined profile link, training strip in ruled rows.
  - Related procedures are ruled link columns.
  - The closing (previously `bg-background`) now uses the forest closing role, with pale ruled sub-notes.
- **/ligadura-varices-esofagicas-merida:** same procedure pattern.
  - The emergency eyebrow keeps its semantic maroon.
  - Price card became the cost panel.
  - The standalone "Desde" figure is serif.
  - BiopsyDifferentiator is a sage enclosure.
  - Prep steps use serif numerals and the alarm box has a maroon rule.
  - Doctor section is the forest band, including the H2 profile link.
- **/precios:** routing hub, not a procedure template.
  - "Particular" block is a sage note.
  - The three hero price anchors are ruled columns (sage hover, nowrap serif prices).
  - Out-of-town strip is a ruled row.
  - Per-procedure anchor sections (`#endoscopia`, `#colonoscopia`, `#cpre`) have an ink top rule and a sage price bar.
  - Service tables are ruled rows without card chrome.
  - ComparisonTable matches the endoscopy/colonoscopy treatment.
  - Insurance cards are open.
- **/equipo-medico:** people page.
  - Hero team cards are open ruled columns with 12px-radius 4:5 photos.
  - Credential chips are plain metadata.
  - "Antes/Durante/Después" lists are ruled rows with small labels.
  - Anesthesiology council number sits in a sage note with a serif figure.
  - Verification groups are ruled; question numbers are serif.
- **/contacto:**
  - Hero badges are plain metadata; the WhatsApp/Call stack is kept (the long call label doesn't fit a row).
  - Contact card is ruled info rows; map frame has a 12px radius.
  - Doctor section is the forest band with the new portrait, stacked full-width actions on mobile, and an outlined profile link.
  - Price reference uses the ruled anchor columns.
- **/emergencias-digestivas-merida:** emergency adaptation.
  - Hero emergency card is a cost-panel shape with a **maroon** header (phone number in serif).
  - Hero and perforation-alarm WhatsApp actions use a new opt-in maroon `.emergency` CTA role.
  - "Busca atención inmediata" and "Señales de alarma" are maroon-ruled enclosures; icon tiles removed.
  - Procedures are open columns; "how it works" steps use serif numerals.
  - Doctor section is the forest band.
  - "No ayuno" is a sage note.
  - The closing CTA stays forest with pale actions.
- **/dr-omar-quiroz:** profile page.
  - Hero photo is the new portrait at 4:5 with a 12px radius; credentials are plain metadata; mobile uses the WhatsApp/Call row.
  - Specialties are ruled link columns; the perforation block is a sage note.
  - Cédulas are ruled rows; memberships are open.
  - Light stats use ruled columns with serif figures.
  - Primary hospital is a sage note; secondary hospitals are open.
  - Consultation price sits in a surface enclosure.
  - TeamPresence uses open columns (`avatarSize={128}`).
  - The DoctorAuthority timeline is unchanged.
- **LPs (all five):** the conversion flow is unchanged; the LPs share one composition.
  - Header-only layout, own `lp-sticky` bar and `#hero-ctas` are all kept.
  - Trust bar is plain metadata; the hero price badge is sage with an ink rule and serif price.
  - Price card is a surface enclosure; competitor or value anchor is a quiet ruled note.
  - DoctorAuthority compact sits in the forest band with the new portrait. The trust video and the bare TeamPresence sit inside it with legible pale text.
  - Availability and prep lists are ruled rows; the static FAQ is ruled Q&A; the "¿Tienes otra duda?" block is sage.
  - Reviews and closing use the shared roles.

## 3. Files changed in this migration

Shared (new or modified):
- `app/(site)/design-pages.module.css` — **new**. Opt-in composition roles used only by the 12 targets (all import it). Not imported by home, endoscopy or colonoscopy.
- `app/(site)/design-system.module.css` — added an opt-in `.emergency` WhatsApp role (maroon). Used only by `/emergencias-digestivas-merida`; the reference pages don't use the class.
- `components/StickyMobileCTA.tsx` — the outlined-icon path check became a `DESIGN_REFRESH_ROUTES` list, extended with the 7 migrated `(site)` routes. Affects the icon on those routes plus `/`, `/endoscopia-merida` and `/colonoscopia-merida` (unchanged for those three). LPs don't render this component.

Route files (className hooks, `data-sticky-*` hooks, portrait `src`, wrapper divs): the 7 `(site)` target `page.tsx` files and the 5 `(lp)/lp/*/page.tsx` files.

Specific markup changes, none of which change content:
- **CPRE:** the GoogleReviews and Faq wrappers (`section > container > component`) were flattened to the reference pattern (component inside its own section), which removed doubled padding.
- **Wrapper divs added around components with no className prop:**
  - BiopsyDifferentiator on ligadura and precios.
  - ComparisonTable and FueraDeMeridaStrip on precios.
  - TeamPresence on the dr page.
- **Doctor portrait `src`** switched to `/equipo/omar-quiroz-portrait.webp`: CPRE, ligadura, contacto, emergencias, dr hero, and all LPs (via the existing `portraitSrc` prop). Alt text is unchanged.
- **Sticky hooks:**
  - `data-sticky-hero-cta` added on CPRE, ligadura, contacto, emergencias and dr.
  - `data-sticky-bottom-cta` added on all seven `(site)` targets.
  - **Not** added to the hero of `/precios` or `/equipo-medico` (see §7).

The other modified or untracked files in `git status` (home, endoscopy, colonoscopy, AppointmentForm, DoctorAuthority, Faq, Footer, OnlineBookingBanner, TeamPresence, the reference CSS modules, the portrait) were pre-existing work and were not touched, apart from the StickyMobileCTA and design-system additions above. The pre-edit status is in `migration-baseline/git-status-before.txt`.

## 4. Content/SEO comparison

For each target, one baseline was taken before editing and one comparison after, both at 1280px. The fields compared were:
- title, canonical and all meta tags (including robots)
- ordered H1–H6 in `<main>`
- link text and href
- element IDs
- image alt text
- every JSON-LD block
- normalised `<main>` innerText

**Result: all 12 routes are IDENTICAL on every field.**

One mismatch appeared on `/equipo-medico` and was fixed. `text-transform: uppercase` on the new step labels changed `innerText` ("Antes" rendered as "ANTES"), although the DOM text was unchanged. I removed the uppercase and the re-comparison was identical. No differences needed explaining in the final comparison. Reviews content was stable across runs (static fallback in dev).

## 5. Checks performed

- **Reference inspection:** once, before implementation (`/endoscopia-merida` at 1280 and 390).
- **Visual review:** every target at **1280 and 390** (sliced full-page screenshots, reviewed section by section). Fixes found this way:
  - stat-divider colour in the dark band
  - underlined outlined profile link
  - CPRE panel price wrapping at 320
  - icon alignment on emergencias info rows
  - question-number alignment on equipo
  - unreadable LP team block (paper background inside the dark band)
  - ligadura LP price-card wrapping at 390
  - CPRE LP hero badge exceeding the gutter at 320
- **320px:** overflow check on every target — `scrollWidth == clientWidth`, no offending elements. First mobile viewport visually reviewed. Price fit measured after the last fix (badge and panel right edge ≤ 296px).
- **768px:** layout screenshot on every target; no overflow.
- **Interactions at 390px:**
  - **Sticky bar on the 7 `(site)` targets:** hidden at load; shown after the hero (or after 300px on precios and equipo); hidden over the closing CTA; hidden again at the top. CPRE and ligadura were also compared against `/endoscopia-merida` with the same results.
  - **FAQ disclosures:** each question opens and closes, and "Ver N preguntas más" opens (52px tall).
  - **Hero CTAs:** 48px tall, with 160ms transitions.
  - **Emergency hero WhatsApp:** computed `rgb(113,60,49)`.
- **LPs:** one visible `lp-sticky` bar, no footer, no global sticky, `robots` noindex/nofollow, `#hero-ctas` present, video play control present, exit links (`data-cta="lp-exit-to-guide"`) present, review quotes Georgia 19px.
- **Reduced motion (emulated), all 12 routes:** CTA and sticky-bar transitions are 0s and `scroll-behavior` is `auto`.
- **Nothing was submitted or opened:** no forms exist on the targets, no WhatsApp or `tel:` links were followed, and no videos were played.
- **Reference spot-check after the shared changes:**
  - `/`, `/endoscopia-merida` and `/colonoscopia-merida` still show the MessageCircle sticky icon and the forest hero WhatsApp.
  - The homepage emergency banner is still maroon, and its FAQ contact link is still present.
- **`git diff --check`:** clean.
- **One batch `tsc --noEmit`:** result in §6.
- **Not run:** `pnpm build`, because it isn't allowed alongside the dev server.

## 6. Existing vs new errors

`tsc --noEmit` reports 10 errors, all pre-existing and matching the guide's documented baseline:
- `lib/routes-seo.ts`: 8 × TS2339, RouteCfg union properties
- `lib/seo.ts`: 1 × TS2322, Robots
- `components/GoogleReviews.tsx`: 1 × TS2786, async JSX component

**No new errors**, and none in any file changed by this migration.

## 7. Known issues, deviations, unverified behaviour

- **Sticky hero hook omitted on `/precios` and `/equipo-medico`:**
  - On mobile their hero CTA sits below the first viewport. The IntersectionObserver-based hook then never fires when the page jumps past it: the price anchors, reduced-motion jumps, or instant scrolls.
  - Both pages keep their previous 300px scroll fallback (verified). Only the bottom hook was added.
- **Content-neutral markup changes** (not content changes): CPRE's reviews and FAQ wrappers were flattened, and wrapper divs were added (§3).
- **CPRE closing section** changed from white to the forest closing band, for consistency with the guide.
- **LP team block** keeps the compact 64px avatars rather than `avatarSize={128}`, to keep the paid pages short.
- **Accepted adjacent-surface pairs:**
  - `/equipo-medico`: the Verifica section and the FAQ are both paper, separated by the FAQ's top rule.
  - `/dr-omar-quiroz`: the team block and the FAQ are both paper, with the same separator.
- **DoctorAuthority `variant="timeline"`** on `/dr-omar-quiroz` was left with its own node and badge styling, recoloured only through tokens.
- **Not visually re-screenshotted after the last shared tweak:** the mobile `priceFigure` clamp (at most 36px, scaling down with width). It was verified on the LPs and precios.
- **Unverified:**
  - actual video playback and Google Maps rendering (dev shows the map placeholder)
  - live Google Reviews data
  - real-device touch feedback
  - hover states beyond computed styles
  - GTM event payloads (tracking props and IDs are unchanged and were confirmed via the ID comparison)
- **Scratch tooling:** the no-dependency Chrome DevTools script used for these checks lives in the session scratchpad and is not part of the repo.

## 8. Artifacts for review

- `docs/design-refresh/migration-baseline/git-status-before.txt` — git status before any edit.
- `docs/design-refresh/migration-baseline/before/*.json` — content/SEO baselines for the 12 routes.
- `docs/design-refresh/migration-baseline/after/*.json` — final snapshots (compared field by field against `before/`).
- `docs/design-refresh/migration-baseline/screenshots/` — first two slices of each route at 1280 (scaled 0.6) and 390 (48 JPEGs).
