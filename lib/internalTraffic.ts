import type { NextRequest, NextResponse } from 'next/server'

export const ADMIN_SESSION_COOKIE = 'admin_session'
export const INTERNAL_TRAFFIC_COOKIE = 'internal_traffic'
const ONE_YEAR = 60 * 60 * 24 * 365

// Visitors always hidden from the admin dashboard (site owner's own devices),
// in addition to anything set via EXCLUDED_READER_IDS in the environment.
export const ALWAYS_EXCLUDED_READER_IDS = [
  '84f09d82-c2d9-491f-8d9d-8d98ae785327', // owner - mobile (iPhone)
  'e0ca4a07-38ca-44bf-bfd9-510d6a2a9f73', // owner - desktop (Nicolas Boitout; geolocates to RO)
  '0a0b76ef-9fdf-4b3e-9cbe-337c8d46f750', // owner - desktop (early sessions)
  'b025efe8-ceb8-4cd1-9473-f2e476b151c5', // Guy - laptop (reviewer; had admin session)
  '12e8c12c-2c84-45fc-92fb-df432042b5d3', // Guy - mobile
  // Owner QA - incognito sessions testing the free-chapter gate on 2026-06-09.
  '70153b36-0037-45eb-a110-811297ba5a7a',
  'cdc4d6bc-252a-4402-bc07-349fd63ca3e1',
  '419d54e6-3a69-4a6d-8981-750c9c2bd448',
  '9ccbcb83-5f0f-47e7-8a33-13ae826a28f0',
  '4fd915c9-cab3-49d1-989d-911a2f5214af',
  '8aa28bec-8f8f-42d6-a068-7348ad0ffa50',
]

// Emails always hidden from the dashboard, in addition to anything in the
// EXCLUDED_EMAILS env var. Excluding by email catches every device the person
// signs up with - current and future - so we don't have to keep chasing new
// reader_ids each time the author/reviewer re-registers.
export const ALWAYS_EXCLUDED_EMAILS = [
  'guyboitout.osteo@free.fr', // Guy Boitout (author / reviewer)
]

// Team members who should disappear from the dashboard only from a given date
// onward, while preserving any earlier historical traffic.
export const DATE_SCOPED_EXCLUSIONS = [
  {
    startDate: '2026-06-27',
    emails: ['matei.boitout@gmail.com'],
    readerIds: [
      'b5bd7511-f9f1-4b25-bae4-8300acb2c4c7', // Matei - mobile
      '7e3032dd-0416-4446-852f-8c16ca4e61ee', // Matei - desktop
    ],
  },
]

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

export function isAlwaysExcludedEmail(email: string): boolean {
  return ALWAYS_EXCLUDED_EMAILS.includes(normalizeEmail(email))
}

export function isDateScopedExcludedEmail(email: string, isoDate: string): boolean {
  const normalized = normalizeEmail(email)
  return DATE_SCOPED_EXCLUSIONS.some(
    ({ startDate, emails }) =>
      isoDate >= startDate && emails.some((entry) => normalizeEmail(entry) === normalized)
  )
}

export function hasInternalTrafficMarker(req: NextRequest): boolean {
  return !!req.cookies.get(INTERNAL_TRAFFIC_COOKIE) || !!req.cookies.get(ADMIN_SESSION_COOKIE)
}

export function markInternalTraffic(response: NextResponse): void {
  response.cookies.set(INTERNAL_TRAFFIC_COOKIE, '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: ONE_YEAR,
    path: '/',
  })
}
