import { cookies } from 'next/headers'
import type { Lang } from './translations'

const LANGS: Lang[] = ['fr', 'en', 'de', 'es', 'it']

/** Type guard: is the value one of the supported languages? */
export function isLang(value: string | undefined | null): value is Lang {
  return !!value && LANGS.includes(value as Lang)
}

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
  const value = (await cookies()).get('lang')?.value
  return isLang(value) ? value : 'fr'
}
