// app/servicios/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { CheckCircle2, ExternalLink, MapPin, Clock, Zap, Stethoscope } from "lucide-react";

import { SERVICES, toSchemaServices } from "@/lib/services";
import { PRICING, mxn } from "@/lib/pricing";
import { CLINIC } from "@/lib/clinic";
import { buildMeta } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = buildMeta({
  title: "Servicios de Endoscopia en Mérida",
  description:
    "Listado de servicios de endoscopia y procedimientos digestivos en Mérida con el Dr. Omar Quiroz. Precios fijos, sedación segura y atención en Hospital Amerimed.",
  path: "/servicios",
});

// 1-line blurbs (safe, generic; edit freely)
const DESCRIPTIONS: Record<string, string> = {
  "endoscopia-merida":
    "Estudio del esófago, estómago y duodeno con sedación segura.",
  "colonoscopia-merida":
    "Revisión completa de colon para pólipos, sangrado y cáncer.",
  "panendoscopia-merida":
    "Endoscopia diagnóstica y terapéutica del tracto digestivo alto.",
  "cpre-merida":
    "Tratamiento endoscópico de vías biliares y páncreas (CPRE).",
  "ligadura-varices-esofagicas-merida":
    "Control de sangrado por várices con ligaduras con banda.",
  "ligadura-hemorroides-internas-merida":
    "Ligadura elástica ambulatoria para hemorroides internas.",
  "gastrostomia-endoscopica-peg-merida":
    "Colocación de gastrostomía PEG para nutrición enteral.",
  "extraccion-cuerpos-extranos-endoscopia-merida":
    "Retiro endoscópico seguro de objetos ingeridos.",
  "dilatacion-esofagica-merida":
    "Dilatación de estrecheces esofágicas bajo visión directa.",
  "esclerosis-varices-gastricas-merida":
    "Esclerosis endoscópica de várices gástricas.",
  "dilatacion-biliar-merida":
    "Dilatación y manejo de estenosis o cálculos biliares.",
  "dilatacion-colonica-merida":
    "Dilatación de estenosis colónicas seleccionadas.",
  "endoprotesis-esofagicas-merida":
    "Colocación de stent esofágico para obstrucción o fuga.",
  "endoprotesis-biliares-merida":
    "Stent biliar para obstrucciones benignas o malignas.",
  "endoprotesis-duodenales-merida":
    "Stent duodenal para obstrucción del tracto de salida gástrico.",
  "endoprotesis-colonicas-merida":
    "Stent colónico para descompresión en obstrucción.",
  "cierre-fistulas-clips-endoscopicos-merida":
    "Cierre de fístulas o perforaciones con clips endoscópicos.",
  "sutura-endoscopica-merida":
    "Sutura endoscópica para defectos mucosos seleccionados.",
  "diseccion-endoscopica-submucosa-esd-merida":
    "Resección en bloque de lesiones tempranas (ESD).",
  "reseccion-endoscopica-mucosa-emr-merida":
    "Resección mucosa de pólipos y lesiones planas (EMR).",
  "retiro-balon-gastrico-merida":
    "Extracción endoscópica de balón gástrico con sedación.",
  "apc-coagulacion-plasma-argon-merida":
    "Coagulación con plasma de argón para hemostasia y ablación.",
};

export default function ServiciosPage() {
  const catalog = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Servicios de Endoscopia",
    url: `${CLINIC.url}/servicios`,
    itemListElement: toSchemaServices(CLINIC.url).map((svc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "MedicalProcedure",
        name: svc.name,
        url: svc.url,
        offers: svc.priceFrom
          ? {
              "@type": "Offer",
              priceCurrency: "MXN",
              price: svc.priceFrom,
              availability: "https://schema.org/InStock",
              url: svc.url,
            }
          : undefined,
      },
    })),
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/10 border border-accent-light/20">
              <Stethoscope className="h-4 w-4 text-accent-strong" />
              <span className="text-sm font-medium text-foreground">
                Endoscopia del Mayab · Hospital Amerimed
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-foreground">
              Servicios de Endoscopia y Procedimientos Digestivos en Mérida
            </h1>
            <p className="text-lg text-foreground/80">
              Lista completa de estudios diagnósticos y terapéuticos. Precios fijos, sedación segura y atención el mismo día para urgencias.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-strong" />
                <span>Hospital Amerimed, Mérida</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-strong" />
                <span>Atención 24/7 para emergencias</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent-strong" />
                <span>Tecnología Olympus HD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const price = s.priceFrom ? mxn(s.priceFrom) : undefined;
              const href = `/${s.slug}`;
              const title = `${s.name} en Mérida`;

              return (
                <Link
                  key={s.slug}
                  href={href}
                  className="group p-6 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      {/* Service name as H2 for GBP/SEO */}
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {title}
                      </h2>
                      {price ? (
                        <p className="text-sm text-foreground/60">Desde {price}</p>
                      ) : (
                        <p className="text-sm text-foreground/60">Cotización previa</p>
                      )}
                    </div>
                  </div>

                  {/* One-sentence description under the H2 */}
                  <p className="text-sm text-foreground/80">
                    {DESCRIPTIONS[s.slug] ??
                      "Procedimiento endoscópico realizado por especialista con sedación monitorizada."}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-accent-strong text-sm font-medium">
                    <span>Ver detalle</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Urgencias banner */}
          <div className="mt-10 p-6 rounded-2xl bg-accent-strong/10 border border-accent-strong/20">
            <p className="text-sm text-foreground/80">
              ¿Emergencia por sangrado o cuerpo extraño? Consulte{" "}
              <Link
                href="/emergencias-digestivas-merida"
                className="font-semibold text-accent-strong underline underline-offset-4"
              >
                Urgencias Digestivas
              </Link>{" "}
              para atención inmediata 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD: OfferCatalog */}
      <Script
        id="services-catalog-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalog) }}
      />
    </>
  );
}
