#!/usr/bin/env python3
import html
import os
import re
import subprocess
import tempfile
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
ARTICLES = ROOT / "_longform" / "en"
IMG_ROOT = ROOT / "images"
W, H = 1280, 720

COLORS = {
    "bg": "#fff8ef",
    "navy": "#13233f",
    "muted": "#637189",
    "coral": "#ff6b5f",
    "blue": "#3478f6",
    "teal": "#19b891",
    "pale": "#eaf1fb",
    "card": "#ffffff",
    "line": "#cfdae9",
    "yellow": "#ffd166",
}

STOPWORDS = {
    "the", "and", "for", "with", "from", "that", "this", "your", "are", "into",
    "over", "under", "without", "through", "showing", "shown", "where", "what",
    "when", "why", "how", "must", "versus", "vs", "page", "store", "stores",
}


def tracked_files():
    try:
        result = subprocess.run(
            ["git", "ls-files", "images"],
            cwd=ROOT,
            check=True,
            text=True,
            capture_output=True,
        )
    except Exception:
        return set()
    return set(result.stdout.splitlines())


def esc(value):
    return html.escape(str(value), quote=True)


def slug_words(path):
    stem = Path(path).stem
    return [w for w in re.split(r"[-_]+", stem) if w]


def title_words(value, max_words=4):
    value = re.sub(r"<[^>]+>", " ", value or "")
    value = re.split(r"[:|;.!?]", value)[0]
    words = re.findall(r"[A-Za-z0-9+]+", value)
    words = [w for w in words if w.lower() not in {"a", "an"}]
    if len(words) < 2:
        words = slug_words(value)
    return " ".join(words[:max_words]).title()


def short_sentence(value, max_words=11):
    value = re.sub(r"<[^>]+>", " ", value or "")
    value = re.sub(r"\s+", " ", value).strip()
    value = re.split(r"[.!?]", value)[0]
    words = re.findall(r"[A-Za-z0-9+%]+", value)
    return " ".join(words[:max_words])


def keywords(rel, alt, title):
    raw = " ".join(slug_words(rel) + re.findall(r"[A-Za-z0-9]+", alt + " " + title))
    seen = []
    for word in raw.lower().split():
        if word in STOPWORDS or len(word) < 3:
            continue
        if word not in seen:
            seen.append(word)
    labels = []
    for word in seen[:3]:
        labels.append(word.replace("seo", "SEO").replace("lcp", "LCP").replace("ux", "UX").title())
    while len(labels) < 3:
        labels.append(["Fast Path", "Clear Signal", "Less Friction"][len(labels)])
    return labels[:3]


def wrap(text, max_chars):
    words = text.split()
    lines, current = [], []
    for word in words:
        joined = " ".join(current + [word])
        if current and len(joined) > max_chars:
            lines.append(" ".join(current))
            current = [word]
        else:
            current.append(word)
    if current:
        lines.append(" ".join(current))
    return lines


def text_block(x, y, text, size, weight=700, fill=None, max_chars=12, line_height=None):
    fill = fill or COLORS["navy"]
    line_height = line_height or int(size * 1.16)
    lines = wrap(text, max_chars)
    out = []
    for i, line in enumerate(lines):
        out.append(
            f'<text x="{x}" y="{y + i * line_height}" font-size="{size}" '
            f'font-weight="{weight}" fill="{fill}" font-family="Inter, Arial, sans-serif">{esc(line)}</text>'
        )
    return "\n".join(out), y + len(lines) * line_height


def label_card(x, y, label, color):
    return f"""
    <g>
      <rect x="{x}" y="{y}" width="178" height="54" rx="18" fill="{COLORS['card']}" stroke="{COLORS['line']}" filter="url(#shadow)"/>
      <circle cx="{x + 28}" cy="{y + 27}" r="11" fill="{color}" opacity="0.16"/>
      <circle cx="{x + 28}" cy="{y + 27}" r="5" fill="{color}"/>
      <text x="{x + 48}" y="{y + 34}" font-size="18" font-weight="700" fill="{COLORS['navy']}" font-family="Inter, Arial, sans-serif">{esc(label)}</text>
    </g>"""


