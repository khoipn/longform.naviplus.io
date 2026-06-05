---
lang: jp
ref: measuring-menu-performance
order: 3
title: "メニューが機能しているか見極める方法 — 追う価値のある5つの指標"
description: "5つの実用的な指標でメニューの成果を測る方法。CTR、ナビゲーションの深さ、離脱率、モバイルでの行動、サイト内検索 — いずれもGA4とClarityで無料で計測できます。"
topic_tag: "計測"
hero_color: "#1c7ed6"
read_time: 7
seo_keywords:
  - メニューの成果を測る
  - GA4
  - ナビゲーション指標
  - メニュー分析
date: 2026-06-02
child_links:
  - title: "指標1 — 各メニュー項目のクリック率"
    url: "/jp/topic/menu-click-through-rate/"
    desc: "どの項目がクリックされ、どれが無視されているのか。"
  - title: "指標2 — ナビゲーションの深さ"
    url: "/jp/topic/navigation-depth-metric/"
    desc: "商品にたどり着くまでに何ステップかかるか。"
  - title: "指標3 — カテゴリーページの離脱率"
    url: "/jp/topic/collection-page-exit-rate/"
    desc: "カテゴリーまで来たのに、商品を見ずに去ってしまう。"
  - title: "指標4 — モバイルとデスクトップでのナビゲーション行動"
    url: "/jp/topic/mobile-vs-desktop-navigation-behavior/"
    desc: "同じメニューでも、まったく別の世界が広がっている。"
  - title: "指標5 — サイト内検索の利用率"
    url: "/jp/topic/internal-search-usage-rate/"
    desc: "本来メニューが解決すべきことを、お客様が検索で探しているとき。"
---

多くの人は、メニューの良し悪しを感覚で判断しています。見た目が整っていて、項目も十分にあって、誰からも文句が出ない — だから問題ないはず、というふうに。けれど、ほとんど誰も気づいていないことがあります。使いにくいメニューについて、お客様はまず文句を言いません。わざわざフィードバックを送ってきたりはしないのです。ただ静かにしばらく探して、目当てのものが見つからず、そっとタブを閉じる。それだけです。

メニューが本当に役割を果たしているかを知るには、勘だけでは足りません。お客様が実際に何をしているか — 何をクリックし、どこまで深く進み、どこで足を止めるのか — を見る必要があります。それが**メニューの成果を測る**ということです。当てずっぽうで判断するのではなく、データに語らせるのです。うれしいことに、分析の専門家である必要はありません。これから紹介する5つの指標があれば、まず始めるには十分ですし、そのほとんどはGA4やMicrosoft Clarityといった無料ツールに最初から備わっています。

この記事では、それぞれの指標について、それが何なのか、なぜ大切なのか、そしてメニューがお客様を助けているのか、それとも邪魔をしているのかを見極めるための読み方を、ひとつずつ解説していきます。

<div class="lf-key">
  <span class="lf-key-title">要点</span>
  <ul>
    <li>メニューの効果は複雑な分析なしでも測定できます。</li>
    <li>5つの指標で、顧客がクリック、離脱、検索する場所が見えます。</li>
    <li>まず明確な問題を1つ直し、新しいデータを待ちます。</li>
  </ul>
</div>

## 指標1 — 各メニュー項目のクリック率

メニュー項目のクリック率(CTR)とは、その項目を見た人のうち、実際にクリックした人の割合のことです。もっともシンプルな指標でありながら、いちばん多くを物語ります。なぜなら、それぞれの項目がどれだけ注目を集めているかを教えてくれるからです。

メニュー全体のCTRをまとめて眺めると、たいてい偏った絵が見えてきます。たくさんクリックされる項目がいくつかある一方で、ほとんどクリックされない項目もある。クリックがほぼゼロの項目が、必ずしも無用というわけではありません。置き場所が悪かったり、名前が分かりにくかったり、ほかの項目に埋もれてしまっているのかもしれません。

CTRを読むときに問いかけてみたいことがいくつかあります。

