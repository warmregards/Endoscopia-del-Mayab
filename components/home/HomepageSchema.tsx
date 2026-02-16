// components/home/HomepageSchema.tsx
import { CLINIC } from "@/lib/clinic"
import { SERVICES } from "@/lib/services"
import { PRICING } from "@/lib/pricing"
import { homeFaqs } from "@/lib/faq"
import { DOCTOR } from "@/lib/doctor"

const SITE = CLINIC.url

function buildOfferCatalog() {
  // Build all 27 services matching schema-graph-homepage.jsonld
  const diagnostic = [
    { name: "Endoscopia", url: `${SITE}/endoscopia-merida`, price: PRICING.endoscopia.from, type: "DiagnosticProcedure" },
    { name: "Colonoscopia", url: `${SITE}/colonoscopia-merida`, price: PRICING.colonoscopia.from, type: "DiagnosticProcedure" },
    { name: "Panendoscopia", url: `${SITE}/panendoscopia-merida`, price: PRICING.panendoscopia.from, type: "DiagnosticProcedure" },
  ]
  const specialized = [
    { name: "CPRE", alternateName: "Colangiopancreatografía Retrógrada Endoscópica", url: `${SITE}/cpre-merida`, price: PRICING.cpre.from, type: "TherapeuticProcedure" },
  ]
  const therapeutic = [
    { name: "Ligadura de Várices Esofágicas", alternateName: "Esclerosis de Várices Gástricas", url: `${SITE}/ligadura-varices-esofagicas-merida`, price: PRICING.ligadura_varices.from },
    { name: "Ligadura de Hemorroides Internas", url: `${SITE}/ligadura-hemorroides-internas-merida`, price: PRICING.ligadura_hemorroides.from },
    { name: "Gastrostomía Endoscópica (PEG)", url: `${SITE}/gastrostomia-endoscopica-peg-merida`, price: PRICING.gastrostomia_peg.from },
    { name: "Extracción de Cuerpos Extraños", url: `${SITE}/extraccion-cuerpos-extranos-endoscopia-merida`, price: PRICING.extraccion_cuerpos_extranos.from },
    { name: "Dilatación Esofágica", url: `${SITE}/dilatacion-esofagica-merida`, price: PRICING.dilatacion_esofagica.from },
    { name: "Dilatación Biliar", url: `${SITE}/dilatacion-biliar-merida`, price: PRICING.dilatacion_biliar.from },
    { name: "Dilatación Colónica", url: `${SITE}/dilatacion-colonica-merida`, price: PRICING.dilatacion_colonica.from },
    { name: "Retiro de Balón Gástrico", url: `${SITE}/retiro-balon-gastrico-merida`, price: PRICING.retiro_balon_gastrico.from },
    { name: "Coagulación con Plasma de Argón (APC)", url: `${SITE}/apc-coagulacion-plasma-argon-merida`, price: PRICING.apc.from },
  ]
  const advanced = [
    { name: "Endoprótesis Esofágicas", url: `${SITE}/endoprotesis-esofagicas-merida` },
    { name: "Endoprótesis Biliares", url: `${SITE}/endoprotesis-biliares-merida` },
    { name: "Endoprótesis Duodenales", url: `${SITE}/endoprotesis-duodenales-merida` },
    { name: "Endoprótesis Colónicas", url: `${SITE}/endoprotesis-colonicas-merida` },
    { name: "Cierre de Fístulas por Clips Endoscópicos", url: `${SITE}/cierre-fistulas-clips-endoscopicos-merida` },
    { name: "Sutura Endoscópica", url: `${SITE}/sutura-endoscopica-merida` },
    { name: "Disección Endoscópica Submucosa (ESD)", url: `${SITE}/diseccion-endoscopica-submucosa-esd-merida` },
    { name: "Resección Endoscópica Mucosa (EMR)", url: `${SITE}/reseccion-endoscopica-mucosa-emr-merida` },
  ]
  const consultations = [
    { name: "Consulta de Urgencias Digestivas", url: `${SITE}/emergencias-digestivas-merida` },
    { name: "Atención a Emergencias Gastrointestinales", url: `${SITE}/emergencias-digestivas-merida` },
    { name: "Control Post-Endoscopia", url: `${SITE}/consultas-digestivas-merida` },
    { name: "Valoración Pre-Endoscópica", url: `${SITE}/consultas-digestivas-merida` },
    { name: "Chequeo Digestivo Preventivo", url: `${SITE}/consultas-digestivas-merida` },
  ]

  const toOffer = (svc: { name: string; alternateName?: string; url: string; price?: number; type?: string }) => {
    const offer: Record<string, any> = {
      "@type": "Offer",
      itemOffered: {
        "@type": "MedicalProcedure",
        name: svc.name,
        ...(svc.alternateName ? { alternateName: svc.alternateName } : {}),
        url: svc.url,
        ...(svc.type ? { procedureType: `https://health-lifesci.schema.org/${svc.type}` } : {}),
      },
    }
    if (svc.price) {
      offer.price = String(svc.price)
      offer.priceCurrency = "MXN"
    }
    return offer
  }

  return [
    ...diagnostic.map(toOffer),
    ...specialized.map(toOffer),
    ...therapeutic.map(s => toOffer({ ...s, type: "TherapeuticProcedure" })),
    ...advanced.map(s => toOffer({ ...s, type: "TherapeuticProcedure" })),
    ...consultations.map(toOffer),
  ]
}

