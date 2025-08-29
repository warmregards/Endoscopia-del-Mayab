// /components/ClinicJsonLd.tsx

import Script from "next/script";
import { medicalClinicJSONLD, joinUrl } from "@/lib/schema";
import { CLINIC } from "@/lib/clinic";
import { toSchemaServices } from "@/lib/services";

export default function ClinicJsonLd() {
  const base = CLINIC.url;
  const imageAbs = CLINIC.imageUrl.startsWith("http") ? CLINIC.imageUrl : joinUrl(base, CLINIC.imageUrl);
  const logoAbs  = CLINIC.logoUrl.startsWith("http")  ? CLINIC.logoUrl  : joinUrl(base, CLINIC.logoUrl);

  const schema = medicalClinicJSONLD({
    name: CLINIC.name,
    url: base,
    phone: CLINIC.phone,
    streetAddress: CLINIC.streetAddress,
    postalCode: CLINIC.postalCode,
    hours: CLINIC.hours ? [...CLINIC.hours] : undefined,
    mapUrl: CLINIC.mapUrl,
    geo: CLINIC.geo,
    logoUrl: logoAbs,
    imageUrl: imageAbs,
    priceRange: CLINIC.priceRange,
    specialties: CLINIC.specialties,
    aggregateRating: CLINIC.aggregateRating,
    sameAs: CLINIC.sameAs,
    services: toSchemaServices(base),
    secondaryServices: CLINIC.secondaryServices,
    id: `${CLINIC.url}#clinic`, // ← add this (your helper should emit "@id")
  });

  return (
    <Script
      id="clinic-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