def browser_frame(x, y, w, h, accent=COLORS["blue"]):
    return f"""
    <g filter="url(#shadow)">
      <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="28" fill="{COLORS['card']}"/>
      <rect x="{x}" y="{y}" width="{w}" height="58" rx="28" fill="{COLORS['pale']}"/>
      <circle cx="{x + 36}" cy="{y + 29}" r="7" fill="{COLORS['coral']}"/>
      <circle cx="{x + 58}" cy="{y + 29}" r="7" fill="{COLORS['yellow']}"/>
      <circle cx="{x + 80}" cy="{y + 29}" r="7" fill="{COLORS['teal']}"/>
      <rect x="{x + 120}" y="{y + 18}" width="{w - 170}" height="22" rx="11" fill="#fff"/>
      <rect x="{x + 42}" y="{y + 86}" width="{w - 84}" height="16" rx="8" fill="{COLORS['line']}"/>
      <rect x="{x + 42}" y="{y + 126}" width="{int(w * .45)}" height="24" rx="12" fill="{accent}" opacity=".92"/>
    </g>"""


def mobile_frame(x, y, w, h):
    return f"""
    <g filter="url(#shadow)">
      <rect x="{x}" y="{y}" width="{w}" height="{h}" rx="38" fill="{COLORS['navy']}"/>
      <rect x="{x + 13}" y="{y + 18}" width="{w - 26}" height="{h - 36}" rx="29" fill="{COLORS['card']}"/>
      <rect x="{x + 78}" y="{y + 30}" width="{w - 156}" height="8" rx="4" fill="#223655" opacity=".5"/>
      <rect x="{x + 34}" y="{y + 70}" width="{w - 68}" height="36" rx="18" fill="{COLORS['pale']}"/>
      <rect x="{x + 34}" y="{y + h - 82}" width="{w - 68}" height="48" rx="22" fill="#f3f7fc"/>
    </g>"""


def product_grid(x, y, cols=2, rows=2, scale=1.0):
    out = []
    cw, ch, gap = int(112 * scale), int(116 * scale), int(18 * scale)
    palette = [COLORS["blue"], COLORS["teal"], COLORS["yellow"], COLORS["coral"]]
    for r in range(rows):
        for c in range(cols):
            px = x + c * (cw + gap)
            py = y + r * (ch + gap)
            color = palette[(r * cols + c) % len(palette)]
            out.append(f"""
            <g>
              <rect x="{px}" y="{py}" width="{cw}" height="{ch}" rx="18" fill="{COLORS['card']}" stroke="{COLORS['line']}"/>
              <rect x="{px + 14}" y="{py + 14}" width="{cw - 28}" height="{int(ch * .46)}" rx="14" fill="{color}" opacity=".18"/>
              <circle cx="{px + int(cw * .5)}" cy="{py + int(ch * .34)}" r="{int(18 * scale)}" fill="{color}" opacity=".72"/>
              <rect x="{px + 16}" y="{py + int(ch * .68)}" width="{cw - 32}" height="{int(9 * scale)}" rx="5" fill="{COLORS['line']}"/>
              <rect x="{px + 16}" y="{py + int(ch * .82)}" width="{int((cw - 32) * .62)}" height="{int(9 * scale)}" rx="5" fill="{COLORS['line']}"/>
            </g>""")
    return "\n".join(out)


