// /lib/faq.ts (refactored)
// Intent: capture high-intent long-tail queries inside each service page.
// Pattern per page: short definition, price/what's included, prep, sedation/dolor,
// duration & recovery, risks, logistics. Then FAQs catch variants.

import { PRICING as PRICES, mxn } from "@/lib/pricing"
import type { RouteKey } from "@/lib/routes-seo"
import type { ServiceKey } from "@/lib/pricing"

export type FAQ = { question: string; answer: string }

const price = (k: ServiceKey) => mxn(PRICES[k].from)

export const buildFaqSchema = (id: string, faqs: FAQ[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": id,
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
})

// ---------------------------------------------------------------------------
// HOME / GENERAL — concise, authority + conversion (75–110w/answer)
// ---------------------------------------------------------------------------
export const homeFaqs: FAQ[] = [
  {
    question: "¿Por qué elegir endoscopia en Mérida sobre otras ciudades de Yucatán?",
    answer:
      "Realizamos endoscopia y colonoscopia en Hospital Amerimed Mérida con equipo Olympus HD y anestesiólogo certificado. 15+ años de experiencia, reportes digitales el mismo día y seguimiento por WhatsApp. Ubicación con fácil acceso para García Ginerés, Cholul, Francisco de Montejo y Kanasín. Atención programada y de urgencias, precios claros y opciones de pago. La combinación de tecnología, seguridad y disponibilidad nos convierte en una opción confiable en Mérida, Yucatán.",
  },
  {
    question: "¿Cuánto cuestan los procedimientos endoscópicos en Mérida, Yucatán?",
    answer: `Precios transparentes: endoscopia ${price("endoscopia")}, colonoscopia ${price("colonoscopia")}, CPRE ${price("cpre")}. Los montos publicados son “desde” e incluyen sedación, uso de quirófano y equipo especializado. Te damos una cotización detallada sin costo antes del procedimiento.`,
  },
  {
    question: "¿Qué procedimientos realizan en Hospital Amerimed, Mérida?",
    answer:
      "Endoscopia digestiva alta, colonoscopia, panendoscopia, CPRE, ligadura de várices, gastrostomía PEG, extracción de cuerpos extraños, dilataciones, colocación de endoprótesis, EMR, ESD y coagulación con plasma de argón. Todos con protocolos de seguridad, desinfección automática y monitoreo anestésico continuo.",
  },
  {
    question: "¿Atienden urgencias endoscópicas fines de semana?",
    answer:
      "Sí. Atendemos hemorragia digestiva, obstrucciones, extracción urgente de cuerpos extraños y urgencias biliares (incluida CPRE) con disponibilidad 24/7 según valoración. Para casos urgentes, contáctanos por teléfono o WhatsApp; coordinamos equipo, quirófano y estudios de laboratorio de forma prioritaria.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer:
      "Hospital Amerimed Mérida (Av. Itzáes). Consultorio con estacionamiento y acceso sencillo desde periférico. Indicaciones de llegada y opciones de transporte se envían al agendar. Atendemos a pacientes de toda el área metropolitana y municipios cercanos.",
  },
]

