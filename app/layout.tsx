import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/app/i18n/LanguageContext'
import { getServerLang } from '@/app/i18n/serverLang'
import VisitTracker from '@/components/VisitTracker'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_IMAGE_PATH } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Guy Boitout' }],
  creator: 'Guy Boitout',
  publisher: 'Institut R.O.P.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: 'R.O.P. - Guy Boitout',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
  // iOS "Add to Home Screen": default app name and standalone launch.
  appleWebApp: {
    capable: true,
    title: '3e livre ROP',
    statusBarStyle: 'default',
  },
}

export const viewport: Viewport = {
  themeColor: '#fbf8f1',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getServerLang()
  return (
    <html lang={lang}>
      <head>
        {/* Legacy variant of mobile-web-app-capable for iOS < 17.4 */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body><LanguageProvider initialLang={lang}><VisitTracker />{children}</LanguageProvider></body>
    </html>
  )
}
