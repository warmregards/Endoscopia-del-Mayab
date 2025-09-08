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
  DollarSign,
  Timer,
  Hospital
} from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"
import GoogleReviews from "@/components/GoogleReviews";

export const revalidate = 86400
export const metadata = metaFor("ligadura_hemorroides")

export default function LigaduraHemorroidesPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://endoscopiadelmayab.com").replace(/\/$/, "")

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
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Alternativa Sin Cirugía</span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Ligadura de Hemorroides Internas Mérida | Dr. Omar Quiroz - Tratamiento Sin Cirugía Mayor
                </h1>

                <p className="text-lg text-foreground/80 leading-relaxed">
                  ¿Sangrado rectal que te preocupa? ¿Hemorroides que duelen al sentarte? La ligadura de hemorroides internas en Mérida es una alternativa segura a la cirugía abierta. El Dr. Omar Quiroz trata hemorroides grado 1 y grado 2 en Hospital Amerimed usando bandas especiales que eliminan hemorroides sin cortes ni puntos.
                </p>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Muchos pacientes llegan después de meses evitando ir al baño por el dolor. Otros vienen asustados pensando que necesitan cirugía mayor. El Dr. Quiroz explica exactamente qué tipo de hemorroides tienes y si la ligadura puede resolver tu problema sin hospitalizarte.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <CallButton className="flex-1" />
                  <WhatsAppButton className="flex-1" />
                </div>

                <div className="flex items-center gap-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Hospital Amerimed, Mérida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Mismo día, sin hospitalización</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Card - Right Side */}
            <div className="flex-1 lg:max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/20 to-primary/20 rounded-3xl transform rotate-3" />
                <div className="relative bg-background rounded-2xl p-8 shadow-2xl border border-border">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Stethoscope className="h-8 w-8 text-accent-strong" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      ¿Qué tipo de hemorroides tienes?
                    </h3>
                    <div className="space-y-3 text-left text-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Grado 1: Sangrado sin prolapso</p>
                          <p className="text-foreground/70">Excelente respuesta a ligadura</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Grado 2: Prolapso que regresa solo</p>
                          <p className="text-foreground/70">Buena respuesta a ligadura</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Grado 3-4: Requieren evaluación</p>
                          <p className="text-foreground/70">Posible cirugía necesaria</p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-accent-strong font-semibold">
                        Precio desde {mxn(PRICING.ligadura_hemorroides?.from)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Tu Ligadura de Hemorroides en Mérida en 5 Pasos
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Proceso completo desde evaluación hasta recuperación en 1-2 semanas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {[
              {
                n: 1,
                t: "Evaluación Médica",
                d: "Examen proctológico para determinar grado de hemorroides (30 min)",
              },
              { 
                n: 2, 
                t: "Sedación Ligera", 
                d: "Sedación consciente en Hospital Amerimed, Mérida (15 min)" 
              },
              { 
                n: 3, 
                t: "Ligadura con Bandas", 
                d: "Colocación de bandas elásticas en hemorroides internas (5-10 min)" 
              },
              { 
                n: 4, 
                t: "Recuperación Inmediata", 
                d: "Observación hasta alta médica en Mérida (1-2 horas)" 
              },
              { 
                n: 5, 
                t: "Seguimiento en Casa", 
                d: "Las hemorroides se secan y caen naturalmente (3-7 días)" 
              },
            ].map((s) => (
              <div key={s.n} className="text-center p-6 rounded-2xl border border-border bg-background">
                <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {s.n}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.t}</h3>
                <p className="text-sm text-foreground/80">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-accent-strong/10 border border-accent-strong/20">
            <div className="flex items-start gap-4">
              <Timer className="h-6 w-6 text-accent-strong flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Recuperación Rápida en Mérida</h4>
                <p className="text-foreground/80 leading-relaxed">
                  La mayoría de pacientes regresan a trabajo al día siguiente y pueden bañarse normalmente. Evita cargar peso por 2-3 semanas y mantén evacuaciones suaves con fibra y agua. Las bandas cortan el flujo sanguíneo a las hemorroides, que se secan y caen sin que te des cuenta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DR. OMAR'S SURGICAL ADVANTAGE SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  ¿Por qué el Dr. Omar Quiroz para Ligadura de Hemorroides en Mérida?
                </h2>
                
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Muchos doctores hacen ligadura de hemorroides, pero pocos tienen experiencia quirúrgica completa. El Dr. Quiroz es cirujano certificado Y endoscopista avanzado. Esto significa que puede resolver casos complicados sin mandarte con otro especialista.
                </p>

                <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <h4 className="font-semibold text-foreground mb-2">
                    ¿Cuándo necesitas un cirujano-endoscopista?
                  </h4>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>• Hemorroides grado 2 grandes que otros doctores no pueden ligar</p>
                    <p>• Sangrado severo que requiere técnicas especiales</p>
                    <p>• Hemorroides mixtas (internas + externas) complicadas</p>
                    <p>• Pacientes que ya probaron ligadura sin éxito</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 rounded-xl border border-border bg-background">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck className="h-6 w-6 text-green-600" />
                    <h4 className="font-semibold text-foreground">Triple Certificación</h4>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Cirugía general + Endoscopia avanzada + Entrenamiento en Florida
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-border bg-background">
                  <div className="flex items-center gap-3 mb-3">
                    <Microscope className="h-6 w-6 text-blue-600" />
                    <h4 className="font-semibold text-foreground">Técnica Avanzada</h4>
                  </div>
                  <p className="text-sm text-foreground/80">
                    Puede convertir a cirugía el mismo día si la ligadura no es suficiente
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Chart */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-border bg-background">
                <h4 className="text-lg font-serif font-semibold text-foreground mb-4">
                  Ligadura vs Cirugía de Hemorroides en Mérida
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 border border-green-200">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Ligadura de Hemorroides (Grado 1-2)</p>
                      <p className="text-sm text-foreground/70">Sin cortes, alta el mismo día, 70-80% efectiva</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Cirugía de Hemorroides (Grado 3-4)</p>
                      <p className="text-sm text-foreground/70">Requiere incisiones, hospitalización, 2-4 semanas recuperación</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
                    <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Sin Tratamiento</p>
                      <p className="text-sm text-foreground/70">Empeoramiento progresivo, anemia por sangrado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                <div className="flex items-start gap-3">
                  <Hospital className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Ventaja Hospital Amerimed</p>
                    <p className="text-sm text-foreground/70">
                      Si durante la ligadura descubrimos que necesitas cirugía, el Dr. Quiroz puede realizarla el mismo día sin esperas adicionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HEMORRHOID GRADES EXPLANATION SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Hemorroides Grado 1 y Grado 2: ¿Cuáles Se Pueden Ligar en Mérida?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              No todas las hemorroides son iguales. El Dr. Quiroz evalúa el grado para determinar el mejor tratamiento.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Grade 1 */}
            <div className="p-8 rounded-2xl border-2 border-green-200 bg-green-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-green-600 text-white font-bold text-lg flex items-center justify-center">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">Hemorroides Grado 1</h3>
                  <p className="text-green-700 font-medium">Excelente candidato para ligadura</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">¿Qué sientes?</h4>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>• Sangrado rojo brillante al evacuar</p>
                    <p>• No hay prolapso (nada sale del ano)</p>
                    <p>• Posible picazón o irritación leve</p>
                    <p>• Sin dolor severo al sentarte</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resultado con ligadura:</h4>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium text-green-700">85-90% de éxito</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">
                    La ligadura elimina completamente las hemorroides grado 1 en la mayoría de casos.
                  </p>
                </div>
              </div>
            </div>

            {/* Grade 2 */}
            <div className="p-8 rounded-2xl border-2 border-blue-200 bg-blue-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground">Hemorroides Grado 2</h3>
                  <p className="text-blue-700 font-medium">Buen candidato para ligadura</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">¿Qué sientes?</h4>
                  <div className="space-y-2 text-sm text-foreground/80">
                    <p>• Sangrado durante evacuaciones</p>
                    <p>• Prolapso que regresa solo después de evacuar</p>
                    <p>• Sensación de evacuación incompleta</p>
                    <p>• Molestia al sentarte por períodos largos</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Resultado con ligadura:</h4>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-700">70-80% de éxito</span>
                  </div>
                  <p className="text-sm text-foreground/70 mt-1">
                    La ligadura reduce significativamente síntomas. Algunos casos requieren sesiones adicionales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-yellow-50 border border-yellow-200">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">¿Qué pasa con Grado 3 y 4?</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Las hemorroides grado 3 (requieren empuje manual para regresar) y grado 4 (no regresan) usualmente necesitan cirugía. El Dr. Quiroz evalúa cada caso - algunos grado 3 pequeños pueden responder a ligadura, pero la mayoría requiere hemorroidectomía quirúrgica para resultados duraderos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING TRANSPARENCY SECTION */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Precio de Ligadura de Hemorroides en Mérida - {mxn(PRICING.ligadura_hemorroides?.from)} Transparente
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Precio fijo sin sorpresas, incluye todo lo necesario para tu tratamiento
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Base Price */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-accent-strong/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-accent-strong" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Precio Base Ligadura
              </h3>
              <div className="text-3xl font-bold text-accent-strong mb-2">{mxn(PRICING.ligadura_hemorroides?.from)}</div>
              <p className="text-sm text-foreground/70 mb-4">Incluye evaluación completa y procedimiento</p>
              <div className="text-left space-y-2 text-sm text-foreground/80">
                <p>• Consulta proctológica</p>
                <p>• Sedación consciente</p>
                <p>• Bandas especializadas</p>
                <p>• Quirófano Hospital Amerimed</p>
                <p>• Seguimiento post-procedimiento</p>
              </div>
            </div>

            {/* What's Included */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                ¿Qué Incluye?
              </h3>
              <div className="text-left space-y-3 text-sm text-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Evaluación médica completa</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Sedación y monitoreo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Procedimiento de ligadura</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Observación post-procedimiento</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Instrucciones de cuidado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>Contacto directo por 30 días</span>
                </div>
              </div>
            </div>

            {/* Cost Comparison */}
            <div className="p-8 rounded-2xl border border-border bg-background text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Comparación de Costos vs Hospitales Grandes
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <p className="font-medium text-foreground">Ligadura Dr. Quiroz</p>
                  <p className="text-2xl font-bold text-accent-strong">{mxn(PRICING.ligadura_hemorroides?.from)}</p>
                  <p className="text-xs text-green-700 mt-1">Procedimiento ambulatorio</p>
                </div>
                <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                  <p className="font-medium text-foreground">Cirugía Star Médica / Faro del Mayab</p>
                  <p className="text-lg font-bold text-foreground/60">$50,000-80,000 MXN</p>
                  <p className="text-xs text-red-700 mt-1">Quirófano + hospitalización</p>
                </div>
                <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <p className="font-medium text-foreground">Otros endoscopistas Mérida</p>
                  <p className="text-lg font-bold text-foreground/60">$22,000-35,000 MXN</p>
                  <p className="text-xs text-yellow-700 mt-1">Sin experiencia quirúrgica</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            {/* Location Info - Full Width */}
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <MapPin className="h-6 w-6 text-blue-600" />
                <h4 className="font-semibold text-foreground">Ubicación en Mérida</h4>
              </div>
              <div className="space-y-2 text-sm text-foreground/80 text-center">
                <p>• Hospital Amerimed, Consultorio 517</p>
                <p>• Chichí Suárez, Mérida, Yucatán</p>
                <p>• Estacionamiento gratuito</p>
                <p>• Fácil acceso desde toda la ciudad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURES GRID COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Otros Procedimientos Endoscópicos en Mérida
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              El Dr. Quiroz ofrece tratamientos completos para problemas digestivos
            </p>
          </div>
          <ProceduresGrid />
        </div>
      </section>

      {/* LOCAL MÉRIDA FOCUS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Ligadura de Hemorroides para Pacientes de Toda la Península
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Atendemos pacientes de Mérida y comunidades cercanas con el mismo nivel de cuidado
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl border border-border bg-background">
              <h4 className="font-semibold text-foreground mb-3">Zona Norte de Mérida</h4>
              <div className="text-sm text-foreground/80 space-y-1">
                <p>• Francisco de Montejo</p>
                <p>• Altabrisa</p>
                <p>• Gran Plaza</p>
                <p>• Montes de Amé</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <h4 className="font-semibold text-foreground mb-3">Centro y Sur de Mérida</h4>
              <div className="text-sm text-foreground/80 space-y-1">
                <p>• Centro Histórico</p>
                <p>• García Ginerés</p>
                <p>• Itzimná</p>
                <p>• Chichí Suárez</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <h4 className="font-semibold text-foreground mb-3">Municipios Cercanos</h4>
              <div className="text-sm text-foreground/80 space-y-1">
                <p>• Kanasín</p>
                <p>• Umán</p>
                <p>• Progreso</p>
                <p>• Valladolid</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <CallButton />
              <WhatsAppButton />
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              Agenda tu evaluación de hemorroides en Hospital Amerimed, Mérida
            </p>
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
          <Faq routeKey="ligadura_hemorroides" />
        </div>
      </section>
    </>
  )
}
