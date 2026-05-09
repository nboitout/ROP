'use client'

import { useLanguage } from '@/app/i18n/LanguageContext'
import type { Lang } from '@/app/i18n/translations'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="lang-menu" role="group" aria-label="Language selection">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          className={`lang-btn${lang === code ? ' active' : ''}`}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={label}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
