---
lang: vi
ref: menu-app-installation-checklist
title: "Checklist trước khi cài bất kỳ app menu nào"
description: "Checklist cài app menu cho store Shopify: bốn bước đo PageSpeed và Core Web Vitals trước và sau khi cài, để chọn app không làm chậm trang trên mobile lẫn desktop."
image: "/images/navigation-and-page-speed/menu-app-installation-checklist.webp"
image_alt: "Checklist trước khi cài bất kỳ app menu nào"
parent_title: "Navigation và tốc độ tải trang — chọn app menu không ảnh hưởng Core Web Vitals"
parent_url: "/vi/navigation-and-page-speed/"
seo_keywords:
  - checklist cài app menu
  - PageSpeed Insights
  - Search Console
date: 2026-06-02
---

Trước khi bấm nút "Add app" cho bất kỳ app menu nào, có một việc nhỏ rất đáng làm: ghi lại tình trạng tốc độ store của bạn ngay lúc này. Nghe đơn giản, nhưng đây là phần mọi người hay bỏ qua, để rồi vài tuần sau thấy trang chậm đi mà không biết app nào gây ra.

Bài này là một **checklist cài app menu** ngắn, làm theo được ngay, đúc rút từ chuyện vận hành store thật. Không có gì cao siêu, chỉ là vài bước đo trước — đo sau, để bạn không cài menu đẹp rồi vô tình đánh đổi bằng tốc độ. Cài càng nhiều app thì thói quen này càng đáng giá, vì mỗi app thêm vào đều có thể chạm tới tốc độ trang.

## Vì sao tốc độ đáng để bạn bận tâm

Khách mua hàng online vốn đã rất dễ rời đi. Theo Baymard Institute, tỷ lệ bỏ giỏ hàng trung bình quanh mức 70% và con số này gần như không đổi suốt hơn một thập kỷ. Mỗi giây tải thêm, mỗi lần layout nhảy khi trang đang load, là thêm một lý do để khách thoát.

Google cũng dùng tốc độ và độ ổn định trang như một yếu tố trải nghiệm, gom lại trong bộ chỉ số Core Web Vitals. Ba con số chính, theo Google:

- LCP (thời gian tải nội dung lớn nhất): tốt khi dưới 2,5 giây.
- INP (độ phản hồi khi khách tương tác): tốt khi dưới 200 mili giây.
- CLS (độ ổn định bố cục, trang có nhảy không): tốt khi dưới 0,1.

Bạn không cần thuộc lòng. Chỉ cần nhớ: một app menu được làm cẩn thận sẽ không khiến ba con số này tệ đi đáng kể. Checklist dưới đây giúp bạn kiểm chứng điều đó bằng số liệu, thay vì cảm tính.

## Checklist cài app menu: bốn bước đo trước — đo sau

Đây là phần ruột của bài. Bốn bước, làm theo thứ tự.

### Bước 1: Đo điểm PageSpeed của store trước khi cài

