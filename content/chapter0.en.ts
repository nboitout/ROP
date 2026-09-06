import type { Block, Chapter } from './types'
import { introductionEn as translatedIntroduction } from './introduction.en'
import { introductionFr } from './introduction.fr'

const mergeParagraphs = (first: Block, second: Block): Block => {
  if (first.type !== 'para' || second.type !== 'para') throw new Error('Chapter 0 paragraph parity invariant failed')
  return { type: 'para', text: `${first.text} ${second.text}` }
}

const asBulletGroup = (blocks: Block[]): Block => ({
  type: 'bullets',
  items: blocks.map((block) => {
    if (block.type !== 'para') throw new Error('Chapter 0 evidence-list parity invariant failed')
    return block.text.replace(/^\d+\.\s*/, '')
  }),
})

const bibliographyBlocks = (blocks: Block[]): Block[] => {
  const groups = [
    { heading: 1, first: 2, last: 5 },
    { heading: 6, first: 7, last: 12 },
    { heading: 13, first: 14, last: 15 },
    { heading: 16, first: 17, last: 19 },
    { heading: 20, first: 21, last: 23 },
  ]

  return [
    blocks[0],
    ...groups.flatMap(({ heading, first, last }): Block[] => {
      const headingBlock = blocks[heading]
      if (headingBlock.type !== 'para') throw new Error('Chapter 0 bibliography heading invariant failed')
      return [
        { type: 'sub', text: headingBlock.text },
        {
          type: 'bullets',
          items: blocks.slice(first, last + 1).map((block) => {
            if (block.type !== 'para') throw new Error('Chapter 0 bibliography entry invariant failed')
            return block.text.replace(/[’]/g, "'")
          }),
        },
      ]
    }),
  ]
}

/**
 * Canonical English Chapter 0 runtime content.
 *
 * The publishable V2 translation remains the editorial source. This module
 * normalizes its runtime structure to the final French edition so section
 * coordinates, slide anchors, cross-reference returns, and bibliography
 * grouping remain language-independent.
 */
export const chapter0En: Chapter = {
  ...translatedIntroduction,
  sections: translatedIntroduction.sections.map((section, sectionIndex) => {
    let blocks = section.blocks.map((block): Block =>
      block.type === 'figure' ? { ...block, syncHide: true } : block,
    )

    if (sectionIndex === 8) blocks = [mergeParagraphs(blocks[0], blocks[1]), ...blocks.slice(2)]
    if (sectionIndex === 11) blocks = [...blocks.slice(0, 2), asBulletGroup(blocks.slice(2, 6)), ...blocks.slice(6)]
    if (sectionIndex === 16) blocks = bibliographyBlocks(blocks)

    return {
      ...section,
      id: introductionFr.sections[sectionIndex].id,
      blocks,
    }
  }),
}

export default chapter0En
