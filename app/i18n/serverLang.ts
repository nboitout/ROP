import { cookies } from 'next/headers'
import type { Lang } from './translations'

const LANGS: Lang[] = ['fr', 'en', 'de', 'es', 'it']

/**
 * Reads the persisted `lang` cookie in a server component and validates it.
 * Falls back to French when the cookie is missing or invalid.
 */
export async function getServerLang(): Promise<Lang> {
  const value = (await cookies()).get('lang')?.value as Lang | undefined
  return value && LANGS.includes(value) ? value : 'fr'
}
