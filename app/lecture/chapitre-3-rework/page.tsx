import { permanentRedirect } from 'next/navigation'

export default async function RetiredChapter3Rework({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang = 'fr' } = await searchParams
  permanentRedirect(`/lecture/chapitre-3?lang=${lang}`)
}
