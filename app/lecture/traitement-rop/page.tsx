import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { chapter2Fr } from '@/content/chapter2.fr'

export const metadata: Metadata = {
  title: 'Chapitre 2 — Traitement par la R.O.P. · Guy Boitout',
  description: 'Technique, modalités, hiérarchisation des traitements, indications et contre-indications de la Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

const BOOK_TITLE = 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

export default async function TraitementRopPage() {
  const cookieStore = await cookies()
  const hasAdminSession = !!cookieStore.get('admin_session')
  const hasPaidAccess = !!cookieStore.get('paid_access')

  if (!hasAdminSession && !hasPaidAccess) {
    redirect('/#acheter')
  }

  return <ChapterReader chapter={chapter2Fr} bookTitle={BOOK_TITLE} backHref="/admin/chapitres" />
}