- 売上にいちばん効く項目は、よくクリックされる項目の中に入っているか?
- 「脇役」だと思っていた項目が、意外なほどクリックされていないか? お客様は思っている以上にそれを必要としているのかもしれません。
- ほとんど死んでいる項目が、それでもメニューバーの一等地を占めていないか?

GA4では、各メニューリンクに紐づけたクリックイベントでこれを計測します。技術的な部分が大変そうに感じるなら、Microsoft Clarityのヒートマップを使えば、色だけでどこがクリックされているかが分かります。

CTRは実験を回すのにも向いています。項目の名前を変える、並び順を変える、2つの項目を統合する — そして1〜2週間後に数字がどう動いたかを見るのです。具体的な状況に応じたCTRの読み方・解釈の仕方については、別の記事でさらに詳しく扱っています。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/menu-click-through-rate/">詳しいガイドを読む → 指標1 — 各メニュー項目のクリック率</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-click-through-rate.webp" alt="Menu click-through rate heatmap showing which ecommerce navigation items shoppers use" title="Menu click-through rate for ecommerce navigation">
  <figcaption>CTR shows which menu items pull attention and which ones quietly get ignored.</figcaption>
</figure>

## 指標2 — ナビゲーションの深さ

ナビゲーションの深さとは、お客様が目当てのものにたどり着くまでに何回クリックが必要かを測る指標です。トップページから1クリックの位置にある商品は見つけやすい。4クリック先にある商品は、たどり着く前にほとんどのお客様が離脱してしまうものです。

ここがまさに、メニューが静かに売上を損なっている場所です。お客様が欲しがっている商品をちゃんと持っていて、価格も手ごろ、写真も素晴らしい — それでも深く埋もれていれば、お客様の目にはまったく触れません。クリックの階層がひとつ増えるたびに、お客様が気をそらしたり、気が変わったり、ページを閉じたりするチャンスもひとつ増えるのです。

GA4の経路レポートを見れば、トップページから人々がたどる一般的な道筋が分かります。お客様が主要なカテゴリーページにたどり着くのに何度も遠回りのステップを踏まなければならないなら、それはメニューがお客様に余計な労力を強いているサインです。

実用的なコツがあります。売上にいちばん効く5つのページを書き出し、それぞれにトップページからクリックでたどり着いてみて、ステップ数を数えるのです。もし3回を超えるなら、隠しすぎているかもしれません。デスクトップのMega Menuや、モバイル画面下部のTab Barといったメニュータイプは、まさにこの道のりを短くするために存在します — 大切な項目をお客様の手の届くところに引き寄せるのです。深さの測り方と、それを無理なく減らす方法については、別の記事で扱っています。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/navigation-depth-metric/">詳しいガイドを読む → 指標2 — ナビゲーションの深さ</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/navigation-depth-click-path.webp" alt="Navigation depth click path showing how many steps shoppers need to reach products" title="Navigation depth click path metric">
  <figcaption>Navigation depth reveals how many clicks stand between shoppers and the products they want.</figcaption>
</figure>

## 指標3 — カテゴリーページの離脱率

離脱率は、お客様がどうやってそのページにたどり着いたかにかかわらず、特定のページでセッションが終わった割合を教えてくれます。直帰率(セッションの最初のページだけを数える)とは違い、離脱率はセッション内のすべてのページに当てはまります — だからこそ、カテゴリーページを調べるのに最適なのです。

なぜカテゴリーページが重要なのでしょうか。そこにたどり着いたということは、お客様にはすでに明確な意図があるからです。「メンズシューズ」や「キッチン用品」をクリックしたのは、そのグループを見たかったから。それなのに、ほとんどの人が商品を1つも見ずにそのまま去ってしまうなら、期待していたものと目にしたものとの間に、何かズレがあるということです。

カテゴリーページで離脱率が高くなる、よくある原因をいくつか挙げます。

- メニュー項目の名前が約束していることと、ページが提供しているものが食い違っている。
- ページに情報を詰め込みすぎていて、お客様がどこを見ればいいか分からない。
- 絞り込みフィルターがなく、お客様が選択肢を狭められない。
- ページの読み込みが遅い。Googleによれば、メインコンテンツが表示されるまでの時間(LCP)の「良好」とされる基準は2.5秒未満です。それよりずっと遅いと、ページが表示しきる前にお客様は去ってしまいます。

