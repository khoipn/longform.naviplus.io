---
name: naviplus-longform-images
description: Use when creating, replacing, or auditing images for longform.naviplus.io articles. Enforces the Navi+ editorial storytelling image style, prompt structure, WebP save workflow, and validation steps so new images do not regress to old placeholder-looking assets.
---

# Navi+ Longform Images

Use this skill whenever the task involves article images for `longform.naviplus.io`, especially generating or replacing files under `images/{article-slug}/*.webp`.

## Goal

Create one complete `1280x720` editorial storytelling illustration per article figure. Avoid old placeholder-looking images: sparse generic diagrams, low-detail screenshots, tiny labels, flat stock-like icons, or files that compress to very small WebP sizes.

## Visual System

Use this consistent visual family:

- clean modern flat/vector editorial SaaS and ecommerce illustration;
- warm off-white background;
- large editorial headline on the left;
- deep navy typography;
- one coral-red problem keyword when useful;
- bright blue UI accents;
- teal/green solved path, success state, or recommendation path;
- pale blue-gray UI cards;
- rounded browser, phone, and product frames;
- simple ecommerce product cards;
- soft shadows and subtle gradients;
- dotted paths, arrows, callouts, and attention rings;
- simple vector shopper/store-owner/UX character only when it clarifies the story;
- tiny bottom-right watermark in a translucent rounded white label:
  `@Navi+ AI Menu Builder | naviplus.io`.

## Prompt Template

Use a self-contained prompt like this:

```text
Create one standalone 1280x720 horizontal blog illustration for longform.naviplus.io.

Style inspiration only: https://cdn.naviplus.app/AI/templates/chatGPT/ChatGPT-generate-images.webp

Article: "{article title}"
Section: "{section heading}"
Topic: {specific concept}

Headline text, large on the left: "{short editorial headline}"
Make the word "{problem_or_focus_word}" coral red; keep the rest deep navy.
Subtitle below headline: "{one-sentence explanation}"
Three chips below: "{chip 1}", "{chip 2}", "{chip 3}".

Main visual on center/right: {one coherent scene that explains this figure's section. Describe the UI, path, warnings, and solved state.}

Visual system: clean modern flat vector editorial SaaS/ecommerce illustration, warm off-white background, large editorial headline on the left, deep navy typography, coral red for the problem, bright blue UI accents, teal/green solved path, pale blue-gray cards, rounded device frames, soft shadows, subtle gradients, dotted paths and clear arrows.

Watermark: tiny faint bottom-right watermark inside a small translucent white rounded rectangle. Exact text: "@Navi+ AI Menu Builder | naviplus.io".

Negative constraints: no photorealism, no 3D render, no dark theme, no stock photo style, no dense dashboard, no collage, no random logos, no real brand names unless the article explicitly requires them, no tiny unreadable text, no non-English text, no footer bar.
```

## Workflow

1. Read the article section around each `<figure>`.
2. Reuse the existing target filename unless the article markup needs correction.
3. Generate one image per figure with the image generation tool.
4. If the image contains random logos, brand names, unreadable dense text, wrong language, or a stock/3D look, regenerate before saving.
5. Save the latest generated PNG to WebP:

```bash
python3 scripts/save_latest_generated_image.py images/{article-slug}/{filename}.webp
```

6. Inspect dimensions and size:

```bash
identify images/{article-slug}/{filename}.webp
```

7. Update article `alt`, `title`, or caption only when the new image meaning differs from the old metadata.
8. Update `IMAGE_GENERATION_PROGRESS.md` with replaced files, dimensions, sizes, and concepts.
9. Run:

```bash
bundle exec jekyll build
```

## Validation

Use this scan to catch likely old placeholder assets:

```bash
find images -type f -name '*.webp' -size -30000c -exec ls -l {} +
```

After a complete replacement pass, this command should return no article illustration placeholders unless a small file is intentionally accepted and documented.
