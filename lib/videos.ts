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
