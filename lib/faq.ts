// /lib/faq.ts
// Centralized FAQ content for all pages.
// Consumed by: procedure page components (accordion UI) + schema.ts faqSchema() (JSON-LD).
//
// Architecture:
//   - Each page gets an exported array of FAQ items
//   - `getFaqsFor(routeKey)` returns the right array by route
//   - Schema generation uses schema.ts → faqSchema() (not duplicated here)
//   - Route keys match routes-seo.ts exactly
//
// Content strategy (informed by Google Ads + Search Console data):
//   Persona 5 (El Investigador) drives these queries. They're fear-based,
//   question-form, natural language. They cost $4,413/conversion via ads
//   but convert organically when content builds trust.
//
//   Top query clusters by volume (Ads + SC combined):
//     1. Price: "cuanto cuesta una [X]" — 600+ impressions
//     2. Definition: "que es [X]" — 300+ impressions
//     3. Fear/pain: "duele", "es peligroso", "riesgos" — 150+ impressions
//     4. Prep: "preparación para [X]" — 100+ impressions
//     5. Competitor: "endoscopia salud digna", "precio chopo" — 1,200+ impressions
//     6. Recovery: "cuidados en casa", "recuperación" — 50+ impressions
//     7. Duration: "cuanto dura/tarda" — 50+ impressions
//
//   Every procedure FAQ set follows this pattern:
//     Q1: What is it / when is it indicated (definition → "que es")
//     Q2: Price and what's included (price → "cuanto cuesta")
//     Q3: Does it hurt / sedation (fear → "duele", "es peligroso")
//     Q4: Prep (logistics → "preparación")
//     Q5: Duration + recovery (logistics → "cuanto dura", "recuperación")
//     Q6: Risks (fear → "riesgos", "complicaciones")
//     Q7: Procedure-specific extra (varies per page)

import { PRICING as PRICES, mxn, ADDITIONAL_FEES } from "@/lib/pricing"
import type { RouteKey } from "@/lib/routes-seo"
import type { ServiceKey } from "@/lib/pricing"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type FAQ = { question: string; answer: string }

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const price = (k: ServiceKey) => mxn(PRICES[k].from)
const biopsyFee = () => mxn(ADDITIONAL_FEES.biopsy.amount)

// ---------------------------------------------------------------------------
// HOME — conversion-focused, addresses top cross-procedure concerns
// Targets: "duele", "cuanto cuesta", "preparación", "es peligrosa",
//          "salud digna vs", "atienden emergencias"
// ---------------------------------------------------------------------------

export const homeFaqs: FAQ[] = [
  {
    question: "¿Cuánto cuestan los procedimientos endoscópicos?",
    answer: `Endoscopia desde ${price("endoscopia")}, colonoscopia desde ${price("colonoscopia")}, CPRE desde ${price("cpre")}. Todos los precios incluyen anestesia, biopsias sin límite, sala de recuperación y valoración pre-endoscópica. Sin cargos ocultos — la lectura de patología (${biopsyFee()}) es el único costo adicional posible.`,
  },
  {
    question: "¿Duele la endoscopia o colonoscopia?",
    answer:
      "No. Todos los procedimientos se realizan con sedación consciente administrada por anestesiólogo — no sentirás dolor ni molestia durante el estudio. La mayoría de los pacientes no recuerdan nada del procedimiento y despiertan cómodamente en la sala de recuperación.",
  },
  {
    question: "¿Qué diferencia hay entre ustedes y Salud Digna o Chopo?",
    answer:
      "Salud Digna y Chopo son laboratorios de análisis clínicos — no realizan endoscopias ni colonoscopias. Nosotros somos una clínica de endoscopia con especialista certificado, anestesiólogo, quirófano y equipo Olympus HD en Hospital Amerimed. Si te indicaron un procedimiento endoscópico, necesitas un endoscopista, no un laboratorio.",
  },
  {
    question: "¿Es peligrosa la colonoscopia?",
    answer:
      "La colonoscopia es uno de los procedimientos más seguros en gastroenterología. Las complicaciones graves son extremadamente raras (menos del 0.1%). El Dr. Quiroz ha realizado más de 300 colonoscopias anuales con equipo Olympus HD y monitoreo continuo por anestesiólogo en Hospital Amerimed.",
  },
  {
    question: "¿Cómo me preparo para el procedimiento?",
    answer:
      "La preparación varía según el procedimiento. Al agendar tu cita por WhatsApp, el Dr. Quiroz te enviará instrucciones detalladas y personalizadas. En general: ayuno de 8 horas para endoscopia, preparación intestinal especial para colonoscopia. Debes acudir con acompañante.",
  },
  {
    question: "¿Cuánto tiempo dura el procedimiento?",
    answer:
      "Una endoscopia tarda 10–15 minutos y una colonoscopia 20–30 minutos. Después necesitarás 30–60 minutos en recuperación. En total, planifica unas 2 horas desde tu llegada al hospital.",
  },
  {
    question: "¿Quién me atiende cuando escribo por WhatsApp?",
    answer:
      "El Dr. Quiroz personalmente. No hay recepcionista ni call center — cuando escribes al 999 236 0153, te contesta el doctor directamente. Esto permite resolver dudas médicas, confirmar disponibilidad y agendar tu cita sin intermediarios.",
  },
  {
    question: "¿Atienden emergencias digestivas?",
    answer:
      "Sí. El Dr. Quiroz atiende emergencias gastrointestinales los 7 días de la semana, incluyendo sangrado digestivo, cuerpos extraños y obstrucciones. Contacta por WhatsApp al 999 236 0153 para valoración inmediata.",
  },
  {
    question: "¿Atienden pacientes de Cancún y Playa del Carmen?",
    answer:
      "Sí. Recibimos pacientes de toda la Península de Yucatán para endoscopias, colonoscopias, CPRE y todos nuestros procedimientos. Hospital Amerimed Mérida está a menos de 3 horas de Playa del Carmen. Contacta por WhatsApp al 999 236 0153.",
  },
]

// ---------------------------------------------------------------------------
// ENDOSCOPIA
// Top queries: "cuanto cuesta una endoscopia" (204 Ads impr),
//   "que es una endoscopia" (29), "duele la endoscopia" (9, 50% conv!),
//   "es peligroso una endoscopia" (15), "preparacion para endoscopia" (11),
//   "cuanto tarda una endoscopia" (23),
//   "endoscopia salud digna" (378 — largest competitor query)
// ---------------------------------------------------------------------------

export const endoscopiaFaqs: FAQ[] = [
  {
    question: "¿Qué es una endoscopia digestiva y para qué sirve?",
    answer:
      "Es un estudio con una cámara flexible que revisa esófago, estómago y duodeno. Detecta gastritis, reflujo, úlceras, pólipos y cáncer temprano. También permite biopsias y terapias en la misma sesión.",
  },
  {
    question: "¿Cuánto cuesta una endoscopia y qué incluye el precio?",
    answer: `Endoscopia en Mérida desde ${price("endoscopia")}. Incluye valoración pre-endoscópica, sedación con anestesiólogo, equipo Olympus HD, toma de biopsias sin límite (un solo costo sin importar cuántas se tomen), sala de recuperación y reporte digital con imágenes. Único costo adicional posible: lectura de patología ${biopsyFee()}.`,
  },
  {
    question: "¿Duele la endoscopia?",
    answer:
      "No. Utilizamos sedación intravenosa administrada por anestesiólogo certificado. No sentirás dolor ni reflejo de náusea. La mayoría de pacientes no recuerdan el procedimiento y despiertan con mínima incomodidad.",
  },
  {
    question: "¿Qué preparación necesito antes del estudio?",
    answer:
      "Ayuno estricto de 8–12 horas. Algunos medicamentos pueden ajustarse — el Dr. Quiroz te indica cuáles al agendar. Debes acudir con acompañante adulto y no podrás conducir el mismo día por la sedación.",
  },
  {
    question: "¿Cuánto dura una endoscopia?",
    answer:
      "El procedimiento dura 15–20 minutos. La estancia total en el hospital es de 2–3 horas (incluye preparación y recuperación). Entregamos resumen con fotos el mismo día. Si hay biopsias, patología en 5–7 días.",
  },
  {
    question: "¿Es peligrosa la endoscopia?",
    answer:
      "Es uno de los procedimientos más seguros en gastroenterología. Las complicaciones son raras: reacciones a sedación (leves), sangrado menor tras biopsia o perforación (menos del 0.1%). Hospital Amerimed cuenta con protocolos de seguridad y manejo inmediato.",
  },
  {
    question: "¿Qué enfermedades se diagnostican con endoscopia?",
    answer:
      "Detecta gastritis por Helicobacter pylori, reflujo gastroesofágico, úlceras, várices esofágicas, pólipos gástricos, tumores, estenosis y causas de dolor abdominal o pérdida de peso inexplicada.",
  },
  {
    question: "¿Hacen endoscopia en Salud Digna o Chopo?",
    answer:
      "No. Salud Digna y Chopo son laboratorios de análisis clínicos — no cuentan con endoscopios, quirófano ni anestesiólogo para realizar endoscopias. Para un procedimiento endoscópico necesitas un endoscopista certificado en un hospital equipado.",
  },
  {
    question: "¿Aceptan seguros de gastos médicos para endoscopia?",
    answer:
      "Sí. El Dr. Quiroz trabaja con todas las principales aseguradoras de la región. Contáctanos por WhatsApp con los datos de tu póliza y te orientamos sobre la cobertura de tu endoscopia.",
  },
]

