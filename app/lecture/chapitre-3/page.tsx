import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter3Slides, chapter3SlideAnchors } from '@/content/chapter3.slidesync'

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
  if (!canReadPaidChapter(cookieStore)) {
    redirect('/#acheter')
  }

  // Chapter 3 exists in French only; serve the French content + deck regardless
  // of the reader's UI language.
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)

  const { chapter } = getChapter('chapter-3', lang)
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={chapter3Slides}
      anchors={chapter3SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
