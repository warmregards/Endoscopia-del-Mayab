/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // Disable Next's CssChunkingPlugin. It packs CSS modules into shared chunks
    // of up to 100 KB (and always merges anything under 30 KB — even in
    // 'strict' mode), which put the home + colonoscopia design modules on
    // every page, including /lp/*. With it off, each page loads only the
    // modules it imports.
    cssChunking: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    // YouTubeEmbed facade thumbnails (resized + long-cached via /_next/image).
    remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com', pathname: '/vi/**' }],
  },
  async redirects() {
    return [
      {
        source: '/servicios',
        destination: '/',
        permanent: true,
      },
      {
        source: '/panendoscopia-merida',
        destination: '/endoscopia-merida',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
