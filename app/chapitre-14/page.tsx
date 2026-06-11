import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Chapitre 14 — Intestin grêle · R.O.P. · Guy Boitout',
  description: `Chapitre complet gratuit du troisième ouvrage de Guy Boitout : anatomie, physiologie et zones réflexes de l'intestin grêle en Réflexothérapie Occipito-Podale.`,
  robots: { index: false, follow: false },
}

export default async function Chapitre14Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  const isAdmin = !!cookieStore.get('admin_session')
  if (!cookieStore.get('free_chapters_access') && !isAdmin) {
    redirect('/?gate=free#acces-libre')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter, contentLang } = getChapter('chapter-14', lang)
  const bookTitle = translations[lang].reader.bookTitle
  return (
    <ChapterReader
      chapter={chapter}
      bookTitle={bookTitle}
      contentLang={contentLang}
      // Sync/classic switch only for the admin-gated prototype audience.
      syncToggleHref={isAdmin ? '/lecture/chapitre-14' : undefined}
    />
  )
}
