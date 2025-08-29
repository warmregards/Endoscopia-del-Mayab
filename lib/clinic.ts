// /lib/clinic.ts
export const CLINIC = {
  name: "Endoscopia del Mayab",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://endoscopiadelmayab.com").replace(/\/$/, ""),
  phone: "+52 999 236 0153",
  streetAddress: "Hospital Amerimed Mérida, Consultorio 517, Chichí Suárez",
  postalCode: "97306",
  hours: [
    { day: "Mo", opens: "07:00", closes: "19:00" },
    { day: "Tu", opens: "07:00", closes: "19:00" },
    { day: "We", opens: "07:00", closes: "19:00" },
    { day: "Th", opens: "07:00", closes: "19:00" },
    { day: "Fr", opens: "07:00", closes: "19:00" },
    { day: "Sa", opens: "07:00", closes: "19:00" },
    { day: "Su", opens: "07:00", closes: "19:00" },
  ] as const,
  mapUrl: "https://maps.app.goo.gl/hYxCrLJ1SrapBYV27",
  geo: { lat: 20.983670077019283, lng: -89.55433275846725 },
  logoUrl: "/endoscopia-del-mayab-logo.png", // site-relative is fine; we’ll resolve with base
  imageUrl: "/endoscopia-og.png",
  priceRange: "$$",
  specialties: ["Endoscopy"],
  aggregateRating: { ratingValue: 5.0, reviewCount: 18 },
  sameAs: [
    "https://www.omar.doctor",
    "https://www.doctoralia.com.mx/omar-quiroz/cirujano-bariatra-cirujano-general-endoscopista/yucatan",
    "https://www.youtube.com/channel/UCCENiT7n0qk8mXt-xBmRxxg",
    "https://www.facebook.com/dromarquiroz",
    "https://www.facebook.com/profile.php?id=61577159683148",
  ],
  secondaryServices: [
    "Consulta de Urgencias Digestivas",
    "Control Post-Endoscopia",
    "Valoración Pre-Endoscópica",
    "Chequeo Digestivo Preventivo",
    "Atención a Emergencias Gastrointestinales",
  ],
} as const;
