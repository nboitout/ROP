'use client'

import { useLanguage } from '@/app/i18n/LanguageContext'
import type { Lang } from '@/app/i18n/translations'
import { LOCALE_CONFIG, SUPPORTED_LANGS } from '@/app/i18n/locale'

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
        {SUPPORTED_LANGS.map((code) => (
          <option key={code} value={code}>{LOCALE_CONFIG[code].label}</option>
        ))}
      </select>
    </div>
  )
}
