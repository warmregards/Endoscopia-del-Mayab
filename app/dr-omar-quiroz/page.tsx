import Image from "next/image"
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
  Calendar,
  Activity,
  Target,
  FileText,
  ExternalLink,
  Zap,
  Award,
  Users,
  Star,
  GraduationCap,
  Phone,
  Globe,
} from "lucide-react";
import ProceduresGrid from "@/components/ProceduresGrid"
import Faq from "@/components/Faq"
import CallButton from "@/components/CallButton"
import WhatsAppButton from "@/components/WhatsAppButton"

export const revalidate = 86400
export const metadata = metaFor("doctor")

export default function DoctorOmarQuirozPage() {
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
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/10 border border-accent-light/20">
                  <Award className="h-4 w-4 text-accent-strong" />
                  <span className="text-sm font-medium text-foreground">Triple Certificación CMCG</span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-foreground leading-tight">
                  Dr. Omar Quiroz - Cirujano Bariátrico, General y Endoscopista en Mérida
                </h1>
                
                <p className="text-xl text-accent-strong font-semibold">
                  Más de 15 años transformando vidas en Mérida con procedimientos mínimamente invasivos y atención personalizada.
                </p>

                <div className="flex flex-wrap gap-4 text-sm font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>15+ años experiencia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>1,200+ cirugías realizadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Triple certificación CMCG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent-strong" />
                    <span>Star Médica y Faro del Mayab</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-left">
                      <CallButton service="omar profile" position="hero" />
                      <WhatsAppButton service="omar profile" position="hero" />
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div className="flex-1 lg:max-w-lg">
              <div className="relative">
                <Image
                  src="/schedule-now.webp"
                  alt="Dr. Omar Quiroz - Cirujano en Mérida"
                  width={600}
                  height={600}
                  className="rounded-3xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRESENTATION SECTION */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Presentación Profesional
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              El Dr. Omar Quiroz es un cirujano triple certificado por el Consejo Mexicano de Cirugía General (CMCG), con especialidad en:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-accent-light/5 to-accent-strong/5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-light to-accent-strong flex items-center justify-center mb-6">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Cirugía General</h3>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p><strong>Cédula Profesional:</strong> 11629429</p>
                <p><strong>Consejo CMCG:</strong> C18044318</p>
              </div>
              <p className="text-foreground/80">Especialista en procedimientos quirúrgicos generales con técnicas mínimamente invasivas.</p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-accent-light/5 to-accent-strong/5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-light to-accent-strong flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Cirugía Bariátrica</h3>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p><strong>Cédula de Especialidad:</strong> CB20005620</p>
              </div>
              <p className="text-foreground/80">Especialización en manga gástrica, bypass gástrico y procedimientos para obesidad.</p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-gradient-to-br from-accent-light/5 to-accent-strong/5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-light to-accent-strong flex items-center justify-center mb-6">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">Endoscopía</h3>
              <div className="space-y-2 text-sm text-foreground/70 mb-4">
                <p><strong>Cédula de Especialidad:</strong> EGI230072</p>
              </div>
              <p className="text-foreground/80">Diagnósticos y tratamientos endoscópicos digestivos avanzados.</p>
            </div>
          </div>

          <p className="text-lg text-foreground/80 leading-relaxed text-center max-w-4xl mx-auto">
            Con más de 15 años de experiencia en Mérida, el Dr. Quiroz combina procedimientos mínimamente invasivos y atención personalizada en hospitales de primer nivel como Star Médica Mérida y Faro del Mayab.
          </p>
        </div>
      </section>

      {/* DETAILED SPECIALTIES */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-strong text-accent-strong-foreground flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">Cirujano Bariátrico y General en Mérida</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                El Dr. Omar Quiroz es un cirujano bariátrico en Mérida con especialización también en cirugía general y laparoscópica. Cuenta con más de 15 años de experiencia en procedimientos como manga gástrica, bypass gástrico, colecistectomía y apendicectomía, realizados con precisión y mínima invasión.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-strong text-accent-strong-foreground flex items-center justify-center">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">Endoscopista en Mérida con Triple Certificación</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Como endoscopista en Mérida, el Dr. Quiroz está certificado para realizar diagnósticos y tratamientos por vía endoscópica, incluyendo procedimientos digestivos mínimamente invasivos. Esta especialización le permite ofrecer una atención integral a sus pacientes.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-strong text-accent-strong-foreground flex items-center justify-center">
                  <Activity className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">Especialista en Cirugías Laparoscópicas en Mérida</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Gracias a su formación en laparoscopía avanzada, el Dr. Quiroz es considerado un cirujano laparoscópico en Mérida. Esta técnica permite intervenciones con incisiones mínimas, menor dolor postoperatorio y una recuperación más rápida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Certificaciones & Formación
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Formación académica y entrenamiento especializado de excelencia
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Médico Cirujano</h3>
              <p className="text-sm font-medium text-accent-strong mb-1">UNAM, Ciudad de México</p>
              <p className="text-xs text-foreground/70">Formación médica integral con enfoque en cirugía</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cirugía General</h3>
              <p className="text-sm font-medium text-accent-strong mb-1">UNAM - Especialidad</p>
              <p className="text-xs text-foreground/70">Cédula Profesional 11629429 • Consejo CMCG C18044318</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Rotación Laparoscópica Avanzada</h3>
              <p className="text-sm font-medium text-accent-strong mb-1">Centro Médico ABC (CDMX)</p>
              <p className="text-xs text-foreground/70">Entrenamiento en técnicas mínimamente invasivas</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Cirugía Bariátrica y Endoscopía</h3>
              <p className="text-sm font-medium text-accent-strong mb-1">Hospital General de Tláhuac</p>
              <p className="text-xs text-foreground/70">Especialización en obesidad y enfermedades metabólicas</p>
            </div>

            <div className="text-center p-6 rounded-2xl border border-border bg-background">
              <div className="w-12 h-12 rounded-full bg-accent-strong text-accent-strong-foreground font-bold text-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fellowship Bariátrico</h3>
              <p className="text-sm font-medium text-accent-strong mb-1">Gastric Sleeve Center, Florida</p>
              <p className="text-xs text-foreground/70">Entrenamiento avanzado en manga gástrica y bypass</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED SPECIALTIES */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-strong text-accent-strong-foreground flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">Cirujano Bariátrico y General en Mérida</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                El Dr. Omar Quiroz es un cirujano bariátrico en Mérida con especialización también en cirugía general y laparoscópica. Cuenta con más de 15 años de experiencia en procedimientos como manga gástrica, bypass gástrico, colecistectomía y apendicectomía, realizados con precisión y mínima invasión.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-strong text-accent-strong-foreground flex items-center justify-center">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">Endoscopista en Mérida con Triple Certificación</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Como endoscopista en Mérida, el Dr. Quiroz está certificado para realizar diagnósticos y tratamientos por vía endoscópica, incluyendo procedimientos digestivos mínimamente invasivos. Esta especialización le permite ofrecer una atención integral a sus pacientes.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-strong text-accent-strong-foreground flex items-center justify-center">
                  <Activity className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground">Especialista en Cirugías Laparoscópicas en Mérida</h2>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Gracias a su formación en laparoscopía avanzada, el Dr. Quiroz es considerado un cirujano laparoscópico en Mérida. Esta técnica permite intervenciones con incisiones mínimas, menor dolor postoperatorio y una recuperación más rápida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBERSHIPS SECTION */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Membresías Profesionales
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Miembro activo de las principales organizaciones médicas
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-8 w-8 text-accent-strong" />
                <div>
                  <h3 className="font-bold text-foreground">CMCOEM</h3>
                  <p className="text-xs text-foreground/70">Certificación Médica</p>
                </div>
              </div>
              <p className="text-sm font-medium text-accent-strong mb-2">Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas</p>
              <p className="text-xs text-foreground/70">Certificación en cirugía bariátrica y metabólica</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="h-8 w-8 text-accent-strong" />
                <div>
                  <h3 className="font-bold text-foreground">AMCE</h3>
                  <p className="text-xs text-foreground/70">Asociación Médica</p>
                </div>
              </div>
              <p className="text-sm font-medium text-accent-strong mb-2">Asociación Mexicana de Cirugía Endoscópica</p>
              <p className="text-xs text-foreground/70">Especialización en cirugía mínimamente invasiva</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="h-8 w-8 text-accent-strong" />
                <div>
                  <h3 className="font-bold text-foreground">COFEPRIS</h3>
                  <p className="text-xs text-foreground/70">Certificación</p>
                </div>
              </div>
              <p className="text-sm font-medium text-accent-strong mb-2">Comisión Federal para la Protección contra Riesgos Sanitarios</p>
              <p className="text-xs text-foreground/70">Licencia sanitaria federal vigente</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-accent-strong" />
                <div>
                  <h3 className="font-bold text-foreground">CMCG</h3>
                  <p className="text-xs text-foreground/70">Certificación Médica</p>
                </div>
              </div>
              <p className="text-sm font-medium text-accent-strong mb-2">Consejo Mexicano de Cirugía General</p>
              <p className="text-xs text-foreground/70">Certificación en cirugía general</p>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-accent-strong" />
                <div>
                  <h3 className="font-bold text-foreground">IFSO</h3>
                  <p className="text-xs text-foreground/70">Asociación Internacional</p>
                </div>
              </div>
              <p className="text-sm font-medium text-accent-strong mb-2">International Federation for the Surgery of Obesity</p>
              <p className="text-xs text-foreground/70">Federación internacional de cirugía bariátrica</p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Credenciales Profesionales
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="h-6 w-6 text-accent-strong" />
                Licencias
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/30 border border-border">
                  <span className="font-medium text-foreground">COFEPRIS:</span>
                  <span className="text-foreground/70 font-mono text-sm">2431012002A00355</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/30 border border-border">
                  <span className="font-medium text-foreground">Cédula Médica:</span>
                  <span className="text-foreground/70 font-mono text-sm">8126111</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-muted/30 border border-border">
                  <span className="font-medium text-foreground">Cédula General:</span>
                  <span className="text-foreground/70 font-mono text-sm">11629429</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-accent-strong" />
                Certificaciones
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 rounded-lg bg-accent-light/10 border border-accent-light/20">
                  <span className="font-medium text-foreground">Cirugía General:</span>
                  <span className="text-accent-strong font-mono text-sm font-bold">C18044318</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-accent-light/10 border border-accent-light/20">
                  <span className="font-medium text-foreground">Alta Especialidad: Cirugía Bariátrica:</span>
                  <span className="text-accent-strong font-mono text-sm font-bold">CB20005620</span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-lg bg-accent-light/10 border border-accent-light/20">
                  <span className="font-medium text-foreground">Alta Especialidad: Endoscopía:</span>
                  <span className="text-accent-strong font-mono text-sm font-bold">EGI230072</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Stats */}
          <div className="mt-12 p-8 rounded-2xl border border-border bg-gradient-to-br from-accent-light/5 to-accent-strong/5">
            <h3 className="text-xl font-serif font-bold text-foreground mb-6 text-center">Experiencia Clínica</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-center p-6 rounded-xl bg-background/60">
                <div className="text-4xl font-bold text-accent-strong mb-2">15+</div>
                <div className="text-foreground font-medium">Años de práctica</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-background/60">
                <div className="text-4xl font-bold text-accent-strong mb-2">1,200+</div>
                <div className="text-foreground font-medium">Cirugías realizadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOSPITAL AFFILIATIONS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Hospitales de Primer Nivel
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Atención en los mejores centros médicos de Mérida con tecnología de vanguardia
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-strong text-accent-strong-foreground flex items-center justify-center">
                  <Microscope className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">Star Médica Mérida</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Hospital de alta especialidad con tecnología de vanguardia para procedimientos quirúrgicos complejos y cirugía bariátrica.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-strong text-accent-strong-foreground flex items-center justify-center">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">Faro del Mayab</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Centro médico especializado con instalaciones modernas para endoscopía y procedimientos mínimamente invasivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-primary to-accent-strong">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              ¿Listo para transformar tu vida?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Agenda una consulta personalizada con el Dr. Omar Quiroz y descubre cómo los procedimientos mínimamente invasivos pueden mejorar tu calidad de vida.
            </p>
            {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <CallButton service="omar profile" position="cta section" />
                      <WhatsAppButton service="omar profile" position="cta section" />
                </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <Faq 
        title="Preguntas Frecuentes sobre el Dr. Omar Quiroz"
        faqs={[
          {
            question: "¿Qué certificaciones tiene el Dr. Omar Quiroz?",
            answer: "El Dr. Quiroz cuenta con triple certificación del Consejo Mexicano de Cirugía General (CMCG): Cirugía General (C18044318), Alta Especialidad en Cirugía Bariátrica (CB20005620), y Alta Especialidad en Endoscopía (EGI230072)."
          },
          {
            question: "¿Dónde realizó su formación médica el Dr. Quiroz?",
            answer: "El Dr. Quiroz se formó como Médico Cirujano en la UNAM, realizó su especialidad en Cirugía General también en la UNAM, completó rotación en Laparoscopia Avanzada en el Centro Médico ABC, y realizó Fellowship Bariátrico en Gastric Sleeve Center en Florida."
          },
          {
            question: "¿En qué hospitales atiende el Dr. Omar Quiroz?",
            answer: "El Dr. Quiroz atiende en hospitales de primer nivel en Mérida, incluyendo Star Médica Mérida y Faro del Mayab, centros con tecnología de vanguardia."
          },
          {
            question: "¿Cuánta experiencia tiene el Dr. Quiroz?",
            answer: "El Dr. Omar Quiroz cuenta con más de 15 años de experiencia en Mérida y ha realizado más de 1,200 cirugías, especializándose en procedimientos mínimamente invasivos."
          },
          {
            question: "¿Qué procedimientos realiza el Dr. Quiroz?",
            answer: "El Dr. Quiroz realiza cirugía bariátrica (manga gástrica, bypass gástrico), cirugía general (colecistectomía, apendicectomía), y procedimientos endoscópicos digestivos, todos con técnicas mínimamente invasivas."
          }
        ]}
      />
    </>
  )
}
