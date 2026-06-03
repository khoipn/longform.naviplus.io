---
lang: vi
ref: navigation-toc-do-tai-trang
order: 5
title: "Navigation và tốc độ tải trang — chọn app menu không ảnh hưởng Core Web Vitals"
description: "Cách chọn app menu Core Web Vitals không làm chậm store Shopify: hiểu LCP, INP, CLS, tiêu chí app nhanh và checklist tự đo trước khi cài, không cần code."
topic_tag: "Tốc độ"
hero_color: "#9c36b5"
read_time: 6
seo_keywords:
  - app menu Core Web Vitals
  - tốc độ tải trang
  - page speed
  - Built for Shopify
date: 2026-06-02
child_links:
  - title: "Core Web Vitals là gì và vì sao bạn cần quan tâm"
    url: "/vi/topic/core-web-vitals-la-gi/"
    desc: "LCP, INP, CLS — ba con số Google nhìn vào."
  - title: "App menu ảnh hưởng tới tốc độ ra sao — và dấu hiệu nhận biết"
    url: "/vi/topic/app-menu-anh-huong-toc-do/"
    desc: "JavaScript nặng, render-blocking, layout shift."
  - title: "Tiêu chí đánh giá một app menu tốt về tốc độ"
    url: "/vi/topic/tieu-chi-app-menu-nhanh/"
    desc: "Năm điều nên kiểm tra trước khi tin một app."
  - title: "Checklist trước khi cài bất kỳ app menu nào"
    url: "/vi/topic/checklist-cai-app-menu/"
    desc: "Đo trước, đo sau, theo dõi vài tuần."
---

Mỗi app bạn cài thêm vào store đều chèn một ít code vào trang. App menu là một trong những thứ tải sớm nhất, vì khách cần thấy điều hướng ngay khi trang vừa mở. Vì vậy mối quan hệ giữa **app menu** và **Core Web Vitals** không phải chuyện kỹ thuật xa vời — nó chạm trực tiếp vào ấn tượng đầu tiên của khách.

Điều dễ bị bỏ qua: một menu đẹp nhưng load chậm đôi khi còn hại hơn không có gì. Khách không thấy code; họ chỉ thấy trang giật, nội dung nhảy chỗ, hoặc bấm vào menu mà không có phản hồi. Bài này gom lại những gì tôi rút ra sau khi tự vận hành store và đo đạc nhiều lần — không phải để dọa bạn về tốc độ, mà để bạn có đủ căn cứ chọn một app menu mà không phải đánh đổi trải nghiệm.

## Core Web Vitals là gì và vì sao bạn cần quan tâm

Core Web Vitals là bộ ba chỉ số Google dùng để đo trải nghiệm tải trang thực tế. Không phải điểm phòng thí nghiệm, mà là dữ liệu thu từ chính khách của bạn.

Ba chỉ số đó là:

- **LCP (Largest Contentful Paint)** — thời gian phần nội dung lớn nhất hiện ra. Google xem mức tốt là từ 2,5 giây trở xuống.
- **INP (Interaction to Next Paint)** — độ trễ khi khách bấm hoặc chạm. Mức tốt là dưới 200 mili giây.
- **CLS (Cumulative Layout Shift)** — mức độ nội dung nhảy chỗ khi trang đang tải. Mức tốt là dưới 0,1.

Một chi tiết hay bị hiểu nhầm: Google đánh giá ở phân vị thứ 75. Nghĩa là 75% lượt truy cập phải đạt mức tốt thì trang mới được tính là đạt. Trung bình đẹp không cứu được bạn nếu một phần tư khách có trải nghiệm tệ.

Vì sao một merchant nên quan tâm? Hai lý do. Thứ nhất, đây là một tín hiệu xếp hạng của Google, dù không phải tín hiệu lớn nhất. Thứ hai, và quan trọng hơn, nó phản ánh cảm giác thật của khách. Mọi điểm ma sát nhỏ ở đầu phễu — kể cả một trang tải chậm — đều cộng dồn lại.

