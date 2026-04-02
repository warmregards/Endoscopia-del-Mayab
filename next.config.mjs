/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
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
