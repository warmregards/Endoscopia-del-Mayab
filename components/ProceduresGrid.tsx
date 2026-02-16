// components/ProceduresGrid.tsx
import Link from "next/link";
import { SERVICES, type ServiceItem, type ServiceCategory } from "@/lib/services";
import { PRICING, mxn } from "@/lib/pricing";
import {
  Stethoscope,
  Microscope,
  ShieldCheck,
  Activity,
  Zap,
  Settings,
  ArrowRight,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Icon map — keyed by slug, falls back to Stethoscope
// ---------------------------------------------------------------------------

const ICON_MAP: Record<string, typeof Stethoscope> = {
  "endoscopia-merida": Microscope,
  "colonoscopia-merida": Stethoscope,
  "panendoscopia-merida": Activity,
  "cpre-merida": ShieldCheck,

  "ligadura-varices-esofagicas-merida": Zap,
  "ligadura-hemorroides-internas-merida": Zap,
  "gastrostomia-endoscopica-peg-merida": Settings,
  "extraccion-cuerpos-extranos-endoscopia-merida": Settings,
  "dilatacion-esofagica-merida": Activity,
  "esclerosis-varices-gastricas-merida": Zap,
  "dilatacion-biliar-merida": Activity,
  "dilatacion-colonica-merida": Activity,

  "endoprotesis-esofagicas-merida": Settings,
  "endoprotesis-biliares-merida": Settings,
  "endoprotesis-duodenales-merida": Settings,
  "endoprotesis-colonicas-merida": Settings,

  "cierre-fistulas-clips-endoscopicos-merida": ShieldCheck,
  "sutura-endoscopica-merida": ShieldCheck,
  "diseccion-endoscopica-submucosa-esd-merida": Microscope,
  "reseccion-endoscopica-mucosa-emr-merida": Microscope,
  "retiro-balon-gastrico-merida": Settings,
  "apc-coagulacion-plasma-argon-merida": Zap,
};

// ---------------------------------------------------------------------------
// Category display config
// ---------------------------------------------------------------------------

const CATEGORY_CONFIG: Record<
  string,
  { label: string; icon: typeof Stethoscope }
> = {
  diagnostic: { label: "Procedimientos Principales", icon: Microscope },
  therapeutic: { label: "Procedimientos Terapéuticos", icon: Zap },
  advanced: { label: "Procedimientos Avanzados", icon: ShieldCheck },
  // Stents are a UI sub-group of "advanced" — handled separately below
};

// Stent slugs for the dedicated UI group
const STENT_SLUGS = new Set([
  "endoprotesis-esofagicas-merida",
  "endoprotesis-biliares-merida",
  "endoprotesis-duodenales-merida",
  "endoprotesis-colonicas-merida",
]);

// ---------------------------------------------------------------------------
// Card
// ---------------------------------------------------------------------------

function ProcedureCard({ s }: { s: ServiceItem }) {
  const Icon = ICON_MAP[s.slug] || Stethoscope;
  const pricing = s.pricingKey ? PRICING[s.pricingKey] : undefined;

  return (
    <Link
      href={`/${s.slug}`}
      className="group flex items-center gap-3 p-3 rounded-xl border border-border bg-background hover:border-accent-light hover:bg-muted/30 transition-all duration-200"
    >
      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-strong/10 transition-colors">
        <Icon className="h-4 w-4 text-primary group-hover:text-accent-strong transition-colors" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-sm font-semibold text-foreground group-hover:text-accent-strong transition-colors line-clamp-1">
          {s.displayName}
        </h3>
        {!s.quoteOnly && pricing?.from !== undefined && (
          <p className="text-xs text-foreground/60">Desde {mxn(pricing.from)}</p>
        )}
      </div>

      <ArrowRight className="h-4 w-4 text-foreground/40 group-hover:text-accent-strong group-hover:translate-x-0.5 transition-all flex-shrink-0" />
    </Link>
  );
}

// ---------------------------------------------------------------------------
// Section
// ---------------------------------------------------------------------------

function CategorySection({
  label,
  icon: Icon,
  services,
}: {
  label: string;
  icon: typeof Stethoscope;
  services: ServiceItem[];
}) {
  if (!services.length) return null;
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
        <Icon className="h-5 w-5 text-accent-strong" />
        {label}
      </h3>
      <div className="space-y-2">
        {services.map((s) => (
          <ProcedureCard key={s.slug} s={s} />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

export default function ProceduresGrid() {
  const diagnostic = SERVICES.filter((s) => s.category === "diagnostic");
  const therapeutic = SERVICES.filter(
    (s) => s.category === "therapeutic" && !STENT_SLUGS.has(s.slug)
  );
  const stents = SERVICES.filter((s) => STENT_SLUGS.has(s.slug));
  const advanced = SERVICES.filter(
    (s) => s.category === "advanced" && !STENT_SLUGS.has(s.slug)
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Todos los Procedimientos
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Catálogo completo de procedimientos endoscópicos especializados
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <CategorySection
            label="Procedimientos Principales"
            icon={Microscope}
            services={diagnostic}
          />
          <CategorySection
            label="Endoprótesis (Stents)"
            icon={Settings}
            services={stents}
          />
          <CategorySection
            label="Procedimientos Avanzados"
            icon={ShieldCheck}
            services={advanced}
          />
          <CategorySection
            label="Procedimientos Terapéuticos"
            icon={Zap}
            services={therapeutic}
          />
        </div>
      </div>
    </section>
  );
}