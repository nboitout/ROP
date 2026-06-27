import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { getServerLang } from '@/app/i18n/serverLang'

export const metadata: Metadata = {
  title: 'Chapitre 3 â€” SystÃ¨me nerveux central Â· R.O.P. Â· Guy Boitout',
  description: 'Cerveau reptilien, systÃ¨me limbique, diencÃ©phale, cortex â€” anatomie et physiologie du systÃ¨me nerveux central dans la perspective de la RÃ©flexothÃ©rapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

export default async function Chapitre3Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access') && !cookieStore.get('admin_session')) {
    redirect('/?gate=free#acces-libre')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  redirect(`/lecture/chapitre-3${lang ? `?lang=${lang}` : ''}`)
}
