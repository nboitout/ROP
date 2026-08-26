'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { translations, type Lang } from './translations'
import { resolveLang, SUPPORTED_LANGS } from './locale'
import { getSessionId } from '@/lib/session'

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

  // On mount, resolve the tab's language: a ?lang= URL param (used by preview /
  // per-language links) pins this tab and takes precedence over the persisted
  // cookie; otherwise fall back to the cookie in case the server-rendered
  // initialLang was stale.
  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get('lang')
    if (urlLang !== null) {
      const resolvedUrlLang = resolveLang(urlLang)
      if (resolvedUrlLang !== lang) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLangState(resolvedUrlLang)
      }
      return
    }
    const match = document.cookie.match(/(?:^|; )lang=([^;]+)/)
    if (match) {
      const cookieLang = match[1] as Lang
      if (SUPPORTED_LANGS.includes(cookieLang) && cookieLang !== lang) {
        setLangState(cookieLang)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
    // Keep an explicit ?lang= route in sync with the visitor's selection. A
    // refresh alone would leave the old query override pinned on server pages.
    const params = new URLSearchParams(window.location.search)
    params.set('lang', l)
    const query = params.toString()
    router.replace(`${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`, { scroll: false })
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
