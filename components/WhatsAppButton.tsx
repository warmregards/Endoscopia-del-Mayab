"use client";

import { MessageCircle } from "lucide-react";
import { CLINIC, waHref, waMessage } from "@/lib/clinic";
import { pushWhatsAppClick } from "@/lib/gtm";
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
  const href = waHref(text !== undefined ? { text } : undefined);

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
      onClick={() =>
        pushWhatsAppClick({
          ctaId,
          number: CLINIC.whatsapp.number,
          service,
        })
      }
    >
      <MessageCircle className="h-4 w-4" />
      {label}
    </a>
  );
}
