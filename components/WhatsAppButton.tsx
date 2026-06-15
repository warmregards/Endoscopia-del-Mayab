"use client";

import { MessageCircle } from "lucide-react";
import { CLINIC, waHref, waMessage, withRefCode } from "@/lib/clinic";
import {
  captureAttribution,
  generateRefCode,
  sendRefBeacon,
  toRefPayload,
} from "@/lib/attribution";
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
  // Base href is the no-JS / middle-click fallback. The real per-click href
  // (with the ref code) is computed in onClick — codes must be unique per tap.
  const href = waHref(text !== undefined ? { text } : undefined);

  // The message body waHref would use when no override is set.
  const baseMessage = text !== undefined ? text : CLINIC.whatsapp.defaultText;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const code = generateRefCode();
    const attr = captureAttribution();
    const pagePath =
      typeof window !== "undefined" ? window.location.pathname : undefined;

    // Fire-and-forget the attribution; survives the tab switch to WhatsApp.
    sendRefBeacon(toRefPayload(code, attr, { service, page_path: pagePath }));

    // Rebuild the href with the ref line appended, before default navigation.
    e.currentTarget.href = waHref({ text: withRefCode(baseMessage, code) });

    pushWhatsAppClick({
      ctaId,
      number: CLINIC.whatsapp.number,
      service,
      refCode: code,
    });
  }

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
