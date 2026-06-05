---
lang: vi
ref: mobile-vs-desktop-navigation-behavior
title: "Chỉ số 4 — Hành vi điều hướng mobile so với desktop"
description: "So sánh mobile vs desktop navigation: cách đo bằng GA4, dấu hiệu cảnh báo khi mobile thoát cao hơn desktop, và cách tách bố cục Tab Bar cho từng thiết bị."
image: "/images/measuring-menu-performance/mobile-desktop-navigation-behavior.webp"
image_alt: "Chỉ số 4 — Hành vi điều hướng mobile so với desktop"
parent_title: "Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi"
parent_url: "/vi/measuring-menu-performance/"
seo_keywords:
  - mobile vs desktop navigation
  - GA4 segments
  - device category
date: 2026-06-02
---

Chỉ số này hơi khác ba chỉ số trước. Thay vì nhìn một con số duy nhất, bạn nhìn cùng một con số nhưng tách theo thiết bị. Đây là lúc so sánh **mobile vs desktop navigation** — hành vi điều hướng trên điện thoại so với trên máy tính.

Tôi nhận ra điều này muộn hơn đáng lẽ nên. Ban đầu tôi xem báo cáo gộp chung, thấy số liệu menu cũng ổn nên yên tâm. Đến khi tách riêng mobile ra mới thấy một nửa lượng khách đang dùng một trải nghiệm khác hẳn những gì tôi hình dung.

## Cùng một menu, hai câu chuyện khác nhau

Khi so sánh điều hướng theo thiết bị, có ba thứ đáng nhìn nhất:

- **CTR (tỷ lệ nhấp vào menu):** bao nhiêu phần trăm khách thực sự bấm vào menu trên mỗi loại thiết bị.
- **Depth (độ sâu duyệt):** sau khi bấm, khách đi được mấy trang.
- **Exit rate (tỷ lệ thoát):** bao nhiêu khách rời đi mà gần như không làm gì.

Mấu chốt là ba con số này thường lệch nhau rõ giữa mobile và desktop. Trên desktop, menu thường nằm ngang, hiện sẵn, khách liếc một cái là thấy hết. Trên mobile, menu hay bị giấu sau nút hamburger ba gạch, phải bấm mới ra.

Sự khác biệt này không nhỏ. Theo Nielsen Norman Group, giấu điều hướng chính sau hamburger làm khả năng khách tìm thấy menu giảm gần một nửa, đồng thời khách mất nhiều thời gian hơn và thấy thao tác khó hơn. Cùng một website, nhưng người dùng desktop và người dùng mobile gần như đang đi trong hai cửa hàng khác nhau.

## Cách đo: tách theo device category trong GA4

Bạn không cần công cụ gì đặc biệt. GA4 làm được hết.

Cách đơn giản nhất là vào Explore, tạo một Free form rồi thêm **device category** làm dimension. Lúc này mỗi chỉ số hiện thành ba dòng: desktop, mobile, tablet. Bạn so trực tiếp bounce rate, engagement và số trang mỗi phiên giữa các dòng.

Muốn kỹ hơn, hãy tạo segment riêng — một segment "Mobile" và một segment "Desktop" — rồi áp cùng một báo cáo cho từng cái. Cách này tiện khi bạn muốn lồng thêm điều kiện, ví dụ chỉ xem khách vào từ quảng cáo Facebook, hoặc chỉ xem khách ở một trang danh mục cụ thể.

Một lưu ý về cách GA4 định nghĩa. Trong GA4, một phiên bị tính là "bounce" khi nó không được engaged — tức khách ở dưới 10 giây, chỉ xem một trang và không kích hoạt sự kiện quan trọng nào. Bounce rate chính là phần nghịch của engagement rate. Nắm điều này để khỏi bối rối khi đọc số.

Khi đo, đừng tập trung vào con số tuyệt đối. Hãy nhìn **khoảng cách** giữa mobile và desktop.

## Cấu hình tốt trên desktop có thể thất bại trên mobile

Đây là phần tôi muốn nhấn mạnh, vì nó dễ bị bỏ qua nhất.

Khi dựng menu, gần như chắc chắn bạn ngồi trước máy tính. Bạn xem thử trên màn hình rộng, thấy mega menu nhiều cột gọn gàng, bấm đâu cũng tiện, nên cho chạy. Vấn đề là khách của bạn phần lớn không ngồi như bạn.

