import { permanentRedirect } from 'next/navigation'

export default async function RetiredChapter4Rework({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang = 'fr' } = await searchParams
  permanentRedirect(`/lecture/chapitre-4?lang=${lang}`)
}
