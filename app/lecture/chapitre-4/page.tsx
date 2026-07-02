import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadDraftChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter4Slides, chapter4SlideAnchors } from '@/content/chapter4.slidesync'

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
  if (!canReadDraftChapter(cookieStore)) {
    redirect('/admin/login')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-4', 'fr')

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={chapter4Slides}
      anchors={chapter4SlideAnchors}
      backHref="/admin/chapitres"
    />
  )
}
