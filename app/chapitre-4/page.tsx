import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Chapitre 4 — Système nerveux autonome · R.O.P. · Guy Boitout',
  description: 'Brouillon en préparation : le système nerveux autonome (Parasympathique et Sympathique) en Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

// Draft chapter — reachable only from /admin/chapitres (requires an admin session).
// Not listed in any public chapter grid.
export default async function Chapitre4Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!cookieStore.get('admin_session')) {
    redirect('/admin/login')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter, contentLang } = getChapter('chapter-4', lang)
  const bookTitle = translations[lang].reader.bookTitle
  return <ChapterReader chapter={chapter} bookTitle={bookTitle} contentLang={contentLang} backHref="/admin/chapitres" />
}
