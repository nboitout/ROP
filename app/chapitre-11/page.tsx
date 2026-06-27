import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 11 — Foie et voies biliaires · R.O.P. · Guy Boitout',
  description: 'Anatomie, physiologie, vascularisation, voies biliaires et zones réflexes podales du foie en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre11Page({
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
  redirect(`/lecture/chapitre-11${lang ? `?lang=${lang}` : ''}`)
}
