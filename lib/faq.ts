// /lib/faq.ts
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


// ------------------------------
// HOME / GENERAL
// ------------------------------
// OPTIMIZED FOR AUTHORITY + CONVERSION - 75-125 words per answer

// HOME FAQs - Build overall authority while addressing patient intent
export const homeFaqs: FAQ[] = [
  {
    question: "¿Por qué elegir endoscopia en Mérida sobre otras ciudades de Yucatán?",
    answer:
      "En Mérida tenemos Hospital Amerimed con equipo Olympus HD y anestesiólogos certificados, ventajas que no encuentras en Valladolid o Progreso. Dr. Omar tiene 15+ años realizando endoscopias y colonoscopias en Mérida, con pacientes de García Ginerés, Cholul y Francisco de Montejo. Ofrecemos sedación profunda, reportes digitales inmediatos y seguimiento personalizado. La combinación de experiencia, tecnología y ubicación céntrica nos posiciona como referentes en endoscopia digestiva en Yucatán."
  },
  {
    question: "¿Cuánto cuestan los procedimientos endoscópicos en Mérida, Yucatán?",
    answer: `Precios transparentes: endoscopia ${price("endoscopia")}, colonoscopia ${price("colonoscopia")}, CPRE ${price("cpre")}. Incluyen sedación profunda, quirófano y equipo especializado. Muchos seguros médicos en Mérida cubren estos procedimientos. Ofrecemos planes de pago flexibles y cotización previa gratuita. Somos competitivos con otros centros endoscópicos en Mérida manteniendo la más alta calidad en Hospital Amerimed.`
  },
  {
    question: "¿Qué procedimientos endoscópicos realizan en Hospital Amerimed, Mérida?",
    answer:
      "Realizamos endoscopia digestiva alta, colonoscopia, panendoscopia, CPRE, ligadura de várices, gastrostomía PEG, extracción de cuerpos extraños, dilataciones esofágicas y colónicas, colocación de endoprótesis, EMR, ESD y coagulación con plasma de argón. Todos con sedación monitorizada y equipo Olympus de última generación. Somos el centro más completo de endoscopia terapéutica en Mérida, Yucatán."
  },
  {
    question: "¿Atienden emergencias endoscópicas fines de semana en Mérida?",
    answer:
      "Sí, ofrecemos atención de emergencias digestivas 24/7 incluyendo fines de semana en Hospital Amerimed, Mérida. Hemorragias digestivas, obstrucciones, extracción urgente de cuerpos extraños y CPRE de emergencia. Somos uno de los pocos centros en Mérida con disponibilidad completa para urgencias endoscópicas. Contacto directo (999) 236-0153 para emergencias."
  },
  {
    question: "¿Dónde está ubicado el centro de endoscopia en Mérida?",
    answer:
      "Hospital Amerimed Mérida, Consultorio 517, Chichí Suárez, 97306 Mérida, Yuc. Fácil acceso desde García Ginerés, Cholul, Francisco de Montejo y Centro Histórico. Estacionamiento gratuito disponible. Transporte público: autobuses de periférico y rutas hacia Chichí Suárez. Ubicación estratégica para pacientes de toda la zona metropolitana de Mérida y municipios cercanos como Umán, Kanasín y Progreso."
  },
]

// ENDOSCOPY FAQs - Technical authority + patient concerns
export const endoscopiaFaqs: FAQ[] = [
  {
    question: "¿Qué equipo endoscópico utilizan en Mérida para los estudios?",
    answer:
      "Utilizamos endoscopios Olympus 190 HD con tecnología de imagen avanzada, el estándar internacional para endoscopia digestiva. Sistema de desinfección automática con glutaraldehído y procesador de imágenes de alta definición. Este equipo permite detectar lesiones mínimas que equipos básicos no identifican. Somos el único centro en Mérida con tecnología Olympus completa para endoscopia diagnóstica y terapéutica."
  },
  {
    question: "¿Qué sedación usan para endoscopia en Hospital Amerimed, Mérida?",
    answer:
      "Sedación profunda intravenosa administrada por anestesiólogo certificado, no sedación consciente básica. Monitoreo continuo de signos vitales, oximetría y presión arterial durante todo el procedimiento. El anestesiólogo evalúa a cada paciente individualmente. Esta sedación garantiza que no sientas molestias y tengas recuperación rápida sin náuseas. Protocolo de seguridad hospitalario completo."
  },
  {
    question: "¿Cuándo recibo los resultados de mi endoscopia en Mérida?",
    answer:
      "Resultados preliminares al despertar con fotos digitales enviadas a tu celular. Reporte completo en 24-48 horas por email con interpretación detallada. Si requieres biopsias, resultados de patología en 5-7 días laborables. Incluimos recomendaciones de tratamiento y seguimiento. Consulta de revisión de resultados incluida sin costo adicional. Disponibilidad por WhatsApp para resolver dudas sobre tu reporte."
  },
  {
    question: "¿Qué preparación necesito para una endoscopia en Mérida?",
    answer:
      "Ayuno completo 12 horas antes del estudio (sin alimentos ni líquidos). Suspender anticoagulantes según indicación médica previa. Acudir con acompañante mayor de edad. No manejar 6 horas posteriores por sedación. Lista específica de medicamentos permitidos se proporciona al agendar cita. Instrucciones detalladas por WhatsApp antes del procedimiento para óptima preparación."
  },
  {
    question: "¿Qué condiciones diagnostica la endoscopia digestiva en Mérida?",
    answer:
      "Gastritis (helicobacter pylori), úlceras gástricas y duodenales, reflujo gastroesofágico, esofagitis, pólipos gástricos, tumores benignos y malignos, várices esofágicas, estenosis esofágicas y sangrados digestivos altos. También evaluamos síntomas como disfagia, dolor epigástrico, náuseas persistentes y pérdida de peso. Biopsia inmediata de lesiones sospechosas con resultados de patología especializados."
  },
  {
    question: "¿Realizan tratamientos durante la endoscopia en Mérida?",
    answer:
      "Sí, endoscopia terapéutica completa: control de hemorragias con clips y electrocauterio, dilatación de estenosis esofágicas, extracción de pólipos (polipectomía), colocación de endoprótesis, ligadura de várices esofágicas, gastrostomía percutánea y resección endoscópica de mucosa (EMR). Procedimientos avanzados en una sola sesión evitando múltiples intervenciones. Equipo especializado para endoscopia diagnóstica y terapéutica."
  },
  {
    question: "¿Cuáles son los riesgos de la endoscopia en Hospital Amerimed?",
    answer:
      "Procedimiento muy seguro con menos de 0.1% de complicaciones en nuestra experiencia. Riesgos mínimos: reacción a sedación, sangrado menor (si hay biopsia), perforación (extremadamente raro). Protocolos hospitalarios estrictos, anestesiólogo dedicado y equipo de urgencias disponible minimizan cualquier riesgo. Dr. Omar tiene más de 5000 endoscopias realizadas sin complicaciones mayores. Seguridad hospitalaria completa."
  },
]