// ---------------------------------------------------------------------------
// COLONOSCOPIA
// Top queries: "cuanto cuesta una colonoscopia" (111 Ads impr),
//   "colonoscopia que es" (46), "preparacion para colonoscopia" (34),
//   "cuanto dura una colonoscopia" (20, 100% conv!),
//   "colonoscopia duele" (6), "es peligroso una colonoscopia" (5)
// ---------------------------------------------------------------------------

export const colonoscopiaFaqs: FAQ[] = [
  {
    question: "¿Qué es la colonoscopia y cuándo se recomienda?",
    answer:
      "Estudia colon y recto con una cámara flexible para prevenir y diagnosticar cáncer colorrectal, pólipos, divertículos e inflamación. Se recomienda tamizaje desde los 45 años, o antes si hay antecedentes familiares de cáncer colorrectal.",
  },
  {
    question: "¿Cuánto cuesta una colonoscopia y qué incluye?",
    answer: `Colonoscopia en Mérida desde ${price("colonoscopia")}. Incluye sedación con anestesiólogo, equipo Olympus HD, biopsias sin límite, sala de recuperación y reporte con imágenes. La polipectomía (extracción de pólipos) y lectura de patología se cotizan según hallazgos.`,
  },
  {
    question: "¿Duele la colonoscopia?",
    answer:
      "No. Se realiza bajo sedación profunda con anestesiólogo — no sentirás dolor ni molestia. Tras el procedimiento puedes tener ligera distensión abdominal que desaparece en pocas horas.",
  },
  {
    question: "¿Cómo es la preparación intestinal?",
    answer:
      "Usamos soluciones de polietilenglicol en 2 tomas, más dieta líquida el día previo. La buena preparación es clave para un estudio completo — si no es adecuada, puede reprogramarse. El Dr. Quiroz envía instrucciones detalladas por WhatsApp al agendar.",
  },
  {
    question: "¿Cuánto dura una colonoscopia?",
    answer:
      "El procedimiento dura 25–45 minutos. La estancia total es de 3–4 horas. Puedes comer ligero el mismo día y retomar actividades al siguiente. Si se extirpan pólipos grandes, se dan indicaciones adicionales de cuidado.",
  },
  {
    question: "¿Es peligrosa la colonoscopia?",
    answer:
      "Es un procedimiento muy seguro. Riesgos poco comunes: sangrado (especialmente si se retiran pólipos) o perforación (menos del 0.1%). Contamos con anestesiólogo y protocolos hospitalarios en Amerimed para manejo inmediato.",
  },
  {
    question: "¿Qué detecta la colonoscopia?",
    answer:
      "Detecta y permite retirar pólipos en la misma sesión, además de diagnosticar cáncer colorrectal, colitis, divertículos y causas de diarrea crónica, dolor abdominal o sangrado rectal.",
  },
  {
    question: "¿Colonoscopia tradicional o virtual?",
    answer:
      "La colonoscopia tradicional (óptica) permite diagnóstico y tratamiento en la misma sesión — si encuentra un pólipo, lo retira ahí mismo. La virtual por tomografía no permite biopsia ni extracción, y si encuentra algo, requiere colonoscopia óptica de todos modos.",
  },
  {
    question: "¿La biopsia de colon tiene costo adicional?",
    answer: `La toma de biopsias durante la colonoscopia está incluida en el precio sin límite — no importa cuántas muestras se tomen. El único costo adicional es la lectura de patología (${biopsyFee()}), que se informa antes del procedimiento.`,
  },
  {
    question: "¿Aceptan seguros de gastos médicos para colonoscopia?",
    answer:
      "Sí. El Dr. Quiroz trabaja con todas las principales aseguradoras de la región. Contáctanos por WhatsApp con los datos de tu póliza y te orientamos sobre la cobertura de tu colonoscopia.",
  },
]

// ---------------------------------------------------------------------------
// PANENDOSCOPIA
// ---------------------------------------------------------------------------

export const panendoscopiaFaqs: FAQ[] = [
  {
    question: "¿Qué es la panendoscopia y en qué casos se indica?",
    answer:
      "Es la combinación de endoscopia alta (esófago, estómago, duodeno) y colonoscopia (colon completo) en una sola sesión bajo sedación. Se indica cuando hay síntomas digestivos altos y bajos simultáneos, anemia sin causa clara, pérdida de peso inexplicable o necesidad de tamizaje digestivo completo.",
  },
  {
    question: "¿Cuánto cuesta una panendoscopia y qué incluye?",
    answer: `Desde ${price("panendoscopia")}. Incluye ambos estudios (endoscopia + colonoscopia), sedación con anestesiólogo, equipo Olympus HD, fotos de hallazgos y reportes el mismo día. Toma de biopsias incluida sin límite; la lectura de patología tiene costo adicional (${biopsyFee()}).`,
  },
  {
    question: "¿Duele la panendoscopia? ¿Es con sedación?",
    answer:
      "No duele. Se realiza bajo sedación profunda con anestesiólogo — no sentirás dolor ni molestia durante ninguno de los dos estudios. Al despertar puedes tener ligera distensión abdominal que desaparece en pocas horas.",
  },
  {
    question: "¿Cómo es la preparación para panendoscopia?",
    answer:
      "Requiere ayuno de 8-12 horas y preparación intestinal completa (solución de polietilenglicol en 2 tomas más dieta líquida el día previo). Si tomas anticoagulantes, el Dr. Quiroz te indica cómo ajustarlos. Las instrucciones detalladas se envían por WhatsApp al agendar.",
  },
  {
    question: "¿Cuánto dura y cuál es la recuperación?",
    answer:
      "El procedimiento dura 45-60 minutos. La estancia total es de 3-4 horas incluyendo recuperación. Puedes comer ligero el mismo día y retomar actividades normales al día siguiente. Se entregan dos reportes completos con fotos HD.",
  },
  {
    question: "¿Es peligrosa la panendoscopia? ¿Cuáles son los riesgos?",
    answer:
      "Es un procedimiento seguro. Los riesgos poco comunes incluyen sangrado menor (especialmente si se retiran pólipos) o perforación (menos del 0.1%). Contamos con anestesiólogo y protocolos hospitalarios en Amerimed para manejo inmediato de cualquier eventualidad.",
  },
  {
    question: "¿Incluye biopsias o tratamientos?",
    answer: `Sí. Se toman biopsias cuando está indicado y se realizan terapias simples (como remoción de pólipos pequeños) en la misma sesión sin costo adicional. El análisis de patología tiene un costo independiente (${biopsyFee()}) informado previamente.`,
  },
]

// ---------------------------------------------------------------------------
// CPRE
// Top queries: "que es cpre/cepre" (24+17+12+10 = 63 Ads impr),
//   "cuanto cuesta una cpre" (16+13+11 = 40), "cpre es peligrosa" (5),
//   "riesgos cpre" (4+4), "cpre cuidados en casa" (16),
//   "tiempo de recuperación de una cpre" (6),
//   "hospitales donde hacen cpre" (62, 63% conv rate!)
//
// CPRE is the highest-margin procedure ($15K profit) with the worst
// page performance (0.65% organic CTR, 7.7% GA4 conversion).
// FAQs here are critical for organic capture and trust-building.
// ---------------------------------------------------------------------------

