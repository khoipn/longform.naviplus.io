---
lang: vi
ref: giai-doan-store-moi
title: "Giai đoạn 1 — Store mới, catalog nhỏ (dưới 50 sản phẩm)"
description: "Navigation store mới với catalog dưới 50 sản phẩm nên đơn giản: header 3-5 mục trên desktop, Tab Bar 4 nút trên mobile. Hướng dẫn và lỗi cần tránh."
parent_title: "Navigation theo từng giai đoạn phát triển của store — từ 10 đến 10.000 sản phẩm"
parent_url: "/vi/navigation-theo-giai-doan-store/"
seo_keywords:
  - navigation store mới
  - catalog nhỏ
  - tab bar cơ bản
date: 2026-06-02
---

Mỗi store đều bắt đầu từ một chỗ giống nhau: vài chục sản phẩm, một ý tưởng, và nhiều thứ chưa chắc chắn. Ở giai đoạn này, **navigation store mới** không cần phức tạp. Nó cần đúng và đủ. Phần khó không phải làm cho menu trông "đầy", mà là kìm lại để không dựng một bộ điều hướng to hơn nhu cầu thật của cửa hàng.

Bài này nói về giai đoạn đầu tiên: store mới, catalog nhỏ dưới 50 sản phẩm. Tôi sẽ mô tả đặc điểm của nó, navigation thực sự cần gì, vài lỗi lặp đi lặp lại, và một cấu hình gợi ý để bắt đầu.

## Giai đoạn này trông như thế nào

Catalog nhỏ, thường chỉ vài nhóm sản phẩm. Có khi cả store gói gọn trong "tất cả sản phẩm" mà chưa cần chia danh mục.

Traffic còn thấp và không ổn định. Khách đến từ vài bài đăng, vài lượt chia sẻ, hoặc một nhóm bạn bè. Mỗi ngày vài chục đến vài trăm lượt xem là bình thường.

Quan trọng nhất: bạn vẫn đang chạy thử. Thử mặt hàng nào bán được, thử giá, thử cách chụp ảnh, thử lời chào. Mọi thứ còn dịch chuyển. Một bộ navigation cứng nhắc, dựng kỹ từ đầu, sẽ thành gánh nặng phải sửa mỗi lần bạn đổi hướng.

Nói cách khác, đây là lúc cần sự linh hoạt hơn là sự hoàn chỉnh.

## Navigation cho store mới cần gì

Câu trả lời ngắn: đơn giản và rõ. Khách cần tìm được đường mua hàng trong vài giây, không cần một sơ đồ menu đẹp.

Trên desktop, một header gọn với 3-5 mục là đủ. Ví dụ: Sản phẩm, Giới thiệu, Liên hệ. Khách thường quét trang từ trái sang phải, trên xuống dưới, nên những mục quan trọng nhất nên nằm bên trái và hiện rõ, không giấu.

Chưa cần mega menu ở giai đoạn này. Mega menu hợp với store có nhiều danh mục con cần trải ra cùng lúc. Khi catalog còn nhỏ, mega menu sẽ trống và cồng kềnh: mở ra chỉ thấy một hai dòng lọt thỏm trong khung lớn. Nó làm store trông giả to hơn thực tế, và khách cũng không được lợi gì.

### Đừng quên mobile

Đây là phần dễ bị bỏ rơi nhất, mà lại quan trọng nhất. Với thương mại điện tử hiện nay, phần lớn lượt truy cập store đến từ điện thoại — nhiều thống kê ngành đặt con số quanh mức 70-80%. Nói cách khác, đa số khách của bạn đang nhìn store qua một màn hình nhỏ cầm trên tay.

Cách người ta cầm điện thoại quyết định chỗ nào dễ bấm. Nghiên cứu của Steven Hoober (đăng trên Smashing Magazine) cho thấy phần lớn thao tác trên di động là bằng ngón cái, và vùng dễ chạm nhất là nửa dưới màn hình — thường gọi là "thumb zone". Góc trên cùng là chỗ khó với tới nhất.

Đó là lý do một thanh điều hướng đặt ở đáy màn hình (Tab Bar) lại hợp lý: nó nằm ngay trong tầm ngón cái. Khách không phải rướn tay lên góc trên để tìm menu.

