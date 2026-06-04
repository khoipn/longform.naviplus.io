export const meta = {
  name: 'build-longform-vi',
  description: 'Viết 6 bài long-form Navi+ (tiếng Việt, pillar+cluster) cho longform.naviplus.io',
  phases: [
    { title: 'Write', detail: 'nghiên cứu + viết nháp từng bài' },
    { title: 'Refine', detail: 'biên tập + hoàn thiện từng bài' },
  ],
}

const DATE = '2026-06-02'

const NAVI = `Navi+ (https://naviplus.io) là công cụ dựng menu/điều hướng KHÔNG CẦN CODE, dùng AI, cho Shopify và mọi website. Các loại menu Navi+ tạo: Tab Bar (thanh điều hướng dưới đáy mobile), Mega Menu (desktop), Slide/Hamburger Menu, FAB (nút hành động nổi), Grid Menu. Đặc điểm: cấu hình mobile và desktop riêng; menu giữ nguyên khi đổi theme; tối ưu để không làm chậm trang (quan tâm Core Web Vitals); kéo-thả, không cần code; đạt ~4.7 sao trên Shopify App Store và có badge "Built for Shopify". Đây là các bài marketing cho Navi+ nên việc nhắc tới Navi+ là HỢP LỆ và mong muốn — nhưng hãy nhắc TỰ NHIÊN, đúng chỗ (1-3 lần/bài), nêu đúng tính năng thật, link tới https://naviplus.io. Cuối mỗi bài layout đã tự render một khối CTA Navi+, nên KHÔNG cần tự viết thêm CTA.`

const STYLE = `VĂN PHONG: tiếng Việt tự nhiên, nhã nhặn, khiêm tốn — giọng một người từng vận hành store và đúc rút lại, không phán xét, không lên gân. Ngôn ngữ ĐƠN GIẢN, dễ hiểu, KHÔNG phô diễn, KHÔNG sáo rỗng (tránh "thời đại 4.0", "bùng nổ", "đột phá"). Câu ngắn, đoạn ngắn (2-4 câu). HẠN CHẾ trang trí: dùng ## (H2) và ### (H3) khi cần; dùng danh sách gạch đầu dòng đúng như outline; CHỈ dùng bảng Markdown khi thật sự cần so sánh; KHÔNG dùng khối callout màu mè (không dùng class lf-key), KHÔNG chèn hình. Tối đa một câu blockquote (>) nếu thật đắt giá, có thể bỏ qua. Không lặp ý. KHÔNG lặp tiêu đề bài thành H1 (layout tự render). KHÔNG tự thêm CTA hay phần "Chia sẻ".`

const RESEARCH = `NGHIÊN CỨU TRƯỚC KHI VIẾT: dùng WebSearch (nạp công cụ qua ToolSearch "select:WebSearch"; dùng WebFetch nếu cần) chạy 3-5 tìm kiếm để kiểm chứng số liệu/khái niệm trước khi nêu (ví dụ: vùng ngón cái thumb zone, F-pattern/Z-pattern, ngưỡng Core Web Vitals của Google LCP < 2.5s / INP < 200ms / CLS < 0.1, tỷ lệ bỏ giỏ trung bình ~70% theo Baymard Institute, nghiên cứu về hamburger menu của Nielsen Norman Group, số app trung bình một store Shopify cài). CHỈ nêu con số có thật và dẫn nguồn tự nhiên (vd "theo Baymard Institute", "theo Google"). Nếu không chắc một con số, hãy nói định tính, TUYỆT ĐỐI không bịa số liệu hay nghiên cứu.`

const SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['body', 'read_time', 'meta_description'],
  properties: {
    body: { type: 'string', description: 'Toàn bộ thân bài bằng Markdown tiếng Việt (KHÔNG kèm front matter YAML, KHÔNG có tiêu đề H1).' },
    read_time: { type: 'integer', description: 'Thời gian đọc ước tính (phút).' },
    meta_description: { type: 'string', description: 'Meta description tiếng Việt 140-160 ký tự, chứa từ khóa chính, KHÔNG chứa dấu ngoặc kép.' },
  },
}