def draw_funnel():
    return f"""
    <g>
      {browser_frame(595, 105, 520, 420)}
      <path d="M660 245 C760 190 870 190 970 245" fill="none" stroke="{COLORS['blue']}" stroke-width="18" stroke-linecap="round"/>
      <path d="M970 245 C900 330 830 400 760 470" fill="none" stroke="{COLORS['teal']}" stroke-width="18" stroke-linecap="round"/>
      <path d="M760 245 C730 318 695 382 642 452" fill="none" stroke="{COLORS['coral']}" stroke-width="12" stroke-linecap="round" stroke-dasharray="18 16"/>
      <circle cx="660" cy="245" r="44" fill="{COLORS['blue']}"/><text x="632" y="253" font-size="18" font-weight="800" fill="#fff" font-family="Arial">Visit</text>
      <circle cx="970" cy="245" r="52" fill="{COLORS['teal']}"/><text x="930" y="253" font-size="18" font-weight="800" fill="#fff" font-family="Arial">Product</text>
      <circle cx="760" cy="470" r="48" fill="{COLORS['navy']}"/><text x="736" y="478" font-size="18" font-weight="800" fill="#fff" font-family="Arial">Cart</text>
      <circle cx="642" cy="452" r="36" fill="{COLORS['coral']}"/><text x="627" y="460" font-size="20" font-weight="900" fill="#fff" font-family="Arial">!</text>
    </g>"""


def draw_mobile():
    return f"""
    <g>
      {mobile_frame(710, 68, 286, 560)}
      <rect x="758" y="158" width="92" height="24" rx="12" fill="{COLORS['blue']}"/>
      <rect x="868" y="158" width="72" height="24" rx="12" fill="{COLORS['line']}"/>
      {product_grid(754, 215, 2, 2, .86)}
      <circle cx="856" cy="547" r="76" fill="{COLORS['teal']}" opacity=".14"/>
      <path d="M1030 515 C1090 478 1140 502 1134 558 C1128 604 1065 624 1003 594 C970 578 954 552 960 526 C973 538 1007 538 1030 515Z" fill="#f2b896" opacity=".96"/>
      <circle cx="959" cy="147" r="28" fill="{COLORS['coral']}"/><text x="949" y="156" font-size="24" font-weight="900" fill="#fff" font-family="Arial">!</text>
    </g>"""


def draw_checkout():
    return f"""
    <g>
      {browser_frame(610, 92, 536, 470, COLORS['teal'])}
      <rect x="668" y="210" width="330" height="66" rx="20" fill="{COLORS['pale']}" stroke="{COLORS['line']}"/>
      <rect x="690" y="230" width="62" height="28" rx="14" fill="{COLORS['blue']}"/>
      <rect x="770" y="230" width="190" height="12" rx="6" fill="{COLORS['line']}"/>
      <rect x="668" y="304" width="330" height="66" rx="20" fill="{COLORS['pale']}" stroke="{COLORS['line']}"/>
      <rect x="690" y="324" width="62" height="28" rx="14" fill="{COLORS['teal']}"/>
      <rect x="770" y="324" width="156" height="12" rx="6" fill="{COLORS['line']}"/>
      <rect x="706" y="424" width="250" height="64" rx="28" fill="{COLORS['coral']}"/>
      <text x="768" y="464" font-size="25" font-weight="900" fill="#fff" font-family="Arial">Checkout</text>
      <rect x="1018" y="206" width="94" height="260" rx="28" fill="{COLORS['navy']}" opacity=".94"/>
      <circle cx="1065" cy="274" r="28" fill="{COLORS['yellow']}"/><circle cx="1065" cy="348" r="28" fill="{COLORS['teal']}"/><circle cx="1065" cy="422" r="28" fill="{COLORS['blue']}"/>
    </g>"""


