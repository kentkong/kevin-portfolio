#!/usr/bin/env python3
"""Generate LinkedIn / Open Graph preview image for the portfolio."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og-linkedin.png"

WIDTH = 1200
HEIGHT = 627

PAPER = (249, 249, 247)
INK = (22, 24, 20)
MUTED = (111, 103, 93)
LINE = (72, 70, 66, 40)


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def draw_paper_grid(draw: ImageDraw.ImageDraw) -> None:
    step = 88
    grid_color = (72, 70, 66, 18)
    for x in range(0, WIDTH, step):
        draw.line([(x, 0), (x, HEIGHT)], fill=grid_color, width=1)
    for y in range(0, HEIGHT, step):
        draw.line([(0, y), (WIDTH, y)], fill=grid_color, width=1)
    draw.line([(0, 72), (WIDTH, 72)], fill=(14, 14, 12, 90), width=2)


def main() -> None:
    image = Image.new("RGBA", (WIDTH, HEIGHT), (*PAPER, 255))
    draw = ImageDraw.Draw(image)
    draw_paper_grid(draw)

    left = 72
    name_font = load_font(20, bold=True)
    draw.text((left, 48), "KEVIN ALAN MOLD", fill=MUTED, font=name_font)

    label_font = load_font(16, bold=True)
    draw.text((left, 118), "DESIGN · MARKETING · TECHNOLOGY", fill=MUTED, font=label_font)

    line_font = load_font(46, bold=True)
    lines = [
        "CRM MARKETING",
        "UX / UI VISUAL PRODUCT DESIGN",
        "ENTERPRISE APP SOLUTIONS",
    ]
    y = 168
    for line in lines:
        draw.text((left, y), line, fill=INK, font=line_font)
        y += 58

    sub_font = load_font(19)
    draw.text(
        (left, HEIGHT - 96),
        "Applications, case studies, and interactive demos — Gen Pulse · Pulse-Ops · SprintIQ · Revival",
        fill=MUTED,
        font=sub_font,
    )

    url_font = load_font(17, bold=True)
    draw.text((left, HEIGHT - 58), "kentkong.github.io/kevin-portfolio", fill=INK, font=url_font)

    # Discipline column hint (matches home hero grid)
    col_x = WIDTH - 320
    draw.line([(col_x, 168), (col_x, HEIGHT - 120)], fill=(14, 14, 12, 35), width=1)
    small = load_font(14, bold=True)
    for index, (num, title) in enumerate(
        [("01", "CUSTOMER EXPERIENCE"), ("02", "PRODUCT EXPERIENCE"), ("03", "APPLICATION INTELLIGENCE")],
        start=0,
    ):
        yy = 190 + index * 92
        draw.text((col_x + 24, yy), num, fill=MUTED, font=small)
        draw.text((col_x + 24, yy + 22), title, fill=INK, font=small)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    image.convert("RGB").save(OUTPUT, format="PNG", optimize=True)
    print(f"Wrote {OUTPUT} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
