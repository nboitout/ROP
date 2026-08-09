import { verifyReaderSession } from '@/lib/authSession'

type CookieValue = { value?: string } | undefined | null

type CookieReader = {
  get(name: string): unknown
}

export const FREE_CHAPTER_ACCESS_COOKIE = 'free_chapters_access'
export const PAID_ACCESS_COOKIE = 'paid_access'
export const ADMIN_SESSION_COOKIE = 'admin_session'

/** The paid product sold on the site — the enriched online book. */
export const ONLINE_BOOK_PRODUCT = 'online_book'

function cookieValue(cookieStore: CookieReader, name: string): string | undefined {
  const entry = cookieStore.get(name) as CookieValue
  if (typeof entry === 'string') return entry
  return entry?.value
}

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

export function readerXrefHref(
  href: string,
  sourceChapterKey: string,
  restrictPaidXrefs = false,
  sourceAnchorId?: string,
  lang = 'fr'
): string {
  let enrichedHref = href

  // New references no longer need to hard-code their return route. Preserve
  // legacy links that already carry one, and add it automatically otherwise.
  if (sourceAnchorId && href.startsWith('/') && !href.startsWith('//')) {
    const [beforeHash, hash = ''] = href.split('#', 2)
    const [pathname, query = ''] = beforeHash.split('?', 2)
    const params = new URLSearchParams(query)
    if (!params.has('xrefBack')) {
      const sourcePath = sourceChapterKey === 'introduction'
        ? '/introduction'
        : sourceChapterKey === 'chapter-2'
          ? '/lecture/traitement-rop'
          : `/lecture/${sourceChapterKey.replace(/^chapter-/, 'chapitre-')}`
      params.set('xrefBack', `${sourcePath}?lang=${lang}#${sourceAnchorId}`)
      const chapterNumber = sourceChapterKey.match(/^chapter-(\d+)/)?.[1]
      params.set('xrefBackLabel', chapterNumber ? `Retour au chapitre ${chapterNumber}` : 'Retour à la référence')
      enrichedHref = `${pathname}?${params.toString()}${hash ? `#${hash}` : ''}`
    }
  }

  if (!restrictPaidXrefs || !isFreeChapterKey(sourceChapterKey)) return enrichedHref
  const targetKey = chapterKeyFromHref(enrichedHref)
  if (!targetKey || isFreeChapterKey(targetKey)) return enrichedHref
  return `/acheter-livre?target=${encodeURIComponent(enrichedHref)}`
}

export function canReadFreeChapter(cookieStore: CookieReader): boolean {
  return !!cookieStore.get(ADMIN_SESSION_COOKIE) || !!cookieStore.get(FREE_CHAPTER_ACCESS_COOKIE)
}

/**
 * Paid access requires a signed reader session naming the online book — the
 * cookie's presence alone means nothing.  Async because signature checking
 * goes through Web Crypto (see lib/authSession.ts).
 */
export async function canReadPaidChapter(cookieStore: CookieReader): Promise<boolean> {
  if (cookieValue(cookieStore, ADMIN_SESSION_COOKIE)) return true

  const session = await verifyReaderSession(cookieValue(cookieStore, PAID_ACCESS_COOKIE))
  return !!session?.products.includes(ONLINE_BOOK_PRODUCT)
}

export function canReadDraftChapter(cookieStore: CookieReader): boolean {
  return !!cookieStore.get(ADMIN_SESSION_COOKIE)
}

/**
 * Per-person access to a single draft page.
 *
 * The grant rides on the same signed reader session as a purchase, but carries
 * `draft:<key>` instead of ONLINE_BOOK_PRODUCT — so canReadPaidChapter() stays
 * false and the holder sees that one draft and nothing else of the book.
 * The session's customerId is the grant label, which is what gets logged when
 * the page is opened.
 */
export function draftGrantProduct(draftKey: string): string {
  return `draft:${draftKey}`
}

/** Grant label if this reader holds a valid grant for `draftKey`, else null. */
export async function readDraftGrant(cookieStore: CookieReader, draftKey: string): Promise<string | null> {
  const session = await verifyReaderSession(cookieValue(cookieStore, PAID_ACCESS_COOKIE))
  if (!session?.products.includes(draftGrantProduct(draftKey))) return null
  return session.customerId
}

/** Admin, or the holder of a grant for this specific draft. */
export async function canReadDraft(cookieStore: CookieReader, draftKey: string): Promise<boolean> {
  return canReadDraftChapter(cookieStore) || !!(await readDraftGrant(cookieStore, draftKey))
}