これを読むときの注意点がひとつ。離脱率が高いことが、いつも悪いとは限りません。中には自然な終着点となるページもあります。けれど、お客様が商品へと進んでいくべきカテゴリーページにおいては、高い数字はたいてい見直す価値があります。「正常な」離脱率と「警戒すべき」離脱率をどう見分けるかについては、別の記事で詳しく掘り下げています。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/collection-page-exit-rate/">詳しいガイドを読む → 指標3 — カテゴリーページの離脱率</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/category-page-exit-rate.webp" alt="Category page exit rate showing shoppers leaving before viewing ecommerce products" title="Category page exit rate for menu performance">
  <figcaption>High category exits warn that shoppers reached a section but did not continue to products.</figcaption>
</figure>

## 指標4 — モバイルとデスクトップでのナビゲーション行動

これは多くの人が飛ばしてしまう指標で、そのツケを払うことになりがちです。理由は単純で、いまやほとんどのお客様はスマートフォンからやってくるからです。業界の数字を見ると、ECサイトへのトラフィックの大半をモバイル端末が占めています — 正確な割合は出典や地域によってかなりばらつきますが、モバイルがデスクトップを追い越したのはずっと前のことです。

問題は、ノートパソコンの画面では問題なく見えるメニューが、スマートフォンではとても使いにくくなりうることです。複数カラムのMega Menuを、縦長の画面にまるごと押し込むことはできません。ハンバーガーメニューはすべてを1つのアイコンの裏に隠してしまう — お客様はタップしなければ中身を見られません。Nielsen Norman Groupは、ハンバーガーの裏に隠されたコンテンツは、表に出したままにした場合よりも見つけられ・使われる回数が少なくなることを示しています。主要なナビゲーションを隠すと、お客様がそれを見つける可能性はほぼ半分に減ってしまうのです。

これをいちばん簡単に読む方法は、数字を端末別に分けることです。GA4では、2つのグループを並べて比較できます。

| 比較するもの | そこから浮かぶ問い |
| --- | --- |
| モバイルとデスクトップのメニューCTR | 同じ項目が、モバイルでは大きくクリックされていないか? |
| ナビゲーションの深さ | モバイルのお客様は、目的にたどり着くまで多くクリックしているか? |
| 端末別のコンバージョン率 | モバイルがデスクトップに大きく見劣りするのはどこか? |