// COLONOSCOPY FAQs - Cancer prevention authority + logistics
export const colonoscopiaFaqs: FAQ[] = [
  {
    question: "¿A partir de qué edad debo hacerme colonoscopia en Mérida?",
    answer:
      "Colonoscopia de tamizaje desde los 45 años según nuevas guías internacionales, anteriormente era 50 años. Con antecedentes familiares de cáncer colorrectal, iniciar 10 años antes del diagnóstico del familiar o a los 40 años (lo que ocurra primero). Síntomas como sangrado rectal, cambios en hábitos intestinales o dolor abdominal requieren colonoscopia independiente de la edad."
  },
  {
    question: "¿Qué preparación intestinal usan para colonoscopia en Mérida?",
    answer:
      "Preparación con polietilenglicol (PEG) de mejor tolerancia que preparaciones antiguas. Dieta líquida 24 horas previas, solución preparatoria dividida en dos dosis para mejor limpieza. Instrucciones específicas incluyen horarios exactos, líquidos permitidos y medicamentos a suspender. Preparación inadecuada obliga reprogramar el estudio. Seguimiento telefónico disponible para resolver dudas sobre preparación."
  },
  {
    question: "¿Qué es la polipectomía durante colonoscopia en Mérida?",
    answer:
      "Extracción de pólipos del colon durante la misma colonoscopia usando asa diatérmica o pinzas especializadas. Pólipos menores de 5mm se extraen inmediatamente sin costo adicional. Pólipos mayores requieren técnicas avanzadas con sedación profunda. Todos los pólipos se envían a patología para confirmar benignidad. La polipectomía previene cáncer colorrectal eliminando lesiones precancerosas."
  },
  {
    question: "¿Con qué frecuencia repetir la colonoscopia en Mérida?",
    answer:
      "Colonoscopia normal sin pólipos: cada 10 años. Con pólipos adenomatosos pequeños: cada 3-5 años. Pólipos grandes o múltiples: seguimiento anual. Antecedentes familiares de cáncer: cada 5 años máximo. Enfermedad inflamatoria intestinal: vigilancia anual especializada. Plan de seguimiento personalizado según hallazgos específicos y factores de riesgo individuales."
  },
  {
    question: "¿Detectan cáncer colorrectal temprano con colonoscopia en Mérida?",
    answer:
      "La colonoscopia detecta 95% de cánceres colorrectales y pólipos precancerosos. Identificamos lesiones en etapas tempranas cuando tratamiento es más efectivo. Tecnología HD permite visualizar cambios mínimos en mucosa colónica. Biopsia inmediata de lesiones sospechosas. Diagnóstico temprano mejora significativamente pronóstico y opciones terapéuticas. Referencia directa a oncólogos especializados si necesario."
  },
  {
    question: "¿Qué síntomas requieren colonoscopia urgente en Mérida?",
    answer:
      "Sangrado rectal persistente, cambio súbito en hábitos intestinales, dolor abdominal intenso, pérdida de peso inexplicable, anemia por deficiencia de hierro, antecedente familiar de cáncer colorrectal antes de 50 años. Estos síntomas requieren evaluación inmediata independiente de la edad. Disponibilidad para casos urgentes en Hospital Amerimed con prioridad en agenda."
  },
  {
    question: "¿Realizan colonoscopia virtual en Mérida o solo tradicional?",
    answer:
      "Realizamos colonoscopia tradicional (óptica) con sedación profunda, que es el estándar dorado para detección de cáncer colorrectal. La colonoscopia virtual (tomografía) no permite tomar biopsias ni extraer pólipos en el mismo procedimiento. La colonoscopia óptica ofrece diagnóstico y tratamiento simultáneo con mayor precisión. No ofrecemos colonoscopia virtual por limitaciones terapéuticas."
  },
]

// ------------------------------
// PANENDOSCOPIA (3)
// ------------------------------

// PANENDOSCOPIA FAQs - Complete digestive evaluation authority
export const panendoscopiaFaqs: FAQ[] = [
  {
    question: "¿Qué diferencia hay entre panendoscopia y endoscopia simple en Mérida?",
    answer:
      "La panendoscopia evalúa todo el tracto digestivo superior (esófago, estómago, duodeno) de forma más detallada que endoscopia simple. Incluye maniobras especializadas para detectar lesiones en áreas difíciles como cardias gástrico y bulbo duodenal. Tiempo de procedimiento extendido (25-30 minutos vs 15-20) con documentación fotográfica exhaustiva. Ideal para síntomas complejos o seguimiento oncológico especializado."
  },
  {
    question: "¿Cuándo está indicada la panendoscopia en lugar de endoscopia en Mérida?",
    answer:
      "Síntomas digestivos múltiples (dolor epigástrico + disfagia + pérdida de peso), antecedentes familiares de cáncer gástrico, seguimiento post-gastrectomía, evaluación pre-quirúrgica bariátrica, anemia ferropénica sin causa clara, o cuando endoscopia previa fue incompleta. También para mapeo de lesiones antes de cirugía o segunda opinión especializada. Dr. Omar determina necesidad según historia clínica detallada."
  },
  {
    question: "¿Qué preparación especial requiere la panendoscopia en Mérida?",
    answer:
      "Ayuno estricto 12-14 horas (2 horas adicionales vs endoscopia simple) para visualización óptima. Suspender inhibidores de bomba de protones 5 días previos si evalúa gastritis por helicobacter. Medicamentos anticoagulantes requieren manejo especializado. Historia clínica completa incluyendo síntomas, antecedentes familiares y estudios previos. Acompañante obligatorio por sedación profunda extendida. Instrucciones detalladas por WhatsApp al agendar."
  },
  {
    question: "¿Incluye biopsia la panendoscopia en Hospital Amerimed, Mérida?",
    answer:
      "Sí, incluye biopsias múltiples según protocolo Sydney para helicobacter pylori (antro y cuerpo gástrico), evaluación de displasia gástrica, muestras duodenales para enfermedad celíaca si indicado, y biopsia dirigida de lesiones sospechosas. Hasta 6-8 muestras sin costo adicional. Procesamiento en laboratorio de patología certificado con reporte especializado en 5-7 días. Seguimiento incluido para discutir resultados histológicos."
  },
]

// CPRE FAQs - Advanced biliary procedure authority
export const cpreFaqs: FAQ[] = [
  {
    question: "¿Qué es CPRE y cuándo se necesita en Hospital Amerimed, Mérida?",
    answer:
      "Colangiopancreatografía Retrógrada Endoscópica - procedimiento que combina endoscopia y rayos X para diagnosticar y tratar problemas de vías biliares y páncreas. Indicada para cálculos en colédoco, ictericia obstructiva, pancreatitis por litiasis, estenosis biliares y colocación de endoprótesis. Única técnica que permite tratamiento inmediato durante diagnóstico. Dr. Omar es especialista certificado en CPRE terapéutica con experiencia en casos complejos."
  },
  {
    question: "¿Qué riesgos tiene la CPRE en Mérida y cómo los minimizan?",
    answer:
      "Riesgos principales: pancreatitis post-CPRE (2-5%), sangrado menor, perforación duodenal (raro). En Hospital Amerimed minimizamos riesgos con: duodenoscopio Olympus TJF-Q190V, fluoroscopio digital, anestesiólogo dedicado, antibióticos profilácticos y observación hospitalaria 6-12 horas. Dr. Omar tiene más de 500 CPRE realizadas con tasa de complicaciones bajo promedio internacional. Protocolo de seguridad estricto y manejo inmediato de complicaciones."
  },
  {
    question: "¿Cuánto cuesta CPRE completa en Mérida incluyendo tratamientos?",
    answer: `CPRE diagnóstica desde ${price("cpre")}, tratamientos adicionales según hallazgos: esfinterotomía biliar $8,000-12,000 MXN adicionales, extracción de cálculos $5,000-8,000 MXN, colocación de endoprótesis biliar $15,000-25,000 MXN según tipo. Cotización completa antes del procedimiento basada en estudios previos. Muchos seguros cubren CPRE como procedimiento médicamente necesario. Facilidades de pago disponibles para casos complejos.`
  },
  {
    question: "¿Realizan CPRE de emergencia fines de semana en Mérida?",
    answer:
      "Sí, disponibilidad 24/7 para emergencias biliares en Hospital Amerimed: colangitis aguda (fiebre + ictericia + dolor), pancreatitis severa por cálculos, ictericia obstructiva progresiva. Equipo de fluoroscopía disponible fines de semana y días festivos. Anestesiólogo de guardia especializado. Contacto directo (999) 236-0153 para emergencias biliares. Coordinación con UCI si requiere manejo post-procedimiento complejo."
  },
  {
    question: "¿Qué estudios necesito antes de CPRE en Mérida?",
    answer:
      "Ultrasonido abdominal, química sanguínea completa (bilirrubinas, transaminasas, fosfatasa alcalina), biometría hemática, tiempos de coagulación (TP, TPT, INR), tomografía abdominal o resonancia magnética (colangioRM) preferentemente. Evaluación pre-anestésica y electrocardiograma. Historia clínica detallada incluyendo alergias y medicamentos. Ayuno 8-12 horas. Suspensión de anticoagulantes según protocolo. Estudios pueden realizarse el mismo día si es emergencia."
  },
  {
    question: "¿Cuánto tiempo de hospitalización requiere CPRE en Mérida?",
    answer:
      "CPRE diagnóstica simple: observación 4-6 horas con alta el mismo día. CPRE terapéutica (esfinterotomía, extracción cálculos): hospitalización 12-24 horas para vigilar pancreatitis. Casos complejos o pacientes de alto riesgo: 24-48 horas según evolución. Colocación de endoprótesis: generalmente ambulatorio. Manejo del dolor post-procedimiento y dieta progresiva bajo supervisión médica en Hospital Amerimed."
  },
  {
    question: "¿Qué ventajas tiene CPRE sobre cirugía biliar abierta en Mérida?",
    answer:
      "CPRE evita cirugía mayor en 80-90% de casos de cálculos en colédoco. Sin incisiones, recuperación inmediata, menor riesgo anestésico, preserva vesícula biliar si está sana, menor costo hospitalario y regreso rápido a actividades. Para estenosis biliares, permite dilatación y colocación de prótesis sin cirugía reconstructiva. Ideal para pacientes de alto riesgo quirúrgico o ancianos. Combinable con laparoscopia biliar cuando necesario."
  },
]

