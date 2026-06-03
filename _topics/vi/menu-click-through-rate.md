---
lang: vi
ref: menu-click-through-rate
title: "Chỉ số 1 — Click-through rate của từng menu item"
description: "CTR menu item cho biết mục menu nào được bấm nhiều, mục nào bị bỏ qua. Cách đo bằng GA4 và Clarity, cách đọc và chỉnh menu để tăng tỷ lệ click."
parent_title: "Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi"
parent_url: "/vi/measuring-menu-performance/"
seo_keywords:
  - CTR menu item
  - GA4
  - Hotjar
  - Clarity
date: 2026-06-02
---

CTR menu item là con số tôi nhìn đầu tiên mỗi khi muốn biết menu có đang làm đúng việc hay không. Nói gọn, nó cho biết trong số người thấy menu, bao nhiêu phần trăm thực sự bấm vào một mục cụ thể. Một mục nhiều người thấy nhưng ít người bấm thường đang nói với bạn điều gì đó — chỉ là bạn cần đọc cho đúng.

Bài này đi sâu vào một chỉ số: CTR của từng menu item. Cách đo, cách đọc, và quan trọng nhất là làm gì sau khi đọc.

## CTR menu item là gì

CTR (click-through rate) của một mục menu là tỷ lệ giữa số lần mục đó được bấm và số lần menu được hiển thị. Ví dụ menu hiển thị 1.000 lần trong tuần, mục "Sản phẩm mới" được bấm 80 lần, thì CTR của mục đó khoảng 8%.

Điểm hay là bạn không nhìn một con số tổng. Bạn nhìn từng mục, cạnh nhau. "Trang chủ" bao nhiêu, "Sale" bao nhiêu, "Liên hệ" bao nhiêu. Chính sự chênh lệch giữa các mục mới đáng để ý, chứ không phải con số tuyệt đối.

Tôi không quá bận tâm CTR "bao nhiêu là tốt". Mỗi shop một khác, mỗi tệp khách một khác. Cái tôi quan tâm là thứ tự: mục nào đang được dùng nhiều, mục nào gần như không ai động tới.

## Cách đo CTR của từng mục

Có vài cách, từ chính xác đến trực quan. Bạn không cần cả ba, chọn cái hợp với mình.

### Đo bằng GA4

GA4 (Google Analytics 4) là cách định lượng rõ ràng nhất. Mặc định, tính năng Enhanced Measurement chỉ tự bắt các cú click ra ngoài domain; nó không tự biết một mục trong thanh điều hướng nội bộ đã được bấm.

Để bắt click trên menu, cách phổ biến là dùng Google Tag Manager: tạo một trigger cho link click trong vùng nav, rồi gửi về GA4 một event riêng (nhiều người đặt tên là `menu_click`), kèm tham số là tên mục được bấm. Sau đó vào báo cáo Engagement > Events, bạn sẽ thấy từng mục với số lần bấm tách bạch.

Lưu ý từ kinh nghiệm: sau khi cài, dữ liệu thường mất một đến hai ngày mới hiện đầy đủ trong báo cáo, nên đừng vội kết luận trong ngày đầu. Và bạn cần biết "số người thấy menu" để tính tỷ lệ — thường lấy xấp xỉ bằng số lượt xem trang có chứa menu.

### Đo bằng Hotjar hoặc Clarity

Nếu bạn ngại đụng vào tag và code, Hotjar hoặc Microsoft Clarity cho câu trả lời bằng hình ảnh. Cả hai đều có click heatmap — bản đồ nhiệt thể hiện chỗ nào được bấm nhiều, chỗ nào nguội lạnh.

Microsoft Clarity miễn phí và dễ bắt đầu. Bạn gắn một đoạn mã, vài hôm sau mở heatmap lên là thấy vùng menu nào sáng, vùng nào tối. Với menu mobile, Clarity hiển thị được cả trạng thái menu đã mở rộng, nên xem được các mục bên trong slide menu chứ không chỉ phần thấy ngay.

Một thứ Clarity làm tốt mà GA4 không có: phân biệt "dead click" và "rage click". Dead click là khi khách bấm vào chỗ trông như bấm được nhưng không có gì xảy ra. Rage click là khi khách bấm dồn dập một chỗ vì bực. Nếu một mục menu dính nhiều dead click, rất có thể nó nhìn giống nút bấm nhưng thực ra không dẫn đi đâu — đó là vấn đề cần sửa, không phải chuyện CTR thấp đơn thuần.

Tôi hay dùng kết hợp: GA4 cho con số để so sánh theo thời gian, Clarity hoặc Hotjar để hiểu "vì sao" đằng sau con số.

