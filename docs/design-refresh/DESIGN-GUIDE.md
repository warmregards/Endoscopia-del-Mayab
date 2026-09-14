For subsequent multi-page migrations, use PROCEDURE-MIGRATION-PROMPT.md. Its bounded verification workflow supersedes the historical pilot verification/checklist below; visual and content rules still apply.

# Endoscopia del Mayab — visual design handoff

Updated 2026-09-13. This is a local design experiment, not a deployed redesign.

## Workspace and scope

Work in `/Users/sanel/dev/personal/endoscopia-del-mayab-design`, branch `design-refresh`.
The original checkout `/Users/sanel/dev/personal/endoscopia-del-mayab` is separate and must remain untouched.
The existing modifications and untracked CSS files are intentional work in progress. Do not reset, clean, overwrite, stash, or discard them. Do not commit, merge, push, or deploy without the user requesting it. Avoid simultaneous Codex and Claude edits to the same files.

The next experiment is **only `/colonoscopia-merida`** (Spanish spelling). The homepage and `/endoscopia-merida` are visual references. This guide authorizes neither a whole-site rollout nor content rewrites.

## What the design is doing

The original site had spacing tokens, but too many sections had the same visual weight: rounded cards, bold headings, colored badges, and little distinction between educational content and actions.

The new direction uses warm paper, forest-green text, regular-weight serif headings, real portrait photography, and thin dividing rules. Large section spacing establishes rhythm; small related items remain tightly grouped. Containers are reserved for something that benefits from enclosure: a price summary, a form, an action, or a highlighted comparison result. Educational content generally stays open.

This is a presentation layer over existing content. Change how information is grouped and sized without rewriting it. The goal is calm, personal, professional, and readable. Avoid decorative gradients, glass effects, oversized badges, generic icon circles, heavy shadows, and turning every paragraph into a card.

## Source of truth

The shared source of truth is `app/(site)/design-system.module.css`. Both reviewed pages opt in via `system.system` and semantic role classes. Read this first, then the route-specific composition rules, including final overrides:

- `app/(site)/design-system.module.css`
- `app/(site)/page.tsx`
- `app/(site)/home-design.module.css`
- `app/(site)/endoscopia-merida/page.tsx`
- `app/(site)/endoscopia-merida/procedure-design.module.css`
- `components/DoctorAuthority.tsx`
- `components/TeamPresence.tsx`
- `components/ComparisonTable.tsx`
- `components/OnlineBookingBanner.tsx`
- `components/AppointmentForm.tsx`
- `components/GoogleReviews.tsx`
- `components/StickyMobileCTA.tsx`
- `components/Footer.tsx`

Older design documents describe the earlier implementation. Use this guide and the rendered reference pages for this visual experiment. Read applicable repository instructions too; surface actual conflicts rather than silently replacing the user's requested direction.

## Visual rules

| Element | Treatment |
| --- | --- |
| Paper | `#f8f7f2` |
| Light section | `#fffefa` |
| Forest ink / doctor band | `#193d35` |
| Muted body text on light | `#59665f` |
| Sage emphasis | `#e9eee4` |
| Dividing rules | `#d5dcd4` |
| Footer | `#132f29` |
| Emergency | Maroon `#713c31`, reserved for emergency actions |
| Main container | Maximum 1240px including 40px desktop side padding; 24px mobile |
| Section spacing | Usually 88px desktop / 56px mobile; hero and short utility strips are tighter |
| Headings | Georgia, Times New Roman, serif; weight 400; tracking around -0.035em |
| Procedure H1 | Around 62px large desktop / 40px mobile, line-height 1.08 |
| H2 | Around 40–44px desktop / 32px mobile; size to content, do not force nowrap |
| H3 | Around 26–27px |
| Body | Existing Open Sans, generally 16px; line-height 1.65–1.85 |
| Supporting information | Usually 14–15px; reserve 12–13px for minor metadata |
| Testimonials | Georgia 19px, line-height 1.65, open ruled rows |
| Buttons | Minimum 48px high, 4–6px radius, clear filled/outlined hierarchy |
| Photos | 12px radius, intentional crop, no oval cutouts |

Tokens alone do not establish hierarchy. Use size, grouping, alignment, and whitespace consistently. Do not apply large margins to every paragraph: title/subtitle pairs need roughly 4–8px between them. Permit wrapping where useful; never shrink meaningful body text just to fit a narrow column.

## Component patterns to replicate

### Procedure hero and booking strip