// LIGADURA DE VÁRICES FAQs - Emergency bleeding control authority
export const ligaduraFaqs: FAQ[] = [
  {
    question: "¿Qué son las várices esofágicas y por qué sangran en Mérida?",
    answer:
      "Várices esofágicas son venas dilatadas en el esófago causadas por cirrosis hepática e hipertensión portal. Sangran cuando la presión aumenta por: alcohol, infecciones, esfuerzo físico, medicamentos nefrotóxicos o descompensación hepática. En Yucatán vemos muchos casos por alcoholismo crónico y hepatitis. Sangrado masivo puede ser mortal sin tratamiento inmediato. La ligadura preventiva reduce riesgo de hemorragia en 60-80%."
  },
  {
    question: "¿Cuándo está indicada la ligadura de várices en Hospital Amerimed?",
    answer:
      "Indicaciones: sangrado activo de várices (emergencia), várices grandes sin sangrado previo (prevención primaria), después de primer episodio hemorrágico (prevención secundaria), como puente antes de trasplante hepático. Evaluación endoscópica urgente en hemorragia digestiva alta con sospecha de origen variceal. Protocolo de sedación segura en pacientes cirróticos con anestesiólogo especializado en hepatopatías."
  },
  {
    question: "¿Cómo se realiza la ligadura endoscópica de várices en Mérida?",
    answer:
      "Procedimiento bajo sedación profunda con endoscopio terapéutico. Se colocan bandas elásticas que comprimen las várices hasta su obliteración. Técnica secuencial desde unión gastroesofágica hacia arriba, 4-8 bandas por sesión según tamaño variceal. Control hemostático inmediato en sangrado activo. Monitoreo post-procedimiento para detectar resangrado temprano. Equipo especializado y disponibilidad de productos sanguíneos en Hospital Amerimed."
  },
  {
    question: "¿Cuántas sesiones de ligadura necesito y cada cuánto en Mérida?",
    answer:
      "Erradicación completa requiere 2-4 sesiones separadas cada 2-4 semanas hasta obliteración total. Primera sesión controla sangrado agudo, sesiones subsecuentes eliminan várices residuales. Endoscopia de control a las 6-8 semanas post-erradicación, luego cada 6-12 meses según grado de hipertensión portal. Pacientes con várices grandes requieren vigilancia endoscópica más frecuente. Plan individualizado según Child-Pugh y MELD."
  },
  {
    question: "¿Qué cuidados necesito después de ligadura de várices en Mérida?",
    answer:
      "Post-procedimiento inmediato: dieta líquida fría 24 horas, inhibidores de bomba de protones intravenosos, evitar esfuerzos y tos violenta primera semana. Medicamentos: betabloqueadores para reducir presión portal, lactuosa si hay encefalopatía. Control de función hepática y coagulación. Evitar alcohol completamente. Signos de alarma: vómito con sangre, evacuaciones negras, dolor torácico. Seguimiento hepatológico continuo."
  },
  {
    question: "¿Atienden emergencias por sangrado de várices 24/7 en Mérida?",
    answer:
      "Sí, Hospital Amerimed tiene protocolo de emergencia 24/7 para hemorragia digestiva alta. Resucitación inicial, tipificación sanguínea urgente, disponibilidad inmediata de concentrados eritrocitarios, endoscopia de emergencia en menos de 2 horas. Dr. Omar disponible para ligadura urgente fines de semana y días festivos. Coordinación con hepatólogo y unidad de cuidados intensivos. Contacto directo (999) 236-0153 para emergencias hemorrágicas."
  },
  {
    question: "¿Qué tan efectiva es la ligadura vs otras opciones en Mérida?",
    answer:
      "Ligadura endoscópica tiene 85-95% efectividad para control de sangrado agudo y 90% para prevención de resangrado. Superior a escleroterapia (menor tasa de complicaciones) y menos invasiva que shunt quirúrgico. Alternativa a TIPS (shunt intrahepático) en pacientes seleccionados. Mortalidad menor al 5% en manos expertas vs 30-50% sin tratamiento. Primera línea de tratamiento en várices esofágicas según guías internacionales."
  },
]

// ------------------------------
// SECONDARY / ADVANCED SERVICES
// ------------------------------
// ADVANCED PROCEDURES FAQs - Specialized interventions authority

// GASTROSTOMÍA PEG
export const gastrostomiaFaqs: FAQ[] = [
  {
    question: "¿Qué pacientes necesitan gastrostomía PEG en Mérida?",
    answer:
      "Pacientes con disfagia severa post-ACV, cáncer de cabeza y cuello, demencia avanzada, anorexia nerviosa severa, trauma facial extenso, quemaduras orofaríngeas, esclerosis lateral amiotrófica (ELA), o cualquier condición que impida alimentación oral por más de 4-6 semanas. Evaluación nutricional previa determina necesidad. Procedimiento ambulatorio en Hospital Amerimed con seguimiento nutricional especializado post-colocación."
  },
  {
    question: "¿Cómo se coloca la sonda PEG y cuánto dura en Mérida?",
    answer:
      "Colocación endoscópica percutánea bajo sedación profunda, técnica pull-through con gastroscopia simultánea. Incisión mínima en pared abdominal (1cm), sin cirugía abierta. Procedimiento 30-45 minutos con alta el mismo día. Sonda PEG dura 12-24 meses antes de reemplazo. Primera alimentación 4-6 horas post-procedimiento. Cuidados domiciliarios sencillos con capacitación familiar incluida. Dr. Omar tiene experiencia en más de 200 gastrostomías."
  },
  {
    question: "¿Qué complicaciones tiene la gastrostomía PEG en Mérida?",
    answer: `Complicaciones menores (5-10%): infección sitio inserción, granuloma periostoma, fuga peri-tubo. Complicaciones mayores (menos 2%): peritonitis, sangrado, perforación colónica. En Hospital Amerimed minimizamos riesgos con: técnica estéril, antibiótico profiláctico, gastroscopia simultánea para visualización óptima. Seguimiento post-procedimiento y educación familiar reduce complicaciones tardías. Costo desde ${price("gastrostomia_peg")} con seguimiento incluido.`
  },
]

