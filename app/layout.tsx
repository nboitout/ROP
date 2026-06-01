import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/app/i18n/LanguageContext'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne — Guy Boitout · R.O.P.',
  description: 'Troisième ouvrage de Guy Boitout sur la Réflexologie Occipito-Podale. Système nerveux autonome, mécanisme de stress et viscères abdominaux — au service du praticien.',
  openGraph: {
    title: 'R.O.P. — Guy Boitout · 3ᵉ ouvrage',
    description: 'Système nerveux, viscères abdominaux, stress et protocole clinique complet.',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getServerLang()
  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body><LanguageProvider initialLang={lang}>{children}</LanguageProvider></body>
    </html>
  )
}
