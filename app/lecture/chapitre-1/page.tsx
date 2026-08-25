import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import {
  chapter1Slides,
  chapter1SlidesEn,
  chapter1SlideAnchors,
  chapter1SlideAnchorsEn,
} from '@/content/chapter1.slidesync'

const DECKS = { fr: chapter1Slides, en: chapter1SlidesEn }
const ANCHORS = { fr: chapter1SlideAnchors, en: chapter1SlideAnchorsEn }

export const metadata: Metadata = {
  title: 'Chapitre 1 - Lecture synchronisee · R.O.P. · Guy Boitout',
  description: 'Lecture combinee : le texte du chapitre 1 et les diapositives de synthese affiches ensemble, synchronises au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre1SyncPage({
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
  const { chapter, contentLang } = getChapter('chapter-1', lang)
  const deckLang = contentLang === 'en' ? 'en' : 'fr'

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[deckLang]}
      anchors={ANCHORS[deckLang]}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-1?lang=${lang}`}
    />
  )
}
