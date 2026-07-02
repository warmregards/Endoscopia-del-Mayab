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
 * presence only (practice wordmark + host-hospital mark), no link, no href, no
 * menu. It exists so the ad-clicked visitor sees who they're dealing with; it
 * must never become a navigation escape hatch. The only exits on an LP stay the
 * WhatsApp/phone CTAs.
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
        <div className="container-narrow flex items-center gap-4">
          {/* Practice wordmark (icon + "Endoscopia del Mayab") */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CLINIC.wordmarkUrl}
            alt={CLINIC.name}
            width={144}
            height={32}
            className="h-8 w-auto"
            decoding="async"
          />
          {/* Visual divider — not a control */}
          <span aria-hidden className="h-6 w-px bg-border" />
          {/* Host-hospital trust mark — where the practice is located */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CLINIC.hospitalLogoUrl}
            alt={CLINIC.hospitalName}
            width={85}
            height={32}
            className="h-8 w-auto"
            decoding="async"
          />
        </div>
      </div>

      <main id="main">{children}</main>
    </>
  );
}
