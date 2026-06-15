import type React from "react";
import { Suspense } from "react";
import type { Metadata } from "next";
import Script from "next/script";

import { globalGraph } from "@/lib/schema";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/SiteHeader";
import ScrollToTop from "@/components/ScrollToTop";
import StickyMobileCTA from "@/components/StickyMobileCTA";
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
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`} suppressHydrationWarning>
      <head>
        {/* ❌ Remove Google Fonts preconnects — next/font inlines and preloads automatically. */}

        {/* GTM (head) – only in prod when ID exists.
            strategy="lazyOnload" defers the snippet until after window.onload,
            which means after LCP is committed. Lighthouse audit 2026-05-28
            showed GTM was monopolizing the main thread for ~5s during the
            LCP measurement window (462ms across 4 long tasks), preventing
            LCP from being recorded until ~8.3s.

            Safe because lib/gtm.ts initializes window.dataLayer defensively —
            clicks that fire before GTM loads queue in the dataLayer array
            and replay when GTM eventually arrives. Zero tracking loss. */}
        {isProd && GTM_ID ? (
          <Script
            id="gtm-head"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
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

        <ThemeProvider attribute="class" defaultTheme="light">
          <AttributionCapture />
          <Suspense fallback={null}>
            <ScrollToTop />
          </Suspense>

          {/* A11y skip link */}
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-white px-3 py-2 rounded"
          >
            Saltar al contenido
          </a>

          <SiteHeader />
          <main id="main">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </ThemeProvider>

        {/* Structured data — placed at end of body so it doesn't push the H1
            further down the byte stream. Google docs explicitly allow JSON-LD
            anywhere in the document (head or body); crawlers parse the full
            response. Saves ~12.6 KB of pre-H1 markup on the homepage. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalGraph()) }}
        />
      </body>
    </html>
  );
}
