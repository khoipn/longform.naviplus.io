---
lang: zh-CN
ref: measuring-menu-performance
order: 3
title: "如何判断你的菜单是否有效——5 个值得追踪的指标"
description: "用 5 个实用指标衡量菜单表现：点击率、导航深度、退出率、移动端行为和站内搜索——全部都能用 GA4 和 Clarity 免费追踪。"
topic_tag: "数据衡量"
hero_color: "#1c7ed6"
read_time: 7
seo_keywords:
  - 衡量菜单表现
  - GA4
  - 导航指标
  - 菜单数据分析
date: 2026-06-02
child_links:
  - title: "指标 1——每个菜单项的点击率"
    url: "/zh-CN/topic/menu-click-through-rate/"
    desc: "哪些菜单项被点击，哪些被忽略。"
  - title: "指标 2——导航深度"
    url: "/zh-CN/topic/navigation-depth-metric/"
    desc: "顾客要走几步才能找到一件商品。"
  - title: "指标 3——分类页的退出率"
    url: "/zh-CN/topic/collection-page-exit-rate/"
    desc: "顾客进入了分类页，却没看任何商品就离开了。"
  - title: "指标 4——移动端与桌面端的导航行为"
    url: "/zh-CN/topic/mobile-vs-desktop-navigation-behavior/"
    desc: "同一个菜单，两个完全不同的世界。"
  - title: "指标 5——站内搜索使用率"
    url: "/zh-CN/topic/internal-search-usage-rate/"
    desc: "当顾客去搜索本该由菜单解决的内容时。"
---

我们大多数人是凭感觉来判断自己的菜单的。看上去整齐，菜单项也够多，没人抱怨——那就说明没问题吧。但有一点很少有人注意到：顾客很少会抱怨一个难用的菜单。他们不会发消息给你提意见。他们只是默默找了一会儿，没找到需要的东西，然后关掉了页面。

要知道你的菜单是否真的在尽职，光凭直觉是不够的。你得看顾客实际做了什么：他们点了什么，往下走了多深，在哪里停了下来。这就是**衡量菜单表现**的含义——不再靠猜，而是让数据说话。好消息是，你不需要成为数据分析专家。下面这五个指标足以让你起步，而且其中大多数都内置在 GA4 或 Microsoft Clarity 这类免费工具里。

这篇文章会逐一讲解每个指标：它是什么，为什么重要，以及如何解读它，让你能判断出菜单到底是在帮顾客，还是在挡他们的路。

<div class="lf-key">
  <span class="lf-key-title">快速要点</span>
  <ul>
    <li>菜单效果不需要复杂分析也可以衡量。</li>
    <li>五个指标能显示用户在哪里点击、停下或搜索。</li>
    <li>先修复一个最明确的问题，再等待新数据。</li>
  </ul>
</div>

## 指标 1——每个菜单项的点击率

一个菜单项的点击率（CTR）是指看到该菜单项并真正点击它的人所占的比例。它是最简单的指标，却往往最能说明问题，因为它告诉你每个菜单项吸引了多少注意力。

当你把整个菜单的点击率一次性放在一起看时，通常会看到一幅参差不齐的画面。少数几项被点击得很多，少数几项几乎没什么点击。一个几乎没人点的菜单项不一定就没用——它可能放错了位置、起了个让人费解的名字，或者被其他菜单项盖过了风头。

解读点击率时，有几个问题值得问一问：

- 对营收最关键的那一项，是否在被频繁点击之列？
- 有没有某个你以为"无关紧要"的菜单项，被点击得出乎意料地多？顾客对它的需要可能超出你的想象。
- 有没有某个几乎没人点的菜单项，却仍然占着菜单栏上的黄金位置？

在 GA4 里，你可以通过给每个菜单链接绑定点击事件来追踪这一点。如果技术方面让你望而生畏，Microsoft Clarity 提供的热力图能仅用颜色就展示出人们点击的位置。

点击率也很适合用来做实验。把某项改个名、调一下顺序，或者把两项合并——然后看一两周后数字怎么变化。我们在另一篇文章里更详细地讲了如何针对具体情境去读懂和解读点击率。

<p class="lf-readmore"><span class="lf-readmore-kicker">深入了解</span><a href="/zh-CN/topic/menu-click-through-rate/">阅读完整指南 → 指标 1——每个菜单项的点击率</a></p>
<figure>
  <img src="/images/measuring-menu-performance/menu-click-through-rate.webp" alt="Menu click-through rate heatmap showing which ecommerce navigation items shoppers use" title="Menu click-through rate for ecommerce navigation">
  <figcaption>CTR shows which menu items pull attention and which ones quietly get ignored.</figcaption>
</figure>

## 指标 2——导航深度

导航深度衡量的是顾客要点击多少次才能找到他们需要的东西。一件离首页只有一次点击的商品很容易找到。而一件离首页有四次点击的商品，大多数顾客还没走到就放弃了。

