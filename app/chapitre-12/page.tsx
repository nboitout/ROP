import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 12 — Pancréas · R.O.P. · Guy Boitout',
  description: 'Anatomie, physiologie exocrine et endocrine, diagnostics d’exclusion et zones réflexes podales du pancréas en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre12Page({
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
  redirect(`/lecture/chapitre-12${lang ? `?lang=${lang}` : ''}`)
}
