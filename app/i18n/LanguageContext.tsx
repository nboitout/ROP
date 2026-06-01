'use client'

import { createContext, useContext, useState } from 'react'
import { translations, type Lang } from './translations'

type LanguageContextValue = {
  lang: Lang
  t: typeof translations['fr']
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  t: translations.fr,
  setLang: () => {},
})

function persistLang(l: Lang) {
  if (typeof document !== 'undefined') {
    // 1 year, readable by server components on subsequent navigations
    document.cookie = `lang=${l}; path=/; max-age=31536000; samesite=lax`
  }
}

export function LanguageProvider({
  children,
  initialLang = 'fr',
}: {
  children: React.ReactNode
  initialLang?: Lang
}) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  function setLang(l: Lang) {
    setLangState(l)
    persistLang(l)
  }

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