Keep the existing H1 and copy verbatim. Desktop has introductory copy left and a cost panel right. The panel has a dark price header and light inclusion list. Keep the doctor label close to the price (4px margin, compact line-height).

On mobile, copy and primary booking actions come before the price panel. Keep WhatsApp and Call legible and at least 48px high. The secondary online-booking strip is left-aligned with a small top-aligned calendar icon, compact title/subtitle spacing, and a full-width outlined action. It must not resemble a centered paragraph with an icon stranded beside it.

### Doctor authority and training

Pass `portraitSrc="/equipo/omar-quiroz-portrait.webp"` to `DoctorAuthority` for the pilot. That optional prop leaves other routes on their existing image. The new portrait is 200×250px desktop and 160×200px mobile, above the text on mobile. Use a dark forest band, pale text, and a subdued readable specialty line. Preserve every credential and its existing text.

Training is a compact list: two columns desktop, one column mobile. Each row has a 72×64px light logo slot, role at 15px, organization at 14px with a 4px gap, and a fine rule. Full-color logos need a light backing on the dark section. Avoid the old large vertical gaps and tiny institution subtitles.

On mobile, stack the two doctor actions at full width: pale filled WhatsApp, then an outlined profile link. Desktop may place them side by side. The homepage currently has a shorter authority block; do not add the full training list there in this colonoscopy task.

### Team

Use `TeamPresence avatarSize={128}` to opt into larger portraits. Open ruled columns replace enclosed cards. Keep role, biography, credentials, and the nurse-presence guarantee intact. The final team/credentials link has a visible border, at least 48px height, and an arrow that cannot shrink or wrap alone.

### Comparisons

Keep the real comparison table on desktop. On mobile, retain each existing comparison category and all three providers. The laboratory and hospital values remain in two columns. The practice's highlighted result uses its own full-width label followed by the answer below it. This keeps “Endoscopia del Mayab” on one line while allowing long answers to use the full width. Do not truncate, remove providers, or squeeze long answers into a narrow right column.

### Booking form

Keep all labels, field names, validation, tracking, scheduling behavior, and submission logic. The response-time message is a quiet ruled note with a top-aligned small clock, not a pill. Do not submit test appointments to the live intake endpoint.

The calendar is rendered in a portal outside the page wrapper. Check it at 320px: all seven columns must fit. The existing pilot has scoped portaled-calendar sizing rules; account for these when opting colonoscopy into the design.

### Reviews, closing CTA, footer

Match the homepage review typography and spacing. Broad `.text-sm` rules can override testimonial font sizes; check computed styles, not merely the stylesheet. Expected testimonial font is Georgia 19px/1.65.

Inline links on a forest CTA background must explicitly be white and weight 600, with visible underlines. The footer's copyright is now 12px sitewide in the design worktree, per the user's request. Keep the phone number: it remains useful for copying/manual dialing. Footer changes must not be duplicated in the new route stylesheet.

### Interactions

Use restrained hover color changes and an optional 2px lift on primary actions; preserve visible keyboard focus and reduced-motion support. Use the outlined MessageCircle icon consistently for WhatsApp in this design. StickyMobileCTA currently opts in `/` and `/endoscopia-merida`; add `/colonoscopia-merida` deliberately if needed, leaving other routes unchanged.

## Implementation boundaries

The current CSS modules are exploratory, with accumulated overrides and structural selectors such as `:nth-child` and `:has`. They are working references, not a universal template that can be imported onto arbitrary markup. Inspect colonoscopy's actual sections and add meaningful scoped class hooks for its content.

Prefer a route-local `colonoscopia-merida` CSS module for this comparison experiment. Reuse existing optional component props. If a shared adjustment is necessary, make it opt-in with unchanged defaults. Do not globally replace typography or indiscriminately remove borders from form controls. Do not refactor the entire design system during this pilot. Common rules have now been extracted into `design-system.module.css`. Reuse them instead of copying or overriding their values in the colonoscopy module.

## Content and SEO invariants

Preserve exact existing wording, prices and their data sources, paragraph order, heading text and levels, link text and destinations, IDs/anchors, image alt text, metadata, canonical, robots, Open Graph, structured data, and revalidation. Preserve FAQ content/schema and server rendering. Keep existing contact/tracking behavior.

A design-only change is not a guarantee of unchanged rankings; verify content parity and later performance/layout stability. Do not introduce new claims or medical/SEO edits as part of design work.

## Verification and handoff

