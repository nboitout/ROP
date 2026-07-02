import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadDraftChapter } from '@/lib/access'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chapitre 4 — Système nerveux autonome · R.O.P. · Guy Boitout',
  description: 'Lecture synchronisée en préparation : le système nerveux autonome (Parasympathique et Sympathique) en Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

function searchParamsToQuery(params: Record<string, string | string[] | undefined>) {
  const query = new URLSearchParams()
  for (const [key, value] of Object.entries(params)) {
    if (typeof value === 'string') query.set(key, value)
    else if (Array.isArray(value)) value.forEach((item) => query.append(key, item))
  }
  const encoded = query.toString()
  return encoded ? `?${encoded}` : ''
}

// Draft chapter compatibility route. Chapter 4 now opens in synchronized
// reading mode; keep this URL as a redirect for old admin links and xrefs.
export default async function Chapitre4Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const cookieStore = await cookies()
  if (!canReadDraftChapter(cookieStore)) {
    redirect('/admin/login')
  }

  const params = await searchParams
  redirect(`/lecture/chapitre-4${searchParamsToQuery(params)}`)
}