// EXTRACCIÓN DE CUERPOS EXTRAÑOS
export const extraccionFaqs: FAQ[] = [
  {
    question: "¿Qué objetos extraños extraen por endoscopia en Mérida?",
    answer:
      "Objetos alimentarios (huesos, espinas pescado, semillas), monedas, pilas botón, juguetes pequeños, dentaduras postizas, medicamentos empacados, objetos metálicos punzocortantes, tapas botella, clips, alfileres. Localización frecuente: esófago distal, estómago, duodeno. Tiempo crítico especialmente con pilas (causticación) y objetos punzocortantes (perforación). Disponibilidad 24/7 en Hospital Amerimed para extracciones urgentes."
  },
  {
    question: "¿Cuándo es urgente la extracción de cuerpos extraños en Mérida?",
    answer:
      "Emergencia inmediata: pilas botón (2-4 horas máximo), objetos punzocortantes, signos obstructivos (disfagia absoluta, sialorrea), dolor torácico intenso, fiebre, dificultad respiratoria. Semi-urgente (6-12 horas): objetos esofágicos impactados, monedas en niños. Objetos gástricos pequeños pueden observarse 24-48 horas si asintomático. Evaluación radiológica inicial determina urgencia y abordaje endoscópico vs quirúrgico."
  },
  {
    question: "¿Qué instrumentos usan para extracciones endoscópicas en Mérida?",
    answer:
      "Arsenal especializado: pinzas atrapa-objetos, cestas de extracción Dormia, pinzas cocodrilo, asas polipectomía, magnetos para metales, capuchones protectores para objetos punzocortantes, overtubes esofágicos. Endoscopio terapéutico de canal ancho (3.7mm) permite paso de instrumentos grandes. Fluoroscopía disponible para objetos radiopacos. Técnicas avanzadas: inversión gástrica, fragmentación controlada. Éxito 95% sin cirugía."
  },
]


export const dilatacionEsofagicaFaqs: FAQ[] = [
  {
    question: "¿Qué es la dilatación esofágica y para qué sirve?",
    answer:
      "Es un procedimiento endoscópico en Mérida que trata estenosis o estrechamientos del esófago, mejorando la deglución.",
  },
  {
    question: "¿Cuánto cuesta la dilatación esofágica en Mérida, Yucatán?",
    answer:
      "El precio depende del grado de estenosis y material utilizado. Se cotiza antes del procedimiento con transparencia.",
  },
  {
    question: "¿Dónde se realiza la dilatación esofágica en Mérida?",
    answer:
      "En Hospital Amerimed, Mérida, Yucatán, con endoscopio especializado y anestesiólogo certificado.",
  },
  {
                question: "¿Duele la dilatación esofágica en Mérida?",
                answer: "No, el procedimiento se realiza bajo sedación profunda por anestesiólogo. No sientes dolor durante la dilatación esofágica. Después puede haber molestia leve en garganta que mejora en 24-48 horas. El costo en Mérida incluye sedación completa sin dolor."
              },
              {
                question: "¿Cuántas sesiones de dilatación esofágica necesito?",
                answer: "La mayoría de pacientes necesitan 1-3 sesiones dependiendo del grado de estenosis. En estenosis leves, una sola dilatación es suficiente. El precio en Mérida es por sesión, evaluamos necesidad de procedimientos adicionales en seguimiento incluido."
              },
              {
                question: "¿Cuándo puedo comer normal después de dilatación esofágica?",
                answer: "Progresión dietética gradual: líquidos primeras 24h, dieta blanda días 2-7, dieta normal semana 2 si toleras bien. El costo en Mérida incluye plan nutricional personalizado y seguimiento dietético sin costo extra."
              },
              {
                question: "¿Hay riesgo de perforación en dilatación esofágica?",
                answer: "El riesgo es muy bajo (<1%) usando balones graduados Olympus con fluoroscopía. Dr. Omar Quiroz tiene experiencia en cientos de dilataciones sin perforaciones. Precio Mérida incluye equipamiento que minimiza riesgos."
              },
              {
                question: "¿La dilatación esofágica es permanente?",
                answer: "Resultados duran años en la mayoría de pacientes. En algunos casos puede necesitarse dilatación de mantenimiento cada 1-2 años. El costo de seguimiento en Mérida incluye evaluaciones periódicas para detectar temprano reestenosis."
              },
              {
                question: "¿Puedo tomar mis medicamentos después de dilatación esofágica?",
                answer: "Sí, puedes continuar medicamentos habituales. Algunos medicamentos se ajustan temporalmente los primeros días. El precio en Mérida incluye revisión completa medicamentos y ajustes necesarios sin costo adicional."
              },
              {
                question: "¿Cuándo veo mejoría después de dilatación esofágica?",
                answer: "Mejoría inmediata en disfagia desde el mismo día del procedimiento. Reducción notable dificultad para tragar desde primera comida después de dilatación. Costo Mérida incluye evaluación mejoría inmediata."
              },
              {
                question: "¿Hay restricciones después de dilatación esofágica Mérida?",
                answer: "Primeras 48h: evitar alimentos duros, calientes o muy condimentados. Semana 1: masticar bien, comer despacio. Después: dieta normal progresiva. Precio incluye indicaciones detalladas y seguimiento sin restricciones de consultas."
              },
]

export const dilatacionBiliarFaqs: FAQ[] = [
  // Your existing FAQs (enhanced with SEO)
  {
    question: "¿Qué es la dilatación biliar endoscópica?",
    answer:
      "Es un procedimiento endoscópico especializado realizado en Mérida para abrir conductos biliares estrechos mediante balones de dilatación. La dilatación biliar puede realizarse durante CPRE o como procedimiento independiente en Hospital Amerimed, Mérida, Yucatán.",
  },
  {
    question: "¿Cuánto cuesta la dilatación biliar en Mérida, Yucatán?",
    answer:
      "El costo de dilatación biliar en Mérida inicia desde $25,000 MXN, pero el precio final se determina por la complejidad del caso y material utilizado. Cotización previa gratuita siempre disponible en Hospital Amerimed.",
  },
  {
    question: "¿Dónde se realiza la dilatación biliar en Mérida?",
    answer:
      "En Hospital Amerimed, Mérida, Yucatán, con duodenoscopio especializado y fluoroscopía en tiempo real bajo sedación segura. El único centro en Mérida con equipo completo para dilatación biliar endoscópica.",
  },
  {
    question: "¿Es dolorosa la dilatación biliar endoscópica en Mérida?",
    answer:
      "No, la dilatación biliar en Mérida se realiza bajo sedación profunda, por lo que no sientes molestias durante el procedimiento. El despertar es cómodo y la recuperación es rápida en Hospital Amerimed.",
  },
  {
    question: "¿Cuánto dura la recuperación después de dilatación biliar en Mérida?",
    answer:
      "La recuperación de dilatación biliar en Mérida es de 2-6 horas de observación en hospital, con alta el mismo día en la mayoría de casos. Regreso a actividades normales en 24-48 horas.",
  },
  {
    question: "¿Qué riesgos tiene la dilatación biliar endoscópica en Mérida?",
    answer:
      "La dilatación biliar endoscópica en Mérida tiene menor riesgo que cirugía abierta. Los riesgos mínimos incluyen sangrado menor o reacción a sedación, pero son raros en Hospital Amerimed con nuestros protocolos de seguridad.",
  },
  {
    question: "¿Se puede repetir la dilatación biliar si es necesario en Mérida?",
    answer:
      "Sí, la dilatación biliar endoscópica en Mérida puede repetirse si hay re-estenosis. Es más seguro repetir el procedimiento endoscópico que realizar cirugía abierta. Dr. Omar evalúa cada caso individualmente.",
  },
  {
    question: "¿Los seguros médicos cubren el costo de dilatación biliar en Mérida?",
    answer:
      "Muchos seguros médicos en Mérida cubren la dilatación biliar endoscópica como procedimiento terapéutico necesario. Verificamos cobertura antes del procedimiento para transparencia total en el precio final.",
  },
  {
    question: "¿Cuál es el precio total incluyendo seguimiento post-dilatación biliar?",
    answer:
      "El precio de dilatación biliar en Mérida desde $25,000 MXN incluye procedimiento completo, sedación, fluoroscopía y seguimiento post-procedimiento sin costo adicional en Hospital Amerimed.",
  },
  {
    question: "¿Cuándo es urgente una dilatación biliar en Mérida?",
    answer:
      "La dilatación biliar es urgente en Mérida cuando hay ictericia (color amarillo), dolor abdominal intenso, fiebre con escalofríos, o la tríada de Charcot. Hospital Amerimed atiende urgencias biliares 24/7.",
  },
  {
    question: "¿Qué ventajas tiene la dilatación biliar sobre cirugía abierta en Mérida?",
    answer:
      "La dilatación biliar endoscópica en Mérida evita incisiones, tiene recuperación inmediata, menor costo, sin dolor post-operatorio significativo y menor riesgo de complicaciones comparado con cirugía abierta tradicional.",
  },
  {
    question: "¿Hay disponibilidad de dilatación biliar de emergencia en Mérida?",
    answer:
      "Sí, Hospital Amerimed en Mérida tiene disponibilidad 24/7 para urgencias de dilatación biliar, incluyendo fines de semana y días festivos. El equipo de fluoroscopía está siempre disponible para emergencias biliares.",
  },
]

