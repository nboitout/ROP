import { permanentRedirect } from 'next/navigation'
import { retiredChapterRedirectUrl, type RetiredChapterSearchParams } from '@/lib/retiredChapterRedirect'

export default async function RetiredChapter4Rework({ searchParams }: { searchParams: Promise<RetiredChapterSearchParams> }) {
  permanentRedirect(retiredChapterRedirectUrl(4, await searchParams))
}
