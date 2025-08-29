"use client";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { telHref } from "@/lib/contact";
import { pushCta } from "@/lib/gtm";

type CallButtonProps = {
  label?: string;
  number?: string;          // E.164, e.g. +529992360153
  className?: string;
  position?: string;        // "hero", "footer", etc.
  service?: string;         // "endoscopia", "colonoscopia", etc.
  id?: string;              // optional explicit id
};

export default function CallButton({
  label = "Llamar",
  number,
  className,
  position = "unspecified",
  service = "generic",
  id,
}: CallButtonProps) {
  const [path, setPath] = useState("/");
  useEffect(() => {
    if (typeof window !== "undefined") setPath(window.location.pathname || "/");
  }, []);

  const resolvedTel =
    number ?? process.env.NEXT_PUBLIC_PHONE_E164 ?? "+529992360153";
  const ctaId = id ?? `cta-${service}-${position}-call`;

  return (
    <a
      id={ctaId}
      href={telHref(resolvedTel)}
      className={`inline-flex items-center justify-center px-8 py-4 rounded-xl 
        bg-white border border-border text-foreground font-semibold 
        hover:border-accent-strong hover:text-accent-strong transition-colors ${className ?? ""}`}
      onClick={() =>
        pushCta({
          cta_type: "call",
          cta_id: ctaId,
          cta_number: resolvedTel,
          cta_service: service,
          page_path: path,
        })
      }
    >
      <Phone className="h-4 w-4 mr-2" />
      {label}
    </a>
  );
}