export const dilatacionColonicaFaqs: FAQ[] = [
  // Your existing FAQs (enhanced with SEO)
  {
    question: "¿Qué es la dilatación colónica endoscópica?",
    answer:
      "Es un tratamiento endoscópico especializado realizado en Mérida que amplía estenosis del colon mediante balones de dilatación colónica, mejorando el tránsito intestinal. La dilatación colónica puede realizarse como procedimiento independiente o durante colonoscopia en Hospital Amerimed, Mérida, Yucatán.",
  },
  {
    question: "¿Cuánto cuesta una dilatación colónica en Mérida, Yucatán?",
    answer:
      "El costo de dilatación colónica en Mérida inicia desde $15,000 MXN, pero el precio final varía según la localización de la estenosis y el material necesario. Cotización clara de precio siempre se entrega antes del procedimiento en Hospital Amerimed.",
  },
  {
    question: "¿Dónde se realiza la dilatación colónica en Mérida?",
    answer:
      "En Hospital Amerimed, Mérida, Yucatán, bajo sedación profunda y protocolos hospitalarios especializados. El único centro en Mérida con equipo completo para dilatación colónica endoscópica segura.",
  },
  {
    question: "¿Es dolorosa la dilatación colónica endoscópica en Mérida?",
    answer:
      "No, la dilatación colónica en Mérida se realiza bajo sedación profunda, por lo que no sientes molestias durante el procedimiento. El despertar es cómodo y la recuperación es rápida en Hospital Amerimed, Mérida.",
  },
  {
    question: "¿Cuánto dura la recuperación después de dilatación colónica en Mérida?",
    answer:
      "La recuperación de dilatación colónica en Mérida es de 2-4 horas de observación en hospital, con alta el mismo día en la mayoría de casos. Regreso a alimentación normal en 24 horas después del procedimiento.",
  },
  {
    question: "¿Qué preparación necesita la dilatación colónica en Mérida?",
    answer:
      "La dilatación colónica en Mérida requiere preparación intestinal completa similar a colonoscopia, con dieta líquida 24 horas antes. El Dr. Omar proporciona instrucciones detalladas de preparación para optimizar resultados del procedimiento.",
  },
  {
    question: "¿Cuándo puedo comer normal después de dilatación colónica en Mérida?",
    answer:
      "Después de dilatación colónica en Mérida puedes regresar a alimentación líquida el mismo día y dieta normal en 24 horas. La recuperación alimentaria es más rápida que cirugía de colon tradicional.",
  },
  {
    question: "¿Qué riesgos tiene la dilatación colónica endoscópica en Mérida?",
    answer:
      "La dilatación colónica endoscópica en Mérida tiene menor riesgo que cirugía de colon abierta. Los riesgos mínimos incluyen sangrado menor o perforación, pero son raros en Hospital Amerimed con nuestros protocolos de seguridad especializados.",
  },
  {
    question: "¿Se puede repetir la dilatación colónica si es necesario en Mérida?",
    answer:
      "Sí, la dilatación colónica endoscópica en Mérida puede repetirse si hay re-estenosis. Es más seguro repetir el procedimiento endoscópico que realizar cirugía de colon mayor. Dr. Omar evalúa cada caso individualmente.",
  },
  {
    question: "¿Los seguros médicos cubren el costo de dilatación colónica en Mérida?",
    answer:
      "Muchos seguros médicos en Mérida cubren la dilatación colónica endoscópica como procedimiento terapéutico necesario. Verificamos cobertura antes del procedimiento para transparencia total en el precio final.",
  },
  {
    question: "¿Cuál es el precio total incluyendo seguimiento post-dilatación colónica?",
    answer:
      "El precio de dilatación colónica en Mérida desde $15,000 MXN incluye procedimiento completo, sedación, colonoscopio HD y seguimiento post-procedimiento sin costo adicional en Hospital Amerimed.",
  },
  {
    question: "¿Cuándo es mejor la dilatación colónica que cirugía de colon en Mérida?",
    answer:
      "La dilatación colónica en Mérida es mejor opción cuando se puede preservar la anatomía intestinal normal. Evita resección de colon sano, tiene menor costo, recuperación inmediata y menos riesgos que cirugía mayor.",
  },
  {
    question: "¿Qué ventajas tiene la dilatación colónica sobre cirugía abierta en Mérida?",
    answer:
      "La dilatación colónica endoscópica en Mérida evita incisiones, preserva anatomía intestinal, tiene recuperación de 2-4 horas vs 4-8 semanas de cirugía, menor costo y regreso inmediato a actividades normales.",
  },
  {
    question: "¿Hay disponibilidad de urgencia para dilatación colónica en Mérida?",
    answer:
      "Hospital Amerimed en Mérida tiene disponibilidad para evaluaciones de dilatación colónica programadas y casos que requieren tratamiento antes de obstrucción intestinal completa. Consultas de segunda opinión disponibles.",
  },
  {
    question: "¿Qué casos de estenosis colónica se pueden tratar en Mérida?",
    answer:
      "En Mérida tratamos estenosis post-quirúrgicas de colon, estenosis por enfermedad de Crohn, colitis cicatricial y estrechamientos por inflamación crónica mediante dilatación colónica endoscópica especializada.",
  },
]

// ESCLEROSIS DE VÁRICES GÁSTRICAS - Enhanced authority
export const esclerosisVaricesGastricasFaqs: FAQ[] = [
  {
    question: "¿Qué diferencia hay entre esclerosis y ligadura para várices gástricas en Mérida?",
    answer:
      "Esclerosis inyecta agentes químicos (cianoacrilato) directamente en várices gástricas, mientras ligadura usa bandas elásticas (mejor para várices esofágicas). Várices gástricas requieren esclerosis porque son más profundas y de mayor calibre. Dr. Omar selecciona técnica según localización: esclerosis para várices gástricas, ligadura para esofágicas. Ambos procedimientos disponibles en Hospital Amerimed."
  },
  {
    question: "¿Cuándo está indicada la esclerosis de várices gástricas en Mérida?",
    answer:
      "Sangrado activo de várices gástricas (emergencia), várices gástricas grandes en pacientes cirróticos, prevención secundaria post-hemorragia, como puente pre-trasplante hepático, o cuando TIPS no es factible. Evaluación endoscópica determina tamaño y riesgo hemorrágico. Disponible 24/7 en Hospital Amerimed para emergencias. Coordinación con hepatólogo para manejo integral de hipertensión portal."
  },
  {
    question: "¿Qué agentes esclerosantes usan para várices gástricas en Mérida?",
    answer:
      "Utilizamos cianoacrilato (histoacryl) - adhesivo tisular que solidifica inmediatamente al contacto con sangre, sellando la várice. Superior a alcohol absoluto o polidocanol para várices gástricas grandes. Técnica de inyección precisa bajo visualización endoscópica directa. Material importado de alta calidad. Experiencia en más de 100 esclerosis gástricas sin embolización sistémica."
  },
  {
    question: "¿Qué complicaciones puede tener la esclerosis de várices gástricas?",
    answer:
      "Complicaciones menores: dolor torácico transitorio, fiebre post-procedimiento. Complicaciones mayores (raras): embolización pulmonar de cianoacrilato, perforación gástrica, resangrado temprano. En Hospital Amerimed minimizamos riesgos con: técnica de inyección lenta, volúmenes controlados, fluoroscopía cuando necesario. Vigilancia post-procedimiento 24 horas. Manejo inmediato de complicaciones con equipo multidisciplinario."
  },
]

