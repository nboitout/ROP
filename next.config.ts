// Deployment target: Vercel (https://vercel.com)
import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV !== 'production'
const scriptSrc = ["'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : [])].join(' ')
const connectSrc = ["'self'", ...(isDev ? ['ws:', 'wss:'] : [])].join(' ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Checkout is Stripe-hosted: the buyer is redirected to checkout.stripe.com
  // and comes back to /merci, so no Stripe.js runs here and the CSP needs no
  // stripe.com origins. Keep it that way — an embedded/Elements checkout would
  // require script-src, frame-src and connect-src exceptions.
  // TODO: revisit when analytics scripts are added.
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data:",
      `connect-src ${connectSrc}`,
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