def draw_menu():
    return f"""
    <g>
      {browser_frame(586, 86, 590, 500)}
      <rect x="642" y="190" width="165" height="300" rx="26" fill="{COLORS['navy']}"/>
      <rect x="675" y="232" width="100" height="18" rx="9" fill="#fff" opacity=".86"/>
      <rect x="675" y="282" width="82" height="18" rx="9" fill="{COLORS['blue']}"/>
      <rect x="675" y="332" width="116" height="18" rx="9" fill="#fff" opacity=".58"/>
      <rect x="842" y="190" width="270" height="300" rx="26" fill="{COLORS['card']}" stroke="{COLORS['line']}"/>
      {product_grid(876, 235, 2, 2, .78)}
      <path d="M794 334 C828 324 845 306 864 278" fill="none" stroke="{COLORS['teal']}" stroke-width="10" stroke-linecap="round"/>
      <circle cx="807" cy="334" r="18" fill="{COLORS['teal']}"/>
    </g>"""


def draw_chart():
    return f"""
    <g>
      {browser_frame(610, 100, 532, 450)}
      <line x1="682" y1="470" x2="1065" y2="470" stroke="{COLORS['line']}" stroke-width="4"/>
      <line x1="682" y1="210" x2="682" y2="470" stroke="{COLORS['line']}" stroke-width="4"/>
      <rect x="728" y="350" width="54" height="120" rx="12" fill="{COLORS['coral']}"/>
      <rect x="824" y="288" width="54" height="182" rx="12" fill="{COLORS['blue']}"/>
      <rect x="920" y="246" width="54" height="224" rx="12" fill="{COLORS['teal']}"/>
      <path d="M720 318 C800 290 846 256 920 226 C972 204 1022 194 1072 166" fill="none" stroke="{COLORS['navy']}" stroke-width="9" stroke-linecap="round"/>
      <circle cx="1072" cy="166" r="19" fill="{COLORS['yellow']}" stroke="{COLORS['navy']}" stroke-width="5"/>
    </g>"""


def draw_code():
    return f"""
    <g>
      {browser_frame(610, 94, 540, 470, COLORS['blue'])}
      <rect x="666" y="190" width="420" height="290" rx="24" fill="{COLORS['navy']}"/>
      <rect x="700" y="230" width="270" height="16" rx="8" fill="{COLORS['teal']}"/>
      <rect x="700" y="270" width="326" height="16" rx="8" fill="{COLORS['blue']}"/>
      <rect x="736" y="310" width="230" height="16" rx="8" fill="#fff" opacity=".75"/>
      <rect x="736" y="350" width="292" height="16" rx="8" fill="{COLORS['coral']}"/>
      <rect x="700" y="390" width="210" height="16" rx="8" fill="#fff" opacity=".55"/>
      <circle cx="1070" cy="238" r="38" fill="{COLORS['teal']}"/><path d="M1052 238 l13 14 l28 -34" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    </g>"""


def draw_visual(kind):
    if kind in {"funnel", "flow"}:
        return draw_funnel()
    if kind in {"mobile", "touch", "thumb", "fab"}:
        return draw_mobile()
    if kind in {"checkout", "cart", "trust", "header", "breadcrumb"}:
        return draw_checkout()
    if kind in {"chart", "metrics", "dashboard", "analytics", "comparison", "contrast", "color"}:
        return draw_chart()
    if kind in {"code", "seo", "crawlable", "javascript", "source", "lcp", "speed", "performance"}:
        return draw_code()
    return draw_menu()


def visual_kind(rel):
    name = Path(rel).stem.lower()
    for key in ["funnel", "flow", "mobile", "touch", "thumb", "fab", "checkout", "cart",
                "trust", "header", "breadcrumb", "chart", "metrics", "dashboard",
                "analytics", "comparison", "contrast", "color", "code", "seo",
                "crawlable", "javascript", "source", "lcp", "speed", "performance"]:
        if key in name:
            return key
    return "menu"