// ---------------------------------------------------------------------------
// ENDOSCOPIA — fully expanded (7–8 Qs)
// ---------------------------------------------------------------------------
export const endoscopiaFaqs: FAQ[] = [
  {
    question: "¿Qué es una endoscopia digestiva y para qué sirve?",
    answer:
      "Es un estudio con una cámara flexible que revisa esófago, estómago y duodeno. Detecta gastritis, reflujo, úlceras, pólipos y cáncer temprano. También permite biopsias y terapias en la misma sesión.",
  },
  {
    question: "¿Cuál es el precio y qué incluye?",
    answer: `Endoscopia en Mérida desde ${price("endoscopia")}. Incluye valoración, sedación profunda con anestesiólogo, quirófano, equipo Olympus HD y reporte digital con imágenes. Biopsias y tratamientos se cotizan previamente.`,
  },
  {
    question: "¿Qué preparación necesito antes del estudio?",
    answer:
      "Ayuno estricto de 8–12 horas. Algunos medicamentos pueden ajustarse. Debes acudir con acompañante y no conducir el mismo día. Se entregan instrucciones claras al confirmar la cita.",
  },
  {
    question: "¿Duele o provoca náuseas?",
    answer:
      "No. Utilizamos sedación intravenosa administrada por anestesiólogo. Esto evita dolor y reflejo de vómito. La mayoría de pacientes no recuerda el procedimiento y despierta con mínima incomodidad.",
  },
  {
    question: "¿Cuánto dura y cuándo recibo resultados?",
    answer:
      "El procedimiento dura 15–20 minutos, estancia total de 2–3 horas. Entregamos resumen inicial con fotos el mismo día. Si hay biopsias, patología en 5–7 días y revisión incluida.",
  },
  {
    question: "¿Qué enfermedades se diagnostican con endoscopia?",
    answer:
      "Detecta gastritis por Helicobacter pylori, reflujo, várices, pólipos gástricos, tumores benignos y malignos, estenosis y causas de dolor abdominal o pérdida de peso.",
  },
  {
    question: "¿Cuáles son los riesgos?",
    answer:
      "Raros: reacciones a sedación, sangrado leve tras biopsia o perforación (<0.1%). Hospital Amerimed cuenta con protocolos de seguridad y manejo inmediato.",
  },
  {
    question: "¿Cuándo es urgente realizar una endoscopia?",
    answer:
      "Si presentas vómito con sangre, evacuaciones negras, dolor abdominal intenso o dificultad grave para tragar, es recomendable acudir a urgencias para valoración inmediata.",
  },
]

// ---------------------------------------------------------------------------
// COLONOSCOPIA — fully expanded (7–8 Qs)
// ---------------------------------------------------------------------------
export const colonoscopiaFaqs: FAQ[] = [
  {
    question: "¿Qué es y cuándo se recomienda la colonoscopia?",
    answer:
      "Estudia colon y recto para prevenir y diagnosticar cáncer colorrectal, pólipos, divertículos e inflamación. Se recomienda tamizaje desde los 45 años o antes con antecedentes familiares.",
  },
  {
    question: "¿Cuál es el precio y qué incluye?",
    answer: `Colonoscopia en Mérida desde ${price("colonoscopia")}. Incluye sedación, quirófano, equipo HD y reporte con imágenes. La polipectomía y patología se cotizan según hallazgos.`,
  },
  {
    question: "¿Cómo es la preparación intestinal?",
    answer:
      "Usamos soluciones de polietilenglicol en 2 tomas, más dieta líquida el día previo. Si la preparación no es adecuada, puede reprogramarse el estudio. Se envían instrucciones detalladas.",
  },
  {
    question: "¿Duele o es molesta?",
    answer:
      "No. Se realiza bajo sedación profunda. Tras el procedimiento puedes tener ligera distensión que desaparece en horas.",
  },
  {
    question: "¿Cuánto dura y cómo es la recuperación?",
    answer:
      "Dura 25–45 minutos, con estancia de 3–4 horas. Puedes comer ligero el mismo día y retomar actividades al siguiente. Tras extracción de pólipos grandes, damos cuidados adicionales.",
  },
  {
    question: "¿Qué detecta la colonoscopia?",
    answer:
      "Detecta pólipos, cáncer, colitis, divertículos y causas de diarrea crónica, dolor abdominal o sangrado. Los pólipos pueden retirarse en la misma sesión.",
  },
  {
    question: "¿Cuáles son los riesgos?",
    answer:
      "Son poco comunes: sangrado (más si se retiran pólipos) o perforación (<0.1%). Contamos con anestesiólogo y protocolos hospitalarios para manejo inmediato.",
  },
  {
    question: "¿Colonoscopia tradicional o virtual?",
    answer:
      "La tradicional permite diagnóstico y tratamiento inmediato. La virtual por tomografía no permite biopsia ni extracción de pólipos y suele requerir colonoscopia óptica de todos modos.",
  },
]

