import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ResearchDeckReader from '@/components/ResearchDeckReader'
import { canReadPaidChapter } from '@/lib/access'

const DECK = {
  title: 'Stress métabolique et restriction glycémique',
  pdfUrl: '/assets/stress-metabolique-restriction-glycemique.pdf',
  titleId: 'metabolic-stress-title',
}

export const metadata: Metadata = {
  title: 'Stress métabolique et restriction glycémique · R.O.P. · Guy Boitout',
  description: 'Slide deck de recherche sur le stress métabolique et la restriction glycémique, présenté dans un lecteur dédié.',
  robots: { index: false, follow: false },
}

export default async function MetabolicStressDeckPage() {
  const cookieStore = await cookies()
  if (!canReadPaidChapter(cookieStore)) {
    redirect('/#acheter')
  }

  return <ResearchDeckReader {...DECK} />
}
