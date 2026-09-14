# Independent review — design-refresh migration (12 routes)

> **Addendum (fixes applied after review, same day).** The user asked for the must-fix items only; the minor findings (4–7) and inline prose wrapping were accepted as-is.
>
> **Fixes:**
> - **Finding 1, contacto closing contrast:** new `.closingText` role in `app/(site)/design-pages.module.css`, applied to the closing section in `app/(site)/contacto/page.tsx`. The paragraph now computes to `rgb(210,223,211)` on `rgb(25,61,53)` (≈10:1) at 390 and 1280px. The H2 and CTAs are unchanged.
> - **Finding 2, CPRE comparison prices:** `.compare` prices are now `clamp(20px, 2.4vw, 30px)` with `nowrap`, and `clamp(22px, 7vw, 30px)` at ≤767px.
> - **Finding 3, precios/contacto price anchors:** `.anchorPrice` minimum lowered to 20px; single-column anchors (below 640px) stay at 28px.
>
> **Re-verification:**
> - **Price locator on `/cpre-merida`, `/precios` and `/contacto`:** no price wrap or overflow at 640, 768, 1024 and 1280px, and none on contacto at any width. At 320 and 390px the only hits are the accepted items: inline prose, and the 9px `/precios` price-bar overrun from finding 4.
> - **Content/SEO:** re-compare of the three pages against `migration-baseline/before` is IDENTICAL.
> - **`git diff --check`:** clean.
>
> **1024px audit completed** for the routes that were missing: emergencias, dr and all five LPs. No price wrap, price overflow, small targets or clipping. The only contrast flags are the known `oklab()` parser false positives. **Verdict after fixes: ready.**

Date: 2026-09-13 · Reviewer did not modify any site files. Claims in `MIGRATION-REPORT.md` were re-verified against the live dev server (`127.0.0.1:3001`), the working-tree diff, and the stored baselines.

## Overall verdict: **needs fixes (small, targeted)**

The migration is structurally sound:
- All 12 routes are implemented.
- Content, SEO, IDs, tracking props and LP indexing are unchanged.
- Sticky and reduced-motion behaviour matches the references.
- The reference pages are not regressed.

Two confirmed defects should be fixed before sign-off:
- **Contacto:** the closing paragraph is invisible (dark text on the dark band).
- **Tablet price layouts:** at tablet widths, prices wrap mid-value or overflow their cells, which the project rules (CLAUDE.md) explicitly forbid.

The remaining items are minor.

---

## Findings (prioritized)

### Confirmed defects

**1. [High] `/contacto` closing paragraph has ~1.06:1 contrast (effectively invisible)**
- **Where:**
  - `app/(site)/contacto/page.tsx:285` (`<p className="text-primary-foreground/80 text-lg">`)
  - The section gets `system.closing` at around line 280.
- **Evidence:** at 390, 320, 768 and 1024px the paragraph computes to `rgb(30,56,49)` on `rgb(25,61,53)`. The "Escríbenos por WhatsApp y te contestamos en minutos." copy can't be read. The H2 is fine because `system.closing h2` sets the inverse colour explicitly.
- **Cause:** `design-system.module.css` overrides the primary/text tokens, so `text-primary-foreground` now resolves to dark forest. The other targets use `text-white/80` and are unaffected. Contacto is the only target with this token.
- **Suggested fix:** add `pages.inverse` to the contacto closing section, the same pattern as the CPRE closing. Alternatively, make `.system.system .closing p` set `color: var(--inverse-muted)`, but that is a shared change and would need re-checking on the references.

**2. [Medium] `/cpre-merida` three-way price comparison wraps prices mid-value at 768–1024px (and at 320px)**
- **Where:**
  - `app/(site)/design-pages.module.css:107` (`.page .compare > div > p:nth-child(2)`: 30px, no `nowrap`)
  - Applied at `app/(site)/cpre-merida/page.tsx:439` and `:452`
- **Evidence:**
  - 768px: "$40,000+ MXN" and "Desde $26,000 MXN" each render on 2 lines.
  - 1024px and 320px: "Desde $26,000 MXN" in the `compareOurs` cell renders on 2 lines.
- **Suggested fix:** make the price size responsive with `white-space: nowrap`, the way the endoscopy benchmark rule (`clamp(20px,2vw,26px)`) and `priceFigure` already do.
- **Note:** the old 3xl bold card may also have wrapped at 768px, but no pre-migration screenshot exists. Either way it breaks the "never wrap a price mid-value" rule.

