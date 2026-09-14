# Release readiness — design refresh

Date: 2026-09-13 · Prepared in the isolated worktree `endoscopia-del-mayab-release`
(branch `release/design-refresh`). Nothing pushed, merged, tagged or deployed at the
time of writing.

## 1. SHAs

| Item | Value |
| --- | --- |
| Source branch | `design-refresh` @ `c6c6f73` (3 commits: `c7d1b2a`, `9af5513`, `c6c6f73`; also on `origin/design-refresh`, Vercel preview `https://v0-endoscopia-del-mayab-3wfjqx9hi-sanel.vercel.app`) |
| Target branch | `main` — verified `origin/main` @ `5eadec3` after `git fetch`. Local `main` (original checkout) is at `0cfde2c`, three commits behind origin; both checkouts had a clean working tree, nothing to preserve. |
| Release candidate | `release/design-refresh` @ `b592778` (one squash commit of `design-refresh` onto `origin/main`), plus this doc in a follow-up `docs:` commit |
| Previous production deploy | `5eadec3` → `https://v0-endoscopia-del-mayab-et874gjst-sanel.vercel.app` (Vercel Production, success, 2026-09-13 12:34 UTC) |

`main` moved since the design branch forked (`0cfde2c → 5eadec3`): three automated `chore:` commits
touching only `data/*.csv` and `data/reviews.json`. They do not overlap any design-refresh file.

## 2. Release commit contents (63 files, +3813 / −1317)

Staged explicitly by path after `git merge --squash design-refresh`; verified with
`git diff --name-status b592778 design-refresh` that the candidate differs from the design branch
**only** by the excluded paths below plus main's `data/` refreshes.

| Group | Files |
| --- | --- |
| Site pages (34) | `app/(site)/page.tsx` and every `app/(site)/<route>/page.tsx` |
| LP pages (5) | `app/(lp)/lp/{colonoscopia,cpre,endoscopia,hemorroides,ligadura-varices}/page.tsx` |
| CSS modules (5, new) | `app/(site)/design-system.module.css`, `design-pages.module.css`, `home-design.module.css`, `endoscopia-merida/procedure-design.module.css`, `colonoscopia-merida/colonoscopia-design.module.css` |
| Components (8) | `AppointmentForm`, `DoctorAuthority`, `Faq`, `Footer`, `OnlineBookingBanner`, `SiteHeader`, `StickyMobileCTA`, `TeamPresence` |
| Lib (3) | `lib/clinic.ts` (wordmarkUrl → SVG), `lib/doctor.ts` (one canonical portrait), `lib/team.ts` (Estefania Baas) |
| Assets (3) | `public/endoscopia-del-mayab-logo.svg` (new, 11 KB), `public/equipo/omar-quiroz-portrait.webp` (new, 130 KB), `estephania-bass.webp → estefania-baas.webp` (rename) |
| Handoff docs (5) | `docs/design-refresh/{DESIGN-GUIDE,MIGRATION-REPORT,MIGRATION-REVIEW,REMAINING-MIGRATION-REPORT,PROJECT-CONSISTENCY-REVIEW}.md` |

**Excluded from the release (kept on disk in the design worktree and on `origin/design-refresh`):**
`docs/design-refresh/migration-baseline/` and `remaining-baseline/` (72 baseline JSONs, 144 JPEG
screenshots, 2 git-status captures) and the five session prompt files
(`01-REMAINING-PAGES-OPUS.md`, `02-PROJECT-CONSISTENCY-FABLE.md`, `03-RELEASE-MERGE-FABLE.md`,
`CLAUDE-COLONOSCOPY-PROMPT.md`, `PROCEDURE-MIGRATION-PROMPT.md`). The reports reference those
baseline paths; the evidence remains auditable at `design-refresh@c6c6f73`.

Old assets `public/endoscopia-logo.png`, `public/dr-omar-quiroz.webp`, `public/equipo/omar-quiroz.webp`
are no longer referenced by any source file but are left in place (cached/indexed URLs keep resolving).

Secrets grep over the staged diff: none. `git diff --cached --check`: clean. `package.json` and
`pnpm-lock.yaml`: unchanged.

## 3. Review findings disposition

Source: `PROJECT-CONSISTENCY-REVIEW.md` (reviewed `9af5513`; fixes landed in `c6c6f73`) and
`REMAINING-MIGRATION-REPORT.md`. Both are current for the candidate tree; no missing review was needed.

