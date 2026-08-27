import type { Metadata, Viewport } from 'next'
import './globals.css'
import { cookies } from 'next/headers'
import { LanguageProvider } from '@/app/i18n/LanguageContext'
import { CartProvider } from '@/components/CartProvider'
import { SalesModeProvider } from '@/components/SalesModeProvider'
import SalesPreviewBanner from '@/components/SalesPreviewBanner'
import { missingPaymentsConfig, paymentsEnabled, paymentsOpenFor } from '@/lib/payments'
import { hasSalesPreview } from '@/lib/salesPreview'
import { getServerLang } from '@/app/i18n/serverLang'
import VisitTracker from '@/components/VisitTracker'
import { APP_NAME, SITE_NAME, SITE_URL, SOCIAL_IMAGE_PATH } from '@/lib/site'
import { alternateOpenGraphLocales, localizedSiteMetadata, OPEN_GRAPH_LOCALES } from '@/app/i18n/locale'

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getServerLang()
  const { title, description } = localizedSiteMetadata(lang)
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
    alternateLocale: alternateOpenGraphLocales(lang),
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

  // Whether the shop is open is per-visitor once the preview exists, so it is
  // resolved here from the request and handed to the client tree.
  const cookieStore = await cookies()
  const open = await paymentsOpenFor(cookieStore)

  // The banner follows the *grant*, not the open shop: holding a preview grant
  // on a deployment that has no Stripe keys leaves the site looking untouched,
  // which reads as a broken feature. Better to say what is missing.
  const preview = !paymentsEnabled() && (await hasSalesPreview(cookieStore))
  const missingConfig = preview ? missingPaymentsConfig() : []
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
      <body>
        <LanguageProvider initialLang={lang}>
          <SalesModeProvider mode={{ open, preview }}>
            <CartProvider>
              <VisitTracker />
              {preview && <SalesPreviewBanner missingConfig={missingConfig} />}
              {children}
            </CartProvider>
          </SalesModeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
