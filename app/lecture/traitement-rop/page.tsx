import { englishReaderMetadata } from '@/lib/readerDocumentMetadata'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadFreeChapter, canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import { chapter2SlidesEs, chapter2SlideAnchorsEs } from '@/content/chapter2.es.slidesync'
import {
  chapter2Slides, chapter2SlidesEn,
  chapter2SlideAnchors, chapter2SlideAnchorsEn, chapter2SlideAnchorsFr,
} from '@/content/chapter2.slidesync'

const DECKS: Record<Lang, typeof chapter2Slides> = {
  fr: chapter2Slides,
  en: chapter2SlidesEn,
  de: chapter2Slides,
  es: chapter2SlidesEs,
  it: chapter2Slides,
  pt: chapter2SlidesEn,
  th: chapter2SlidesEn,
}

const ANCHORS: Record<Lang, typeof chapter2SlideAnchors> = {
  fr: chapter2SlideAnchorsFr,
  en: chapter2SlideAnchorsEn,
  de: chapter2SlideAnchorsFr,
  es: chapter2SlideAnchorsEs,
  it: chapter2SlideAnchorsFr,
  pt: chapter2SlideAnchors,
  th: chapter2SlideAnchors,
}

const defaultMetadata: Metadata = {
  title: 'Chapitre 2 — Traitement par la R.O.P. · Guy Boitout',
  description: 'Technique, modalités, hiérarchisation des traitements, indications et contre-indications de la Réflexothérapie Occipito-Podale.',
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
  const { chapter } = getChapter('chapter-2', 'en')
  return englishReaderMetadata(chapter, 'synchronized', defaultMetadata)
}

export default async function TraitementRopPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!canReadFreeChapter(cookieStore)) {
    redirect('/?gate=free#acces-libre')
  }
  const restrictPaidXrefs = !(await canReadPaidChapter(cookieStore))

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-2', lang)
  const bookTitle = translations[lang].reader.bookTitle
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={bookTitle}
      slides={DECKS[lang]}
      anchors={ANCHORS[lang]}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-2?lang=${lang}`}
      restrictPaidXrefs={restrictPaidXrefs}
    />
  )
}
