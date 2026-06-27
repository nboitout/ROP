import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 10 — Duodénum · R.O.P. · Guy Boitout',
  description: "Anatomie et physiologie du duodénum : situation, segments D1 à D4, papilles duodénales, sphincter d'Oddi, pathologies courantes et zones réflexes podales en R.O.P.",
  robots: { index: false, follow: false },
}

export default async function Chapitre10Page({
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
  redirect(`/lecture/chapitre-10${lang ? `?lang=${lang}` : ''}`)
}
