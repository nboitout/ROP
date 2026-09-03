import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import { chapter5SlidesEn, chapter5SlideAnchorsEn } from '@/content/chapter5.slidesync'
import { chapter5ReworkSlides as chapter5Slides, chapter5ReworkSlideAnchors as chapter5SlideAnchors } from '@/content/chapter5-rework.slidesync'

// French and English have dedicated editions. Other locales use the canonical
// French fallback until their Chapter 5 editions are republished.
const DECKS: Record<Lang, typeof chapter5Slides> = {
  fr: chapter5Slides, en: chapter5SlidesEn, de: chapter5Slides, es: chapter5Slides, it: chapter5Slides, pt: chapter5Slides, th: chapter5Slides,
}

const ANCHORS: Record<Lang, typeof chapter5SlideAnchors> = {
  fr: chapter5SlideAnchors,
  en: chapter5SlideAnchorsEn, de: chapter5SlideAnchors,
  es: chapter5SlideAnchors, it: chapter5SlideAnchors, pt: chapter5SlideAnchors, th: chapter5SlideAnchors,
}

export const metadata: Metadata = {
  title: 'Chapitre 5 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Prototype de lecture combinée : le texte du chapitre 5 et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre5SyncPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!(await canReadPaidChapter(cookieStore))) {
    redirect('/#acheter')
  }

  // Serve a dedicated deck when available and the French deck otherwise.
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-5', lang)
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={ANCHORS[lang]}
      backHref="/"
      classicHref={`/chapitre-5?lang=${lang}`}
      showClinicalCaseResource={lang === 'fr'}
    />
  )
}
