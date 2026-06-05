---
lang: vi
ref: measuring-menu-performance
order: 3
title: "Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi"
description: "Đo lường hiệu quả menu qua 5 chỉ số thực tế: CTR, độ sâu điều hướng, exit rate, hành vi mobile và tìm kiếm nội bộ, đo bằng GA4 và Clarity miễn phí."
topic_tag: "Đo lường"
hero_color: "#1c7ed6"
read_time: 7
seo_keywords:
  - đo lường hiệu quả menu
  - GA4
  - chỉ số navigation
  - phân tích menu
date: 2026-06-02
child_links:
  - title: "Chỉ số 1 — Click-through rate của từng menu item"
    url: "/vi/topic/menu-click-through-rate/"
    desc: "Mục nào được bấm, mục nào bị bỏ quên."
  - title: "Chỉ số 2 — Navigation depth (độ sâu điều hướng)"
    url: "/vi/topic/navigation-depth-metric/"
    desc: "Khách phải qua bao nhiêu bước để tới sản phẩm."
  - title: "Chỉ số 3 — Exit rate tại trang danh mục"
    url: "/vi/topic/collection-page-exit-rate/"
    desc: "Khách tới danh mục rồi rời đi, không vào sản phẩm."
  - title: "Chỉ số 4 — Hành vi điều hướng mobile so với desktop"
    url: "/vi/topic/mobile-vs-desktop-navigation-behavior/"
    desc: "Cùng một menu, hai thế giới khác nhau."
  - title: "Chỉ số 5 — Tỷ lệ dùng tìm kiếm nội bộ"
    url: "/vi/topic/internal-search-usage-rate/"
    desc: "Khi khách tìm kiếm thứ lẽ ra menu phải lo."
---

Hầu hết chúng ta đánh giá menu bằng cảm tính. Trông gọn gàng, đủ mục, khách không kêu ca — vậy là ổn. Nhưng có một điều ít ai để ý: khách hiếm khi phàn nàn về menu khó dùng. Họ không nhắn tin góp ý. Họ chỉ lặng lẽ tìm một lúc, không thấy thứ cần, rồi đóng tab.

Muốn biết menu có thật sự làm tốt việc của nó hay không, cảm quan là chưa đủ. Bạn cần nhìn vào hành vi thật của khách: họ bấm gì, đi sâu tới đâu, dừng lại ở đâu. Đó chính là **đo lường hiệu quả menu** — thay vì đoán, bạn để dữ liệu nói. Tin tốt là bạn không cần làm chuyên gia analytics. Năm chỉ số dưới đây đủ để bắt đầu, và phần lớn đều có sẵn trong các công cụ miễn phí như GA4 hay Microsoft Clarity.

Bài này đi qua từng chỉ số: nó là gì, vì sao đáng quan tâm, và đọc nó thế nào để biết menu đang giúp hay đang cản khách.

<div class="lf-key">
  <span class="lf-key-title">Đọc nhanh</span>
  <ul>
    <li>Hiệu quả menu có thể đo được mà không cần analytics phức tạp.</li>
    <li>Năm chỉ số cho biết khách click, dừng lại hoặc tìm kiếm ở đâu.</li>
    <li>Sửa một vấn đề rõ nhất trước, rồi chờ dữ liệu mới.</li>
  </ul>
</div>

## Chỉ số 1 — Click-through rate của từng menu item

Click-through rate (CTR) của một mục menu là tỷ lệ người nhìn thấy mục đó và thực sự bấm vào. Đây là chỉ số đơn giản nhất nhưng hé lộ nhiều nhất, vì nó cho biết từng mục đang "kéo" được bao nhiêu sự chú ý.

Khi nhìn CTR của cả menu cùng lúc, bạn thường thấy một bức tranh không cân đối. Vài mục được bấm rất nhiều, vài mục gần như chẳng ai chạm tới. Một mục có lượt bấm gần bằng không không hẳn là vô dụng — có thể nó nằm sai chỗ, đặt tên khó hiểu, hoặc bị các mục khác che lấp.

Vài câu hỏi đáng tự hỏi khi đọc CTR:

- Mục quan trọng nhất với doanh thu có nằm trong nhóm được bấm nhiều không?
- Có mục nào bạn nghĩ là "phụ" lại được bấm nhiều bất ngờ? Có thể khách cần nó hơn bạn tưởng.
- Có mục nào gần như chết, nhưng vẫn chiếm chỗ đẹp trên thanh menu?