Tin tốt là bạn không cần biết code để đọc ba con số này. Chúng có sẵn, miễn phí, và giải thích khá rõ ràng.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/core-web-vitals-la-gi/">Xem bài đầy đủ → Core Web Vitals là gì và vì sao bạn cần quan tâm</a></p>

## App menu ảnh hưởng tới tốc độ ra sao — và dấu hiệu nhận biết

Phần lớn app trên Shopify hoạt động bằng cách chèn JavaScript vào storefront. App menu cũng vậy. Bản thân việc đó không xấu — vấn đề nằm ở cách đoạn code được nạp và thời điểm nó chạy.

Khi một script được nạp theo kiểu chặn hiển thị (render-blocking), trình duyệt phải tải, đọc và chạy xong nó rồi mới dựng tiếp phần còn lại của trang. App menu nằm đúng nhóm dễ gây ảnh hưởng vì nó cần xuất hiện sớm, ngay đầu trang.

Có ba cách một app menu làm chậm hoặc làm xấu trải nghiệm:

- **Kéo LCP lên cao** khi menu là phần lớn ở đầu trang và phải chờ script chạy xong mới hiện.
- **Tăng INP** khi mỗi cú chạm vào menu phải đợi JavaScript xử lý, gây cảm giác trễ.
- **Đẩy CLS lên** khi menu (đặc biệt thanh trên cùng hoặc tab bar dưới đáy) xuất hiện trễ và đẩy nội dung khác nhảy chỗ.

Dấu hiệu nhận biết bằng mắt thường, không cần công cụ:

- Menu hiện trễ hơn phần thân trang một nhịp rõ rệt.
- Trang nhích hoặc giật một cái ngay khi menu xuất hiện.
- Bấm vào menu rồi phải chờ một nhịp mới mở.
- Trên mobile, tab bar dưới đáy chớp tắt hoặc nhảy vị trí lúc tải.

Thấy những dấu hiệu này không có nghĩa app menu là thủ phạm duy nhất — nhưng nó đáng để bạn đo trước và sau khi gỡ.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/app-menu-anh-huong-toc-do/">Xem bài đầy đủ → App menu ảnh hưởng tới tốc độ ra sao — và dấu hiệu nhận biết</a></p>

## Tiêu chí đánh giá một app menu tốt về tốc độ

Khi đã hiểu app menu tác động ra sao, việc chọn app trở nên dễ hơn. Dưới đây là những tiêu chí tôi thấy đáng cân nhắc, xếp gần với mức độ quan trọng.

**Tải nhẹ và không chặn hiển thị.** App nên nạp code theo kiểu defer hoặc async, để menu không bắt trang phải chờ. Bạn khó kiểm tra điều này trực tiếp, nhưng kết quả phản ánh ở điểm tốc độ trước và sau khi cài.

**Giữ chỗ ổn định, không gây nhảy layout.** Một app menu tốt nên đặt sẵn vùng cho menu để CLS không tăng. Đây là điểm rất hay bị bỏ sót, đặc biệt với tab bar cố định và thanh điều hướng dính trên đầu.

**Có badge Built for Shopify.** Đây là một chỉ dấu đáng tin. Để đạt badge **Built for Shopify**, app không được làm điểm Lighthouse của storefront giảm quá mười điểm, theo yêu cầu công bố của Shopify. Nó không đảm bảo hoàn hảo, nhưng cho thấy app đã qua một ngưỡng tối thiểu về tốc độ trang.

**Cấu hình mobile và desktop riêng.** Một menu nhẹ nhưng sai ngữ cảnh vẫn không tốt. Khả năng đặt tab bar cho mobile và mega menu cho desktop giúp bạn không phải nhồi mọi thứ vào một thiết kế.

**Ổn định khi đổi theme.** Nếu menu được lưu độc lập với theme, bạn không phải dựng lại mỗi lần đổi giao diện — và tránh được rủi ro phát sinh code thừa khi chuyển đổi.

Đối chiếu nhanh giữa một app menu "nặng" điển hình và một app được tối ưu:

| Khía cạnh | App ít chú trọng tốc độ | App tối ưu cho tốc độ |
|---|---|---|
| Cách nạp code | Chặn hiển thị | Defer / async |
| Ảnh hưởng CLS | Hay nhảy layout | Giữ chỗ ổn định |
| Built for Shopify | Thường không có | Có badge |
| Cấu hình thiết bị | Một thiết kế chung | Mobile và desktop riêng |

