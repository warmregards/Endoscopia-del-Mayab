// /components/TeamCta.tsx
"use client";

import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { pushTeamCtaClick } from "@/lib/gtm";
import { cn } from "@/lib/utils";

type TeamCtaProps = {
  /** GTM `position` for both buttons (e.g. "hero", "bottom-cta"). */
  position: string;
  /** Page the team content lives on — reported as `source_page`. */
  source: string;
  /** WhatsApp button label. */
  label?: string;
  /**
   * Surface the row sits on. "dark" flips the Call button to the inverse
   * (white outline) variant for the navy bottom-CTA block.
   */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * WhatsApp + Call pair for team content. Exists as a client component because
 * the team page is a Server Component and cannot hand an onClick to a button.
 *
 * Both buttons keep their own tracking (ref-code minting + `whatsapp_click` /
 * `phone_click`); `team_cta_click` fires ON TOP of it, so Ads conversions and
 * the ref-code ledger are untouched.
 *
 * WhatsApp always precedes phone and is always the wider, filled CTA.
 */
export default function TeamCta({
  position,
  source,
  label = "Agendar por WhatsApp",
  tone = "light",
  className,
}: TeamCtaProps) {
  const track = () => pushTeamCtaClick(source);

  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-center",
        className
      )}
    >
      <WhatsAppButton
        service="equipo"
        position={position}
        label={label}
        className="sm:px-8"
        onClick={track}
      />
      <CallButton
        service="equipo"
        position={position}
        variant={tone === "dark" ? "inverse" : "ghost"}
        className="text-sm"
        onClick={track}
      />
    </div>
  );
}
