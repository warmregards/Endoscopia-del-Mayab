// components/FaqTracker.tsx
"use client";

import { useEffect, useRef } from "react";
import { pushFaqExpand } from "@/lib/gtm";

/**
 * Client-only island for <Faq>: attaches one delegated `toggle` listener to the
 * enclosing FAQ <section> and fires `faq_expand` when a <details> opens.
 *
 * Kept separate so the FAQ content, lib/faq.ts, and the FAQPage JSON-LD stay
 * server-rendered and never ship in a client chunk. Renders an empty hidden
 * <span> only to get a DOM anchor for `closest("section")`.
 */
export default function FaqTracker({ service }: { service?: string }) {
  const anchorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = anchorRef.current?.closest("section");
    if (!section) return;

    const handler = (e: Event) => {
      const details = e.target as HTMLDetailsElement;
      if (details.open) {
        const question = details.dataset.question;
        if (question) pushFaqExpand(question, service);
      }
    };

    // <details> "toggle" does not bubble — listen in the capture phase.
    section.addEventListener("toggle", handler, true);
    return () => section.removeEventListener("toggle", handler, true);
  }, [service]);

  return <span ref={anchorRef} hidden />;
}
