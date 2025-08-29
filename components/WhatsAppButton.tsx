"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { waHref } from "@/lib/contact";
import { ROUTES_SEO } from "@/lib/routes-seo";
import { pushCta } from "@/lib/gtm";

type WhatsAppButtonProps = {
  label?: string;
  number?: string;     // digits only
  message?: string;
  className?: string;
  position?: string;
  service?: string;    // "endoscopia" etc.
  id?: string;
};

function defaultMessageForPath(pathname: string) {
  const entry = Object.values(ROUTES_SEO).find((cfg) => cfg.path === pathname);
  const service = entry?.service || "agendar una cita";
  return `Hola, me interesa ${service}. ¿Tienen disponibilidad?`;
}

export default function WhatsAppButton({
  label = "WhatsApp",
  number,
  message,
  className,
  position = "unspecified",
  service = "generic",
  id,
}: WhatsAppButtonProps) {
  const [path, setPath] = useState("/");
  useEffect(() => {
    if (typeof window !== "undefined") setPath(window.location.pathname || "/");
  }, []);

  const text = message ?? defaultMessageForPath(path);
  const resolvedWa = (number ?? process.env.NEXT_PUBLIC_WHATSAPP ?? "529992360153").replace(/[^\d]/g, "");
  const ctaId = id ?? `cta-${service}-${position}-wa`;

  return (
    <a
      id={ctaId}
      href={waHref({ number: resolvedWa, text })}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-8 py-4 rounded-xl 
        bg-accent-strong text-accent-strong-foreground font-semibold 
        hover:bg-accent-strong/90 transition-colors shadow-lg ${className ?? ""}`}
      onClick={() =>
        pushCta({
          cta_type: "whatsapp",
          cta_id: ctaId,
          cta_number: resolvedWa,
          cta_service: service,
          page_path: path,
        })
      }
    >
      <MessageCircle className="h-4 w-4 mr-2" />
      {label}
    </a>
  );
}
