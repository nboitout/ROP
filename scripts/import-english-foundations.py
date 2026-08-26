import json
import re
import unicodedata
from pathlib import Path

from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/assets/Fondements Neuro-Anatomiques/EN/ROP_Neuroanatomical_Foundations_EN_Revised.docx"
OUTPUT = ROOT / "content/fondements-neuro-anatomiques.en.json"

FIGURES_AFTER = {
    "The consistency of the S3 contribution": {
        "images": ["bridge-1-tibial-lumbosacral.png"],
        "caption": "Bridge 1 — The tibial nerve as a lumbosacral gateway, with possible S2–S3 segmental overlap.",
    },
    "The heel may preferentially recruit": {
        "images": ["bridge-2-plantar-afferents.png"],
        "caption": "Bridge 2 — Plantar and calcaneal territories may recruit different sensory afferent populations.",
    },
    "The pelvis is an integrated network": {
        "images": ["bridge-4-lumbosacral-networks.png", "integrated-pelvic-networks.png"],
        "caption": "Bridge 4 — Lumbosacral convergence and integrated pelvic networks.",
    },
    "Somatic input from the foot can ascend": {
        "images": ["bridge-5-supraspinal-pathways.png"],
        "caption": "Bridge 5 — Supraspinal integration and descending modulation.",
    },
    "For the pharynx and larynx": {
        "images": ["bridge-6-cranial-outflow.png"],
        "caption": "Bridge 6 — Cranial parasympathetic outflow pathways and their differing levels of evidence.",
    },
    "Quadrant 3 breaks the correlation": {
        "images": ["four-quadrants.png"],
        "caption": "The four quadrants of the neuroanatomical gradient: segmental proximity and evidence for somatovisceral modulation are assessed independently.",
    },
}


def iter_blocks(document):
    for child in document.element.body.iterchildren():
        if child.tag.endswith("}p"):
            yield Paragraph(child, document)
        elif child.tag.endswith("}tbl"):
            yield Table(child, document)


def slugify(value: str) -> str:
    value = unicodedata.normalize("NFKD", value).encode("ascii", "ignore").decode()
    return re.sub(r"(^-|-$)", "", re.sub(r"[^a-z0-9]+", "-", value.lower()))


document = Document(SOURCE)
paragraphs = [p.text.strip() for p in document.paragraphs if p.text.strip()]
title, authors, subtitle = paragraphs[:3]
blocks = []
pending_list = []
skipped_opening = 0


def flush_list():
    if pending_list:
        blocks.append({"type": "list", "items": pending_list.copy()})
        pending_list.clear()


for item in iter_blocks(document):
    if isinstance(item, Paragraph):
        text = item.text.strip()
        if not text:
            continue
        if skipped_opening < 3 and text == (title, authors, subtitle)[skipped_opening]:
            skipped_opening += 1
            continue
        if text.startswith("FIGURE — existing: pont-schema"):
            flush_list()
            blocks.append({
                "type": "figure",
                "images": ["neuroanatomical-bridge.png"],
                "caption": "From plantar stimulation to network modulation: the four stages of a neuroanatomical bridge.",
            })
            continue
        if text.startswith("FIGURE —"):
            flush_list()
            continue
        style = item.style.name
        if style.startswith("List"):
            pending_list.append(text)
            continue
        flush_list()
        if style == "Heading 1":
            blocks.append({"type": "heading", "level": 2, "id": slugify(text), "text": text})
        elif style == "Heading 2":
            blocks.append({"type": "heading", "level": 3, "id": slugify(text), "text": text})
        else:
            blocks.append({"type": "paragraph", "text": text})
            for prefix, figure in FIGURES_AFTER.items():
                if text.startswith(prefix):
                    blocks.append({"type": "figure", **figure})
                    break
    else:
        flush_list()
        rows = [[cell.text.strip() for cell in row.cells] for row in item.rows]
        if not rows:
            continue
        if rows[0][0].startswith("INTEGRATION NOTE"):
            continue
        blocks.append({"type": "table", "headers": rows[0], "rows": rows[1:]})

flush_list()
payload = {
    "title": title,
    "subtitle": subtitle,
    "source": SOURCE.name,
    "blocks": [{"type": "paragraph", "text": authors}, *blocks],
}
OUTPUT.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(f"Wrote {OUTPUT} with {len(payload['blocks'])} blocks")
