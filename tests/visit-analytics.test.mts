import assert from 'node:assert/strict'
import test from 'node:test'
import { deriveVisits } from '../lib/visitAnalytics.ts'

test('merges cross-tab dwell into one reader visit within 30 minutes', () => {
  const readerId = '8846d514-d731-4977-9ffd-275bc97a06d2'
  const result = deriveVisits([
    { timestamp: '2026-08-26T11:21:37.883Z', event: 'page_visit', readerId, country: 'NO', lang: 'fr' },
    { timestamp: '2026-08-26T11:22:11.474Z', event: 'page_leave', readerId, duration_seconds: '34' },
    { timestamp: '2026-08-26T11:22:18.110Z', event: 'page_leave', readerId, duration_seconds: '3' },
  ])

  assert.equal(result.length, 1)
  assert.equal(result[0].country, 'NO')
  assert.equal(result[0].dwellSeconds, 37)
  assert.equal(result[0].engaged, true)
})

test('starts a new visit after 30 minutes of inactivity', () => {
  const readerId = 'reader'
  const result = deriveVisits([
    { timestamp: '2026-08-26T10:00:00.000Z', event: 'page_visit', readerId },
    { timestamp: '2026-08-26T10:00:12.000Z', event: 'page_leave', readerId, duration_seconds: '12' },
    { timestamp: '2026-08-26T11:00:00.000Z', event: 'page_visit', readerId },
  ])

  assert.equal(result.length, 2)
  assert.equal(result[0].engaged, true)
  assert.equal(result[1].engaged, false)
})

test('a second page view or an interaction qualifies engagement', () => {
  const readerId = 'reader'
  const twoPages = deriveVisits([
    { timestamp: '2026-08-26T10:00:00.000Z', event: 'page_visit', readerId },
    { timestamp: '2026-08-26T10:00:05.000Z', event: 'page_visit', readerId },
  ])
  const withInteraction = deriveVisits(
    [{ timestamp: '2026-08-26T12:00:00.000Z', event: 'page_visit', readerId }],
    [{ timestamp: '2026-08-26T12:00:02.000Z', event: 'cta_click', readerId }],
  )

  assert.equal(twoPages[0].engaged, true)
  assert.equal(withInteraction[0].engaged, true)
})
