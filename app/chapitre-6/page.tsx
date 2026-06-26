import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 6 — Théorie polyvagale · R.O.P. · Guy Boitout',
  description: 'La théorie polyvagale du Dr Stephen Porges : les trois systèmes du SNA, les deux branches du nerf vague, l’engagement social et la neuroception — et leurs implications en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre6Page({
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
  redirect(`/lecture/chapitre-6${lang ? `?lang=${lang}` : ''}`)
}
