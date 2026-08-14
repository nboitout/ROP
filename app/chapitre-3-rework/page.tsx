import { permanentRedirect } from 'next/navigation'

export default async function RetiredChapter3ReworkClassic({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang = 'fr' } = await searchParams
  permanentRedirect(`/chapitre-3?lang=${lang}`)
}