// ENDOPRÓTESIS ESOFÁGICAS - Expanded authority
export const endoprotesisEsofagicasFaqs: FAQ[] = [
  {
    question: "¿Qué tipos de endoprótesis esofágicas colocan en Mérida?",
    answer:
      "Stents metálicos autoexpandibles cubiertos y no cubiertos, prótesis plásticas removibles, stents biodegradables para estenosis benignas. Selección según diagnóstico: cáncer esofágico (metálicos cubiertos), estenosis benigna (plásticos o biodegradables), fístulas esofágicas (metálicos cubiertos). Variedad de diámetros (18-23mm) y longitudes (6-15cm). Marcas internacionales disponibles en Hospital Amerimed."
  },
  {
    question: "¿Cuándo está indicada una endoprótesis esofágica en Mérida?",
    answer:
      "Obstrucción maligna esofágica inoperable, fístulas esofago-respiratorias, perforación esofágica controlada, estenosis benigna recurrente refractaria a dilatación, como puente pre-cirugía en desnutrición severa. Evaluación previa con esofagograma y tomografía torácica. Mejora inmediata de disfagia en 90% casos. Paliación efectiva con calidad de vida preservada."
  },
  {
    question: "¿Cómo se coloca una endoprótesis esofágica en Hospital Amerimed?",
    answer:
      "Colocación endoscópica bajo sedación profunda con fluoroscopía simultánea. Sistema de liberación controlada bajo visualización directa. Verificación de posición correcta con contraste hidrosoluble. Procedimiento 30-45 minutos. Alta 24-48 horas según tolerancia. Dieta líquida progresiva hasta sólidos blandos. Seguimiento radiológico para verificar permeabilidad y posición."
  },
  {
    question: "¿Qué cuidados necesita una endoprótesis esofágica en Mérida?",
    answer:
      "Dieta permanente modificada: evitar alimentos fibrosos, masticar bien, líquidos abundantes con comidas. Inhibidores bomba protones indefinidamente. Dilatación neumática suave cada 3-6 meses si hay reestenosis. Control endoscópico trimestral primer año. Educación familiar sobre signos alarma: disfagia súbita, dolor torácico, fiebre. Disponibilidad 24/7 para complicaciones relacionadas con prótesis."
  },
]

// ENDOPRÓTESIS BILIARES - Enhanced coverage
export const endoprotesisBiliaresFaqs: FAQ[] = [
  {
    question: "¿Qué tipos de endoprótesis biliares utilizan en CPRE en Mérida?",
    answer:
      "Stents plásticos (7-11.5 Fr) para uso temporal, stents metálicos autoexpandibles cubiertos y no cubiertos para obstrucción maligna, prótesis anti-migración para casos complejos. Selección según etiología: plásticos para cálculos, metálicos para tumores. Diferentes longitudes según anatomía biliar. Recambio plásticos cada 3-6 meses, metálicos duración prolongada."
  },
  {
    question: "¿Cuándo se necesita endoprótesis biliar durante CPRE en Mérida?",
    answer:
      "Obstrucción biliar maligna (tumor páncreas, colangiocarcinoma), cálculos impactados no extraíbles, estenosis biliar post-quirúrgica, colangitis aguda con drenaje urgente, como puente pre-cirugía en ictericia severa, fístulas biliares post-operatorias. Mejora inmediata de ictericia y función hepática. Disponibilidad emergencias 24/7 para obstrucción biliar aguda."
  },
  {
    question: "¿Cómo se coloca una endoprótesis biliar en Hospital Amerimed?",
    answer:
      "Durante CPRE, canulación del conducto biliar, colangiografía para medir estenosis, esfinterotomía biliar previa, colocación stent sobre guía hidrofílica bajo fluoroscopía. Verificación posición con contraste. Sistema de liberación controlada. Drenaje inmediato de bilis. Procedimiento adiciona 15-30 minutos a CPRE básica. Observación hospitalaria 12-24 horas."
  },
  {
    question: "¿Qué seguimiento necesita una endoprótesis biliar en Mérida?",
    answer:
      "Laboratorios biliares (bilirrubinas, fosfatasa alcalina) cada 4-6 semanas, reemplazo stents plásticos cada 3-6 meses antes de obstrucción, stents metálicos vigilancia por reestenosis (tumor crecimiento), CPRE de limpieza si hay oclusión. Signos alarma: ictericia recurrente, fiebre, dolor abdominal. Control endoscópico según evolución clínica y tipo prótesis."
  },
]

// ENDOPRÓTESIS DUODENALES - Specialized coverage
export const endoprotesisDuodenalesFaqs: FAQ[] = [
  {
    question: "¿Qué casos requieren endoprótesis duodenal en Mérida?",
    answer:
      "Obstrucción duodenal por cáncer páncreas, ampuloma grande, carcinoma duodenal, compresión extrínseca por masa retroperitoneal, estenosis duodenal post-operatoria, como paliación en pacientes inoperables con vómito persistente. Mejora inmediata de síntomas obstructivos. Alternativa menos invasiva que gastro-yeyuno anastomosis quirúrgica."
  },
  {
    question: "¿Cómo se diagnostica obstrucción duodenal antes de prótesis en Mérida?",
    answer:
      "Tomografía abdominal contraste oral e intravenoso, endoscopia alta para evaluar grado obstrucción, serie esófago-gastro-duodenal con bario, marcadores tumorales si sospecha malignidad. Evaluación nutricional y función renal pre-procedimiento. Localización precisa nivel obstructivo determina tamaño y tipo stent duodenal requerido."
  },
  {
    question: "¿Qué tipo de endoprótesis duodenal colocan en Hospital Amerimed?",
    answer:
      "Stents metálicos autoexpandibles no cubiertos específicos para duodeno, diámetro 20-22mm, longitud 6-9cm según extensión obstrucción. Anti-migración con diseño anatómico. Liberación controlada bajo fluoroscopía y visualización endoscópica directa. Material importado certificado FDA. Experiencia en colocación duodenal en casos complejos oncológicos."
  },
  {
    question: "¿Qué mejoría esperar después de endoprótesis duodenal en Mérida?",
    answer:
      "Resolución inmediata vómito y náusea en 90% casos, reanudación alimentación oral 24-48 horas, mejora estado nutricional progresiva, reducción distensión abdominal, alta hospitalaria 2-3 días. Dieta modificada permanente: líquidos abundantes, comidas pequeñas frecuentes, evitar fibra excesiva. Calidad vida significativamente mejorada vs alimentación parenteral."
  },
]

