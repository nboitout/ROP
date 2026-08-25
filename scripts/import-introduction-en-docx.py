"""Convert the authoritative English Chapter 0 DOCX into website content."""

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
    "2. The ROP clinical sequence: four complementary levels": [
        (1, "NCH 0 EN IMG 1.png", "The ROP clinical sequence: a progression through four levels", "Diagram of the ROP clinical progression through four complementary levels."),
        (-1, "NCH 0 EN IMG 2.png", "ROP clinical sequence — four complementary levels", "Overview of the four complementary levels used to organise and prioritise an ROP session."),
    ],
    "6. Neuroanatomical foundations, in brief": [
        (-1, "NCH 0 EN IMG 4.png", "Neuroanatomical foundations, in brief", "Diagram of the four somatic gateways of the foot and their peripheral, spinal, and supraspinal convergence bridges."),
    ],
    "7. The pelvis: a particularly informative region": [
        (-1, "NCH 0 EN IMG 5.png", "The pelvis: a particularly relevant region", "Diagram of plantar somatic input and convergence towards lumbosacral and pelvic networks."),
    ],
    "8. Beyond the pelvis: distant modulation and manual technique": [
        (-1, "NCH 0 EN IMG 6.png", "Beyond the pelvis: remote modulation remains possible", "Diagram of supraspinal pathways and possible distant somato-autonomic modulation."),
    ],
    "13. Terminology": [
        (-1, "NCH 0 EN IMG 3.png", "Spatial terminology of the Atlas", "Diagram of the anatomical directions used throughout the Atlas."),
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
        "src": f"/chapter-0/EN/Images/{filename}",
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
            if not text or item.style.name == "Title":
                continue
            style = item.style.name
            if style in {"Chapter Subtitle", "Heading 1"}:
                close_section()
                current = {"id": slug(text), "title": text, "blocks": []}
                sections.append(current)
                continue
            if current is None:
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
                    "label": "Read the neuroanatomical foundations",
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

    payload = {"slug": "introduction", "title": "Introduction", "sections": sections}
    serialized = json.dumps(payload, ensure_ascii=False, indent=2)
    output = (
        "// Introduction — English synchronized reading stream\n"
        f"// Source: public/chapter-0/EN/{source.name}\n\n"
        "import type { Chapter } from './types'\n\n"
        f"export const introductionEn: Chapter = {serialized}\n"
    )
    destination.write_text(output, encoding="utf-8")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("usage: import-introduction-en-docx.py SOURCE.docx DESTINATION.ts")
    main(Path(sys.argv[1]), Path(sys.argv[2]))