// ---------------------------------------------------------------------------
// PANENDOSCOPIA — complete upper GI evaluation
// ---------------------------------------------------------------------------
export const panendoscopiaFaqs: FAQ[] = [
  {
    question: "¿Qué es la panendoscopia y en qué casos se indica?",
    answer:
      "Es una evaluación detallada de esófago, estómago y duodeno cuando hay síntomas complejos, lesiones previas o necesidad de estudio más exhaustivo. Permite biopsias dirigidas y documentación fotográfica amplia para seguimiento.",
  },
  {
    question: "¿Precio y preparación?",
    answer: `Desde ${price("panendoscopia")} con sedación, quirófano y reporte fotográfico. Requiere ayuno 12–14 horas y ajustes de medicamentos según indicación médica.`,
  },
  {
    question: "¿Incluye biopsias o tratamientos?",
    answer:
      "Sí, se toman biopsias cuando está indicado y se realizan terapias simples en la misma sesión. El análisis de patología tiene un costo independiente informado previamente.",
  },
]

// ---------------------------------------------------------------------------
// CPRE — focus on indications, process, risks, recovery, pricing transparency
// ---------------------------------------------------------------------------
export const cpreFaqs: FAQ[] = [
  {
    question: "¿Qué es la CPRE y para qué sirve?",
    answer:
      "La colangiopancreatografía retrógrada endoscópica combina endoscopia y rayos X para diagnosticar y tratar problemas de vías biliares y páncreas, como cálculos, estenosis u obstrucciones con ictericia.",
  },
  {
    question: "¿Cuál es el precio y qué lo modifica?",
    answer: `CPRE diagnóstica desde ${price("cpre")}. El costo aumenta si se realizan esfinterotomía, extracción de cálculos o colocación de prótesis. Cotización previa detallada siempre disponible.`,
  },
  {
    question: "¿Cómo se realiza y cuánto dura?",
    answer:
      "Se efectúa bajo sedación profunda con fluoroscopía. Se canulan los conductos, se obtienen imágenes y, si es necesario, se realiza tratamiento en la misma sesión. La estancia es de 6–24 horas según complejidad.",
  },
  {
    question: "¿Cuáles son los riesgos?",
    answer:
      "Los más descritos son pancreatitis post-procedimiento (2–5%), sangrado o perforación (raros). Utilizamos duodenoscopio Olympus, fluoroscopía digital y antibióticos profilácticos para reducirlos.",
  },
  {
    question: "¿Cómo es la recuperación?",
    answer:
      "Tras una CPRE diagnóstica simple, el alta suele ser el mismo día. Si hubo intervención terapéutica, la hospitalización puede ser de 12–24 horas para vigilancia.",
  },
  {
    question: "¿Cuándo es urgente realizar una CPRE?",
    answer:
      "En colangitis (fiebre, dolor abdominal, ictericia), ictericia obstructiva progresiva o pancreatitis con obstrucción biliar. Son escenarios que requieren manejo inmediato.",
  },
  {
    question: "¿Qué estudios necesito antes?",
    answer:
      "Ultrasonido abdominal, química sanguínea (bilirrubinas, enzimas hepáticas), biometría hemática y estudios de coagulación. Se ajusta según urgencia y condición del paciente.",
  },
]

