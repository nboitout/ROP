import { permanentRedirect } from 'next/navigation'

export default async function RetiredChapter4ReworkClassic({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang = 'fr' } = await searchParams
  permanentRedirect(`/chapitre-4?lang=${lang}`)
}
