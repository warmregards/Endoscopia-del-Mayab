// /lib/videos.ts
// Single source of truth for embedded YouTube videos.
// Consumed by: components/YouTubeEmbed.tsx (presentation) + lib/schema.ts
// (videoSchema → VideoObject JSON-LD for video rich results).
//
// To add a video:
//   1. Add an entry to VIDEOS keyed by a short slug (usually the page key).
//   2. Render it on the page: const video = getVideo("key")
//        <YouTubeEmbed id={video.id} title={video.title} caption={video.title} service={video.service} />
//        <script ... JSON.stringify(videoSchema(video)) />
//   3. id, uploadDate, duration, durationSeconds can all be read off YouTube.
//      uploadDate MUST keep its timezone offset (the full "...T..-07:00" form) —
//      a bare date trips Search Console's "missing a timezone" warning.
//      Chapters come from the video description's timestamp list.

export interface VideoChapter {
  /** Chapter label as shown in the video. */
  name: string
  /** Start offset in whole seconds from the beginning of the video. */
  start: number
}

export interface Video {
  /** YouTube video ID — the part after `youtu.be/` or `watch?v=`. */
  id: string
  /** Video title (used as the embed label, caption, and schema name). */
  title: string
  /** Plain-language description (schema description). */
  description: string
  /**
   * Upload date, ISO 8601 WITH timezone offset
   * (e.g. "2026-06-26T10:08:29-07:00"). Google Search Console rejects a bare
   * date ("missing a timezone") — use the full `uploadDate` value off YouTube.
   */
  uploadDate: string
  /** Duration, ISO 8601 (e.g. "PT6M18S"). */
  duration: string
  /** Total length in seconds — closes the final chapter's endOffset. */
  durationSeconds: number
  /** Page the video is embedded on, e.g. "/cpre-merida". */
  path: string
  /** Service tag for GTM (e.g. "CPRE"). */
  service?: string
  /** Chapter markers — surfaced by Google as "key moments". */
  chapters?: VideoChapter[]
}

