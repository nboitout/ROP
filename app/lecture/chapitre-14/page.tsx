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
  chapter14Slides, chapter14SlidesEn,
  chapter14SlideAnchors, chapter14SlideAnchorsFr,
} from '@/content/chapter14.slidesync'

// Chapter 14 is maintained in French and English; unsupported locales use French.
const DECKS: Record<Lang, typeof chapter14Slides> = {
  fr: chapter14Slides, en: chapter14SlidesEn, de: chapter14Slides, es: chapter14Slides, it: chapter14Slides, pt: chapter14Slides, th: chapter14Slides,
}

// The French PDF was reorganised independently, so French uses its own anchor
// table; English uses the original table and fallback locales use French.
const ANCHORS: Record<Lang, typeof chapter14SlideAnchors> = {
  fr: chapter14SlideAnchorsFr,
  en: chapter14SlideAnchors, de: chapter14SlideAnchorsFr,
  es: chapter14SlideAnchorsFr, it: chapter14SlideAnchorsFr, pt: chapter14SlideAnchorsFr, th: chapter14SlideAnchorsFr,
}

const HALF_BREAKS_FR = [
  { sectionId: 'innervation', blockIndex: -1 },
  { sectionId: 'rop', blockIndex: -1 },
]

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
  const restrictPaidXrefs = !(await canReadPaidChapter(cookieStore))

  // Serve English when explicitly requested; unsupported locales fall back to French.
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-14', lang)
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={ANCHORS[lang]}
      halfBreaks={lang === 'fr' ? HALF_BREAKS_FR : []}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-14?lang=${lang}`}
      restrictPaidXrefs={restrictPaidXrefs}
      showClinicalCaseResource
    />
  )
}
