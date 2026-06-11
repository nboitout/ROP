import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Chapitre 1 — Généralités · R.O.P. · Guy Boitout',
  description: 'Mobilité viscérale, articulations viscérales, fixations, relations viscéro-somatiques et viscéro-émotionnelles — les fondements de la Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

export default async function Chapitre1Page({
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
  const { chapter, contentLang } = getChapter('chapter-1', lang)
  const bookTitle = translations[lang].reader.bookTitle
  return <ChapterReader chapter={chapter} bookTitle={bookTitle} contentLang={contentLang} />
}