// ENDOPRÓTESIS COLÓNICAS - Complete coverage
export const endoprotesisColonicasFaqs: FAQ[] = [
  {
    question: "¿Cuándo está indicada endoprótesis colónica en obstrucción intestinal?",
    answer:
      "Obstrucción colónica aguda por tumor maligno, como puente pre-cirugía para preparación intestinal, paliación en cáncer colorrectal inoperable, estenosis anastomótica post-operatoria, enfermedad diverticular complicada con estenosis. Evita colostomía de urgencia en 80% casos. Permite cirugía electiva con mejor pronóstico."
  },
  {
    question: "¿Cómo se coloca endoprótesis colónica por colonoscopia en Mérida?",
    answer:
      "Colonoscopia con CO2 (no aire) para reducir distensión, localización exacta obstrucción, colocación stent autoexpandible sobre guía bajo fluoroscopía, verificación descompresión inmediata. Sin preparación intestinal previa. Sedación balanceada por riesgo perforación. Sistema entrega través-lesión. Descompresión colónica inmediata visible endoscópicamente."
  },
  {
    question: "¿Qué stents colónicos utilizan en Hospital Amerimed, Mérida?",
    answer:
      "Stents metálicos autoexpandibles no cubiertos, diámetro 20-30mm, longitud 6-12cm según extensión tumor. Diseño anti-migración específico colónico. Material nitinol biocompatible. Fuerza radial gradual evita perforación. Marcas internacionales certificadas. Disponibilidad inmediata para urgencias obstructivas incluso fines de semana."
  },
  {
    question: "¿Qué resultados esperar con endoprótesis colónica en Mérida?",
    answer:
      "Descompresión colónica inmediata en 95% casos técnicamente exitosos, reanudación tránsito intestinal 12-24 horas, evacuación espontánea primera semana, evita colostomía urgente, permite preparación pre-operatoria óptima, reduce morbi-mortalidad quirúrgica. Tiempo ganado para estadificación oncológica completa y optimización estado general."
  },
]

// CIERRE DE FÍSTULAS CON CLIPS - Enhanced authority
export const cierreFistulasFaqs: FAQ[] = [
  {
    question: "¿Qué tipos de fístulas digestivas cierran con clips en Mérida?",
    answer:
      "Fístulas esófago-cutáneas post-operatorias, perforaciones iatrogénicas durante endoscopia, fístulas gastro-cutáneas, defectos mucosos post-resección endoscópica (EMR/ESD), perforaciones colónicas pequeñas (<2cm), dehiscencias anastomóticas tempranas. Clips metálicos tipo through-the-scope (TTSC) o over-the-scope (OTSC) según tamaño defecto. Evita cirugía en 70% casos seleccionados apropiadamente."
  },
  {
    question: "¿Cuándo es mejor clips vs cirugía para fístulas en Mérida?",
    answer:
      "Clips endoscópicos indicados en: defectos <2cm, fístulas de bajo débito, sin sepsis peritoneal, diagnóstico temprano (<24-48 horas), pacientes alto riesgo quirúrgico. Cirugía necesaria en: fístulas >3cm, sepsis abdominal, fístulas complejas múltiples, falla terapia endoscópica. Dr. Omar evalúa caso individual considerando tamaño, localización y condición clínica."
  },
  {
    question: "¿Qué tipos de clips endoscópicos usan en Hospital Amerimed?",
    answer:
      "Clips through-the-scope Olympus QuickClip Pro para defectos pequeños, clips over-the-scope Ovesco OTSC para perforaciones grandes, clips hemostáticos Resolution para sangrado, clips de cierre Endo-Clip III para diversos defectos. Selección según tamaño lesión, localización anatómica y mecanismo fístula. Disponibilidad inmediata para urgencias incluso fines de semana."
  },
  {
    question: "¿Qué seguimiento necesita después de cierre con clips en Mérida?",
    answer:
      "Ayuno 24-48 horas post-procedimiento, antibioterapia profiláctica, estudio contrastado control 48-72 horas verificar cierre, dieta líquida progresiva si no hay fuga, vigilancia signos sepsis o re-apertura. Control endoscópico 1-2 semanas evaluar cicatrización. Clips permanecen in-situ indefinidamente. Éxito cierre definitivo >85% en casos seleccionados apropiadamente."
  },
]

// SUTURA ENDOSCÓPICA - Specialized coverage
export const suturaEndoscopicaFaqs: FAQ[] = [
  {
    question: "¿Qué procedimientos requieren sutura endoscópica en Mérida?",
    answer:
      "Cierre defectos post-POEM (miotomía endoscópica), cierre perforaciones grandes (>3cm), refuerzo líneas grapeo bariátrico, cierre fístulas complejas, anastomosis endoscópicas, plicatura gástrica endoscópica anti-reflujo, cierre defectos post-resección submucosal extensa. Técnica avanzada que evita cirugía abierta en casos seleccionados. Requiere entrenamiento específico en sutura endoscópica."
  },
  {
    question: "¿Qué dispositivos de sutura endoscópica utilizan en Hospital Amerimed?",
    answer:
      "Sistema OverStitch Apollo para sutura continua, g-Prox Grasper para aproximación tisular, endo-suturing kit para suturas simples, clips ancla como puntos de fijación, hilos no-absorbibles (prolene) o absorbibles según indicación. Técnica compleja requiere endoscopio terapéutico doble canal. Disponible para casos complejos que requieren cierre anatómico preciso."
  },
  {
    question: "¿Cuándo está indicada sutura vs clips para cierre endoscópico?",
    answer:
      "Sutura endoscópica para: defectos >2cm, cierre bajo tensión, anatomía compleja, necesidad sutura continua hermética. Clips para: defectos <2cm, cierre simple, anatomía favorable, urgencias. Sutura más versátil pero técnicamente demandante. Dr. Omar selecciona técnica según experiencia, tamaño defecto y características anatómicas específicas."
  },
  {
    question: "¿Qué recuperación esperar después de sutura endoscópica en Mérida?",
    answer:
      "Ayuno 48-72 horas según localización, estudio contrastado control verificar hermeticidad, dieta progresiva bajo supervisión, antibioterapia profiláctica, vigilancia dehiscencia suturas. Tiempo procedimiento 60-120 minutos según complejidad. Hospitalización 2-5 días según evolución. Seguimiento endoscópico 2-4 semanas evaluar cicatrización y integridad suturas."
  },
]


