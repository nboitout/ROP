export type RetiredChapterSearchParams = Record<
  string,
  string | string[] | undefined
>

/**
 * Build a canonical chapter URL without dropping legacy query parameters.
 * The Location deliberately has no fragment: browsers inherit the original
 * request fragment across an HTTP redirect when Location does not provide one.
 */
export function retiredChapterRedirectUrl(
  chapterNumber: 3 | 4 | 5,
  searchParams: RetiredChapterSearchParams,
): string {
  const params = new URLSearchParams()

  for (const [name, value] of Object.entries(searchParams)) {
    if (Array.isArray(value)) {
      for (const item of value) params.append(name, item)
    } else if (value !== undefined) {
      params.append(name, value)
    }
  }

  if (!params.has('lang')) params.set('lang', 'fr')
  return `/lecture/chapitre-${chapterNumber}?${params.toString()}`
}