| # | Severity | Finding | Disposition |
| --- | --- | --- | --- |
| 1 | Medium | `/endoscopia-merida` display price wraps at 320px | **Fixed** in `c6c6f73`; included |
| 2 | Low | AppointmentForm "Estimado desde" wraps at 320 | Fixed in `c6c6f73`; included |
| 3 | Low | 320px badge/price-bar overruns (LPs, precios, PEG, pacientes) | Fixed in `c6c6f73`; included |
| 4 | Low | ligadura related price wraps at 768 | Fixed in `c6c6f73`; included |
| 9 | Low | Portrait src hard-coded on 34 pages | Fixed in `c6c6f73` (`DOCTOR.photos.headshot`); included |
| 5 | Low | Inline heading/prose prices wrap | **Accepted** (pre-existing category) |
| 6 | Low | 12–13px muted metadata at 3.70:1 | **Accepted** (better than main's ≈2.6:1; shared components) |
| 7 | Low | Header nav links 21px, menu button 40×40, a few text links <44px | **Accepted** (same on main) |
| 8 | Low | A few `transition: all/transform` remain under reduced motion | **Accepted** (no scroll-driven movement) |
| 10 | Low | `/cpre-playa-del-carmen` table scrolls inside its wrapper at 320 | **Accepted** (tables may scroll) |
| 11 | Low | LP/dr location-row icon gap; `/precios` out-of-town strip icon stacking | **Accepted** |
| — | Low | Remaining-report items: hemorroides equal-width hero buttons (`flex-1`), APC compare third column at 768–1023, sutura "Precio bajo cotización" wrap, CPRE Playa pricing button/link gap, marginal sticky fold on PEG + preparación colonoscopia | **Accepted** as documented |

No high findings exist. No product decision blocked the release, but three **content deltas** ride
along and the approver should consciously accept them (all authored in `c7d1b2a` / pilot commits by
the repo owner, not introduced by this release process):

1. Footer: phone text line removed (the footer `CallButton` remains, so the `tel:` link count is
   unchanged on every route), "Diseño Sanel Design Studio" link and COFEPRIS number added.
2. Home FAQ closing line now links "Contáctanos directamente" to `/contacto`; home hero has a
   `<Image alt="Dr. Omar Quiroz">` portrait.
3. Nurse renamed "Estephania Bass" → "Estefania Baas" (JSON-LD `#enfermera` name and image URL change).

## 4. Merge summary

`git worktree add …-release -b release/design-refresh origin/main` → `git merge --squash design-refresh`
→ automatic merge, **0 conflicts** (no file overlap with main's `data/` commits) → excluded paths
removed from the index → one commit `b592778`. Design-branch history is preserved on
`design-refresh` / `origin/design-refresh`.

## 5. Test results (run on the candidate tree, isolated `.next` in the release worktree)

| Check | Result |
| --- | --- |
| `pnpm install --frozen-lockfile` | OK (lockfile unchanged) |
| `pnpm build` (Next 15 production) | **exit 0**, 47/47 static pages, no warnings or errors in the log |
| `tsc --noEmit` | 10 errors — **identical set** to `main` (`lib/routes-seo.ts` ×8, `lib/seo.ts` ×1, `components/GoogleReviews.tsx` ×1); 0 new. `next.config.mjs` has `ignoreBuildErrors: true`, so this is the only typecheck gate. |
| `next lint` | Not run: no ESLint config exists and `eslint.ignoreDuringBuilds` is on (repo state, unchanged). |
| `git diff --check` | clean |
| Route smoke (`next start -p 3005`, 39 routes) | 39/39 HTTP 200. Per route, **title, canonical, robots, H1, WhatsApp-link count (all `wa.me/529992360153`), tel-link count (all `+529992360153`), JSON-LD count, footer presence, intake-form presence** are identical to live production (`www.endoscopiadelmayab.com` @ `5eadec3`): 0 field differences. |
| SEO surfaces | Site routes `robots: index, follow`; LPs `noindex, nofollow`. `robots.txt` byte-identical to production. `sitemap.xml`: same 34 `<loc>` entries. `/servicios` → 308 `/`, `/panendoscopia-merida` → 308 `/endoscopia-merida` (same as production). |
| Intake form | Present only on `/endoscopia-merida` and `/colonoscopia-merida` (same as production). Not submitted. |
| Tracking | GTM snippet is env-gated (`NODE_ENV=production && NEXT_PUBLIC_GTM_ID`), so it is absent locally and present on Vercel; `lib/gtm.ts`, `WhatsAppButton`, `CallButton`, `useWhatsAppRef` are unchanged vs main. CTA `service`/`position`/`id`/`href` parity was verified at source level in the consistency review. |
| Mobile/desktop smoke (headless Chrome, 390×844 and 1280) | All 39 routes: `scrollWidth == clientWidth`, no overflow offenders. Console: only `site.webmanifest` 404, which is **pre-existing** (production also 404s; the reference is on main's `app/layout.tsx`). Hero captures of `/`, `/endoscopia-merida`, `/precios`, `/dilatacion-biliar-merida`, `/lp/colonoscopia` reviewed visually. |
| Old asset references | None in `app/`, `components/`, `lib/`, `scripts/`; no route's HTML references the old logo/portrait/nurse file. |

Not exercised: WhatsApp/`tel:` navigation, form submission, video playback, live Google Reviews
API path, real devices, GTM payloads at runtime (env-gated locally).

## 6. Remaining risks

- **Visual scope is large** (all 39 routes restyled). Functional parity is verified; aesthetic
  acceptance rests on the two review reports and the Vercel preview of `c6c6f73`.
- **Google image index:** JSON-LD `image` for the doctor and nurse now point to new files. Old files
  remain served, so nothing 404s; rich-result thumbnails may take a recrawl to refresh.
- **Font/CSS delivery:** new CSS modules add ~1–2 KB per route (First Load JS 145–151 kB on
  procedure pages, 224 kB on endoscopia/colonoscopia, unchanged in kind). No new external requests.
- **Type baseline unchanged but non-zero;** builds do not typecheck (`ignoreBuildErrors`).
- **No GitHub CI** builds this repo; Vercel's build on push is the only automated gate, and `main`
  has no branch protection.
- `/precios`, `/equipo-medico`, `/consultas-digestivas-merida` use the 300px sticky-bar fallback
  (documented, verified).

## 7. Deployment trigger (actual configuration)

- Vercel Git integration is connected to `warmregards/Endoscopia-del-Mayab`: every push to `main`
  creates a **Production** deployment automatically (GitHub deployments API shows `vercel[bot]`
  Production deploys for `0cfde2c`, `f321598`, `414ec7a`, `5eadec3`), and every push to another
  branch creates a **Preview** deployment (`9af5513`, `c6c6f73`).
- Therefore **pushing `release/design-refresh` to origin = a preview deploy; merging into `main`
  (or pushing `main`) = a production deploy to `https://www.endoscopiadelmayab.com`**. There is no
  manual promote step and no separate release/tag mechanism in this repo (no tags exist; the five
  GitHub workflows are cron/dispatch data jobs, not build or deploy).
- `vercel.json`: non-www → www 308, security headers, 5-minute cache on robots/sitemap. Unchanged.

## 8. Rollback procedure

1. **Fastest (no git change):** Vercel dashboard → project → Deployments → the previous Production
   deployment (`5eadec3`, `v0-endoscopia-del-mayab-et874gjst-sanel.vercel.app`) → **Instant Rollback**.
   This re-points the production domain without a rebuild.
2. **Git rollback:** on `main`, `git revert <release SHA>` (the squash makes this a single revert;
   the follow-up `docs:` commit can be reverted or left) and push; Vercel builds and promotes the
   revert automatically.
3. Do not force-push `main`. The design work stays recoverable on `design-refresh` /
   `origin/design-refresh` regardless of rollback.

## 9. Planned remote actions (require explicit approval; none executed yet)

1. `git push -u origin release/design-refresh` → Vercel Preview deploy of the exact candidate.
2. Open PR `release/design-refresh → main` as a **draft** using the prepared body.
3. Only if approved as part of the same decision: mark ready and merge the PR (merge commit, no
   squash, so the SHA stays `b592778`-based) → Vercel Production deploy → verify
   `https://www.endoscopiadelmayab.com` serves the new build (check the SiteHeader SVG wordmark and
   the deployment status for the merge SHA).

No release tag will be created (the repo has no tag convention).
