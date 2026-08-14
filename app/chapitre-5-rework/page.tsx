import { permanentRedirect } from 'next/navigation'

export default async function RetiredChapter5ReworkClassic({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang = 'fr' } = await searchParams
  permanentRedirect(`/chapitre-5?lang=${lang}`)
}
