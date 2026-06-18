import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 5 — Mécanisme de stress · R.O.P. · Guy Boitout',
  description: `Chapitre complet du troisième ouvrage de Guy Boitout : le mécanisme de stress, le syndrome général d’adaptation et son intérêt en Réflexothérapie Occipito-Podale.`,
  robots: { index: false, follow: false },
}

const BOOK_TITLE = 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

export default async function Chapitre5Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  const hasAdminSession = !!cookieStore.get('admin_session')
  const hasPaidAccess = !!cookieStore.get('paid_access')

  if (!hasAdminSession && !hasPaidAccess) {
    redirect('/#acheter')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter, contentLang } = getChapter('chapter-5', lang)
  return (
    <ChapterReader
      chapter={chapter}
      bookTitle={BOOK_TITLE}
      contentLang={contentLang}
      // Synchronized version exists in all five languages for chapter 5.
      syncToggleHref="/lecture/chapitre-5"
    />
  )
}
