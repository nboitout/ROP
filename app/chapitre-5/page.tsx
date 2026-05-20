import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { chapter5Fr } from '@/content/chapter5.fr'

export const metadata: Metadata = {
  title: 'Chapitre 5 — Mécanisme de stress · R.O.P. · Guy Boitout',
  description: `Chapitre complet gratuit du troisième ouvrage de Guy Boitout : le mécanisme de stress, le syndrome général d’adaptation et son intérêt en Réflexothérapie Occipito-Podale.`,
  robots: { index: false, follow: false },
}

const BOOK_TITLE = 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

export default async function Chapitre5Page() {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access')) {
    redirect('/?gate=free#acces-libre')
  }

  return <ChapterReader chapter={chapter5Fr} bookTitle={BOOK_TITLE} />
}