export const VIDEOS = {
  colonoscopia: {
    id: "ZfzmgwvuvrM",
    title: "Colonoscopia en Mérida: precio, dolor, preparación y más",
    description:
      "¿Duele? ¿Cuánto cuesta? ¿A qué edad? El Dr. Omar Quiroz —Endoscopista Gastrointestinal y Cirujano General, egresado de la UNAM— responde las 8 dudas más comunes sobre la colonoscopia en Mérida. Realiza colonoscopia con sedación de anestesiólogo certificado y equipo de alta definición en Hospital Amerimed, para la detección y prevención del cáncer colorrectal, con retiro de pólipos y toma de biopsias sin límite en la misma sesión.",
    uploadDate: "2026-06-29T11:45:21-07:00",
    duration: "PT8M31S",
    durationSeconds: 511,
    path: "/colonoscopia-merida",
    service: "colonoscopia",
    chapters: [
      { name: "Introducción", start: 0 },
      { name: "¿Qué es una colonoscopia y a qué edad debo hacérmela?", start: 11 },
      { name: "¿Cuánto cuesta una colonoscopia en Mérida?", start: 76 },
      { name: "¿Duele la colonoscopia?", start: 127 },
      { name: "¿Cómo es la preparación?", start: 183 },
      { name: "¿Es peligrosa la colonoscopia?", start: 254 },
      { name: "Colonoscopia tradicional vs. virtual", start: 306 },
      { name: "¿La biopsia de colon cuesta extra?", start: 391 },
      { name: "¿Tu seguro cubre la colonoscopia?", start: 447 },
    ],
  },
  endoscopia: {
    id: "kyunUdvltHk",
    title: "Endoscopia en Mérida: qué es, precio y si duele",
    description:
      "¿Te indicaron una endoscopia, panendoscopia o gastroscopia? Las tres son el mismo estudio. El Dr. Omar Quiroz —Endoscopista Gastrointestinal y Cirujano General— explica qué es, cuánto cuesta, si duele, qué enfermedades detecta y cómo prepararte. Revisa tu esófago, estómago y duodeno con cámara flexible de alta definición y bajo sedación, con toma de biopsias sin costo, con endoscopista y anestesiólogo certificados. Hospital Amerimed, Mérida, Yucatán.",
    uploadDate: "2026-06-27T23:00:26-07:00",
    duration: "PT5M25S",
    durationSeconds: 325,
    path: "/endoscopia-merida",
    service: "endoscopia",
    chapters: [
      { name: "Introducción", start: 0 },
      { name: "¿Qué es una endoscopia digestiva y para qué sirve?", start: 17 },
      { name: "¿Cuánto cuesta una endoscopia en Mérida?", start: 73 },
      { name: "¿Duele la endoscopia?", start: 137 },
      { name: "¿Qué enfermedades detecta una endoscopia?", start: 204 },
      { name: "¿Cómo me preparo para una endoscopia?", start: 271 },
    ],
  },
  ligadura_hemorroides: {
    id: "Pfit_gb3NGY",
    title: "Ligadura de Hemorroides Internas en Mérida | Sin Cirugía",
    description:
      "¿Sabías que las hemorroides internas sí se pueden tratar sin cirugía? La ligadura interna de hemorroides es un procedimiento ambulatorio, sin dolor, que tarda de 5 a 10 minutos. El Dr. Omar Quiroz —Endoscopista Gastrointestinal y Cirujano General— explica en qué consiste, si duele, cuántas sesiones necesitas y cómo es la recuperación. Está indicado principalmente para hemorroides internas grado 1 y grado 2: molestias al evacuar, comezón, sangrado o sensación de incomodidad.",
    uploadDate: "2026-06-02T18:30:00-06:00",
    duration: "PT3M55S",
    durationSeconds: 235,
    path: "/ligadura-hemorroides-internas-merida",
    service: "ligadura-hemorroides",
    chapters: [
      { name: "Hemorroides internas sin cirugía", start: 0 },
      { name: "¿Cómo funciona la ligadura de hemorroides?", start: 33 },
      { name: "Hemorroides internas vs. externas", start: 55 },
      { name: "¿Duele el procedimiento?", start: 92 },
      { name: "¿Cuántas sesiones necesitas?", start: 135 },
      { name: "Recuperación en 24 a 48 horas", start: 171 },
      { name: "Agenda tu cita en Mérida", start: 221 },
    ],
  },
  ligadura_varices: {
    id: "0ljUQlAZtz4",
    title: "Ligadura de Várices Esofágicas en Mérida | Dr. Omar Quiroz",
    description:
      "Ligadura de várices esofágicas en Mérida, Yucatán. El Dr. Omar Quiroz —endoscopista gastrointestinal y cirujano general— explica qué son las várices esofágicas y por qué aparecen (cirrosis hepática e hipertensión portal), cuándo está indicada la ligadura, cuántas sesiones se necesitan para erradicarlas, la diferencia entre várices del esófago y del estómago (ligadura o esclerosis), y los cuidados posteriores: medicamentos, dieta y actividad física. Se realiza bajo sedación en Hospital Amerimed.",
    uploadDate: "2026-07-07T12:00:00-06:00",
    duration: "PT4M37S",
    durationSeconds: 277,
    path: "/ligadura-varices-esofagicas-merida",
    service: "ligadura_varices",
    chapters: [
      { name: "¿Qué son las várices esofágicas?", start: 0 },
      { name: "¿Cuántas sesiones necesito?", start: 86 },
      { name: "Esófago vs. estómago: ligadura o esclerosis", start: 128 },
      { name: "Cuidados después de la ligadura", start: 201 },
      { name: "Dónde encontrarme", start: 248 },
    ],
  },
  cpre: {
    id: "UHUdTSp4K1o",
    title:
      "CPRE en Mérida: qué es, cuándo es urgente y cómo se trata sin cirugía abierta",
    description:
      "La CPRE trata cálculos en la vía biliar, obstrucciones, ictericia y pancreatitis biliar —y muchas veces resuelve el problema en una sola sesión, sin cirugía abierta. El Dr. Omar Quiroz —Endoscopista Gastrointestinal y Cirujano General— explica qué es, cuándo es urgente, qué tan segura es y cómo se realiza, bajo sedación profunda y con rayos X en tiempo real, con tecnología SpyGlass para los casos complejos. Recibe pacientes de toda la península (Cancún, Playa del Carmen, Quintana Roo).",
    uploadDate: "2026-06-26T10:08:29-07:00",
    duration: "PT6M18S",
    durationSeconds: 378,
    path: "/cpre-merida",
    service: "CPRE",
    chapters: [
      { name: "Introducción", start: 0 },
      { name: "¿Qué es la CPRE y para qué sirve?", start: 15 },
      { name: "¿Cuándo es urgente una CPRE?", start: 128 },
      { name: "¿La CPRE es peligrosa?", start: 198 },
      { name: "¿Cómo se realiza y cuánto dura?", start: 285 },
      { name: "¿Atiende pacientes de Cancún y Playa del Carmen?", start: 324 },
    ],
  },
} satisfies Record<string, Video>

export type VideoKey = keyof typeof VIDEOS

/** Get a video by key. */
export function getVideo(key: VideoKey): Video {
  return VIDEOS[key]
}