Trong GA4, bạn theo dõi việc này bằng sự kiện click gắn vào từng liên kết menu. Nếu ngại phần kỹ thuật, Microsoft Clarity có heatmap cho thấy chỗ nào được bấm nhiều chỉ bằng màu sắc.

CTR còn là cách tốt để thử nghiệm. Đổi tên một mục, đổi thứ tự, hoặc gộp hai mục lại — rồi xem con số nhúc nhích thế nào sau một hai tuần. Cách đọc và diễn giải CTR cho từng tình huống cụ thể, chúng tôi nói kỹ hơn trong bài riêng.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/menu-click-through-rate/">Xem bài đầy đủ → Chỉ số 1 — Click-through rate của từng menu item</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-click-through-rate.webp" alt="Menu click-through rate heatmap showing which ecommerce navigation items shoppers use" title="Menu click-through rate for ecommerce navigation">
  <figcaption>CTR shows which menu items pull attention and which ones quietly get ignored.</figcaption>
</figure>

## Chỉ số 2 — Navigation depth (độ sâu điều hướng)

Navigation depth đo xem khách phải bấm bao nhiêu lần để tới được thứ họ cần. Một sản phẩm cách trang chủ một cú bấm thì dễ tìm. Cách bốn cú bấm thì phần lớn khách bỏ cuộc trước khi tới.

Đây là chỗ menu lặng lẽ làm hỏng việc bán hàng. Bạn có thể có đúng sản phẩm khách muốn, giá tốt, ảnh đẹp — nhưng nếu nó bị chôn quá sâu, khách không bao giờ nhìn thấy. Mỗi lớp bấm thêm là một lần khách có cơ hội phân tâm, đổi ý, hoặc đóng trang.

Trong báo cáo hành trình của GA4, bạn nhìn được các đường đi phổ biến từ trang chủ. Nếu khách phải qua nhiều bước lòng vòng mới tới trang danh mục chính, đó là tín hiệu menu đang bắt họ làm việc quá sức.

Một mẹo thực tế: liệt kê năm trang quan trọng nhất với doanh thu, rồi tự bấm từ trang chủ xem mất mấy lần. Nếu quá ba lần, có thể bạn đang giấu chúng quá kỹ. Những loại menu như Mega Menu trên desktop hay Tab Bar dưới đáy màn hình mobile tồn tại chính là để rút ngắn quãng đường này — đưa các mục quan trọng lên ngay tầm tay khách. Cách đo và kéo độ sâu xuống một cách hợp lý, chúng tôi bàn tiếp trong bài riêng.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/navigation-depth-metric/">Xem bài đầy đủ → Chỉ số 2 — Navigation depth (độ sâu điều hướng)</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/navigation-depth-click-path.webp" alt="Navigation depth click path showing how many steps shoppers need to reach products" title="Navigation depth click path metric">
  <figcaption>Navigation depth reveals how many clicks stand between shoppers and the products they want.</figcaption>
</figure>

## Chỉ số 3 — Exit rate tại trang danh mục

Exit rate cho biết tỷ lệ phiên truy cập kết thúc tại một trang cụ thể, bất kể khách tới đó bằng đường nào. Khác với bounce rate (chỉ tính trang vào đầu tiên), exit rate áp dụng cho mọi trang trong phiên — nên rất hợp để soi các trang danh mục.

Vì sao trang danh mục đáng quan tâm? Vì khách tới được đó nghĩa là họ đã có ý định. Họ bấm vào "Giày nam" hay "Đồ bếp" vì họ muốn xem nhóm đó. Nếu phần lớn lại thoát ngay tại đây mà không vào sản phẩm nào, có gì đó không khớp giữa cái họ mong đợi và cái họ thấy.

Vài lý do thường gặp khiến exit rate trang danh mục cao:

- Tên mục menu hứa một đằng, nội dung trang một nẻo.
- Trang bày quá nhiều thứ, khách không biết nhìn vào đâu.
- Thiếu bộ lọc, khách không thu hẹp được lựa chọn.
- Trang tải chậm. Theo Google, ngưỡng "tốt" cho thời gian hiển thị nội dung chính (LCP) là dưới 2,5 giây; chậm hơn nhiều thì khách rời đi trước cả khi trang xong.

