"""Import the reviewed text-only Chapter 14 Word and its Spanish visual inventory."""
from pathlib import Path
from docx import Document
import json
ROOT=Path(__file__).resolve().parents[1]
source=ROOT/'public/chapter-14/ES/Capitulo_14_Intestino_Delgado_ROP_ES.docx'
d=Document(source)
ids=['presentation','situation','anatomie','rapports','vascularisation','innervation','physiologie','pathologies','relations','rop','caso-clinico']
sections=[]
captions=iter([5,7,9,10,11])
for p in d.paragraphs[2:]:
    value=p.text.strip()
    if not value: continue
    style=p.style.name
    if style=='Heading 1':
        sections.append({'id':ids[len(sections)],'title':value,'blocks':[]}); continue
    blocks=sections[-1]['blocks']
    if value.startswith('Foto:'):
        n=next(captions)
        blocks.append({'type':'figure','src':f'/chapter-14/ES/Cartographies/Slide{n}.PNG','caption':value,'alt':value,'orientation':'portrait'})
    elif style.startswith('Heading'):
        blocks.append({'type':'sub','text':value})
    elif style=='ROP ES':
        blocks.append({'type':'rop','body':[value.removeprefix('Interés en ROP: ')]})
    elif style=='List Bullet':
        if not blocks or blocks[-1]['type']!='bullets': blocks.append({'type':'bullets','items':[]})
        blocks[-1]['items'].append(value)
    elif style=='Lead ES' and ': ' in value:
        label,text=value.split(': ',1); blocks.append({'type':'lead','label':label,'text':text})
    else: blocks.append({'type':'para','text':value})
assert len(sections)==11
chapter={'slug':'chapter-14','number':'14','title':'Intestino delgado','sections':sections,'clinicalCase':{'src':'/chapter-14/ES/Chapter14 Cas Clinique ES.png','caption':'Caso clínico — Enfermedad de Crohn y espondiloartritis','alt':'Caso clínico de acompañamiento ROP, sujeto a evaluación individual y seguimiento médico'}}
def write(name,export,data,typ):
    (ROOT/'content'/name).write_text("// Imported from the reviewed Chapter 14 ES manuscript. Cross-chapter references are plain text.\nimport type { "+typ+" } from './types'\nexport const "+export+': '+typ+' = '+json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
write('chapter14.es.ts','chapter14Es',chapter,'Chapter')
titles=['El intestino delgado','El yeyuno y el íleon en el marco cólico','El mesenterio: raíz y suspensión','Vascularización del intestino delgado','Nervio vago y sistema simpático','La doble inervación del peritoneo','La red linfática del intestino delgado','Sistema nervioso entérico','Motilidad del intestino delgado','El ecosistema intestinal','La doble vía de absorción de micronutrientes','Microanatomía: la barrera intestinal','Hiperpermeabilidad y disbiosis','Hiperpermeabilidad intestinal','La disbiosis y el eje intestino-cerebro','Indicaciones y criterios de derivación médica','Enfermedad de Crohn','Relaciones viscerosomáticas','Relaciones visceroemocionales','Protocolo clínico ROP']
cartos=['Referencias vertebrales y autónomas','Cadena plexual prevertebral','Cadena plexual prevertebral: técnica','Raíz del mesenterio: cartografía izquierda','Raíz del mesenterio: unión duodenoyeyunal al ombligo','Raíz del mesenterio: cartografía derecha','Raíz del mesenterio: válvula ileocecal al ombligo','Yeyuno: cartografía','Yeyuno: límites','Íleon: límites','Equilibrio visceroemocional — intestino delgado']
slides=[{'src':f'/chapter-14/ES/Images/Slide{i+1}.PNG','title':t} for i,t in enumerate(titles)]+[{'src':f'/chapter-14/ES/Cartographies/Slide{i+1}.PNG','title':t} for i,t in enumerate(cartos)]
def at(s,prefix):
    return next(i for i,b in enumerate(next(sx for sx in sections if sx['id']==s)['blocks']) if (b.get('label') or b.get('text') or b.get('caption') or '').startswith(prefix))
anchors=[]
def add(s,i,n): anchors.append({'sectionId':s,'blockIndex':i,'slide':n})
for s,i,n in [('presentation',-1,1),('situation',-1,2),('anatomie',-1,3),('vascularisation',-1,4),('innervation',at('innervation','Nervio vago y'),5),('innervation',-1,6),('vascularisation',at('vascularisation','5.3.'),7),('innervation',at('innervation','6.2.'),8),('physiologie',-1,9),('physiologie',at('physiologie','7.2.'),10),('physiologie',at('physiologie','Absorción'),11),('physiologie',at('physiologie','7.2.1.'),12),('pathologies',-1,13),('pathologies',at('pathologies','8.1.'),14),('pathologies',at('pathologies','8.2.'),15),('pathologies',at('pathologies','8.3.'),16),('pathologies',at('pathologies','8.5.'),17),('relations',-1,18),('relations',at('relations','10.'),19),('rop',-1,20)]: add(s,i,n)
# Cartography deck entries are attached to their actual corresponding passages.
for n,prefix in [(21,'12.2.'),(22,'12.3.'),(23,'Según las pruebas'),(24,'12.4.'),(25,'Foto: raíz del mesenterio — desde la unión'),(26,'El Nivel 3 constituye'),(27,'Foto: raíz del mesenterio — desde la válvula'),(28,'Foto: yeyuno'),(29,'Foto: yeyuno'),(30,'Foto: íleon'),(31,'Foto: equilibrio')]: add('rop',at('rop',prefix),n)
order={s['id']:i for i,s in enumerate(sections)}
anchors.sort(key=lambda a:(order[a['sectionId']],a['blockIndex']))
# A shared photo/cartography topic uses one visible anchor; both assets remain in the gallery.
anchors=[a for a in anchors if a['slide']!=28]
(ROOT/'content/chapter14.es.slidesync.ts').write_text("import type { SyncSlide, SyncAnchor } from './chapter14.slidesync'\nexport const chapter14SlidesEs: SyncSlide[] = "+json.dumps(slides,ensure_ascii=False,indent=2)+'\nexport const chapter14SlideAnchorsEs: SyncAnchor[] = '+json.dumps(anchors,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Imported',len(sections),'sections;',len(slides),'visuals;',len(anchors),'anchors')

