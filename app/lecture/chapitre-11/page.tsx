import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter11Slides, chapter11SlidesEn, chapter11SlideAnchors, chapter11SlideAnchorsEn } from '@/content/chapter11.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 11 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Lecture combinée : le texte du chapitre 11 (foie et voies biliaires) et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre11SyncPage({
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
  const { chapter } = getChapter('chapter-11', lang)
  const hasEnglishEdition = lang === 'en'

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={hasEnglishEdition ? chapter11SlidesEn : chapter11Slides}
      anchors={hasEnglishEdition ? chapter11SlideAnchorsEn : chapter11SlideAnchors}
      backHref="/chapitres-gratuits"
      classicHref={`/chapitre-11?lang=${lang}`}
    />
  )
}