Một lưu ý khi đọc: exit rate cao không phải lúc nào cũng xấu. Có những trang vốn là điểm dừng tự nhiên. Nhưng với trang danh mục — nơi lẽ ra khách phải đi tiếp vào sản phẩm — con số cao thường đáng xem lại. Cách phân biệt exit rate "bình thường" và exit rate "báo động", chúng tôi đào sâu trong bài riêng.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/collection-page-exit-rate/">Xem bài đầy đủ → Chỉ số 3 — Exit rate tại trang danh mục</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/category-page-exit-rate.webp" alt="Category page exit rate showing shoppers leaving before viewing ecommerce products" title="Category page exit rate for menu performance">
  <figcaption>High category exits warn that shoppers reached a section but did not continue to products.</figcaption>
</figure>

## Chỉ số 4 — Hành vi điều hướng mobile so với desktop

Đây là chỉ số nhiều người bỏ qua, và thường phải trả giá. Lý do đơn giản: phần lớn khách giờ vào bằng điện thoại. Thống kê ngành cho thấy thiết bị di động chiếm phần lớn lượt truy cập của các website thương mại điện tử — tùy nguồn và khu vực, con số dao động khá rộng, nhưng nhìn chung mobile đã vượt desktop từ lâu.

Vấn đề là menu trông ổn trên màn hình laptop có thể rất khó dùng trên điện thoại. Mega Menu nhiều cột không thể nhồi nguyên vào màn hình dọc. Menu hamburger giấu mọi thứ sau một biểu tượng — khách phải bấm mới thấy. Nielsen Norman Group đã chỉ ra rằng nội dung giấu sau hamburger được phát hiện và sử dụng ít hơn so với khi để hiện ra: việc ẩn điều hướng chính làm khả năng khách tìm thấy nó giảm gần một nửa.

Cách đọc dễ nhất là tách số liệu theo thiết bị. Trong GA4 bạn so sánh hai nhóm cạnh nhau:

| Điều cần so | Câu hỏi đặt ra |
| --- | --- |
| CTR menu mobile vs desktop | Cùng một mục, mobile có bị bấm ít hơn hẳn không? |
| Độ sâu điều hướng | Khách mobile có phải bấm nhiều hơn để tới đích? |
| Tỷ lệ chuyển đổi theo thiết bị | Mobile tụt lại xa so với desktop ở chỗ nào? |

