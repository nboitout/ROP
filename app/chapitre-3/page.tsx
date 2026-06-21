import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Chapitre 3 â€” SystÃ¨me nerveux central Â· R.O.P. Â· Guy Boitout',
  description: 'Cerveau reptilien, systÃ¨me limbique, diencÃ©phale, cortex â€” anatomie et physiologie du systÃ¨me nerveux central dans la perspective de la RÃ©flexothÃ©rapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

export default async function Chapitre3Page({
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
  const { chapter, contentLang } = getChapter('chapter-3', lang)
  const bookTitle = translations[lang].reader.bookTitle
  return (
    <ChapterReader
      chapter={chapter}
      bookTitle={bookTitle}
      contentLang={contentLang}
      syncToggleHref="/lecture/chapitre-3"
    />
  )
}
