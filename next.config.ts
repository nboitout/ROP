// Deployment target: Vercel (https://vercel.com)
import type { NextConfig } from 'next'

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // TODO: tighten CSP once Stripe.js and analytics are added
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // cdnjs hosts the Three.js build used by the /prototype-pied 3D foot map
      "script-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
  // Clean, shareable URL for the static 3D foot-map prototype.
  async rewrites() {
    return [{ source: '/prototype-pied', destination: '/prototype-pied.html' }]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Next.js 16 uses Turbopack by default; declare an empty turbopack config
  // so having a webpack config alongside it doesn't abort the build.
  turbopack: {},
  // Kept for `next build --webpack` fallback: stubs canvas for react-pdf/pdfjs.
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },
}

export default nextConfig
