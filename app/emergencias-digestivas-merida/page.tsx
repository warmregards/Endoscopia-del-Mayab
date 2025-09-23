import { metaFor } from "@/lib/routes-seo"
import { PRICING, mxn } from "@/lib/pricing"
import Image from "next/image"
import Link from "next/link"
import { Stethoscope, MapPin, Phone, MessageCircle, Globe, CheckCircle2, ShieldCheck, Microscope, Hospital, Clock, Star, Award, Users, Heart, AlertTriangle, Activity, Calendar, Target, FileText, Search, Zap, Users2, Brain, PhoneCall, Siren, Ambulance, Timer, ChevronRight } from "lucide-react"
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import { inter, montserrat } from "@/app/fonts";

export const revalidate = 86400
export const metadata = metaFor("emergencias")

export default function EmergenciasDigestivasPage() {
  const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://wwww.endoscopiadelmayab.com").replace(/\/$/, "")

  return (
    <>

{/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-br from-accent-strong/5 via-primary/5 to-background">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-strong/3 to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              
              {/* Content - Left Side */}
              <div className="flex-1 lg:max-w-3xl space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-strong/10 border border-accent-strong/20">
                    <Siren className="h-4 w-4 text-accent-strong" />
                    <span className="text-sm font-medium text-foreground">Atención 24/7 Disponible</span>
                  </div>

                  <h1 className="`${montserrat.className} text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight`">
                    Emergencias Digestivas en Mérida – Atención Endoscópica Inmediata 24/7
                  </h1>

                  <p className="`${inter.className} text-xl text-accent-strong font-semibold`">
                    Dr. Omar Quiroz - Cirujano especialista disponible fines de semana cuando otros no están
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                      <span>Disponible 24/7 emergencias reales</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                      <span>Hospital Amerimed - Acceso conveniente</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                      <span>Experiencia quirúrgica para casos complejos</span>
                    </div>
                  </div>
                </div>

                {/* Emergency Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="urgencias" position="hero" />
                      <WhatsAppButton service="urgencias" position="hero" />
                </div>

                {/* Emergency Alert */}
                <div className="p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">¿Emergencia Digestiva Ahora?</h3>
                      <p className="text-sm text-foreground/80">
                        Vómito con sangre, dolor abdominal severo, o ictericia súbita. No esperes - contacta inmediatamente.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Services Card - Right Side */}
              <div className="flex-1 lg:max-w-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-accent-strong/20 rounded-3xl transform rotate-3" />
                  <div className="relative bg-background rounded-3xl p-8 border border-border shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto">
                        <Siren className="h-8 w-8 text-red-600" />
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-foreground/60">Emergencias 24/7</div>
                        <div className="text-2xl font-bold text-red-600">999-236-0153</div>
                        <div className="text-sm text-foreground/80">Llamada directa al Dr. Quiroz</div>
                      </div>
                    </div>

                    {/* Emergency Services Included */}
                    <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-background border border-border">
                      <h3 className="text-lg font-serif font-bold text-foreground mb-4 text-center">
                        Emergencias que atendemos
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                          <span className="text-sm text-foreground/80">Hemorragia digestiva activa</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                          <span className="text-sm text-foreground/80">Obstrucción intestinal aguda</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                          <span className="text-sm text-foreground/80">Cuerpos extraños urgentes</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                          <span className="text-sm text-foreground/80">Complicaciones post-endoscopia</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0" />
                          <span className="text-sm text-foreground/80">Ictericia obstructiva súbita</span>
                        </div>
                      </div>

                      <div className="mt-4 p-3 rounded-xl bg-red-50/50 border border-red-200/50">
                        <h4 className="font-semibold text-foreground mb-1 text-sm">¿Cómo funciona?</h4>
                        <p className="text-xs text-foreground/80">
                          Llama, explica síntomas, te damos cita inmediata en Hospital Amerimed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY TYPES SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Emergencias que Atendemos 24/7
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Atención inmediata para hemorragias, obstrucciones y urgencias endoscópicas
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              
              {/* Hemorragias Digestivas */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                  <Activity className="h-8 w-8 text-accent-strong" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Hemorragias Digestivas
                </h3>
                <div className="space-y-3 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Vómito con sangre (hematemesis)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Evacuaciones negras (melena)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Sangre roja en evacuaciones</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Mareo y debilidad súbita</p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-accent-strong/5">
                  <p className="text-xs font-medium text-accent-strong">
                    → Endoscopia/colonoscopia inmediata con control hemostático
                  </p>
                </div>
              </div>

              {/* Obstrucciones Digestivas */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Obstrucciones Digestivas
                </h3>
                <div className="space-y-3 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Cuerpos extraños en esófago</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Obstrucción biliar (ictericia súbita)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Obstrucción colónica</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Vómito persistente</p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-primary/5">
                  <p className="text-xs font-medium text-primary">
                    → CPRE de emergencia, extracción endoscópica, stents
                  </p>
                </div>
              </div>

              {/* Perforaciones */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent-light/10 flex items-center justify-center mb-6">
                  <ShieldCheck className="h-8 w-8 text-accent-light" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Perforaciones Digestivas
                </h3>
                <div className="space-y-3 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Dolor torácico severo tras vómito</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Dolor abdominal súbito severo</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Perforación durante procedimiento</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-4 w-4 text-accent-strong flex-shrink-0 mt-1" />
                    <p className="text-sm">Fiebre con dolor intenso</p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-accent-light/5">
                  <p className="text-xs font-medium text-accent-light">
                    → Sutura endoscópica, clips hemostáticos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY PROCEDURES SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Procedimientos de Urgencia Disponibles
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Endoscopia terapéutica inmediata con equipo especializado
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              
              {/* CPRE de Emergencia */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      CPRE de Emergencia
                    </h3>
                    <p className="text-sm text-foreground/70">Disponible 24/7 fines de semana</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-foreground/80 mb-4">
                  <p className="text-sm"><strong>Indicaciones:</strong> Colangitis, obstrucción biliar aguda</p>
                  <p className="text-sm"><strong>Síntomas críticos:</strong> Ictericia + fiebre + dolor (triada de Charcot)</p>
                  <p className="text-sm"><strong>Procedimiento:</strong> Extracción de cálculos, colocación de stents</p>
                </div>

                <Link href="/cpre-merida" className="inline-flex items-center gap-2 text-accent-strong hover:text-accent-strong/80 font-medium">
                  <span>Más sobre CPRE</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Ligadura de Várices */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      Ligadura de Várices Esofágicas
                    </h3>
                    <p className="text-sm text-foreground/70">Control inmediato de hemorragias</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-foreground/80 mb-4">
                  <p className="text-sm"><strong>Emergencia:</strong> Hemorragia por várices esofágicas</p>
                  <p className="text-sm"><strong>Procedimiento:</strong> Ligadura endoscópica inmediata</p>
                  <p className="text-sm"><strong>Seguimiento:</strong> Control post-procedimiento incluido</p>
                </div>

                <Link href="/ligadura-varices-esofagicas-merida" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                  <span>Más sobre Ligadura</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Extracción de Cuerpos Extraños */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-light/10 flex items-center justify-center">
                    <Search className="h-6 w-6 text-accent-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      Extracción de Cuerpos Extraños
                    </h3>
                    <p className="text-sm text-foreground/70">Atención inmediata 24 horas</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-foreground/80 mb-4">
                  <p className="text-sm"><strong>Urgencia:</strong> Objetos impactados en esófago/estómago</p>
                  <p className="text-sm"><strong>Técnica:</strong> Extracción endoscópica segura</p>
                  <p className="text-sm"><strong>Horario:</strong> Respuesta rápida cualquier momento</p>
                </div>

                <Link href="/extraccion-cuerpos-extranos-endoscopia-merida" className="inline-flex items-center gap-2 text-accent-light hover:text-accent-light/80 font-medium">
                  <span>Más sobre Extracción</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Esclerosis de Várices Gástricas */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center">
                    <Microscope className="h-6 w-6 text-accent-strong" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground">
                      Esclerosis de Várices Gástricas
                    </h3>
                    <p className="text-sm text-foreground/70">Control de hemorragias gástricas</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-foreground/80 mb-4">
                  <p className="text-sm"><strong>Procedimiento:</strong> Control de hemorragias gástricas</p>
                  <p className="text-sm"><strong>Técnica:</strong> Inyección esclerosante o técnicas térmicas</p>
                  <p className="text-sm"><strong>Experiencia:</strong> Manejo de casos complejos</p>
                </div>

                <Link href="/esclerosis-varices-gastricas-merida" className="inline-flex items-center gap-2 text-accent-strong hover:text-accent-strong/80 font-medium">
                  <span>Más sobre Esclerosis</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* WARNING SIGNS SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Síntomas de Alarma - Busca Atención Inmediata
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Estos síntomas requieren evaluación endoscópica urgente
              </p>
            </div>

            {/* Emergency vs Planned Grid */}
            <div className="grid gap-8 lg:grid-cols-2 mb-12">
              
              {/* Immediate Emergency */}
              <div className="p-8 rounded-2xl border border-accent-strong/20 bg-gradient-to-br from-accent-strong/5 to-background">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-strong/10 flex items-center justify-center">
                    <Siren className="h-6 w-6 text-accent-strong" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    Emergencias Inmediatas
                  </h3>
                </div>
                
                <div className="space-y-4 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p><strong>Vómito con sangre</strong> - hematemesis roja o en "borra de café"</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p><strong>Evacuaciones negras o con sangre</strong> - melena o hematoquecia</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p><strong>Ictericia + fiebre + dolor</strong> - triada de Charcot (colangitis)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p><strong>Dolor abdominal severo súbito</strong> - posible perforación</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p><strong>Dificultad súbita para tragar</strong> - disfagia aguda</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-accent-strong flex-shrink-0 mt-0.5" />
                    <p><strong>Dolor torácico tras vómito intenso</strong> - posible ruptura esofágica</p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-accent-strong/10 border border-accent-strong/20">
                  <p className="text-sm font-medium text-accent-strong">
                    <strong>Contacta inmediatamente:</strong> Estos síntomas no pueden esperar hasta el lunes. Dr. Omar disponible 24/7.
                  </p>
                </div>
              </div>

              {/* Signs of Severity */}
              <div className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground">
                    Signos de Gravedad
                  </h3>
                </div>
                
                <div className="space-y-4 text-foreground/80">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p><strong>Mareo o desmayo</strong> - pérdida de sangre significativa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p><strong>Debilidad súbita severa</strong> - compromiso hemodinámico</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p><strong>Palidez marcada</strong> - anemia aguda</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p><strong>Pulso acelerado</strong> - taquicardia compensatoria</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p><strong>Presión arterial baja</strong> - shock hipovolémico</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p><strong>Sed intensa y confusión</strong> - deshidratación severa</p>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary">
                    <strong>Acción inmediata:</strong> Si presentas estos signos junto con síntomas digestivos, dirígete al hospital ahora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                ¿Por Qué Elegir Nuestro Servicio de Emergencias?
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Disponibilidad real cuando otros especialistas no están disponibles
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              
              {/* 24/7 Availability */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                  <Timer className="h-8 w-8 text-accent-strong" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Disponibilidad Real 24/7
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Atención en fines de semana cuando otros no están disponibles. Dr. Omar atiende personalmente las emergencias. Respuesta rápida por WhatsApp.
                </p>
              </div>

              {/* Surgical Experience */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Experiencia Quirúrgica
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Cirujano certificado con experiencia en casos complejos. Manejo integral: endoscopia + cirugía si es necesario. Conexión directa con quirófano.
                </p>
              </div>

              {/* Strategic Location */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent-light/10 flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-accent-light" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Ubicación Estratégica
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Hospital Amerimed - fácil acceso desde toda Mérida. Estacionamiento gratuito. Instalaciones modernas con equipo de última generación.
                </p>
              </div>

              {/* Transparent Costs */}
              <div className="p-8 rounded-2xl border border-border bg-background hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-accent-strong/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-accent-strong" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Costos Transparentes
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Precios accesibles vs otros hospitales privados. Sin sorpresas en el costo. Seguimiento post-procedimiento incluido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY PROCESS SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Cómo Funciona Nuestra Atención de Emergencia
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Proceso optimizado para atención rápida y efectiva
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              
              {/* Step 1 */}
              <div className="text-center p-8 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                  1
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Contacto Inmediato</h3>
                <p className="text-foreground/80 mb-4">
                  Llamada o WhatsApp 24/7. Evaluación inicial por teléfono para determinar urgencia y coordinar atención inmediata.
                </p>
                <div className="flex justify-center gap-2">
                  <Phone className="h-5 w-5 text-accent-strong" />
                  <MessageCircle className="h-5 w-5 text-accent-strong" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center p-8 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                  2
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Llegada al Hospital</h3>
                <p className="text-foreground/80 mb-4">
                  Recepción directa en Hospital Amerimed. Acceso rápido sin esperas innecesarias. Preparación inmediata para procedimiento.
                </p>
                <div className="flex justify-center">
                  <Hospital className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center p-8 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-full bg-accent-light text-accent-light-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                  3
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Evaluación y Procedimiento</h3>
                <p className="text-foreground/80 mb-4">
                  Examen presencial, determinación del procedimiento necesario y ejecución inmediata con sedación segura.
                </p>
                <div className="flex justify-center">
                  <Stethoscope className="h-5 w-5 text-accent-light" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="text-center p-8 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                  4
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Procedimiento Endoscópico</h3>
                <p className="text-foreground/80 mb-4">
                  Endoscopia terapéutica con equipo Olympus. Sedación consciente segura. Control hemostático o resolución de obstrucción.
                </p>
                <div className="flex justify-center">
                  <Microscope className="h-5 w-5 text-accent-strong" />
                </div>
              </div>

              {/* Step 5 */}
              <div className="text-center p-8 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                  5
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Recuperación y Observación</h3>
                <p className="text-foreground/80 mb-4">
                  Monitoreo post-procedimiento. Explicación detallada de hallazgos. Coordinación con otros especialistas si es necesario.
                </p>
                <div className="flex justify-center">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Step 6 */}
              <div className="text-center p-8 rounded-2xl border border-border bg-background">
                <div className="w-16 h-16 rounded-full bg-accent-light text-accent-light-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-6">
                  6
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-4">Seguimiento Incluido</h3>
                <p className="text-foreground/80 mb-4">
                  Control post-procedimiento incluido. Seguimiento telefónico. Coordinación con médico de cabecera si es necesario.
                </p>
                <div className="flex justify-center">
                  <CheckCircle2 className="h-5 w-5 text-accent-light" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PATIENT TESTIMONIAL SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Experiencia de Nuestros Pacientes en Emergencias
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Atención que marca la diferencia cuando más lo necesitas
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-accent-light/5 to-accent-strong/5 border border-accent-strong/20">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent-strong/10 flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-accent-strong" />
                  </div>
                  <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                    "Llegué al hospital un sábado por la noche vomitando sangre. Otros doctores no estaban disponibles, pero el Dr. Omar respondió inmediatamente. En 30 minutos estaba en endoscopia controlando la hemorragia. No solo me salvó, sino que explicó todo con paciencia."
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-accent-strong text-accent-strong" />
                      ))}
                    </div>
                    <span className="text-foreground/70 font-medium">- Paciente atendido en emergencia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRACTICAL INFORMATION SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Información para Emergencias
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Todo lo que necesitas saber para una atención rápida y efectiva
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* Contact and Location */}
              <div className="p-8 rounded-2xl border border-border bg-background">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Contacto de Emergencia
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-strong/10 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-accent-strong" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">WhatsApp 24/7</p>
                      <p className="text-sm text-foreground/70">Respuesta inmediata para emergencias</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Teléfono de Emergencias</p>
                      <p className="text-sm text-foreground/70">Llamadas directas 24 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-light/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-accent-light" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Hospital Amerimed</p>
                      <p className="text-sm text-foreground/70">Av. de los Itzaes No. 242 x 59A y 61, Centro, Mérida, Yucatán</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* CTA Buttons */}
                <WhatsAppButton service="urgencias" position="location" />
                  
                  <Link href="https://maps.google.com/maps?q=Hospital+Amerimed+Merida" target="_blank" 
                        className="flex-1 bg-accent-light hover:bg-accent-light/90 text-accent-light-foreground font-bold py-3 px-6 rounded-xl inline-flex items-center justify-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Ver Ubicación
                  </Link>
                </div>
              </div>

              {/* Preparation and Payment */}
              <div className="p-8 rounded-2xl border border-border bg-background">
                <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                  Preparación y Pagos
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Qué Traer a la Emergencia:</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Estudios previos si los tienes (no indispensable)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Lista de medicamentos actuales</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Familiar acompañante</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Identificación oficial</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Opciones de Pago:</h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Seguros de gastos médicos mayores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Pago directo con cotización previa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-accent-strong flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Opciones de financiamiento disponibles</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                    <p className="text-sm text-foreground/80">
                      <strong>Nota importante:</strong> En emergencias reales, no es necesario ayuno previo. La prioridad es el control inmediato de la urgencia digestiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-accent-strong/5 via-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  ¿Tienes una Emergencia Digestiva?
                </h2>
                <p className="text-xl text-foreground/70">
                  No esperes - las emergencias digestivas requieren atención inmediata
                </p>
              </div>

              {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="urgencias" position="cta section" />
                      <WhatsAppButton service="urgencias" position="cta section" />
                </div>

              <div className="p-6 rounded-2xl bg-gradient-to-r from-muted/50 to-background border border-border max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 text-sm text-foreground/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Hospital Amerimed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Dr. Omar Quiroz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Atención 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCEDURES GRID COMPONENT */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProceduresGrid />
        </div>
      </section>

    </>
  )
}