// ---------------------------------------------------------------------------
// LIGADURA DE VÁRICES ESOFÁGICAS — acute bleeding & secondary prevention
// ---------------------------------------------------------------------------
export const ligaduraFaqs: FAQ[] = [
  {
    question: "¿Qué es y cuándo se indica la ligadura de várices esofágicas?",
    answer:
      "Consiste en colocar bandas elásticas sobre várices del esófago para detener sangrado o prevenirlo en pacientes con hipertensión portal. Se indica en sangrado activo, várices grandes o después de un primer episodio hemorrágico.",
  },
  {
    question: "¿Cómo se realiza y cuántas sesiones se necesitan?",
    answer:
      "Se efectúa con endoscopio terapéutico bajo sedación. Pueden requerirse 2–4 sesiones separadas 2–4 semanas hasta erradicar las várices residuales. Posteriormente se hace vigilancia periódica según el caso clínico.",
  },
  {
    question: "¿Cuidados después del procedimiento?",
    answer:
      "Dieta fría/blanda el primer día, evitar esfuerzos intensos la primera semana y seguir tratamiento indicado (por ejemplo, inhibidor de bomba y betabloqueador). Acudir a control si aparecen dolor intenso, evacuaciones negras o vómito con sangre.",
  },
]

// ---------------------------------------------------------------------------
// LIGADURA DE HEMORROIDES INTERNAS — grades I–II
// ---------------------------------------------------------------------------
export const ligaduraHemorroidesFaqs: FAQ[] = [
  {
    question: "¿Qué es la ligadura de hemorroides internas y para quién está indicada?",
    answer:
      "Colocamos bandas elásticas en la base de las hemorroides internas grado I–II para cortar su irrigación y que se retraigan. Alivia sangrado, molestia y sensación de evacuación incompleta. Los grados III–IV suelen requerir manejo quirúrgico.",
  },
  {
    question: "¿Precio y logística del procedimiento?",
    answer: `Desde ${price("ligadura_hemorroides")}. Es ambulatorio, con sedación consciente, en quirófano. Dura 5–10 minutos y te observamos 1–2 horas. El plan incluye seguimiento sin costo adicional en el primer mes.`,
  },
  {
    question: "¿Cuidados y recuperación?",
    answer:
      "Regreso a actividades en 24–48 horas. Recomendamos fibra, hidratación, baños de asiento y evitar cargar >10 kg por 2–3 semanas. Señales de alarma: sangrado persistente abundante, fiebre o dolor severo.",
  },
]

// ---------------------------------------------------------------------------
// PEG — gastrostomy
// ---------------------------------------------------------------------------
export const gastrostomiaFaqs: FAQ[] = [
  {
    question: "¿Quiénes se benefician de una gastrostomía (PEG)?",
    answer:
      "Pacientes con disfagia prolongada por EVC, cáncer de cabeza y cuello u otras condiciones que impiden la alimentación oral >4–6 semanas. Se valora de forma multidisciplinaria antes del procedimiento.",
  },
  {
    question: "¿Cómo se coloca y cuánto dura?",
    answer:
      "Se coloca por endoscopia bajo sedación. El procedimiento toma 30–45 minutos y generalmente se da alta el mismo día. La sonda suele durar 12–24 meses antes de requerir recambio, con cuidados domiciliarios sencillos.",
  },
  {
    question: "¿Riesgos y seguimiento?",
    answer: `Complicaciones menores: irritación o infección del sitio. Mayores: raras. Ofrecemos profilaxis antibiótica y educación familiar. Precio desde ${price("gastrostomia_peg")} con control inicial incluido.`,
  },
]

// ---------------------------------------------------------------------------
// EXTRACCIÓN DE CUERPOS EXTRAÑOS — urgency messaging
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
      "Pilas botón, objetos punzocortantes, dolor torácico intenso, fiebre, dificultad para deglutir o respirar y saliva excesiva. En esos casos se recomienda atención inmediata para evitar complicaciones.",
  },
  {
    question: "¿Cómo se realiza y qué tasa de éxito tiene?",
    answer:
      "Se usan pinzas, cestas y dispositivos protectores con endoscopio terapéutico. La mayoría de casos se resuelve sin cirugía. La necesidad de fluoroscopía depende del tipo de objeto y su ubicación.",
  },
]

