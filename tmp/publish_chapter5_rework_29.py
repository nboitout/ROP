from pathlib import Path

from PIL import Image, JpegImagePlugin  # noqa: F401


root = Path(r"C:\dev\ROP")
source = root / "public/Chapter-5 Rework/Chapter5 Slides FR -- rework 2"
published = root / "public/chapter-5-rework/slides"
for index in range(1, 30):
    (published / f"slide-{index:02}.png").write_bytes((source / f"Slide{index}.PNG").read_bytes())

images = [Image.open(source / f"Slide{index}.PNG").convert("RGB") for index in range(1, 30)]
pdf = root / "public/Chapter-5 Rework/Mecanime de Stress -  ROP et physiologie de l'Allostasie.pdf"
images[0].save(pdf, save_all=True, append_images=images[1:], resolution=150.0)
