Manage the reviewed design-refresh worktree into an official release, with a concrete approval checkpoint before remote publication. Do not assume that merging code is the same as deploying it.

Design worktree: /Users/sanel/dev/personal/endoscopia-del-mayab-design
Original checkout: /Users/sanel/dev/personal/endoscopia-del-mayab

Read docs/design-refresh/REMAINING-MIGRATION-REPORT.md and PROJECT-CONSISTENCY-REVIEW.md plus repository AGENTS/CLAUDE/release instructions. Verify current git status, branch, worktrees, remotes, release conventions and CI/deploy triggers. Do not assume main is still unchanged or infer a version/tag. Preserve uncommitted work in both checkouts; never reset, clean, force-push or automatically stash unrelated work.

Release gate: resolve only confirmed high/medium migration defects with targeted checks, or stop if resolution needs a product decision. Record accepted low findings. If reports are missing/stale, perform the bounded missing review first; do not release merely because the implementation says done. Existing type errors must be distinguished from new errors. If the production build/required CI fails, report blocked rather than bypass checks.

Prepare a clean, auditable release commit containing only intended migration application files, assets and concise handoff docs. Explicitly inspect/stage paths; exclude temporary screenshots, scratch tooling, baseline dumps, secrets and unrelated changes unless repository policy requires them. The current uncommitted design work is part of this release scope, but inspect it before committing. Do not remove evidence files from disk just to exclude them from git.

Fetch current remote state when available. Integrate into a temporary release/integration branch or worktree based on the verified target branch. Resolve ordinary conflicts preserving both current functionality and design; investigate ambiguous content conflicts. Test the actual merged candidate. Run production build in an isolated output/worktree with existing tooling, not against the running preview's .next. Run required repository checks and targeted mobile/desktop smoke checks; preserve routes, SEO/robots, contact destinations and tracking. Do not send appointments or messages.

Write docs/design-refresh/RELEASE-READINESS.md with source/target SHAs, staged/committed files, review findings disposition, merge/conflict summary, exact test results, build status, remaining risks, deployment trigger and rollback procedure based on actual repository configuration.

Local release/integration commits and preparing a draft PR are authorized. Do not push, merge into the official target branch, create release tags, publish a release or deploy yet. Present the exact candidate SHA, destination, release plan and any automatic deployment consequences; ask for one final approval covering the concrete remote actions. After approval execute only those actions, verify CI/deployment outcome and report actual release URL/SHA. If this prompt is handed to a tool without remote capabilities, leave the tested candidate and exact next steps rather than claiming release.
