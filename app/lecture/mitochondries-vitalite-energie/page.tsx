import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ResearchDeckReader from '@/components/ResearchDeckReader'
import { canReadPaidChapter } from '@/lib/access'

const DECK = {
  title: 'Mitochondries, vitalité et énergie',
  pdfUrl: '/assets/mitochondries-vitalite-energie.pdf',
  titleId: 'mitochondria-title',
}

export const metadata: Metadata = {
  title: 'Mitochondries, vitalité et énergie · R.O.P. · Guy Boitout',
  description: 'Slide deck de recherche sur les mitochondries, la vitalité et l’énergie, présenté dans un lecteur dédié.',
  robots: { index: false, follow: false },
}

export default async function MitochondriaDeckPage() {
  const cookieStore = await cookies()
  if (!(await canReadPaidChapter(cookieStore))) {
    redirect('/#acheter')
  }

  return <ResearchDeckReader {...DECK} />
}
