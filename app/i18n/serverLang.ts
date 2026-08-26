import { cookies, headers } from 'next/headers'
import type { Lang } from './translations'
import { isLang, LOCALE_REQUEST_HEADER } from './locale'

export { isLang } from './locale'

/**
 * Resolves the content language for a server component.
 *
 * An optional `override` (typically the `?lang=` query param) takes precedence
 * over the persisted `lang` cookie. This lets admin/preview links pin a single
 * tab to a language without changing the site-wide cookie. When the override is
 * absent or invalid, the cookie is used; an invalid/missing cookie falls back to
 * French.
 */
export async function getServerLang(override?: string): Promise<Lang> {
  if (isLang(override)) return override
  if (override != null) return 'fr'
  const requestLang = (await headers()).get(LOCALE_REQUEST_HEADER)
  if (isLang(requestLang)) return requestLang
  const value = (await cookies()).get('lang')?.value
  return isLang(value) ? value : 'fr'
}
