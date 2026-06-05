---
lang: jp
ref: mobile-navigation-beyond-hamburger
order: 4
title: "モバイルナビゲーション — なぜハンバーガーメニューは時代遅れになりつつあるのか、代わりに何を使うべきか"
description: "EC サイトでハンバーガーメニューが時代遅れになりつつある理由と、代わりに使うべきモバイルナビゲーション、すなわち Tab Bar、サムゾーン、そしてストアに Slide Menu を組み合わせる方法を解説します。"
topic_tag: "モバイル"
hero_color: "#e8590c"
read_time: 7
seo_keywords:
  - モバイルナビゲーション
  - ハンバーガーメニュー
  - タブバー
  - サムゾーン
date: 2026-06-02
child_links:
  - title: "EC モバイルにおけるハンバーガーメニューの本当の問題"
    url: "/jp/topic/problems-with-hamburger-menu/"
    desc: "隠しすぎ、一手間が増え、配置も間違っている。"
  - title: "サムゾーン — 人がスマホをどう持つかを理解する"
    url: "/jp/topic/thumb-zone-mobile-design/"
    desc: "もっともタップしやすいのは画面の中央と下部です。"
  - title: "Tab Bar — 主要な代替手段"
    url: "/jp/topic/tab-bar-mobile-navigation/"
    desc: "4 つか 5 つの主要な行き先を、常に表示しておく。"
  - title: "Tab Bar と Slide Menu の組み合わせ（そして FAB の役割）"
    url: "/jp/topic/combining-tab-bar-and-slide-menu/"
    desc: "モバイルストアでもっともよく使われるパターン。"
---

ハンバーガーメニュー — 画面の隅に積み重なった 3 本の線 — は、モバイルウェブの黎明期にまでさかのぼります。当時は画面が小さく、回線も遅く、デザインの選択肢も限られていました。すべてを 1 つの小さなアイコンの後ろにしまい込むのは、スペースを節約するための理にかなった方法でした。それ自体は間違っていません。けれども、あらゆる状況でそれを使おうとすると、話がおかしくなってきます。

カテゴリーが 10 を超えるストアを運営しているなら、**モバイルナビゲーション**はほとんど誰も気づかないまま売上を静かに失わせている原因になっていることが多いものです。お客様はスマホでやってきて、商品を見て回りたいと思っています。ところがカテゴリーへの道は、タップして開かなければならないアイコンの後ろに隠れています。この記事では、EC モバイルでハンバーガーメニューが力尽きてしまう理由と、より実用的な代替手段 — Tab Bar、サムゾーン、そして人が実際にスマホを持つやり方に合わせて複数の種類のメニューを組み合わせる方法 — を見ていきます。

<div class="lf-key">
  <span class="lf-key-title">要点</span>
  <ul>
    <li>ハンバーガーメニューは重要な導線を隠します。</li>
    <li>親指ゾーンは重要なナビゲーションを下部へ動かします。</li>
    <li>Tab Bar と Slide Menu の組み合わせが実用的です。</li>
  </ul>
</div>

## EC モバイルにおけるハンバーガーメニューの本当の問題

いちばんの問題は、ハンバーガーメニューの見た目が悪いことではありません — ナビゲーションを隠してしまうことです。お客様は中身を知る前に、まずタップしなければなりません。一見すると小さな動作に思えますが、何千もの訪問にわたって積み重なると、「カテゴリーが見えている」状態と「見えていない」状態のあいだに、無視できない差が生まれます。

Nielsen Norman Group はこれを計測しています。6 つのウェブサイトで 179 名のユーザーを対象にした調査で、メインナビゲーションを隠すと、人がそれに気づいて使う確率がほぼ半分にまで下がることがわかりました。同時に、タスクの完了にかかる時間も延び、体験の難しさの感じ方も増したのです。この結果はスマホでもデスクトップでも同じでした。

もう 1 つ考慮に値する点があります。3 本線のアイコンは今日の大半の人にとってなじみのあるものですが、NN/g によれば、それでも誰にとっても自明というわけではなく、特に IT にあまり詳しくないユーザーにはそうです。お客様が全員若い層というわけでないなら、これは心に留めておく価値があります。

EC では、たった一手間の余分なステップが、思っている以上のコストになります。平均的なカート放棄率はおよそ 70% — Baymard Institute は 50 件の調査をもとに 70.22% としています。その大半は決済段階で起きますが、そこに至るまでの道のりもまた一役買っています。途中にあるどんな小さな障害も、そのたびにお客様を少しずつ取りこぼします。隠されたメニューは、取り除くのがもっとも簡単な障害の 1 つです。