export const cpreFaqs: FAQ[] = [
  {
    question: "¿Qué es la CPRE y para qué sirve?",
    answer:
      "La CPRE (colangiopancreatografía retrógrada endoscópica) combina endoscopia y rayos X para diagnosticar y tratar problemas de vías biliares y páncreas: cálculos biliares, estenosis, obstrucciones con ictericia y pancreatitis biliar. Es tanto diagnóstica como terapéutica — puede resolver el problema en la misma sesión.",
  },
  {
    question: "¿Cuánto cuesta una CPRE y qué modifica el precio?",
    answer: `CPRE en Mérida desde ${price("cpre")}. El costo base incluye sedación, quirófano y equipo. Aumenta si se realizan esfinterotomía, extracción de cálculos o colocación de prótesis — te damos cotización detallada antes del procedimiento. En Cancún, el mismo procedimiento puede costar $40,000+ MXN según reportes de pacientes.`,
  },
  {
    question: "¿La CPRE es peligrosa?",
    answer:
      "Es un procedimiento más complejo que una endoscopia convencional, pero sigue siendo seguro en manos experimentadas. Los riesgos más descritos son pancreatitis post-procedimiento (2–5%), sangrado o perforación (raros). Utilizamos duodenoscopio Olympus, fluoroscopía digital y antibióticos profilácticos para minimizarlos.",
  },
  {
    question: "¿Cómo se realiza y cuánto dura?",
    answer:
      "Se efectúa bajo sedación profunda con fluoroscopía (rayos X en tiempo real). Se canulan los conductos biliares, se obtienen imágenes y, si es necesario, se realiza tratamiento en la misma sesión. Duración: 30–90 minutos según complejidad. La estancia total es de 6–24 horas.",
  },
  {
    question: "¿Qué cuidados necesito en casa después de una CPRE?",
    answer:
      "Reposo relativo 24–48 horas, dieta blanda progresiva, evitar esfuerzos. Tras una CPRE diagnóstica simple, el alta puede ser el mismo día. Si hubo intervención terapéutica, la hospitalización es de 12–24 horas. Señales de alarma: dolor abdominal intenso, fiebre o ictericia — contactar inmediatamente.",
  },
  {
    question: "¿Cuándo es urgente realizar una CPRE?",
    answer:
      "En colangitis (fiebre + dolor abdominal + ictericia), ictericia obstructiva progresiva o pancreatitis con obstrucción biliar. Estos escenarios requieren manejo inmediato — contacta por WhatsApp para valoración urgente.",
  },
  {
    question: "¿Qué estudios necesito antes de una CPRE?",
    answer:
      "Ultrasonido abdominal, química sanguínea (bilirrubinas, enzimas hepáticas), biometría hemática y estudios de coagulación. Se ajusta según urgencia y condición del paciente. El Dr. Quiroz te indica exactamente qué necesitas al valorar tu caso.",
  },
  {
    question: "¿Realizan CPRE para pacientes de Playa del Carmen y Cancún?",
    answer:
      "Sí. Recibimos pacientes de toda la Península de Yucatán, incluyendo Playa del Carmen, Cancún y Quintana Roo. El procedimiento se realiza en Hospital Amerimed Mérida — a menos de 3 horas por carretera. Agenda por WhatsApp al 999 236 0153 y coordinamos tu cita.",
  },
  {
    question: "¿Dónde se realiza la CPRE en Mérida?",
    answer:
      "En el quirófano de Hospital Amerimed Mérida (Consultorio 517, Chichí Suárez), equipado con fluoroscopía digital, duodenoscopio Olympus especializado y tecnología SpyGlass para casos complejos. Es el único centro en la península de Yucatán con esta combinación de equipo.",
  },
]

// ---------------------------------------------------------------------------
// CPRE PLAYA DEL CARMEN (Geo-Targeted)
// 1,206 organic impressions from Quintana Roo CPRE queries with 0 clicks.
// Mix of medical + travel/logistics questions for QR patients.
// ---------------------------------------------------------------------------

export const cprePlayaDelCarmenFaqs: FAQ[] = [
  {
    question: "¿Cuánto cuesta una CPRE en Mérida?",
    answer: `CPRE en Mérida desde ${price("cpre")}. El costo base incluye sedación, quirófano, equipo y fluoroscopía. Puede aumentar si se realizan esfinterotomía, extracción de cálculos o colocación de prótesis — te damos cotización detallada antes del procedimiento. En hospitales privados de Cancún, el mismo procedimiento puede costar $40,000+ MXN.`,
  },
  {
    question: "¿Necesito quedarme en Mérida después del procedimiento?",
    answer:
      "Depende de la complejidad. Una CPRE diagnóstica simple permite alta el mismo día — podrías regresar a Playa del Carmen esa misma tarde con un acompañante. Si se realiza intervención terapéutica (extracción de cálculos, colocación de prótesis), la hospitalización es de 12–24 horas. Te indicamos todo antes del procedimiento.",
  },
  {
    question: "¿Por qué no hay especialistas en CPRE en Playa del Carmen?",
    answer:
      "La CPRE requiere equipo altamente especializado (duodenoscopio, fluoroscopía, sala de quirófano equipada) y un endoscopista con entrenamiento avanzado específico. Los hospitales de la Riviera Maya no cuentan con esta infraestructura, por lo que refieren estos casos a especialistas en Mérida.",
  },
  {
    question: "¿La CPRE es peligrosa?",
    answer:
      "Es un procedimiento más complejo que una endoscopia convencional, pero sigue siendo seguro en manos experimentadas. Los riesgos más descritos son pancreatitis post-procedimiento (2–5%), sangrado o perforación (raros). Utilizamos duodenoscopio Olympus, fluoroscopía digital y antibióticos profilácticos para minimizarlos.",
  },
  {
    question: "¿Qué estudios necesito llevar a mi cita?",
    answer:
      "Ultrasonido abdominal, química sanguínea (bilirrubinas, enzimas hepáticas), biometría hemática y estudios de coagulación. Se ajusta según urgencia y condición del paciente. El Dr. Quiroz te indica exactamente qué necesitas al valorar tu caso.",
  },
  {
    question: "¿Puedo enviar mis estudios por WhatsApp antes de viajar?",
    answer:
      "Sí. Envía tu ultrasonido, laboratorios y la indicación de tu médico por WhatsApp. El Dr. Quiroz los revisa, confirma si la CPRE es necesaria, te da cotización exacta y agendamos fecha — todo antes de que salgas de Playa del Carmen.",
  },
]

// ---------------------------------------------------------------------------
// LIGADURA DE VÁRICES ESOFÁGICAS
// Query: "síntomas después de una ligadura de várices esofágicas" (21 Ads impr)
// Band ligation for esophageal varices. Gastric varices → see esclerosisVaricesFaqs.
// ---------------------------------------------------------------------------

export const ligaduraVaricesFaqs: FAQ[] = [
  {
    question: "¿Qué es la ligadura de várices esofágicas y cuándo se indica?",
    answer:
      "Consiste en colocar bandas elásticas sobre várices del esófago para detener sangrado o prevenirlo en pacientes con hipertensión portal. Se indica en sangrado activo, várices grandes o después de un primer episodio hemorrágico.",
  },
  {
    question: "¿Cuánto cuesta y cuántas sesiones se necesitan?",
    answer: `Desde ${price("ligadura_varices")}. Pueden requerirse 2–4 sesiones separadas 2–4 semanas hasta erradicar las várices residuales. Se efectúa con endoscopio terapéutico bajo sedación. Posteriormente vigilancia periódica según evolución.`,
  },
  {
    question: "¿Qué síntomas son normales después de la ligadura?",
    answer:
      "Es normal sentir molestia leve al tragar y dolor torácico bajo las primeras 24–48 horas. Dieta fría y blanda el primer día. Señales de alarma que requieren atención inmediata: vómito con sangre, evacuaciones negras, dolor intenso o fiebre.",
  },
  {
    question: "¿Cuál es la diferencia entre ligadura de várices esofágicas y esclerosis de várices gástricas?",
    answer:
      "La ligadura coloca bandas elásticas sobre las várices del esófago. La esclerosis inyecta cianoacrilato en las várices del estómago. Son procedimientos distintos para localizaciones diferentes. Si tus várices están en el estómago, el tratamiento indicado es la esclerosis — consulta nuestra página de esclerosis de várices gástricas para más información.",
  },
  {
    question: "¿Qué preparación necesito para la ligadura de várices?",
    answer:
      "Ayuno de 8 horas, laboratorios (biometría hemática y estudios de coagulación). Suspender anticoagulantes según indicación médica. El Dr. Quiroz te indica los ajustes necesarios al valorar tu caso por WhatsApp.",
  },
]

