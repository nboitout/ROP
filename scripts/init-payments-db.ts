#!/usr/bin/env node
// Applies db/payments.sql to the database in DATABASE_URL.
// Idempotent (every statement is `create ... if not exists`), so it is safe to
// re-run after a schema change.
//
//   npm run db:init-payments

import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnvConfig } from '@next/env'
import { getDbPool } from '../lib/db'

loadEnvConfig(process.cwd())

const __dirname = dirname(fileURLToPath(import.meta.url))

async function main() {
  const pool = getDbPool()
  if (!pool) {
    console.error('DATABASE_URL is not set — nothing to do.')
    process.exit(1)
  }

  const sql = readFileSync(resolve(__dirname, '../db/payments.sql'), 'utf8')
  await pool.query(sql)
  console.log('Payment schema applied.')
  await pool.end()
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
