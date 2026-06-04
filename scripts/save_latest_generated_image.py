#!/usr/bin/env python3
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
GEN_ROOT = Path.home() / ".codex" / "generated_images"


def latest_png():
    files = [p for p in GEN_ROOT.rglob("*.png") if p.is_file()]
    if not files:
        raise SystemExit("No generated PNG files found")
    return max(files, key=lambda p: p.stat().st_mtime)


def main():
    if len(sys.argv) != 2:
        raise SystemExit("Usage: save_latest_generated_image.py images/<slug>/<file>.webp")
    target = ROOT / sys.argv[1]
    if not str(target.resolve()).startswith(str(ROOT)):
        raise SystemExit("Target must be inside the repository")
    target.parent.mkdir(parents=True, exist_ok=True)
    source = latest_png()
    tmp = Path("/private/tmp") / f"{target.stem}.png"
    subprocess.run(
        [
            "magick",
            str(source),
            "-resize",
            "1280x720^",
            "-gravity",
            "center",
            "-extent",
            "1280x720",
            str(tmp),
        ],
        check=True,
    )
    subprocess.run(["cwebp", "-quiet", "-q", "82", "-m", "6", str(tmp), "-o", str(target)], check=True)
    subprocess.run(["identify", str(target)], check=True)
    print(f"saved {source} -> {target.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