// ---------------------------------------------------------------------------
// ESCLEROSIS DE VÁRICES GÁSTRICAS
// Distinct procedure from ligadura — cyanoacrylate injection for gastric
// fundal varices (GOV2, IGV1). GBP Service #9.
// ---------------------------------------------------------------------------

export const esclerosisVaricesFaqs: FAQ[] = [
  {
    question: "¿Qué es la esclerosis de várices gástricas y cuándo se indica?",
    answer:
      "Es la inyección endoscópica de cianoacrilato (un adhesivo tisular) directamente en las várices del estómago para sellarlas y prevenir o detener el sangrado. Se indica cuando las várices están en el fondo gástrico, donde las bandas elásticas de la ligadura no pueden aplicarse. Es el tratamiento de primera línea recomendado por guías internacionales para várices gástricas fúndicas.",
  },
  {
    question: "¿Cuánto cuesta la esclerosis de várices gástricas?",
    answer: `Desde ${price("esclerosis_varices_gastricas")}. Generalmente se resuelve en 1–2 sesiones. Incluye sedación profunda, equipo endoscópico especializado, sala de recuperación y consulta pre-procedimiento. El número de sesiones depende de la cantidad y tamaño de las várices.`,
  },
  {
    question: "¿Cómo es la recuperación después de la inyección de cianoacrilato?",
    answer:
      "Observación de 4–6 horas post-procedimiento. Dieta blanda las primeras 24–48 horas. Es normal sentir molestia abdominal leve. Señales de alarma que requieren atención inmediata: vómito con sangre, evacuaciones negras, dolor abdominal intenso o fiebre — contacta por WhatsApp para valoración urgente.",
  },
  {
    question: "¿En qué se diferencia de la ligadura de várices esofágicas?",
    answer:
      "La ligadura usa bandas elásticas para estrangular las várices del esófago. La esclerosis inyecta un adhesivo (cianoacrilato) dentro de las várices del estómago. Son procedimientos complementarios: si tienes várices en ambos sitios, se tratan con la técnica adecuada para cada localización. Ambos se realizan bajo sedación con el mismo equipo endoscópico.",
  },
  {
    question: "¿Cuáles son los riesgos de la esclerosis con cianoacrilato?",
    answer:
      "Los riesgos principales son resangrado (menos del 15%) y, en casos raros, embolización del adhesivo. Utilizamos técnica controlada con dosis precisas y monitoreo continuo para minimizar complicaciones. La tasa de éxito en control de sangrado supera el 90%. El Dr. Quiroz te explica los riesgos específicos de tu caso antes del procedimiento.",
  },
]

// ---------------------------------------------------------------------------
// LIGADURA DE HEMORROIDES INTERNAS — 25% conversion rate, 130s engagement
// ---------------------------------------------------------------------------

export const ligaduraHemorroidesFaqs: FAQ[] = [
  {
    question: "¿Qué es la ligadura de hemorroides internas y para quién está indicada?",
    answer:
      "Colocamos bandas elásticas en la base de las hemorroides internas grado I–II para cortar su irrigación y que se retraigan. Alivia sangrado, molestia y sensación de evacuación incompleta. Los grados III–IV generalmente requieren manejo quirúrgico.",
  },
  {
    question: "¿Cuánto cuesta y cómo es el procedimiento?",
    answer: `Desde ${price("ligadura_hemorroides")}. Es ambulatorio, con sedación consciente en quirófano. Dura 5–10 minutos con 1–2 horas de observación. El plan incluye seguimiento sin costo adicional en el primer mes.`,
  },
  {
    question: "¿Cómo es la recuperación?",
    answer:
      "Regreso a actividades en 24–48 horas. Recomendamos fibra, buena hidratación, baños de asiento y evitar cargar más de 10 kg por 2–3 semanas. Señales de alarma: sangrado abundante persistente, fiebre o dolor severo.",
  },
  {
    question: "¿Qué incluye el precio de la ligadura de hemorroides?",
    answer: `Desde ${price("ligadura_hemorroides")}. El precio incluye: valoración pre-procedimiento, sedación con anestesiólogo certificado, equipo endoscópico, bandas elásticas, sala de recuperación y seguimiento post-procedimiento por WhatsApp con el Dr. Quiroz. Sin cargos ocultos.`,
  },
  {
    question: "¿Cuántas sesiones de ligadura de hemorroides necesito?",
    answer:
      "La mayoría de los pacientes resuelven con 1–2 sesiones espaciadas por 3–4 semanas. Hemorroides grado I generalmente requieren una sesión; grado II puede necesitar dos. El Dr. Quiroz evalúa en la primera consulta cuántas sesiones necesitas.",
  },
]

// ---------------------------------------------------------------------------
// GASTROSTOMÍA (PEG)
// ---------------------------------------------------------------------------

export const gastrostomiaFaqs: FAQ[] = [
  {
    question: "¿Quiénes se benefician de una gastrostomía (PEG)?",
    answer:
      "Pacientes con disfagia prolongada por evento vascular cerebral, cáncer de cabeza y cuello u otras condiciones que impiden la alimentación oral por más de 4–6 semanas. Se valora de forma multidisciplinaria antes del procedimiento.",
  },
  {
    question: "¿Cómo se coloca y cuánto cuesta?",
    answer: `Se coloca por endoscopia bajo sedación en 30–45 minutos. Precio desde ${price("gastrostomia_peg")} con control inicial incluido. Generalmente alta el mismo día. La sonda dura 12–24 meses antes de requerir recambio.`,
  },
  {
    question: "¿Qué riesgos tiene y cómo es el seguimiento?",
    answer:
      "Complicaciones menores: irritación o infección del sitio de la sonda. Complicaciones mayores: raras. Ofrecemos profilaxis antibiótica y educación familiar sobre cuidados domiciliarios de la sonda.",
  },
  {
    question: "¿Cuánto tiempo dura la sonda PEG y cuándo se cambia?",
    answer:
      "La sonda PEG dura entre 12 y 24 meses antes de requerir recambio. El cambio es ambulatorio, rápido y se realiza en consultorio sin necesidad de nueva endoscopia en la mayoría de los casos.",
  },
  {
    question: "¿Mi familiar puede hacer vida normal con una gastrostomía?",
    answer:
      "Sí. Pacientes con PEG pueden bañarse, vestirse, moverse libremente y participar en actividades familiares. La alimentación se administra en casa siguiendo las indicaciones que damos en la capacitación post-procedimiento.",
  },
  {
    question: "¿Qué hago si la sonda se sale o hay signos de infección?",
    answer:
      "Contacta al Dr. Quiroz por WhatsApp inmediatamente — la atención oportuna es clave. Si hay enrojecimiento, secreción o fiebre, acude a Hospital Amerimed para valoración presencial. Ofrecemos disponibilidad en fines de semana para urgencias.",
  },
]

// ---------------------------------------------------------------------------
// EXTRACCIÓN DE CUERPOS EXTRAÑOS
// ---------------------------------------------------------------------------