## Cách đọc bảng CTR

Khi xếp các mục cạnh nhau, bức tranh thường rơi vào một dạng quen thuộc: vài mục CTR rất cao, một nhóm ở giữa, và vài mục gần như bằng 0.

Mục gần 0 không tự động là mục xấu. Nó có thể nằm ở một trong hai nhóm:

- Mục thừa: khách thật sự không cần. Ví dụ một mục "Tin tức" mà shop cả năm không đăng bài nào.
- Mục bị hiểu sai tên: khách cần nội dung đó nhưng không nhận ra mục này dẫn tới đó. Tên quá sáng tạo, hoặc dùng từ nội bộ mà khách không quen.

Cách phân biệt hai nhóm này là nhìn xem nội dung phía sau có được truy cập qua đường khác không. Nếu trang "Khuyến mãi" có lượt xem cao nhưng mục menu "Ưu đãi sốc" lại CTR thấp, khả năng cao là cái tên có vấn đề, không phải nội dung.

### Khi mục quan trọng lại có CTR thấp bất thường

Đây là trường hợp đáng dừng lại lâu nhất. Những mục như "Sale" hay "Hàng mới về" lẽ ra phải hút click. Khách vào shop bán lẻ thường tò mò xem có gì giảm giá, có gì mới. Nếu các mục này CTR thấp bất thường, hiếm khi do khách không quan tâm — thường là do vị trí đặt.

Có thể mục đang nằm cuối menu, khuất khỏi tầm nhìn. Nghiên cứu eye-tracking của Nielsen Norman Group cho thấy người dùng thường quét trang theo dạng chữ F — đọc lướt ngang phần trên rồi men theo cạnh trái xuống, bỏ qua nhiều thứ ở giữa và dưới. Một mục giá trị nhưng đặt ở góc khuất rất dễ bị mắt khách trượt qua.

Trên mobile, vấn đề còn rõ hơn. Nếu mục "Sale" nằm sâu trong hamburger menu, khách phải bấm mở menu rồi cuộn mới thấy. Mỗi bước thêm là một lần rơi rụng. Đó là lý do nhiều shop đưa thẳng "Sale" ra Tab Bar dưới đáy màn hình — luôn hiện, không phải mở gì cả.

## Hành động sau khi đọc

Đọc xong mà không đổi gì thì con số chỉ là con số. Tôi thường gom thành ba việc.

Thứ nhất, cắt bớt mục ít dùng. Menu càng dài, mỗi mục càng loãng và khách càng khó chọn. Nếu một mục CTR sát 0 suốt nhiều tuần và nội dung phía sau cũng ít người vào, mạnh dạn bỏ hoặc gộp nó vào nơi khác. Menu gọn giúp các mục còn lại nổi bật hơn.

Thứ hai, đổi tên mục không rõ. Đây là thay đổi rẻ nhất mà hiệu quả thường thấy ngay. Dùng từ khách hay dùng, không phải từ bạn thích: "Bộ sưu tập" có thể đổi thành "Sản phẩm", "Ưu đãi sốc" thành "Khuyến mãi". Sau khi đổi, theo dõi lại CTR vài tuần để xác nhận.

Thứ ba, đưa mục quan trọng lên vị trí nổi bật. Nếu "Sale" đáng ra phải mạnh mà đang yếu, hãy chuyển nó lên đầu menu desktop, hoặc đưa ra Tab Bar trên mobile. Đổi vị trí thường tác động lớn hơn nhiều người tưởng.

Phần dựng và đổi này không nhất thiết phải nhờ dev. Với một công cụ như [Navi+](https://naviplus.io), bạn kéo-thả để sắp lại thứ tự mục, đổi tên, hay tách một mục ra Tab Bar dưới đáy mobile — cấu hình mobile và desktop riêng nhau, nên bạn có thể để "Sale" nổi bật trên điện thoại mà không làm rối menu desktop. Nhờ đó vòng lặp "đọc số rồi chỉnh menu" diễn ra nhanh, bạn thử và đo lại được liên tục.

Một lưu ý cuối: đổi mỗi lần một thứ thôi. Nếu cùng lúc vừa đổi tên, vừa đổi vị trí, vừa cắt mục, sau này nhìn CTR thay đổi bạn sẽ không biết nhờ cái nào. Đổi một thứ, chờ dữ liệu, rồi mới sang thứ tiếp theo.

Bài viết này nằm trong cẩm nang lớn hơn về [Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi](/vi/measuring-menu-performance/).