Còn hamburger menu — biểu tượng ba gạch giấu toàn bộ điều hướng phía sau — đã được Nielsen Norman Group kiểm chứng là làm khách khó nhận ra và chậm tìm thấy các mục hơn so với khi để chúng hiện sẵn. Với store nhỏ chỉ có vài mục chính, không có lý do gì phải giấu chúng đi. Một tab bar cơ bản, hiện sẵn vài nút quan trọng, sẽ phục vụ khách tốt hơn nhiều.

## Hai lỗi hay gặp

Tôi gặp hai lỗi này nhiều đến mức nghĩ chúng gần như là nghi thức bắt buộc của người mới.

**Lỗi một: làm menu phức tạp quá sớm.** Người bán nhìn các store lớn, thấy menu nhiều tầng, rồi muốn store mình cũng "chuyên nghiệp" ngay. Thế là tạo danh mục cho những thứ chưa có sản phẩm, hoặc tách một nhóm sáu món thành bốn danh mục con cho menu trông đầy.

Hệ quả là khách bấm "Phụ kiện" thấy đúng hai món, bấm "Hàng mới về" thấy trống. Trải nghiệm đó tệ hơn nhiều so với một danh mục "Tất cả sản phẩm" gọn gàng. Catalog nhỏ không phải điểm yếu cần che giấu — gom chung lại còn dễ mua hơn.

**Lỗi hai: chỉ lo desktop, bỏ quên mobile.** Người ta thường dựng store trên máy tính, ngắm trên màn hình lớn, rồi quên kiểm tra trên điện thoại. Menu desktop trông ổn, nhưng mở trên di động thì các mục dồn cục, nút bấm chen chúc, hoặc điều hướng biến mất sau một icon nhỏ ở góc.

Cách chữa đơn giản: mỗi lần chỉnh menu, mở store bằng điện thoại của chính bạn và thử mua một món như khách thật. Nếu tay bạn phải rướn hay bấm nhầm vài lần, khách cũng vậy — và họ không kiên nhẫn bằng bạn.

## Gợi ý cấu hình với Navi+

[Navi+](https://naviplus.io) cho phép cấu hình desktop và mobile riêng biệt, nên bạn không phải ép một thiết kế cho cả hai. Ở giai đoạn này, tôi gợi ý giữ thật tối giản.

Trên desktop, dựng một header đơn giản 3-5 mục. Chọn đúng những trang khách cần: danh mục sản phẩm chính, trang giới thiệu, trang liên hệ. Để dành mega menu cho lúc catalog lớn lên thật.

Trên mobile, dùng Tab Bar 4 mục cơ bản. Một bố cục an toàn và quen thuộc với khách mua hàng:

- **Home** — về trang chủ
- **Shop** — vào danh sách sản phẩm
- **Cart** — giỏ hàng, luôn trong tầm tay
- **Account** — tài khoản hoặc đăng nhập

Bốn nút này phủ gần hết việc khách cần làm. Đặt giỏ hàng ngay trên thanh đáy còn có ý nghĩa thực tế: theo Baymard Institute, tỷ lệ bỏ giỏ trung bình trong thương mại điện tử khoảng 70%, nên mọi thứ giúp khách quay lại giỏ và đi tiếp đều đáng làm. Một nút Cart luôn hiện, luôn dễ chạm, là một bước nhỏ theo hướng đó.

Một điểm nữa nên để ý từ đầu là tốc độ. Google đặt ngưỡng "tốt" cho các chỉ số Core Web Vitals: LCP dưới 2,5 giây, INP dưới 200 mili-giây, và CLS dưới 0,1. Menu là thứ tải sớm và hiện trên mọi trang, nên một menu nặng có thể kéo cả store chậm theo. Navi+ được làm để không cản các chỉ số này — đây là thói quen tốt nên giữ từ sớm, vì sửa về sau bao giờ cũng khó hơn.

Ở giai đoạn store mới, một menu đơn giản mà khách dùng được ngay luôn thắng một menu cầu kỳ mà bạn phải sửa hoài.

Vì Navi+ kéo-thả và không cần code, bạn dựng được bố cục trên trong ít phút và chỉnh lại bất cứ lúc nào khi catalog lớn lên. Menu cũng giữ nguyên khi bạn đổi theme, nên những lần thử nghiệm giao diện ở giai đoạn đầu sẽ không phá mất phần điều hướng bạn vừa dựng.

Hãy bắt đầu nhỏ. Khi store lớn lên, navigation lớn theo cũng chưa muộn.

Bài viết này nằm trong cẩm nang lớn hơn về [Navigation theo từng giai đoạn phát triển của store — từ 10 đến 10.000 sản phẩm](/vi/navigation-theo-giai-doan-store/).
