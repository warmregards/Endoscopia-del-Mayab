"use client";

import { usePathname } from "next/navigation";
import ServiceJsonLd from "./ServiceJsonLd";
import { ROUTES_SEO, type RouteKey } from "@/lib/routes-seo";

const SERVICE_ROUTE_KEYS = new Set<RouteKey>([
  "endoscopia","colonoscopia","panendoscopia","cpre","ligadura","peg","extraccion",
  "dilatacion","esclerosis_varices_gastricas","dilatacion_biliar","dilatacion_colonica",
  "endoprotesis_esofagicas","endoprotesis_biliares","endoprotesis_duodenales",
  "endoprotesis_colonicas","cierre_fistulas_clips","sutura_endoscopica","esd","emr",
  "retiro_balon_gastrico","apc",
]);

function normalize(p?: string) {
  if (!p) return "/";
  const noTrail = p.replace(/\/+$/, "");
  return noTrail === "" ? "/" : noTrail;
}

export default function ServiceJsonLdAuto() {
  const pathname = normalize(usePathname());

  let matchedKey: RouteKey | undefined;
  for (const [key, cfg] of Object.entries(ROUTES_SEO) as [RouteKey, { path: string }][]) {
    if (normalize(cfg.path) === pathname) {
      matchedKey = key;
      break;
    }
  }

  if (!matchedKey) return null;
  if (!SERVICE_ROUTE_KEYS.has(matchedKey)) return null;

  return <ServiceJsonLd routeKey={matchedKey} />;
}
