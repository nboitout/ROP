'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Classic reading is a large-screen mode: below the breakpoint where the
// synchronized reader splits into two columns, the two modes render the same
// single column and the distinction is meaningless. Direct links and stale
// bookmarks to /chapitre-N therefore land back on the synchronized route on
// phones, which is what they did while classic mode was retired.
//
// Checked once on mount only: resizing a desktop window narrow should not
// yank the reader out from under someone mid-chapter.
const LARGE_SCREEN = '(min-width:981px)'

export default function ClassicModeGuard({ syncHref }: { syncHref: string }) {
  const router = useRouter()
  useEffect(() => {
    if (!window.matchMedia(LARGE_SCREEN).matches) router.replace(syncHref)
  }, [router, syncHref])
  return null
}
