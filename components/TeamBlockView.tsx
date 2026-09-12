// /components/TeamBlockView.tsx
"use client";

import { useEffect, useRef } from "react";
import { pushTeamBlockView } from "@/lib/gtm";

type TeamBlockViewProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Client island around <TeamPresence>. Its only job is to fire
 * `team_block_view` once, when half the block has been on screen — so we can
 * tell "saw the team" from "scrolled past it" when reading the
 * team_block_view → whatsapp_click funnel.
 *
 * Kept separate from TeamPresence so that component stays a Server Component
 * and its copy never ships in the client bundle.
 */
export default function TeamBlockView({
  className,
  children,
}: TeamBlockViewProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        pushTeamBlockView(window.location.pathname);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={className}>
      {children}
    </section>
  );
}
