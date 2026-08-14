const SESSION_ID_KEY = 'rop_sid'
const READER_ID_KEY = 'rop_rid'
const READER_ID_LOCK = 'rop_rid_mint'
const UTM_KEY = 'rop_utm'
const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const
const UUID_RE = /^[0-9a-f-]{36}$/i

// Mirror of the httpOnly reader_id cookie, which the page itself cannot read.
// Its job is to survive the window before the first Set-Cookie lands: tabs
// opened together would otherwise each be handed a different id by the server.
// localStorage is shared across the origin's tabs, so they all send the same
// one. The server still treats its cookie as authoritative and echoes back
// whatever it resolved, which is what rememberReaderId stores.
let cachedReaderId: string | null = null

function readStoredReaderId(): string | null {
  if (cachedReaderId) return cachedReaderId
  try {
    const stored = localStorage.getItem(READER_ID_KEY)
    if (stored && UUID_RE.test(stored)) {
      cachedReaderId = stored
      return stored
    }
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). Falling
    // through means the server mints the id, exactly as it did before.
  }
  return null
}

function mintReaderId(): string {
  const id = crypto.randomUUID()
  rememberReaderId(id)
  return id
}

export function rememberReaderId(id: string): void {
  if (!UUID_RE.test(id)) return
  cachedReaderId = id
  try {
    localStorage.setItem(READER_ID_KEY, id)
  } catch {
    // Keep the in-memory value; it still de-duplicates within this tab.
  }
}

// Minting is serialised with the Web Locks API, which is held across every tab
// of the origin — so a burst of tabs opening at once mints one id between them
// rather than racing on the read-then-write.
export async function ensureReaderId(): Promise<string> {
  const stored = readStoredReaderId()
  if (stored) return stored
  const locks = typeof navigator !== 'undefined' ? navigator.locks : undefined
  if (!locks) return mintReaderId()
  try {
    return await locks.request(READER_ID_LOCK, () => readStoredReaderId() ?? mintReaderId())
  } catch {
    return mintReaderId()
  }
}

// Synchronous, and never mints. The page_leave beacon runs on pagehide, where
// awaiting a lock risks the document being torn down before the fetch is
// queued; by then ensureReaderId has already run for the page_visit.
export function getReaderIdSync(): string {
  return readStoredReaderId() ?? ''
}

export function getSessionId(): string {
  let id = sessionStorage.getItem(SESSION_ID_KEY)
  if (!id) {
    id = crypto.randomUUID()
    sessionStorage.setItem(SESSION_ID_KEY, id)
  }
  return id
}

// Reads UTM params from the current URL on first call per session,
// then returns the stored value — so UTM attribution sticks even after
// the visitor navigates to another page within the same session.
export function getSessionUtm(): Record<string, string> {
  const stored = sessionStorage.getItem(UTM_KEY)
  if (stored !== null) {
    try { return JSON.parse(stored) } catch { /* */ }
  }
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  for (const key of UTM_PARAMS) {
    const val = params.get(key)
    if (val) utm[key] = val
  }
  sessionStorage.setItem(UTM_KEY, JSON.stringify(utm))
  return utm
}
