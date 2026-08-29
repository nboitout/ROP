import type { DerivedVisit } from './visitAnalytics'

export interface NavigationFlowNode {
  name: string
  step: number
  count: number
  percentage: number
  isDropoff: boolean
}

export interface NavigationFlowLink {
  source: number
  target: number
  value: number
}

export interface NavigationFlowData {
  nodes: NavigationFlowNode[]
  links: NavigationFlowLink[]
  totalVisits: number
  steps: number
}

function normalizedPage(value: string): string {
  if (!value) return '/'
  try {
    const url = new URL(value, 'https://www.guy-boitout.com')
    if (url.pathname === '/' && url.searchParams.get('gate') === 'free') return '/?gate=free'
    return url.pathname.replace(/\/$/, '') || '/'
  } catch {
    const path = value.split('#')[0].split('?')[0].replace(/\/$/, '')
    return path || '/'
  }
}

/**
 * Aggregate qualified browser visits into a four-step navigation graph.
 * The most common pages remain explicit at each step and the long tail is
 * combined as "Other pages" so the Sankey remains readable.
 */
export function buildNavigationFlow(
  visits: DerivedVisit[],
  steps = 4,
  maxPagesPerStep = 6,
): NavigationFlowData {
  const sequences = visits
    .filter((visit) => visit.qualified)
    .map((visit) => visit.pageSequence.map(normalizedPage).filter(Boolean))
    .map((pages) => pages.filter((page, index) => index === 0 || page !== pages[index - 1]))
    .filter((pages) => pages.length > 0)

  const topPages = Array.from({ length: steps }, (_, step) => {
    const counts = new Map<string, number>()
    sequences.forEach((pages) => {
      const page = pages[step]
      if (page) counts.set(page, (counts.get(page) ?? 0) + 1)
    })
    return new Set(
      [...counts.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .slice(0, maxPagesPerStep)
        .map(([page]) => page),
    )
  })

  const mapped = sequences.map((pages) =>
    pages.slice(0, steps).map((page, step) => topPages[step].has(page) ? page : 'Other pages'),
  )
  const nodeCounts = new Map<string, number>()
  const linkCounts = new Map<string, number>()

  mapped.forEach((pages) => {
    pages.forEach((page, step) => {
      const key = `${step}|${page}`
      nodeCounts.set(key, (nodeCounts.get(key) ?? 0) + 1)
    })
    for (let step = 0; step < steps - 1 && step < pages.length; step += 1) {
      const source = `${step}|${pages[step]}`
      const target = pages[step + 1] ? `${step + 1}|${pages[step + 1]}` : `${step + 1}|Dropped off`
      if (!pages[step + 1]) nodeCounts.set(target, (nodeCounts.get(target) ?? 0) + 1)
      const key = `${source}>${target}`
      linkCounts.set(key, (linkCounts.get(key) ?? 0) + 1)
      if (!pages[step + 1]) break
    }
  })

  const entries = [...nodeCounts.entries()].sort(([a], [b]) => {
    const [aStep, aName] = a.split('|')
    const [bStep, bName] = b.split('|')
    return Number(aStep) - Number(bStep) || aName.localeCompare(bName)
  })
  const nodeIndex = new Map(entries.map(([key], index) => [key, index]))
  const totalVisits = sequences.length
  const nodes = entries.map(([key, count]) => {
    const [step, name] = key.split('|')
    return {
      name,
      step: Number(step),
      count,
      percentage: totalVisits > 0 ? (count / totalVisits) * 100 : 0,
      isDropoff: name === 'Dropped off',
    }
  })
  const links = [...linkCounts.entries()].map(([key, value]) => {
    const [source, target] = key.split('>')
    return { source: nodeIndex.get(source)!, target: nodeIndex.get(target)!, value }
  })

  return { nodes, links, totalVisits, steps }
}
