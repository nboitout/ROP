import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter1Slides, chapter1SlideAnchors } from '@/content/chapter1.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 1 - Lecture synchronisee · R.O.P. · Guy Boitout',
  description: 'Lecture combinee : le texte du chapitre 1 et les diapositives de synthese affiches ensemble, synchronises au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre1SyncPage({
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
  const { chapter } = getChapter('chapter-1', 'fr')

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={chapter1Slides}
      anchors={chapter1SlideAnchors}
      backHref="/chapitres-gratuits"
      classicHref="/chapitre-1"
    />
  )
}
