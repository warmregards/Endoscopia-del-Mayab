"use client";

import { MessageCircle } from "lucide-react";
import { waHref, waMessage } from "@/lib/clinic";
import { useWhatsAppRef } from "@/lib/useWhatsAppRef";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  className?: string;
  position?: string;
  service?: string;
  procedureName?: string;
  variant?: "primary" | "outline";
  size?: "default" | "compact";
  id?: string;
};

export default function WhatsAppButton({
  label = "WhatsApp",
  message,
  className,
  position = "unspecified",
  service = "generic",
  procedureName,
  variant = "primary",
  size = "default",
  id,
}: WhatsAppButtonProps) {
  const ctaId = id ?? `cta-${service}-${position}-wa`;
  const text = message ?? (procedureName ? waMessage(procedureName) : undefined);
  // Base href is the no-JS / middle-click fallback. The real per-click href
  // (with the ref code) is computed in onClick — codes must be unique per tap.
  const href = waHref(text !== undefined ? { text } : undefined);

  // Minting + tracking live in the shared hook (undefined text → clinic default).
  const handleClick = useWhatsAppRef({ service, ctaId, message: text });

  return (
    <a
      id={ctaId}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors",
        size === "default" ? "px-6 py-3" : "px-4 py-2",
        variant === "primary" &&
          "bg-action-primary hover:bg-action-primary-hover text-white shadow-md",
        variant === "outline" &&
          "bg-transparent border-2 border-action-primary text-action-primary hover:bg-action-primary hover:text-white",
        className
      )}
      onClick={handleClick}
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