// ---------------------------------------------------------------------------
// DILATACIÓN ESOFÁGICA — concise, align to long-tail (dolor, sesiones, dieta)
// ---------------------------------------------------------------------------
export const dilatacionEsofagicaFaqs: FAQ[] = [
  {
    question: "¿Qué es la dilatación esofágica y para qué sirve?",
    answer:
      "Tratamiento endoscópico para estenosis del esófago que dificulta tragar. Se utilizan balones graduados o bujías bajo sedación para ampliar el paso y mejorar la deglución.",
  },
  {
    question: "¿Duele? ¿Cuántas sesiones se requieren?",
    answer:
      "Se realiza con sedación, por lo que no sientes dolor durante el procedimiento. Muchas estenosis mejoran en 1–3 sesiones; los casos complejos pueden requerir mantenimientos periódicos.",
  },
  {
    question: "Precio, cuidados y alimentación posterior",
    answer: `Desde ${price("dilatacion_esofagica")}. Indicamos líquidos las primeras 24 h y dieta blanda 2–7 días. Reanudación progresiva según tolerancia y recomendaciones personalizadas.`,
  },
  {
    question: "¿Riesgos?",
    answer:
      "Molestia faríngea transitoria y, raramente, sangrado o perforación. Utilizamos material graduado y controlado para minimizar riesgos y damos seguimiento cercano.",
  },
]

// ---------------------------------------------------------------------------
// DILATACIÓN BILIAR
// ---------------------------------------------------------------------------
export const dilatacionBiliarFaqs: FAQ[] = [
  {
    question: "¿Qué es la dilatación biliar y en qué casos se indica?",
    answer:
      "Procedimiento endoscópico (generalmente durante CPRE) que ensancha estenosis en los conductos biliares para restablecer el flujo de bilis. Indicado en estenosis benignas o malignas según valoración.",
  },
  {
    question: "¿Precio y recuperación?",
    answer: `Desde ${price("dilatacion_biliar")}. Observación 2–6 horas y regreso gradual a actividades en 24–48 horas, salvo indicación distinta.`,
  },
  {
    question: "¿Es doloroso o riesgoso?",
    answer:
      "Se realiza con sedación profunda. Los eventos adversos son poco frecuentes y se reducen con guía por fluoroscopía y protocolos hospitalarios de seguridad.",
  },
]

// ---------------------------------------------------------------------------
// DILATACIÓN COLÓNICA
// ---------------------------------------------------------------------------
export const dilatacionColonicaFaqs: FAQ[] = [
  {
    question: "¿Qué es la dilatación colónica endoscópica?",
    answer:
      "Tratamiento con balones para estenosis del colon que enlentecen el tránsito intestinal. Puede realizarse durante colonoscopia terapéutica con sedación y monitoreo.",
  },
  {
    question: "Precio, preparación y recuperación",
    answer: `Desde ${price("dilatacion_colonica")}. Requiere preparación intestinal tipo colonoscopia. Observación 2–4 horas y dieta progresiva, con alta el mismo día en la mayoría de casos.`,
  },
  {
    question: "¿Riesgos y repetición del procedimiento?",
    answer:
      "El sangrado o la perforación son poco frecuentes. En re-estenosis puede repetirse la dilatación en sesiones posteriores, según evolución clínica y endoscópica.",
  },
]

// ---------------------------------------------------------------------------
// ENDOPRÓTESIS — esofágicas, biliares, duodenales, colónicas
// ---------------------------------------------------------------------------
export const endoprotesisEsofagicasFaqs: FAQ[] = [
  {
    question: "¿Cuándo se indica una endoprótesis esofágica?",
    answer:
      "En obstrucción maligna, fístulas, perforaciones controladas o estenosis benignas recurrentes. Mejora la deglución de forma rápida y puede ser parte de un plan paliativo o puente a cirugía.",
  },
  {
    question: "¿Cómo se coloca y qué cuidados requiere?",
    answer:
      "Se coloca bajo sedación y guía endoscópica/fluoroscópica. Recomendamos masticar bien, evitar alimentos muy fibrosos y mantener hidratación con comidas. Indicamos control endoscópico según evolución.",
  },
]

