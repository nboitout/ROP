// Per-chapter reading-position memory.
//
// Both readers tag every content block with a stable id (data-pos-anchor,
// "p-<section>-<index>"). We remember the block the reader was on, keyed by
// chapter slug, in sessionStorage — so leaving a chapter (e.g. via "Tous les
// chapitres") and coming back in the same session restores the reading
// position instead of snapping to the top. Block ids are shared between the
// synchronized and classic readers, so the position survives a mode switch too.

const key = (slug: string) => `rop:readpos:${slug}`

// Where the "reading line" sits: a touch below the fixed top bar.
function readingLine() {
  return Math.min(140, window.innerHeight * 0.25)
}

/** Id of the last block whose top has crossed the reading line. */
export function currentTopAnchorId(): string | null {
  let id: string | null = null
  document.querySelectorAll<HTMLElement>('[data-pos-anchor]').forEach((el) => {
    if (el.id && el.getBoundingClientRect().top <= readingLine()) id = el.id
  })
  return id
}

export function saveReadingPosition(slug: string, anchorId: string): void {
  try {
    sessionStorage.setItem(key(slug), anchorId)
  } catch {
    /* storage unavailable (private mode / quota) — position memory is best-effort */
  }
}

export function loadReadingPosition(slug: string): string | null {
  try {
    return sessionStorage.getItem(key(slug))
  } catch {
    return null
  }
}

/**
 * Scroll the given block to just under the top bar, correcting for a short
 * window so lazy-loaded figures growing above it can't leave us short of the
 * target. Cancels on any manual scroll/key gesture. Returns true if the anchor
 * was found.
 */
export function restoreToAnchor(id: string, marginTop = 96): boolean {
  const el = document.getElementById(id)
  if (!el) return false

  // The site sets html{scroll-behavior:smooth}; force instant positioning so
  // the restore (and its corrections) don't animate from the top.
  const root = document.documentElement
  const prevBehavior = root.style.scrollBehavior
  root.style.scrollBehavior = 'auto'

  const jump = () => {
    const target = document.getElementById(id)
    if (!target) return
    window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - marginTop)
  }
  jump()

  let cancelled = false
  const onUser = () => { cancelled = true }
  window.addEventListener('wheel', onUser, { passive: true })
  window.addEventListener('touchmove', onUser, { passive: true })
  window.addEventListener('keydown', onUser)
  const cleanup = () => {
    window.removeEventListener('wheel', onUser)
    window.removeEventListener('touchmove', onUser)
    window.removeEventListener('keydown', onUser)
    root.style.scrollBehavior = prevBehavior
  }

  const start = performance.now()
  const tick = () => {
    if (cancelled) { cleanup(); return }
    jump()
    if (performance.now() - start > 1200) { cleanup(); return }
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
  return true
}
