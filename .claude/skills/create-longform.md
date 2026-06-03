---
name: create-longform
description: >
  Tạo một bài longform (pillar) mới cho longform.naviplus.io theo chuẩn SEO.
  Dùng khi user nói "tạo bài longform", "tạo bài longform mới", "viết bài longform về ...",
  "create longform article". Skill xử lý: hỏi SEO keyword, tạo bài mẹ nhồi keyword,
  tạo bài con backlink keyword, dịch đa ngôn ngữ, build + preview.
---

# Create Longform Skill

Site **longform.naviplus.io** = Jekyll + jekyll-polyglot. Mỗi bài MẸ (pillar) nằm ở collection
`_longform/{lang}/`, link tới nhiều bài CON (cluster) ở `_topics/{lang}/`. Bài con backlink về bài mẹ
bằng **anchor = SEO keyword**.

Ngoài chuẩn SEO/content trong file này, **bắt buộc đọc và áp dụng** `ARTICLE_PRESENTATION_GUIDE.md`
cho phần trình bày bài viết: ảnh, visual rhythm, box nhẹ, lightbox, hover tools, alt/title/caption.

## ⛔ Bước 0 — LUÔN hỏi SEO keyword trước khi viết

Khi user yêu cầu tạo bài longform, **BẮT BUỘC hỏi trước**:

1. **SEO keyword chính** (1 cụm) — sẽ nhồi đậm nhất.
2. **SEO keyword phụ** (2–5 cụm) — rải trong H2/H3 + body.
3. (Nếu user chưa nói) chủ đề/tiêu đề bài mẹ + danh sách bài con muốn tách ra.

Không viết khi chưa có keyword. Sau khi có → xác nhận ngắn rồi tạo.

## Quy trình tạo

### 1. Bài MẸ — `_longform/{lang}/<slug>.md`

Front matter:
```yaml
---
lang: vi            # ngôn ngữ của file này
ref: <slug>         # KEY chung cho mọi bản dịch (giống nhau across lang)
order: <số>         # thứ tự hiện ở trang chủ (nhỏ = trên)
title: "<tiêu đề chứa keyword chính>"
description: "<meta description 140–160 ký tự, chứa keyword chính>"
topic_tag: "Shopify" # nhãn ngắn hiện trên card
hero_color: "#6d5cf0"
read_time: <phút>
seo_keywords:
  - <keyword chính>
  - <keyword phụ 1>
  - <keyword phụ 2>
date: YYYY-MM-DD
child_links:
  - title: "<tiêu đề bài con>"
    url: "/topic/<child-slug>/"     # VI thêm prefix: /vi/topic/<child-slug>/
    desc: "<mô tả 1 dòng>"
---
```

Nhồi keyword TỰ NHIÊN (không gượng): keyword chính xuất hiện ở **title, mở bài (đoạn đầu), ít nhất 1 H2, meta description, alt ảnh**. Keyword phụ rải ở các H2/H3 + body.

**CẤU TRÚC THÂN BÀI (quan trọng):** Bài mẹ gồm **nhiều chủ đề (mỗi chủ đề = 1 mục `## H2`)**. Mỗi chủ đề:
1. Cho **một phần thông tin cốt lõi** (vài đoạn) — đủ giá trị nhưng KHÔNG giải quyết hết.
2. **Kết thúc bằng 1 link inline "đọc sâu"** dẫn tới bài con dài hơi về đúng chủ đề đó:

```html
<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/topic/<child-slug>/">Xem bài đầy đủ → <Tiêu đề bài con></a></p>
```
(VI: href `/vi/topic/<child-slug>/`. Anchor NÊN chứa tiêu đề/keyword bài con.)

→ Mỗi `## H2` (chủ đề) thường có 1 bài con tương ứng. `child_links` ở front matter vẫn khai báo đủ các bài con (dùng cho grid "Khám phá chủ đề" cuối trang — recap + SEO). Tức là mỗi bài con xuất hiện 2 lần: link inline cuối chủ đề + card recap cuối bài.

URL bài mẹ: `/<slug>/` (EN root) hoặc `/vi/<slug>/` (các lang khác — polyglot tự prefix).

**TRÌNH BÀY BÀI MẸ (bắt buộc):**

