/**
 * Shared trust clip for the paid landing pages (`/lp/*`).
 *
 * One vertical (9:16) doctor-to-camera clip reused across every LP — deliberately
 * self-hosted (not a YouTube embed) so it keeps each LP's 1:1 attention ratio.
 * Each page's <LpVideo> still passes its own service / videoId / title / caption;
 * only the file paths are shared here, so swapping the clip — or going per-page
 * later — is a one-line change.
 *
 * Assets live in /public (served from the site root). Set this to `null` to hide
 * the trust-video section on every LP at once.
 */
export const TRUST_VIDEO: {
  src: string;
  poster: string;
  /** Optional WebVTT captions — omit when captions are burned into the clip. */
  captionsSrc?: string;
} | null = {
  src: "/trust_video.mp4",
  poster: "/dr-quiroz-trust-poster.jpg",
};
