type CookieReader = {
  get(name: string): unknown
}

export const FREE_CHAPTER_ACCESS_COOKIE = 'free_chapters_access'
export const PAID_ACCESS_COOKIE = 'paid_access'
export const ADMIN_SESSION_COOKIE = 'admin_session'

export const FREE_CHAPTER_KEYS = new Set(['introduction', 'chapter-2', 'chapter-14'])

const CHAPTER_ROUTE_ALIASES: Record<string, string> = {
  '/introduction': 'introduction',
  '/lecture/traitement-rop': 'chapter-2',
}

export function chapterKeyFromHref(href: string): string | null {
  if (!href.startsWith('/') || href.startsWith('//')) return null
  const path = href.split(/[?#]/, 1)[0]
  const chapterMatch = path.match(/^\/(?:lecture\/)?chapitre-(\d+)$/)
  if (chapterMatch) return `chapter-${Number(chapterMatch[1])}`
  return CHAPTER_ROUTE_ALIASES[path] ?? null
}

export function isFreeChapterKey(key: string): boolean {
  return FREE_CHAPTER_KEYS.has(key)
}

export function isFreeChapterHref(href: string): boolean {
  const key = chapterKeyFromHref(href)
  return !!key && isFreeChapterKey(key)
}

export function readerXrefHref(href: string, sourceChapterKey: string, restrictPaidXrefs = false): string {
  if (!restrictPaidXrefs || !isFreeChapterKey(sourceChapterKey)) return href
  const targetKey = chapterKeyFromHref(href)
  if (!targetKey || isFreeChapterKey(targetKey)) return href
  return `/acheter-livre?target=${encodeURIComponent(href)}`
}

export function canReadFreeChapter(cookieStore: CookieReader): boolean {
  return !!cookieStore.get(ADMIN_SESSION_COOKIE) || !!cookieStore.get(FREE_CHAPTER_ACCESS_COOKIE)
}

export function canReadPaidChapter(cookieStore: CookieReader): boolean {
  return !!cookieStore.get(ADMIN_SESSION_COOKIE) || !!cookieStore.get(PAID_ACCESS_COOKIE)
}

export function canReadDraftChapter(cookieStore: CookieReader): boolean {
  return !!cookieStore.get(ADMIN_SESSION_COOKIE)
}