**3. [Medium] `/precios` and `/contacto` price anchors overflow their columns at tablet widths**
- **Where:**
  - `design-pages.module.css:182` (`.anchorPrice`: `clamp(24px,2.6vw,32px)` with `nowrap`)
  - `precios/page.tsx:238/248`, `contacto/page.tsx:230/245`
- **Evidence:** at 768px the three prices overrun their cell's inner edge by 6, 8 and 22px. "Desde $26,000 MXN" reaches x=742 against a 720px content edge, pushing into the side gutter. The page has no horizontal scroll, which is why the implementation's overflow check passed.
- **Suggested fix:** use a smaller clamp minimum for the 3-column range (e.g. `clamp(20px, 2.6vw, 32px)`), reduce cell padding at 768–1023px, or stack the anchors below 900px.

**4. [Low] `/lp/*` price cards and `/precios` price bar at 320px: price runs into the card padding**
- **Where:** `design-pages.module.css:302` (mobile `.priceFigure` `clamp(26px, 8.5vw, 36px)` with `nowrap`)
- **Evidence:** at 320px the figure overruns the padded inner edge:
  - `/lp/cpre`: 10px
  - `/lp/hemorroides`: 5px
  - `/lp/ligadura-varices`: 5px
  - `/precios` price bar: 9px

  It stays inside the viewport but touches or crosses the card border area. The report notes this clamp was "not visually re-screenshotted".
- **Suggested fix:** add a `≤380px` rule (as already exists for `.priceBadge` and `.panelPrice`): about 24px, or reduce the enclosure padding at 320px.

**5. [Low] `/ligadura-varices-esofagicas-merida` related-procedure price wraps at 768px**
- **Where:** `design-pages.module.css:148` (`.relatedPrice`: 22px, previously `text-sm`)
- **Evidence:** at 768px, "Desde $26,000 MXN" (the CPRE card) renders on 2 lines beside the arrow. This is introduced by the migration, which enlarged the price from 14px to 22px.
- **Suggested fix:** add `white-space: nowrap` and a smaller size at 768–1023px, or let the arrow wrap below the price.

**6. [Low] Location rows: the icon sits detached from its text**
- **Where:** `design-pages.module.css:45` (`.location { gap: 8px 24px }`)
- **Evidence:** the 24px column gap applies to single icon+text lines, leaving a visible gap between the pin and its text:
  - the LP hero location line (all 5 LPs, visible in the 390 and 1280 screenshots)
  - the `/dr-omar-quiroz` hero location line

  The CPRE/ligadura multi-row version is fine.
- **Suggested fix:** use `gap: 8px` on single-line uses, or a separate row-gap variant.

**7. [Low] `/precios` out-of-town strip: icon stranded above the text on mobile**
- **Where:**
  - `precios/page.tsx:278` (`pages.routeStrip`)
  - The component's own `flex-col` at `components/FueraDeMeridaStrip.tsx:26`
- **Evidence:** in the 390px screenshot the MapPin sits alone on its own line. Removing the enclosure makes it read as the "icon stranded beside/above a paragraph" pattern the guide warns against.
- **Suggested fix:** a scoped row layout for `.routeStrip > div` on mobile (icon top-aligned beside the text).

### Intentional differences (documented, acceptable)
- **No hero sticky hook on `/precios` and `/equipo-medico`:** these keep the 300px fallback. Verified: the bar shows mid-page, hides over the closing CTA, and hides at the top. The reason is sound (the hero CTA sits below the first mobile viewport).
- **CPRE closing:** changed from white to the forest closing band.
- **CPRE markup:** reviews and FAQ wrappers were flattened.
- **Added wrapper divs:** around BiopsyDifferentiator, ComparisonTable, FueraDeMeridaStrip and TeamPresence. The normalized source diff shows no other structural or prop changes.
- **Doctor portrait** switched to the new photo on all targets. Alt text is unchanged.
- **LP team block** keeps 64px avatars.
- **Adjacent paper sections:** Verifica + FAQ on equipo, and team + FAQ on dr, separated by the FAQ's top rule.
- **Emergency maroon:** used for the emergencias hero and alarm WhatsApp actions via an opt-in `.emergency` role. Semantically consistent with the guide.

### Pre-existing or outside migration scope
- **YouTube thumbnail hover-scale under reduced motion:** `components/YouTubeEmbed.tsx:64,67` keep scale transitions (no `motion-reduce`, no global rule). The component is unmodified and the same behaviour exists on the endoscopy reference.
- **Header menu button is 40×40px** (below 44px): shared SiteHeader, same on all references.
- **Inline prose prices wrap ("$1,200 MXN" breaking across lines):** in BiopsyDifferentiator text and long paragraphs. The same happens on the `/colonoscopia-merida` reference, so it isn't introduced here. Fixing it would need non-breaking spaces in `mxn()`, which is a content/lib change.

