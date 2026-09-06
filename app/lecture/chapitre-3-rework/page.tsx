import { permanentRedirect } from 'next/navigation'
import { retiredChapterRedirectUrl, type RetiredChapterSearchParams } from '@/lib/retiredChapterRedirect'

export default async function RetiredChapter3Rework({ searchParams }: { searchParams: Promise<RetiredChapterSearchParams> }) {
  permanentRedirect(retiredChapterRedirectUrl(3, await searchParams))
}
