import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

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
  if (!canReadPaidChapter(cookieStore)) {
    redirect('/#acheter')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  redirect(`/lecture/chapitre-1${lang ? `?lang=${lang}` : ''}`)
}
