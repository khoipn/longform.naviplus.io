---
lang: vi
ref: core-web-vitals-explained
title: "Core Web Vitals là gì và vì sao bạn cần quan tâm"
description: "Core Web Vitals là gì? Giải thích LCP, CLS, INP bằng ngôn ngữ đời thường, kèm ngưỡng tốt của Google và lý do ba chỉ số này ảnh hưởng tới SEO, doanh thu store."
image: "/images/navigation-and-page-speed/core-web-vitals-menu-app.webp"
image_alt: "Core Web Vitals là gì và vì sao bạn cần quan tâm"
parent_title: "Navigation và tốc độ tải trang — chọn app menu không ảnh hưởng Core Web Vitals"
parent_url: "/vi/navigation-and-page-speed/"
seo_keywords:
  - Core Web Vitals
  - LCP
  - INP
  - CLS
  - SEO
date: 2026-06-02
---

Khi mới bán hàng online, tôi nghĩ tốc độ trang là chuyện của lập trình viên. Cho đến khi store của tôi tụt hạng tìm kiếm dù nội dung không đổi. Lúc đó tôi mới ngồi học lại từ đầu. Hóa ra Google có một bộ ba chỉ số đo trải nghiệm thật của khách, gọi là **Core Web Vitals**. Hiểu ba con số này không khó, và nó cho bạn biết store của mình đang nhanh hay chậm trong mắt khách — và trong mắt Google.

Bài này tôi giải thích ba chỉ số bằng ngôn ngữ đời thường, kèm ngưỡng "tốt" Google công bố, rồi nói vì sao chúng liên quan tới thứ hạng và doanh thu.

## Core Web Vitals là gì

Hiểu đơn giản, Core Web Vitals là ba thước đo Google dùng để chấm một trang web tải nhanh và mượt tới đâu khi khách thật sử dụng. Không đo trên máy phòng lab lý tưởng, mà đo trên điện thoại và mạng thật của người vào store bạn.

Ba chỉ số đó là LCP (trang hiện ra nhanh không), CLS (bố cục có nhảy lung tung không) và INP (bấm vào có phản hồi liền không). Mỗi cái ứng với một cảm giác cụ thể của khách khi họ mở trang.

Google chấm điểm dựa trên phân vị thứ 75 — tức 75% lượt truy cập — và tách riêng mobile với desktop. Nói nôm na: phải có đa số khách thấy trang ổn thì mới tính là "tốt", chứ không phải vài lượt may mắn.

## LCP — trang hiện ra nhanh hay chậm

LCP là Largest Contentful Paint, tức thời điểm phần tử lớn nhất trên màn hình hiện ra. Thường đó là ảnh banner đầu trang, ảnh sản phẩm chính hoặc khối tiêu đề lớn. Khi khách thấy thứ đó, họ mới có cảm giác trang đã tải xong.

Theo Google, ngưỡng tốt là dưới 2,5 giây. Trên 4 giây bị coi là kém. Khoảng giữa là "cần cải thiện".

Hình dung khách bấm link sản phẩm từ một quảng cáo Facebook, đứng giữa đường chờ màn hình trắng. Mỗi giây trôi qua là một phần khả năng họ thoát ra. Với store thời trang hay mỹ phẩm — nơi ảnh thường nặng — LCP là chỗ dễ chậm nhất.

Mấy thứ hay kéo LCP xuống: ảnh quá nặng chưa nén, quá nhiều app chạy nền khi mở trang, hoặc theme tải đủ thứ không cần thiết trước khi hiện nội dung chính.

## CLS — bố cục có bị nhảy không

CLS là Cumulative Layout Shift, đo mức độ các phần tử bị xê dịch trong lúc tải. Theo Google, ngưỡng tốt là dưới 0,1.

Đây là cái khó chịu ai cũng từng gặp. Bạn đang định bấm "Thêm vào giỏ", thì một banner hoặc ảnh load chậm chèn vào, đẩy nút xuống, ngón tay bấm trượt sang chỗ khác. Đôi khi bấm nhầm vào quảng cáo. Đó chính là layout shift.

Menu là một thủ phạm quen thuộc. Nếu thanh điều hướng tải sau phần nội dung, nó có thể đẩy mọi thứ phía dưới dịch xuống đúng lúc khách đang đọc hoặc đang bấm. Khách không gọi tên được cảm giác đó, nhưng họ thấy trang lộn xộn và mất tin tưởng.

Cách giảm CLS thường là chừa sẵn chỗ cho ảnh, banner và menu, để khi chúng load thì lấp vào đúng ô đã dành, không xô đẩy phần còn lại. Khi chọn app menu, hãy ưu tiên loại không làm nội dung nhảy khi nó hiện ra.

