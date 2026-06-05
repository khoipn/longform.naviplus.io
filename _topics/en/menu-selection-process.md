---
lang: en
ref: menu-selection-process
title: "A Practical Process for Deciding on the Right Menu"
description: "A 5-step menu selection process for Shopify stores: from mobile share and category depth to building a Navi+ prototype on a real device, making decisions based on your own data."
image: "/images/choosing-the-right-shopify-menu/shopify-menu-selection-process.webp"
image_alt: "A Practical Process for Deciding on the Right Menu"
parent_title: "How to Choose the Right Menu Type for Your Shopify Store"
parent_url: "/choosing-the-right-shopify-menu/"
seo_keywords:
  - menu selection process
  - Shopify Analytics
  - mobile vs desktop
date: 2026-06-02
---

After reading the articles about each menu type, many people still get stuck at the final step: so what should my store actually use? That feeling is normal. The theory about Tab Bars, Mega Menus, or Slide Menus only becomes useful when you apply it to your own numbers.

This article lays out a **menu selection process** with 5 steps that you can work through in about an afternoon. There is no single formula that fits every store, but there is a way of working that helps you decide based on real data instead of gut feeling. I arrived at this approach after running a few small stores and guessing wrong a couple of times.

## Step 1: Look at your own mobile vs desktop split

Don't trust the line that "everyone says mobile is the majority." Open up your own numbers and look.

Go into Google Analytics (Tech / Device category) or Shopify Analytics (Online store sessions by device type). Pull the last 30-90 days for a large enough sample. You'll see the percentage of sessions coming from phones versus computers.

This number decides which screen you design for first. If 80% of visitors arrive on a phone, the phone experience is the main stage, and desktop is secondary. If you sell B2B and most of your customers use computers at the office, the story is reversed.

Also look at conversion rate split by device, not just traffic. According to the [Baymard Institute](https://baymard.com/lists/cart-abandonment-rate), cart abandonment on mobile is around 80%, higher than desktop (around 66%). If your store has a lot of mobile visitors but mobile conversion is low, hard-to-use navigation may be part of the reason.

## Step 2: Count your level-1 and level-2 categories

Open the Navigation section in Shopify and count for real.

- **Level-1 categories**: the largest groups. For a fashion shop, for example: "Women", "Men", "Accessories", "Sale".
- **Level-2 categories**: the sub-branches inside each level-1 category. "Women" might include "Tops", "Bottoms", "Dresses", "Shoes".

This number narrows your options. A store with only 3-4 level-1 categories and almost no level-2 categories doesn't need a Mega Menu — the Mega Menu exists to hold multi-tier structures. On the other hand, a shop with 8 level-1 categories, each with 5-6 sub-branches, would make customers scroll until their hand aches if everything is stuffed into a single Slide Menu.

A rough rule I often use: the flatter and smaller your structure, the more you should favor an always-visible menu (like a Tab Bar at the bottom). The deeper and more branched your structure, the more you need a menu that groups and expands (a Mega Menu on desktop, a Slide Menu on mobile).

## Step 3: Identify the 3-5 pages customers need to reach most

This is the step most often skipped, yet it matters.

Go back to Google Analytics or Shopify Analytics and open the report of most-viewed pages (Top pages / Landing pages). Write down the 3-5 destinations customers truly need. They usually fall into: the homepage, a few key collections, the search page, the cart, and sometimes an order-tracking or contact page.

Why only 3-5? Because that's the reasonable number of "shortcuts" you can place in the easiest spots to tap. A Tab Bar at the bottom of a mobile screen can usually only hold 4-5 items before it gets cramped. If you correctly identify the 4 most important destinations, you know exactly what to put on the Tab Bar.

Be honest at this step. What you *want* customers to see (say, your brand story page) isn't necessarily what they *need* in order to buy. Follow behavioral data, not wishes.

## Step 4: Choose your menu configuration based on four factors

Now combine the three steps above with the four factors discussed in earlier articles: the dominant device, category depth, the number of important destinations, and the specifics of your product category. Cross-check against the comparison tables in those articles. Below are a few common combinations.

| Your situation | Suggested configuration |
|---|---|
| Mostly mobile visitors, flat structure, 4 clear destinations | Tab Bar at the bottom + Slide Menu for the rest |
| Many categories, many sub-branches, significant desktop traffic | Mega Menu on desktop + Slide Menu on mobile |
| Need one standout action (chat, booking, call) | FAB for that action, combined with the main menu |
| Image-heavy catalog, little text (cosmetics, food) | Visual Grid Menu |

A note on how people hold their phones. According to [Steven Hoober's research](https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php), about half of users hold their phone in one hand, doing most of the work with their thumb. The thumb's easy-reach zone is in the lower half of the screen. That's why a Tab Bar at the bottom is usually easier to tap than a hamburger in the top corner — the top corner falls into the "can't quite reach" zone.

This is also when to think about hidden navigation. [Nielsen Norman Group](https://www.nngroup.com/articles/hamburger-menus/) measured and found that always-visible menus are discovered and used about 1.5 times more than menus hidden behind a hamburger icon. That doesn't mean the hamburger is wrong — it's still useful for holding secondary items — it means: don't hide your most important destinations behind it.

## Step 5: Install Navi+, build a prototype, and view it on a real device

By now you have a hypothesis. The remaining task is to build it and see it with your own eyes.

[Navi+](https://naviplus.io) lets you build Tab Bars, Mega Menus, Slide Menus, FABs, and Grid Menus without code — just drag and drop — and configure mobile and desktop separately. You set up exactly the configuration you chose in Step 4, one style per device, then turn on preview mode. Because the menu is created independently of the theme, it stays intact even if you change your theme later.

The point I want to stress: **view it on a real phone, not just in an emulator**.

The emulator in your browser gives you the right screen size, but it can't reproduce how a real finger taps a button — whether the button is too small, or whether the Tab Bar gets covered by the keyboard or the phone's navigation bar. Some issues only surface when you pick up the phone and try to buy something like a real customer.

While previewing, watch the speed too. Google sets the "good" threshold for [Core Web Vitals](https://web.dev/articles/vitals) at LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1. A heavy menu can make the page stutter or shift layout. Navi+ is optimized to limit its impact on these metrics, but you should still verify it on your own store.

Finally, don't be afraid to adjust. The configuration you chose in Step 4 is a starting point, not a verdict. Adding or removing a navigation tool isn't a big deal. Build a prototype, look at the numbers after a few weeks, then adjust. That's how this process really pays off.

---

In short, a good **menu selection process** doesn't start with which menu type you like, but with the numbers: your mobile vs desktop split, category depth, and the destinations customers truly need. The four factors plus one real-device prototype will give you an answer closer to your store than any generic advice.

This article is part of the larger guide on [How to Choose the Right Menu Type for Your Shopify Store](/choosing-the-right-shopify-menu/).