Nếu mobile tụt lại rõ rệt, rất có thể nút bấm quá nhỏ, nằm ngoài vùng ngón cái với tới, hoặc các mục quan trọng bị chôn sâu sau menu trượt. Đây là lý do nhiều store dùng Tab Bar cố định dưới đáy màn hình cho mobile và Mega Menu cho desktop — hai bố cục khác nhau cho hai cách dùng khác nhau. Công cụ như [Navi+](https://naviplus.io) cho phép cấu hình mobile và desktop riêng biệt mà không cần code, nên bạn không phải ép một thiết kế vừa cả hai. Cách so sánh và xử lý chênh lệch giữa hai nền tảng, chúng tôi viết riêng một bài.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/mobile-vs-desktop-navigation-behavior/">Xem bài đầy đủ → Chỉ số 4 — Hành vi điều hướng mobile so với desktop</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/mobile-desktop-navigation-behavior.webp" alt="Mobile and desktop navigation behavior comparison for ecommerce menu performance" title="Mobile versus desktop navigation behavior">
  <figcaption>Mobile and desktop shoppers often need different navigation layouts and separate measurement.</figcaption>
</figure>

## Chỉ số 5 — Tỷ lệ dùng tìm kiếm nội bộ

Chỉ số cuối cùng nghe có vẻ không liên quan tới menu, nhưng thực ra nó là tấm gương phản chiếu menu rõ nhất. Tỷ lệ dùng tìm kiếm nội bộ là phần trăm khách dùng ô tìm kiếm trên site thay vì bấm qua menu.

Một chút tìm kiếm là bình thường, thậm chí tốt — khách dùng tìm kiếm thường có ý định mua cao hơn, vì họ đang chủ động đi tìm một thứ cụ thể. Nhưng nếu tỷ lệ này tăng vọt, đó thường là dấu hiệu menu không dẫn được khách tới nơi họ cần. Họ bỏ menu vì menu không giúp được, và quay sang gõ chữ.

Đáng nói hơn là điều xảy ra sau cú tìm kiếm. Nghiên cứu của Baymard Institute cho thấy tìm kiếm nội bộ trên một tỷ lệ lớn site thương mại điện tử hoạt động dưới mức chấp nhận được. Nghĩa là khi menu đẩy khách sang ô tìm kiếm, bạn đang đặt cược vào một công cụ vốn cũng hay làm khách thất vọng.

Trong GA4, nếu bật theo dõi site search, bạn xem được khách tìm những từ gì. Danh sách đó là vàng. Nếu nhiều người gõ tên một danh mục mà bạn đã có sẵn trong menu, rất có thể mục đó đang nằm sai chỗ hoặc đặt tên khó tìm.

Hãy đọc tìm kiếm nội bộ như lời than phiền lịch sự của khách: "Tôi không tìm thấy thứ này trong menu của anh." Cách khai thác từ khóa tìm kiếm để vá lại menu, chúng tôi nói kỹ trong bài riêng.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/internal-search-usage-rate/">Xem bài đầy đủ → Chỉ số 5 — Tỷ lệ dùng tìm kiếm nội bộ</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/internal-search-menu-gaps.webp" alt="Internal search usage rate revealing ecommerce menu gaps and missing categories" title="Internal search usage reveals menu gaps">
  <figcaption>Search terms act like quiet complaints about categories shoppers could not find in the menu.</figcaption>
</figure>

## Bắt đầu từ đâu

Năm chỉ số nghe có vẻ nhiều, nhưng bạn không cần làm tất cả cùng lúc. Nếu mới bắt đầu, thứ tự gợi ý như sau:

1. Bật GA4 và bật theo dõi site search — gần như không tốn công, cho bạn ngay chỉ số 5 và một phần chỉ số 2, 3.
2. Cài Microsoft Clarity để có heatmap, phục vụ chỉ số 1 và nhìn nhanh hành vi mobile.
3. Sau hai tuần, ngồi lại nhìn số liệu một lượt, ghi ra hai ba điều bất thường.

<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-performance-starting-checklist.webp" alt="Menu performance starting checklist with GA4 heatmaps and two week review" title="Menu performance starting checklist">
  <figcaption>GA4, heatmaps, and a two-week review are enough to start improving menu performance.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">Bắt đầu nhỏ</span>Bật GA4 site search, thêm heatmap, rồi xem lại số liệu sau hai tuần.</p>

Đừng cố tối ưu mọi thứ trong một lần. Chọn một chỉ số rõ ràng nhất, sửa một thứ, rồi đợi dữ liệu mới. Menu là thứ điều chỉnh dần, không phải làm một lần xong là quên.

Một điểm cần nhớ khi chỉnh sửa: mỗi lần đổi menu, đừng làm trang chậm đi. Theo Google, các ngưỡng Core Web Vitals "tốt" gồm LCP dưới 2,5 giây, INP dưới 200 mili giây và CLS dưới 0,1. Một menu đẹp nhưng làm trang giật, nhảy layout khi tải thì lợi bất cập hại.

## Khép lại

<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-performance-quarterly-review.webp" alt="Quarterly ecommerce menu performance review with fresh shopper behavior data" title="Quarterly menu performance review">
  <figcaption>A quarterly review keeps the menu aligned with new categories and real shopper behavior.</figcaption>
</figure>
Số liệu không phải để chấm điểm hay phán xét bạn. Nó chỉ giúp bạn thấy khách đang vướng ở đâu — điều mà mắt thường và cảm giác khó nhận ra. Một menu tốt không cần hoàn hảo ngay từ đầu; nó cần được sửa dần dựa trên những gì khách thật sự làm.

Một gợi ý nhẹ nhàng: xem lại menu mỗi ba tháng, hoặc mỗi khi bạn thêm một danh mục mới. Cách khởi động đỡ áp lực nhất là bật GA4 hoặc cài Microsoft Clarity ngay hôm nay, để đó hai tuần, rồi quay lại nhìn menu của mình bằng con mắt của dữ liệu. Bạn sẽ ngạc nhiên với những gì khách đã âm thầm nói mà bạn chưa từng nghe.
