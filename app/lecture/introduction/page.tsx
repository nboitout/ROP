import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { canReadFreeChapter, canReadPaidChapter } from '@/lib/access'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter0Slides, chapter0SlidesEn, chapter0SlideAnchors, chapter0SlideAnchorsEn } from '@/content/chapter0.slidesync'
import { englishReaderMetadata } from '@/lib/readerDocumentMetadata'

const DECKS = { fr: chapter0Slides, en: chapter0SlidesEn }
const ANCHORS = { fr: chapter0SlideAnchors, en: chapter0SlideAnchorsEn }

const defaultMetadata: Metadata = {
  title: 'Introduction - Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Lecture synchronisée de l’introduction et de ses six planches de synthèse.',
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
  const { chapter } = getChapter('introduction', 'en')
  return englishReaderMetadata(chapter, 'synchronized', defaultMetadata)
}

export default async function IntroductionSyncPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const cookieStore = await cookies()
  if (!canReadFreeChapter(cookieStore)) redirect('/?gate=free#acces-libre')
  const restrictPaidXrefs = !(await canReadPaidChapter(cookieStore))
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter, contentLang } = getChapter('introduction', lang)
  const deckLang = contentLang === 'en' ? 'en' : 'fr'

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[deckLang]}
      anchors={ANCHORS[deckLang]}
      backHref="/chapitres-gratuits"
      classicHref={`/introduction?lang=${lang}`}
      restrictPaidXrefs={restrictPaidXrefs}
    />
  )
}
