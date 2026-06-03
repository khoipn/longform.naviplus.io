---
lang: vi
ref: chi-so-navigation-depth
title: "Chỉ số 2 — Navigation depth (độ sâu điều hướng)"
description: "Navigation depth (độ sâu điều hướng) đo số bước từ trang chủ tới sản phẩm. Cách đo bằng GA4, mốc 2-3 bước và cách dùng mega menu, Tab Bar rút ngắn đường mua."
parent_title: "Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi"
parent_url: "/vi/do-luong-hieu-qua-menu/"
seo_keywords:
  - navigation depth
  - GA4 funnel
  - click depth
date: 2026-06-02
---

Chỉ số đầu tiên cho bạn biết khách có *bấm* vào menu hay không. Chỉ số thứ hai trả lời câu khác: một khi đã bấm, khách phải đi bao xa mới tới được thứ họ cần mua?

Đó là **navigation depth** — độ sâu điều hướng. Nói đơn giản, đây là số bước trung bình một người phải đi từ trang chủ tới trang sản phẩm. Càng ít bước, đường tới giỏ hàng càng ngắn. Càng nhiều bước, càng nhiều chỗ để khách mệt, phân tâm, rồi đóng tab.

Tôi từng có một store mà chính tôi, người dựng ra nó, vẫn phải bấm bốn lần mới tìm thấy một sản phẩm hot. Lúc đó mới giật mình: nếu chủ shop còn lạc, khách lạ làm sao không lạc.

## Navigation depth là gì, khác "khách bấm bao nhiêu trang" ra sao

Có hai thứ dễ lẫn, cần tách rõ.

Một là *số trang mỗi phiên* (pages per session) — tổng số trang khách xem, gồm cả lúc họ dạo chơi, so sánh, đọc review. Con số này cao chưa chắc xấu.

Hai là **navigation depth**, hay **click depth** — số bước *bắt buộc* để đi từ điểm A (trang chủ, hoặc một danh mục lớn) tới điểm B (trang sản phẩm). Đây là chi phí cấu trúc bạn áp lên khách, dù họ muốn hay không.

Một đường đi điển hình trên store lớn thường là: Trang chủ → Danh mục → Danh mục con → Danh mục con sâu hơn → Sản phẩm. Bốn bước. Mỗi bước thêm vào là một lần khách phải đọc, hiểu, quyết định và chờ trang tải.

## Cách đo navigation depth bằng GA4

Bạn không cần đoán. GA4 cho bạn nhìn thẳng vào đường đi thật của khách.

Có hai cách thường dùng:

- **User Explorer**: xem hành trình của từng người dùng cụ thể, từng bước một. Hợp để soi vài ca điển hình, cảm nhận khách đang lòng vòng ở đâu.
- **Path Exploration** (hoặc dựng Funnel Exploration): xem khách đi từ trang chủ → danh mục → sản phẩm → thêm giỏ theo trình tự nào. Quan trọng hơn con số, nó cho bạn thấy *chỗ rơi* — bước nào khách rụng nhiều nhất.

Path Exploration vẽ ra sơ đồ kiểu Sankey: nhánh phình to là nơi nhiều người đi qua, nhánh teo lại là ngõ cụt. Nhìn vài phút là thấy ngay khách thật đi đường nào, có trùng với đường bạn *tưởng* họ đi hay không.

Một mẹo: đừng chỉ nhìn con số trung bình. Hãy tách theo thiết bị. Mobile và desktop thường có độ sâu rất khác nhau, vì menu mobile hay bắt khách bấm nhiều lần hơn để mở từng tầng.

## Mốc tham khảo — và một lưu ý quan trọng

Theo kinh nghiệm chung, đường tới các sản phẩm chính nên gói trong **2-3 bước**. Khi đường đi thường xuyên từ năm bước trở lên, cấu trúc của bạn nhiều khả năng đã quá sâu.

Nhưng đây là chỗ cần thành thật. "Quy tắc 3 cú nhấp" nổi tiếng thực ra là một lầm tưởng. Nielsen Norman Group chỉ ra rằng nó chưa từng được dữ liệu nào chống lưng, và trong các nghiên cứu họ dẫn, tỉ lệ khách bỏ cuộc không tăng khi tác vụ vượt quá ba bước, sự hài lòng cũng không giảm. Điều khiến khách mệt không phải con số cú nhấp.

