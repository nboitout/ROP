import { createPrivateKey, createSign } from 'node:crypto'

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

function base64url(input: string | Buffer): string {
  const b = typeof input === 'string' ? Buffer.from(input) : input
  return b.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const rawKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY

  if (!email || !rawKey) {
    throw new Error('Missing Google service account credentials in environment variables.')
  }

  // Extract raw base64 from PEM — strip markers, quotes and all whitespace/escape variants
  const pemBase64 = rawKey
    .replace(/^["']|["']$/g, '')          // unwrap surrounding quotes
    .replace(/\\n/g, '\n')                // literal \n → real newline
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/\s/g, '')                   // remove all whitespace
    .trim()

  if (!pemBase64) throw new Error('Private key is empty after stripping PEM headers.')

  // A 2048-bit RSA PKCS#8 key base64-encodes to ~2176 chars. Flag if suspiciously short.
  if (pemBase64.length < 1000) {
    throw new Error(`Private key base64 is too short (${pemBase64.length} chars) — likely truncated in Vercel. Expected ~2176 chars.`)
  }

  // Load key from raw DER bytes — bypasses OpenSSL PEM decoder (source of DECODER errors)
  const derBytes = Buffer.from(pemBase64, 'base64')
  const privateKey = createPrivateKey({ key: derBytes, format: 'der', type: 'pkcs8' })

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
  const sign = createSign('RSA-SHA256')
  sign.update(signingInput)
  const jwt = `${signingInput}.${base64url(sign.sign(privateKey))}`

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
    timestamp:  r[0] ?? '',
    readerId:   r[1] ?? '',
    sessionId:  '',
    firstName:  r[2] ?? '',
    lastName:   r[3] ?? '',
    fullName:   r[4] ?? '',
    email:      r[5] ?? '',
    profession: r[6] ?? '',
    source:     r[7] ?? '',
    userAgent:  r[8] ?? '',
    referer:    r[9] ?? '',
    lang:       '',
    country:    '',
  }))
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function rowsToEvents(rows: string[][]): EventRow[] {
  if (rows.length < 2) return []
  return rows.slice(1).map((r) => {
    // New format (from 2026-05-29): timestamp, readerId, sessionId, chapter, event, data, lang, country, userAgent, referer
    // Old format: timestamp, readerId, chapter, event, data, userAgent, referer
    const newFormat = UUID_RE.test(r[2] ?? '')
    return newFormat
      ? {
          timestamp: r[0] ?? '',
          readerId:  r[1] ?? '',
          sessionId: r[2] ?? '',
          chapter:   r[3] ?? '',
          event:     r[4] ?? '',
          data:      r[5] ?? '',
          lang:      r[6] ?? '',
          country:   r[7] ?? '',
          userAgent: r[8] ?? '',
          referer:   r[9] ?? '',
        }
      : {
          timestamp: r[0] ?? '',
          readerId:  r[1] ?? '',
          sessionId: '',
          chapter:   r[2] ?? '',
          event:     r[3] ?? '',
          data:      r[4] ?? '',
          lang:      '',
          country:   '',
          userAgent: r[5] ?? '',
          referer:   r[6] ?? '',
        }
  })
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
  const [leadsResult, eventsResult, visitsResult] = await Promise.all([
    fetchSheetSafe('Leads'),
    fetchSheetSafe('Events'),
    fetchSheetSafe('Visits'),
  ])

  const errors: Record<string, string> = {}
  if (leadsResult.error)  errors['Leads']  = leadsResult.error
  if (eventsResult.error) errors['Events'] = eventsResult.error
  if (visitsResult.error) errors['Visits'] = visitsResult.error

  const excludedEmails = new Set(
    (process.env.EXCLUDED_EMAILS ?? '')
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)
  )

  // Direct readerId exclusion — bypasses Leads lookup, catches visits with no form submission
  const excludedReaderIds = new Set(
    (process.env.EXCLUDED_READER_IDS ?? '')
      .split(',')
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean)
  )

  const allLeads  = rowsToLeads(leadsResult.rows)
  const allEvents = rowsToEvents(eventsResult.rows)
  const allVisits = rowsToVisits(visitsResult.rows).filter((v) => !v.page.includes('/admin'))

  // Also add readerIds found via email lookup in Leads
  allLeads
    .filter((l) => excludedEmails.has(l.email.toLowerCase()))
    .forEach((l) => { if (l.readerId) excludedReaderIds.add(l.readerId.toLowerCase()) })

  // Apply exclusions first
  const cleanLeads  = allLeads.filter((l) => !excludedReaderIds.has(l.readerId.toLowerCase()) && !excludedEmails.has(l.email.toLowerCase()))
  const cleanEvents = allEvents.filter((e) => !excludedReaderIds.has(e.readerId.toLowerCase()))
  const cleanVisits = allVisits.filter((v) => !excludedReaderIds.has(v.readerId.toLowerCase()))

  // Bot filter: only keep visits from readerIds that have at least one
  // page_leave with dwell time — bots never fire page_leave.
  // Applied after exclusions so excluded readerIds don't inflate the human set.
  const humanReaderIds = new Set(
    cleanVisits
      .filter((v) => v.event === 'page_leave' && parseFloat(v.duration_seconds) > 0)
      .map((v) => v.readerId)
      .filter(Boolean)
  )

  return {
    leads:  cleanLeads,
    events: cleanEvents,
    visits: humanReaderIds.size > 0 ? cleanVisits.filter((v) => humanReaderIds.has(v.readerId)) : cleanVisits,
    errors,
  }
}
