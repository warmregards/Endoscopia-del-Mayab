import type React from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";

import ScrollToTop from "@/components/ScrollToTop";
import AttributionCapture from "@/components/AttributionCapture";

// ✅ Use next/font; no extra <link> preconnects needed for fonts.
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "optional",
  // Weights audited site-wide 2026-05-28:
  //   600 = font-semibold (H3, subsection headings)
  //   700 = font-bold (H2)
  //   800 = font-extrabold (H1) — was missing; H1s were being synthesized/substituted
  // 400 + 900 dropped — never paired with font-serif anywhere in app/ or components/.
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "");
const isProd = process.env.NODE_ENV === "production";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const defaultOg = `${siteUrl}/omar-open-graph.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Endoscopia en Mérida – Endoscopia del Mayab",
  description:
    "Endoscopia en Mérida con sedación segura. Colonoscopia, endoscopia alta, CPRE y procedimientos digestivos con el Dr. Omar Quiroz.",
  openGraph: {
    type: "website",
    siteName: "Endoscopia del Mayab",
    locale: "es_MX",
    images: [{ url: defaultOg, width: 1200, height: 630, alt: "Endoscopia en Mérida – Endoscopia del Mayab" }],
  },
  twitter: { card: "summary_large_image", images: [defaultOg] },
  robots: isProd
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : { index: false, follow: false },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
    generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        {/* ❌ Remove Google Fonts preconnects — next/font inlines and preloads automatically. */}

        {/* GTM (head) – only in prod when ID exists.
            GTM + the two gtag/js loads it pulls in are the largest source of
            main-thread blocking on every page (Lighthouse 2026-09-14: ~1s CPU,
            all of the long tasks). The bootstrap waits for window.onload, then
            for an idle period (requestIdleCallback, 4s timeout; plain 4s
            timeout where rIC is unsupported) — OR the first pointerdown /
            keydown / touchstart / scroll, whichever comes first. A CTA tap
            therefore starts GTM immediately.

            Safe because lib/gtm.ts initializes window.dataLayer defensively —
            events pushed before GTM loads queue in the dataLayer array and
            replay when GTM arrives. The `gtm.start` push happens at load time,
            so GTM's own timing is unchanged. */}
        {isProd && GTM_ID ? (
          <Script
            id="gtm-head"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,i){
                  var started=false,evs=['pointerdown','keydown','touchstart','scroll'];
                  function load(){
                    if(started)return;started=true;
                    for(var k=0;k<evs.length;k++)w.removeEventListener(evs[k],load,true);
                    w.dataLayer=w.dataLayer||[];
                    w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});
                    var j=d.createElement('script');j.async=true;
                    j.src='https://www.googletagmanager.com/gtm.js?id='+i;
                    d.head.appendChild(j);
                  }
                  for(var k=0;k<evs.length;k++)w.addEventListener(evs[k],load,{capture:true,passive:true,once:true});
                  function onIdle(){
                    if('requestIdleCallback' in w)w.requestIdleCallback(load,{timeout:4000});
                    else setTimeout(load,4000);
                  }
                  if(d.readyState==='complete')onIdle();else w.addEventListener('load',onIdle,{once:true});
                })(window,document,'${GTM_ID}');
              `,
            }}
          />
        ) : null}
      </head>

      {/* ✅ Make Open Sans the default text font. Use Montserrat per-element for headings. */}
      <body className={`${openSans.className} antialiased`}>
        {/* GTM (noscript) first in body */}
        {isProd && GTM_ID ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

        <AttributionCapture />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>

        {/* Site chrome (header/footer/sticky CTA) and global JSON-LD live in
            the (site) route group layout so paid /lp/* landing pages — a
            separate (lp) group — never mount them. This is a hard boundary,
            not a runtime gate: the chrome is not in the LP layout tree at all,
            so nothing is server-rendered, serialized, or mounted for it. */}
        {children}
      </body>
    </html>
  );
}
