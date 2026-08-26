import type { Lang } from './translations'
import { SITE_URL } from '@/lib/site'

export const SUPPORTED_LANGS: readonly Lang[] = ['fr', 'en', 'de', 'es', 'it', 'th']
export const DEFAULT_LANG: Lang = 'fr'
export const LOCALE_REQUEST_HEADER = 'x-rop-lang'

export function isLang(value: string | undefined | null): value is Lang {
  return !!value && SUPPORTED_LANGS.includes(value as Lang)
}

export function resolveLang(explicit: string | undefined | null, persisted?: string | null): Lang {
  if (explicit != null) return isLang(explicit) ? explicit : DEFAULT_LANG
  return isLang(persisted) ? persisted : DEFAULT_LANG
}

export function localizedHref(href: string, lang: Lang): string {
  if (href.startsWith('#') || /^(?:[a-z]+:)?\/\//i.test(href) || /^(?:mailto|tel):/i.test(href)) return href
  const [withoutHash, hash = ''] = href.split('#', 2)
  const [pathname, query = ''] = withoutHash.split('?', 2)
  const params = new URLSearchParams(query)
  params.set('lang', lang)
  return `${pathname}?${params.toString()}${hash ? `#${hash}` : ''}`
}

export function languageAlternates(pathname: string): Record<string, string> {
  return Object.fromEntries([
    ...SUPPORTED_LANGS.map((lang) => [lang, `${SITE_URL}${localizedHref(pathname, lang)}`]),
    ['x-default', `${SITE_URL}${localizedHref(pathname, DEFAULT_LANG)}`],
  ])
}

export const OPEN_GRAPH_LOCALES: Record<Lang, string> = {
  fr: 'fr_FR', en: 'en_GB', de: 'de_DE', es: 'es_ES', it: 'it_IT', th: 'th_TH',
}