Navi+ được xây theo hướng này: dựng menu không cần code, có cấu hình mobile và desktop riêng, menu giữ nguyên khi đổi theme, và app đạt badge Built for Shopify. Bạn có thể tham khảo tại [naviplus.io](https://naviplus.io). Dù vậy, tôi vẫn khuyên bạn tự đo trên store của mình thay vì tin lời quảng cáo — kể cả của chúng tôi.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/tieu-chi-app-menu-nhanh/">Xem bài đầy đủ → Tiêu chí đánh giá một app menu tốt về tốc độ</a></p>

## Checklist trước khi cài bất kỳ app menu nào

Phần này là những bước thực tế, làm được trong khoảng mười lăm phút và không cần kỹ năng kỹ thuật.

1. **Đo điểm gốc trước.** Mở PageSpeed Insights, dán URL trang chủ và một trang sản phẩm, ghi lại LCP, INP, CLS hiện tại. Đây là mốc để so sánh.
2. **Cài app menu ở chế độ thử.** Phần lớn app có bản dùng thử. Dựng menu như bạn định dùng thật, đừng cấu hình sơ sài.
3. **Đo lại cùng các trang đó.** So sánh ba chỉ số với mốc gốc. Chênh lệch nhỏ là bình thường; chênh lệch lớn ở CLS hoặc LCP là tín hiệu cần xem lại.
4. **Kiểm tra bằng mắt trên điện thoại thật.** Tải trang trên 4G nếu có thể. Để ý menu có hiện trễ, có nhảy layout, có trễ khi chạm không.
5. **Xem badge và đánh giá.** Ưu tiên app có Built for Shopify và phần đánh giá nhắc tới tốc độ một cách cụ thể.
6. **Gỡ sạch nếu không dùng.** Nếu quyết định không giữ, hãy chắc app gỡ hết code đã chèn, rồi đo lại lần nữa để xác nhận điểm trở về mốc gốc.

Một lưu ý về thói quen: đừng cài nhiều app menu cùng lúc để so sánh. Code của chúng có thể chồng lên nhau và làm sai lệch số đo. Thử lần lượt, gỡ sạch trước khi thử cái tiếp theo.

<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/checklist-cai-app-menu/">Xem bài đầy đủ → Checklist trước khi cài bất kỳ app menu nào</a></p>

## Một góc nhìn về điều hướng, không chỉ tốc độ

Tốc độ quan trọng, nhưng nó phục vụ một mục tiêu lớn hơn: giúp khách tìm thấy thứ họ cần. Một menu nhanh mà giấu hết điều hướng cũng không giải quyết được gì.

Nghiên cứu của Nielsen Norman Group trên 179 người dùng cho thấy việc giấu điều hướng làm giảm khả năng khám phá gần một nửa, đồng thời khiến khách thao tác chậm hơn và thấy việc tìm khó hơn. Bài học rút ra khá đơn giản: nếu không buộc phải giấu, đừng giấu.

Đây là lý do trên mobile, tab bar dưới đáy thường hiệu quả hơn menu hamburger thuần túy — các mục chính luôn nằm trong tầm với, không phải mở ra mới thấy. Tốc độ và điều hướng tốt đi cùng nhau; chọn app menu là chọn cả hai cùng lúc.

## Bắt đầu từ đâu

Tốc độ không phải vấn đề chỉ của lập trình viên. Là merchant, bạn hoàn toàn có thể tự kiểm tra và ra quyết định có căn cứ. Bạn không cần đọc một dòng code nào để biết một app menu có làm chậm store hay không — chỉ cần biết nhìn vào đâu.

Một công cụ miễn phí như PageSpeed Insights là đủ để bắt đầu. Đo điểm store của bạn hôm nay, lưu lại làm mốc, rồi so sánh sau khi thử một app menu mới. Con số sẽ nói cho bạn nhiều hơn bất kỳ lời quảng cáo nào — kể cả của những người viết bài này.