这正是菜单悄悄损害你销售的地方。你也许正好有顾客想要的商品，价格合适，照片精美——但如果它埋得太深，顾客根本看不到。每多一层点击，就多一次让顾客分心、改主意或关页面的机会。

在 GA4 的路径报告里，你可以看到人们从首页出发常走的路径。如果顾客要绕好几步才能到达一个主分类页，那就是一个信号，说明你的菜单让他们费的劲太多了。

一个实用的小技巧：列出对营收最关键的五个页面，然后从首页一路点过去，数一数步数。如果超过三步，你可能把它们藏得太好了。像桌面端的 Mega Menu，或者手机屏幕底部的 Tab Bar 这类菜单形式，存在的意义正是缩短这条路径——把重要的菜单项直接送到顾客触手可及的地方。我们在另一篇文章里讨论了如何衡量深度，以及如何合理地把它降下来。

<p class="lf-readmore"><span class="lf-readmore-kicker">深入了解</span><a href="/zh-CN/topic/navigation-depth-metric/">阅读完整指南 → 指标 2——导航深度</a></p>
<figure>
  <img src="/images/measuring-menu-performance/navigation-depth-click-path.webp" alt="Navigation depth click path showing how many steps shoppers need to reach products" title="Navigation depth click path metric">
  <figcaption>Navigation depth reveals how many clicks stand between shoppers and the products they want.</figcaption>
</figure>

## 指标 3——分类页的退出率

退出率告诉你的是，有多少比例的会话是在某个特定页面结束的，无论顾客是怎么到达这个页面的。和跳出率（只统计会话的第一个页面）不同，退出率适用于会话中的每一个页面——这让它非常适合用来考察分类页。

为什么分类页很重要？因为到达一个分类页意味着顾客已经带着意图来了。他们点击了"男鞋"或"厨房用品"，是因为想看那一类东西。如果他们中的大多数随后就在这里离开，连一件商品都没看，那说明他们预期看到的和实际看到的之间出现了某种错位。

分类页退出率偏高，常见的几个原因：

- 菜单项的名字承诺了一回事，页面给出的却是另一回事。
- 页面展示的内容太多，顾客不知道该看哪里。
- 没有筛选功能，顾客没法缩小选择范围。
- 页面加载太慢。据 Google 所说，主要内容显示出来所需时间（LCP）的"良好"门槛是 2.5 秒以内；如果慢得多，顾客在页面还没加载完之前就走了。

读这个指标时有一点要注意：退出率高不一定是坏事。有些页面本来就是自然的终点。但对一个分类页来说——顾客本该从这里继续进入商品——一个偏高的数字通常值得再看一眼。我们在另一篇文章里更深入地讲了如何区分"正常"的退出率和"令人警惕"的退出率。

<p class="lf-readmore"><span class="lf-readmore-kicker">深入了解</span><a href="/zh-CN/topic/collection-page-exit-rate/">阅读完整指南 → 指标 3——分类页的退出率</a></p>
<figure>
  <img src="/images/measuring-menu-performance/category-page-exit-rate.webp" alt="Category page exit rate showing shoppers leaving before viewing ecommerce products" title="Category page exit rate for menu performance">
  <figcaption>High category exits warn that shoppers reached a section but did not continue to products.</figcaption>
</figure>

## 指标 4——移动端与桌面端的导航行为

这是很多人会跳过的指标，而他们往往要为此付出代价。原因很简单：如今大多数顾客是用手机来访问的。行业数据显示，移动设备占了电商网站流量的大部分——具体数字因来源和地区差异很大，但移动端早就超过桌面端了。

问题在于，一个在笔记本屏幕上看着没问题的菜单，在手机上可能非常难用。多列的 Mega Menu 没法原封不动地塞进竖屏。汉堡菜单把所有东西都藏在一个图标后面——顾客得点开才能看到。Nielsen Norman Group 已经证明，藏在汉堡菜单后面的内容，被发现和使用的概率比把它直接显示出来时低：隐藏你的主导航，会让顾客找到它的概率几乎减半。

读懂这一点最简单的办法，是按设备拆分你的数字。在 GA4 里，你可以把两组并排对比：

| 对比什么 | 它引出的问题 |
| --- | --- |
| 移动端与桌面端的菜单点击率 | 同一个菜单项，在移动端被点击得是否少得多？ |
| 导航深度 | 移动端顾客是否要点更多次才能到达目标？ |
| 各设备的转化率 | 移动端在哪里明显落后于桌面端？ |