const PILLARS = {
  b1: {
    slug: 'tai-sao-khach-khong-mua', order: 1, tag: 'Điều hướng', hero: '#6d5cf0',
    title: 'Tại sao khách vào store nhưng không mua — và navigation liên quan thế nào',
    primaryKw: 'navigation store thương mại điện tử',
    secondaryKws: ['điều hướng store', 'menu Shopify', 'tỷ lệ chuyển đổi'],
    intro: 'Bạn chạy ads, traffic ổn, nhưng tỷ lệ chuyển đổi vẫn thấp. Dễ đổ lỗi cho landing page, cho sản phẩm, cho giá. Nhưng có một thứ ít người nhìn vào: khách có thực sự ĐI ĐƯỢC tới sản phẩm họ muốn không? Navigation không phải trang trí — nó là con đường dẫn khách từ tò mò sang mua hàng.',
    outro: 'Navigation không phải thứ set-and-forget. Nó cần xem lại khi catalog mở rộng, khi traffic đổi, khi hành vi khách đổi. Bước đơn giản nhất để bắt đầu: mở store của bạn trên điện thoại và thử tìm một sản phẩm cụ thể như một khách lần đầu — mất bao nhiêu bước?',
    children: [
      { slug: 'hanh-vi-nguoi-dung-store', title: 'Hành vi thực tế của khách trên một store thương mại điện tử', desc: 'Khách không đọc, họ quét — và rời đi sau vài giây.', primaryKw: 'hành vi người dùng store', secondaryKws: ['F-pattern', 'mobile vs desktop', 'quét trang'],
        brief: 'Mô tả cách khách thực sự dùng store. Ý chính: (1) Người dùng không đọc mà QUÉT (scan); cần tìm thấy trong vài giây hoặc rời đi. (2) F-pattern và Z-pattern: mắt nhìn vào đâu đầu tiên, hệ quả cho vị trí menu/danh mục. (3) Khác biệt mobile vs desktop: mobile dùng ngón cái, màn hình nhỏ, ít kiên nhẫn; desktop có chuột, nhìn tổng thể hơn. (4) Điểm khách hay "rớt" nhất: không tìm thấy danh mục, menu quá nhiều cấp, không biết mình đang ở đâu trong store.' },
      { slug: 'navigation-anh-huong-doanh-thu', title: 'Navigation ảnh hưởng tới doanh thu như thế nào', desc: 'Từ bounce rate tới add-to-cart, đều đi qua menu.', primaryKw: 'navigation ảnh hưởng doanh thu', secondaryKws: ['bounce rate', 'pages per session', 'add to cart'],
        brief: 'Giải thích cụ thể các đường nối giữa navigation và doanh thu: (1) Bounce rate: menu khó dùng khiến khách bỏ ngay trang đầu. (2) Pages per session: menu tốt khiến khách khám phá thêm, tiếp cận nhiều sản phẩm hơn. (3) Add-to-cart rate: tìm đúng sản phẩm thì tỷ lệ cho vào giỏ cao hơn. (4) Return visits: store dễ đi thì khách nhớ và quay lại. (5) Ví dụ minh họa nhẹ nhàng: hai store cùng sản phẩm cùng giá, một bên menu rõ ràng, một bên menu rối — kết quả khác nhau ra sao. Nêu rằng đây là một đòn bẩy tăng trưởng "miễn phí" (không tốn thêm tiền ads).' },
      { slug: 'loi-navigation-pho-bien', title: 'Những lỗi navigation phổ biến nhất trên Shopify store', desc: 'Năm lỗi quen thuộc khiến khách lạc đường.', primaryKw: 'lỗi navigation Shopify', secondaryKws: ['menu Shopify', 'mega menu', 'breadcrumb'],
        brief: 'Liệt kê và giải thích 5 lỗi, mỗi lỗi vài câu kèm cách nhận biết: (1) Quá nhiều mục menu cấp 1 — khách không biết bắt đầu từ đâu. (2) Không có mega menu cho store nhiều danh mục — phải click quá nhiều lần. (3) Trên mobile chỉ dùng hamburger menu — ẩn hết, khách lười mở. (4) Không có breadcrumb hay chỉ báo "bạn đang ở đây". (5) Menu phân loại theo logic người bán, không theo cách người mua nghĩ. Với mỗi lỗi, gợi ý hướng sửa ngắn gọn.' },
      { slug: 'menu-navi-giai-quyet-diem-nghen', title: 'Các loại menu giải quyết điểm nghẽn điều hướng ra sao', desc: 'Mega Menu, Tab Bar, Slide Menu, FAB — mỗi loại một việc.', primaryKw: 'loại menu Shopify', secondaryKws: ['mega menu', 'tab bar', 'slide menu', 'FAB'],
        brief: 'Giải thích mỗi loại menu giải quyết điểm nghẽn nào (không sa đà kỹ thuật): (1) Mega Menu: hiển thị nhiều danh mục cùng lúc, có thể kèm hình, giúp thấy toàn cảnh catalog mà không cần click nhiều. (2) Tab Bar: đặt dưới đáy mobile thay hamburger, truy cập 1 chạm các mục quan trọng. (3) Slide Menu: hiển thị cấu trúc danh mục nhiều tầng mà không gây choáng. (4) FAB: giữ một CTA quan trọng luôn trong tầm tay. (5) Tốc độ load: một menu đẹp nhưng chậm còn tệ hơn menu xấu — nhắc Navi+ được tối ưu để không ảnh hưởng Core Web Vitals. Nhắc Navi+ tự nhiên ở đây (đây là bài hợp lệ để nhắc).' },
    ],
  },

  b2: {
    slug: 'chon-loai-menu-shopify', order: 2, tag: 'Chọn menu', hero: '#2f7d5b',
    title: 'Cách chọn đúng loại menu cho Shopify store của bạn',
    primaryKw: 'chọn loại menu Shopify',
    secondaryKws: ['mega menu', 'tab bar', 'slide menu', 'FAB'],
    intro: 'Có người thấy store khác dùng Mega Menu đẹp nên bê nguyên về — kết quả store 20 sản phẩm có menu phức tạp hơn cả sàn lớn. Có người bán hàng trăm danh mục mà chỉ để một hàng menu đơn giản — khách không biết store bán gì. Không có menu "tốt nhất", chỉ có menu phù hợp nhất với từng store.',
    outro: 'Menu là thứ khách không nghĩ đến nếu nó làm tốt; họ chỉ nhận ra khi nó làm sai. Mục tiêu không phải menu đẹp, mà là menu khách không cần suy nghĩ khi dùng.',
    children: [
      { slug: 'bon-yeu-to-chon-menu', title: 'Bốn yếu tố quyết định bạn cần loại menu nào', desc: 'Catalog, thiết bị, ngành hàng, mục tiêu.', primaryKw: 'yếu tố chọn menu', secondaryKws: ['catalog', 'mobile traffic', 'ngành hàng'],
        brief: 'Phân tích 4 yếu tố quyết định: (1) Quy mô catalog: bao nhiêu danh mục, bao nhiêu sản phẩm. (2) Thiết bị chính của khách: phần lớn traffic từ mobile hay desktop (hướng dẫn xem trong Shopify/GA). (3) Ngành hàng: fashion, electronics, F&B, beauty... mỗi ngành hành vi mua khác nhau. (4) Mục tiêu ưu tiên: khách khám phá (browse) hay tìm nhanh (search-first). Với mỗi yếu tố, gợi ý nó đẩy bạn về loại menu nào.' },
      { slug: 'phan-tich-cac-loai-menu', title: 'Phân tích từng loại menu: khi nào nên dùng, khi nào không', desc: 'Mega Menu, Slide Menu, Tab Bar, FAB.', primaryKw: 'các loại menu Shopify', secondaryKws: ['mega menu', 'slide menu', 'tab bar', 'FAB'],
        brief: 'Với mỗi loại nêu: là gì, phù hợp khi nào, KHÔNG phù hợp khi nào, lỗi/lưu ý thường gặp. (A) Mega Menu: menu mở rộng lớn, nhiều danh mục, có thể kèm hình + featured product; hợp khi nhiều danh mục (10+), nhiều khách desktop, ngành cần browse; không hợp khi ít sản phẩm hoặc phần lớn mobile; lỗi: nhét quá nhiều gây choáng. (B) Slide Menu: trượt từ cạnh, hiển thị danh mục dạng cây; hợp khi nhiều cấp danh mục, cần hierarchy rõ, mobile-first; không hợp khi store đơn giản; lưu ý: ẩn thông tin nên hợp người đã biết mình muốn gì, không tốt cho browse. (C) Tab Bar: thanh cố định dưới đáy mobile, 4-5 mục quan trọng; hợp khi phần lớn traffic mobile; mạnh vì nằm trong vùng ngón cái. (D) FAB: nút nổi cho MỘT hành động quan trọng (chat, xem giỏ, back-to-top); không thay thế menu, không dùng cho quá nhiều hành động.' },
      { slug: 'ket-hop-menu-theo-store', title: 'Kết hợp các loại menu cho từng loại store', desc: 'Cấu hình thực tế theo ngành và quy mô.', primaryKw: 'kết hợp menu Shopify', secondaryKws: ['fashion', 'electronics', 'beauty'],
        brief: 'Trình bày bằng MỘT bảng Markdown gợi ý cấu hình desktop + mobile cho từng loại store, rồi diễn giải thêm vài dòng. Các hàng: Fashion/Lifestyle catalog lớn (Desktop: Mega Menu; Mobile: Tab Bar + Slide Menu). Electronics nhiều danh mục kỹ thuật (Mega Menu có filter; Slide Menu). F&B/Local ít sản phẩm (Simple Nav; Tab Bar). Beauty/Skincare (Mega Menu kèm hình; Tab Bar + FAB chat). Dropshipping nhiều ngành (Mega Menu; Slide Menu). Nhấn ý: cấu hình mobile và desktop nên khác nhau, và Navi+ cho phép cấu hình riêng hai bên.' },
      { slug: 'quy-trinh-chon-menu', title: 'Quy trình thực tế để quyết định menu phù hợp', desc: 'Năm bước dựa trên dữ liệu, không cảm tính.', primaryKw: 'quy trình chọn menu', secondaryKws: ['Shopify Analytics', 'mobile vs desktop'],
        brief: 'Một quy trình 5 bước rõ ràng: (1) Mở Google Analytics / Shopify Analytics xem tỷ lệ mobile vs desktop. (2) Đếm số danh mục cấp 1 và cấp 2. (3) Xác định 3-5 trang khách cần đến nhiều nhất. (4) Chọn cấu hình menu dựa trên bốn yếu tố và bảng ở các bài trước. (5) Cài Navi+, build thử, xem trên cả điện thoại thật lẫn máy tính. Nhấn rằng nên thử trên thiết bị thật, không chỉ trên trình giả lập.' },
    ],
  },

  b3: {
    slug: 'do-luong-hieu-qua-menu', order: 3, tag: 'Đo lường', hero: '#1c7ed6',
    title: 'Làm sao biết menu của bạn đang hoạt động tốt hay không — 5 chỉ số cần theo dõi',
    primaryKw: 'đo lường hiệu quả menu',
    secondaryKws: ['GA4', 'chỉ số navigation', 'phân tích menu'],
    intro: 'Hầu hết chúng ta đánh giá menu bằng cảm quan: "trông đẹp", "đủ mục rồi", "khách không phàn nàn". Nhưng khách không phàn nàn — họ im lặng và rời đi. Muốn biết menu làm tốt hay không, cần nhìn vào số liệu hành vi. Năm chỉ số dưới đây đủ để bắt đầu, không cần bạn là chuyên gia analytics.',
    outro: 'Số liệu không phải để phán xét, mà để hiểu khách đang gặp khó ở đâu. Menu tốt không cần hoàn hảo ngay từ đầu — nó cần được cải thiện dựa trên dữ liệu thật. Gợi ý: review menu mỗi 3 tháng, hoặc sau mỗi lần thêm danh mục mới. Cách bắt đầu nhẹ nhàng nhất là bật GA4 hoặc cài Microsoft Clarity, rồi nhìn lại menu sau hai tuần.',
    children: [
      { slug: 'chi-so-ctr-menu', title: 'Chỉ số 1 — Click-through rate của từng menu item', desc: 'Mục nào được bấm, mục nào bị bỏ quên.', primaryKw: 'CTR menu item', secondaryKws: ['GA4', 'Hotjar', 'Clarity'],
        brief: 'Giải thích: là gì (tỷ lệ bấm vào một mục so với số người thấy menu); cách đo (GA4 Events click tracking trên navigation, hoặc Hotjar / Microsoft Clarity); cách đọc (vài mục CTR rất cao, vài mục gần 0 → mục thấp có thể thừa hoặc tên không rõ; mục "Sale"/"New Arrivals" CTR thấp bất thường → vị trí đặt có vấn đề); hành động (cắt mục ít dùng, đổi tên mục không rõ, đưa mục quan trọng lên vị trí nổi bật).' },
      { slug: 'chi-so-navigation-depth', title: 'Chỉ số 2 — Navigation depth (độ sâu điều hướng)', desc: 'Khách phải qua bao nhiêu bước để tới sản phẩm.', primaryKw: 'navigation depth', secondaryKws: ['GA4 funnel', 'click depth'],
        brief: 'Là gì (số bước trung bình từ trang chủ tới trang sản phẩm); cách đo (GA4 User Explorer hoặc Funnel Exploration); mốc tham khảo (tốt nhất 2-3 bước; thường xuyên 5+ bước là quá sâu); nguyên nhân phổ biến (phân cấp quá nhiều tầng, thiếu shortcut, thiếu featured collection trên mega menu); hành động (rút gọn cấu trúc, dùng mega menu để "nhảy cóc" thẳng tới danh mục thay vì đi từng bước).' },
      { slug: 'chi-so-exit-rate-danh-muc', title: 'Chỉ số 3 — Exit rate tại trang danh mục', desc: 'Khách tới danh mục rồi rời đi, không vào sản phẩm.', primaryKw: 'exit rate trang danh mục', secondaryKws: ['collection page', 'GA4'],
        brief: 'Là gì (tỷ lệ rời site ngay tại trang danh mục, không đi tiếp vào sản phẩm); cách đo (GA4 Pages and Screens, lọc theo URL collection, xem Exit rate); cách đọc (exit cao tại danh mục thường vì: danh mục sai — khách vào nhầm chỗ, hoặc trang danh mục kém hấp dẫn); liên hệ menu (tên mục menu không khớp nội dung trang danh mục → khách thất vọng và thoát); hành động (rà lại tên menu item so với tên + nội dung trang danh mục tương ứng).' },
      { slug: 'chi-so-mobile-vs-desktop', title: 'Chỉ số 4 — Hành vi điều hướng mobile so với desktop', desc: 'Cùng một menu, hai thế giới khác nhau.', primaryKw: 'mobile vs desktop navigation', secondaryKws: ['GA4 segments', 'device category'],
        brief: 'Là gì (so sánh CTR, depth, exit rate theo thiết bị); cách đo (GA4 Segments chia theo Device category); vì sao quan trọng (mobile và desktop dùng menu rất khác; cấu hình tốt trên desktop có thể thất bại trên mobile); dấu hiệu cảnh báo (mobile bounce rate cao hơn desktop đáng kể → khả năng mobile navigation có vấn đề); hành động (cấu hình menu riêng cho mobile và desktop — Navi+ cho phép việc này; nhắc tự nhiên).' },
      { slug: 'chi-so-search-usage', title: 'Chỉ số 5 — Tỷ lệ dùng tìm kiếm nội bộ', desc: 'Khi khách tìm kiếm thứ lẽ ra menu phải lo.', primaryKw: 'search usage rate', secondaryKws: ['view_search_results', 'top search queries'],
        brief: 'Là gì (tỷ lệ khách dùng thanh tìm kiếm thay vì menu để điều hướng); cách đo (GA4 Events view_search_results); cách đọc (search cao không hẳn xấu, nhưng nếu khách tìm những thứ lẽ ra dễ thấy qua menu như "áo trắng", "sale", "new" thì menu chưa đủ rõ); phân tích thêm (xem top search queries; nếu nhiều query trùng tên danh mục đã có trong menu → tên menu không khớp ngôn ngữ khách dùng); hành động (đổi tên menu theo ngôn ngữ của khách, không phải của người bán).' },
    ],
  },

  b4: {
    slug: 'mobile-navigation-thay-the-hamburger', order: 4, tag: 'Mobile', hero: '#e8590c',
    title: 'Mobile navigation — vì sao hamburger menu đang lỗi thời và nên dùng gì thay thế',
    primaryKw: 'mobile navigation',
    secondaryKws: ['hamburger menu', 'tab bar', 'thumb zone'],
    intro: 'Hamburger menu (ba gạch ngang) ra đời từ những ngày đầu của web mobile, khi màn hình nhỏ và ít lựa chọn thiết kế. Nó không sai — nhưng dùng cho mọi trường hợp thì sai. Trên một store mobile có hơn 10 danh mục, hamburger thường là điểm nghẽn lớn.',
    outro: 'Hamburger menu không phải kẻ thù, nhưng trên một store mobile-first hôm nay, nó không còn là lựa chọn mặc định tốt nhất. Chuyển từ hamburger sang Tab Bar là một trong những cải tiến UX chi phí thấp mà hiệu quả cao nhất bạn có thể làm.',
    children: [
      { slug: 'van-de-hamburger-menu', title: 'Vấn đề thực sự của hamburger menu trên ecommerce mobile', desc: 'Ẩn quá nhiều, thêm một bước, đặt sai chỗ.', primaryKw: 'vấn đề hamburger menu', secondaryKws: ['discoverability', 'mobile UX'],
        brief: 'Bốn vấn đề, mỗi cái vài câu: (1) Ẩn quá nhiều thứ — khách không biết bên trong có gì nếu chưa mở, và họ thường không mở. (2) Thêm một bước tương tác — mở menu → tìm danh mục → click → tới trang, so với Tab Bar tap thẳng. (3) Vị trí không tự nhiên — hamburger thường ở góc trên, là vùng khó với nhất khi cầm một tay. (4) Không nhìn thấy = không tồn tại — khách mobile hành động theo những gì họ thấy; menu ẩn là menu ít được dùng. Có thể dẫn nghiên cứu của Nielsen Norman Group về navigation ẩn làm giảm khám phá (kiểm chứng qua search).' },
      { slug: 'thumb-zone-mobile', title: 'Thumb zone — hiểu cách người dùng cầm điện thoại', desc: 'Vùng dễ chạm nhất nằm ở giữa và dưới màn hình.', primaryKw: 'thumb zone', secondaryKws: ['vùng ngón cái', 'mobile usability'],
        brief: 'Giải thích thumb zone: phần dễ chạm nhất khi cầm điện thoại một tay là vùng giữa và dưới màn hình; góc trên trái/phải khó với nhất — lại là nơi hamburger hay được đặt. Kết luận: thiết kế tốt cho mobile là đặt các tương tác quan trọng vào vùng thumb zone, không phải ngoài rìa. Kiểm chứng khái niệm thumb zone qua search (Steven Hoober / các nghiên cứu UX). Liên hệ: vì sao Tab Bar dưới đáy hợp tự nhiên với cách cầm máy.' },
      { slug: 'tab-bar-giai-phap', title: 'Tab Bar — giải pháp thay thế chính', desc: 'Bốn đến năm điểm đến quan trọng, luôn hiển thị.', primaryKw: 'tab bar mobile', secondaryKws: ['bottom navigation', 'điểm đến chính'],
        brief: 'Mô tả Tab Bar: vị trí cố định dưới đáy (đúng thumb zone); hiển thị trực quan 4-5 icon + label, khách thấy ngay không cần thao tác. Quy tắc chọn 4-5 mục: Home, Collections/Shop, Search, Cart, Account hoặc một mục ưu tiên (Flash Sale, Blog...). Giới hạn: không quá 5 mục — Tab Bar chỉ dành cho điểm đến quan trọng nhất. Nêu rằng đây là mô hình quen thuộc của hầu hết app thương mại điện tử lớn, và áp dụng được cho Shopify store qua công cụ như Navi+ (nhắc tự nhiên).' },
      { slug: 'ket-hop-tab-bar-slide-menu', title: 'Kết hợp Tab Bar + Slide Menu (và vai trò của FAB)', desc: 'Mô hình phổ biến nhất cho store mobile.', primaryKw: 'kết hợp tab bar slide menu', secondaryKws: ['slide menu', 'FAB', 'mobile menu'],
        brief: 'Trình bày mô hình kết hợp: Tab Bar lo 4-5 điểm đến chính (truy cập nhanh); Slide Menu (mở từ Tab Bar hoặc icon "More") lo toàn bộ cấu trúc danh mục chi tiết. Khách cần nhanh → Tab Bar; khách muốn browse toàn bộ → Slide Menu. Đây là mô hình của hầu hết app ecommerce lớn, áp dụng được cho Shopify. Thêm phần FAB: bổ sung chứ không thay thế — dùng cho một CTA duy nhất (chat support, "xem ưu đãi hôm nay", back-to-top trên trang dài); không dùng FAB cho điều hướng chính. Cuối bài có thể nhắc Navi+ cho phép cấu hình Tab Bar + Slide Menu trong cùng một cấu hình, riêng cho mobile, không cần code.' },
    ],
  },

  b5: {
    slug: 'navigation-toc-do-tai-trang', order: 5, tag: 'Tốc độ', hero: '#9c36b5',
    title: 'Navigation và tốc độ tải trang — chọn app menu không ảnh hưởng Core Web Vitals',
    primaryKw: 'app menu Core Web Vitals',
    secondaryKws: ['tốc độ tải trang', 'page speed', 'Built for Shopify'],
    intro: 'Một store Shopify trung bình cài khá nhiều app, mỗi app lại thêm code. App menu/navigation là một trong những app load sớm nhất, ảnh hưởng trực tiếp tới trải nghiệm đầu tiên của khách. Một menu đẹp nhưng load chậm đôi khi còn hại hơn là không có gì.',
    outro: 'Performance không phải vấn đề chỉ của lập trình viên. Là merchant, bạn hoàn toàn có thể tự kiểm tra và ra quyết định có căn cứ. Một công cụ miễn phí như PageSpeed Insights là đủ để bắt đầu: đo điểm store hôm nay, rồi so sánh sau khi thử một app menu mới.',
    children: [
      { slug: 'core-web-vitals-la-gi', title: 'Core Web Vitals là gì và vì sao bạn cần quan tâm', desc: 'LCP, INP, CLS — ba con số Google nhìn vào.', primaryKw: 'Core Web Vitals', secondaryKws: ['LCP', 'INP', 'CLS', 'SEO'],
        brief: 'Giải thích ba chỉ số bằng ngôn ngữ đơn giản, kèm ngưỡng "tốt" của Google (kiểm chứng qua search): LCP (Largest Contentful Paint) — thời gian phần tử lớn nhất hiển thị, nên dưới 2.5s. CLS (Cumulative Layout Shift) — mức layout bị xê dịch khi load; menu load sau có thể đẩy nội dung, nên dưới 0.1. INP (Interaction to Next Paint) — tốc độ phản hồi khi khách tương tác, nên dưới 200ms; menu nặng → bấm mà không thấy phản hồi → khó chịu. Vì sao quan trọng: Core Web Vitals ảnh hưởng tới thứ hạng Google; store chậm = hạng thấp = ít traffic organic. Lưu ý INP đã thay FID từ 2024 (kiểm chứng).' },
      { slug: 'app-menu-anh-huong-toc-do', title: 'App menu ảnh hưởng tới tốc độ ra sao — và dấu hiệu nhận biết', desc: 'JavaScript nặng, render-blocking, layout shift.', primaryKw: 'app menu ảnh hưởng tốc độ', secondaryKws: ['JavaScript', 'render blocking', 'CLS'],
        brief: 'Phần 1 — cách app menu làm chậm: (a) JavaScript nặng, browser phải parse/execute trước khi hiện menu; (b) render-blocking — app không tối ưu chặn việc render cả trang trong khi chờ menu; (c) thêm HTTP request — mỗi icon, font, ảnh là một request; (d) CLS từ menu — menu load sau nội dung gây xê dịch layout. Phần 2 — dấu hiệu menu đang làm chậm store: dùng PageSpeed Insights (pagespeed.web.dev) xem phần Opportunities/Diagnostics có nhắc tới navigation scripts; dùng Chrome DevTools tab Network lọc JS xem file nào của app navigation tốn thời gian; so sánh điểm trước và sau khi cài app.' },
      { slug: 'tieu-chi-app-menu-nhanh', title: 'Tiêu chí đánh giá một app menu tốt về tốc độ', desc: 'Năm điều nên kiểm tra trước khi tin một app.', primaryKw: 'tiêu chí app menu nhanh', secondaryKws: ['lazy loading', 'CDN', 'Built for Shopify'],
        brief: 'Năm tiêu chí, mỗi cái giải thích ngắn: (1) Lazy loading — menu chỉ load khi cần (hover/click), không load hết ngay. (2) JavaScript gọn nhẹ — không kéo cả một framework chỉ để hiện menu. (3) Không render-blocking — script app không chặn render nội dung chính. (4) Asset serve qua CDN — icon/ảnh trong menu load nhanh ở mọi nơi. (5) Badge "Built for Shopify" — tiêu chí Shopify kiểm duyệt khắt khe gồm cả yêu cầu performance, app đạt badge đã qua một phần thẩm định kỹ thuật. Có thể nhắc Navi+ đạt badge này và được tối ưu theo các tiêu chí trên (tự nhiên).' },
      { slug: 'checklist-cai-app-menu', title: 'Checklist trước khi cài bất kỳ app menu nào', desc: 'Đo trước, đo sau, theo dõi vài tuần.', primaryKw: 'checklist cài app menu', secondaryKws: ['PageSpeed Insights', 'Search Console'],
        brief: 'Một checklist thực hành ngắn: (1) Đo điểm PageSpeed của store TRƯỚC khi cài. (2) Cài app → đo lại → so sánh. (3) Kiểm tra Core Web Vitals trên Google Search Console sau 1-2 tuần (dữ liệu thực địa). (4) Nếu điểm giảm đáng kể → cân nhắc đổi app hoặc tối ưu cấu hình. Nhắc rằng nên đo trên cả mobile (thường yếu hơn). Khép lại bằng nhắc nhẹ Navi+ được thiết kế để không kéo tụt các chỉ số này.' },
    ],
  },

  b6: {
    slug: 'navigation-theo-giai-doan-store', order: 6, tag: 'Tăng trưởng', hero: '#f08c00',
    title: 'Navigation theo từng giai đoạn phát triển của store — từ 10 đến 10.000 sản phẩm',
    primaryKw: 'navigation theo giai đoạn store',
    secondaryKws: ['catalog mở rộng', 'mega menu', 'tab bar', 'scale store'],
    intro: 'Hầu hết chúng ta cấu hình menu một lần khi mới mở store rồi không đụng tới nữa. Nhưng store thay đổi: catalog mở rộng, traffic tăng, thêm collection, thêm thị trường. Menu không theo kịp sự phát triển của store thì trải nghiệm sẽ tệ dần theo thời gian, dù mọi mặt khác đang tốt lên.',
    outro: 'Không có giai đoạn nào "không cần quan tâm đến navigation" — khác biệt chỉ là mức độ phức tạp cần thiết. Một công cụ dùng được ở cả ba giai đoạn (như Navi+) giúp bạn không phải đổi app mỗi khi store lớn lên. Việc nên làm ngay: xác định store của bạn đang ở giai đoạn nào, rồi kiểm tra cấu hình menu hiện tại còn phù hợp không.',
    children: [
      { slug: 'giai-doan-store-moi', title: 'Giai đoạn 1 — Store mới, catalog nhỏ (dưới 50 sản phẩm)', desc: 'Đơn giản và rõ ràng là đủ.', primaryKw: 'navigation store mới', secondaryKws: ['catalog nhỏ', 'tab bar cơ bản'],
        brief: 'Mô tả giai đoạn 1: đặc điểm (catalog nhỏ, ít danh mục; traffic thấp; còn chạy thử nhiều thứ). Nhu cầu navigation (đơn giản, rõ; chưa cần mega menu vì sẽ trống và cồng kềnh; cần header đơn giản trên desktop + Tab Bar cơ bản trên mobile). Lỗi phổ biến (over-engineer menu ngay từ đầu, tạo danh mục ảo cho menu trông "đầy"; bỏ quên mobile navigation vì mải lo desktop). Gợi ý cấu hình Navi+ (Desktop: header đơn giản 3-5 mục; Mobile: Tab Bar 4 mục cơ bản Home/Shop/Cart/Account).' },
      { slug: 'giai-doan-tang-truong', title: 'Giai đoạn 2 — Store đang tăng trưởng (50–500 sản phẩm)', desc: 'Bắt đầu cần cấu trúc và mega menu.', primaryKw: 'navigation store tăng trưởng', secondaryKws: ['mega menu', 'slide menu', 'analytics menu'],
        brief: 'Mô tả giai đoạn 2: đặc điểm (catalog mở rộng nhanh, thêm collection thường xuyên; traffic tăng, bắt đầu có data hành vi; có khách quay lại cần tìm nhanh hơn). Nhu cầu (bắt đầu cần structure rõ hơn; mega menu bắt đầu có lý; mobile cần Slide Menu xử lý nhiều danh mục, Tab Bar giữ cho điểm đến chính). Dấu hiệu cần nâng cấp (khách phải click 3+ lần tới sản phẩm; search rate tăng; bounce rate tăng theo catalog). Gợi ý cấu hình Navi+ (Desktop: Mega Menu 2 cột, có thể thêm hình danh mục nổi bật; Mobile: Tab Bar + Slide Menu; bắt đầu theo dõi analytics menu).' },
      { slug: 'giai-doan-scale', title: 'Giai đoạn 3 — Store đã scale (500+ sản phẩm, 15+ danh mục)', desc: 'Tối ưu liên tục, mobile và tốc độ lên hàng đầu.', primaryKw: 'navigation store scale', secondaryKws: ['mega menu nhiều cột', 'A/B testing menu', 'đa ngôn ngữ'],
        brief: 'Mô tả giai đoạn 3: đặc điểm (catalog lớn, nhiều tầng; traffic đa dạng organic/paid/email/social, hành vi khác nhau tùy nguồn; có thể nhiều thị trường/ngôn ngữ; tốc độ và performance quan trọng hơn bao giờ hết). Nhu cầu (Mega Menu phức tạp hơn: nhiều cột, featured product, banner khuyến mãi; mobile navigation cực kỳ tối ưu; cần A/B testing menu; FAB cho CTA mùa vụ). Vài quyết định khó (có nên chia menu theo persona "mua cho mình" vs "mua làm quà"; có nên mega menu kèm search; khi nào dùng featured product trong mega menu). Gợi ý cấu hình Navi+ (Desktop: Mega Menu đầy đủ; Mobile: Tab Bar tối ưu + Slide Menu toàn catalog + FAB mùa vụ; dùng analytics để review theo chu kỳ).' },
      { slug: 'trigger-points-xem-lai-menu', title: 'Khi nào cần xem lại menu — và vì sao đổi app lúc đã scale lại tốn kém', desc: 'Những thời điểm nên dừng lại và rà menu.', primaryKw: 'thời điểm xem lại menu', secondaryKws: ['mùa cao điểm', 'đổi app navigation'],
        brief: 'Phần 1 — trigger points cần xem lại menu ngay (ngoài chu kỳ định kỳ): thêm 3+ danh mục mới; chuẩn bị mùa cao điểm (Tết, 11/11, Black Friday); đổi theme store; nhận phản hồi khách khó tìm sản phẩm; bounce rate tăng đột biến không rõ nguyên nhân; ra mắt campaign khuyến mãi mới. Phần 2 — vì sao đổi app navigation lúc đã scale lại tốn kém: mỗi lần đổi app phải cấu hình lại toàn bộ menu từ đầu; thường không lưu cấu hình cũ → mất thời gian rebuild; trong lúc chuyển đổi menu có thể lỗi, ảnh hưởng trực tiếp conversion; nên chọn ngay một app scale được cùng store thay vì chọn app rẻ rồi đổi nhiều lần.' },
    ],
  },
}