- Pillar phải có ít nhất 1 ảnh; bài dài thường 4–6 ảnh.
- Ưu tiên 1 ảnh cho mỗi H2 chính. Không dồn 2 ảnh vào cùng một H2 nếu H2 khác chưa có ảnh.
- Ảnh đặt bằng `<figure><img ... alt ... title ...><figcaption>...</figcaption></figure>`.
- Ảnh cuối phải là `.webp`, kích thước `1280x720`, nén nhẹ bằng `cwebp -q 82 -m 6` nếu có thể.
- Lưu ảnh trong `images/<parent-slug>/`, tên English kebab-case.
- Alt text chứa mô tả ảnh + keyword tự nhiên; title ngắn và cụ thể.
- Dùng `.lf-key` cho quick takeaway sau intro hoặc ảnh đầu.
- Dùng `.lf-note` cho checkpoint/action nhẹ, thường gần cuối hoặc trong section checklist.
- Không lạm dụng box: 1 `.lf-key` + 1–2 `.lf-note` là đủ cho pillar dài.
- Không chèn emoji/icon inline; icon đến từ CSS component.
- Lightbox/hover tools đã có trong `assets/js/lightbox.js`, không thay bằng link ảnh trực tiếp.

### 2. Bài CON — `_topics/{lang}/<child-slug>.md`

Front matter:
```yaml
---
lang: vi
ref: <child-slug>
title: "<tiêu đề bài con>"
description: "<meta description>"
parent_title: "<TIÊU ĐỀ BÀI MẸ — đây là anchor backlink, NÊN chứa keyword chính>"
parent_url: "/<parent-slug>/"       # VI: /vi/<parent-slug>/
seo_keywords:
  - <keyword bài con>
date: YYYY-MM-DD
---
```

Layout `topic` tự render box backlink dùng `parent_title` làm anchor. NGOÀI ra, trong body bài con
PHẢI có ít nhất 1 link inline trỏ về bài mẹ với anchor = **tiêu đề/keyword bài mẹ** (đặt cuối bài):
`Bài này nằm trong cẩm nang lớn hơn về [<parent_title>](<parent_url>).`

→ Đây là cơ chế "bài con trỏ ngược bài mẹ qua SEO keyword".

### 3. Đa ngôn ngữ

9 ngôn ngữ: `en, vi, fr, de, zh-CN, jp, it, pt, es`. **EN ở root**, còn lại prefix `/{lang}/`.
Bắt đầu viết **tiếng Việt** (`_longform/vi/`, `_topics/vi/`), sau đó EN (root) + các ngôn ngữ khác.
Mọi bản dịch của cùng 1 bài dùng chung `ref`. URL trong `child_links`/`parent_url` phải có prefix
đúng theo lang (vd VI: `/vi/...`).

### 4. UI strings

Chuỗi giao diện (nút, nhãn) ở `_data/ui.yml` theo từng lang. Khi thêm lang mới, bổ sung khối lang đó;
thiếu thì fallback `en`.

## Build & preview

```bash
cd ~/Dev/naviplus_io/longform.naviplus.io
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve --port 9999 --host 0.0.0.0
```
→ http://100.105.92.91:9999/  (EN)  ·  http://100.105.92.91:9999/vi/  (VI)

Kiểm tra: bài mẹ hiện trên trang chủ (đúng lang), `child_links` không 404, bài con có box backlink + link inline keyword về bài mẹ.

## Checklist trước khi xong

- [ ] Đã hỏi & dùng đúng SEO keyword (chính + phụ)
- [ ] Keyword chính có ở title + mở bài + ≥1 H2 + description
- [ ] Bài mẹ link tới ≥2 bài con qua `child_links`
- [ ] Mỗi bài con backlink bài mẹ qua anchor = keyword (box + inline)
- [ ] `ref` chung cho các bản dịch; URL có prefix lang đúng
- [ ] Đã áp dụng `ARTICLE_PRESENTATION_GUIDE.md`
- [ ] Bài có ảnh WebP nhẹ (`1280x720`, alt, title, figcaption)
- [ ] Pillar có ảnh map theo H2, không dồn lệch section
- [ ] Có `.lf-key` / `.lf-note` nếu bài đủ dài hoặc có checklist/action
- [ ] Lightbox ảnh + hover Zoom/Pin vẫn hoạt động
- [ ] Build sạch, không 404, preview :9999 OK

## Git / Deploy

- KHÔNG tự commit/push trừ khi user nói rõ.
- Deploy: Cloudflare Pages tự build từ source khi push lên repo `longform.naviplus.io`.