export const endoprotesisBiliaresFaqs: FAQ[] = [
  {
    question: "¿Para qué sirve un stent biliar?",
    answer:
      "Para drenar la bilis cuando hay obstrucción por cálculos, estenosis o tumores. Reduce ictericia y síntomas, y puede ser temporal (plástico) o de mayor duración (metálico).",
  },
  {
    question: "¿Cómo es el seguimiento?",
    answer:
      "Control clínico y de laboratorios. Los stents plásticos suelen recambiarse cada 3–6 meses; los metálicos requieren vigilancia por posible re-estenosis. Indicamos nueva CPRE si hay fiebre o ictericia recurrente.",
  },
]

export const endoprotesisDuodenalesFaqs: FAQ[] = [
  {
    question: "¿Qué es una prótesis duodenal y quién la necesita?",
    answer:
      "Stent metálico para aliviar obstrucciones del duodeno (por tumores o estenosis). Facilita volver a comer por boca y puede evitar una cirugía mayor en casos seleccionados.",
  },
  {
    question: "¿Qué esperar tras la colocación?",
    answer:
      "Mejora del vómito y distensión en 24–48 horas. Dieta modificada con porciones pequeñas y seguimiento para verificar posición y permeabilidad del stent.",
  },
]

export const endoprotesisColonicasFaqs: FAQ[] = [
  {
    question: "¿Cuándo usar un stent colónico?",
    answer:
      "En obstrucción aguda por tumor o estenosis posquirúrgica. Permite descompresión y preparación para cirugía electiva o paliación según el caso oncológico.",
  },
  {
    question: "¿Cómo se coloca y qué resultados ofrece?",
    answer:
      "Se coloca durante colonoscopia con guía fluoroscópica. Suele aliviar la obstrucción en pocas horas y reducir la necesidad de colostomía de urgencia.",
  },
]

// ---------------------------------------------------------------------------
// ESCLEROSIS DE VÁRICES GÁSTRICAS
// ---------------------------------------------------------------------------
export const esclerosisVaricesGastricasFaqs: FAQ[] = [
  {
    question: "¿Qué es la esclerosis de várices gástricas y cuándo se indica?",
    answer:
      "Es la inyección endoscópica de un agente (p. ej., cianoacrilato) dentro de várices del estómago para controlar o prevenir sangrado. Se indica en sangrado activo o várices gástricas grandes con alto riesgo.",
  },
  {
    question: "¿Cómo se realiza y qué cuidados necesito después?",
    answer:
      "Se efectúa bajo sedación con control endoscópico directo. Tras el procedimiento se indica observación, inhibidor de bomba y dieta blanda. Realizamos vigilancia para detectar resangrado temprano.",
  },
  {
    question: "¿Qué riesgos existen?",
    answer:
      "Dolor transitorio, fiebre y, raramente, embolización o perforación. Minimiza riesgos un volumen de inyección controlado y seguimiento hospitalario.",
  },
]

// ---------------------------------------------------------------------------
// CIERRE DE FÍSTULAS CON CLIPS
// ---------------------------------------------------------------------------
export const cierreFistulasFaqs: FAQ[] = [
  {
    question: "¿Qué fístulas o perforaciones pueden cerrarse con clips?",
    answer:
      "Defectos pequeños o de bajo débito en esófago, estómago o colon, fístulas gastro-cutáneas y dehiscencias tempranas. La selección depende del tamaño, localización y condiciones generales.",
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
      "En defectos >2 cm, cierres bajo tensión o anatomías complejas en las que los clips no son suficientes. Evita cirugía abierta en casos seleccionados y requiere equipo especializado.",
  },
  {
    question: "¿Cómo es la recuperación?",
    answer:
      "Generalmente se indica ayuno inicial con progresión de dieta y vigilancia estrecha. Valoramos en consulta la necesidad de controles endoscópicos para confirmar cicatrización completa.",
  },
]

