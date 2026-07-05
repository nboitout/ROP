import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadFreeChapter, canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import {
  chapter14Slides, chapter14SlidesEn, chapter14SlidesDe, chapter14SlidesEs, chapter14SlidesIt,
  chapter14SlideAnchors, chapter14SlideAnchorsFr,
} from '@/content/chapter14.slidesync'

// Synthesis deck per language (all five available for chapter 14).
const DECKS: Record<Lang, typeof chapter14Slides> = {
  fr: chapter14Slides, en: chapter14SlidesEn, de: chapter14SlidesDe, es: chapter14SlidesEs, it: chapter14SlidesIt,
}

// The French PDF was reorganised independently, so French uses its own anchor
// table; the other languages share the original one until their PDFs catch up.
const ANCHORS: Record<Lang, typeof chapter14SlideAnchors> = {
  fr: chapter14SlideAnchorsFr,
  en: chapter14SlideAnchors, de: chapter14SlideAnchors,
  es: chapter14SlideAnchors, it: chapter14SlideAnchors,
}

export const metadata: Metadata = {
  title: 'Chapitre 14 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Prototype de lecture combinée : le texte du chapitre 14 (intestin grêle) et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre14SyncPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  // Open to free-chapter readers (synchronized is now the default entry from
  // /chapitres-gratuits) and to admins.
  if (!canReadFreeChapter(cookieStore)) {
    redirect('/?gate=free#acces-libre')
  }
  const restrictPaidXrefs = !canReadPaidChapter(cookieStore)

  // The synthesis deck exists in all five languages for chapter 14; serve the
  // reader's language.
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-14', lang)
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={ANCHORS[lang]}
      backHref="/chapitres-gratuits"
      restrictPaidXrefs={restrictPaidXrefs}
    />
  )
}
