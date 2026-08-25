import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter7Slides, chapter7SlidesEn, chapter7SlideAnchors, chapter7SlideAnchorsEn } from '@/content/chapter7.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 7 - Lecture synchronisee · R.O.P. · Guy Boitout',
  description: 'Lecture combinee : le texte du chapitre 7 et les diapositives de synthese affiches ensemble, synchronises au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre7SyncPage({
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
  const { chapter } = getChapter('chapter-7', lang)
  const hasEnglishEdition = lang === 'en'

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={hasEnglishEdition ? chapter7SlidesEn : chapter7Slides}
      anchors={hasEnglishEdition ? chapter7SlideAnchorsEn : chapter7SlideAnchors}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-7?lang=${lang}`}
    />
  )
}
