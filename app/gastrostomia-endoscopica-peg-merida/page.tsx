import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Link from "next/link"
import {
  Stethoscope,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Microscope,
  Clock,
  Heart,
  AlertTriangle,
  Activity,
  Target,
  FileText,
  ExternalLink,
  Users,
  Utensils,
  Shield,
  Phone,
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";
import { inter, montserrat } from "@/app/fonts";


export const revalidate = 86400
export const metadata = metaFor("peg")

export default function GastrostomiaEndoscopicaPEGPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent-light/5 to-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content - Left Side */}
            <div className="flex-1 lg:max-w-3xl space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                  <Utensils className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Alimentación Segura</span>
                </div>

                <h1 className="`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight`">
                  Gastrostomía Endoscópica PEG en Mérida | Dr. Omar Quiroz - Alimentación Enteral Segura
                </h1>

                <p className="`${inter.className} text-lg text-foreground/80 leading-relaxed`">
                  La gastrostomía endoscópica (PEG) en Mérida es el procedimiento gold standard para establecer acceso de alimentación enteral a largo plazo. El Dr. Omar Quiroz realiza colocación de PEG en Hospital Amerimed, Mérida, Yucatán, con técnica percutánea endoscópica desde {mxn(PRICING.gastrostomia_peg.from)}.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3 text-sm text-foreground/70">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Hospital Amerimed, Mérida, Yucatán</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground/70">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Procedimiento ambulatorio 45-60 min</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="gastrostomia" position="hero" />
                      <WhatsAppButton service="gastrostomia" position="hero" />
                </div>
            </div>

            {/* Visual - Right Side */}
            <div className="flex-1 lg:max-w-md">
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent-light/20 to-primary/10 border border-accent-light/30 p-8">
                  <div className="h-full flex flex-col justify-center items-center text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                      <Utensils className="h-10 w-10 text-green-600" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-serif font-semibold text-foreground">
                        PEG: Nutrición Segura
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        Acceso nutricional a largo plazo para pacientes con dificultades de deglución o necesidades nutricionales especiales.
                      </p>
                    </div>
                    <div className="w-full pt-4 border-t border-accent-light/20 text-center">
                      <p className="text-sm text-foreground/60">
                        Desde <span className="font-semibold text-primary">{mxn(PRICING.gastrostomia_peg.from)}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              ¿Por qué elegir gastrostomía PEG en lugar de nutrición parenteral?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La PEG ofrece ventajas significativas para nutrición enteral a largo plazo
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Benefit 1 */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Menor riesgo de infección
                </h3>
                <p className="text-foreground/80">
                  La PEG evita accesos vasculares centrales, reduciendo significativamente el riesgo de bacteremia y sepsis comparado con nutrición parenteral.
                </p>
                <div className="pt-4 space-y-2 text-sm text-foreground/70">
                  <p>• Sin acceso venoso central</p>
                  <p>• Menor manipulación diaria</p>
                  <p>• Cuidados domiciliarios simples</p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Activity className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Mantiene función intestinal
                </h3>
                <p className="text-foreground/80">
                  La alimentación enteral por PEG preserva la función gastrointestinal, la inmunidad intestinal y el trofismo de las vellosidades.
                </p>
                <div className="pt-4 space-y-2 text-sm text-foreground/70">
                  <p>• Estimula motilidad intestinal</p>
                  <p>• Preserva microbiota</p>
                  <p>• Absorción más fisiológica</p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">
                  Mayor calidad de vida
                </h3>
                <p className="text-foreground/80">
                  Los pacientes con PEG pueden mantener mayor independencia, movilidad y participación en actividades familiares y sociales.
                </p>
                <div className="pt-4 space-y-2 text-sm text-foreground/70">
                  <p>• Alimentación en casa</p>
                  <p>• Movilidad sin restricciones</p>
                  <p>• Integración social normal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              <strong>¿Tu familiar necesita alimentación enteral a largo plazo?</strong> La gastrostomía PEG en Mérida puede ser la solución más segura y cómoda. Dr. Omar Quiroz evalúa cada caso individualmente en Hospital Amerimed.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-24 bg-accent-strong/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Proceso de colocación de PEG: 4 pasos seguros
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Procedimiento endoscópico percutáneo con recuperación ambulatoria
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Step 1 */}
            <div className="relative p-6 rounded-xl bg-background border border-border">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Evaluación nutricional
                </h3>
                <p className="text-sm text-foreground/80">
                  Consulta especializada para determinar indicación de PEG, evaluar anatomía gástrica y discutir expectativas con familia.
                </p>
                <div className="text-xs text-foreground/60 space-y-1">
                  <p>• Historia clínica completa</p>
                  <p>• Evaluación deglución</p>
                  <p>• Análisis nutricional</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-xl bg-background border border-border">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Preparación pre-procedimiento
                </h3>
                <p className="text-sm text-foreground/80">
                  Ayuno de 8 horas, evaluación anestésica, consentimiento informado y preparación del sitio de inserción.
                </p>
                <div className="text-xs text-foreground/60 space-y-1">
                  <p>• Ayuno 8 horas</p>
                  <p>• Valoración anestésica</p>
                  <p>• Profilaxis antibiótica</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-xl bg-background border border-border">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Stethoscope className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Colocación endoscópica
                </h3>
                <p className="text-sm text-foreground/80">
                  Procedimiento de 45-60 minutos con sedación consciente. Técnica "pull" o "push" según anatomía del paciente.
                </p>
                <div className="text-xs text-foreground/60 space-y-1">
                  <p>• Sedación monitorizada</p>
                  <p>• Técnica percutánea</p>
                  <p>• Verificación endoscópica</p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative p-6 rounded-xl bg-background border border-border">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground">
                  Recuperación y educación
                </h3>
                <p className="text-sm text-foreground/80">
                  Observación 4-6 horas, inicio gradual de alimentación y entrenamiento completo a familiares sobre cuidados de PEG.
                </p>
                <div className="text-xs text-foreground/60 space-y-1">
                  <p>• Inicio alimentación 24h</p>
                  <p>• Educación familiar</p>
                  <p>• Seguimiento 7 días</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-background border border-border">
            <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
              ¿Qué pueden esperar los pacientes durante el procedimiento?
            </h3>

            <div className="space-y-4 text-foreground/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Comodidad total:</strong> Sedación consciente asegura que no sienta dolor ni recuerde el procedimiento
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Tiempo optimizado:</strong> Procedimiento de 45-60 minutos con técnica endoscópica avanzada
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Alta el mismo día:</strong> Recuperación ambulatoria con seguimiento estrecho primeras 72 horas
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
              <h4 className="font-semibold text-foreground mb-3">Disponibilidad en Mérida:</h4>
              <div className="space-y-2 text-sm text-foreground/80">
                <p>• Procedimientos programados Hospital Amerimed martes y jueves</p>
                <p>• Consultas evaluación nutricional disponibles lunes a viernes</p>
                <p>• Capacitación familiar incluida en costo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S ADVANTAGE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Dr. Omar: Endoscopista + Cirujano = Manejo Integral de Nutrición Enteral
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              La ventaja de tener doble certificación para casos complejos de PEG
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Problem */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                ¿Qué pasa cuando la PEG no es suficiente o hay complicaciones?
              </h3>

              <div className="space-y-4 text-foreground/80">
                <p>
                  En algunos casos (5-10%), los pacientes pueden desarrollar complicaciones como peritonitis, sangrado significativo, 
                  o requerir conversión a yeyunostomía quirúrgica por intolerance gástrica o gastroparesia severa.
                </p>

                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <h4 className="font-medium text-red-800 mb-2">Escenarios que requieren expertise quirúrgica:</h4>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>• Perforación inadvertida durante colocación</li>
                    <li>• Sangrado arterial de pared gástrica</li>
                    <li>• Necesidad de yeyunostomía por gastroparesia</li>
                    <li>• Obstrucción intestinal por síndrome buried bumper</li>
                  </ul>
                </div>

                <p className="text-sm text-foreground/60">
                  <strong>¿Qué sucede si su endoscopista no es cirujano?</strong> Transferencia a otro hospital, 
                  pérdida de continuidad en el cuidado, y retrasos en resolución de complicaciones.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="p-8 rounded-2xl border border-green-200 bg-green-50">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-6">
                Dr. Omar resuelve todo en el mismo lugar y momento
              </h3>

              <div className="space-y-4 text-foreground/80">
                <p>
                  Al ser endoscopista <strong>y</strong> cirujano general certificado, Dr. Omar puede manejar 
                  tanto la colocación rutinaria de PEG como cualquier complicación sin trasladar al paciente.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">Continuidad de atención</h4>
                      <p className="text-sm text-green-700">El mismo médico evalúa, coloca PEG y resuelve complicaciones</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Activity className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">Conversión inmediata a cirugía</h4>
                      <p className="text-sm text-green-700">Si se requiere yeyunostomía o reparación, se hace en el mismo tiempo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">Manejo de casos complejos</h4>
                      <p className="text-sm text-green-700">Experiencia en pacientes con cirugías abdominales previas o anatomía difícil</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-green-100 border border-green-300">
                  <p className="text-sm text-green-800">
                    <strong>Resultado:</strong> Mayor seguridad, menor ansiedad familiar, y resolución definitiva 
                    de problemas nutricionales sin referir a otros especialistas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto">
              <strong>¿Su familiar necesita PEG pero tiene condiciones médicas complejas?</strong> 
              Dr. Omar Quiroz combina técnica endoscópica avanzada con experiencia quirúrgica para 
              ofrecer el manejo más seguro en Mérida. 
              <Link href="/contacto" className="text-primary hover:text-primary/80 font-medium">
                Evalúa todas tus opciones antes de decidir dónde colocar la PEG.
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* PRICING & LOCATION SECTION */}
      <section className="py-16 sm:py-24 bg-accent-strong/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Pricing Card */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Costo de gastrostomía PEG en Mérida
                </h2>
                <p className="text-lg text-foreground/80">
                  Precio transparente con todo incluido
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-background">
                <div className="space-y-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      Gastrostomía PEG completa
                    </h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{mxn(PRICING.gastrostomia_peg.from)}</p>
                      <p className="text-sm text-foreground/60">Todo incluido</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">El precio incluye:</h4>
                    <div className="space-y-2 text-sm text-foreground/80">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Capacitación completa a familiares sobre cuidados PEG</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Seguimiento telefónico primeros 7 días</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-foreground/60">
                      *Precio válido para pacientes con anatomía gástrica normal. 
                      Casos complejos se evalúan individualmente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                  Ubicación y contacto en Mérida
                </h2>
                <p className="text-lg text-foreground/80">
                  Hospital Amerimed, accesible desde toda la zona metropolitana
                </p>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-background">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Hospital Amerimed</h3>
                      <p className="text-sm text-foreground/80">Consultorio 517 - Torre de Especialidades</p>
                      <p className="text-sm text-foreground/80">Chichí Suárez, Mérida, Yucatán</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Fácil acceso desde:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm text-foreground/70">
                      <p>• Centro de Mérida</p>
                      <p>• Montebello</p>
                      <p>• Altabrisa</p>
                      <p>• Temozón Norte</p>
                      <p>• Cholul</p>
                      <p>• García Ginerés</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-border">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Agenda tu consulta:</h4>
                      <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="gastrostomia" position="cta section" />
                      <WhatsAppButton service="gastrostomia" position="cta section" />
                </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                    <h4 className="font-medium text-blue-800 mb-2">Horarios de consulta PEG:</h4>
                    <div className="text-sm text-blue-700 space-y-1">
                      <p>• Evaluación nutricional: Lunes a viernes 8:00-17:00</p>
                      <p>• Procedimientos PEG: Martes y jueves 8:00-14:00</p>
                      <p>• Urgencias nutricionales: Disponibilidad fin de semana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                  {/* GOOGLE REVIEWS COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GoogleReviews className="mt-8" />
        </div>
      </section>

      {/* PROCEDURES GRID COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProceduresGrid />
        </div>
      </section>

      {/* FAQ LIST COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Faq routeKey="peg" />
        </div>
      </section>
    </>
  )
}
