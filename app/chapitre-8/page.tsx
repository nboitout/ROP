import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 8 — Diaphragme · R.O.P. · Guy Boitout',
  description: 'Anatomie et physiologie du diaphragme : centre phrénique, coupoles, piliers, orifices, vascularisation, innervation et leurs zones réflexes podales en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre8Page({
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
  redirect(`/lecture/chapitre-8${lang ? `?lang=${lang}` : ''}`)
}
