import { permanentRedirect } from 'next/navigation'

export default async function RetiredChapter5Rework({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang = 'fr' } = await searchParams
  permanentRedirect(`/lecture/chapitre-5?lang=${lang}`)
}
