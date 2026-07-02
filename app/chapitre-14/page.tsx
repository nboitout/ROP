import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadFreeChapter } from '@/lib/access'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

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
  if (!canReadFreeChapter(cookieStore)) {
    redirect('/?gate=free#acces-libre')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  redirect(`/lecture/chapitre-14${lang ? `?lang=${lang}` : ''}`)
}
