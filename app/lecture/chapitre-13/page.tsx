import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter13Slides, chapter13SlidesEn, chapter13SlideAnchors, chapter13SlideAnchorsEn } from '@/content/chapter13.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 13 — Rate · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 13 : anatomie, physiologie, pathologies courantes et zones réflexes podales de la rate en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre13LecturePage({
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
  const { chapter } = getChapter('chapter-13', lang)
  const hasEnglishEdition = lang === 'en'

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={hasEnglishEdition ? chapter13SlidesEn : chapter13Slides}
      anchors={hasEnglishEdition ? chapter13SlideAnchorsEn : chapter13SlideAnchors}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-13?lang=${lang}`}
      sectionRail
      showClinicalCaseResource
    />
  )
}
