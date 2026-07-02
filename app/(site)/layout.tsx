import type React from "react";

import { globalGraph } from "@/lib/schema";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import StickyMobileCTA from "@/components/StickyMobileCTA";

/**
 * Layout for the public marketing site — every route that should carry the
 * global chrome (header, footer, sticky mobile CTA) and the site-wide
 * MedicalClinic JSON-LD.
 *
 * Paid landing pages live in the sibling (lp) route group, which has its own
 * chrome-free layout. Because the chrome is declared here — not in the root
 * layout — LP pages never render, serialize, or mount any of it.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* A11y skip link */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-white px-3 py-2 rounded"
      >
        Saltar al contenido
      </a>

      <SiteHeader />
      <main id="main">{children}</main>
      <Footer />
      <StickyMobileCTA />

      {/* Structured data — placed at end of body so it doesn't push the H1
          further down the byte stream. Google docs explicitly allow JSON-LD
          anywhere in the document; crawlers parse the full response. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(globalGraph()) }}
      />
    </>
  );
}
