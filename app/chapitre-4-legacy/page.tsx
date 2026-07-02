import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadDraftChapter } from '@/lib/access'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Chapitre 4 legacy - Systeme nerveux autonome - R.O.P. - Guy Boitout',
  description: 'Ancienne lecture classique du chapitre 4, conservee separement de la lecture synchronisee.',
  robots: { index: false, follow: false },
}

export default async function Chapitre4LegacyPage({
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
  const { chapter, contentLang } = getChapter('chapter-4-legacy', lang)

  return (
    <ChapterReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      contentLang={contentLang}
      backHref="/admin/chapitres"
    />
  )
}
