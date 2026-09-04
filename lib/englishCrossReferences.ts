import type { Block, Chapter, CrossReference } from '@/content/types'

type ChapterLookup = (key: string) => Chapter | undefined

const SOURCE_SECTION_ALIASES: Record<string, Record<string, string>> = {
  'chapter-11': { 'interet-en-rop-2': 'anatomie' },
  'chapter-12': { 'moyens-de-fixite': 'anatomie', 'interet-en-rop-2': 'physiologie' },
}

const TEXT_TRANSLATIONS: Record<string, string> = {
  'Fondements neuro-anatomiques de la ROP': 'Neuroanatomical Foundations of ROP',
  'Chapitre 1': 'Chapter 1',
  'Chapitre 4': 'Chapter 4',
  'Chapitre 5': 'Chapter 5',
  'Chapitre 6': 'Chapter 6',
  'Chapitre 18': 'Chapter 18',
  'Mécanisme de stress': 'Stress Mechanisms',
  'Cavité pelvienne': 'Pelvic Cavity',
  'Système nerveux central': 'Central Nervous System',
  'Système érectile masculin et féminin': 'Male and Female Erectile System',
  'Vessie': 'Bladder',
  'Diaphragme': 'Diaphragm',
  'Généralités': 'General Principles',
  'Effet turgor et pressions intracavitaires': 'Turgor Effect and Intracavitary Pressures',
  'Mobilité viscérale': 'Visceral Mobility',
  'Centres supérieurs.': 'Higher centres.',
  'Régulation autonome et plexus prévertébraux.': 'Autonomic regulation and prevertebral plexuses.',
  'Interface thoraco-abdominale.': 'Thoracoabdominal interface.',
  'Continuité abdomino-pelvienne.': 'Abdominopelvic continuity.',
  'Intestin grêle': 'Small Intestine',
  'Intestin grêle : vascularisation': 'Small Intestine: Vascular Supply',
  'Intestin grêle : vascularisation': 'Small Intestine: Vascular Supply',
  'Intestin grêle : dysbioses': 'Small Intestine: Dysbiosis',
  'Intestin grêle, section Système nerveux entérique': 'Small Intestine, Enteric Nervous System section',
  'Intestin grêle, système nerveux entérique et axe cerveau–intestin': 'Small Intestine, enteric nervous system and brain–gut axis',
  'Intestin grêle — zones réflexes podales': 'Small Intestine — Foot Reflex Zones',
  'Intestin grêle, axe cerveau–intestin et interface SNA–SNE': 'Small Intestine, brain–gut axis and ANS–ENS interface',
  'Côlon, Vascularisation': 'Colon, Vascular Supply',
  'Côlon, zone de Cannon–Böhm': 'Colon, Cannon–Böhm point',
  'Foie': 'Liver',
  'Foie : système porte': 'Liver: Portal System',
  'Reins': 'Kidneys',
  'Reins et surrénales': 'Kidneys and Adrenal Glands',
  'Reins — zones réflexes podales': 'Kidneys — Foot Reflex Zones',
  'Rein, veine rénale': 'Kidney, renal vein',
  'Reins, vascularisation veineuse, rein gauche': 'Kidneys, venous drainage, left kidney',
  'Estomac': 'Stomach',
  'Duodénum': 'Duodenum',
  'Duodénum : présentation anatomique et physiologique': 'Duodenum: Anatomical and Physiological Overview',
  'Pancréas : relations viscéro-émotionnelles': 'Pancreas: Viscero-emotional Relationships',
  'Organes génitaux féminins': 'Female Genital Organs',
  'Organes génitaux masculins': 'Male Genital Organs',
  'Utérus': 'Uterus',
  'Cycle menstruel': 'Menstrual Cycle',
  'Vascularisation de l’utérus': 'Uterine Vascular Supply',
  'Incontinence urinaire d’effort': 'Stress Urinary Incontinence',
  'Relations viscéro-émotionnelles': 'Viscero-emotional Relationships',
  'SNC, Cerveau, limbique ou émotionnel': 'CNS, Brain, Limbic or Emotional Networks',
  'SNC, Cortex préfrontal et orbito-nasal': 'CNS, Prefrontal and Orbitonasal Cortex',
  'Généralités, effet turgor et pressions intra-cavitaires': 'General Principles, Turgor Effect and Intracavitary Pressures',
  'Vessie, Incontinence urinaire d’effort': 'Bladder, Stress Urinary Incontinence',
  'Théorie polyvagale, section Malaise vagal': 'Polyvagal Theory, Vasovagal Syncope section',
  'Théorie polyvagale, pour la variabilité de la fréquence cardiaque et les modèles vagaux': 'Polyvagal theory, heart-rate variability and vagal models',
  'Système nerveux central, tronc cérébral et NTS': 'Central Nervous System, brainstem and NTS',
  'Zones réflexes podales du diaphragme : coupoles diaphragmatiques': 'Diaphragm Foot Reflex Zones: Diaphragmatic Domes',
  'Sections « Parasympathique viscéro-moteur » et « Nerf vague viscéro-sensitif ».': '“Visceromotor Parasympathetic System” and “Viscerosensory Vagus Nerve” sections.',
  'Sections « Sympathique viscéro-moteur » et « Chaîne plexique prévertébrale ».': '“Visceromotor Sympathetic System” and “Prevertebral Plexus Chain” sections.',
  'Sections « Parasympathique pelvien », « Sympathique viscéro-moteur » et « Plexus préviscéral pelvien ».': '“Pelvic Parasympathetic System”, “Visceromotor Sympathetic System” and “Pelvic Previsceral Plexus” sections.',
  'Péritoine et interfaces loco-régionales.': 'Peritoneum and locoregional interfaces.',
  'Intégration centrale et réseaux cortico-limbiques.': 'Central integration and corticolimbic networks.',
  'Relations entre respiration, SNA, stress, sommeil et adaptation.': 'Relationships between breathing, the ANS, stress, sleep and adaptation.',
  'Diaphragme : reflux gastro-œsophagien et hernie hiatale': 'Diaphragm: Gastro-oesophageal Reflux and Hiatal Hernia',
  'Séreuses : glissement et pressions': 'Serous Membranes: Gliding and Pressures',
  'Sereuses : glissement et pressions': 'Serous Membranes: Gliding and Pressures',
  'Niveau 1 : Régulation des centres supérieurs.': 'Level 1: Regulation of Higher Centres.',
  'Niveau 3 : Régulation viscérale loco-régionale.': 'Level 3: Locoregional Visceral Regulation.',
  'Centres supérieurs et environnement neuro-méningé.': 'Higher centres and the neuro-meningeal environment.',
  'Sympathique thoraco-lombaire, parasympathique pelvien S2-S4, nerfs hypogastriques et plexus hypogastrique inférieur.': 'Thoracolumbar sympathetic system, pelvic parasympathetic system S2–S4, hypogastric nerves and inferior hypogastric plexus.',
  ', Innervation autonome de la cavité pelvienne': 'Autonomic Innervation of the Pelvic Cavity',
  'Réseaux centraux et cortico-limbiques ; voir également la section 11 « Relations viscéro-émotionnelles » du présent chapitre.': 'Central and corticolimbic networks; see also section 11, “Viscero-emotional Relationships”, in this chapter.',
  'cf. section 10 « Relations viscéro-émotionnelles » du présent chapitre.': 'See section 10, “Viscero-emotional Relationships”, in this chapter.',
  'cf. section 1.11 « Relations viscéro-émotionnelles de l’utérus » du présent chapitre.': 'See section 1.11, “Viscero-emotional Relationships of the Uterus”, in this chapter.',
  'cf. sections 1.11 et 2.11 « Relations viscéro-émotionnelles » pour l’application clinique.': 'See sections 1.11 and 2.11, “Viscero-emotional Relationships”, for clinical application.',
  'Voir également la section 9 « Relations viscéro-émotionnelles » du présent chapitre.': 'See also section 9, “Viscero-emotional Relationships”, in this chapter.',
  'pour les plexus propres aux différents territoires digestifs et rénaux': 'for the plexuses specific to the digestive and renal regions',
  'www.guy-boitout.com/fondements-neuro-anatomiques': 'www.guy-boitout.com/fondements-neuro-anatomiques',
}

