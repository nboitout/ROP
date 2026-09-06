import { englishReaderMetadata } from '@/lib/readerDocumentMetadata'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter6Slides, chapter6SlidesEn, chapter6SlideAnchors, chapter6SlideAnchorsEn } from '@/content/chapter6.slidesync'

const defaultMetadata: Metadata = {
  title: 'Chapitre 6 - Lecture synchronisee · R.O.P. · Guy Boitout',
  description: 'Lecture combinee : le texte du chapitre 6 (theorie polyvagale) et les diapositives de synthese affiches ensemble, synchronises au fil de la lecture.',
  robots: { index: false, follow: false },
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  if (lang !== 'en') return defaultMetadata
  const { chapter } = getChapter('chapter-6', 'en')
  return englishReaderMetadata(chapter, 'synchronized', defaultMetadata)
}

export default async function Chapitre6SyncPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!(await canReadPaidChapter(cookieStore))) {
    redirect('/#acheter')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-6', lang)
  const hasEnglishEdition = lang === 'en'

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={hasEnglishEdition ? chapter6SlidesEn : chapter6Slides}
      anchors={hasEnglishEdition ? chapter6SlideAnchorsEn : chapter6SlideAnchors}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-6?lang=${lang}`}
    />
  )
}
