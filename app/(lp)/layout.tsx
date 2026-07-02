import type React from "react";
import { CLINIC } from "@/lib/clinic";

/**
 * Layout for paid conversion landing pages (/lp/*).
 *
 * Chrome-free by design: no SiteHeader, no nav, no footer, no sticky global
 * CTA, no site-wide JSON-LD. Those live in the sibling (site) layout and are
 * never part of this tree, so nothing is server-rendered, serialized into the
 * Flight payload, or mounted on an LP. Attention ratio 1:1.
 *
 * The one exception is a slim, NON-navigational brand bar below — brand
 * presence only (logo + wordmark), no link, no href, no menu. It exists so the
 * ad-clicked visitor sees who they're dealing with; it must never become a
 * navigation escape hatch. The only exits on an LP stay the WhatsApp/phone CTAs.
 *
 * Each LP renders its own noindex metadata and its own page-local sticky CTA.
 */
export default function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Non-navigational brand bar — a <div>, deliberately not an <a>/<nav>. */}
      <div className="flex h-14 items-center border-b border-border/50 bg-background">
        <div className="container-narrow flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CLINIC.logoUrl}
            alt={CLINIC.name}
            width={32}
            height={32}
            className="h-8 w-auto"
            decoding="async"
          />
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            {CLINIC.name}
          </span>
        </div>
      </div>

      <main id="main">{children}</main>
    </>
  );
}
