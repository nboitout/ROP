import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 16 — Reins · R.O.P. · Guy Boitout',
  description: 'Anatomie, physiologie, pathologies courantes et zones réflexes podales des reins en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre16Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access') && !cookieStore.get('admin_session')) {
    redirect('/?gate=free#acces-libre')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  redirect(`/lecture/chapitre-16${lang ? `?lang=${lang}` : ''}`)
}
