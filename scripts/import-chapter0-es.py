"""Import the verified Spanish manuscript without rewriting prose or references."""
from pathlib import Path
import json, re, zipfile, xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'public/chapter-0/ES/Chapter_0_ES_Verified_Manuscript.docx'
NS = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
W = '{' + NS['w'] + '}'
ids = re.findall(r'"id": "([^"]+)"', (ROOT / 'content/introduction.fr.ts').read_text(encoding='utf-8'))
titles = ['La secuencia clínica de la ROP', 'Los cuatro niveles complementarios', 'Terminología clínica de la ROP', 'Fundamentos neuroanatómicos', 'La pelvis: una región especialmente informativa', 'Modulación a distancia y técnica manual']
def text(node):
    return ''.join(n.text or '' for n in node.iter(W + 't')).strip()

with zipfile.ZipFile(SOURCE) as archive:
    body = ET.fromstring(archive.read('word/document.xml')).find('w:body', NS)
    sections = []
    for node in body:
        if node.tag == W + 'tbl':
            rows = [['\n'.join(text(p) for p in cell.findall('w:p', NS)) for cell in row.findall('w:tc', NS)] for row in node.findall('w:tr', NS)]
            sections[-1]['blocks'].append({'type': 'table', 'headers': rows[0], 'rows': rows[1:]})
            continue
        if node.tag != W + 'p' or not text(node):
            continue
        value = text(node)
        style = node.find('w:pPr/w:pStyle', NS)
        style = style.get(W + 'val', '') if style is not None else ''
        if style == 'Heading1':
            continue  # Chapter title is rendered by the reader hero.
        if style == 'Heading2':
            sections.append({'id': ids[len(sections)], 'title': value, 'blocks': []})
            continue
        blocks = sections[-1]['blocks']
        is_list = node.find('w:pPr/w:numPr', NS) is not None or style == 'ListBullet'
        if is_list:
            if not blocks or blocks[-1]['type'] != 'bullets':
                blocks.append({'type': 'bullets', 'items': []})
            blocks[-1]['items'].append(value)
        else:
            blocks.append({'type': 'sub' if style == 'Heading3' else 'para', 'text': value})

assert len(sections) == len(ids) == 17
# Plain-text cross-chapter references are intentionally preserved without links.
placements = {2: [(1, 1), (3, 2)], 6: [(1, 4)], 7: [(1, 5)], 8: [(1, 6)], 13: [(1, 3)]}
anchors = []
for section_index, insertions in placements.items():
    section = sections[section_index]
    for index, slide in insertions:
        section['blocks'].insert(index, {'type': 'figure', 'src': f'/chapter-0/ES/Images/C0-S{slide:02d}_ES.png', 'caption': titles[slide-1], 'alt': titles[slide-1], 'orientation': 'landscape'})
        anchors.append({'sectionId': section['id'], 'blockIndex': index, 'slide': slide})
chapter = {'slug': 'introduction', 'title': 'Introducción', 'sections': sections}
output = "// Source: public/chapter-0/ES/Chapter_0_ES_Verified_Manuscript.docx\n// Cross-chapter references intentionally remain plain text during the ES rollout.\nimport type { Chapter } from './types'\n\nexport const introductionEs: Chapter = " + json.dumps(chapter, ensure_ascii=False, indent=2) + '\n'
(ROOT / 'content/introduction.es.ts').write_text(output, encoding='utf-8')
slides = [{'src': f'/chapter-0/ES/Images/C0-S{i+1:02d}_ES.png', 'title': t} for i,t in enumerate(titles)]
(ROOT / 'content/chapter0.es.slidesync.ts').write_text("import type { SyncSlide, SyncAnchor } from './chapter0.slidesync'\n\nexport const chapter0SlidesEs: SyncSlide[] = " + json.dumps(slides, ensure_ascii=False, indent=2) + '\n\nexport const chapter0SlideAnchorsEs: SyncAnchor[] = ' + json.dumps(anchors, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
print('Imported 17 sections, one table and all manuscript text; attached six verified ES images.')