1. Record `git status` and a colonoscopy baseline before edits. Save rendered normalized text, ordered headings, links, metadata, and JSON-LD. Keep shared-component changes already present.
2. Preview homepage and endoscopy as references. Preview colonoscopy after changes at 390×958 and 1280×1012, plus 320px and 768px widths.
3. Review whole sections visually: hero, booking strip, prices, doctor/training, team, comparisons (especially longest row), form/date picker, educational sections, reviews, FAQ, bottom CTA, footer.
4. Verify no horizontal overflow, no header/logo overlap, consistent testimonial type, clear actions, white closing links, and readable subtitles. Test disclosures and calendar without submitting forms or contacting anyone.
5. Compare all recorded content/SEO fields. Explain genuine dynamic differences; do not simply ignore mismatches. Check homepage/endoscopy for shared-component regressions.
6. Run `git diff --check` and relevant compilation/type checks. The existing TypeScript baseline has errors in `GoogleReviews.tsx` (async JSX component), `lib/routes-seo.ts` (RouteCfg union properties), and `lib/seo.ts` (Robots type). Do not claim a clean type check or repair unrelated errors in this design task.
7. Use the existing dev server at `http://127.0.0.1:3001` if healthy. If absent, run `pnpm dev --hostname 127.0.0.1 --port 3001` from the design worktree. Do not start duplicate servers or run a production build concurrently against the same `.next` directory.
8. Return the colonoscopy preview link, short change summary, content-parity results, and any remaining limitations. Stop for user visual review; no deployment or additional procedure pages.

## Desktop annotation follow-up

The booking strip uses a grid with a 6px title/subtitle gap and zero paragraph margins, avoiding accumulated paragraph spacing. Its 20px calendar icon aligns near the title's top (4px offset), with a 12px icon/text gap on both desktop and mobile.

At four-column desktop widths (1024px+), price benchmark cells use 16px horizontal padding and `clamp(20px, 2vw, 26px)` serif prices so amounts and MXN fit on one line. Verify actual fit at 1024px and 1188px; do not force nowrap if it creates overflow.

The totals confirmation sentence is a separate note: 24px top margin, a restrained 2px sage left rule, 14px inset, and 14px text at 1.65 line-height. Keep the sentence unchanged.


## Cross-page consistency contract (2026-09-13 — supersedes earlier sizing advice)

Import `system` from `../design-system.module.css` in a procedure page, combine `system.system` with its existing page-root class, and opt each matching section into `system.hero`, `system.doctor`, `system.reviews`, `system.faq`, or `system.closing`. See both reviewed pages for exact wiring. These role classes are CSS hooks, not content changes.

The shared module deliberately uses doubled root specificity to beat older utility overrides without `!important`. Do not escalate selector specificity to fight it. Fix shared roles in that module and verify both reference pages; route modules should handle only composition and documented exceptions.

| Role | Required common rule |
| --- | --- |
| Container | 1240px maximum; 40px side padding at 1024px+, 24px below |
| Standard section | 88px vertical padding at 1024px+, 56px below |
| Header | 84px high at 768px+, 68px below; desktop side padding 40px, tablet 24px, mobile 20px |
| Header navigation | 13px/28px gap at 1024px+; 12px/14px gap at tablet sizes; compact logos at tablet and below 380px |
| H1 | Georgia 400, -0.035em, line-height 1.08; clamp(46px,4.7vw,62px), 40px below 768px |
| Common H2 | clamp(32px,3.2vw,44px), 1.15 line-height; 32px below 768px |
| Educational H3 | 27px desktop, 26px below 768px |
| Body / support / metadata | 16px / 14px / 13px; 12px only minor trust/review metadata or copyright |
| Body rhythm | 1.75 line-height for main prose; denser labels use 1.5–1.6 |
| CTA | At least 48px high; 14px/1.5, weight 600, padding 12px 20px, radius 4px, icon 16px |
| Mobile hero CTA | 13px/1.5; WhatsApp horizontal padding 12px; Call 16px |
| Primary CTA | Forest #193d35 with warm-white text; no shadow |
| Inverse CTA | Pale #e7eee1 on the doctor/closing dark bands, forest text |
| Secondary CTA | Transparent with sage border; white text on dark backgrounds |
| Doctor portrait | Same primary photo; 200×250px desktop, 160×200px mobile; radius 12px |
| Doctor support | Specialty 15px; credential metadata 13px; prose 16px/1.75 |
| Review quote | Georgia 19px/1.65, #354b40; no card box; top rule; 28px vertical padding |
| Review columns | 48px gap desktop; stacked with zero column gap on mobile |
| FAQ question | 16px/1.6 desktop; 15px mobile; 22px vertical padding |
| FAQ disclosure | At least 52px high, 14px type, pale sage fill, 1px border, radius 6px |
| Closing heading | clamp(38px,4.5vw,56px), 1.15 line-height, warm white |
| Footer | #132f29, serif 25px headings, white 12px/1.6 copyright |
| Focus / motion | 2px visible focus outline with 4px offset; 180ms CTA transitions, optional 2px hover lift, no motion for reduced-motion preference |