### Uncertainty
- **Contrast audit false positives:** my audit flagged `text-white/80` on the forest bands as 1.76:1 because the parser mis-reads `oklab()` colours. Manually composited, white at 80% on `#193d35` is about 9:1. The references show the identical pattern, so these are **not defects**.
- **Pre-migration tablet behaviour:** there is no pre-migration screenshot, so I can't tell whether findings 2 and 3 are worse than before; they are current violations regardless.

---

## Verification of report claims
| Claim | Result |
| --- | --- |
| All 12 routes implemented | **Confirmed.** All import `design-pages` and `design-system`. |
| Content/SEO identical | **Confirmed independently.** Fresh snapshots vs `migration-baseline/before`: all 12 IDENTICAL (title, canonical, meta incl. robots, ordered headings, links, IDs, image alts, JSON-LD, main text). |
| Tracking preserved | **Confirmed.** A normalized source diff (className hooks stripped) shows no `service`/`position`/`procedureName`/`label`/`message`/`id` changes, only the portrait `src`, `avatarSize` and wrapper changes above. CTA IDs are unchanged per the ID comparison. |
| Forms preserved | **N/A:** no forms on any target (grep confirms no AppointmentForm or `<form>`). |
| LP conversion flow and indexing | **Confirmed:**<ul><li>one `lp-sticky` bar per LP</li><li>no footer</li><li>no global sticky</li><li>`robots` noindex/nofollow</li><li>`#hero-ctas` present</li><li>`lp-exit-to-guide` links present</li><li>metadata identical to baseline</li></ul> |
| Sticky behaviour | **Confirmed** with a stepwise-scroll probe on the 7 site targets and on `/`, `/endoscopia-merida` and `/colonoscopia-merida`: hidden at load and while the hero is visible, shown past the hero, hidden over the closing CTA, hidden at the top, shown after a mid-page jump. Outlined icon everywhere. Identical pattern on the references. |
| Reduced motion | **Confirmed** on CPRE, precios, emergencias, dr, `/lp/colonoscopia` and `/`: `scroll-behavior: auto`; hero CTA, FAQ chevron, group links/arrows and sticky bar/links all at 0s. Normal-motion control shows 0.16–0.18s. The remaining transforms are YouTubeEmbed only (pre-existing). |
| No reference regression | **Confirmed** for the changed shared parts. `.emergency` is unused by the references (the home page's `emergency-banner` is an unrelated global class). References keep the forest hero CTA, the maroon home emergency CTA, the MessageCircle sticky icon and the home FAQ contact link, and sticky behaviour is unchanged. The 390px audit shows no new issues on the references. |
| Price fit "verified" | **Partially contradicted:** see findings 2–5 (tablet widths and the LP price card at 320px were not covered). |
| `tsc` / `git diff --check` | **Not re-run** by the reviewer (the report's results were not independently reproduced). |

## Checks performed
- Read the report, prompt and guide, the full `design-pages.module.css`, the `StickyMobileCTA` diff and the `design-system` emergency block.
- Normalized source diff of all 12 target pages against HEAD.
- Fresh content/SEO snapshots of all 12 routes compared against `migration-baseline/before`.
- **390px, all 12 targets:**
  - screenshot review (stored slices, plus earlier sections)
  - automated contrast, price-wrap/overflow, tap-target and clipping audit
  - the same audit on the 3 references
- **1280px, one representative per page type:** `/cpre-merida` (procedure), `/precios` (information), `/lp/colonoscopia` (LP).
- **Audit at 320 and 768px:** all 12 targets.
- **Audit at 1024px:** 5 routes (cpre, ligadura, precios, equipo, contacto).
- Element-level price locator at 320, 768 and 1024px for the flagged routes.
- Sticky stepwise-scroll probe on 10 routes; reduced-motion probes on 6 routes plus a control.

## Remaining verification gaps
- **1024px audit incomplete:** my run hung on `/emergencias-digestivas-merida` and was stopped. Emergencias, dr and the 5 LPs were not audited at 1024px.
- **Other widths:** only representative routes were visually reviewed at 1280px; 768px was measured, not visually reviewed per route.
- **Not tested:**
  - video playback
  - Google Maps (dev placeholder)
  - live Google Reviews
  - real-device touch and hover
  - keyboard focus order
  - GTM payloads (only ID/prop parity was checked)
  - `pnpm build` and `tsc` (not re-run)
