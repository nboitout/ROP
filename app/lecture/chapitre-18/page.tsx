import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter18Slides, chapter18SlideAnchors } from '@/content/chapter18.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 18 — Vessie · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 18 : anatomie, physiologie, pathologies courantes et zones réflexes podales de la vessie en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre18LecturePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access') && !cookieStore.get('admin_session')) {
    redirect('/?gate=free#acces-libre')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-18', 'fr')

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={chapter18Slides}
      anchors={chapter18SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