Mở [PageSpeed Insights](https://pagespeed.web.dev) của Google, dán URL trang chủ và một trang sản phẩm tiêu biểu, rồi chạy đo. Ghi lại điểm số — chụp màn hình hoặc lưu vào một file nhỏ.

Tại sao phải lưu? Vì nếu không có "ảnh chụp trước", bạn sẽ chẳng có gì để so. Vài tuần sau thấy trang chậm, bạn không biết là do app menu, do app review mới cài, hay do bộ ảnh sản phẩm bạn vừa thêm.

PageSpeed Insights cho bạn hai loại dữ liệu. Phần trên là dữ liệu thực địa từ người dùng thật (field data, lấy từ Chrome User Experience Report); phần dưới là dữ liệu phòng lab (lab data, máy Google giả lập một lần tải). Ở bước này, cứ ghi cả điểm tổng và ba chỉ số LCP, INP, CLS là đủ.

### Bước 2: Cài app, đo lại, so sánh

Cài app menu bạn định dùng, rồi dựng đúng cấu hình thật của bạn — tức là bật những loại menu bạn sẽ dùng: Tab Bar dưới đáy mobile, Mega Menu cho desktop, hay Slide Menu — chứ không để mặc định rồi đo.

Sau đó chạy lại PageSpeed Insights trên đúng những URL ở Bước 1. Đặt hai kết quả cạnh nhau.

Một lưu ý: ngay sau khi cài, dữ liệu thực địa (phần trên) thường chưa kịp thay đổi, vì nó gom số trong 28 ngày gần nhất. Cái bạn so được ngay là dữ liệu phòng lab. Đừng hoảng nếu điểm lab tụt vài điểm — quan trọng là mức độ. Tụt 2-3 điểm thường không đáng ngại; tụt nhiều, hoặc CLS đột nhiên nhảy lên (trang giật khi menu xuất hiện), thì cần xem lại.

### Bước 3: Kiểm tra Core Web Vitals trên Search Console sau 1-2 tuần

Đây là bước cho con số thật, vì nó đo trên trải nghiệm của khách thật. Mở [Google Search Console](https://search.google.com/search-console), vào mục Core Web Vitals (Trải nghiệm trên trang). Báo cáo này dùng dữ liệu thực địa từ chính người dùng của bạn.

Vì sao chờ 1-2 tuần? Dữ liệu thực địa được tính theo cửa sổ trượt 28 ngày. Sau khoảng hai tuần, một phần đáng kể của cửa sổ đã là dữ liệu mới — đủ để bạn thấy xu hướng. Trên Search Console, để ý số URL chuyển từ "Tốt" sang "Cần cải thiện" hoặc "Kém". Nếu nhóm URL xấu đi phình ra ngay sau khi bạn cài app menu, đó là tín hiệu.

Nếu store của bạn còn ít lượt truy cập, Search Console có thể chưa đủ dữ liệu để hiện báo cáo. Khi đó, cứ dựa vào PageSpeed Insights và dữ liệu lab là chính.

### Bước 4: Điểm giảm đáng kể thì đổi app hoặc chỉnh cấu hình

Nếu sau khi đo, các chỉ số rõ ràng tệ đi, bạn có hai hướng.

Một là tối ưu cấu hình: tắt bớt hiệu ứng động không cần thiết, giảm số mục trong một Mega Menu quá lớn, bỏ những ảnh nặng nhồi vào menu. Nhiều khi vấn đề không nằm ở app mà ở cách mình dựng menu quá tham.

Hai là đổi app, nếu bản thân app nặng và không có cách nào ghì lại. Một app menu tốt phải coi tốc độ là việc của nó, không đẩy phần đó sang cho bạn.

## Đừng quên đo trên mobile

Phần lớn người bán Việt Nam có lượng khách vào bằng điện thoại cao hơn desktop — khách lướt Facebook, bấm vào link, mở store ngay trên di động.

Điểm số trên mobile gần như luôn thấp hơn desktop, vì máy điện thoại yếu hơn và mạng di động không ổn định bằng wifi. Trong PageSpeed Insights, nhớ bấm sang tab Mobile để đo, đừng chỉ nhìn điểm Desktop cho đẹp.

Điều này đặc biệt quan trọng với menu mobile. Một Tab Bar dưới đáy màn hình hay một Slide Menu làm ẩu có thể khiến trang giật (đẩy CLS lên) đúng lúc khách vừa mở store. Hãy mở thử store bằng chính điện thoại của bạn, để ý khi trang load có chỗ nào nhảy hay khựng không. Mắt thường nhiều khi bắt được thứ mà điểm số chưa kịp phản ánh.

## Một lời nhắc nhẹ

Checklist trên không phải để dọa bạn tránh app menu — điều hướng tốt giúp khách tìm hàng nhanh hơn, và đó là điều đáng đầu tư. Ý ở đây là: hãy chọn app có ý thức về tốc độ.

[Navi+](https://naviplus.io) được dựng theo đúng tinh thần đó: công cụ tạo menu không cần code, kéo thả, làm Tab Bar, Mega Menu, Slide Menu, FAB và Grid Menu; cho cấu hình mobile và desktop riêng; và được tối ưu để không kéo tụt Core Web Vitals. Dù vậy, lời khuyên thành thật vẫn là: cứ chạy bốn bước đo trên với bất kỳ app nào, kể cả Navi+, để bạn tự yên tâm bằng số liệu của chính store mình.

Bài viết này nằm trong cẩm nang lớn hơn về [Navigation và tốc độ tải trang — chọn app menu không ảnh hưởng Core Web Vitals](/vi/navigation-and-page-speed/).
