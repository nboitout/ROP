"""Convert the authoritative French Chapter 0 DOCX into website content."""

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
    "2. La séquence clinique ROP : quatre niveaux complémentaires": [
        (1, "figure-0-1.png", "La séquence clinique ROP : une progression en quatre niveaux", "Schéma de la progression clinique ROP en quatre niveaux."),
        (-1, "figure-0-2.png", "Séquence clinique ROP — quatre niveaux complémentaires", "Schéma des quatre niveaux complémentaires servant à hiérarchiser le traitement ROP."),
    ],
    "6. Les fondements neuro-anatomiques, en quelques lignes": [
        (-1, "figure-0-4.png", "Les fondements neuro-anatomiques, en quelques lignes", "Schéma des portes somatiques du pied et des convergences périphériques, spinales et supraspinales."),
    ],
    "7. Le pelvis : un territoire particulièrement intéressant": [
        (-1, "figure-0-5.png", "Le pelvis : un territoire particulièrement intéressant", "Schéma de l’entrée somatique plantaire et de la convergence vers les réseaux pelviens."),
    ],
    "8. Au-delà du pelvis : modulation à distance et geste manuel": [
        (-1, "figure-0-6.png", "Au-delà du pelvis : modulation à distance et geste manuel", "Schéma des voies supraspinales et de la modulation somato-autonome possible à distance."),
    ],
    "13. Terminologie": [
        (-1, "figure-0-3.png", "Terminologie spatiale de l’Atlas", "Schéma des orientations anatomiques appliquées au pied."),
    ],
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


def figure_block(filename: str, caption: str, alt: str):
    return {
        "type": "figure",
        "src": f"/chapter-0/FR/{filename}",
        "caption": caption,
        "alt": alt,
        "orientation": "landscape",
    }


def main(source: Path, destination: Path):
    doc = Document(source)
    sections = []
    current = None
    list_items = []

    def flush_list():
        nonlocal list_items
        if current is not None and list_items:
            current["blocks"].append({"type": "bullets", "items": list_items})
            list_items = []

    def close_section():
        if current is None:
            return
        flush_list()
        for position, filename, caption, alt in FIGURES.get(current["title"], []):
            if position == -1:
                current["blocks"].append(figure_block(filename, caption, alt))

    for item in iter_blocks(doc):
        if isinstance(item, Paragraph):
            text = item.text.strip()
            if not text or text == "Chapitre 0 — Introduction" or text.startswith("Chapitre 0 — Introduction |"):
                continue
            style = item.style.name
            if style == "Heading 1":
                close_section()
                current = {"id": slug(text), "title": text, "blocks": []}
                sections.append(current)
                continue
            if current is None:
                current = {"id": slug(text), "title": text, "blocks": []}
                sections.append(current)
                continue
            if style == "Heading 2":
                flush_list()
                current["blocks"].append({"type": "sub", "text": text})
                continue
            if style.startswith("List"):
                list_items.append(text)
                continue
            flush_list()
            if text == "www.guy-boitout.com/fondements-neuro-anatomiques":
                current["blocks"].append({
                    "type": "xref",
                    "label": "Lire les fondements neuro-anatomiques",
                    "href": "/fondements-neuro-anatomiques",
                    "text": text,
                })
            else:
                current["blocks"].append({"type": "para", "text": text})
            for position, filename, caption, alt in FIGURES.get(current["title"], []):
                if position == len(current["blocks"]):
                    current["blocks"].append(figure_block(filename, caption, alt))
        else:
            flush_list()
            if current is None:
                continue
            rows = [["\n".join(p.text.strip() for p in cell.paragraphs if p.text.strip()) for cell in row.cells] for row in item.rows]
            if rows:
                current["blocks"].append({"type": "table", "headers": rows[0], "rows": rows[1:]})
    close_section()

    payload = {
        "slug": "introduction",
        "title": "Introduction",
        "sections": sections,
    }
    serialized = json.dumps(payload, ensure_ascii=False, indent=2)
    output = (
        "// Introduction — French synchronized reading stream\n"
        f"// Source: public/chapter-0/FR/{source.name}\n\n"
        "import type { Chapter } from './types'\n\n"
        f"export const introductionFr: Chapter = {serialized}\n"
    )
    destination.write_text(output, encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: import-introduction-docx.py SOURCE.docx DESTINATION.ts")
    main(Path(sys.argv[1]), Path(sys.argv[2]))