Trên mobile mọi thứ đổi hết. Màn hình hẹp, ngón tay to hơn con trỏ chuột, và khách thường thao tác bằng một ngón cái khi cầm điện thoại một tay. Theo nghiên cứu thumb zone của Steven Hoober, phần lớn tương tác trên điện thoại được thực hiện bằng ngón cái, và vùng dễ chạm nhất nằm ở nửa dưới màn hình. Một menu nhồi ở góc trên cùng, chữ nhỏ, các mục sát nhau — trên desktop thì ổn, trên mobile thì khó bấm trúng.

Ví dụ gần gũi: một shop thời trang để toàn bộ danh mục trong mega menu desktop rất chi tiết — áo, quần, váy, phụ kiện, theo mùa, theo size. Đẹp. Nhưng khi xuống mobile, tất cả bị nén vào một danh sách dài lê thê trong hamburger. Khách phải bấm mở, cuộn xuống, tìm, rồi mới chạm được. Mỗi bước thừa là một cơ hội để khách bỏ đi.

Đây là lý do nên cấu hình điều hướng riêng cho từng thiết bị. Với mobile, nhiều shop chuyển sang Tab Bar — thanh điều hướng cố định dưới đáy màn hình, nằm đúng trong vùng ngón cái — cho 3-5 mục quan trọng nhất như Trang chủ, Danh mục, Tìm kiếm, Giỏ hàng. Desktop thì giữ mega menu đầy đủ. Hai bố cục cho hai bối cảnh.

## Dấu hiệu cảnh báo: mobile thoát cao hơn desktop rõ rệt

Dấu hiệu rõ nhất rất dễ thấy: bounce rate trên mobile cao hơn desktop một cách đáng kể.

Cần nói cho công bằng, mobile thoát cao hơn desktop một chút là chuyện bình thường ở khắp nơi, không riêng gì bạn. Theo các benchmark ngành, phiên mobile thường thoát quanh mức 50%, còn desktop thấp hơn — chênh lệch trung bình khoảng 10 điểm phần trăm và khá ổn định qua nhiều năm. Nên đừng hoảng chỉ vì mobile cao hơn.

Điều đáng lo là khi khoảng cách đó lớn bất thường. Nếu trên cùng những trang giống nhau mà mobile thoát cao hơn desktop tới 20 điểm hoặc hơn, đó là tín hiệu trải nghiệm mobile đang có vấn đề — và điều hướng là một trong những nghi can đầu tiên.

Một vài tín hiệu khác đáng để ý cùng lúc:

- CTR menu trên mobile thấp hơn hẳn desktop: khách không tìm thấy hoặc ngại bấm.
- Depth trên mobile nông hơn: khách vào một trang rồi tắt, không duyệt sâu.
- Trang load chậm trên mobile: menu hoặc app nặng làm chậm, khách mất kiên nhẫn. Google khuyến nghị LCP dưới 2,5 giây, INP dưới 200ms và CLS dưới 0,1; mobile thường là nơi các chỉ số này tệ nhất.

Nhớ rằng tỷ lệ bỏ giỏ trung bình vốn đã quanh 70% theo Baymard Institute. Một điều hướng mobile khó dùng chỉ làm con số đó tệ thêm.

## Hành động: tách bố cục mobile và desktop ra hai cấu hình riêng

Việc cần làm gọn trong một câu: đừng ép một menu phục vụ cả hai thế giới.

Cụ thể, sau khi xem số trong GA4:

1. Tách báo cáo theo device category, tìm những trang mà mobile thoát cao hơn desktop bất thường.
2. Mở chính những trang đó trên điện thoại thật của bạn, thử bấm menu bằng một ngón cái như khách. Bạn sẽ tự thấy chỗ vướng.
3. Thiết kế bố cục mobile riêng — ưu tiên Tab Bar ở đáy cho các mục chính, rút gọn danh sách trong hamburger, để nút đủ to để chạm.
4. Giữ desktop với mega menu đầy đủ. Hai cấu hình, không phải một.

Đây đúng là việc [Navi+](https://naviplus.io) sinh ra để làm. Bạn cấu hình mobile và desktop tách biệt: Tab Bar dưới đáy cho mobile, Mega Menu cho desktop, mỗi cái một bố cục riêng mà không đụng đến code. Menu được tối ưu để không kéo Core Web Vitals đi xuống, và giữ nguyên khi bạn đổi theme. Thao tác là kéo-thả.

Điều tôi rút ra sau cùng khá đơn giản. Bạn không cần menu hoàn hảo. Bạn chỉ cần ngừng đánh giá trải nghiệm mobile bằng con mắt của người đang ngồi trước desktop. Tách số ra theo thiết bị một lần thôi, rất có thể bạn sẽ thấy điều mình bỏ lỡ bấy lâu.

Bài viết này nằm trong cẩm nang lớn hơn về [Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi](/vi/measuring-menu-performance/).
