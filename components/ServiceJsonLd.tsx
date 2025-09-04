// components/ServiceJsonLd.tsx  (SERVER COMPONENT)
"use client";

import Script from "next/script";
import { serviceJSONLD } from "@/lib/schema";
import { CLINIC } from "@/lib/clinic";
import { ROUTES_SEO, type RouteKey } from "@/lib/routes-seo";
import { PRICING, type ServiceKey } from "@/lib/pricing";

const ROUTE_TO_PRICE_KEY: Partial<Record<RouteKey, ServiceKey>> = {
  ligadura: "ligadura_varices",
  peg: "gastrostomia_peg",
  extraccion: "extraccion_cuerpos_extranos",
  dilatacion: "dilatacion_esofagica",
};

type Props = {
  routeKey: RouteKey;
  imageUrl?: string;
  rating?: { ratingValue: number; reviewCount: number };
  pricingKeyOverride?: ServiceKey;
};

export default function ServiceJsonLd({
  routeKey,
  imageUrl = `${CLINIC.url}/omar-open-graph.jpg`,
  rating,
  pricingKeyOverride,
}: Props) {
  const route = ROUTES_SEO[routeKey];
  if (!route) return null;

  const name = route.titleSuffix
    ? `${route.service} en Mérida – ${route.titleSuffix}`
    : `${route.service} en Mérida`;

  const url = `${CLINIC.url}${route.path}`;

  // pick the pricing entry for this route
  const pricingKey =
    pricingKeyOverride ?? ROUTE_TO_PRICE_KEY[routeKey] ?? (routeKey as ServiceKey);
  const pricingEntry = PRICING[pricingKey];

  // only include price in schema if it's a real number and NOT quote-only
  const priceFrom =
    pricingEntry && !pricingEntry.quoteOnly && pricingEntry.from !== undefined
      ? String(pricingEntry.from)
      : undefined;

  const schema = serviceJSONLD({
    name,
    url,
    imageUrl,
    priceFrom,                          // undefined when quoteOnly => Offer without numeric price
    provider: { "@id": `${CLINIC.url}#clinic` }, // reference the single clinic entity
    aggregateRating: rating,
  });

  return (
    <Script
      id={`service-jsonld-${routeKey}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
