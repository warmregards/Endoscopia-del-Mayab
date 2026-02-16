// /components/Footer.tsx
import Link from "next/link";
import { CLINIC } from "@/lib/clinic";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import MapEmbed from "@/components/MapEmbed";

// ---------------------------------------------------------------------------
// Static nav links (structural — these don't live in lib data)
// ---------------------------------------------------------------------------

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/colonoscopia-merida", label: "Colonoscopia" },
  { href: "/endoscopia-merida", label: "Endoscopia" },
  { href: "/cpre-merida", label: "CPRE" },
  { href: "/precios", label: "Precios" },
  { href: "/consultas-digestivas-merida", label: "Consultas" },
  { href: "/emergencias-digestivas-merida", label: "Emergencias" },
  { href: "/contacto", label: "Contacto" },
] as const;

// ---------------------------------------------------------------------------
// Social links derived from CLINIC.sameAs + known labels
// ---------------------------------------------------------------------------

const SOCIAL_LABELS: Record<string, string> = {
  "instagram.com": "Instagram",
  "facebook.com": "Facebook",
  "youtube.com": "YouTube",
  "doctoralia.com": "Doctoralia",
};

function labelForUrl(url: string): string {
  for (const [fragment, label] of Object.entries(SOCIAL_LABELS)) {
    if (url.includes(fragment)) return label;
  }
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-white pt-12 pb-8">
      {/* Google Maps embed — GBP geo signal */}
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <div className="h-48 sm:h-56 rounded-lg overflow-hidden [&>iframe]:!h-full [&>div]:!h-full">
          <MapEmbed />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact CTAs */}
        <div>
          <h3 className="font-serif font-semibold text-lg mb-4 text-text-inverse">
            Contacto
          </h3>
          <div className="flex flex-col gap-2 items-stretch">
            <WhatsAppButton
              service="footer"
              position="footer"
              size="compact"
              className="w-full justify-center rounded-xl shadow-sm"
            />
            <CallButton
              service="footer"
              position="footer"
              size="compact"
              className="w-full justify-center rounded-xl border border-white/20 shadow-sm"
            />
          </div>
          <p className="mt-4 text-sm text-text-footer-label">
            {CLINIC.phone.display}
          </p>
        </div>

        {/* Hours & Address */}
        <div>
          <h3 className="font-serif font-semibold text-lg mb-4 text-text-inverse">
            Información
          </h3>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="text-text-inverse">{CLINIC.hours.display}</p>
            </li>
            <li>
              <p className="text-text-inverse">{CLINIC.address.display}</p>
            </li>
            <li>
              <p className="text-text-footer-label">
                Pagos: {CLINIC.paymentAccepted}
              </p>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-serif font-semibold text-lg mb-4 text-text-inverse">
            Enlaces
          </h3>
          <ul className="space-y-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center py-2 min-h-[44px] text-text-footer-label hover:text-text-inverse transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links — from CLINIC.sameAs */}
        <div>
          <h3 className="font-serif font-semibold text-lg mb-4 text-text-inverse">
            Síguenos
          </h3>
          <ul className="space-y-0">
            {CLINIC.sameAs?.map((url) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center py-2 min-h-[44px] text-text-footer-label hover:text-text-inverse transition-colors"
                >
                  {labelForUrl(url)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t mt-8 pt-8 border-white/20">
        <div className="max-w-6xl mx-auto px-4 text-center text-text-footer-label text-sm">
          <p>
            &copy; {year} Dr. Omar Quiroz - {CLINIC.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