// ---------------------------------------------------------------------------
// ESD — endoscopic submucosal dissection
// ---------------------------------------------------------------------------
export const esdFaqs: FAQ[] = [
  {
    question: "¿Qué es la disección endoscópica submucosa (ESD)?",
    answer:
      "Técnica avanzada que permite resecar en una sola pieza lesiones tempranas del tubo digestivo, preservando el órgano. Indicada en casos seleccionados tras valoración endoscópica y patológica.",
  },
  {
    question: "Precio, recuperación y seguimiento",
    answer:
      "El costo depende del tamaño y localización de la lesión, los materiales y el tiempo de quirófano. La recuperación suele ser de 24–48 h con dieta progresiva. Requiere control histopatológico y endoscópico para confirmar curación.",
  },
  {
    question: "¿ESD o EMR?",
    answer:
      "La EMR es adecuada para lesiones pequeñas y elevables; la ESD permite resección en-bloc de lesiones más grandes o con características complejas. Elegimos la técnica según tamaño, localización y riesgo.",
  },
]

// ---------------------------------------------------------------------------
// EMR — endoscopic mucosal resection
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
      "Se inyecta solución submucosa para elevar la lesión y se reseca con asa. Damos hemostasia preventiva cuando es necesario. Indicamos dieta progresiva y control endoscópico para vigilar el sitio de resección.",
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
    question: "¿Cómo se retira y qué esperar después?",
    answer:
      "Se punciona y aspira su contenido por endoscopia bajo sedación y luego se extrae colapsado. Toma 15–30 minutos y el alta suele ser el mismo día. Indicamos dieta líquida 24 h y seguimiento nutricional.",
  },
]

// ---------------------------------------------------------------------------
// APC — argon plasma coagulation
// ---------------------------------------------------------------------------
export const apcFaqs: FAQ[] = [
  {
    question: "¿Para qué sirve la coagulación con plasma de argón (APC)?",
    answer:
      "Para tratar lesiones vasculares sangrantes, control hemostático pos-resección y otras lesiones superficiales. Produce coagulación controlada sin contacto directo y con penetración limitada.",
  },
  {
    question: "¿Cuántas sesiones y qué cuidados necesito?",
    answer:
      "Depende de la extensión de la lesión y la respuesta clínica. Suele indicarse inhibidor de bomba de protones y dieta blanda 24–48 h. Programamos revisiones para evaluar cicatrización y necesidad de nuevas sesiones.",
  },
]

// ---------------------------------------------------------------------------
// Route map (kept stable)
// ---------------------------------------------------------------------------
const BY_ROUTE: Partial<Record<RouteKey, FAQ[]>> = {
  home: homeFaqs,
  endoscopia: endoscopiaFaqs,
  colonoscopia: colonoscopiaFaqs,
  panendoscopia: panendoscopiaFaqs,
  cpre: cpreFaqs,
  ligadura: ligaduraFaqs,
  ligadura_hemorroides: ligaduraHemorroidesFaqs,
  peg: gastrostomiaFaqs,
  extraccion: extraccionFaqs,
  dilatacion: dilatacionEsofagicaFaqs,
  esclerosis_varices_gastricas: esclerosisVaricesGastricasFaqs,
  dilatacion_biliar: dilatacionBiliarFaqs,
  dilatacion_colonica: dilatacionColonicaFaqs,
  endoprotesis_esofagicas: endoprotesisEsofagicasFaqs,
  endoprotesis_biliares: endoprotesisBiliaresFaqs,
  endoprotesis_duodenales: endoprotesisDuodenalesFaqs,
  endoprotesis_colonicas: endoprotesisColonicasFaqs,
  cierre_fistulas_clips: cierreFistulasFaqs,
  sutura_endoscopica: suturaEndoscopicaFaqs,
  esd: esdFaqs,
  emr: emrFaqs,
  retiro_balon_gastrico: retiroBalonFaqs,
  apc: apcFaqs,
}

export function getFaqsFor(route: RouteKey): FAQ[] {
  return BY_ROUTE[route] ?? []
}
