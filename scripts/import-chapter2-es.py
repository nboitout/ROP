"""Publish the cleaned Spanish text without changing the manuscript."""
from pathlib import Path
import json, zipfile, xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'public/chapter-2/ES/Capitulo_2_Tratamiento_ROP_Espanol_Medico_Revisado(1).docx'
W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
ids = ['presentation', 'fondements-modele-clinique', 'technique', 'modalites', 'hierarchisation', 'zones-reflexes', 'exemple-clinique', 'contre-indications', 'indications', 'actions', 'reactions', 'conseils', 'references-bibliographiques']
def text(node):
    return ''.join((n.text or '') if n.tag == W+'t' else '\n' if n.tag == W+'br' else '\t' if n.tag == W+'tab' else '' for n in node.iter()).strip()

sections = [{'id': ids[0], 'title': 'Presentación', 'blocks': []}]
with zipfile.ZipFile(SOURCE) as archive:
    assert not any(n.startswith('word/media/') for n in archive.namelist()), 'Manuscript must be text-only'
    body = ET.fromstring(archive.read('word/document.xml')).find(W+'body')
    skipped = 0
    for node in body:
        if node.tag == W+'tbl':
            cells = node.findall('.//'+W+'tc')
            assert len(cells) == 1, 'Review any new multi-column table explicitly'
            lines = [line.strip() for p in cells[0].findall(W+'p') for line in text(p).splitlines() if line.strip()]
            sections[-1]['blocks'].append({'type': 'note', 'label': lines[0], 'body': lines[1:]})
            continue
        if node.tag != W+'p' or not text(node):
            continue
        value = text(node)
        if skipped < 2:
            skipped += 1
            continue
        style = node.find(W+'pPr/'+W+'pStyle')
        style = style.get(W+'val','') if style is not None else ''
        if style == 'Heading1':
            sections.append({'id': ids[len(sections)], 'title': value, 'blocks': []})
            continue
        blocks = sections[-1]['blocks']
        if style == 'ListBullet':
            if not blocks or blocks[-1]['type'] != 'bullets':
                blocks.append({'type': 'bullets', 'items': []})
            blocks[-1]['items'].append(value)
        else:
            blocks.append({'type': 'sub' if style.startswith('Heading') else 'para', 'text': value})

assert len(sections) == 13
chapter = {'slug': 'chapter-2', 'number': '2', 'title': 'Tratamiento mediante reflexoterapia occipitopodal (ROP)', 'sections': sections}
(ROOT/'content/chapter2.es.ts').write_text("// Source: public/chapter-2/ES/Capitulo_2_Tratamiento_ROP_Espanol_Medico_Revisado(1).docx\n// Cross-chapter references remain plain text during the ES rollout.\nimport type { Chapter } from './types'\n\nexport const chapter2Es: Chapter = " + json.dumps(chapter,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')

topics = ['01','02','03','04','05','06','07','08','09','09b','10','11','12','14','13']
titles = ['Tratamiento mediante ROP', 'La precisión del gesto terapéutico', 'Mecanorreceptores superficiales', 'La presión en ROP: una acción superficial', 'Sistema lemniscal y control del dolor', 'Las tres fases del masaje', 'Ventana de adaptación tras la sesión', 'Priorización del tratamiento', 'Nivel 1: regulación de los centros superiores', 'Nivel 2: regulación autonómica y adaptación', 'Nivel 3: regulación visceral local y regional', 'Nivel 4: integración viscerosomática y visceroemocional', 'Caso clínico: lumbociática izquierda después del parto', 'Contraindicaciones y signos de alarma', 'Indicaciones de la ROP']
slides = [{'src': f'/chapter-2/ES/Images/C2-S{topic}_ES.png','title':title} for topic,title in zip(topics,titles)]
def at(section, prefix):
    return next(i for i,b in enumerate(next(s for s in sections if s['id']==section)['blocks']) if b.get('text','').startswith(prefix))
anchors = []
def add(section, index, slide, end_section, end_index):
    anchors.append({'sectionId':section,'blockIndex':index,'slide':slide,'end':{'sectionId':end_section,'blockIndex':end_index}})
mechanics = at('technique','1.2.')
pressure = at('technique','Cuando la capa')
phases = at('technique','1.3.')
add('presentation',-1,1,'fondements-modele-clinique',-1)
add('technique',-1,2,'technique',mechanics)
add('technique',mechanics,3,'technique',pressure)
add('technique',pressure,4,'technique',pressure+1)
add('technique',pressure+1,5,'technique',phases)
add('technique',phases,6,'modalites',-1)
add('modalites',-1,7,'hierarchisation',-1)
add('hierarchisation',-1,8,'zones-reflexes',-1)
levels = [at('zones-reflexes',f'4.{i}.') for i in range(1,5)]
for i in range(4):
    add('zones-reflexes',-1 if i==0 else levels[i],9+i,'zones-reflexes' if i<3 else 'exemple-clinique',levels[i+1] if i<3 else -1)
add('exemple-clinique',-1,13,'contre-indications',-1)
add('contre-indications',-1,14,'indications',-1)
add('indications',-1,15,'actions',-1)
add('reactions',-1,7,'conseils',-1)
(ROOT/'content/chapter2.es.slidesync.ts').write_text("import type { SyncSlide, SyncAnchor } from './chapter2.slidesync'\n\nexport const chapter2SlidesEs: SyncSlide[] = "+json.dumps(slides,ensure_ascii=False,indent=2)+'\n\nexport const chapter2SlideAnchorsEs: SyncAnchor[] = '+json.dumps(anchors,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Imported 13 sections, five callouts, seven bibliography entries and 15 slide mappings.')
for s in sections:
    print(s['id'],len(s['blocks']))
