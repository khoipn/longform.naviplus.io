# CLAUDE.md — longform.naviplus.io

Tài liệu này đủ để một AI agent (Claude Code, Codex, v.v.) tiếp tục phát triển dự án mà không cần hỏi lại.

---

## 1. Tổng quan

**longform.naviplus.io** là site nội dung marketing dạng long-form + cluster SEO cho sản phẩm **Navi+ AI Menu Builder** (https://naviplus.io).

- **Tech stack:** Jekyll + jekyll-polyglot + jekyll-seo-tag + jekyll-sitemap
- **Host:** Cloudflare Pages — push lên `main` là tự build & deploy
- **9 ngôn ngữ:** `en` (default, root `/`), `vi`, `fr`, `de`, `zh-CN`, `jp`, `it`, `pt`, `es`
- **Mô hình nội dung:** Pillar (bài MẸ) → Cluster (bài CON). Mỗi bài mẹ link tới 4–5 bài con qua box "Deep-dive"; bài con backlink ngược bài mẹ.

---

## 2. Cấu trúc thư mục

```
_longform/{lang}/   # Bài MẸ (pillar) — hiển thị trên trang chủ
_topics/{lang}/     # Bài CON (cluster/topic)
_data/
  ui.yml            # UI strings cho cả 9 ngôn ngữ (tagline, CTA, labels)
  navigation.yml    # Header/footer links
_layouts/
  default.html      # Wrapper chung (head + header + footer)
  longform.html     # Layout bài mẹ (hero + prose + explore-grid + CTA)
  topic.html        # Layout bài con (breadcrumb + prose + backlink + CTA)
_includes/
  head.html         # <head> meta/CSS
  header.html       # Header ported từ naviplus.io (np-* classes)
  footer.html
assets/css/
  style.css         # CSS riêng của longform (lf-* classes) — load sau, ưu tiên cao hơn
assets/js/
  lightbox.js       # Lightbox ảnh bài viết + hover tools Zoom/Pin
styles/
  main.css          # CSS ported từ naviplus.io (np-* classes)
  customize.css
ARTICLE_PRESENTATION_GUIDE.md # Chuẩn trình bày bài viết: ảnh, box, visual rhythm, lightbox
.claude/skills/
  create-longform.md  # Skill hướng dẫn tạo bài mới
.claude/
  build-longform.workflow.js    # Workflow viết hàng loạt bài VI
  translate-longform.workflow.js # Workflow dịch VI → EN
  translate-multi.workflow.js   # Workflow dịch EN → nhiều ngôn ngữ
```

---

## 3. Convention bài viết

### Frontmatter bài MẸ (`_longform/{lang}/{slug}.md`)

```yaml
---
lang: en                      # ngôn ngữ của file này
ref: why-shoppers-dont-buy    # KEY chung cho mọi bản dịch — LUÔN là English slug
order: 1                      # thứ tự trên trang chủ (nhỏ = trên)
title: "Why shoppers visit your store but don't buy"
description: "Meta description 140–160 ký tự, có keyword chính"
topic_tag: "Navigation"       # nhãn hiển thị trên card
hero_color: "#6d5cf0"         # màu accent bài (hex)
read_time: 7                  # phút đọc
seo_keywords:
  - ecommerce store navigation
  - store navigation menu
date: 2026-06-02
child_links:                  # danh sách bài con
  - title: "How shoppers really behave on an ecommerce store"
    url: "/topic/how-shoppers-behave-on-ecommerce/"   # EN: không prefix
    desc: "Shoppers don't read, they scan."
    # VI/FR/...: url: "/vi/topic/how-shoppers-behave-on-ecommerce/"
---
```

### Frontmatter bài CON (`_topics/{lang}/{slug}.md`)

```yaml
---
lang: en
ref: how-shoppers-behave-on-ecommerce   # English slug, chung cho mọi lang
title: "How shoppers really behave on an ecommerce store"
description: "Meta description..."
parent_title: "Why shoppers visit your store but don't buy"
parent_url: "/why-shoppers-dont-buy/"   # EN: không prefix; VI: "/vi/why-shoppers-dont-buy/"
seo_keywords:
  - store user behavior
date: 2026-06-02
---
```

### URL convention

- **EN (default):** `/why-shoppers-dont-buy/` và `/topic/how-shoppers-behave-on-ecommerce/`
- **Các lang khác:** `/vi/why-shoppers-dont-buy/` và `/vi/topic/how-shoppers-behave-on-ecommerce/`
- **Slug luôn là tiếng Anh** — mọi ngôn ngữ dùng chung slug, chỉ khác prefix lang.
- `ref` phải **giống hệt nhau** giữa các bản dịch của cùng 1 bài (Jekyll Polyglot dùng `ref` để link language variants).

### Body bài MẸ — readmore box

Cuối mỗi H2 chủ đề, chèn đúng HTML này để link tới bài con:

```html
<p class="lf-readmore"><span class="lf-readmore-kicker">Deep-dive</span><a href="/topic/how-shoppers-behave-on-ecommerce/">Read the full guide → How shoppers really behave on an ecommerce store</a></p>
```

- EN: href `/topic/{slug}/`
- VI: href `/vi/topic/{slug}/`
- FR: href `/fr/topic/{slug}/` v.v.

### Body bài CON — backlink cuối bài

Câu cuối bài con PHẢI là:

```markdown
This article is part of the larger guide on [Why shoppers visit your store but don't buy](/why-shoppers-dont-buy/).
```

(VI: URL `/vi/why-shoppers-dont-buy/`, FR: `/fr/why-shoppers-dont-buy/` v.v.)

---

## 4. Tạo bài mới

### Cách nhanh — dùng skill

Trong Claude Code, gõ `/create-longform` → skill sẽ hướng dẫn từng bước (hỏi keyword, tạo file, build).

### Cách thủ công

1. Tạo `_longform/en/{slug}.md` theo schema bài MẸ ở trên.
2. Tạo mỗi bài con `_topics/en/{child-slug}.md` theo schema bài CON.
3. Build verify: `bundle exec jekyll build` → không có lỗi, check `_site/`.
4. Dịch VI: copy EN → `_longform/vi/` và `_topics/vi/`, đổi `lang:`, prefix URL thành `/vi/`.
5. Dịch các lang khác tương tự.

### Chạy server local

```bash
cd ~/Dev/naviplus_io/longform.naviplus.io
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve --port 9999 --host 0.0.0.0
```

- EN: http://localhost:9999/
- VI: http://localhost:9999/vi/
- Từ thiết bị khác: http://100.105.92.91:9999/

---

## 5. Đa ngôn ngữ (jekyll-polyglot)

- **EN = default lang** → URL root, không prefix.
- Mỗi lang khác tự động prefix `/{lang}/` theo `_config.yml`:
  ```yaml
  languages: ["en", "vi", "fr", "de", "zh-CN", "jp", "it", "pt", "es"]
  default_lang: "en"
  ```
- **UI strings** (nút, label, CTA) nằm trong `_data/ui.yml`. Đã có đủ 9 ngôn ngữ. Thêm key mới vào `en:` trước rồi dịch sang các lang khác.
- Fallback: nếu một ngôn ngữ thiếu key, tự động dùng `en`.
- `ref:` trong frontmatter phải **trùng khớp** giữa tất cả bản dịch → polyglot dùng nó để sinh `<link rel="alternate" hreflang="...">`.

---

## 6. CSS components trong `assets/css/style.css`

> **Quan trọng:** Khi làm đẹp bài viết hoặc tạo bài mới, đọc thêm `ARTICLE_PRESENTATION_GUIDE.md`.
> File đó là source of truth chi tiết cho visual rhythm, ảnh, box, lightbox và hover tools.

Các class dùng trong body bài viết (nằm trong `.lf-prose`):

| Class | Dùng cho |
|---|---|
| `.lf-readmore` | Box "Deep-dive" cuối mỗi H2 (xem mẫu ở mục 3) |
| `.lf-key` | Key takeaways callout nhẹ, thường đặt sau intro hoặc ảnh đầu |
| `.lf-note` | Box ghi chú/action nhẹ, dùng 1–2 lần/bài để tạo nhịp đọc |
| `.lf-stat` + `.lf-stat-num` + `.lf-stat-cap` | Pull statistic nổi bật |
| `.lf-faq` wrapper + `<details>/<summary>` | FAQ accordion |
| `<figure>` + `<figcaption>` | Ảnh có caption |
| Bảng Markdown `| col |` | Tự style qua `.lf-prose table` — responsive scroll trên mobile |

Prose typography (H2, H3, p, ul, ol, blockquote, code) được style tự động trong `.lf-prose`.

### Visual rhythm cho bài long-form

Khi làm đẹp bài viết, dùng nhấn nhá vừa phải:

- H2 đã có line/marker icon tự động bằng CSS — không thêm divider thủ công trước mỗi H2.
- Link và `strong` đã có underline/highlight nhẹ — chỉ bold keyword thật sự quan trọng, tránh bold cả đoạn.
- Mỗi bài nên có **tối thiểu 1 ảnh**, số ảnh phụ thuộc nội dung; bài dài/pillar thường nên có 4–6 ảnh.
- Với pillar, ưu tiên **1 ảnh cho mỗi H2 chính**. Không dồn 2 ảnh liên tiếp vào cùng một chủ đề nếu H2 khác chưa có ảnh.
- Ảnh dùng `<figure>` với `alt`, `title`, `figcaption`; ảnh trong bài có lightbox click để xem full màn hình.
- Lightbox phải là popup overlay giữa màn hình, không scroll người đọc xuống cuối trang. Ảnh có hover tools như Zoom/Pin để lưu Pinterest.
- Dùng `.lf-key` cho quick takeaway sau intro hoặc sau ảnh đầu.
- Dùng `.lf-note` cho action/checkpoint nhẹ gần cuối hoặc sau đoạn có quyết định quan trọng.
- Không lạm dụng box: pillar dài thường 1 `.lf-key` + 1–2 `.lf-note` là đủ.
- Icon ưu tiên qua CSS pseudo-element của component; không chèn emoji vào nội dung bài.

Bài reference đã áp dụng chuẩn này: `_longform/en/why-shoppers-dont-buy.md` và các bản dịch cùng slug.

---

## 7. Deploy

```
git push origin main
→ Cloudflare Pages trigger build (Jekyll)
→ Live tại https://longform.naviplus.io/
```

- Không cần cấu hình thêm gì.
- Build log xem trong Cloudflare Pages dashboard.
- Không commit thư mục `_site/` (đã có trong `.gitignore`).

---

## 8. Workflow files (`.claude/`)

Các file này dùng khi tạo/dịch bài hàng loạt qua Claude Code Workflow engine.

| File | Dùng khi |
|---|---|
| `build-longform.workflow.js` | Viết hàng loạt bài VI (research + viết + biên tập). Args: `["b1"]`…`["b1","b2","b3"]` (key trong PILLARS object) |
| `translate-longform.workflow.js` | Dịch bài từ VI → EN. Args: array `[{vi: "/abs/path.md", en: "/abs/path.md", kind: "pillar\|child"}]` — **dùng đường dẫn tuyệt đối** |
| `translate-multi.workflow.js` | Dịch EN → nhiều lang cùng lúc. Args: `{langs: ["fr","de",...], items: [{slug, kind}]}` |
| `CONTENT_PLAN.md` | Kế hoạch nội dung đã thực hiện trong session gốc |

> **Lưu ý:** Workflow agents chạy với working directory là repo chính (`naviplus.io`), không phải repo này. Luôn dùng **đường dẫn tuyệt đối** khi truyền file path vào workflow args.

---

## 9. Nội dung hiện có

6 chủ đề × 9 ngôn ngữ = 279 file bài viết:

| Slug (EN) | Chủ đề | Bài con |
|---|---|---|
| `why-shoppers-dont-buy` | Tại sao khách không mua | 4 |
| `choosing-the-right-shopify-menu` | Chọn loại menu | 4 |
| `measuring-menu-performance` | Đo lường hiệu quả menu | 5 |
| `mobile-navigation-beyond-hamburger` | Mobile nav thay hamburger | 4 |
| `navigation-and-page-speed` | Navigation & tốc độ tải | 4 |
| `navigation-for-every-store-stage` | Navigation theo giai đoạn store | 4 |

**Lưu ý chất lượng:** VI và EN là bản viết gốc, kiểm duyệt kỹ. FR, DE, ZH-CN, JP, IT, PT, ES là **máy dịch từ EN** — nên có vòng rà soát người bản ngữ trước khi coi là final.

---

## 10. Thêm ảnh vào bài viết

Thư mục `images/` chứa ảnh tĩnh. Ảnh bài viết phải theo chuẩn trong `ARTICLE_PRESENTATION_GUIDE.md`.

### Cách chèn ảnh trong bài

**Luôn dùng `<figure>` để có caption + SEO metadata:**

```html
<figure>
  <img src="/images/ten-anh.webp" alt="Mô tả ảnh rõ ràng" title="SEO title ngắn">
  <figcaption>Caption giải thích ảnh</figcaption>
</figure>
```

### CSS đã có sẵn cho ảnh

```css
.lf-prose img    { border-radius: 12px; }           /* tự style qua prose */
.lf-prose figure { margin: 26px auto; }
.lf-prose figcaption { color: var(--ink-soft); font-size: 14px; text-align: center; margin-top: 8px; }
```

### Quy tắc ảnh nên theo

- **Format:** `.webp` (nhỏ nhất, chất lượng tốt); fallback `.jpg` nếu cần
- **Size:** tạo/chốt ở `1280x720` horizontal; bài viết prose scale xuống bằng CSS
- **Compression:** ưu tiên `cwebp -q 82 -m 6`; mục tiêu dưới 250KB, thường 50–100KB nếu là vector illustration
- **Alt text:** bắt buộc, mô tả nội dung ảnh (SEO + accessibility)
- **Title:** bắt buộc, ngắn và cụ thể
- **Đặt tên:** kebab-case, mô tả nội dung, ví dụ: `shopify-tab-bar-mobile-navigation.webp`
- **Lưu vào:** `images/{article-slug}/`
- **Placement:** pillar ưu tiên 1 ảnh cho mỗi H2 chính; không dồn 2 ảnh vào một H2 nếu H2 khác chưa có ảnh

### Loại ảnh phù hợp cho từng chủ đề

| Bài | Ảnh gợi ý |
|---|---|
| why-shoppers-dont-buy | Heatmap F-pattern, screenshot store mobile |
| choosing-the-right-shopify-menu | So sánh Mega Menu vs hamburger |
| measuring-menu-performance | Screenshot GA4 dashboard, heatmap click |
| mobile-navigation-beyond-hamburger | Thumb zone diagram, Tab Bar example |
| navigation-and-page-speed | PageSpeed Insights screenshot |
| navigation-for-every-store-stage | Timeline 3 giai đoạn store |

### Vị trí chèn ảnh trong bài MẸ

Ưu tiên map ảnh theo từng H2 chính. Ảnh minh họa section có thể đặt sau nội dung section hoặc sau `.lf-readmore`, nhưng không chèn trong `.lf-readmore`. Với section checklist/action, ảnh đặt trong chính section đó, sau bullet list và trước `.lf-note`.

### CDN (tùy chọn)

Ảnh hiện serve từ GitHub Pages qua Cloudflare. Nếu muốn serve từ CDN riêng:
- Navi+ đang dùng `cdn.naviplus.app` cho ảnh sản phẩm
- Có thể host ảnh trên Cloudflare Images hoặc R2 rồi dùng URL tuyệt đối

---

## 11. Lỗi đã biết & đã fix

| Lỗi | Nguyên nhân | Fix |
|---|---|---|
| URL thô hiện trên breadcrumb bài con | `{{ page.parent_url \| prepend: '' }}` thừa trong `_layouts/topic.html` | Đã xóa (commit `0428f6e`) |
| Table bị tràn ngang trên mobile | `overflow: hidden` không hoạt động trên `display:table` | Đổi sang `display:block; overflow-x:auto` trong `style.css` |
| Language pills thò thụt | `flex-wrap:wrap` tạo hàng không đều | Đổi sang `grid 3 cột` cho `.np-mob-lang` trong `style.css` |
| HTML entity leak trong readmore (`&lt;p`) | Workflow trả về HTML escaped | Dùng Ruby/JSON parse đúng cách khi ghi file từ workflow output |