### Intentional differences — do not flatten these

- Homepage hero has photography; procedure hero has a cost panel. Their content grouping differs. Homepage tablet photo is capped at 440×440px at 600–899px to avoid an excessively tight crop.
- Homepage procedure names are 34px display labels; educational subheadings are 26–27px. Catalog labels are small uppercase navigation labels, not prose headings.
- The requested single-line mobile “Procedimientos Principales” heading retains its responsive compact size. Do not force every H2 onto one line.
- The homepage quote remains a large serif quotation. Procedure training rows retain compact sans-serif roles and institutions.
- Emergency maroon is semantic and remains distinct from normal green booking actions.
- Prices have contextual scales: homepage price anchor is sans-serif, cost-panel prices are serif, four-column benchmark prices shrink to fit. Preserve the documented price layout rules.
- The homepage FAQ has an existing contact link; the procedure FAQ's existing final contact message is plain text. This audit preserves functionality and destinations rather than inventing a link during a styling pass.
- Introductory, short utility, biopsy, and hero sections may use compact spacing. Standard section rhythm should remain shared.

### Verification requirement for Claude

At 390px, 768px, and 1280px, compare computed styles for the same role between the new colonoscopy page and endoscopy. Confirm the viewport actually applied to the inspected tab. Compare font family/size/line-height/weight, color, background, padding, radius, and alignment. Do not compare element height when text lengths differ. Also inspect at 320px for overflow and header/calendar fit, and 1024px for one-line benchmark prices.

Content parity is required independently of visual parity. Before/after checks in this audit confirmed identical normalized main text, ordered headings, link text/destinations, metadata, and JSON-LD on both reference pages. Do not alter those to solve a visual problem.

## Interaction contract (home and endoscopy)

Reuse the shared design-system.module.css interaction rules. Touch feedback must work without hover: CTA and form controls dim briefly while pressed. Fine-pointer desktop CTAs lift 2px; procedure arrows move 3px. Keep transitions 160–180ms and retain visible keyboard focus. Native disclosures retain their semantics and existing chevron rotation, with sage open states. Form focus and selected time states use forest/sage; preserve validation and selection logic. The sticky mobile bar fades with its existing slide and stays inert when hidden.

OnlineBookingBanner accepts highlightArrival; endoscopy opts in. When adopting this on colonoscopy, enable that prop. Clicking Agendar en línea scrolls to the booking section, then briefly outlines the arriving form for 1.2 seconds. Do not autofocus an input or open the mobile keyboard. Repeated clicks and unmount clean up the observer/animation. Reduced motion uses immediate scrolling and a static temporary outline; CSS transitions and decorative movement are disabled. No pulsing CTAs, parallax, scroll-hidden content, or automatic carousels. Preserve copy, links, analytics and form submission behavior. Check mobile and desktop interactions without submitting patient information.

### Mobile hero priority

On the homepage below 900px, show the starting price and primary WhatsApp/Call actions before the portrait. Keep the sequence: trust line, title, short introduction, starting price with inclusion caption, actions, portrait, supporting price explanation, location. Use the existing single CTA group so analytics and sticky-bar observation remain intact. Keep desktop composition unchanged. Target primary actions within the first 390×844 viewport; on shorter screens or enlarged text preserve legibility rather than forcing a fixed-height hero. Procedure pages should keep price and booking actions prominent using their own composition rather than copying the homepage portrait layout.

Portrait update: use `/equipo/omar-quiroz-portrait.webp` for the reviewed homepage hero/doctor band and procedure doctor authority. This is the user-supplied 1122×1402 WebP; preserve the established responsive crop. Arrow feedback must target arrow icons only, never credential checkmarks. Reduced-motion rules must cover catalog disclosure chevrons and action-row gap changes as well as FAQ arrows.

Migration follow-up: add data-sticky-hero-cta and data-sticky-bottom-cta to existing procedure CTA groups; preserve existing IDs. Shared sticky observation refreshes on route changes and activates only after the hero group passes above the viewport. Reduced-motion scrolling is overridden at html for opted-in design pages. Prose links are underlined; calendar popovers retain 8px collision padding. Reuse these behaviors in subsequent migrations.