モバイルがはっきり遅れをとっているなら、ボタンが小さすぎる、親指の届く範囲の外にある、あるいは大切な項目がスライド式メニューの奥深くに埋もれている、といった可能性が高いです。だからこそ、多くのストアはモバイルには画面下部に固定したTab Barを、デスクトップにはMega Menuを使います — 2つの異なる使われ方には、2つの異なるレイアウトを、というわけです。[Navi+](https://naviplus.io)のようなツールを使えば、モバイルとデスクトップをコードなしで別々に設定できるので、1つのデザインを両方に無理やり合わせる必要はありません。2つのプラットフォームの差をどう比較し、どう対処するかについては、別の記事を用意しています。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/mobile-vs-desktop-navigation-behavior/">詳しいガイドを読む → 指標4 — モバイルとデスクトップでのナビゲーション行動</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/mobile-desktop-navigation-behavior.webp" alt="Mobile and desktop navigation behavior comparison for ecommerce menu performance" title="Mobile versus desktop navigation behavior">
  <figcaption>Mobile and desktop shoppers often need different navigation layouts and separate measurement.</figcaption>
</figure>

## 指標5 — サイト内検索の利用率

最後の指標は、一見メニューとは無関係に聞こえますが、実はメニューの調子をもっとも鮮明に映し出す鏡です。サイト内検索の利用率とは、メニューをたどる代わりに、サイトの検索ボックスを使うお客様の割合のことです。

多少の検索は普通のこと、むしろ良いことでもあります — 検索を使うお客様は、何か具体的なものを能動的に探しているので、購入意欲が高いことが多いのです。けれど、この割合が急に跳ね上がるなら、それはたいてい、メニューがお客様を必要な場所へ導けていないサインです。メニューが役に立たないから見切りをつけて、代わりに文字を打ち込むようになるのです。

さらに物語っているのは、検索した後に何が起こるかです。Baymard Instituteの調査によれば、多くのECサイトでサイト内検索は許容できる水準を下回る性能しか発揮していません。つまり、メニューがお客様を検索ボックスへ押しやるとき、あなたは同じように期待を裏切りがちなツールに賭けていることになるのです。

GA4でサイト内検索のトラッキングを有効にすれば、お客様がどんな言葉で検索しているかが分かります。そのリストは宝の山です。すでにメニューにあるはずのカテゴリー名を多くの人が打ち込んでいるなら、その項目はおそらく置き場所が悪いか、見つけにくい名前がつけられています。

サイト内検索は、お客様からの丁寧な苦情として読みましょう。「これがメニューから見つけられませんでした」と。検索キーワードを使ってメニューの穴をどう埋めるかについては、別の記事で詳しく解説しています。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/internal-search-usage-rate/">詳しいガイドを読む → 指標5 — サイト内検索の利用率</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/internal-search-menu-gaps.webp" alt="Internal search usage rate revealing ecommerce menu gaps and missing categories" title="Internal search usage reveals menu gaps">
  <figcaption>Search terms act like quiet complaints about categories shoppers could not find in the menu.</figcaption>
</figure>

## どこから始めるか

5つの指標と聞くと多く感じるかもしれませんが、すべてを一度にやる必要はありません。これから始めるなら、おすすめの順番があります。

1. GA4を有効にして、サイト内検索のトラッキングをオンにする — ほとんど手間がかからず、指標5がすぐに手に入り、おまけに指標2と3の一部も得られます。
2. ヒートマップのためにMicrosoft Clarityを導入する。これは指標1を支え、モバイルの行動をざっと把握するのにも役立ちます。
3. 2週間後、腰を据えて数字をひと通り見返し、おかしいと感じる点を2つか3つ書き留めます。

<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-performance-starting-checklist.webp" alt="Menu performance starting checklist with GA4 heatmaps and two week review" title="Menu performance starting checklist">
  <figcaption>GA4, heatmaps, and a two-week review are enough to start improving menu performance.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">小さく始める</span>GA4のサイト内検索を有効にし、ヒートマップを追加して、2週間後に数値を確認します。</p>

すべてを一度に最適化しようとしないこと。いちばんはっきりした指標を1つ選び、1つだけ直して、新しいデータが溜まるのを待ちます。メニューは一度設定したら終わりではなく、少しずつ調整していくものです。

変更を加えるときに心に留めておきたいことがひとつ。メニューを変えるたびに、ページを遅くしないことです。Googleによれば、Core Web Vitalsの「良好」とされる基準は、LCPが2.5秒未満、INPが200ミリ秒未満、CLSが0.1未満です。読み込み中にページがカクついたり、レイアウトがずれたりするような美しいメニューは、得るものより失うもののほうが大きいのです。

## おわりに

<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-performance-quarterly-review.webp" alt="Quarterly ecommerce menu performance review with fresh shopper behavior data" title="Quarterly menu performance review">
  <figcaption>A quarterly review keeps the menu aligned with new categories and real shopper behavior.</figcaption>
</figure>
数字は、あなたを採点したり評価したりするためにあるのではありません。お客様がどこでつまずいているのか — 肉眼や勘ではなかなか捉えきれないものを — ただ見えるようにしてくれるだけです。良いメニューは、初日から完璧である必要はありません。お客様が実際にどう動くかをもとに、少しずつ良くしていけばいいのです。

ささやかな提案として、3か月ごと、あるいは新しいカテゴリーを追加するたびに、メニューを見直してみてください。いちばん気負わずに始められるのは、今日GA4を有効にするかMicrosoft Clarityを導入して、2週間そのままにし、それからデータの目を通してメニューを眺めてみることです。お客様がずっと静かに伝えていたのに、これまで聞き取れていなかったことに、きっと驚くはずです。