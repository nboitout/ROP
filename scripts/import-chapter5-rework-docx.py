"""Convert the authoritative French Chapter 5 rework DOCX into site content."""

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


def slug(text: str) -> str:
    plain = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", plain.lower()).strip("-")


def section_slug(text: str) -> str:
    """Keep anchors independent from the numeric prefixes used in Word."""
    return slug(re.sub(r"^\d+\.\s*", "", text))


def iter_blocks(doc):
    for child in doc.element.body.iterchildren():
        if isinstance(child, CT_P):
            yield Paragraph(child, doc)
        elif isinstance(child, CT_Tbl):
            yield Table(child, doc)


def is_label(text: str) -> bool:
    letters = "".join(char for char in text if char.isalpha())
    return bool(letters) and letters == letters.upper() and len(text) <= 90


def main(source: Path, destination: Path):
    doc = Document(source)
    sections = []
    current = None
    prelude = []
    list_items = []
    pending_label = None

    def target_blocks():
        return current["blocks"] if current is not None else prelude

    def flush_list():
        nonlocal list_items
        if list_items:
            target_blocks().append({"type": "bullets", "items": list_items})
            list_items = []

    def flush_label():
        nonlocal pending_label
        if pending_label:
            target_blocks().append({"type": "para", "text": pending_label})
            pending_label = None

    for item in iter_blocks(doc):
        if isinstance(item, Paragraph):
            text = item.text.strip()
            if not text or text == "Chapitre 5 — Mécanisme de stress" or text.startswith("Chapitre 5 — Mécanisme de stress |"):
                continue
            style = item.style.name if item.style else ""
            if text == "Physiologie de l'adaptation, coût allostatique et approche ROP":
                continue
            if style == "Heading 1":
                flush_list()
                flush_label()
                current = {"id": section_slug(text), "title": text, "blocks": prelude if not sections else []}
                sections.append(current)
                prelude = []
                continue
            if style == "Heading 2":
                flush_list()
                flush_label()
                target_blocks().append({"type": "sub", "text": text})
                continue
            if style.startswith("List"):
                flush_label()
                list_items.append(text)
                continue
            flush_list()
            if pending_label:
                target_blocks().append({"type": "note", "label": pending_label, "body": [text]})
                pending_label = None
                continue
            if " — " in text and is_label(text.split(" — ", 1)[0]):
                label, body = text.split(" — ", 1)
                target_blocks().append({"type": "note", "label": label, "body": [body]})
            elif is_label(text):
                pending_label = text
            elif not sections and len(prelude) == 0:
                prelude.append({"type": "quote", "text": text})
            else:
                target_blocks().append({"type": "para", "text": text})
        else:
            flush_list()
            flush_label()
            rows = [["\n".join(p.text.strip() for p in cell.paragraphs if p.text.strip()) for cell in row.cells] for row in item.rows]
            if rows:
                target_blocks().append({"type": "table", "headers": rows[0], "rows": rows[1:]})
    flush_list()
    flush_label()

    payload = {
        "slug": "chapter-5-rework",
        "number": "5",
        "title": "Mécanisme de stress — Physiologie de l’adaptation, coût allostatique et approche ROP",
        "sections": sections,
    }
    serialized = json.dumps(payload, ensure_ascii=False, indent=2)
    output = (
        f"// Source: public/Chapter-5 Rework/{source.name}\n"
        "import type { Chapter } from './types'\n\n"
        f"export const chapter5ReworkFr: Chapter = {serialized}\n"
    )
    destination.write_text(output, encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: import-chapter5-rework-docx.py SOURCE.docx DESTINATION.ts")
    main(Path(sys.argv[1]), Path(sys.argv[2]))
