import { translations, type Lang } from './translations'
import { SITE_URL } from '@/lib/site'

export const LOCALE_CONFIG: Record<Lang, { label: string; openGraphLocale: string }> = {
  fr: { label: 'Français', openGraphLocale: 'fr_FR' },
  en: { label: 'English', openGraphLocale: 'en_GB' },
  de: { label: 'Deutsch', openGraphLocale: 'de_DE' },
  es: { label: 'Español', openGraphLocale: 'es_ES' },
  it: { label: 'Italiano', openGraphLocale: 'it_IT' },
  th: { label: 'ไทย', openGraphLocale: 'th_TH' },
}

export const SUPPORTED_LANGS = Object.keys(LOCALE_CONFIG) as Lang[]
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

export function localizedSiteMetadata(lang: Lang): { title: string; description: string } {
  const t = translations[lang]
  return {
    title: `${t.hero.h1.before} ${t.hero.h1.em}${t.hero.h1.after} · Guy Boitout`,
    description: t.hero.sub,
  }
}

export const OPEN_GRAPH_LOCALES = Object.fromEntries(
  SUPPORTED_LANGS.map((lang) => [lang, LOCALE_CONFIG[lang].openGraphLocale]),
) as Record<Lang, string>

export function alternateOpenGraphLocales(lang: Lang): string[] {
  return SUPPORTED_LANGS
    .filter((candidate) => candidate !== lang)
    .map((candidate) => LOCALE_CONFIG[candidate].openGraphLocale)
}
