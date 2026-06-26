import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 5 — Mécanisme de stress · R.O.P. · Guy Boitout',
  description: `Chapitre complet du troisième ouvrage de Guy Boitout : le mécanisme de stress, le syndrome général d’adaptation et son intérêt en Réflexothérapie Occipito-Podale.`,
  robots: { index: false, follow: false },
}

export default async function Chapitre5Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  const hasAdminSession = !!cookieStore.get('admin_session')
  const hasPaidAccess = !!cookieStore.get('paid_access')

  if (!hasAdminSession && !hasPaidAccess) {
    redirect('/#acheter')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  redirect(`/lecture/chapitre-5${lang ? `?lang=${lang}` : ''}`)
}