export const esdFaqs: FAQ[] = [
  // Enhanced existing FAQs with more SEO/GEO optimization
  {
    question: "¿Qué es la disección endoscópica submucosa (ESD) en Mérida?",
    answer:
      "La disección endoscópica submucosa (ESD) en Mérida es una técnica oncológica avanzada que permite resecar tumores gastrointestinales tempranos en una sola pieza, preservando el órgano completo. El Dr. Omar Quiroz realiza este procedimiento en Hospital Amerimed, Mérida, Yucatán, con equipo especializado para lesiones complejas que requieren resección completa.",
  },
  {
    question: "¿Cuánto cuesta una disección endoscópica submucosa (ESD) en Mérida, Yucatán?",
    answer:
      "El costo de disección endoscópica submucosa en Mérida varía según el tamaño, localización y complejidad de la lesión. Los precios en Mérida, Yucatán incluyen procedimiento completo, sedación profunda, análisis histológico y seguimiento oncológico. Cotización personalizada siempre disponible sin compromiso en Hospital Amerimed.",
  },
  {
    question: "¿Dónde se realiza la ESD en Mérida, Yucatán?",
    answer:
      "La disección endoscópica submucosa se realiza en Hospital Amerimed, Mérida, Yucatán (Av. Itzáes 242, García Ginerés). Contamos con equipo de endoscopia avanzada Olympus, anestesia monitorizada y quirófanos especializados para procedimientos oncológicos complejos en Mérida.",
  },

  // 4 new SEO and GEO friendly FAQs
  {
    question: "¿Cuál es la diferencia entre ESD y EMR en Mérida?",
    answer:
      "En Mérida, la ESD (disección endoscópica submucosa) permite resecar lesiones grandes en una sola pieza, mientras que EMR (resección mucosa endoscópica) está limitada a lesiones pequeñas. El Dr. Omar Quiroz en Hospital Amerimed, Mérida, evalúa cada caso para determinar la mejor técnica según el tamaño y localización de la lesión en pacientes de Yucatán.",
  },
  {
    question: "¿Cuánto tiempo de recuperación tiene la ESD en Mérida?",
    answer:
      "La recuperación de disección endoscópica submucosa en Mérida es de 24-48 horas para actividades normales, vs 6-12 semanas en cirugía abierta. En Hospital Amerimed, Mérida, los pacientes de García Ginerés, Cholul y Francisco de Montejo pueden regresar a casa el mismo día con cuidados mínimos post-procedimiento.",
  },
  {
    question: "¿La ESD es mejor que cirugía oncológica en Mérida?",
    answer:
      "En casos seleccionados en Mérida, la ESD es superior a cirugía oncológica porque preserva el órgano completo, tiene menor morbilidad y recuperación más rápida. El Dr. Omar Quiroz en Hospital Amerimed, Mérida, evalúa cada paciente de Yucatán para determinar si es candidato a esta técnica mínimamente invasiva vs cirugía mayor.",
  },
  {
    question: "¿Qué hospitales en Mérida realizan disección endoscópica submucosa?",
    answer:
      "En Mérida, Yucatán, la disección endoscópica submucosa se realiza en Hospital Amerimed por el Dr. Omar Quiroz, especialista certificado en técnicas endoscópicas avanzadas. Es uno de los pocos endoscopistas en Mérida con experiencia en ESD para pacientes de García Ginerés, Cholul, Francisco de Montejo y toda la zona metropolitana de Mérida.",
  },
]
// EMR (RESECCIÓN ENDOSCÓPICA DE MUCOSA) - Enhanced
export const emrFaqs: FAQ[] = [
  {
    question: "¿Qué lesiones se resecan con EMR en Hospital Amerimed, Mérida?",
    answer:
      "Pólipos colorrectales >2cm, pólipos gástricos grandes, lesiones esofágicas (esófago Barrett con displasia), adenomas duodenales, lesiones superficiales rectales, pólipos ampulares pequeños. Técnica inject-and-cut: inyección submucosa + resección. Indicada para lesiones superficiales sin invasión profunda. Evaluación previa con magnificación y cromoendoscopia determina viabilidad EMR."
  },
  {
    question: "¿Cuál es la diferencia entre EMR y polipectomía simple en Mérida?",
    answer:
      "EMR para lesiones grandes (>2cm), planas o con base amplia que requieren inyección submucosa para crear cojín protector. Polipectomía simple para pólipos pediculados pequeños con asa directa. EMR permite resección en-bloc de lesiones complejas, mayor profundidad resección, menor riesgo perforación. Análisis histológico más completo determina márgenes y grado invasión."
  },
  {
    question: "¿Cómo se realiza EMR y cuánto tiempo toma en Mérida?",
    answer:
      "Inyección solución submucosa (suero salino + adrenalina + azul metileno), elevación lesión, resección con asa diatérmica, recuperación espécimen completo para patología. Tiempo 20-60 minutos según tamaño y número lesiones. Sedación profunda obligatoria. Técnica piecemeal para lesiones muy grandes. Hemostasia preventiva bordes resección."
  },
  {
    question: "¿Qué seguimiento necesito después de EMR en Mérida?",
    answer:
      "Control endoscópico 3-6 meses primer año para detectar recurrencia local, especialmente resecciones piecemeal. Resultados histopatología 5-7 días determinan seguimiento: displasia bajo grado (control anual), displasia alto grado (control semestral), invasión submucosa (referencia oncológica). Vigilancia endoscópica sitio resección y detección lesiones sincrónicas."
  },
]

// RETIRO DE BALÓN GÁSTRICO - Enhanced
export const retiroBalonFaqs: FAQ[] = [
  {
    question: "¿Cuándo debe retirarse el balón gástrico endoscópicamente en Mérida?",
    answer:
      "Al completar tiempo recomendado (6-12 meses según tipo), por intolerancia severa (vómito persistente, dolor), migración hacia duodeno, desinflado espontáneo, como preparación pre-cirugía bariátrica, infección o úlcera gástrica severa. Retiro endoscópico ambulatorio bajo sedación. Evaluación nutricional post-retiro para mantener pérdida peso."
  },
  {
    question: "¿Cómo se retira endoscópicamente el balón gástrico en Hospital Amerimed?",
    answer:
      "Endoscopia terapéutica bajo sedación profunda, punción del balón con aguja especial, aspiración completo contenido líquido, extracción balón colapsado con pinza atrapa-objetos, verificación ausencia residuos gástricos. Procedimiento 15-30 minutos. Alta el mismo día. Dieta líquida 24 horas, progresión normal posterior. Seguimiento nutricional incluido."
  },
  {
    question: "¿Qué complicaciones puede tener el retiro de balón en Mérida?",
    answer:
      "Complicaciones raras: aspiración contenido gástrico durante sedación, desgarros mucosa gástrica menores, retención fragmentos balón (muy raro). En Hospital Amerimed minimizamos riesgos con: vaciado gástrico previo, sedación anestesiológica, técnica atraumática, verificación endoscópica completa. Experiencia en más de 50 retiros sin complicaciones mayores."
  },
  {
    question: "¿Qué esperar después del retiro de balón gástrico en Mérida?",
    answer:
      "Aumento temporal apetito primeras semanas, posible recuperación peso parcial si no hay cambios hábitos, necesidad disciplina dietética continua, seguimiento nutricional 6-12 meses post-retiro. Plan integral incluye: dieta balanceada, ejercicio regular, apoyo psicológico, opciones cirugía bariátrica si indicada. Mantenimiento pérdida peso requiere compromiso lifestyle permanente."
  },
]

// APC (COAGULACIÓN PLASMA ARGÓN) - Enhanced
export const apcFaqs: FAQ[] = [
  {
    question: "¿Para qué condiciones se usa coagulación con plasma de argón en Mérida?",
    answer:
      "Angiodisplasias gastrointestinales sangrantes, esófago de Barrett (ablación displasia), gastritis hemorrágica difusa, proctitis actínica post-radioterapia, control hemostático post-polipectomía, tumor bleeding paliativo, arterioesclerosis antral, lesiones vasculares Dieulafoy. APC permite coagulación superficial controlada sin carbonización tisular excesiva."
  },
  {
    question: "¿Cómo funciona el plasma de argón y por qué es seguro en Mérida?",
    answer:
      "Gas argón ionizado conduce corriente eléctrica creando coagulación superficial homogénea, penetración tisular limitada (2-3mm), auto-regulación por aumento impedancia, menor riesgo perforación vs electrocauterio convencional. Equipo ERBE APC 300 con flujo gas controlado. Coagulación sin contacto directo reduce adherencia sonda. Ideal para áreas extensas o anatómicamente difíciles."
  },
  {
    question: "¿Cuántas sesiones APC necesito para tratar mi condición en Mérida?",
    answer:
      "Angiodisplasias: 1-3 sesiones cada 4-6 semanas hasta control hemostático. Esófago Barrett: 2-4 sesiones cada 2-3 meses según extensión. Proctitis actínica: 3-6 sesiones cada 4 semanas. Evaluación endoscópica inter-sesiones determina respuesta terapéutica. Seguimiento hemoglobina y síntomas guía frecuencia tratamiento."
  },
  {
    question: "¿Qué cuidados necesito después de tratamiento con APC en Mérida?",
    answer:
      "Inhibidores bomba protones dosis alta 4-8 semanas, evitar antiinflamatorios y anticoagulantes primeras 2 semanas (salvo indicación médica estricta), dieta blanda primeras 48 horas, vigilancia sangrado o dolor severo. Control hemoglobina 1-2 semanas post-tratamiento. Seguimiento endoscópico 4-6 semanas evaluar cicatrización y efectividad terapéutica."
  },
]

/** Mapeo por route key para usar en páginas */
const BY_ROUTE: Partial<Record<RouteKey, FAQ[]>> = {
  home: homeFaqs,
  endoscopia: endoscopiaFaqs,
  colonoscopia: colonoscopiaFaqs,
  panendoscopia: panendoscopiaFaqs,
  cpre: cpreFaqs,
  ligadura: ligaduraFaqs,
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

/** Helper público */
export function getFaqsFor(route: RouteKey): FAQ[] {
  return BY_ROUTE[route] ?? []
}
