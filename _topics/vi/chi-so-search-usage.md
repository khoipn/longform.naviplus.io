---
lang: vi
ref: chi-so-search-usage
title: "Chỉ số 5 — Tỷ lệ dùng tìm kiếm nội bộ"
description: "Search usage rate là gì, cách đo bằng GA4 và đọc top search queries để đặt tên menu theo ngôn ngữ khách, giảm số lần khách phải tự tìm trên store."
parent_title: "Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi"
parent_url: "/vi/do-luong-hieu-qua-menu/"
seo_keywords:
  - search usage rate
  - view_search_results
  - top search queries
date: 2026-06-02
---

Trong loạt chỉ số đo sức khỏe menu, đây là chỉ số dễ bị bỏ qua nhất. **Search usage rate** — tỷ lệ khách dùng thanh tìm kiếm thay vì menu để đi tới thứ họ cần — kể cho bạn câu chuyện mà các chỉ số click trên menu không kể: phần khách đã âm thầm bỏ qua menu của bạn.

Thanh tìm kiếm và menu nghe như hai thứ tách biệt. Thực ra chúng là hai mặt của cùng một câu hỏi: khách có tìm thấy thứ họ cần không, và bằng cách nào?

## Search usage rate là gì

Hiểu đơn giản, đây là tỷ lệ phiên (session) có ít nhất một lần dùng tìm kiếm nội bộ, chia cho tổng số phiên. Nếu 100 người vào store và 18 người gõ vào ô tìm kiếm, search usage rate của bạn vào khoảng 18%.

Con số này không có một mức "đúng" tuyệt đối. Theo Baymard Institute, tỷ lệ khách thích tìm kiếm thay vì duyệt menu thay đổi nhiều tùy store và tùy loại hàng: một store thời trang vài trăm mẫu rất khác một store linh kiện điện tử hàng chục nghìn SKU.

Vậy nên đừng so con số của bạn với một ngưỡng chung. Hãy so với chính bạn theo thời gian, và quan trọng hơn — đọc *nội dung* khách tìm.

## Cách đo search usage rate bằng GA4

Bạn gần như không phải làm gì để bắt đầu. GA4 có tính năng Enhanced Measurement (Đo lường nâng cao), bật mặc định. Khi bật, GA4 tự phát sự kiện **view_search_results** mỗi khi khách thực hiện một lượt tìm kiếm.

Cách nó hoạt động: GA4 nhận diện tìm kiếm qua tham số trên URL trang kết quả. Mặc định nó nhận các tham số `q`, `s`, `search`, `query`, `keyword`. Nếu URL trang tìm kiếm của bạn có dạng `?q=ao-trang`, mọi thứ chạy ngay.

Trên Shopify, URL tìm kiếm mặc định dùng `?q=`, nên `view_search_results` thường tự lên số mà không cần chỉnh gì. Nếu store dùng tham số lạ, bạn chỉ cần thêm nó vào phần cấu hình data stream trong GA4.

Để xem dữ liệu, vào Reports → Engagement → Events và tìm sự kiện **view_search_results**. Mở ra, bạn sẽ thấy tham số `search_term` — chính là danh sách từ khóa khách đã gõ. Muốn tính tỷ lệ, lấy số phiên có `view_search_results` chia cho tổng số phiên trong cùng kỳ.

## Search cao không hẳn là xấu

Đây là chỗ dễ hiểu nhầm. Search usage cao đôi khi là dấu hiệu tốt. Khách mua qua tìm kiếm thường biết rõ mình muốn gì, và theo Baymard Institute, đây là nhóm có ý định mua cao. Một thanh tìm kiếm được dùng nhiều, dùng hiệu quả, là tài sản.

Vấn đề nằm ở việc khách tìm *cái gì*.

Nếu khách gõ tên một sản phẩm rất cụ thể, một mã hàng, một thương hiệu — đó là hành vi tìm kiếm lành mạnh. Menu không thể, và không nên, liệt kê từng món.

Nhưng nếu khách liên tục gõ những thứ lẽ ra phải thấy ngay trên menu — "áo trắng", "sale", "hàng mới", "new" — thì đó là tín hiệu menu chưa đủ rõ. Khách không tìm vì thích tìm. Họ đưa mắt lên menu, không thấy lối vào, rồi quay sang ô tìm kiếm như một cách thoát.

