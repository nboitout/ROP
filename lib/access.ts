type CookieReader = {
  get(name: string): unknown
}

export const FREE_CHAPTER_ACCESS_COOKIE = 'free_chapters_access'
export const PAID_ACCESS_COOKIE = 'paid_access'
export const ADMIN_SESSION_COOKIE = 'admin_session'

export const FREE_CHAPTER_KEYS = new Set(['introduction', 'chapter-2', 'chapter-14'])

export function canReadFreeChapter(cookieStore: CookieReader): boolean {
  return !!cookieStore.get(ADMIN_SESSION_COOKIE) || !!cookieStore.get(FREE_CHAPTER_ACCESS_COOKIE)
}

export function canReadPaidChapter(cookieStore: CookieReader): boolean {
  return !!cookieStore.get(ADMIN_SESSION_COOKIE) || !!cookieStore.get(PAID_ACCESS_COOKIE)
}

export function canReadDraftChapter(cookieStore: CookieReader): boolean {
  return !!cookieStore.get(ADMIN_SESSION_COOKIE)
}
