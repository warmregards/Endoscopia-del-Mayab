"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { pushVideoPlay } from "@/lib/gtm";

/**
 * Self-hosted, lazy, click-to-play vertical trust clip for paid landing pages.
 *
 * Deliberately NOT a YouTube embed — no player chrome, no recommended-video
 * exit, no branding leak. Keeps the LP's 1:1 attention ratio intact.
 *
 * - Poster only until tap (`preload="none"`): fast on mobile, no wasted bytes.
 * - Muted-friendly: burned-in captions are expected in the source file, and a
 *   <track> is wired for accessibility. On tap we play WITH sound (the click is
 *   a user gesture, so autoplay-with-audio is allowed) — never autoplay.
 * - 9:16, capped to a sane mobile width so it never pushes price/CTA below fold.
 * - Fires `video_play` once, on actual play, so play→whatsapp_click lift is
 *   measurable per page_path + service.
 */
type LpVideoProps = {
  src: string;
  poster: string;
  /** WebVTT captions track (optional — most clips burn captions into the video). */
  captionsSrc?: string;
  service?: string;
  /** Stable id for the video_play event (not a YouTube id). */
  videoId?: string;
  title?: string;
  /** Line rendered under the video. */
  caption?: string;
};

export default function LpVideo({
  src,
  poster,
  captionsSrc,
  service = "generic",
  videoId = "lp-trust",
  title,
  caption,
}: LpVideoProps) {
  const [active, setActive] = useState(false);

  function handlePlay() {
    setActive(true);
    pushVideoPlay({ videoId, videoTitle: title, service });
  }

  return (
    <figure className="mx-auto max-w-[320px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-muted shadow-md">
        {active ? (
          <video
            className="h-full w-full object-cover"
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            preload="none"
          >
            {captionsSrc && (
              <track
                kind="captions"
                src={captionsSrc}
                srcLang="es"
                label="Español"
                default
              />
            )}
          </video>
        ) : (
          <button
            type="button"
            onClick={handlePlay}
            aria-label={title ? `Reproducir: ${title}` : "Reproducir video"}
            className="group absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/20">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                <Play className="h-7 w-7 translate-x-0.5 fill-primary text-primary" />
              </span>
            </span>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
