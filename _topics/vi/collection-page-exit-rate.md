---
lang: vi
ref: collection-page-exit-rate
title: "Chỉ số 3 — Exit rate tại trang danh mục"
description: "Exit rate trang danh mục cao thường bắt nguồn từ tên menu không khớp nội dung trang. Cách đo bằng GA4 Explorations và cách rà soát, sửa menu để giữ khách."
parent_title: "Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi"
parent_url: "/vi/measuring-menu-performance/"
seo_keywords:
  - exit rate trang danh mục
  - collection page
  - GA4
date: 2026-06-02
---

Đây là chỉ số thứ ba trong loạt năm chỉ số, và nó kể một câu chuyện khác hẳn hai chỉ số trước. Nếu trước đó ta hỏi "khách có bấm vào menu không", thì giờ câu hỏi là: sau khi bấm và vào tới trang danh mục, khách đi tiếp hay rời site luôn?

Đo **exit rate trang danh mục** giúp bạn nhìn thấy đúng điểm đứt gãy đó. Khách đã chịu khó vào tới collection page mà vẫn thoát, thường không phải vì họ hết hứng mua hàng. Thường là vì cái họ thấy không khớp cái họ mong đợi khi bấm vào menu. Và rất nhiều lần, gốc rễ nằm ở chỗ ta đặt tên mục menu.

## Exit rate trang danh mục là gì

Exit rate là tỷ lệ phiên kết thúc ngay tại một trang, tính bằng số lần thoát (exits) chia cho số lượt xem (views) của trang đó. Trang nào khách xem xong rồi rời site, không xem thêm trang nào nữa, thì được tính là một exit.

Đặt vào trang danh mục, ý nghĩa rất cụ thể. Khách vào một collection page — ví dụ "Áo khoác nam" hay "Phụ kiện bếp" — rồi không bấm vào sản phẩm nào, không lọc, không qua danh mục khác, mà đóng tab. Đó là một lần thoát tại trang danh mục.

Cần phân biệt với bounce rate. Bounce là khách vào rồi đi mà không tương tác gì, thường tính cho trang khách bước chân vào đầu tiên. Exit rộng hơn: khách có thể đã xem vài trang trước đó, nhưng trang danh mục là trang cuối cùng họ thấy trước khi đi. Với trang danh mục, exit rate đáng quan tâm hơn, vì nó cho biết khách "kẹt" lại ở khâu duyệt hàng và không tiến được vào sản phẩm.

## Cách đo exit rate trang danh mục trong GA4

Có một điểm hơi vướng cần nói trước. Trong GA4, Google đã ẩn chỉ số Exits và Exit rate khỏi báo cáo chuẩn (Standard Reports). Nếu bạn mở thẳng báo cáo Pages and screens, sẽ không thấy cột Exit rate ở đó nữa. Đây là khác biệt so với Universal Analytics cũ, nên nhiều người tìm hoài không ra.

Cách lấy được là dùng Explorations (Khám phá), các bước gọn như sau:

- Vào **Explore** ở thanh bên trái, chọn báo cáo dạng **Free form** (Dạng tự do).
- Thêm dimension **Page path and screen class** (đường dẫn trang).
- Thêm hai metric: **Views** (Lượt xem) và **Exits** (Lượt thoát).
- Lọc đường dẫn theo phần URL của collection page. Trên Shopify, trang danh mục thường có dạng `/collections/...`, nên bạn lọc page path chứa `/collections/`.

GA4 không có sẵn cột Exit rate trong bảng này, nên bạn tự lấy Exits chia cho Views cho từng trang. Một danh mục có 1.000 lượt xem và 300 lượt thoát thì exit rate là 30%. Cách nhanh là xuất ra Google Sheets rồi thêm một cột chia.

Đừng quá ám ảnh con số tuyệt đối, vì mỗi ngành một khác. Việc đáng làm hơn là so các danh mục với nhau và so với mức trung bình của chính store bạn. Danh mục nào exit rate cao hẳn so với phần còn lại — đó là chỗ cần soi.

## Cách đọc: vì sao exit cao tại trang danh mục

Khi một collection page có exit rate cao bất thường, nguyên nhân thường rơi vào một trong hai nhóm.

**Nhóm một — khách vào nhầm chỗ.** Họ bấm vào một mục menu nghĩ sẽ thấy thứ A, nhưng trang lại bày thứ B. Ví dụ menu ghi "Khuyến mãi" nhưng bấm vào ra toàn hàng nguyên giá. Hoặc menu ghi "Hàng mới về" mà trang vẫn là mẫu cũ từ mùa trước. Khách không sai, họ chỉ thất vọng và rời đi. Trang danh mục lúc này gánh tiếng oan cho cái tên menu đặt sai.

**Nhóm hai — trang danh mục kém hấp dẫn hoặc khó dùng.** Đúng danh mục rồi, nhưng vào thấy lèo tèo vài sản phẩm, ảnh xấu, không lọc được theo size hay giá, hoặc trang tải chậm. Khi đó khách bị kẹt ở tầng danh mục, không đi sâu được vào trang sản phẩm — có thể do phân loại hàng lộn xộn hoặc trang trình bày rối.