// ---- helpers ----------------------------------------------------------------
function q(s) { return String(s).replace(/"/g, "'").replace(/\s+/g, ' ').trim() }

function pillarFrontMatter(p, fields) {
  const kws = [p.primaryKw, ...p.secondaryKws].map(k => `  - ${k}`).join('\n')
  const kids = p.children.map(c =>
    `  - title: "${q(c.title)}"\n    url: "/vi/topic/${c.slug}/"\n    desc: "${q(c.desc)}"`
  ).join('\n')
  return `---\nlang: vi\nref: ${p.slug}\norder: ${p.order}\ntitle: "${q(p.title)}"\ndescription: "${q(fields.meta_description)}"\ntopic_tag: "${p.tag}"\nhero_color: "${p.hero}"\nread_time: ${fields.read_time}\nseo_keywords:\n${kws}\ndate: ${DATE}\nchild_links:\n${kids}\n---\n\n${fields.body.trim()}\n`
}

function childFrontMatter(c, parent, fields) {
  const kws = [c.primaryKw, ...c.secondaryKws].map(k => `  - ${k}`).join('\n')
  return `---\nlang: vi\nref: ${c.slug}\ntitle: "${q(c.title)}"\ndescription: "${q(fields.meta_description)}"\nparent_title: "${q(parent.title)}"\nparent_url: "/vi/${parent.slug}/"\nseo_keywords:\n${kws}\ndate: ${DATE}\n---\n\n${fields.body.trim()}\n`
}

function childWritePrompt(c, parent) {
  return `Bạn là người viết nội dung ecommerce cho longform.naviplus.io (trang cẩm nang cho người bán hàng online). Viết một BÀI CON (deep-dive) bằng tiếng Việt.

TIÊU ĐỀ (đã có sẵn, KHÔNG lặp lại thành H1): ${c.title}
TỪ KHÓA CHÍNH (đặt trong đoạn mở đầu, trong >=1 mục H2, và trong meta_description): ${c.primaryKw}
TỪ KHÓA PHỤ (rải tự nhiên ở H2/H3 + thân bài): ${c.secondaryKws.join(', ')}

NỘI DUNG CẦN VIẾT (bám sát, có thể bổ sung ý hay nhưng không lạc đề):
${c.brief}

${RESEARCH}

ĐỘ DÀI: 900-1500 từ. Triển khai 4-5 ý chính, mỗi ý vài đoạn ngắn cụ thể, có ví dụ gần gũi với người bán Việt Nam khi hợp lý.

${STYLE}

BỐI CẢNH SẢN PHẨM — ${NAVI}

CÂU CUỐI BÀI bắt buộc đúng như sau để trỏ ngược về bài mẹ:
Bài viết này nằm trong cẩm nang lớn hơn về [${q(parent.title)}](/vi/${parent.slug}/).

Trả về JSON qua công cụ StructuredOutput: { body, read_time, meta_description }.`
}

function pillarWritePrompt(p) {
  const readmores = p.children.map(c =>
    `  - Cho mục H2 nói về "${c.title.replace(/^Chỉ số \d+ — /, '').replace(/^Giai đoạn \d+ — /, '').split(':')[0].split('(')[0].trim()}": KẾT THÚC mục đó bằng ĐÚNG đoạn HTML:\n<p class="lf-readmore"><span class="lf-readmore-kicker">Đọc sâu</span><a href="/vi/topic/${c.slug}/">Xem bài đầy đủ → ${q(c.title)}</a></p>`
  ).join('\n')
  return `Bạn là người viết nội dung ecommerce cho longform.naviplus.io. Viết BÀI MẸ (pillar) bằng tiếng Việt.

TIÊU ĐỀ (đã có sẵn, KHÔNG lặp thành H1): ${p.title}
TỪ KHÓA CHÍNH (đặt ở đoạn mở đầu, >=1 H2, meta_description): ${p.primaryKw}
TỪ KHÓA PHỤ: ${p.secondaryKws.join(', ')}

MỞ BÀI (diễn đạt lại tự nhiên, đừng chép nguyên văn): ${p.intro}
KẾT BÀI (diễn đạt lại tự nhiên): ${p.outro}

${RESEARCH}

CẤU TRÚC: Mở bài 1-2 đoạn (chứa từ khóa chính). Sau đó MỖI bài con bên dưới = một mục ## H2: cho giá trị thật, độc lập (vài đoạn, có thể kèm danh sách hoặc một bảng nếu hợp), nhưng KHÔNG nói hết, rồi chuyển tiếp sang bài con bằng đúng đoạn HTML lf-readmore. Có thể thêm 1 mục H2 khung sườn (vd phần kết "Bắt đầu từ đâu") không kèm readmore. Kết bằng một đoạn khép lại nhẹ nhàng. Các bài con và đoạn readmore tương ứng:
${readmores}

ĐỘ DÀI: 1700-2300 từ.

${STYLE}

BỐI CẢNH SẢN PHẨM — ${NAVI}

Trả về JSON qua StructuredOutput: { body, read_time, meta_description }.`
}

function refinePrompt(spec, draft) {
  return `Bạn là biên tập viên nội dung ecommerce khó tính. Hãy nâng bản nháp này lên mức xuất bản cho longform.naviplus.io.

BÀI: ${spec.title}
TỪ KHÓA CHÍNH: ${spec.primaryKw}

KIỂM TRA & SỬA:
- Từ khóa chính xuất hiện ở đoạn mở đầu, ở >=1 H2, đọc TỰ NHIÊN (không nhồi nhét).
- Mọi con số phải hợp lý và có dẫn nguồn; XÓA hoặc làm mềm bất kỳ số liệu nào trông như bịa hoặc không nguồn.
- Cắt chữ thừa, bớt lặp; câu gọn; lời khuyên cụ thể, làm được ngay, có ví dụ.
- Văn phong NHÃ NHẶN, ĐƠN GIẢN, không phô diễn, không sáo rỗng; câu/đoạn ngắn. KHÔNG dùng khối callout màu mè (không class lf-key), không chèn hình.
- Mạch lạc, mở và kết tốt.
- ${spec.kind === 'pillar' ? 'GIỮ NGUYÊN mọi đoạn <p class="lf-readmore">…</p> (mỗi bài con một đoạn). KHÔNG đổi href của chúng.' : `GIỮ NGUYÊN câu cuối backlink: "Bài viết này nằm trong cẩm nang lớn hơn về [${q(spec.parentTitle)}](/vi/${spec.parentSlug}/)."`}
- Không có H1, không tự thêm CTA/Chia sẻ. Bảng (nếu có) phải đúng cú pháp Markdown.

Trả về TOÀN BỘ bài đã sửa qua StructuredOutput: { body, read_time, meta_description } (meta_description 140-160 ký tự, có từ khóa chính, không dấu ngoặc kép).

BẢN NHÁP:
${draft.body}`
}

// ---- build ------------------------------------------------------------------
let selected = args
if (typeof selected === 'string') {
  try { selected = JSON.parse(selected) } catch (e) { selected = selected.split(/[,\s]+/).filter(Boolean) }
}
if (!Array.isArray(selected) || !selected.length) selected = Object.keys(PILLARS)
log(`Viết bài VI cho: ${selected.join(', ')}`)

const specs = []
for (const key of selected) {
  const p = PILLARS[key]
  if (!p) { log(`! không có pillar ${key}`); continue }
  specs.push({ kind: 'pillar', key, title: p.title, primaryKw: p.primaryKw, slug: p.slug, _p: p })
  for (const c of p.children) {
    specs.push({ kind: 'child', key, title: c.title, primaryKw: c.primaryKw, slug: c.slug, parentTitle: p.title, parentSlug: p.slug, _c: c, _p: p })
  }
}
log(`${specs.length} bài trong hàng đợi`)

const files = await pipeline(
  specs,
  (spec) => agent(
    spec.kind === 'pillar' ? pillarWritePrompt(spec._p) : childWritePrompt(spec._c, spec._p),
    { label: `viết:${spec.slug}`, phase: 'Write', schema: SCHEMA }
  ),
  async (draft, spec) => {
    if (!draft) return null
    const better = await agent(refinePrompt(spec, draft), { label: `sửa:${spec.slug}`, phase: 'Refine', schema: SCHEMA })
    const f = better || draft
    const content = spec.kind === 'pillar' ? pillarFrontMatter(spec._p, f) : childFrontMatter(spec._c, spec._p, f)
    const path = spec.kind === 'pillar' ? `_longform/vi/${spec.slug}.md` : `_topics/vi/${spec.slug}.md`
    const words = String(f.body).split(/\s+/).filter(Boolean).length
    return { path, content, slug: spec.slug, kind: spec.kind, words }
  }
)

const ok = files.filter(Boolean)
log(`Xong: ${ok.length}/${specs.length} bài`)
return { files: ok, total: specs.length }