## INP — bấm vào có phản hồi liền không

INP là Interaction to Next Paint, đo độ trễ từ lúc khách tương tác (bấm, chạm, gõ phím) đến lúc màn hình phản hồi. Theo Google, ngưỡng tốt là dưới 200 mili-giây.

Một chi tiết đáng nhớ: INP chính thức thay FID (First Input Delay) trong bộ Core Web Vitals từ ngày 12 tháng 3 năm 2024, theo Google. Lý do là FID chỉ đo lần tương tác đầu tiên, còn INP theo dõi toàn bộ tương tác trong cả phiên — sát thực tế hơn. Nếu bạn đọc tài liệu cũ còn nhắc FID, thì con số cần quan tâm bây giờ là INP.

INP gắn chặt với cảm giác "trang này có nặng không". Khách mở menu hamburger trên điện thoại, bấm một cái, nửa giây sau menu mới bung ra. Trong nửa giây đó họ tưởng máy treo, bấm thêm lần nữa, rồi bực mình. Menu càng nhiều mã chạy nền, độ trễ này càng tệ.

Đây là lúc tôi để ý kỹ tới app menu mình cài. Tôi chuyển sang Navi+ ([naviplus.io](https://naviplus.io)) một phần vì nó được tối ưu để không làm chậm trang. Với menu Tab Bar dưới đáy mobile hay Slide Menu, độ phản hồi khi khách chạm ảnh hưởng trực tiếp tới INP, nên một app nhẹ giúp con số này dễ thở hơn.

## Vì sao bạn cần quan tâm tới Core Web Vitals: SEO và doanh thu

Câu hỏi thẳng: ba con số này có đáng bận tâm không, hay chỉ là chuyện kỹ thuật?

Đáng. Google đã xác nhận trải nghiệm trang (page experience), trong đó có Core Web Vitals, là một yếu tố xếp hạng. Nó không phải yếu tố quan trọng nhất — nội dung tốt vẫn là gốc — nhưng khi hai trang có nội dung ngang nhau, tốc độ có thể là yếu tố giúp Google chọn trang nào lên trên. Store chậm thì dễ thua trang nhanh hơn ở đúng những từ khóa bạn đang cạnh tranh.

Hệ quả dây chuyền khá đơn giản: store chậm thì hạng thấp hơn, hạng thấp thì ít traffic tự nhiên hơn, ít traffic thì ít đơn. Với người bán dựa nhiều vào SEO thay vì chạy quảng cáo, đây là nguồn khách miễn phí mà bạn không muốn để rò rỉ.

Tốc độ không chỉ ảnh hưởng thứ hạng, nó ảnh hưởng cả tỷ lệ chốt đơn. Tỷ lệ bỏ giỏ hàng trung bình trong thương mại điện tử vào khoảng 70%, theo Baymard Institute (con số tổng hợp từ 50 nghiên cứu). Có nhiều nguyên nhân, nhưng một trang tải lâu hay giật cục chắc chắn không giúp ích. Khách đã vào tới giỏ hàng mà còn phải chờ, phải bấm trượt vì layout nhảy, thì xác suất họ rời đi cao hơn.

Điều an ủi là ba chỉ số này đo được và cải thiện được. Bạn không cần đoán mò. Vào Google Search Console hoặc PageSpeed Insights, nhập đường dẫn store, công cụ sẽ chỉ ra LCP, INP, CLS đang ở mức nào và đỏ ở đâu.

Một thứ tự thực tế cho người bận:

- Xem ảnh có đang quá nặng không (ảnh hưởng LCP).
- Rà các app đã cài, tìm cái chạy nhiều mã nền (ảnh hưởng INP).
- Kiểm tra menu và banner có làm nội dung nhảy khi load không (ảnh hưởng CLS).

Nhiều store cài chồng chất app theo thời gian, và menu lại xuất hiện trên mọi trang — nên một app điều hướng nhẹ, không xô đẩy bố cục, là khoản đầu tư đáng cân nhắc.

Bạn không cần biến mình thành kỹ sư. Chỉ cần hiểu ba con số nói lên điều gì về cảm giác của khách, kiểm tra định kỳ, và khi chọn công cụ — nhất là app menu xuất hiện ở mọi trang — thì để ý xem nó có làm chậm store của bạn không.

Bài viết này nằm trong cẩm nang lớn hơn về [Navigation và tốc độ tải trang — chọn app menu không ảnh hưởng Core Web Vitals](/vi/navigation-and-page-speed/).
