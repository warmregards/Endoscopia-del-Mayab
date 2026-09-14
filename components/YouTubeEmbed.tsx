"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { pushVideoPlay } from "@/lib/gtm"

type YouTubeEmbedProps = {
  /** YouTube video ID — the part after `youtu.be/` or `watch?v=`. */
  id: string
  /** Accessible label + iframe title. Also reported as `video_title` to GTM. */
  title: string
  /** Optional caption rendered under the player. */
  caption?: string
  /** Optional service tag for GTM (e.g. "CPRE"). */
  service?: string
}

/**
 * Lazy "facade" YouTube embed: renders only the thumbnail + a play button until
 * the user clicks, then swaps in the iframe. Avoids loading YouTube's heavy
 * player on every page view — important since 82–94% of traffic is mobile.
 *
 * The thumbnail goes through next/image (i.ytimg.com is in remotePatterns), so
 * it is resized to the container and served AVIF/WebP with a long cache TTL
 * instead of the raw 1280×720 maxres JPEG (2h TTL from YouTube).
 *
 * @example
 *   <YouTubeEmbed id="UHUdTSp4K1o" title="CPRE explicada" service="CPRE" />
 */
export default function YouTubeEmbed({
  id,
  title,
  caption,
  service,
}: YouTubeEmbedProps) {
  const [active, setActive] = useState(false)
  // Not every video has a maxres thumbnail; hqdefault always exists.
  const [thumb, setThumb] = useState<"maxresdefault" | "hqdefault">("maxresdefault")

  return (
    <figure className="space-y-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-footer shadow-sm">
        {active ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setActive(true)
              pushVideoPlay({ videoId: id, videoTitle: title, service })
            }}
            aria-label={`Reproducir video: ${title}`}
            className="group absolute inset-0 h-full w-full cursor-pointer"
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/${thumb}.jpg`}
              alt={title}
              fill
              // Embeds sit in max-w-3xl (768px) columns or narrower.
              sizes="(min-width: 800px) 768px, 100vw"
              onError={() => setThumb("hqdefault")}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-foreground/20 transition-colors group-hover:bg-foreground/30" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play className="h-8 w-8 translate-x-0.5 fill-current" />
            </span>
          </button>
        )}

        {/* Crawlable fallback: a real iframe in the server-rendered HTML for
            no-JS clients and search crawlers. The click-to-load facade above
            hides the player behind a user click that Googlebot never performs,
            so without this the VideoObject markup has no discoverable player. */}
        <noscript>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={title}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </noscript>
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
