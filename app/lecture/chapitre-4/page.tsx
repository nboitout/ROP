import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import {
  chapter4ReworkHalfBreaks,
  chapter4ReworkSlides as chapter4Slides,
  chapter4ReworkSlidesEn as chapter4SlidesEn,
  chapter4ReworkSlideAnchors as chapter4SlideAnchors,
  chapter4ReworkSlideAnchorsEn as chapter4SlideAnchorsEn,
} from '@/content/chapter4-rework.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 4 - Lecture synchronisee · R.O.P. · Guy Boitout',
  description: 'Lecture combinee : le texte du chapitre 4 (systeme nerveux autonome) et les diapositives de synthese affichees ensemble, synchronisees au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre4SyncPage({
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
  const { chapter } = getChapter('chapter-4', lang)
  const hasEnglishEdition = lang === 'en'

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={hasEnglishEdition ? chapter4SlidesEn : chapter4Slides}
      anchors={hasEnglishEdition ? chapter4SlideAnchorsEn : chapter4SlideAnchors}
      halfBreaks={hasEnglishEdition ? undefined : chapter4ReworkHalfBreaks}
      backHref="/admin/chapitres"
      classicHref={`/chapitre-4?lang=${lang}`}
    />
  )
}
