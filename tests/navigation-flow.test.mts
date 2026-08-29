import assert from 'node:assert/strict'
import test from 'node:test'
import { buildNavigationFlow } from '@/lib/navigationFlow'
import type { DerivedVisit } from '@/lib/visitAnalytics'

function visit(pageSequence: string[], qualified = true): DerivedVisit {
  return {
    readerId: crypto.randomUUID(),
    startedAt: '2026-08-26T10:00:00.000Z',
    endedAt: '2026-08-26T10:00:10.000Z',
    pageViews: pageSequence.length,
    dwellSeconds: 10,
    interactions: 0,
    qualified,
    country: 'FR',
    lang: 'en',
    pageSequence,
  }
}

test('builds four navigation steps and records drop-off', () => {
  const flow = buildNavigationFlow([
    visit(['/','/introduction','/acheter-livre']),
    visit(['/','/introduction']),
    visit(['/chapitres-gratuits']),
  ])

  assert.equal(flow.totalVisits, 3)
  const homepage = flow.nodes.find((node) => node.step === 0 && node.name === '/')
  const secondStepDrop = flow.nodes.find((node) => node.step === 1 && node.name === 'Dropped off')
  const thirdStepDrop = flow.nodes.find((node) => node.step === 2 && node.name === 'Dropped off')
  assert.equal(homepage?.count, 2)
  assert.equal(secondStepDrop?.count, 1)
  assert.equal(thirdStepDrop?.count, 1)
})

test('excludes unqualified visits and collapses consecutive duplicate pages', () => {
  const flow = buildNavigationFlow([
    visit(['/','/','/introduction']),
    visit(['/ignored'], false),
  ])

  assert.equal(flow.totalVisits, 1)
  assert.equal(flow.nodes.some((node) => node.name === '/ignored'), false)
  assert.equal(flow.nodes.find((node) => node.step === 1 && node.name === '/introduction')?.count, 1)
})

test('keeps only the free-gate query as a distinct navigation page', () => {
  const flow = buildNavigationFlow([
    visit(['https://www.guy-boitout.com/?gate=free&utm_source=test', '/introduction?lang=en']),
  ])

  assert.equal(flow.nodes.find((node) => node.step === 0)?.name, '/?gate=free')
  assert.equal(flow.nodes.find((node) => node.step === 1)?.name, '/introduction')
})
