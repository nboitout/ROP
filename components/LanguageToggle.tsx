'use client'

import { useLanguage } from '@/app/i18n/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <button
      className="lang-toggle"
      onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
      aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
    >
      {lang === 'fr' ? 'EN' : 'FR'}
    </button>
  )
}
