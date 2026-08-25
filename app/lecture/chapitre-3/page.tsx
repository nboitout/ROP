import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import {
  chapter3ReworkSlides as chapter3Slides,
  chapter3ReworkSlidesEn as chapter3SlidesEn,
  chapter3ReworkSlideAnchors as chapter3SlideAnchors,
  chapter3ReworkSlideAnchorsEn as chapter3SlideAnchorsEn,
} from '@/content/chapter3-rework.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 3 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Lecture combinée : le texte du chapitre 3 (système nerveux central) et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre3SyncPage({
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

  const { chapter } = getChapter('chapter-3', lang)
  const hasEnglishEdition = lang === 'en'
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={hasEnglishEdition ? chapter3SlidesEn : chapter3Slides}
      anchors={hasEnglishEdition ? chapter3SlideAnchorsEn : chapter3SlideAnchors}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-3?lang=${lang}`}
    />
  )
}
