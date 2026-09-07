import { redirect } from 'next/navigation'
import { getServerLang } from '@/app/i18n/serverLang'

export default async function IntroductionSyncPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  redirect(`/introduction?lang=${lang}`)
}
