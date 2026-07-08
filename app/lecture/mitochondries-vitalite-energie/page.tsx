import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import MitochondriaDeckReader from '@/components/MitochondriaDeckReader'
import { canReadPaidChapter } from '@/lib/access'

export const metadata: Metadata = {
  title: 'Mitochondries, vitalité et énergie · R.O.P. · Guy Boitout',
  description: 'Slide deck de recherche sur les mitochondries, la vitalité et l’énergie, présenté dans un lecteur dédié.',
  robots: { index: false, follow: false },
}

export default async function MitochondriaDeckPage() {
  const cookieStore = await cookies()
  if (!canReadPaidChapter(cookieStore)) {
    redirect('/#acheter')
  }

  return <MitochondriaDeckReader />
}
