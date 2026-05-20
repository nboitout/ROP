export type Block =
  | { type: 'para'; text: string }
  | { type: 'lead'; label: string; text: string }
  | { type: 'sub'; text: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'leadBullets'; items: { label: string; text: string }[] }
  | { type: 'figure'; src: string; caption: string; alt: string; orientation: 'landscape' | 'portrait' }
  | { type: 'rop'; body: string[] }

export type Section = { id: string; title: string; blocks: Block[] }

export type Chapter = {
  slug: string          // URL + tracking identifier (e.g. 'introduction', 'chapter-5')
  number?: string       // optional display number; when absent, no "Chapitre X" prefix is shown
  title: string         // display title shown as <h1> in the hero
  sections: Section[]
  revisionSheet?: { src: string; caption: string; alt: string }
  slides?: { url: string; label: string; description: string }
}