Cái làm khách mệt là *công sức* mỗi cú nhấp. Một bước với nhãn rõ ràng, đúng thứ khách mong đợi, gần như miễn phí. Một bước mơ hồ, bắt khách dừng lại đoán nên bấm đâu, mới là bước đắt.

Vậy nên hãy dùng mốc 2-3 bước như tín hiệu cảnh báo, không phải luật cứng. Độ sâu cao là dấu hiệu để bạn đi soi *vì sao* lại sâu — chứ không phải con số cần ép xuống bằng mọi giá.

## Vì sao menu lại sâu

Khi đi soi, tôi thường gặp ba thủ phạm.

**Phân cấp quá nhiều tầng.** Bạn thêm danh mục con, rồi con của con, rồi con của con của con. Mỗi tầng nghe có lý lúc thêm vào, nhưng cộng lại thành một mê cung. Theo Baymard Institute, có tới 37% website thương mại điện tử nhồi toàn bộ catalog vào trong một mục menu duy nhất (kiểu "Shop" hay "Sản phẩm") — cấu trúc này gây đủ thứ vấn đề khi khách cố đào xuống.

**Thiếu shortcut.** Không có lối tắt cho những danh mục bán chạy nhất. Khách muốn vào "Giày nam" phải lần lượt qua "Thời trang" → "Nam" → "Giày dép" → "Giày nam", dù phần lớn doanh thu của bạn nằm đúng ở đó.

**Thiếu khối nổi bật trên mega menu.** Mega menu của bạn chỉ liệt kê tên danh mục khô khan, không có khối dẫn thẳng tới bộ sưu tập đang hot, hàng mới về, hay deal trong tuần. Khách phải tự mò thay vì được mời.

## Hành động: cho khách "nhảy cóc"

Tin tốt: chữa độ sâu không khó, và thường không cần đụng tới catalog.

**Rút gọn cấu trúc.** Gộp những tầng gần như trùng nhau. Hỏi từng tầng một câu: tầng này có thật sự giúp khách thu hẹp lựa chọn, hay chỉ thêm một cửa phải mở? Nếu là cái sau, bỏ đi.

**Dùng mega menu để nhảy cóc.** Đây là điểm mấu chốt. Một mega menu tốt trải phẳng cây phân cấp ra trước mắt khách, để họ *nhảy thẳng* tới danh mục cần thay vì đi từng bước. Nielsen Norman Group ghi nhận mega menu hoạt động tốt cho điều hướng vì giúp khách *nhìn thấy* lựa chọn thay vì phải nhớ. Baymard cũng cho thấy mega menu là kiểu điều hướng phổ biến nhất ở các site bán hàng lớn, vì nhanh và dễ quét mắt.

Cụ thể với người bán Việt Nam: thay vì bắt khách lội bốn tầng tới "Áo thun nam", hãy đặt thẳng "Áo thun", "Quần jeans", "Hàng mới về", "Sale 50%" ngay trên mega menu desktop. Trên mobile, một **Tab Bar** ở đáy màn hình cho phép neo 4-5 lối tắt quan trọng nhất luôn trong tầm ngón cái — khách bấm một phát là tới, không phải mở hamburger rồi đào xuống.

Đây đúng là việc [Navi+](https://naviplus.io) sinh ra để làm: dựng Mega Menu, Tab Bar, Slide Menu bằng kéo-thả, không cần code, cấu hình mobile và desktop riêng, và cho bạn gắn khối featured collection dẫn thẳng tới bộ sưu tập đang bán chạy. Mục tiêu không phải menu đẹp hơn, mà là rút ngắn quãng đường từ trang chủ tới nút "Mua".

Một lưu ý cuối, để khỏi đi quá đà: đừng vì ám ảnh giảm bước mà nhồi tất cả vào một màn rối mắt. Mỗi lối tắt thêm vào nên có nhãn rõ và đúng ý khách. Bớt công sức, không phải chỉ bớt cú nhấp — đó mới là tinh thần của chỉ số này.

---

Bài viết này nằm trong cẩm nang lớn hơn về [Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi](/vi/do-luong-hieu-qua-menu/).