function buildGraph() {
  const graph = [
    // 1. WebSite
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: `${SITE}/`,
      name: CLINIC.name,
      description: "Clínica especializada en endoscopia, colonoscopia y CPRE en Mérida, Yucatán. Precios transparentes desde $4,500 MXN.",
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "es-MX",
    },

    // 2. Organization
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: CLINIC.name,
      url: `${SITE}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/endoscopia-logo.png`,
      },
      sameAs: [
        "https://www.instagram.com/endoscopiadelmayab/",
        // TODO: Replace with actual Doctoralia URL
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+52-999-236-0153",
        contactType: "customer service",
        availableLanguage: ["Spanish", "English"],
        areaServed: {
          "@type": "State",
          name: "Yucatán",
          containedInPlace: { "@type": "Country", name: "Mexico" },
        },
      },
    },

    // 3. MedicalClinic
    {
      "@type": "MedicalClinic",
      "@id": `${SITE}/#clinic`,
      name: CLINIC.name,
      url: `${SITE}/`,
      image: `${SITE}/omar-open-graph.jpg`,
      description: "Endoscopia del Mayab es una clínica especializada en endoscopia, colonoscopia y CPRE, ubicada dentro del Hospital Amerimed en Mérida, Yucatán. Ofrecemos diagnóstico y tratamiento de enfermedades digestivas con tecnología avanzada y médico certificado. Precios transparentes desde $4,500 MXN. Atención directa con el Dr. Quiroz.",
      medicalSpecialty: "Gastroenterology",
      telephone: "+52-999-236-0153",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hospital Amerimed Mérida, Consultorio 517",
        addressLocality: "Mérida",
        addressRegion: "Yucatán",
        postalCode: "97306",
        addressCountry: "MX",
      },
      geo: {
        "@type": "GeoCoordinates",
        // TODO: Replace with exact Hospital Amerimed GPS from GBP pin
        latitude: CLINIC.geo.lat,
        longitude: CLINIC.geo.lng,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "07:00",
          closes: "21:00",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Mérida", containedInPlace: { "@type": "State", name: "Yucatán" } },
        { "@type": "State", name: "Yucatán", containedInPlace: { "@type": "Country", name: "Mexico" } },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: String(CLINIC.aggregateRating.ratingValue),
        reviewCount: String(CLINIC.aggregateRating.reviewCount),
        bestRating: "5",
      },
      knowsAbout: [
        "https://en.wikipedia.org/wiki/Endoscopy",
        "https://en.wikipedia.org/wiki/Colonoscopy",
        "https://en.wikipedia.org/wiki/Endoscopic_retrograde_cholangiopancreatography",
        "https://en.wikipedia.org/wiki/Gastroenterology",
      ],
      memberOf: { "@id": `${SITE}/#organization` },
      founder: { "@id": `${SITE}/#physician` },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Procedimientos Endoscópicos",
        itemListElement: buildOfferCatalog(),
      },
    },

    // 4. Physician
    {
      "@type": "Physician",
      "@id": `${SITE}/#physician`,
      name: DOCTOR.name,
      url: `${SITE}${DOCTOR.profileUrl}`,
      image: `${SITE}${DOCTOR.photos.headshot}`,
      description: DOCTOR.schemaDescription,
      medicalSpecialty: DOCTOR.medicalSpecialty,
      hasCredential: DOCTOR.schemaCredentials,
      memberOf: DOCTOR.schemaMemberOf,
      worksFor: { "@id": `${SITE}/#clinic` },
      knowsAbout: [
        "https://en.wikipedia.org/wiki/Endoscopy",
        "https://en.wikipedia.org/wiki/Colonoscopy",
        "https://en.wikipedia.org/wiki/Endoscopic_retrograde_cholangiopancreatography",
        "https://en.wikipedia.org/wiki/Gastroenterology",
      ],
      availableService: { "@id": `${SITE}/#clinic` },
    },

    // 5. FAQPage (homepage only)
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: homeFaqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]

  return { "@context": "https://schema.org", "@graph": graph }
}

export default function HomepageSchema() {
  const schema = buildGraph()
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
