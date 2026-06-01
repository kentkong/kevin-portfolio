#!/usr/bin/env python3
"""Generate LinkedIn / Open Graph preview image for the portfolio."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "og-linkedin.png"

WIDTH = 1200
HEIGHT = 627

BG = (14, 17, 20)
TEAL = (184, 236, 236)
TEAL_SOFT = (142, 217, 217)
PURPLE = (196, 181, 253)
WHITE = (244, 246, 248)
MUTED = (176, 186, 196)


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf" if bold else "/Library/Fonts/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def draw_background(draw: ImageDraw.ImageDraw, image: Image.Image) -> None:
    for y in range(HEIGHT):
        ratio = y / HEIGHT
        r = int(BG[0] + (18 - BG[0]) * ratio * 0.35)
        g = int(BG[1] + (22 - BG[1]) * ratio * 0.35)
        b = int(BG[2] + (26 - BG[2]) * ratio * 0.35)
        draw.line([(0, y), (WIDTH, y)], fill=(r, g, b))

    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.ellipse(
        (720, -120, 1280, 420),
        fill=(94, 196, 196, 28),
    )
    overlay_draw.ellipse(
        (860, 180, 1240, 620),
        fill=(167, 139, 250, 18),
    )
    image.alpha_composite(overlay)


def draw_accent_line(draw: ImageDraw.ImageDraw) -> None:
    top = int(HEIGHT * 0.12)
    bottom = int(HEIGHT * 0.88)
    draw.line([(56, top), (56, bottom)], fill=(*TEAL_SOFT, 120), width=2)


def draw_k_badge(draw: ImageDraw.ImageDraw) -> None:
    size = 72
    x, y = WIDTH - 56 - size, 56
    radius = 16
    draw.rounded_rectangle((x, y, x + size, y + size), radius=radius, fill=BG, outline=TEAL, width=2)
    font = load_font(38, bold=True)
    bbox = draw.textbbox((0, 0), "K", font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    draw.text(
        (x + (size - text_w) / 2 - bbox[0], y + (size - text_h) / 2 - bbox[1]),
        "K",
        fill=TEAL,
        font=font,
    )


def wrap_text(text: str, font: ImageFont.ImageFont, max_width: int, draw: ImageDraw.ImageDraw) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = words[0]
    for word in words[1:]:
        candidate = f"{current} {word}"
        if draw.textlength(candidate, font=font) <= max_width:
            current = candidate
        else:
            lines.append(current)
            current = word
    lines.append(current)
    return lines


def main() -> None:
    image = Image.new("RGBA", (WIDTH, HEIGHT), (*BG, 255))
    draw = ImageDraw.Draw(image)

    draw_background(draw, image)
    draw_accent_line(draw)
    draw_k_badge(draw)

    left = 88
    max_text = WIDTH - left - 120

    name_font = load_font(22, bold=True)
    draw.text((left, 72), "KEVIN ALAN MOLD", fill=TEAL, font=name_font)

    tagline_font = load_font(17, bold=True)
    tagline = "MARKETING & LIFECYCLE OPERATIONS / AI PRODUCT BUILDER / DELIVERY STRATEGIST"
    draw.text((left, 112), tagline, fill=(*TEAL_SOFT, 220), font=tagline_font)

    headline_font = load_font(54, bold=True)
    headline = "BUILDING PRACTICAL ENTERPRISE AI PRODUCTS FOR REAL-WORLD TEAMS."
    lines = wrap_text(headline, headline_font, max_text, draw)

    y = 188
    for index, line in enumerate(lines):
        if "AI" in line:
            before, _, after = line.partition("AI")
            x = left
            if before:
                draw.text((x, y), before, fill=WHITE, font=headline_font)
                x += draw.textlength(before, font=headline_font)
            draw.text((x, y), "AI", fill=PURPLE, font=headline_font)
            x += draw.textlength("AI", font=headline_font)
            if after:
                draw.text((x, y), after, fill=WHITE, font=headline_font)
        else:
            draw.text((left, y), line, fill=WHITE, font=headline_font)
        y += 62

    sub_font = load_font(20)
    draw.text(
        (left, HEIGHT - 88),
        "Enterprise AI product portfolio · Gen Pulse · Pulse-Ops AI · SprintIQ",
        fill=MUTED,
        font=sub_font,
    )

    url_font = load_font(18)
    draw.text((left, HEIGHT - 54), "kentkong.github.io/kevin-portfolio", fill=TEAL_SOFT, font=url_font)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    image.convert("RGB").save(OUTPUT, format="PNG", optimize=True)
    print(f"Wrote {OUTPUT} ({WIDTH}x{HEIGHT})")


if __name__ == "__main__":
    main()
