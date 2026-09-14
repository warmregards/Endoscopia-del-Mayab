Read `docs/design-refresh/DESIGN-GUIDE.md` and implement its design direction on `/colonoscopia-merida` as a single-page visual experiment.

Work only in this existing design worktree: `/Users/sanel/dev/personal/endoscopia-del-mayab-design` on `design-refresh`. Inspect and preserve all existing uncommitted work. The homepage and `/endoscopia-merida` are already redesigned; use their current rendered appearance and source as references, including the latest CSS overrides. Do not modify the original project folder.

First capture colonoscopy's current content and SEO baseline. Then adapt its layout using scoped CSS and small markup hooks. Preserve its exact wording, prices, headings and hierarchy, links, schema, metadata, anchors, and all functional/tracking behavior. Reuse the existing portraitSrc and avatarSize props where appropriate. Match the refined doctor/training block, mobile comparisons, readable reviews, clear CTAs, and booking-form treatment described in the guide. Make shared changes opt-in and verify the existing reference pages remain intact.

Actually implement and visually inspect the result at mobile and desktop widths; do not stop at a plan or merely copy the endoscopy page. Do not rewrite content, invent claims, add dependencies unnecessarily, submit test appointments, reset existing work, commit, push, merge, or deploy. This task covers only colonoscopy.

Use the running localhost:3001 preview if available. Follow the guide's validation checklist, compare content and SEO before/after, and report existing baseline errors honestly. Finish with the preview URL and a concise account of changes and checks so I can give visual feedback before any broader rollout.

Use `app/(site)/design-system.module.css` as the shared token/component source of truth. Opt the new page into its root and section role classes as described in the guide’s Cross-page consistency contract. Keep only colonoscopy-specific composition in its local module. Do not recreate the shared rules by copying the older page CSS. Verify computed-style parity with endoscopy at identical viewport sizes and preserve the documented intentional exceptions.

Follow the Interaction contract in DESIGN-GUIDE.md, including shared touch/disclosure/form states and OnlineBookingBanner highlightArrival. Verify reduced-motion rules and hidden sticky-bar inert behavior.
