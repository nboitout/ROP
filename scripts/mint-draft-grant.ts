// Mints a per-person access link for a draft chapter.
//
//   AUTH_SECRET=... npx tsx scripts/mint-draft-grant.ts "Marie Dupont" 30
//
// Arguments: the grant label (who the link is for — it is what appears in the
// Events sheet when they open the page) and the number of days it stays valid.
//
// The token is a normal reader session carrying `draft:<key>` instead of
// online_book, so it unlocks that draft and nothing else of the paid book.
// Nothing is stored: to revoke early, rotate AUTH_SECRET (which also signs out
// every paying reader) or let the grant expire.

import { createReaderSessionToken } from '../lib/authSession'

const DRAFT_KEY = 'chapter-5-rework'
const SITE = process.env.SITE_URL?.replace(/\/$/, '') ?? 'https://www.guy-boitout.com'

async function main() {
  const label = process.argv[2]
  const days = Number(process.argv[3] ?? 30)

  if (!label) {
    console.error('Usage: AUTH_SECRET=... npx tsx scripts/mint-draft-grant.ts "<label>" [days]')
    process.exit(1)
  }
  if (!Number.isFinite(days) || days <= 0) {
    console.error(`Invalid number of days: ${process.argv[3]}`)
    process.exit(1)
  }

  const token = await createReaderSessionToken(label, [`draft:${DRAFT_KEY}`], days * 24 * 60 * 60)
  const expiry = new Date(Date.now() + days * 24 * 60 * 60 * 1000)

  console.log(`\nGrant for : ${label}`)
  console.log(`Draft     : ${DRAFT_KEY}`)
  console.log(`Expires   : ${expiry.toISOString().slice(0, 10)} (${days} days)`)
  console.log(`\n${SITE}/api/acces-brouillon?token=${encodeURIComponent(token)}\n`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
