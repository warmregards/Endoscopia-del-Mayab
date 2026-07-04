"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pushLpExitToGuide } from "@/lib/gtm";
import { cn } from "@/lib/utils";

type LpGuideLinkProps = {
  /** Full public guide path this LP exits toward, e.g. "/endoscopia-merida". */
  href: string;
  /** Visible label (the arrow is appended by the component). */
  label: string;
  /** Service tag for GTM segmentation — match the LP's own service value. */
  service: string;
  className?: string;
};

/**
 * The LP escape hatch: a subtle text link to the matching full public guide,
 * for info-seekers the sparse landing page doesn't fully answer. Deliberately
 * low-emphasis so it never competes with the WhatsApp CTA. Fires
 * `lp_exit_to_guide` (service + destination) on click.
 */
export default function LpGuideLink({
  href,
  label,
  service,
  className,
}: LpGuideLinkProps) {
  return (
    <Link
      href={href}
      data-cta="lp-exit-to-guide"
      className={cn(
        "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-text-accent hover:underline",
        className
      )}
      onClick={() => pushLpExitToGuide({ service, destination: href })}
    >
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