如果移动端明显落后，很可能是按钮太小、超出了拇指能够到的范围，或者重要的菜单项被深埋在一个侧滑菜单后面。这就是为什么很多店铺在移动端使用固定在屏幕底部的 Tab Bar，在桌面端使用 Mega Menu——两种不同的布局，对应两种不同的使用方式。像 [Navi+](https://naviplus.io) 这样的工具让你无需写代码就能分别配置移动端和桌面端，这样你就不必硬把一套设计套到两边。我们专门写了一篇文章，讲如何对比并处理两个平台之间的差距。

<p class="lf-readmore"><span class="lf-readmore-kicker">深入了解</span><a href="/zh-CN/topic/mobile-vs-desktop-navigation-behavior/">阅读完整指南 → 指标 4——移动端与桌面端的导航行为</a></p>
<figure>
  <img src="/images/measuring-menu-performance/mobile-desktop-navigation-behavior.webp" alt="Mobile and desktop navigation behavior comparison for ecommerce menu performance" title="Mobile versus desktop navigation behavior">
  <figcaption>Mobile and desktop shoppers often need different navigation layouts and separate measurement.</figcaption>
</figure>

## 指标 5——站内搜索使用率

最后一个指标听起来和菜单没什么关系，但它其实是最清楚地反映菜单表现的一面镜子。站内搜索使用率，是指有多少比例的顾客选择使用网站上的搜索框，而不是点击菜单来浏览。

一点点搜索是正常的，甚至是好事——使用搜索的顾客往往购买意图更强，因为他们在主动寻找某个具体的东西。但如果这个比例突然飙升，通常就是个信号，说明菜单没能把顾客引导到他们需要去的地方。他们因为菜单帮不上忙而放弃了它，转而去打字搜索。

更能说明问题的，是搜索之后发生了什么。Baymard Institute 的研究显示，相当大比例的电商网站，其站内搜索的表现都低于可接受的标准。这意味着，当你的菜单把顾客推向搜索框时，你是在押注一个同样容易让他们失望的工具。

在 GA4 里，如果你打开了站内搜索追踪，就能看到顾客都搜了哪些词。那份清单是金矿。如果很多人输入的，正是你菜单里已经有的某个分类名，那这一项很可能放错了位置，或者起了个让人不好找的名字。

把站内搜索当作顾客一句客气的抱怨来读："我在你的菜单里找不到这个。"我们在另一篇文章里详细讲了如何利用搜索词来修补你的菜单。

<p class="lf-readmore"><span class="lf-readmore-kicker">深入了解</span><a href="/zh-CN/topic/internal-search-usage-rate/">阅读完整指南 → 指标 5——站内搜索使用率</a></p>
<figure>
  <img src="/images/measuring-menu-performance/internal-search-menu-gaps.webp" alt="Internal search usage rate revealing ecommerce menu gaps and missing categories" title="Internal search usage reveals menu gaps">
  <figcaption>Search terms act like quiet complaints about categories shoppers could not find in the menu.</figcaption>
</figure>

## 从哪里开始

五个指标听起来不少，但你不必一次全做。如果你刚起步，这里有一个建议的顺序：

1. 打开 GA4 并启用站内搜索追踪——几乎不费什么力气，就能马上得到指标 5，外加指标 2 和指标 3 的一部分。
2. 安装 Microsoft Clarity 来获取热力图，它支撑指标 1，还能让你快速看一眼移动端的行为。
3. 两周之后，坐下来一口气把数据过一遍，写下两三个看起来不对劲的地方。

<figure>
  <img src="/images/measuring-menu-performance/menu-performance-starting-checklist.webp" alt="Menu performance starting checklist with GA4 heatmaps and two week review" title="Menu performance starting checklist">
  <figcaption>GA4, heatmaps, and a two-week review are enough to start improving menu performance.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">从小处开始</span>开启 GA4 站内搜索，加入热图，然后两周后复盘数据。</p>

别想着一次把所有东西都优化好。挑出最清楚的那个指标，改一件事，然后等新数据出来。菜单是要逐步调整的东西，而不是设置一次就丢在一边的。

在做改动时，有一点要记住：每次改菜单，都别让页面变得更慢。据 Google 所说，"良好"的 Core Web Vitals 门槛是 LCP 在 2.5 秒以内、INP 在 200 毫秒以内、CLS 在 0.1 以内。一个漂亮但会让页面卡顿、或在加载时让布局抖动的菜单，弊大于利。

## 结语

<figure>
  <img src="/images/measuring-menu-performance/menu-performance-quarterly-review.webp" alt="Quarterly ecommerce menu performance review with fresh shopper behavior data" title="Quarterly menu performance review">
  <figcaption>A quarterly review keeps the menu aligned with new categories and real shopper behavior.</figcaption>
</figure>
数字不是用来给你打分或评判你的。它们只是帮你看清顾客在哪里卡住了——这是肉眼和直觉很难捕捉到的。一个好菜单不需要从第一天起就完美；它需要根据顾客实际的行为逐步改进。

一个温和的建议：每三个月检查一次你的菜单，或者每当你新增一个分类时就检查一次。最省心的起步方式，就是今天就打开 GA4 或安装 Microsoft Clarity，放上两周，然后回来用数据的眼光重新审视你的菜单。你会惊讶于顾客一直在默默告诉你、而你却从未听见的那些事。
