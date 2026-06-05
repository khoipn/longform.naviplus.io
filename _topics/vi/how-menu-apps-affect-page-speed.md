---
lang: vi
ref: how-menu-apps-affect-page-speed
title: "App menu ảnh hưởng tới tốc độ ra sao — và dấu hiệu nhận biết"
description: "Tìm hiểu app menu ảnh hưởng tốc độ tải trang ra sao, vì sao app điều hướng làm chậm store, và cách dùng PageSpeed Insights cùng DevTools để nhận biết."
image: "/images/navigation-and-page-speed/menu-app-speed-impact.webp"
image_alt: "App menu ảnh hưởng tới tốc độ ra sao — và dấu hiệu nhận biết"
parent_title: "Navigation và tốc độ tải trang — chọn app menu không ảnh hưởng Core Web Vitals"
parent_url: "/vi/navigation-and-page-speed/"
seo_keywords:
  - app menu ảnh hưởng tốc độ
  - JavaScript
  - render blocking
  - CLS
date: 2026-06-02
---

Khi store bị chậm, ta thường nghĩ ngay tới ảnh nặng hay theme cồng kềnh. Nhưng có một thứ ít người để ý: cách app menu ảnh hưởng tốc độ tải trang. Menu nằm ngay đầu trang, là thứ trình duyệt phải xử lý sớm. Một app điều hướng làm chưa khéo có thể kéo cả store đi xuống.

Bài này chia làm hai phần. Phần đầu nói về cơ chế: vì sao app menu làm chậm. Phần sau là dấu hiệu nhận biết, để bạn tự kiểm tra store thay vì đoán mò.

## Vì sao app menu ảnh hưởng tốc độ store

Nhìn bề ngoài, app menu chỉ là vài nút bấm. Nhưng phía sau, nó thường kéo theo JavaScript, font, icon và ảnh. Mỗi thứ đều có cái giá về tốc độ. Dưới đây là bốn nguyên nhân hay gặp nhất.

### JavaScript nặng phải xử lý trước khi hiện menu

Nhiều app menu dựng giao diện bằng JavaScript. Khi khách mở trang, trình duyệt phải tải file về, đọc (parse) rồi chạy (execute), sau đó menu mới hiện ra.

JavaScript càng nặng thì bước này càng lâu. Trên máy tính mạnh, bạn không cảm nhận rõ. Nhưng phần lớn khách mua hàng bằng điện thoại, và điện thoại tầm trung xử lý JavaScript chậm hơn nhiều. Một file vài trăm KB trên desktop chỉ tốn tích tắc, nhưng trên một chiếc Android giá rẻ có thể mất cả giây.

Với store bán hàng, một giây đó là khoảng thời gian khách nhìn màn hình trống, chưa có menu để bấm.

### Render blocking: app chặn cả trang trong khi chờ menu

Điểm này hay bị bỏ qua. Theo tài liệu của Google, JavaScript mặc định là parser-blocking: đang dựng trang mà gặp thẻ script, trình duyệt phải dừng lại chạy script đó xong rồi mới dựng tiếp.

Hiện tượng này gọi là render blocking. Một app menu đặt script ở vị trí xấu và không dùng thuộc tính `async` hay `defer` có thể chặn việc hiển thị của cả trang, chứ không riêng cái menu.

Hậu quả thực tế: khách bấm vào link sản phẩm nhưng trang đứng hình một lúc vì đang chờ script menu chạy xong. Họ chưa thấy ảnh, chưa thấy giá, chưa thấy gì cả. Trong khi thứ thực sự cần tải nhanh là nội dung bán hàng, không phải thanh menu.

### Mỗi icon, font, ảnh là một HTTP request

Menu đẹp thường đi kèm icon bộ font riêng, đôi khi cả ảnh nền hoặc logo cho từng mục. Mỗi tài nguyên là một HTTP request — một lượt trình duyệt hỏi xin server gửi file về.

Mỗi request đều mất thời gian thiết lập kết nối và chờ phản hồi. Mười icon là mười lượt. Thêm một font riêng cho menu nữa là thành danh sách dài. Từng cái nhỏ, nhưng gộp lại thấy rõ, nhất là khi khách dùng mạng 3G/4G yếu ở vùng sóng kém.

Một menu gọn, dùng icon SVG nội tuyến hoặc font hệ thống có sẵn, sẽ cắt được kha khá số request này.

### CLS: menu load muộn làm xê dịch layout

CLS (Cumulative Layout Shift) là một trong các chỉ số Core Web Vitals của Google, đo mức độ giao diện bị xê dịch khi tải. Theo Google, ngưỡng tốt là CLS dưới 0,1.

