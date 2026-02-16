"use client";

import { Phone } from "lucide-react";
import { CLINIC, telHref } from "@/lib/clinic";
import { pushPhoneClick } from "@/lib/gtm";
import { cn } from "@/lib/utils";

type CallButtonProps = {
  label?: string;
  className?: string;
  position?: string;
  service?: string;
  variant?: "secondary" | "inverse" | "ghost";
  size?: "default" | "compact";
  id?: string;
};

export default function CallButton({
  label = "Llamar",
  className,
  position = "unspecified",
  service = "generic",
  variant = "secondary",
  size = "default",
  id,
}: CallButtonProps) {
  const ctaId = id ?? `cta-${service}-${position}-call`;

  return (
    <a
      id={ctaId}
      href={telHref()}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors",
        size === "default" ? "px-6 py-3" : "px-4 py-2",
        variant === "secondary" &&
          "bg-action-secondary hover:bg-action-secondary-hover text-white shadow-md",
        variant === "inverse" &&
          "bg-transparent border-2 border-white text-white hover:bg-white/10",
        variant === "ghost" &&
          "bg-transparent border border-border text-foreground hover:bg-muted",
        className
      )}
      onClick={() =>
        pushPhoneClick({
          ctaId,
          number: CLINIC.phone.e164,
          service,
        })
      }
    >
      <Phone className="h-4 w-4" />
      {label}
    </a>
  );
}
