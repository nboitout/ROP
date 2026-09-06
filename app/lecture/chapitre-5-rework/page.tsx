import { permanentRedirect } from 'next/navigation'
import { retiredChapterRedirectUrl, type RetiredChapterSearchParams } from '@/lib/retiredChapterRedirect'

export default async function RetiredChapter5Rework({ searchParams }: { searchParams: Promise<RetiredChapterSearchParams> }) {
  permanentRedirect(retiredChapterRedirectUrl(5, await searchParams))
}