これは、ハンバーガーが常に悪いという意味ではありません。リンクが数本しかないシンプルなブログやランディングページなら、今でも問題ありません。やっかいなのは、EC ストアがそこまでシンプルであることはめったにない、という点です。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/problems-with-hamburger-menu/">詳しいガイドを読む → EC モバイルにおけるハンバーガーメニューの本当の問題</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/mobile-navigation-beyond-hamburger/mobile-hamburger-menu-problem.webp" alt="Mobile hamburger menu hiding ecommerce navigation and reducing product discovery" title="Mobile hamburger menu problem for ecommerce navigation">
  <figcaption>A hidden hamburger menu adds friction before shoppers even see the store categories.</figcaption>
</figure>

## サムゾーン — 人がスマホをどう持つかを理解する

メニューをどこに置くべきかを知るには、まず人がスマホをどう持つかを理解しなければなりません。**サムゾーン（親指の届く範囲）**という考え方は、インターフェースの専門家 Steven Hoober によるもので、彼は現実の場面で 1,300 を超えるやり取りを観察したうえでこれを提唱しました。

中心となる発見はシンプルです。スマホでの操作のほとんどは親指で行われている、ということです。Hoober の記録によれば、およそ半数の人が片手でスマホを持ち、親指だけですべてのタップをこなしていました。そして親指には物理的な限界があります — ある場所には楽に届き、別の場所には伸ばさなければ届かず、いくつかの場所は持ち方を変えないとほとんど届きません。

人は通常、画面を 3 つのゾーンに分けて捉えます。

- **届きやすい:** 画面の下部と中央。親指が自然に置かれる場所です。重要な操作はここに置くべきです。
- **伸ばせば届く:** 画面の中央寄りの両側。少し努力すれば届く範囲です。
- **届きにくい:** 上の両隅。たいていは持ち替えるか、両手を使う必要があります。

ここでもう一度ハンバーガーメニューを見てみましょう。それは画面の上の隅 — もっとも届きにくい場所 — にあります。つまり、もっとも重要なナビゲーション要素が、親指がもっとも届きにくい場所に置かれているのです。スマホの画面が大きくなるほど、その距離はいっそう顕著になります。

これこそが、メニューを下部へ移す根本的な理由です。下部が「見た目にきれい」だからではなく、下部が親指の自然な届く範囲に入っているからです。この点を理解すれば、その後に続くデザインの選択は、ずっと説明しやすくなります。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/thumb-zone-mobile-design/">詳しいガイドを読む → サムゾーン — 人がスマホをどう持つかを理解する</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/mobile-navigation-beyond-hamburger/mobile-thumb-zone-navigation.webp" alt="Mobile thumb zone showing easy and hard to reach ecommerce navigation areas" title="Mobile thumb zone for ecommerce navigation">
  <figcaption>The thumb zone explains why bottom navigation is easier to use than top-corner menus.</figcaption>
</figure>

## Tab Bar — 主要な代替手段

Tab Bar とは、画面の下部に固定されたナビゲーションバーで、いくつかのアイコンが常に表示されているものです。銀行アプリ、配車アプリ、SNS を使っているなら、すでになじみがあるはずです。ホーム、検索、カート、アカウント — それぞれに専用の枠があり、常に表示され、常に親指の届く範囲にあります。

Tab Bar の強みは 2 つの考え方に集約されます。すでに見えていること、そして手が届くことです。お客様は、中に何があるかを知るためにタップして開く必要がありません。主要な経路が目の前にそのまま並んでいます。そして下部にあるからこそ、サムゾーンの「届きやすい」部分にぴったり収まるのです。

覚えておく価値のある経験則が 1 つあります。Tab Bar は項目が 3 つから 5 つのときにもっともうまく機能します。Google の Material Design も Apple の Human Interface Guidelines もこれを推奨しています。5 つを超えると、タップ対象どうしが近すぎて、親指が間違ったものに当たりやすくなります。多くのストアにとっては、4 つが心地よいバランスの落としどころになることが多いものです。

2 つのアプローチを簡単に比較してみましょう。

| | ハンバーガーメニュー | Tab Bar |
|---|---|---|
| 視認性 | タップするまで隠れている | 常に表示されている |
| 画面上の位置 | 上の隅（届きにくい） | 下部（届きやすい） |
| 適した項目数 | リスト形式で多数 | 3〜5 の主要経路 |
| 向いている用途 | 二次的で、めったに使わない項目 | もっとも重要な経路 |

Tab Bar に切り替えるときに気をつけたいことが 1 つあります。それでページが遅くなったり、レイアウトがずれたりしないようにすることです。Google は Core Web Vitals でかなり明確なしきい値を定めています — LCP は 2.5 秒未満、INP は 200 ミリ秒未満、CLS は 0.1 未満です。下部に固定するバーは、不用意に追加するとレイアウトのずれ（CLS に影響）を引き起こしたり、ページを重くしたりすることがあります。ですからツールを選ぶときは、読み込み速度に配慮しているものを優先しましょう。

