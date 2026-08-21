"""Convert the authoritative Fondements Neuro-Anatomiques DOCX into site JSON."""

from __future__ import annotations

import json
import re
import sys
import unicodedata
from pathlib import Path

from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph
from docx.oxml.table import CT_Tbl
from docx.oxml.text.paragraph import CT_P

FIGURES = {
    "pont-schema.webp": ["pont-schema.png"],
    "versant-visceral.webp": ["versant-visceral.webp"],
    "pont-1-tibial.webp": ["pont-1-tibial.png"],
    "pont-2-plantaires.webp": ["pont-2-plantaires.png"],
    "pont-3-autres-nerfs.webp": ["pont-3-autres-nerfs.png"],
    "pont-4-lombosacre.webp": ["pont-4-lombosacre.webp", "reseaux-pelviens.webp"],
    "pont-5-schema.webp": ["pont-5-schema.webp", "pont-5-supraspinal.webp"],
    "gradient-deux-axes.webp": ["gradient-deux-axes.webp"],
    "pelvis.webp": ["pelvis.webp", "matrice-gradient.webp"],
}


def slug(text: str) -> str:
    plain = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", plain.lower()).strip("-")


def iter_blocks(doc):
    for child in doc.element.body.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, doc)
        elif isinstance(child, CT_Tbl):
            yield Table(child, doc)


def paragraph_block(text: str):
    if text.startswith("FIGURE"):
        for marker, images in FIGURES.items():
            if marker in text or (marker == "gradient-deux-axes.webp" and "gradient à deux axes" in text):
                caption = (
                    "Pont 3 — Comparaison des portes somatiques surale, fibulaire et saphène, "
                    "avec les données de modulation vésicale propres au nerf saphène."
                    if marker == "pont-3-autres-nerfs.webp"
                    else text.split(". ", 1)[1] if ". " in text else "Illustration neuro-anatomique R.O.P."
                )
                return {"type": "figure", "images": images, "caption": caption}
        return None
    if text.startswith("LIEN →"):
        return None
    if re.match(r"^\d+\.\d+\.\s", text):
        return {"type": "heading", "level": 3, "id": slug(text), "text": text}
    if re.match(r"^\d+\.\s{2,}", text):
        return {"type": "heading", "level": 2, "id": slug(text), "text": text}
    if re.match(r"^Pont \d+", text):
        return {"type": "heading", "level": 3, "id": slug(text), "text": text}
    if text in {"Lecture rapide : les conclusions essentielles", "Terminologie retenue", "Bibliographie"}:
        return {"type": "heading", "level": 2, "id": slug(text), "text": text}
    if re.match(r"^[A-H]\.\s", text):
        return {"type": "heading", "level": 3, "id": slug(text), "text": text}
    return {"type": "paragraph", "text": text}


def main(source: Path, destination: Path):
    doc = Document(source)
    blocks = []
    list_items = []

    def flush_list():
        nonlocal list_items
        if list_items:
            blocks.append({"type": "list", "items": list_items})
            list_items = []

    for item in iter_blocks(doc):
        if isinstance(item, Paragraph):
            text = item.text.strip()
            if not text or text in {
                "Fondements neuro-anatomiques de la R.O.P.",
                "Du point réflexe à la porte d'entrée somatique : quatre portes, six ponts et un gradient de ciblage à deux axes.",
            } or text.startswith("Texte du hub v3 —"):
                continue
            if item.style.name.startswith("List"):
                list_items.append(text)
                continue
            flush_list()
            block = paragraph_block(text)
            if block:
                blocks.append(block)
        else:
            flush_list()
            rows = [["\n".join(p.text.strip() for p in cell.paragraphs if p.text.strip()) for cell in row.cells] for row in item.rows]
            if not rows or rows[0][0].startswith("NOTE D'INTÉGRATION"):
                continue
            if len(rows) == 1 and len(rows[0]) == 1:
                parts = rows[0][0].split("\n", 1)
                blocks.append({"type": "callout", "title": parts[0], "text": parts[1] if len(parts) > 1 else ""})
            else:
                blocks.append({"type": "table", "headers": rows[0], "rows": rows[1:]})
    flush_list()

    payload = {
        "title": "Fondements neuro-anatomiques de la R.O.P.",
        "subtitle": "Du point réflexe à la porte d'entrée somatique : quatre portes, six ponts et un gradient de ciblage à deux axes.",
        "source": source.name,
        "blocks": blocks,
    }
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: import-fondements-docx.py SOURCE.docx DESTINATION.json")
    main(Path(sys.argv[1]), Path(sys.argv[2]))
