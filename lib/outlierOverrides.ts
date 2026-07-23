import { getDbPool } from '@/lib/db'

export type OutlierOverrideDecision = 'keep' | 'exclude'

export interface OutlierOverrideRow {
  key: string
  readerId: string
  day: string
  decision: OutlierOverrideDecision
  updatedAt: string
}

let ensured = false

async function ensureTable() {
  if (ensured) return
  const pool = getDbPool()
  if (!pool) return
  await pool.query(`
    CREATE TABLE IF NOT EXISTS admin_outlier_visit_day_overrides (
      key text PRIMARY KEY,
      reader_id text NOT NULL,
      day date NOT NULL,
      decision text NOT NULL CHECK (decision IN ('keep', 'exclude')),
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `)
  ensured = true
}

export async function listOutlierOverrides(): Promise<OutlierOverrideRow[]> {
  const pool = getDbPool()
  if (!pool) return []
  await ensureTable()
  const result = await pool.query<{
    key: string
    reader_id: string
    day: string
    decision: OutlierOverrideDecision
    updated_at: Date | string
  }>(`
    SELECT key, reader_id, day::text AS day, decision, updated_at
    FROM admin_outlier_visit_day_overrides
  `)
  return result.rows.map((row) => ({
    key: row.key,
    readerId: row.reader_id,
    day: row.day,
    decision: row.decision,
    updatedAt: typeof row.updated_at === 'string' ? row.updated_at : row.updated_at.toISOString(),
  }))
}

export async function saveOutlierOverride(input: {
  key: string
  readerId: string
  day: string
  decision: OutlierOverrideDecision
}): Promise<void> {
  const pool = getDbPool()
  if (!pool) throw new Error('DATABASE_URL is not configured')
  await ensureTable()
  await pool.query(
    `
      INSERT INTO admin_outlier_visit_day_overrides (key, reader_id, day, decision, updated_at)
      VALUES ($1, $2, $3::date, $4, now())
      ON CONFLICT (key) DO UPDATE
      SET reader_id = EXCLUDED.reader_id,
          day = EXCLUDED.day,
          decision = EXCLUDED.decision,
          updated_at = now()
    `,
    [input.key, input.readerId, input.day, input.decision],
  )
}

export async function deleteOutlierOverride(key: string): Promise<void> {
  const pool = getDbPool()
  if (!pool) throw new Error('DATABASE_URL is not configured')
  await ensureTable()
  await pool.query('DELETE FROM admin_outlier_visit_day_overrides WHERE key = $1', [key])
}
