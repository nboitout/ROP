import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/app/i18n/LanguageContext'
import { getServerLang } from '@/app/i18n/serverLang'
import VisitTracker from '@/components/VisitTracker'
import { APP_NAME, SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL, SOCIAL_IMAGE_PATH } from '@/lib/site'
import { translations } from '@/app/i18n/translations'
import { OPEN_GRAPH_LOCALES, SUPPORTED_LANGS } from '@/app/i18n/locale'

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getServerLang()
  const t = translations[lang]
  const title = lang === 'fr'
    ? SITE_TITLE
    : `${t.hero.h1.before} ${t.hero.h1.em}${t.hero.h1.after} - Guy Boitout`
  const description = lang === 'fr' ? SITE_DESCRIPTION : t.hero.sub
  return {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: SITE_NAME,
  authors: [{ name: 'Guy Boitout' }],
  creator: 'Guy Boitout',
  publisher: 'Institut R.O.P.',
  openGraph: {
    title,
    description,
    siteName: SITE_NAME,
    images: [
      {
        url: SOCIAL_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: 'R.O.P. - Guy Boitout',
      },
    ],
    locale: OPEN_GRAPH_LOCALES[lang],
    alternateLocale: SUPPORTED_LANGS.filter((candidate) => candidate !== lang).map((candidate) => OPEN_GRAPH_LOCALES[candidate]),
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [SOCIAL_IMAGE_PATH],
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
  // iOS "Add to Home Screen": default app name (localized) and standalone launch.
  appleWebApp: {
    capable: true,
    title: APP_NAME[lang] ?? APP_NAME.fr,
    statusBarStyle: 'default',
  },
  }
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
        {/* use-credentials so the manifest request carries the lang cookie
            and the app name comes back in the reader's language. */}
        <link rel="manifest" href="/manifest.webmanifest" crossOrigin="use-credentials" />
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
