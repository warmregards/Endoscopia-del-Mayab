Implement the existing design system on ONLY the routes explicitly listed in my message. If no route list is supplied, ask for it. CPRE is /cpre-merida. Do not infer additional pages from internal links.

Work in /Users/sanel/dev/personal/endoscopia-del-mayab-design, preserving all existing uncommitted work. Read DESIGN-GUIDE.md for visual rules. This prompt supersedes its older, extensive verification requirements. Use endoscopy and colonoscopy as references, not templates for medical content.

Scope and implementation
- Inventory the listed pages once. Reuse design-system.module.css root/role classes and existing component props. Keep procedure-specific composition scoped to its page.
- Preserve exact content, prices/data sources, heading hierarchy, links, existing IDs, metadata, schema, analytics, and form behavior. Add data hooks when necessary instead of renaming anchors. Do not copy one procedure's claims, prices, inclusions, or preparation into another.
- Use the new portrait where the existing doctor portrait appears. Maintain mobile price/action priority, accessible disclosures, reduced motion, booking arrival, and sticky-bar visibility hooks where those features exist. Do not add a booking form or features a route does not already have.
- Do not blindly copy the full 200+ line procedure stylesheet for every route. Reuse existing shared rules. If a repeated missing role blocks two or more target pages, add a narrowly scoped opt-in shared role once and verify the affected references. No broad cleanup/refactor in this migration.
- Implement routes sequentially, finish the first representative route before applying its pattern to the others. Do not spawn agents unless explicitly requested; never permit concurrent writes to shared files.

Bounded verification
- Record git status and ONE content/SEO baseline per target before editing. Reuse existing tooling. No screenshot framework, deterministic-dump tests, file-hash inventory, or repeated reference baselines.
- Inspect the reference once on mobile and desktop. Then implement. Do not make a section-by-section before screenshot suite.
- After implementation inspect each target at 390px and 1280px; use targeted screenshots only for ambiguous sections. Check 320px overflow and 768px layout once per target. Inspect the calendar at 320px only where present.
- Compare content/SEO baseline once per target. Test disclosures, booking navigation, and sticky CTA visibility without submitting forms or opening contact destinations. Check reduced-motion behavior for changed interactions.
- Run git diff --check and ONE batch TypeScript check. Compare existing errors documented in the guide; do not fix unrelated errors. Repeat checks only after a relevant fix or concrete failure.
- If shared styles/components changed, spot-check affected sections on home/endoscopy/colonoscopy. No full multi-viewport computed-style matrix unless a real regression requires diagnosis.
- Use existing localhost:3001 server. No duplicate server, dependency installs, production build alongside dev server, commit, push, merge, or deployment.

Finish with a short per-route status, preview links, files changed, checks and unresolved issues. Complete every explicitly listed route; do not expand scope. Aim for a small, reviewable migration, not a testing infrastructure project.