export const extraccionFaqs: FAQ[] = [
  {
    question: "¿Qué objetos pueden retirarse por endoscopia?",
    answer:
      "Alimentos impactados (huesos, espinas), monedas, pilas botón, prótesis dentales, objetos metálicos o punzocortantes. Localización frecuente: esófago, estómago y duodeno. Disponibilidad hospitalaria para casos urgentes.",
  },
  {
    question: "¿Cuándo es urgente acudir?",
    answer:
      "Pilas botón, objetos punzocortantes, dolor torácico intenso, fiebre, dificultad para tragar o respirar y salivación excesiva. En estos casos se requiere atención inmediata para evitar complicaciones.",
  },
  {
    question: "¿Cómo se realiza y cuánto cuesta?",
    answer: `Se usan pinzas, cestas y dispositivos protectores con endoscopio terapéutico bajo sedación. Desde ${price("extraccion_cuerpos_extranos")}. La mayoría de casos se resuelven sin cirugía. El éxito depende del tipo de objeto y su ubicación.`,
  },
  {
    question: "¿Mi hijo se tragó una moneda o pila — qué debo hacer?",
    answer:
      "Si es una pila botón, acude a urgencias INMEDIATAMENTE — puede causar quemaduras internas en menos de 2 horas. Para monedas: si el niño respira normal y no tiene dolor, contáctanos por WhatsApp para valoración. Si hay dificultad para tragar, babeo excesivo o dolor, lleva al niño a Hospital Amerimed directamente.",
  },
  {
    question: "¿Duele la extracción endoscópica de cuerpos extraños?",
    answer: `No. Se realiza bajo sedación profunda con anestesiólogo presente — no sientes nada durante el procedimiento. Después puedes tener molestia leve en garganta por 24 horas. Precio desde ${price("extraccion_cuerpos_extranos")} con sedación incluida.`,
  },
  {
    question: "¿Qué pasa si el objeto no puede sacarse por endoscopia?",
    answer:
      "En casos complicados (5-10%), el Dr. Quiroz tiene la ventaja de ser endoscopista Y cirujano general. Si la extracción endoscópica no funciona, puede resolver quirúrgicamente en el mismo momento sin necesidad de referir a otro médico.",
  },
  {
    question: "¿Atienden emergencias de cuerpos extraños fines de semana?",
    answer:
      "Sí. Contáctanos por WhatsApp al 999 236 0153 describiendo la situación. El Dr. Quiroz responde personalmente y coordina tu llegada a Hospital Amerimed. Fines de semana y festivos pueden tener un costo adicional sobre el precio base.",
  },
]

// ---------------------------------------------------------------------------
// DILATACIÓN ESOFÁGICA
// ---------------------------------------------------------------------------

export const dilatacionEsofagicaFaqs: FAQ[] = [
  {
    question: "¿Qué es la dilatación esofágica y para qué sirve?",
    answer:
      "Tratamiento endoscópico para estenosis (estrechamiento) del esófago que dificulta tragar. Se utilizan balones graduados o bujías bajo sedación para ampliar el paso y mejorar la deglución.",
  },
  {
    question: "¿Cuánto cuesta y cuántas sesiones se necesitan?",
    answer: `Desde ${price("dilatacion_esofagica")}. Muchas estenosis mejoran en 1–3 sesiones; los casos complejos pueden requerir mantenimientos periódicos. Se realiza con sedación — no sentirás dolor durante el procedimiento.`,
  },
  {
    question: "¿La dilatación esofágica duele?",
    answer:
      "No. Se realiza bajo sedación profunda — no sentirás dolor durante el procedimiento. Después puedes tener molestia leve al tragar que mejora en 24-48 horas.",
  },
  {
    question: "¿Cuántas sesiones de dilatación esofágica necesito?",
    answer:
      "Depende del tipo y severidad de la estenosis. Muchos pacientes mejoran en 1-3 sesiones. Los casos complejos pueden requerir dilataciones periódicas. El Dr. Quiroz te explica el plan desde la primera valoración.",
  },
  {
    question: "¿Qué riesgos tiene la dilatación esofágica?",
    answer:
      "Es un procedimiento seguro cuando lo realiza un especialista. Los riesgos (sangrado menor, perforación) son poco frecuentes y se minimizan con balones graduados, guía endoscópica y monitoreo en Hospital Amerimed.",
  },
  {
    question: "¿Cómo es la recuperación y alimentación?",
    answer:
      "Líquidos las primeras 24 horas y dieta blanda 2–7 días. Reanudación progresiva según tolerancia. Molestia faríngea transitoria es normal. Riesgo de sangrado o perforación es bajo con material graduado.",
  },
]

// ---------------------------------------------------------------------------
// DILATACIÓN BILIAR
// ---------------------------------------------------------------------------

export const dilatacionBiliarFaqs: FAQ[] = [
  {
    question: "¿Qué es la dilatación biliar y en qué casos se indica?",
    answer:
      "Procedimiento endoscópico (generalmente durante CPRE) que ensancha estenosis en los conductos biliares para restablecer el flujo de bilis. Indicado en estenosis benignas posquirúrgicas o malignas.",
  },
  {
    question: "¿Cuánto cuesta y cómo es la recuperación?",
    answer: `Desde ${price("dilatacion_biliar")}. Se realiza con sedación profunda y guía fluoroscópica. Observación 2–6 horas con regreso gradual a actividades en 24–48 horas.`,
  },
  {
    question: "¿Qué riesgos tiene?",
    answer:
      "Los eventos adversos son poco frecuentes y se reducen con guía por fluoroscopía y protocolos hospitalarios de seguridad en Amerimed.",
  },
]

// ---------------------------------------------------------------------------
// DILATACIÓN COLÓNICA
// ---------------------------------------------------------------------------

export const dilatacionColonicaFaqs: FAQ[] = [
  {
    question: "¿Qué es la dilatación colónica endoscópica?",
    answer:
      "Tratamiento con balones para estenosis del colon que enlentecen el tránsito intestinal. Se realiza durante colonoscopia terapéutica con sedación y monitoreo continuo.",
  },
  {
    question: "¿Cuánto cuesta y qué incluye el precio?",
    answer: `Desde ${price("dilatacion_colonica")}. Incluye sedación con anestesiólogo, sala de recuperación, valoración pre-procedimiento y reporte con fotografías HD. La lectura de patología (${biopsyFee()}) es el único costo adicional posible si se toman biopsias.`,
  },
  {
    question: "¿Duele la dilatación colónica?",
    answer:
      "No. Se realiza con sedación profunda — no sientes nada durante el procedimiento. El anestesiólogo monitorea tus signos vitales todo el tiempo. Después puedes tener molestia abdominal leve que se resuelve en horas.",
  },
  {
    question: "¿Cómo me preparo para una dilatación colónica?",
    answer:
      "Requiere preparación intestinal completa (igual que para colonoscopia): dieta líquida 24 horas antes y solución de limpieza intestinal. Te damos instrucciones detalladas al agendar.",
  },
  {
    question: "¿Cuánto dura y cuándo puedo regresar a mis actividades?",
    answer:
      "El procedimiento toma 30–45 minutos. Observación 2–4 horas en Hospital Amerimed y alta el mismo día. Alimentación gradual empezando con líquidos. La mayoría de pacientes retoma actividades normales en 24–48 horas.",
  },
  {
    question: "¿Puede necesitarse más de una sesión?",
    answer:
      "Sí. En re-estenosis puede repetirse la dilatación en sesiones posteriores según evolución clínica y endoscópica. El sangrado o la perforación son poco frecuentes.",
  },
  {
    question: "¿La dilatación colónica puede evitar una cirugía de colon?",
    answer:
      "En muchos casos sí. El Dr. Quiroz evalúa cada caso individualmente. Como endoscopista y cirujano, puede ofrecerte ambas opciones y recomendarte la más segura. Si la dilatación no es suficiente, no necesitas buscar otro especialista.",
  },
]

// ---------------------------------------------------------------------------
// ENDOPRÓTESIS — 4 variants: esofágicas, biliares, duodenales, colónicas
// ---------------------------------------------------------------------------

export const endoprotesisEsofagicasFaqs: FAQ[] = [
  {
    question: "¿Cuándo se indica una endoprótesis esofágica?",
    answer:
      "En obstrucción maligna, fístulas, perforaciones controladas o estenosis benignas recurrentes. Mejora la deglución rápidamente y puede ser parte de un plan paliativo o puente a cirugía.",
  },
  {
    question: "¿Cómo se coloca y qué cuidados requiere?",
    answer:
      "Se coloca bajo sedación y guía endoscópica/fluoroscópica. Masticar bien, evitar alimentos fibrosos y mantener buena hidratación. Control endoscópico según evolución.",
  },
  {
    question: "¿Cuánto cuesta una endoprótesis esofágica en Mérida?",
    answer:
      "El precio depende del tipo de stent, diámetro, longitud y complejidad del caso. Envíanos tus estudios por WhatsApp para cotización personalizada. El procedimiento incluye sedación con anestesiólogo, sala de recuperación y reporte con fotografías.",
  },
  {
    question: "¿Duele la colocación de un stent esofágico?",
    answer:
      "No. Se realiza bajo sedación profunda con anestesiólogo certificado — no sientes nada durante el procedimiento. Después puedes sentir molestia leve al tragar que mejora en 24–48 horas conforme te adaptas al stent.",
  },
  {
    question: "¿Cuánto tiempo dura un stent esofágico?",
    answer:
      "Depende del tipo: los stents metálicos cubiertos para fístulas pueden retirarse en semanas, mientras que los stents para estenosis maligna son permanentes. El Dr. Quiroz te explica el plan específico para tu caso.",
  },
  {
    question: "¿Puedo comer normal después de la endoprótesis esofágica?",
    answer:
      "Inicias con líquidos claros y progresas a dieta blanda en 24–48 horas. Debes masticar muy bien, evitar alimentos fibrosos (carne con nervios, pan pegajoso) y comer porciones pequeñas. La mayoría de pacientes logra alimentación oral satisfactoria.",
  },
]

