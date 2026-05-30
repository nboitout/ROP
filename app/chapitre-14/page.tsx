import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { chapter14Fr } from '@/content/chapter14.fr'

export const metadata: Metadata = {
  title: 'Chapitre 14 — Intestin grêle · R.O.P. · Guy Boitout',
  description: `Chapitre complet gratuit du troisième ouvrage de Guy Boitout : anatomie, physiologie et zones réflexes de l'intestin grêle en Réflexothérapie Occipito-Podale.`,
  robots: { index: false, follow: false },
}

const BOOK_TITLE = 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

export default async function Chapitre14Page() {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access')) {
    redirect('/?gate=free#acces-libre')
  }

  return <ChapterReader chapter={chapter14Fr} bookTitle={BOOK_TITLE} />
}