Hai nhóm này đòi hỏi cách sửa khác nhau. Nhóm hai là việc của trang danh mục: sắp lại hàng, thêm bộ lọc, làm trang nhẹ hơn. Còn nhóm một — vốn rất phổ biến và hay bị bỏ qua — lại là việc của menu. Đó là chỗ tôi muốn dừng lâu hơn.

## Liên hệ với menu: tên mục không khớp nội dung trang

Trang danh mục hiếm khi tự nhiên có khách. Phần lớn lượt vào collection page đến từ một cú bấm vào menu. Nghĩa là cái tên mục menu chính là lời hứa đầu tiên bạn đưa cho khách. Trang danh mục là lúc bạn giữ hay nuốt lời hứa đó.

Khoảng cách giữa lời hứa và thực tế là nơi sinh ra exit. Vài tình huống quen thuộc với người bán Việt:

- Menu ghi "Sale 50%", khách bấm vào kỳ vọng toàn đồ giảm sâu, nhưng trang trộn cả hàng giảm 10% lẫn hàng nguyên giá.
- Menu ghi "Đồ Tết" sau Tết vẫn còn treo, bấm vào ra một trang gần như trống.
- Menu desktop và menu mobile dẫn về hai trang khác nhau, một bên có hàng một bên hết hàng.
- Tên mục dùng từ nội bộ ("BST Xuân Hè") trong khi khách quen tìm theo "Váy" hay "Áo sơ mi".

Trong mọi trường hợp, khách không làm gì sai. Họ tin vào chữ trên menu, bấm, rồi thấy không đúng và thoát. Exit rate của trang danh mục đó tăng lên, còn ta thì dễ tưởng nhầm là "trang danh mục có vấn đề" mà đi sửa nhầm chỗ.

Đáng nói thêm: chuyện thoát sớm này diễn ra trước cả giỏ hàng. Người ta hay lo tỷ lệ bỏ giỏ — theo Baymard Institute, trung bình khoảng 70% giỏ hàng bị bỏ lại. Nhưng ở tầng danh mục, khách còn chưa kịp xem sản phẩm thì đã rời đi. Đây là khâu sớm hơn, ít người để mắt tới, mà sửa lại thường rẻ và nhanh.

## Hành động: rà tên menu so với nội dung trang danh mục

Việc nên làm rất đơn giản, không cần công cụ phức tạp. Mở GA4, lọc danh sách các collection page, sắp theo exit rate giảm dần, rồi lấy ra vài danh mục đứng đầu.

Với mỗi danh mục có exit cao, tự đi lại đúng hành trình của khách:

- Tên mục menu dẫn tới trang này đang ghi gì?
- Bấm vào, trang hiện ra có đúng như cái tên hứa hẹn không?
- Số lượng sản phẩm có đủ để khách thấy "có gì để xem" không?
- Trên mobile, mục menu này nằm ở đâu, bấm vào có ra đúng trang như trên desktop không?

Nếu tên menu và nội dung trang lệch nhau, có hai hướng sửa: đổi tên mục cho khớp đúng thứ trang đang bày, hoặc giữ tên và chỉnh lại trang cho đúng kỳ vọng. Chọn hướng nào tùy ý định kinh doanh của bạn, nhưng hai thứ phải khớp.

Một mẹo nhỏ: đặt tên mục theo ngôn ngữ khách dùng, không theo ngôn ngữ nội bộ. Khách gõ "nồi chiên không dầu" chứ ít ai gõ "BST gia dụng cao cấp". Tên mục càng sát từ khách hay dùng, kỳ vọng càng dễ khớp, exit càng thấp.

Phần thao tác sửa menu thường tốn công nếu phải đụng vào code theme. Đây là lý do nhiều store dùng [Navi+](https://naviplus.io) để dựng và sửa menu bằng kéo-thả, không cần code — đổi tên mục, sắp lại thứ tự, hay trỏ một mục về đúng collection page chỉ mất vài phút. Navi+ cho cấu hình mobile và desktop riêng, nên bạn tránh được lỗi hai bên dẫn về hai trang khác nhau, và menu giữ nguyên kể cả khi đổi theme. Việc còn lại — quyết định tên nào khớp trang nào — vẫn là của bạn, vì chỉ bạn hiểu hàng của mình.

Tóm lại, exit rate cao tại trang danh mục không phải lúc nào cũng là lỗi của trang danh mục. Rất nhiều lần, nó bắt đầu từ một cái tên menu hứa một đằng làm một nẻo. Sửa cho hai thứ khớp nhau thường là cách nhanh nhất để giữ khách lại đủ lâu để họ xem được sản phẩm.

Bài viết này nằm trong cẩm nang lớn hơn về [Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi](/vi/measuring-menu-performance/).
