#!/usr/bin/env python3
"""Generate PNG/ICO favicons with letter marks (SVG text is unreliable in browser tabs)."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]

BRANDS = [
    {
        "letter": "K",
        "bg": "#0e1114",
        "fg": "#b8ecec",
        "border": "#b8ecec",
        "outputs": [
            ROOT / "src/app/favicon.ico",
            ROOT / "public/favicon-32.png",
        ],
    },
    {
        "letter": "P",
        "bg": "#050505",
        "fg": "#eab308",
        "border": "#eab308",
        "outputs": [
            Path("/Users/kevin/Pulse_ops_ai/src/app/favicon.ico"),
            Path("/Users/kevin/Pulse_ops_ai/public/favicon-32.png"),
        ],
    },
    {
        "letter": "S",
        "bg": "#0a0e14",
        "fg": "#22d3ee",
        "border": "#22d3ee",
        "outputs": [
            Path("/Users/kevin/sprintiq-ai/src/app/favicon.ico"),
            Path("/Users/kevin/sprintiq-ai/public/favicon-32.png"),
        ],
    },
    {
        "letter": "G",
        "bg": "#1a1510",
        "fg": "#f59e0b",
        "border": "#f59e0b",
        "outputs": [
            Path("/Users/kevin/gen-pulse-dashboard/favicon.ico"),
            Path("/Users/kevin/gen-pulse-dashboard/favicon-32.png"),
        ],
    },
]


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def load_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def render_icon(letter: str, bg: str, fg: str, border: str, size: int = 32) -> Image.Image:
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)

    radius = max(4, size // 4)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=hex_to_rgb(bg))
    draw.rounded_rectangle(
        (0, 0, size - 1, size - 1),
        radius=radius,
        outline=hex_to_rgb(border),
        width=max(1, size // 32),
    )

    font = load_font(int(size * 0.56))
    bbox = draw.textbbox((0, 0), letter, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x = (size - text_w) / 2 - bbox[0]
    y = (size - text_h) / 2 - bbox[1]
    draw.text((x, y), letter, fill=hex_to_rgb(fg), font=font)
    return image


def save_brand(brand: dict) -> None:
    icon_32 = render_icon(brand["letter"], brand["bg"], brand["fg"], brand["border"], 32)
    icon_16 = render_icon(brand["letter"], brand["bg"], brand["fg"], brand["border"], 16)

    for output in brand["outputs"]:
        output.parent.mkdir(parents=True, exist_ok=True)
        if output.suffix == ".ico":
            icon_32.save(output, format="ICO", sizes=[(16, 16), (32, 32)])
        else:
            icon_32.save(output, format="PNG")

    print(f"Wrote {brand['letter']}: {', '.join(str(p) for p in brand['outputs'])}")


def main() -> None:
    for brand in BRANDS:
        save_brand(brand)


if __name__ == "__main__":
    main()
