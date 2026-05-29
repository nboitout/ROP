
// ---- Types ----

export interface LeadRow {
  timestamp: string
  readerId: string
  sessionId: string
  source: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  profession: string
  lang: string
  country: string
  userAgent: string
  referer: string
}

export interface EventRow {
  timestamp: string
  readerId: string
  sessionId: string
  chapter: string
  event: string
  data: string
  lang: string
  country: string
  userAgent: string
  referer: string
}

export interface VisitRow {
  timestamp: string
  event: string
  readerId: string
  sessionId: string
  isReturning: string
  lang: string
  page: string
  country: string
  duration_seconds: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  userAgent: string
  referer: string
}

// ---- In-memory cache ----

interface CacheEntry {
  data: string[][]
  ts: number
}

const cache = new Map<string, CacheEntry>()
const CACHE_TTL_MS = 1 * 60 * 1000 // 1 min (testing — raise to 5 min in production)

// ---- JWT / OAuth ----

function base64url(bytes: Uint8Array | string): string {
  const b = typeof bytes === 'string' ? Buffer.from(bytes) : Buffer.from(bytes)
  return b.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY

  if (!email || !rawKey) {
    throw new Error('Missing Google service account credentials in environment variables.')
  }

  // Normalise PEM — handle literal \n from env var and strip headers
  const pem = rawKey.replace(/\\n/g, '\n')
  const pemBody = pem
    .replace(/-----BEGIN PRIVATE KEY-----/, '')
    .replace(/-----END PRIVATE KEY-----/, '')
    .replace(/\s/g, '')
  const keyBytes = Buffer.from(pemBody, 'base64')

  // Import as PKCS#8 via Web Crypto — works on Node 18 / OpenSSL 3
  const cryptoKey = await globalThis.crypto.subtle.importKey(
    'pkcs8',
    keyBytes,
    { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
    false,
    ['sign'],
  )

  const now = Math.floor(Date.now() / 1000)
  const header  = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = base64url(JSON.stringify({
    iss:   email,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud:   'https://oauth2.googleapis.com/token',
    exp:   now + 3600,
    iat:   now,
  }))

  const signingInput = `${header}.${payload}`
  const sigBytes = await globalThis.crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    Buffer.from(signingInput),
  )
  const jwt = `${signingInput}.${base64url(new Uint8Array(sigBytes))}`

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })

  if (!tokenRes.ok) {
    const err = await tokenRes.text()
    throw new Error(`Failed to get Google access token: ${err}`)
  }

  const tokenData = (await tokenRes.json()) as { access_token: string }
  return tokenData.access_token
}

// ---- Fetch sheet data ----

export async function fetchSheetData(sheetName: string): Promise<string[][]> {
  const cached = cache.get(sheetName)
  if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
    return cached.data
  }

  const spreadsheetId = process.env.GOOGLE_SHEETS_ID
  if (!spreadsheetId) {
    throw new Error('Missing GOOGLE_SHEETS_ID environment variable.')
  }

  const accessToken = await getAccessToken()
  const range = encodeURIComponent(`${sheetName}!A:ZZ`)
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    // No cache directive — we handle caching ourselves
    cache: 'no-store',
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Failed to fetch sheet "${sheetName}": ${err}`)
  }

  const json = (await res.json()) as { values?: string[][] }
  const rows: string[][] = json.values ?? []

  cache.set(sheetName, { data: rows, ts: Date.now() })
  return rows
}

// ---- Map rows to typed objects ----

function rowsToLeads(rows: string[][]): LeadRow[] {
  if (rows.length < 2) return []
  return rows.slice(1).map((r) => ({
    timestamp:  r[0]  ?? '',
    readerId:   r[1]  ?? '',
    sessionId:  r[2]  ?? '',
    source:     r[3]  ?? '',
    firstName:  r[4]  ?? '',
    lastName:   r[5]  ?? '',
    fullName:   r[6]  ?? '',
    email:      r[7]  ?? '',
    profession: r[8]  ?? '',
    lang:       r[9]  ?? '',
    country:    r[10] ?? '',
    userAgent:  r[11] ?? '',
    referer:    r[12] ?? '',
  }))
}

function rowsToEvents(rows: string[][]): EventRow[] {
  if (rows.length < 2) return []
  return rows.slice(1).map((r) => ({
    timestamp:  r[0] ?? '',
    readerId:   r[1] ?? '',
    sessionId:  r[2] ?? '',
    chapter:    r[3] ?? '',
    event:      r[4] ?? '',
    data:       r[5] ?? '',
    lang:       r[6] ?? '',
    country:    r[7] ?? '',
    userAgent:  r[8] ?? '',
    referer:    r[9] ?? '',
  }))
}

function rowsToVisits(rows: string[][]): VisitRow[] {
  if (rows.length < 2) return []
  return rows.slice(1).map((r) => ({
    timestamp:       r[0]  ?? '',
    event:           r[1]  ?? '',
    readerId:        r[2]  ?? '',
    sessionId:       r[3]  ?? '',
    isReturning:     r[4]  ?? '',
    lang:            r[5]  ?? '',
    page:            r[6]  ?? '',
    country:         r[7]  ?? '',
    duration_seconds: r[8] ?? '',
    utm_source:      r[9]  ?? '',
    utm_medium:      r[10] ?? '',
    utm_campaign:    r[11] ?? '',
    utm_content:     r[12] ?? '',
    utm_term:        r[13] ?? '',
    userAgent:       r[14] ?? '',
    referer:         r[15] ?? '',
  }))
}

// ---- Fetch all sheets ----

async function fetchSheetSafe(sheetName: string): Promise<{ rows: string[][], error: string | null }> {
  try {
    const rows = await fetchSheetData(sheetName)
    return { rows, error: null }
  } catch (err) {
    console.warn(`[sheets] Could not load sheet "${sheetName}":`, err)
    return { rows: [], error: String(err) }
  }
}

export async function fetchAllSheets(): Promise<{
  leads: LeadRow[]
  events: EventRow[]
  visits: VisitRow[]
  errors: Record<string, string>
}> {
  const [leads, events, visits] = await Promise.all([
    fetchSheetSafe('Leads'),
    fetchSheetSafe('Events'),
    fetchSheetSafe('Visits'),
  ])

  const errors: Record<string, string> = {}
  if (leads.error)  errors['Leads']  = leads.error
  if (events.error) errors['Events'] = events.error
  if (visits.error) errors['Visits'] = visits.error

  return {
    leads:  rowsToLeads(leads.rows),
    events: rowsToEvents(events.rows),
    visits: rowsToVisits(visits.rows),
    errors,
  }
}
