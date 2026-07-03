import type React from "react";

import SiteHeader from "@/components/SiteHeader";

/**
 * Layout for paid conversion landing pages (/lp/*).
 *
 * Renders the full site HEADER (SiteHeader — the same nav menu as the public
 * pages) so an ad-clicked visitor gets standard navigation for rapport and an
 * escape route. This intentionally reintroduces global nav (attention ratio is
 * no longer strictly 1:1) — accepted as a rapport call.
 *
 * Deliberately header-only. What stays OUT and why:
 *   - NO Footer — each LP carries its own location/NAP lines, so footer NAP is
 *     redundant and only lengthens a conversion page.
 *   - NO StickyMobileCTA — it fires GTM `service:"global"`, which would mix
 *     global-tagged events into LP conversions and muddy LP-vs-public
 *     segmentation. Every LP ships its own `lp-sticky` bar for the mobile CTA.
 *   - NO site-wide MedicalClinic JSON-LD — LPs are noindex; that graph lives in
 *     the sibling (site) layout only.
 *
 * SiteHeader is self-contained ("use client"; deps: CLINIC + the CTA buttons).
 * The ThemeProvider + fonts it relies on are declared in the root layout, which
 * wraps this group too, so nothing extra needs porting here.
 */
export default function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* A11y skip link — parity with (site); the header now precedes <main>. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-white px-3 py-2 rounded"
      >
        Saltar al contenido
      </a>

      <SiteHeader />
      <main id="main">{children}</main>
    </>
  );
}
