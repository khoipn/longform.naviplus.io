---
lang: zh-CN
ref: menu-app-installation-checklist
title: "安装任何菜单 App 之前都该跑一遍的检查清单"
description: "面向 Shopify 商店的菜单 App 安装检查清单：四个步骤，在安装前后分别测量 PageSpeed 与 Core Web Vitals，帮你挑到一个不会拖慢手机或桌面端页面速度的 App。"
image: "/images/navigation-and-page-speed/menu-app-installation-checklist.webp"
image_alt: "安装任何菜单 App 之前都该跑一遍的检查清单"
parent_title: "导航与页面速度——挑一个不会损害 Core Web Vitals 的菜单 App"
parent_url: "/zh-CN/navigation-and-page-speed/"
seo_keywords:
  - 菜单 App 安装检查清单
  - PageSpeed Insights
  - Search Console
date: 2026-06-02
---

在你给任何菜单 App 点下「添加 App」之前，有一件小事值得先做：把你的商店现在到底有多快记录下来。听起来很简单，但这恰恰是大多数人会跳过的一步——然后几周之后他们才发现网站变慢了，却不知道是哪个 App 造成的。

这是一份简短的**菜单 App 安装检查清单**，你马上就能照着做，全部来自真实运营商店的经验。没有什么花哨的东西——只是几次安装前后的测量，这样你就不会装上一个漂亮的菜单，却在不知不觉中拿速度换了它。你装的 App 越多，这个习惯就越划算，因为你每加一个 App 都可能影响到页面速度。

## 为什么速度值得在意

网购顾客本来就很容易流失。据 Baymard Institute 的数据，平均购物车放弃率一直徘徊在 70% 左右，而且这个数字十多年来几乎没怎么变过。每多一秒的加载时间、每一次页面加载过程中的布局跳动，都是顾客离开的又一个理由。

Google 也把页面速度和稳定性视为体验的一部分，归入一组叫 Core Web Vitals 的指标。按 Google 的说法，三个主要数字是：

- LCP（Largest Contentful Paint）：低于 2.5 秒为良好。
- INP（Interaction to Next Paint）：低于 200 毫秒为良好。
- CLS（Cumulative Layout Shift——页面是否会乱跳）：低于 0.1 为良好。

你不需要把这些背下来。只要记住一点：一个用心打造的菜单 App 不会让这三个数字明显变差。下面这份清单能帮你用数据来确认这一点，而不是靠感觉。

## 菜单 App 安装检查清单：四个步骤，安装前后都测一遍

这是本文的核心。四个步骤，按顺序来。

### 第一步：安装前，先测一下商店的 PageSpeed 分数

打开 Google 的 [PageSpeed Insights](https://pagespeed.web.dev)，把你的首页 URL 和一个有代表性的产品页粘进去，跑一遍测试。把分数记录下来——截个图，或者存到一个小文件里。

为什么要存？因为没有「之前」的快照，你就没有任何东西可以对照。几周之后，当网站感觉变慢时，你将分不清究竟是菜单 App、你新装的评价 App，还是你刚上传的那一批产品图。

PageSpeed Insights 会给你两种数据。上半部分是来自真实用户的现场数据（field data，采集自 Chrome User Experience Report）；下半部分是实验室数据（lab data，Google 用机器模拟一次页面加载）。在这一步，只要记录总分以及 LCP、INP、CLS 这三个数字就行。

### 第二步：装上 App，再测一次，做对比

把你打算用的菜单 App 装上，然后完全按照你实际会用的方式去配置它——也就是说，把你真正要用的菜单类型都开起来：手机端底部的 Tab Bar、桌面端的 Mega Menu，或者 Slide Menu——而不是拿默认配置去测。

然后用第一步同样的 URL，再跑一遍 PageSpeed Insights。把两组结果并排放在一起。

提醒一点：刚装好的时候，现场数据（上半部分）通常还没变化，因为它汇总的是过去 28 天的数据。你能马上拿来对比的是实验室数据。如果实验室分数掉了几分，别慌——关键是掉了多少。掉 2-3 分通常不用担心；如果大幅下滑，或者 CLS 突然飙升（菜单出现时页面剧烈抖动），就值得再看一眼了。

### 第三步：1-2 周后，在 Search Console 里查 Core Web Vitals

这一步才会给你真正的数字，因为它测量的是真实顾客的体验。打开 [Google Search Console](https://search.google.com/search-console)，进入 Core Web Vitals（网页体验）。这份报告用的是来自你自己用户的现场数据。

为什么要等 1-2 周？现场数据是在一个滚动的 28 天窗口里计算的。大约两周后，这个窗口里会有相当一部分是新数据——足以让你看出趋势。在 Search Console 里，留意有没有 URL 从「良好」滑向「需要改进」或「较差」。如果在你装上菜单 App 之后，不达标的 URL 一下子暴增，那就是个信号。

如果你的商店访问量还很少，Search Console 可能没有足够数据来显示报告。这种情况下，就改用 PageSpeed Insights 和实验室数据来判断。

### 第四步：如果分数明显下降，就换 App 或者调整配置

如果测下来指标明显变差，你有两个选择。

一是优化配置：关掉不必要的动画、给臃肿的 Mega Menu 减少条目数、删掉塞进菜单里的那些大图。问题往往不出在 App，而在于我们把菜单做得太贪心了。

二是换 App，如果 App 本身就很重、又没办法收住的话。一个好的菜单 App 应该把速度当成自己的责任，而不是把这份活儿推给你。

## 别忘了在手机上测

大多数越南商家来自手机的流量都比桌面端多——顾客刷着 Facebook，点一个链接，就直接在手机上打开了商店。

手机端的分数几乎总是低于桌面端，因为手机性能更弱，移动网络也不如 wifi 稳定。在 PageSpeed Insights 里，记得切换到 Mobile 标签去测——别只看好看一些的 Desktop 分数。

这一点对手机端菜单尤其重要。一个做得马虎的底部 Tab Bar 或 Slide Menu，会让页面在顾客刚打开商店时抖动（把 CLS 推高）。试着用你自己的手机打开商店，盯着看页面加载时有没有东西在跳或卡顿。你自己的眼睛常常能抓到分数还没反映出来的问题。

## 一点温和的提醒

上面这份清单并不是要把你吓得不敢用菜单 App——好的导航能帮顾客更快找到产品，这是值得投入的。重点只有一个：挑一个用心对待速度的 App。

[Navi+](https://naviplus.io) 正是本着这种精神打造的：一个无需代码、拖拽即用的菜单构建器，支持 Tab Bar、Mega Menu、Slide Menu、FAB 和 Grid Menu；可以为手机端和桌面端分别配置；并经过调优，不会拖累你的 Core Web Vitals。即便如此，那句实在话依然成立：对任何 App——包括 Navi+——都跑一遍上面这四个测量步骤，让你能用自己商店的数字来给自己吃下定心丸。

本文是更大篇幅指南[导航与页面速度——挑一个不会损害 Core Web Vitals 的菜单 App](/zh-CN/navigation-and-page-speed/)的一部分。
