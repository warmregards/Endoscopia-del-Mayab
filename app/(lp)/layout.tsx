import type React from "react";

/**
 * Layout for paid conversion landing pages (/lp/*).
 *
 * Deliberately chrome-free: no header, no footer, no sticky global CTA, no
 * site-wide JSON-LD. This is a structural boundary — those live in the sibling
 * (site) layout and are never part of this tree, so nothing is server-rendered,
 * serialized into the Flight payload, or mounted on an LP. Attention ratio 1:1.
 *
 * Each LP renders its own noindex metadata and its own page-local sticky CTA.
 */
export default function LpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main id="main">{children}</main>;
}
