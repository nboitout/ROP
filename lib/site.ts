export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://guy-boitout.com').replace(/\/$/, '')

export const SITE_NAME = 'R.O.P. - Guy Boitout'

export const SITE_TITLE =
  'Reflexotherapie occipito-podale et visceres des cavites abdominale et pelvienne - Guy Boitout'

export const SITE_DESCRIPTION =
  'Troisieme ouvrage de Guy Boitout sur la Reflexotherapie Occipito-Podale, au service des praticiens.'

export const SOCIAL_IMAGE_PATH = '/opengraph-image'

// Home-screen app name ("Add to Home Screen"), localized. ROP stays ROP.
export const APP_NAME: Record<string, string> = {
  fr: '3e livre ROP',
  en: '3rd book ROP',
  de: '3. Buch ROP',
  es: '3er libro ROP',
  it: '3° libro ROP',
  th: 'ROP เล่ม 3',
}
