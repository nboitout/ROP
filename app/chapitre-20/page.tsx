import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 20 — Organes génitaux masculins · R.O.P. · Guy Boitout',
  description: 'Testicules, prostate, vésicules séminales, physiologie, pathologies courantes et zones réflexes podales en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre20Page({
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
  redirect(`/lecture/chapitre-20${lang ? `?lang=${lang}` : ''}`)
}
