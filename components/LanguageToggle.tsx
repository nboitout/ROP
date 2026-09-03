'use client'

import { useLanguage } from '@/app/i18n/LanguageContext'
import type { Lang } from '@/app/i18n/translations'
import { LOCALE_CONFIG, SUPPORTED_LANGS } from '@/app/i18n/locale'

export default function LanguageToggle({ hiddenLanguages = [] }: { hiddenLanguages?: Lang[] }) {
  const { lang, setLang } = useLanguage()
  const visibleLanguages = SUPPORTED_LANGS.filter((code) => !hiddenLanguages.includes(code))
  const selectedLanguage = visibleLanguages.includes(lang) ? lang : visibleLanguages[0]
  return (
    <div className="lang-select-wrap">
      <select
        className="lang-select"
        value={selectedLanguage}
        onChange={(e) => setLang(e.target.value as Lang)}
        aria-label="Select language"
      >
        {visibleLanguages.map((code) => (
          <option key={code} value={code}>{LOCALE_CONFIG[code].label}</option>
        ))}
      </select>
    </div>
  )
}
