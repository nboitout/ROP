import type { MetadataRoute } from 'next'
import { SITE_DESCRIPTION } from '@/lib/site'

// Web-app manifest for "Add to Home Screen": names the installed app
// "3e livre ROP" and always launches it on the homepage, regardless of the
// page the visitor was reading when they added it.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '3e livre ROP',
    short_name: '3e livre ROP',
    description: SITE_DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf8f1',
    theme_color: '#4a6b5a',
    icons: [
      { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