export const endoprotesisBiliaresFaqs: FAQ[] = [
  {
    question: "¿Para qué sirve un stent biliar?",
    answer:
      "Para drenar la bilis cuando hay obstrucción por cálculos, estenosis o tumores. Reduce ictericia y síntomas. Puede ser temporal (plástico, recambio cada 3–6 meses) o de mayor duración (metálico).",
  },
  {
    question: "¿Cómo es el seguimiento?",
    answer:
      "Control clínico y de laboratorios periódico. Los stents plásticos se recambian cada 3–6 meses; los metálicos requieren vigilancia por posible re-estenosis. Nueva CPRE si hay fiebre o ictericia recurrente.",
  },
]

export const endoprotesisDuodenalesFaqs: FAQ[] = [
  {
    question: "¿Qué es una prótesis duodenal y quién la necesita?",
    answer:
      "Es un stent metálico autoexpandible que se coloca por endoscopia para abrir obstrucciones del duodeno. Está indicada en pacientes con obstrucción por cáncer pancreático, tumores duodenales, estenosis post-quirúrgica o pancreatitis crónica que impide la alimentación oral.",
  },
  {
    question: "¿Cuánto cuesta una endoprótesis duodenal en Mérida?",
    answer:
      "El costo depende del tipo de stent y la complejidad del caso. El Dr. Quiroz evalúa cada situación y proporciona una cotización personalizada. El precio incluye sedación, sala de recuperación y valoración pre-procedimiento. Solicita tu cotización por WhatsApp al 999 236 0153.",
  },
  {
    question: "¿Duele la colocación del stent duodenal?",
    answer:
      "No. El procedimiento se realiza con sedación profunda administrada por anestesiólogo certificado. No sentirás dolor durante la colocación. Después del procedimiento puede haber molestia abdominal leve que se controla con medicamento.",
  },
  {
    question: "¿Qué esperar tras la colocación?",
    answer:
      "Mejoría del vómito y la distensión en 24–48 horas. Se inicia dieta con líquidos claros y se avanza gradualmente a alimentos blandos y sólidos. El Dr. Quiroz programa un control a los 7 días para verificar la posición y permeabilidad del stent.",
  },
  {
    question: "¿Cuánto dura un stent duodenal?",
    answer:
      "Los stents metálicos duodenales pueden funcionar de meses a años dependiendo de la causa subyacente. En obstrucciones malignas, la duración depende de la progresión de la enfermedad. Algunos pacientes pueden requerir recambio o limpieza endoscópica.",
  },
  {
    question: "¿Qué ventaja tiene que el Dr. Quiroz sea cirujano y endoscopista certificado?",
    answer:
      "Si durante el procedimiento surgen complicaciones como perforación o sangrado, el Dr. Quiroz puede resolverlas quirúrgicamente en la misma sesión sin trasladar al paciente. Además, si la endoprótesis no es factible, puede ofrecer alternativas quirúrgicas como gastroenterostomía laparoscópica.",
  },
]

export const endoprotesisColonicasFaqs: FAQ[] = [
  {
    question: "¿Cuándo se necesita un stent colónico?",
    answer:
      "En obstrucción aguda por tumor o estenosis posquirúrgica. Permite descompresión y preparación para cirugía electiva o paliación según el caso oncológico.",
  },
  {
    question: "¿Cómo se coloca y qué resultados ofrece?",
    answer:
      "Se coloca durante colonoscopia con guía fluoroscópica bajo sedación profunda. Suele aliviar la obstrucción en pocas horas y reducir la necesidad de colostomía de urgencia.",
  },
  {
    question: "¿Es doloroso el procedimiento de endoprótesis colónica?",
    answer:
      "No. El procedimiento se realiza bajo sedación profunda con anestesiólogo — no sentirás nada durante la colocación del stent. La sedación está incluida en el costo.",
  },
  {
    question: "¿Cuánto tiempo dura la recuperación después del stent colónico?",
    answer:
      "La mayoría de pacientes notan alivio de la obstrucción en pocas horas. La hospitalización típica es de 24 a 48 horas para monitoreo. El Dr. Quiroz te da seguimiento personalizado.",
  },
  {
    question: "¿Qué pasa si el stent colónico no resuelve la obstrucción?",
    answer:
      "El Dr. Quiroz es endoscopista y cirujano certificado, lo que significa que puede evaluar opciones quirúrgicas de inmediato sin esperar otro especialista ni traslados.",
  },
  {
    question: "¿Cuánto cuesta una endoprótesis colónica en Mérida?",
    answer:
      "El precio depende del tipo de stent y la complejidad del caso. Contacta por WhatsApp al 999 236 0153 para evaluación y cotización personalizada.",
  },
]

// ---------------------------------------------------------------------------
// CIERRE DE FÍSTULAS CON CLIPS
// ---------------------------------------------------------------------------

export const cierreFistulasFaqs: FAQ[] = [
  {
    question: "¿Qué fístulas o perforaciones pueden cerrarse con clips?",
    answer:
      "Defectos pequeños o de bajo débito en esófago, estómago o colon, fístulas gastro-cutáneas y dehiscencias tempranas. La selección depende del tamaño, localización y condiciones generales del paciente.",
  },
  {
    question: "¿Cómo es el proceso y el seguimiento?",
    answer:
      "Se realiza por endoscopia con clips TTSC u OTSC según el tamaño del defecto. Indicamos ayuno temporal, antibiótico cuando corresponde y estudio contrastado de control para verificar el cierre.",
  },
]

// ---------------------------------------------------------------------------
// SUTURA ENDOSCÓPICA
// ---------------------------------------------------------------------------

export const suturaEndoscopicaFaqs: FAQ[] = [
  {
    question: "¿Cuándo se indica la sutura endoscópica?",
    answer:
      "En defectos mayores a 2 cm, cierres bajo tensión o anatomías complejas donde los clips no son suficientes. Evita cirugía abierta en casos seleccionados y requiere equipo especializado.",
  },
  {
    question: "¿Cómo es la recuperación?",
    answer:
      "Generalmente ayuno inicial con progresión de dieta y vigilancia estrecha. Valoramos en consulta la necesidad de controles endoscópicos para confirmar cicatrización completa.",
  },
  {
    question: "¿Cuánto cuesta la sutura endoscópica en Mérida?",
    answer:
      "El precio depende del tipo de defecto, ubicación y dispositivo utilizado. Ofrecemos cotización personalizada antes del procedimiento. Escríbenos por WhatsApp para recibir un presupuesto claro.",
  },
  {
    question: "¿La sutura endoscópica duele?",
    answer:
      "No. Se realiza con sedación profunda monitorizada por anestesiólogo. No sentirás dolor durante el procedimiento. Las molestias post-procedimiento suelen ser mínimas y se controlan con medicamento oral.",
  },
  {
    question: "¿Cuánto dura la recuperación?",
    answer:
      "La mayoría de pacientes reciben alta el mismo día. La recuperación completa toma de 3 a 7 días con dieta progresiva. Incluimos seguimiento por 30 días para confirmar cicatrización.",
  },
  {
    question: "¿Qué diferencia tiene con cirugía abierta?",
    answer:
      "La sutura endoscópica repara defectos desde el interior del tracto digestivo, sin incisiones externas. Esto significa menor dolor, recuperación más rápida, menor riesgo de infección y alta el mismo día en la mayoría de casos.",
  },
]

// ---------------------------------------------------------------------------
// ESD — disección endoscópica submucosa
// ---------------------------------------------------------------------------