function blockText(block: Block): string {
  switch (block.type) {
    case 'para': case 'sub': case 'quote': return block.text
    case 'lead': return `${block.label} ${block.text}`
    case 'bullets': case 'numbered': return block.items.join(' ')
    case 'leadBullets': return block.items.map((item) => `${item.label} ${item.text}`).join(' ')
    case 'note': return `${block.label} ${block.body.join(' ')}`
    case 'rop': return block.body.join(' ')
    case 'figure': return `${block.caption} ${block.alt}`
    case 'figurePair': return block.figures.map((figure) => `${figure.caption} ${figure.alt}`).join(' ')
    case 'xref': return `${block.label} ${block.text ?? ''}`
    case 'table': return `${block.headers.join(' ')} ${block.rows.flat().join(' ')}`
    case 'reflexAtlas': return ''
  }
}

function targetKeyFromPath(pathname: string): string | undefined {
  const match = pathname.match(/^\/lecture\/chapitre-(\d+)(?:-rework)?$/)
  if (match) return `chapter-${Number(match[1])}`
  if (pathname === '/lecture/traitement-rop') return 'chapter-2'
  return undefined
}

function localizedHref(href: string, lookup: ChapterLookup): string {
  const url = new URL(href, 'https://rop.local')
  url.pathname = url.pathname
    .replace('/lecture/chapitre-3-rework', '/lecture/chapitre-3')
    .replace('/lecture/chapitre-4-rework', '/lecture/chapitre-4')
    .replace('/lecture/chapitre-5-rework', '/lecture/chapitre-5')
    .replace('/lecture/fondements-neuro-anatomiques', '/fondements-neuro-anatomiques')
  url.searchParams.set('lang', 'en')
  url.searchParams.delete('xrefBack')
  url.searchParams.delete('xrefBackLabel')

  const targetKey = targetKeyFromPath(url.pathname)
  const target = targetKey ? lookup(targetKey) : undefined
  const paragraph = url.hash.match(/^#p-(.*)-(\d+)$/)
  if (target && paragraph) {
    const [, sectionId, rawIndex] = paragraph
    const section = target.sections.find((candidate) => candidate.id === sectionId)
    if (!section || Number(rawIndex) >= section.blocks.length) {
      url.hash = section ? `#sec-${sectionId}` : ''
    }
  } else if (target && url.hash.startsWith('#sec-')) {
    const sectionId = url.hash.slice(5)
    if (!target.sections.some((section) => section.id === sectionId)) url.hash = ''
  }

  return `${url.pathname}${url.search}${url.hash}`
}

function englishReference(reference: Extract<Block, { type: 'xref' }>, lookup: ChapterLookup): CrossReference {
  const href = localizedHref(reference.href, lookup)
  const url = new URL(href, 'https://rop.local')
  const targetKey = targetKeyFromPath(url.pathname)
  const target = targetKey ? lookup(targetKey) : undefined
  const chapterNumber = targetKey?.replace('chapter-', '')
  let label = chapterNumber ? `See the reference in Chapter ${chapterNumber}` : 'See the related reference'
  if (reference.label.includes('zones réflexes') && chapterNumber) label = `See the reflex zones in Chapter ${chapterNumber}`
  if (reference.label.includes('dans ce chapitre')) label = 'See the reference in this chapter'
  if (reference.label.startsWith('Niveau 1') && chapterNumber) label = `Level 1 — See Chapter ${chapterNumber}`
  if (reference.label.startsWith('Niveau 2') && chapterNumber) label = `Level 2 — See Chapter ${chapterNumber}`
  if (url.pathname === '/fondements-neuro-anatomiques') label = 'Read the neuroanatomical foundations'

  return {
    label,
    href,
    ...(reference.text ? { text: TEXT_TRANSLATIONS[reference.text] ?? target?.title ?? reference.text } : target?.title ? { text: target.title } : {}),
  }
}

function explicitTargetCandidates(blocks: Block[], href: string): number[] {
  const targetKey = targetKeyFromPath(new URL(href, 'https://rop.local').pathname)
  const chapterNumber = targetKey?.replace('chapter-', '')
  if (!chapterNumber) return []
  const pattern = new RegExp(`\\bchapter\\s+${chapterNumber}\\b`, 'i')
  return blocks.flatMap((block, index) => pattern.test(blockText(block)) ? [index] : [])
}

function closestIndex(indices: number[], expected: number, length: number): number {
  return indices.reduce((best, index) =>
    Math.abs((index + 1) / length - expected) < Math.abs((best + 1) / length - expected) ? index : best
  )
}

export type CrossReferenceSyncIssue = { chapterKey: string; sectionId: string; label: string; reason: string }

export function synchronizeEnglishCrossReferences(
  chapterKey: string,
  french: Chapter,
  english: Chapter,
  lookup: ChapterLookup,
): CrossReferenceSyncIssue[] {
  const issues: CrossReferenceSyncIssue[] = []

  for (const frenchSection of french.sections) {
    const references = frenchSection.blocks.flatMap((block, index) => block.type === 'xref' ? [{ block, index }] : [])
    if (!references.length) continue
    const englishSectionId = SOURCE_SECTION_ALIASES[chapterKey]?.[frenchSection.id] ?? frenchSection.id
    const englishSection = english.sections.find((section) => section.id === englishSectionId)
    if (!englishSection?.blocks.length) {
      for (const { block } of references) issues.push({ chapterKey, sectionId: frenchSection.id, label: block.label, reason: 'missing English source section' })
      continue
    }

    const frenchContentCount = frenchSection.blocks.filter((block) => block.type !== 'xref').length
    const existingCounts = new Map<string, number>()
    for (const candidate of englishSection.blocks) {
      const present = candidate.type === 'xref'
        ? [{ href: localizedHref(candidate.href, lookup) }]
        : candidate.xrefs ?? []
      for (const reference of present) existingCounts.set(reference.href, (existingCounts.get(reference.href) ?? 0) + 1)
    }
    const frenchCounts = new Map<string, number>()
    for (const { block, index } of references) {
      const translated = englishReference(block, lookup)
      const occurrence = (frenchCounts.get(translated.href) ?? 0) + 1
      frenchCounts.set(translated.href, occurrence)
      if ((existingCounts.get(translated.href) ?? 0) >= occurrence) continue

      const precedingContent = frenchSection.blocks.slice(0, index).filter((candidate) => candidate.type !== 'xref').length
      const expected = frenchContentCount ? precedingContent / frenchContentCount : 1
      const candidates = explicitTargetCandidates(englishSection.blocks, translated.href)
      const fallback = Math.max(0, Math.min(englishSection.blocks.length - 1, Math.round(expected * englishSection.blocks.length) - 1))
      const targetIndex = candidates.length ? closestIndex(candidates, expected, englishSection.blocks.length) : fallback
      const target = englishSection.blocks[targetIndex]
      target.xrefs = [...(target.xrefs ?? []), translated]
    }
  }

  return issues
}