Cũng theo Google, CLS thường xảy ra khi nội dung được JavaScript chèn vào trang muộn, đẩy những phần đang có dịch xuống. Một thanh menu hoặc banner điều hướng load sau phần nội dung chính là ví dụ điển hình: nó xuất hiện, chiếm chỗ, và đẩy mọi thứ phía dưới dịch xuống.

Bạn hẳn từng gặp cảnh này khi mua hàng: định bấm "Thêm vào giỏ", nhưng đúng lúc đó menu nhảy ra, layout xê dịch, và bạn bấm nhầm sang chỗ khác. Đó chính là CLS — vừa khó chịu vừa khiến khách dễ bỏ đi.

## Dấu hiệu menu đang làm chậm store

Hiểu cơ chế rồi, giờ là phần thực hành: làm sao biết app menu của bạn có đang gây vấn đề. Không cần kiến thức kỹ thuật sâu, chỉ cần vài công cụ miễn phí.

### Chạy PageSpeed Insights

Vào pagespeed.web.dev, dán địa chỉ store rồi nhấn phân tích. Công cụ này của Google chấm điểm trang và liệt kê vấn đề ở hai mục Opportunities (cơ hội cải thiện) và Diagnostics (chẩn đoán).

Chú ý các dòng nhắc tới render-blocking resources hay reduce JavaScript execution time. Nếu tên file hay mô tả có dính tới navigation, menu, drawer thì khả năng cao app menu đang góp phần làm chậm.

Nên chạy cả hai chế độ Mobile và Desktop. Điểm Mobile thường thấp hơn và sát trải nghiệm thật của khách hơn, vì đa số mua bằng điện thoại.

### Dùng tab Network trong Chrome DevTools

Mở store trên Chrome, nhấn F12 để bật DevTools, chọn tab Network. Tải lại trang, rồi lọc theo loại JS để chỉ xem file JavaScript.

Bảng hiện ra cho biết mỗi file nặng bao nhiêu và tốn bao lâu. Tìm những file mang tên giống app navigation của bạn. Nếu một file menu nặng vài trăm KB và mất khá lâu mới tải xong, đó là bằng chứng cụ thể chứ không còn là phỏng đoán.

Mẹo nhỏ: DevTools có tùy chọn giả lập mạng chậm (throttling) và CPU yếu. Bật lên để mô phỏng máy khách thật, bạn sẽ thấy con số sát thực tế hơn nhiều so với máy của mình.

### So sánh điểm trước và sau khi cài app

Cách trung thực nhất là đo trước và đo sau. Trước khi cài app menu mới, chạy PageSpeed Insights và ghi lại điểm cùng các chỉ số LCP, INP, CLS. Cài app, dựng menu xong thì chạy lại và so sánh.

Theo Google, ngưỡng tốt là LCP dưới 2,5 giây, INP dưới 200 mili-giây, CLS dưới 0,1. Nếu sau khi cài app mà LCP tăng hay CLS vọt qua 0,1, app đó đang phải trả giá bằng tốc độ.

Điều này đáng bận tâm, vì store trung bình không chỉ có một app. Theo dữ liệu được nhiều nguồn dẫn lại, một cửa hàng Shopify thường cài khoảng sáu app, có store dùng tới ba mươi. Mỗi app cộng thêm một chút độ ì, gộp lại thành con số không nhỏ. Mà tốc độ liên quan trực tiếp tới tỷ lệ rời trang — trong bối cảnh tỷ lệ bỏ giỏ trung bình đã quanh mức 70% theo Baymard Institute, mọi giây kéo dài đều có thể làm con số đó tệ hơn.

## Chọn app menu có để ý tới tốc độ

Không phải app menu nào cũng làm chậm. Vấn đề nằm ở chỗ app có được dựng với ý thức về tốc độ hay không: JavaScript gọn, không chặn render, ít request thừa, và chừa sẵn chỗ cho menu để tránh nhảy layout.

Đây là tiêu chí chúng tôi đặt lên hàng đầu khi làm [Navi+](https://naviplus.io). Navi+ dựng menu không cần code cho Shopify và mọi website — Tab Bar, Mega Menu, Slide Menu, FAB, Grid Menu — với cấu hình mobile và desktop riêng, và được tối ưu để không kéo Core Web Vitals đi xuống. Bạn vẫn nên tự đo theo các bước ở trên trước và sau khi cài; đó là cách kiểm chứng đáng tin nhất.

Tựu chung, app menu là một phần của trải nghiệm, nhưng đừng để nó âm thầm làm chậm cả store. Vài phút chạy PageSpeed Insights và xem tab Network sẽ cho bạn câu trả lời rõ ràng.

Bài viết này nằm trong cẩm nang lớn hơn về [Navigation và tốc độ tải trang — chọn app menu không ảnh hưởng Core Web Vitals](/vi/navigation-and-page-speed/).
