import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import {
  chapter15Slides, chapter15SlidesEn, chapter15SlidesDe, chapter15SlidesEs, chapter15SlidesIt,
  chapter15HalfBreaks, chapter15SlideAnchors, chapter15SlideAnchorsEn,
} from '@/content/chapter15.slidesync'
import { englishReaderMetadata } from '@/lib/readerDocumentMetadata'

const DECKS: Record<Lang, typeof chapter15Slides> = {
  fr: chapter15Slides,
  en: chapter15SlidesEn,
  de: chapter15SlidesDe,
  es: chapter15SlidesEs,
  it: chapter15SlidesIt,
  pt: chapter15SlidesEn,
  th: chapter15SlidesEn,
}

// The English deck has its own artwork and anchor table; the other translated
// editions reuse the French diagrams and anchors.
const ANCHORS: Record<Lang, typeof chapter15SlideAnchors> = {
  fr: chapter15SlideAnchors,
  en: chapter15SlideAnchorsEn,
  de: chapter15SlideAnchors,
  es: chapter15SlideAnchors,
  it: chapter15SlideAnchors,
  pt: chapter15SlideAnchorsEn,
  th: chapter15SlideAnchorsEn,
}

const defaultMetadata: Metadata = {
  title: 'Chapitre 15 — Côlon et rectum · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 15 : anatomie, physiologie, pathologies courantes et zones réflexes podales du côlon et du rectum en R.O.P.',
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
  const { chapter } = getChapter('chapter-15', 'en')
  return englishReaderMetadata(chapter, 'synchronized', defaultMetadata)
}

export default async function Chapitre15LecturePage({
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
  const { chapter } = getChapter('chapter-15', lang)

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={ANCHORS[lang]}
      halfBreaks={chapter15HalfBreaks}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-15?lang=${lang}`}
    />
  )
}
