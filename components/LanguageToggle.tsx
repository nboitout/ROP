'use client'

import { useLanguage } from '@/app/i18n/LanguageContext'
import type { Lang } from '@/app/i18n/translations'

const LANGS: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
]

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="lang-select-wrap">
      <select
        className="lang-select"
        value={lang}
        onChange={(e) => setLang(e.target.value as Lang)}
        aria-label="Select language"
      >
        {LANGS.map(({ code, label }) => (
          <option key={code} value={code}>{label}</option>
        ))}
      </select>
    </div>
  )
}
