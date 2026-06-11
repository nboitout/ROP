'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { translations, type Lang } from './translations'
import { getSessionId } from '@/lib/session'

const LANGS: Lang[] = ['fr', 'en', 'de', 'es', 'it']

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
  const router = useRouter()

  // Sync from cookie on mount in case the server-rendered initialLang was stale
  useEffect(() => {
    const match = document.cookie.match(/(?:^|; )lang=([^;]+)/)
    if (match) {
      const cookieLang = match[1] as Lang
      if (LANGS.includes(cookieLang) && cookieLang !== lang) setLangState(cookieLang)
    }
  }, [])

  function setLang(l: Lang) {
    // Record the deliberate language change (from → to). Only fires on a real
    // toggle by the visitor — the cookie-sync above uses setLangState directly,
    // so it never counts as a switch.
    if (l !== lang) {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chapter: 'site',
          event: 'language_switch',
          data: { from: lang, to: l },
          lang: l,
          sessionId: getSessionId(),
        }),
        keepalive: true,
      }).catch(() => {})
    }
    setLangState(l)
    persistLang(l)
    // Flush the Next.js router cache so server components re-run with the new
    // lang cookie on the next navigation — without this, pages like /introduction
    // keep serving the previously cached RSC payload in the old language.
    router.refresh()
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
