import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadDraftChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter5ReworkFr } from '@/content/chapter5-rework.fr'
import { chapter5ReworkSlides, chapter5ReworkSlideAnchors } from '@/content/chapter5-rework.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 5 rework - Lecture synchronisee - R.O.P.',
  description: 'Page de relecture dediee au rework du chapitre 5 : mecanisme de stress, allostasie et approche ROP.',
  robots: { index: false, follow: false },
}

export default async function Chapitre5ReworkPage({
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

  return (
    <SlideSyncReader
      chapter={chapter5ReworkFr}
      bookTitle={translations[lang].reader.bookTitle}
      slides={chapter5ReworkSlides}
      anchors={chapter5ReworkSlideAnchors}
      backHref="/admin/chapitres"
    />
  )
}