def svg_for(item):
    rel, alt, title, caption = item
    headline = title_words(title or alt or Path(rel).stem)
    subtitle = short_sentence(caption or alt, 10) or "Clear navigation reduces shopper friction"
    labels = keywords(rel, alt, title)
    first = headline.split()[0] if headline.split() else "Better"
    rest = " ".join(headline.split()[1:]) or "Navigation"

    first_svg, y_after = text_block(78, 178, first, 62, 850, COLORS["coral"], 10, 66)
    rest_svg, y_after = text_block(78, y_after, rest, 62, 850, COLORS["navy"], 12, 66)
    sub_svg, y_after_sub = text_block(80, y_after + 22, subtitle, 24, 600, COLORS["muted"], 28, 32)
    cards_y = min(486, y_after_sub + 42)

    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#13233f" flood-opacity="0.13"/>
    </filter>
    <linearGradient id="softBlue" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="#f9fcff"/>
      <stop offset="1" stop-color="#e9f2ff"/>
    </linearGradient>
  </defs>
  <rect width="{W}" height="{H}" fill="{COLORS['bg']}"/>
  <circle cx="1124" cy="112" r="120" fill="{COLORS['blue']}" opacity=".08"/>
  <circle cx="950" cy="608" r="110" fill="{COLORS['teal']}" opacity=".08"/>
  <rect x="48" y="52" width="410" height="616" rx="34" fill="#ffffff" opacity=".42"/>
  {first_svg}
  {rest_svg}
  {sub_svg}
  {label_card(78, cards_y, labels[0], COLORS['blue'])}
  {label_card(78, cards_y + 72, labels[1], COLORS['teal'])}
  {label_card(78, cards_y + 144, labels[2], COLORS['coral'])}
  {draw_visual(visual_kind(rel))}
  <rect x="984" y="662" width="244" height="28" rx="10" fill="#ffffff" opacity=".64"/>
  <text x="998" y="681" font-size="13" font-weight="600" fill="{COLORS['muted']}" opacity=".68" font-family="Inter, Arial, sans-serif">@Navi+ AI Menu Builder | naviplus.io</text>
</svg>"""


def find_missing(force=False):
    figure_re = re.compile(r"<figure[^>]*>.*?</figure>", re.S)
    src_re = re.compile(r'<img[^>]*src="/([^"]+\.webp)"[^>]*>', re.S)
    attr_re = re.compile(r'(\w+)="([^"]*)"')
    cap_re = re.compile(r"<figcaption>(.*?)</figcaption>", re.S)
    items = []
    tracked = tracked_files() if force else set()
    for article in sorted(ARTICLES.glob("*.md")):
        text = article.read_text()
        for fig in figure_re.findall(text):
            src_match = src_re.search(fig)
            if not src_match:
                continue
            rel = src_match.group(1)
            target = ROOT / rel
            if target.exists() and (not force or rel in tracked):
                continue
            attrs = dict(attr_re.findall(src_match.group(0)))
            cap = cap_re.search(fig)
            items.append((rel, attrs.get("alt", ""), attrs.get("title", ""), cap.group(1).strip() if cap else ""))
    return items


def render(item):
    rel = item[0]
    target = ROOT / rel
    target.parent.mkdir(parents=True, exist_ok=True)
    svg = svg_for(item)
    with tempfile.TemporaryDirectory() as td:
        os.environ.setdefault("XDG_CACHE_HOME", td)
        os.environ.setdefault("FONTCONFIG_PATH", "/opt/homebrew/etc/fonts")
        svg_path = Path(td) / "source.svg"
        png_path = Path(td) / "source.png"
        svg_path.write_text(svg)
        subprocess.run(["magick", str(svg_path), str(png_path)], check=True)
        subprocess.run(["cwebp", "-quiet", "-q", "82", "-m", "6", str(png_path), "-o", str(target)], check=True)
    return target


def main():
    force = "--force" in os.sys.argv
    items = find_missing(force=force)
    print(f"{'matched' if force else 'missing'}: {len(items)}")
    for i, item in enumerate(items, 1):
        target = render(item)
        size = os.path.getsize(target)
        print(f"{i:03d}/{len(items)} {target.relative_to(ROOT)} {size} bytes")


if __name__ == "__main__":
    main()
