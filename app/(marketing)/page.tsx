import type { Metadata } from 'next'
import MarketingHomePage from '@/components/MarketingHomePage'
import { getServerLang } from '@/app/i18n/serverLang'
import { alternateOpenGraphLocales, languageAlternates, localizedHref, localizedSiteMetadata, OPEN_GRAPH_LOCALES } from '@/app/i18n/locale'
import { SITE_URL } from '@/lib/site'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
  const { lang: requestedLang } = await searchParams
  const lang = await getServerLang(requestedLang)
  const { title, description } = localizedSiteMetadata(lang)
  const url = `${SITE_URL}${localizedHref('/', lang)}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates('/'),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'R.O.P. - Guy Boitout',
      locale: OPEN_GRAPH_LOCALES[lang],
      alternateLocale: alternateOpenGraphLocales(lang),
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function HomePage() {
  return <MarketingHomePage />
}
