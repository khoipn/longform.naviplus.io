# Article Presentation Guide — longform.naviplus.io

Guide này là nguồn chuẩn để làm đẹp bài viết long-form trên `longform.naviplus.io`.
Claude, ChatGPT, Codex hoặc workflow tạo bài mới phải dùng guide này cùng với `CLAUDE.md`.

---

## 1. Mục tiêu trình bày

Bài viết phải đọc như editorial SaaS/ecommerce content, không phải plain Markdown.

Mỗi bài cần có:

- nhịp đọc rõ: intro → quick takeaway → H2 sections → deep-dive links → action/checkpoint;
- nhấn nhá vừa phải bằng `strong`, underline link, line H2, icon component;
- ảnh minh họa đúng section, nhẹ, có SEO metadata;
- box nhẹ để tóm tắt/action, nhưng không lạm dụng;
- lightbox ảnh hoạt động như popup overlay giữa màn hình.

Không biến bài thành landing page, không nhồi card, không dồn quá nhiều decoration vào cùng một đoạn.

---

## 2. Visual Rhythm

### H2

`assets/css/style.css` tự thêm line + marker icon cho `.lf-prose h2`.

Không thêm divider thủ công như `<hr>` trước H2. Không thêm emoji vào heading.

### Bold và underline

CSS đã làm:

- `strong` có highlight nhẹ;
- link có underline rõ hơn và hover state;
- `.lf-readmore` có icon mũi tên bằng CSS.

Khi viết nội dung:

- chỉ bold keyword, insight hoặc phrase thật sự quan trọng;
- tránh bold cả câu dài hoặc cả đoạn;
- mỗi đoạn thường chỉ 0–1 cụm bold là đủ;
- link anchor phải tự nhiên và có giá trị SEO.

### Line và spacing

Không chèn line thủ công trong Markdown. H2 line, figure background, readmore border, box border đều do CSS xử lý.

---

## 3. Box Components

Các component dùng trong body bài viết:

### `.lf-key`

Dùng cho quick takeaway, thường đặt sau intro hoặc sau ảnh đầu.

Ví dụ:

```html
<div class="lf-key">
  <span class="lf-key-title">Quick read</span>
  <ul>
    <li>Navigation is the first product-discovery step.</li>
    <li>Mobile reach decides whether shoppers keep going.</li>
    <li>Better menu types reduce taps before the cart.</li>
  </ul>
</div>
```

Quy tắc:

- dùng 1 lần/bài là đủ trong đa số trường hợp;
- 3 bullet là đẹp nhất, tối đa 4;
- mỗi bullet ngắn, không viết thành đoạn;
- dịch nội dung box theo từng ngôn ngữ, không để English trong bài dịch nếu box là nội dung đọc chính.

### `.lf-note`

Dùng cho checkpoint/action nhẹ, thường đặt gần cuối section hoặc trong phần “Where to start”.

Ví dụ:

```html
<p class="lf-note"><span class="lf-note-title">Simple audit</span>Open the store on your phone, pick one product, and count how many taps it takes to reach it.</p>
```

Quy tắc:

- pillar dài: 1–2 `.lf-note`;
- topic ngắn: 0–1 `.lf-note`;
- nội dung phải action-oriented hoặc decision-oriented;
- không dùng `.lf-note` để lặp lại caption ảnh.

### `.lf-readmore`

Dùng ở cuối mỗi H2 topic để link sang bài con.

Ví dụ:

```html
<p class="lf-readmore"><span class="lf-readmore-kicker">Deep-dive</span><a href="/topic/how-shoppers-behave-on-ecommerce/">Read the full guide → How shoppers really behave on an ecommerce store</a></p>
```

Quy tắc:

- mỗi H2 topic chính của pillar nên có đúng 1 readmore;
- không đặt ảnh bên trong `.lf-readmore`;
- ảnh minh họa cho H2 nên đặt ngay sau readmore hoặc sau nội dung chính của section, nhưng không chen giữa paragraph làm gãy ý.

---

## 4. Image System

### Số lượng ảnh

Mỗi bài phải có ít nhất 1 ảnh.

Pillar dài nên có 4–6 ảnh. Quy tắc ưu tiên:

- 1 ảnh cho mỗi H2 chính;
- không dồn 2 ảnh liên tiếp vào cùng một chủ đề nếu H2 khác chưa có ảnh;
- nếu có section “Where to start” hoặc checklist, ảnh audit/checklist nằm trong chính section đó, không đặt trước H2 làm người đọc tưởng thuộc section trước;
- topic/child article ngắn có thể dùng 1–2 ảnh.

### Vị trí ảnh

Với pillar:

1. Intro có thể có `.lf-key`, nhưng ảnh đầu nên map vào H2 đầu tiên nếu bài có nhiều H2.
2. Sau mỗi H2 chính: đặt ảnh sau phần nội dung hoặc sau `.lf-readmore`.
3. Với section checklist/action: đặt ảnh sau bullet list, trước note/action paragraph.

Không đặt nhiều figure liên tiếp nếu không có lý do biên tập rõ.

### Markup ảnh

Luôn dùng `<figure>`:

```html
<figure>
  <img src="/images/topic-slug/image-topic.webp" alt="SEO-friendly alt text" title="Short SEO title">
  <figcaption>Short caption explaining why this image matters.</figcaption>
</figure>
```

Quy tắc:

- `src`: project-local path trong `/images/{article-slug}/`;
- `alt`: mô tả ảnh + keyword tự nhiên;
- `title`: ngắn, cụ thể, không spam keyword;
- `figcaption`: giải thích insight, không mô tả lặp lại từng pixel;
- English text trong ảnh là OK dùng chung cho mọi ngôn ngữ; caption trong body nên dịch theo ngôn ngữ nếu muốn polished.

### File ảnh

- Format cuối: `.webp`.
- Kích thước visual: `1280x720`, horizontal 16:9.
- Dung lượng mục tiêu: dưới 250 KB; nếu có thể 50–100 KB là tốt.
- Dùng `cwebp -q 82 -m 6` làm default compression.
- Tên file: English kebab-case theo ý chính, ví dụ `mobile-navigation-thumb-zone.webp`.
- Không commit PNG tạm hoặc source generated image nếu chỉ dùng WebP.

### Style ảnh

Ảnh nên cùng visual series:

- clean modern vector illustration;
- warm off-white background;
- large editorial headline on the left;
- deep navy typography;
- coral red cho problem/friction;
- bright blue cho UI/action;
- teal/green cho solved/success/thumb-zone;
- pale blue-gray UI cards;
- rounded device frames;
- simple ecommerce product cards;
- soft shadows;
- dotted paths/arrows/callouts;
- tiny bottom-right watermark: `@Navi+ AI Menu Builder | naviplus.io`.

Không dùng:

- photorealism;
- 3D/isometric 3D;
- dark theme;
- stock photo;
- dashboard collage;
- tiny unreadable text;
- combined multi-panel preview;
- nhiều ảnh trong một canvas.

### Prompt workflow cho ảnh

1. Đọc bài.
2. Chọn số ảnh theo H2/section, tối thiểu 1.
3. Liệt kê concept trước khi generate:

```text
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

4. Generate từng ảnh riêng, không gộp.
5. Copy vào `/images/{article-slug}/`.
6. Resize nếu cần về `1280x720`.
7. Nén WebP.
8. Chèn vào đúng H2/section.
9. Build verify.

---

## 5. Lightbox và Hover Tools

Lightbox nằm ở `assets/js/lightbox.js` và style ở `assets/css/style.css`.

Yêu cầu hành vi:

- click ảnh hoặc nút `Zoom` mở popup overlay giữa màn hình;
- không scroll người đọc xuống cuối trang;
- không focus vào element gây nhảy scroll;
- khóa body tại scroll position hiện tại khi mở;
- click nền tối hoặc nút close để đóng;
- phím `Escape` đóng popup;
- hover ảnh có toolbar:
  - `Zoom`: mở lightbox;
  - `Pin`: mở Pinterest create pin với URL bài + URL ảnh.

Không thay lightbox thành anchor link tới ảnh trừ khi user yêu cầu.

---

## 6. Checklist Khi Làm Bài

Trước khi coi một bài là xong:

- [ ] Bài có ít nhất 1 ảnh.
- [ ] Pillar có ảnh phân bổ theo H2, không dồn lệch section.
- [ ] Ảnh là WebP, 1280x720, nhẹ cho SEO.
- [ ] Mỗi ảnh có `alt`, `title`, `figcaption`.
- [ ] Có `.lf-key` nếu bài dài cần quick takeaway.
- [ ] Có `.lf-note` nếu bài có action/checkpoint.
- [ ] Bold/link dùng vừa phải, không lạm dụng.
- [ ] Không chèn emoji/icon inline vào body; icon đến từ CSS component.
- [ ] Click ảnh mở popup overlay giữa màn hình.
- [ ] Hover ảnh có Zoom/Pin.
- [ ] `bundle exec jekyll build` pass.

---

## 7. Reference Implementation

Bài mẫu hiện tại:

- `_longform/en/why-shoppers-dont-buy.md`
- các bản dịch cùng slug trong `_longform/{lang}/why-shoppers-dont-buy.md`
- ảnh trong `images/why-shoppers-dont-buy/`
- prompt trong `image-prompts/why-shoppers-dont-buy.md`

Khi clone sang bài khác, dùng bài này làm reference về nhịp trình bày, không copy nguyên nội dung/caption nếu không phù hợp section.
