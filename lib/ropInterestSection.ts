import type { Section } from '@/content/types'

/** ROP callout sections carry their own visual heading inside the callout. */
export function isRopInterestSection(section: Section) {
  return /^(?:int[ée]r[êe]t en r\.?o\.?p\.?|relevance to r\.?o\.?p\.?)$/i.test(section.title.trim()) &&
    section.blocks[0]?.type === 'rop'
}
