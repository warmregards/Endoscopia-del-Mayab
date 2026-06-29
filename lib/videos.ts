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
  /** Upload date, ISO 8601 (e.g. "2026-06-26"). */
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
  endoscopia: {
    id: "kyunUdvltHk",
    title: "Endoscopia en Mérida: qué es, precio y si duele",
    description:
      "¿Te indicaron una endoscopia, panendoscopia o gastroscopia? Las tres son el mismo estudio. El Dr. Omar Quiroz —Endoscopista Gastrointestinal y Cirujano General— explica qué es, cuánto cuesta, si duele, qué enfermedades detecta y cómo prepararte. Revisa tu esófago, estómago y duodeno con cámara flexible de alta definición y bajo sedación, con toma de biopsias sin costo, con endoscopista y anestesiólogo certificados. Hospital Amerimed, Mérida, Yucatán.",
    uploadDate: "2026-06-27",
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
    uploadDate: "2026-06-26",
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