export const esdFaqs: FAQ[] = [
  {
    question: "¿Qué es la disección endoscópica submucosa (ESD)?",
    answer:
      "Técnica avanzada que permite resecar en una sola pieza lesiones tempranas del tubo digestivo, preservando el órgano. Indicada en casos seleccionados tras valoración endoscópica y patológica.",
  },
  {
    question: "¿Cuánto cuesta y cómo es la recuperación?",
    answer:
      "El costo depende del tamaño y localización de la lesión. La recuperación suele ser de 24–48 horas con dieta progresiva. Requiere control histopatológico y endoscópico para confirmar curación completa.",
  },
  {
    question: "¿ESD o EMR — cuál es la diferencia?",
    answer:
      "La EMR es adecuada para lesiones pequeñas y elevables; la ESD permite resección en-bloc de lesiones más grandes o con características complejas. Elegimos la técnica según tamaño, localización y riesgo.",
  },
]

// ---------------------------------------------------------------------------
// EMR — resección endoscópica mucosa
// ---------------------------------------------------------------------------

export const emrFaqs: FAQ[] = [
  {
    question: "¿Qué lesiones se tratan con EMR?",
    answer:
      "Pólipos grandes del colon, lesiones superficiales del estómago, esófago o duodeno y esófago de Barrett con displasia. Permite resección terapéutica y análisis histológico completo.",
  },
  {
    question: "¿Cómo se realiza y qué cuidados requiere?",
    answer:
      "Se inyecta solución submucosa para elevar la lesión y se reseca con asa. Indicamos dieta progresiva y control endoscópico posterior para vigilar el sitio de resección.",
  },
  {
    question: "¿Duele la EMR? ¿Es segura?",
    answer:
      "No sentirás dolor — se realiza bajo sedación con anestesiólogo certificado. Es un procedimiento seguro con complicaciones raras (sangrado menor o perforación en menos del 1% de los casos). El Dr. Quiroz tiene experiencia quirúrgica para manejar cualquier complicación inmediatamente.",
  },
  {
    question: "¿Cuánto cuesta la EMR en Mérida?",
    answer:
      "El precio es bajo cotización personalizada porque varía según el número de lesiones, su localización y la complejidad técnica. Incluye sedación, procedimiento completo, fotos HD y seguimiento. Escríbenos por WhatsApp para recibir tu cotización.",
  },
  {
    question: "¿EMR o cirugía — cuál es mejor para pólipos?",
    answer:
      "La EMR es menos invasiva, ambulatoria y con recuperación más rápida que la cirugía. Sin embargo, no todos los pólipos son candidatos. El Dr. Quiroz evalúa cada caso para determinar si EMR, ESD o cirugía es la mejor opción — como cirujano, puede ofrecer todas las alternativas.",
  },
]

// ---------------------------------------------------------------------------
// RETIRO DE BALÓN GÁSTRICO
// ---------------------------------------------------------------------------

export const retiroBalonFaqs: FAQ[] = [
  {
    question: "¿Cuándo debe retirarse el balón gástrico?",
    answer:
      "Al cumplir el tiempo recomendado por el fabricante (6–12 meses) o si hay intolerancia, migración o complicaciones. Valoramos alternativas para mantener los resultados de pérdida de peso.",
  },
  {
    question: "¿Cómo se retira y cuánto cuesta?",
    answer: `Se punciona y aspira su contenido por endoscopia bajo sedación, luego se extrae colapsado. Desde ${price("retiro_balon_gastrico")}. Toma 15–30 minutos con alta el mismo día. Dieta líquida 24 horas y seguimiento nutricional.`,
  },
]

// ---------------------------------------------------------------------------
// APC — coagulación con plasma de argón
// ---------------------------------------------------------------------------

export const apcFaqs: FAQ[] = [
  {
    question: "¿Para qué sirve la coagulación con plasma de argón (APC)?",
    answer:
      "Para tratar lesiones vasculares sangrantes, control hemostático post-resección y ablación de lesiones superficiales. Produce coagulación controlada sin contacto directo y con penetración limitada.",
  },
  {
    question: "¿Cuántas sesiones necesito y cuánto cuesta?",
    answer: `Desde ${price("apc")}. El número de sesiones depende de la extensión de la lesión y la respuesta clínica. Indicamos inhibidor de bomba de protones y dieta blanda 24–48 horas entre sesiones.`,
  },
]

// ---------------------------------------------------------------------------
// PRECIOS PAGE
// Targets Persona 2 (El Comparador de Precios) — 6,219 SC impressions
// ---------------------------------------------------------------------------

export const preciosFaqs: FAQ[] = [
  {
    question: "¿Qué incluye el precio de cada procedimiento?",
    answer:
      `Todos los precios incluyen: anestesia con anestesiólogo certificado, toma de biopsias sin límite (un solo costo sin importar cuántas se tomen), sala de recuperación y valoración pre-endoscópica. Único costo adicional posible: lectura de patología (${biopsyFee()}).`,
  },
  {
    question: "¿Aceptan seguros de gastos médicos?",
    answer:
      "Sí. El Dr. Quiroz trabaja con todas las principales aseguradoras de la región. Contáctanos por WhatsApp con los datos de tu póliza y te orientamos sobre la cobertura de tu procedimiento.",
  },
  {
    question: "¿El precio puede cambiar después de agendar?",
    answer:
      "El precio base es fijo para procedimientos programados de lunes a viernes. Puede variar si durante el procedimiento se requiere intervención terapéutica adicional (por ejemplo, extracción de cálculos en CPRE). Siempre te informamos antes de proceder. Fines de semana y festivos pueden tener un costo adicional.",
  },
  {
    question: "¿Por qué son más baratos que otros especialistas?",
    answer:
      "El Dr. Quiroz es propietario de su equipo endoscópico (Olympus HD) y tiene costos hospitalarios fijos en Amerimed. Esto permite ofrecer precios más accesibles sin sacrificar calidad. No somos un laboratorio de bajo costo — somos un especialista certificado con precios transparentes.",
  },
]

// ---------------------------------------------------------------------------
// EMERGENCIAS
// ---------------------------------------------------------------------------

export const emergenciasFaqs: FAQ[] = [
  {
    question: "¿Qué emergencias digestivas atienden?",
    answer:
      "Sangrado digestivo alto y bajo, cuerpos extraños impactados (huesos, monedas, pilas), obstrucciones biliares agudas (colangitis), perforaciones y complicaciones post-endoscópicas. Atención los 7 días de la semana incluyendo fines de semana y festivos.",
  },
  {
    question: "¿Cómo solicito atención de emergencia?",
    answer:
      "Escribe por WhatsApp al 999 236 0153 describiendo tu situación. El Dr. Quiroz responde personalmente y coordina tu llegada a Hospital Amerimed si se requiere intervención urgente.",
  },
  {
    question: "¿Atienden emergencias en fines de semana y días festivos?",
    answer:
      "Sí. El Dr. Quiroz atiende emergencias digestivas los 7 días de la semana, incluyendo sábados, domingos y días festivos, cuando otros especialistas no están disponibles. Contacta por WhatsApp al 999 236 0153.",
  },
  {
    question: "¿Cuánto cuesta una endoscopia de emergencia?",
    answer:
      "El costo varía según el procedimiento necesario. El Dr. Quiroz te da una cotización clara antes de proceder. Trabajamos con seguros de gastos médicos mayores y ofrecemos pago directo. Consulta precios de procedimientos programados en nuestra página de precios.",
  },
  {
    question: "Mi hijo se tragó una moneda, ¿qué hago?",
    answer:
      "Contacta inmediatamente por WhatsApp o llamada al 999 236 0153. La extracción endoscópica de cuerpos extraños es uno de los procedimientos de emergencia más comunes. No induzcas el vómito. El Dr. Quiroz evalúa cada caso y realiza la extracción segura por endoscopia en Hospital Amerimed.",
  },
  {
    question: "¿Necesito estar en ayunas para una endoscopia de emergencia?",
    answer:
      "No. En emergencias reales no se requiere ayuno previo. La prioridad es resolver la urgencia digestiva. El equipo médico toma las precauciones necesarias durante la sedación.",
  },
  {
    question: "¿En qué hospital se realizan las emergencias?",
    answer:
      "En Hospital Amerimed Mérida, Consultorio 517, en la zona de Chichi Suárez. Fácil acceso desde Altabrisa, Temozón Norte, Cholul y el Centro Histórico de Mérida. Estacionamiento disponible.",
  },
]

// ---------------------------------------------------------------------------
// CONSULTAS DIGESTIVAS
// ---------------------------------------------------------------------------

