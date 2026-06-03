---
lang: en
ref: menu-click-through-rate
title: "Metric 1 — Click-through rate of each menu item"
description: "Menu item CTR shows which menu items get clicked and which get skipped. How to measure it with GA4 and Clarity, how to read it, and how to adjust your menu to lift click rates."
parent_title: "How to tell whether your menu is working well — 5 metrics to track"
parent_url: "/measuring-menu-performance/"
seo_keywords:
  - menu item CTR
  - GA4
  - Hotjar
  - Clarity
date: 2026-06-02
---

Menu item CTR is the first number I look at whenever I want to know if a menu is doing its job. Put simply, it tells you, out of the people who see the menu, what share actually click a specific item. An item that many people see but few people click is usually telling you something — you just have to read it correctly.

This article goes deep on one metric: the CTR of each menu item. How to measure it, how to read it, and most importantly, what to do once you've read it.

## What menu item CTR is

The CTR (click-through rate) of a menu item is the ratio between how many times that item is clicked and how many times the menu is shown. For example, if the menu is shown 1,000 times in a week and the "New arrivals" item is clicked 80 times, then that item's CTR is about 8%.

The nice part is that you don't look at one overall number. You look at each item, side by side. How much for "Home", how much for "Sale", how much for "Contact". It's the gap between the items that's worth noticing, not the absolute figure.

I don't worry too much about what CTR "counts as good". Every shop is different, every audience is different. What I care about is the order: which items are used a lot, and which ones almost nobody touches.

## How to measure CTR for each item

There are a few ways, from precise to visual. You don't need all three — pick the one that suits you.

### Measuring with GA4

GA4 (Google Analytics 4) is the clearest quantitative approach. By default, Enhanced Measurement only captures clicks that lead off your domain; it doesn't automatically know when an item in your internal navigation bar has been clicked.

To capture clicks on the menu, the common approach is to use Google Tag Manager: create a trigger for link clicks inside the nav area, then send GA4 a dedicated event (many people name it `menu_click`), along with a parameter holding the name of the item that was clicked. After that, in the Engagement > Events report, you'll see each item with its click count listed separately.

A note from experience: after you set this up, the data usually takes a day or two to show fully in the reports, so don't rush to conclusions on the first day. And you need to know the "number of people who saw the menu" to calculate the rate — this is usually approximated by the number of page views that contain the menu.

### Measuring with Hotjar or Clarity

If you'd rather not touch tags and code, Hotjar or Microsoft Clarity give you the answer visually. Both have a click heatmap — a heat map showing where there's a lot of clicking and where things are cold.

Microsoft Clarity is free and easy to start with. You add a snippet, and a few days later you open the heatmap and see which menu areas are bright and which are dark. For mobile menus, Clarity can show the expanded menu state too, so you can see the items inside a slide menu, not just the part visible right away.

One thing Clarity does well that GA4 doesn't: distinguishing between "dead clicks" and "rage clicks". A dead click is when a visitor clicks something that looks clickable but nothing happens. A rage click is when a visitor clicks repeatedly in one spot out of frustration. If a menu item gets a lot of dead clicks, it very likely looks like a button but doesn't actually lead anywhere — that's a problem to fix, not simply a case of low CTR.

I often combine both: GA4 for the numbers to compare over time, and Clarity or Hotjar to understand the "why" behind the numbers.

## How to read the CTR table

When you line the items up side by side, the picture usually falls into a familiar shape: a few items with very high CTR, a group in the middle, and a few near zero.

An item near zero isn't automatically a bad item. It can fall into one of two groups:

- A redundant item: customers really don't need it. For example, a "News" item when the shop hasn't posted anything all year.
- An item with a misread name: customers need that content but don't realize this item leads there. The name is too creative, or it uses internal jargon customers aren't familiar with.

The way to tell these two groups apart is to look at whether the content behind it is reached through another path. If the "Promotions" page has high views but the "Crazy deals" menu item has low CTR, the name most likely has a problem, not the content.

### When an important item has an unusually low CTR

This is the case worth pausing on the longest. Items like "Sale" or "New in" should pull clicks. People visiting a retail shop are usually curious to see what's on discount and what's new. If these items have an unusually low CTR, it's rarely because customers aren't interested — it's usually about where they're placed.

The item might be sitting at the bottom of the menu, out of sight. Eye-tracking research from the Nielsen Norman Group shows that users tend to scan a page in an F-shaped pattern — skimming horizontally across the top, then running down the left edge, skipping much of the middle and bottom. A valuable item placed in a hidden corner can easily slip past the customer's eye.

On mobile, the problem is even more pronounced. If the "Sale" item is buried deep in the hamburger menu, the customer has to tap to open the menu and then scroll to find it. Each extra step is another point where people drop off. That's why many shops put "Sale" right on the Tab Bar at the bottom of the screen — always visible, no opening required.

## What to do after reading

If you read it and change nothing, the number stays just a number. I usually group it into three actions.

First, trim the rarely used items. The longer the menu, the more diluted each item becomes and the harder it is for customers to choose. If an item sits near a zero CTR for many weeks and the content behind it also gets few visitors, go ahead and remove it or merge it elsewhere. A leaner menu helps the remaining items stand out more.

Second, rename unclear items. This is the cheapest change, and the effect is often visible right away. Use the words customers use, not the words you like: "Collection" could become "Products", "Crazy deals" become "Promotions". After renaming, watch the CTR again for a few weeks to confirm.

Third, move important items to a prominent spot. If "Sale" should be strong but is currently weak, move it to the front of the desktop menu, or put it on the Tab Bar on mobile. Changing position often has a bigger impact than people expect.

This building and changing doesn't necessarily require a developer. With a tool like [Navi+](https://naviplus.io), you drag and drop to reorder items, rename them, or split an item out to the Tab Bar at the bottom on mobile — the mobile and desktop configurations are separate, so you can make "Sale" prominent on the phone without cluttering the desktop menu. That way the "read the numbers, then adjust the menu" loop happens quickly, and you can keep testing and re-measuring.

One last note: change one thing at a time. If you rename, reposition, and cut an item all at once, you won't know which change drove the CTR shift afterward. Change one thing, wait for data, then move on to the next.

This article is part of the larger guide on [How to tell whether your menu is working well — 5 metrics to track](/measuring-menu-performance/).