Baymard mô tả đúng hiện tượng này: nhiều truy vấn kiểu "loại sản phẩm" thực ra là khách đang cố vào một danh mục nhanh hơn, hoặc vì không tìm được danh mục đó qua menu chính. Nói cách khác, thanh tìm kiếm đang gánh việc mà menu đáng lẽ làm.

## Đọc top search queries

Đừng dừng ở con số tổng. Phần giá trị nhất nằm ở **top search queries** — danh sách từ khóa được tìm nhiều nhất, lấy từ tham số `search_term`.

Hãy in danh sách 30–50 truy vấn hàng đầu ra và đặt cạnh menu hiện tại. Rồi tự hỏi từng dòng: thứ khách gõ này đã có một lối vào rõ ràng trên menu chưa?

Có ba nhóm thường lộ ra:

- **Trùng tên danh mục đã có trên menu.** Khách gõ "đầm" trong khi menu ghi "Váy". Khách gõ "giảm giá" trong khi menu ghi "Outlet". Đây là dấu hiệu rõ nhất: danh mục *tồn tại*, nhưng tên trên menu không khớp ngôn ngữ khách dùng, nên họ không nhận ra và phải gõ tay.
- **Thứ bạn có nhưng menu không nhắc tới.** Khách gõ "quà tặng", "size lớn", "đồ đôi" — bạn có hàng cho nhóm này nhưng chưa làm thành mục riêng. Đây là gợi ý để thêm danh mục hoặc bộ lọc mới.
- **Thứ bạn không bán.** Khách gõ tên sản phẩm bạn chưa nhập về. Nhóm này không liên quan tới menu, nhưng là dữ liệu quý cho việc nhập hàng.

Nhóm đầu là nhóm đáng sửa ngay. Mỗi truy vấn trùng tên danh mục là một khách đã phải làm thêm một bước lẽ ra không cần.

## Đặt tên menu theo ngôn ngữ của khách

Kết luận rất đơn giản: đổi tên các mục menu theo cách khách gọi, không phải cách bạn — người bán — gọi.

Người bán hay đặt tên menu theo ngôn ngữ nội bộ: "Bộ sưu tập Xuân Hè", "Dòng Premium", "Nhóm A". Ta đọc thấy hợp lý vì ta sống trong cách phân loại đó. Khách thì không. Khách gõ thứ trong đầu họ: "áo cộc tay", "hàng cao cấp", "rẻ".

Quy tắc rút ra: top search queries chính là từ điển khách tự viết cho bạn. Nếu nhiều người gõ "sale", hãy cân nhắc một mục menu tên thẳng là "Sale" thay vì "Outlet" hay "Ưu đãi". Nếu nhiều người gõ "đầm", để "Đầm" lên trước hoặc thay cho "Váy".

Thử nghiệm cũng nhẹ nhàng: đổi vài nhãn, rồi theo dõi xem search usage rate cho đúng các truy vấn đó có giảm sau vài tuần không. Nếu khách ngừng phải tìm thứ giờ đã nằm sẵn trên menu, bạn biết mình sửa đúng.

Phần khó không phải kỹ thuật mà là chịu sửa nhãn. Đổi tên menu nghe nhỏ, nhưng nó chạm vào cách ta tự định nghĩa store. Một công cụ kéo-thả như [Navi+](https://naviplus.io) giúp việc này bớt ngại — bạn sửa nhãn, đổi thứ tự, thử bố cục mới trên Mega Menu hay Tab Bar mà không cần code, không sợ hỏng theme. Khi sửa nhãn rẻ, bạn sẽ chịu khó lắng nghe khách hơn.

Search usage rate, đọc đúng cách, là tiếng nói của những khách đã thử dùng menu và thấy chưa đủ. Họ vẫn ở lại và tự tìm. Việc của ta là nghe cho ra họ đang nói gì.

---

Bài viết này nằm trong cẩm nang lớn hơn về [Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi](/vi/do-luong-hieu-qua-menu/).
