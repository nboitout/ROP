import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ResearchDeckReader from '@/components/ResearchDeckReader'
import { canReadPaidChapter } from '@/lib/access'

const DECK = {
  title: "L'estrobolome et la clairance hormonale",
  pdfUrl: '/assets/estrobolome-clairance-hormonale.pdf',
  titleId: 'estrobolome-title',
}

export const metadata: Metadata = {
  title: "L'estrobolome et la clairance hormonale · R.O.P. · Guy Boitout",
  description: "Slide deck de recherche sur l'estrobolome et la clairance hormonale, présenté dans un lecteur dédié.",
  robots: { index: false, follow: false },
}

export default async function EstrobolomeDeckPage() {
  const cookieStore = await cookies()
  if (!canReadPaidChapter(cookieStore)) {
    redirect('/#acheter')
  }

  return <ResearchDeckReader {...DECK} />
}