export const consultasFaqs: FAQ[] = [
  {
    question: "¿Cuánto cuesta la consulta con un gastroenterólogo?",
    answer: `El Dr. Quiroz es endoscopista certificado (no gastroenterólogo), pero atiende las mismas condiciones digestivas. La consulta digestiva tiene un costo de ${mxn(ADDITIONAL_FEES.consultation.amount)}. Incluye historia clínica completa, examen físico especializado, plan de estudios personalizado y seguimiento por WhatsApp. La valoración pre-endoscópica está incluida en el precio de los procedimientos.`,
  },
  {
    question: "¿Qué tipos de consulta ofrecen?",
    answer:
      "Valoración pre-endoscópica (antes de un procedimiento), control post-endoscopia (seguimiento de hallazgos) y chequeo digestivo preventivo (evaluación general de salud digestiva). Todas incluyen revisión de estudios previos.",
  },
  {
    question: "¿Necesito referencia médica para agendar consulta?",
    answer:
      "No. Puedes agendar directamente por WhatsApp al 999 236 0153 sin necesidad de referencia de otro médico.",
  },
  {
    question: "¿Cuánto dura una consulta digestiva?",
    answer:
      "Entre 30 y 45 minutos. El Dr. Quiroz dedica el tiempo necesario para revisar tus síntomas, antecedentes y explicarte el plan de estudios sin prisas.",
  },
  {
    question: "¿Dónde se realiza la consulta?",
    answer:
      "En el Hospital Amerimed Mérida, Consultorio 517, en la zona de Chichi Suárez. Fácil acceso desde Altabrisa, Temozón Norte, Cholul y Centro Histórico.",
  },
  {
    question: "¿El doctor habla inglés?",
    answer:
      "Sí. El Dr. Quiroz ofrece atención bilingüe (español e inglés) para expatriados y visitantes internacionales.",
  },
  {
    question: "¿La valoración pre-endoscópica tiene costo adicional?",
    answer:
      "No. La valoración pre-endoscópica está incluida en el precio de todos los procedimientos endoscópicos.",
  },
  {
    question: "¿Cómo agendo una cita?",
    answer:
      "Escribe por WhatsApp al 999 236 0153. Te contesta directamente el Dr. Quiroz — no una recepcionista. También puedes llamar al mismo número.",
  },
]

// ---------------------------------------------------------------------------
// DOCTOR — Dr. Omar Quiroz profile page
// Targets: branded queries ("dr omar quiroz"), "gastroenterólogo mérida",
//   "cuanto cuesta consulta gastroenterologo", "certificaciones dr quiroz"
// ---------------------------------------------------------------------------

export const doctorFaqs: FAQ[] = [
  {
    question: "¿Qué certificaciones tiene el Dr. Omar Quiroz?",
    answer:
      "El Dr. Quiroz cuenta con triple certificación del Consejo Mexicano de Cirugía General (CMCG): Cirugía General (C18044318) y Alta Especialidad en Endoscopia (EGI230072). Su cédula profesional es 11629429.",
  },
  {
    question: "¿Dónde atiende el Dr. Omar Quiroz?",
    answer:
      "El Dr. Quiroz atiende en Hospital Amerimed Mérida, Consultorio 517, en Chichi Suárez, Mérida, Yucatán. El consultorio es accesible desde Cholul, Temozón Norte, Conkal y toda el área metropolitana.",
  },
  {
    question: "¿Cuánto cuesta la consulta con el Dr. Quiroz?",
    answer: `La consulta de valoración tiene un costo desde ${mxn(ADDITIONAL_FEES.consultation.amount)}. Incluye evaluación completa y plan de tratamiento personalizado. Puedes ver todos los precios en nuestra página de precios.`,
  },
  {
    question: "¿Cómo agendo una cita con el Dr. Quiroz?",
    answer:
      "Escribe directamente por WhatsApp al 999 236 0153. Te contesta el doctor personalmente — no una recepcionista. También puedes llamar al mismo número.",
  },
  {
    question: "¿Qué procedimientos realiza el Dr. Quiroz?",
    answer:
      "El Dr. Quiroz realiza endoscopias, colonoscopias, CPRE, ligadura de várices, ligadura de hemorroides, y más de 20 procedimientos endoscópicos diagnósticos y terapéuticos. Todos con técnicas mínimamente invasivas.",
  },
  {
    question: "¿El Dr. Quiroz acepta seguros médicos?",
    answer:
      "Sí. El Dr. Quiroz trabaja con todas las aseguradoras principales de la región. Contacta por WhatsApp para confirmar cobertura con tu póliza específica.",
  },
]

// ---------------------------------------------------------------------------
// CONTACTO — scheduling, insurance, parking, logistics
// ---------------------------------------------------------------------------

const contactoFaqs: FAQ[] = [
  {
    question: "¿Cómo agendo una cita con el Dr. Quiroz?",
    answer:
      "Escribe por WhatsApp al 999 236 0153. Te contesta directamente el Dr. Quiroz — no una recepcionista. También puedes llamar al mismo número.",
  },
  {
    question: "¿Necesito referencia médica para agendar?",
    answer:
      "No. Puedes agendar directamente sin referencia. Si tienes estudios previos o indicación de otro médico, tráelos a tu cita para que el doctor los revise.",
  },
  {
    question: "¿Trabajan con seguros médicos?",
    answer:
      "Sí. El Dr. Quiroz trabaja con todas las aseguradoras principales de la región. Consulta por WhatsApp si tu seguro aplica para tu procedimiento específico.",
  },
  {
    question: "¿Dónde está el consultorio?",
    answer:
      "Hospital Amerimed Mérida, Consultorio 517, Chichi Suárez, 97306 Mérida, Yuc. Contamos con estacionamiento gratuito y fácil acceso desde el Periférico Norte.",
  },
  {
    question: "¿Cuánto tiempo tardan en darme cita?",
    answer:
      "Generalmente agendamos dentro de la misma semana. Para emergencias digestivas (sangrado, dolor severo, obstrucción), ofrecemos atención inmediata — llama al 999 236 0153.",
  },
]

// ---------------------------------------------------------------------------
// Route map — keys MUST match routes-seo.ts RouteKey exactly
// ---------------------------------------------------------------------------

const BY_ROUTE: Partial<Record<RouteKey, FAQ[]>> = {
  home: homeFaqs,
  precios: preciosFaqs,
  endoscopia: endoscopiaFaqs,
  colonoscopia: colonoscopiaFaqs,
  panendoscopia: panendoscopiaFaqs,
  cpre: cpreFaqs,
  cpre_playa_del_carmen: cprePlayaDelCarmenFaqs,
  ligadura_varices: ligaduraVaricesFaqs,
  esclerosis_varices_gastricas: esclerosisVaricesFaqs,
  ligadura_hemorroides: ligaduraHemorroidesFaqs,
  gastrostomia: gastrostomiaFaqs,
  extraccion: extraccionFaqs,
  dilatacion_esofagica: dilatacionEsofagicaFaqs,
  dilatacion_biliar: dilatacionBiliarFaqs,
  dilatacion_colonica: dilatacionColonicaFaqs,
  endoprotesis_esofagicas: endoprotesisEsofagicasFaqs,
  endoprotesis_biliares: endoprotesisBiliaresFaqs,
  endoprotesis_duodenales: endoprotesisDuodenalesFaqs,
  endoprotesis_colonicas: endoprotesisColonicasFaqs,
  cierre_fistulas: cierreFistulasFaqs,
  sutura_endoscopica: suturaEndoscopicaFaqs,
  esd: esdFaqs,
  emr: emrFaqs,
  retiro_balon: retiroBalonFaqs,
  apc: apcFaqs,
  emergencias: emergenciasFaqs,
  consultas: consultasFaqs,
  contacto: contactoFaqs,
  doctor: doctorFaqs,
}

/**
 * Get FAQs for a given route key.
 * Returns empty array if no FAQs defined for the route.
 *
 * Usage in page.tsx:
 *   const faqs = getFaqsFor("colonoscopia")
 *
 * For JSON-LD, pipe into schema.ts:
 *   import { faqSchema } from "@/lib/schema"
 *   const faqJsonLd = faqSchema(getFaqsFor("colonoscopia"))
 */
export function getFaqsFor(route: RouteKey): FAQ[] {
  return BY_ROUTE[route] ?? []
}