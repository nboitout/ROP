import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 7 — Cavités abdominale et péritonéale · R.O.P. · Guy Boitout',
  description: 'Anatomie et physiologie de la cavité péritonéale : péritoine, mésos, omentums, vascularisation et innervation — et leurs zones réflexes podales en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre7Page({
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
  redirect(`/lecture/chapitre-7${lang ? `?lang=${lang}` : ''}`)
}
