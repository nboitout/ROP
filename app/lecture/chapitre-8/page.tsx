import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter8Slides, chapter8SlideAnchors } from '@/content/chapter8.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 8 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Lecture combinée : le texte du chapitre 8 (diaphragme) et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre8SyncPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access')) {
    redirect('/?gate=free#acces-libre')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-8', 'fr')

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={chapter8Slides}
      anchors={chapter8SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