ここで [Navi+](https://naviplus.io) が役に立ちます。ドラッグ＆ドロップでコード不要で Tab Bar を作り、モバイル向けに個別に設定でき、Core Web Vitals のスコアを下げないように作られています。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/tab-bar-mobile-navigation/">詳しいガイドを読む → Tab Bar — 主要な代替手段</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/mobile-navigation-beyond-hamburger/mobile-tab-bar-navigation.webp" alt="Mobile tab bar navigation keeping ecommerce categories search cart and account within reach" title="Mobile tab bar navigation for ecommerce stores">
  <figcaption>A Tab Bar keeps the main paths visible and within easy thumb reach.</figcaption>
</figure>

## Tab Bar と Slide Menu の組み合わせ

ここで、こう思うかもしれません。Tab Bar に入るのが 3〜5 項目だけなら、残りの何十ものカテゴリーはどこへ行くのか、と。これはよくある誤解です。Tab Bar はナビゲーション全体を置き換えるものではありません — もっとも重要な経路だけを担うものです。

実用的なやり方は、複数の種類のメニューを組み合わせて、それぞれに 1 つの役割を持たせることです。

- **Tab Bar** は 3〜5 の中核となる経路を担います。ホーム、カテゴリー、検索、カート、アカウントです。
- **Slide Menu**（実のところ展開版のハンバーガーです）は残りを担います — 全カテゴリーの一覧、ポリシーページ、お問い合わせなど。これらは大切ですが、毎回必要になるわけではありません。
- **FAB**（フローティングアクションボタン）は、ストアに必要であれば、サポートチャットや素早いカート追加など、1 つの際立ったアクションのためのものです。

こう見れば、ハンバーガーは消されるのではなく — 正しい役割を与えられるのです。その仕事は二次的な情報を担うことであって、ナビゲーション全体を背負うことではありません。主要な経路は下の Tab Bar へ移り、そこでは親指が楽に届き、目もすぐに見つけられます。

この組み合わせでやっかいなのは、モバイルとデスクトップを別々に設定しなければならない点です。デスクトップでは、複数の列にわたって広がる Mega Menu は今でも理にかなっています。マウスカーソルには「届きにくいゾーン」がないからです。けれどもモバイルでは、その同じメニューが圧倒的に重く感じられてしまいます。2 つの環境には、2 つの異なる論理があるのです。

[Navi+](https://naviplus.io) は、これらすべての種類のメニュー — Tab Bar、Slide Menu、Mega Menu、FAB、Grid Menu — を 1 か所で扱え、モバイルとデスクトップを別々に設定できます。メニューはテーマを変えてもそのまま残るので、インターフェースを切り替えるたびにゼロから作り直す必要もありません。

<p class="lf-readmore"><span class="lf-readmore-kicker">深掘り</span><a href="/jp/topic/combining-tab-bar-and-slide-menu/">詳しいガイドを読む → Tab Bar と Slide Menu の組み合わせ（そして FAB の役割）</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/mobile-navigation-beyond-hamburger/tab-bar-slide-menu-fab-combination.webp" alt="Tab Bar Slide Menu and FAB combination for mobile ecommerce navigation" title="Combining Tab Bar Slide Menu and FAB on mobile">
  <figcaption>Tab Bar, Slide Menu, and FAB work best when each has a clear role.</figcaption>
</figure>

## どこから始めるか

最初に 1 つだけやることを選ぶとしたら、自分のスマホでストアを開き、片手で購入までの流れを最後までたどってみてください。スマホをふだんどおりに持ち、持ち替えないこと。カテゴリーに入るために、親指がどれだけ伸ばさなければならないかに注目してください。

自分を点検するためのいくつかの問いです。

- もっとも重要な経路はすでに見えていますか、それとも見えるようにするためにタップして開かなければなりませんか。
- お客様が目当てのカテゴリーにたどり着くのに、何回タップが必要ですか。
- もっともよく使うボタンは、親指が無理なく届く範囲にありますか。
- メニューは読み込み時にページを遅くしたり、レイアウトをずらしたりしていませんか。

<figure>
  <img src="https://cdn.naviplus.app/longform/images/mobile-navigation-beyond-hamburger/mobile-navigation-one-handed-audit.webp" alt="One handed mobile navigation audit for ecommerce tab bar and hamburger menu placement" title="One handed mobile navigation audit">
  <figcaption>A one-handed walkthrough quickly shows whether key paths are visible and reachable.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">片手テスト</span>スマートフォンでストアを開き、手を持ち替えずに購入導線を試します。</p>

すべてを一度にやり直す必要はありません。たいていは、3〜5 の主要経路を下の Tab Bar へ移し、残りを Slide Menu にまとめるだけで、違いを実感できます。これは、わずかな手間でできるのに、モバイルのお客様の日々の体験に直接触れる、そういう種類の変更です。

ハンバーガーメニューは敵ではありません。二次的で、めったに使わない項目のための居場所は今でもあります。けれども、今日のようなモバイルファーストのストアでは、それにナビゲーション全体を背負わせることは、もはや最良の初期設定ではありません。重要な経路をハンバーガーから Tab Bar へ移すこと — それは、ストアに対してできるもっとも安上がりで、もっとも価値のある改善の 1 つです。