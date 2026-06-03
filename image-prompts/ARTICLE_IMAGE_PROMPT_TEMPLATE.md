# Article Image Prompt Template — Navi+ Longform

Use this template when generating article images for `longform.naviplus.io`.

Reference style URL:
https://cdn.naviplus.app/AI/templates/chatGPT/ChatGPT-generate-images.webp

Read first:
- `CLAUDE.md`
- `ARTICLE_PRESENTATION_GUIDE.md`

---

## Planning Prompt

```text
You are an expert editorial illustrator, UX content designer, and SaaS/ecommerce visual storyteller.

Read the article content or URL. Choose the right number of images based on the article sections.

Rules:
- Every article needs at least 1 image.
- Pillar articles usually need 4-6 images.
- Prefer 1 image per major H2 section.
- Do not put 2 images in the same H2 section while another H2 has no image.
- Topic/child articles can use 1-2 images if shorter.
- Each image must be a separate standalone 1280x720 canvas.
- Do not create a combined preview, collage, triptych, stacked infographic, or multi-panel canvas.

Before generating, list concepts:

Image N:
- Section:
- Topic:
- Headline:
- Subtitle:
- Key visual:
- Callouts:
- Target filename:
- Alt:
- Title:
- Caption:
```

---

## Generation Prompt Base

```text
Create one standalone 1280x720 horizontal blog illustration.

Use this reference image URL only as visual style inspiration:
https://cdn.naviplus.app/AI/templates/chatGPT/ChatGPT-generate-images.webp

Article:
<ARTICLE TITLE OR URL>

Section:
<SECTION H2>

Topic:
<ONE IDEA ONLY>

Headline text, large on the left:
"<3-8 WORD ENGLISH HEADLINE>"

Make one problem keyword coral red if relevant; keep the rest deep navy.

Subtitle below headline:
"<ONE SHORT ENGLISH SENTENCE>"

Insight cards on lower-left:
- "<2-4 words>"
- "<2-4 words>"
- "<2-4 words>"

Main visual on center/right:
<Describe one large ecommerce/SaaS/UX scene that explains this section. Use one major device, flow, menu, UI, shopper journey, or checklist. Make objects large and readable. Use full 720px height.>

Visual system:
- clean modern vector illustration
- warm off-white background
- large editorial headline on the left
- deep navy main typography
- coral red emphasis for problem/friction/loss
- bright blue ecommerce UI accents and active states
- teal/green positive highlight zones and solved paths
- pale blue-gray UI cards and placeholder lines
- simple ecommerce product cards
- rounded device frames
- simple vector characters or hands only if useful
- soft shadows
- subtle gradients
- clean arrows and dotted paths
- spacious SaaS/ecommerce editorial layout

Watermark:
Add a tiny faint bottom-right watermark inside a small translucent white rounded rectangle.
Exact text: "@Navi+ AI Menu Builder | naviplus.io".
Left-align the text.
Do not create a footer.

Negative constraints:
Do not create a multi-panel image.
Do not create a collage.
Do not create a dashboard collage.
Do not create a website screenshot.
Do not use photorealism, 3D render, isometric 3D, dark theme, stock photo style, comic style, sketch style, overly cute cartoon style, dense UI, complex charts, tiny text, random logos, non-English text, footer bar, or a combined preview.
```

---

## Post Processing

After generation:

```bash
sips -z 720 1280 /path/to/source.png
cwebp -q 82 -m 6 /path/to/source.png -o images/<article-slug>/<target-filename>.webp
```

Then insert:

```html
<figure>
  <img src="/images/<article-slug>/<target-filename>.webp" alt="<SEO-friendly alt>" title="<short title>">
  <figcaption><Caption explaining the section insight.</figcaption>
</figure>
```

Run:

```bash
bundle exec jekyll build
```
