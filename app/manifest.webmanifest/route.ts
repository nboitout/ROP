import { NextResponse } from 'next/server'
import { getServerLang } from '@/app/i18n/serverLang'
import { APP_NAME, SITE_DESCRIPTION } from '@/lib/site'

// Web-app manifest for "Add to Home Screen", localized via the lang cookie.
// A dynamic route (not the static app/manifest.ts convention) so the name
// follows the reader's language; the <link rel="manifest"> in the root layout
// uses crossorigin="use-credentials" because browsers fetch manifests without
// cookies by default.
export async function GET() {
  const lang = await getServerLang()
  const name = APP_NAME[lang] ?? APP_NAME.fr
  return NextResponse.json(
    {
      name,
      short_name: name,
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
    },
    { headers: { 'content-type': 'application/manifest+json' } }
  )
}
