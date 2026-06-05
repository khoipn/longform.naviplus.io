---
lang: en
ref: combining-tab-bar-and-slide-menu
title: "Combining Tab Bar + Slide Menu (and the role of the FAB)"
description: "How to combine a tab bar and slide menu on Shopify mobile: the Tab Bar handles quick trips, the Slide Menu handles deep browsing, the FAB handles one action. Clear roles make it easy for shoppers to find their way."
image: "/images/mobile-navigation-beyond-hamburger/tab-bar-slide-menu-fab-combination.webp"
image_alt: "Combining Tab Bar + Slide Menu (and the role of the FAB)"
parent_title: "Mobile navigation — why the hamburger menu is going out of style and what to use instead"
parent_url: "/mobile-navigation-beyond-hamburger/"
seo_keywords:
  - combine tab bar slide menu
  - slide menu
  - FAB
  - mobile menu
date: 2026-06-02
---

If you sell on Shopify and you're struggling with your phone menu, there's a pattern that many large ecommerce apps use, and it's worth learning from. It's the way you **combine a tab bar and slide menu**: let the Tab Bar handle quick trips, and let the Slide Menu handle going deep. This article is about how those two work together, and where the FAB fits in that picture.

I once ran a store and made the common mistake: I crammed everything into one hamburger menu and trusted that "shoppers will tap it if they need to." In reality, shoppers are less patient than we think.

## Why one kind of menu isn't enough

On a phone, shopper behavior splits into two fairly clear groups.

The first group knows what they want. They come to view the cart, to search, or to go back to the home page. They need to move fast and go straight there.

The second group hasn't decided what to buy. They want to wander through the categories and see what's interesting. They need a full map of the store.

A single menu struggles to serve both well. If you cram everything into a hamburger, the first group has to take an extra step for things that should take just one tap. Nielsen Norman Group found that hiding the main navigation behind a button makes it harder to find and slower to use than when the items are shown openly. On the other hand, if you try to expose the whole category tree on the screen, the first group is overwhelmed and the screen gets crowded.

The solution isn't to pick one. It's to divide the roles.

## The Tab Bar handles the main destinations

The Tab Bar is a fixed navigation bar at the bottom of the screen, usually holding 4-5 items. It's always visible, so shoppers don't have to tap to open it.

Its position at the bottom isn't an accident. According to Steven Hoober's research across more than 1,300 user observations, about 75% of on-screen actions are done with the thumb. The bottom-center of the screen is exactly where the thumb reaches most easily when holding the phone with one hand. Putting important destinations there means shoppers tap accurately and quickly, with fewer mistakes.

So what should go in the Tab Bar? Only the destinations that are used most and need to be reached fastest. For example, for a fashion store:

- Home
- Search
- Categories (or "Products")
- Cart
- Account

Five items is just right. More than that and each button gets squeezed and hard to tap; fewer than that and you waste precious space. This isn't the place to list out every subcategory — it's the place for a few of the biggest doors.

## The Slide Menu handles the whole category structure

The Tab Bar only has 4-5 slots. But a real store usually has dozens of categories and subcategories. Where do they go?

This is where the Slide Menu comes in. The Slide Menu opens from the edge of the screen and can hold the full, multi-level category structure. A shopper wants to move from Men to Women, from Tops to Bottoms, from one collection to another — the Slide Menu is the place for that.

The nice part of this pattern is how the Slide Menu opens. You put a "Categories" item or a "More" icon right on the Tab Bar. The shopper taps it, and the Slide Menu slides out. That way the two menus connect: the Tab Bar is always there for quick trips, and it's also the door into the Slide Menu for deep browsing.

A small but important detail: when you do use a Slide Menu, label it clearly with text instead of leaving a bare icon, and put it where shoppers expect to find it. NN/G recommends using the standard three-line icon along with a label so shoppers can guess what's inside. The Slide Menu isn't bad — it's only bad when it's made to do the job of both the Tab Bar and itself.

The role split boils down to this: when a shopper needs speed, they use the Tab Bar; when they want to browse everything, they open the Slide Menu. This is exactly the **combination of tab bar and slide menu** that many large ecommerce apps use, and it works for Shopify without needing any dramatic changes.

## The FAB: a complement, not a replacement

The FAB (Floating Action Button) is a round floating button, usually in the bottom-right corner, overlaid on the page content. Many people find it attractive and want to use it for navigation. I'd advise against that.

The FAB should be reserved for exactly one action — one that's important and repeated. A few sensible examples:

- A support chat button, so shoppers can ask quick questions when they're unsure
- "See today's deals" during a promotion
- Back-to-top on very long product listing pages

The reason the FAB shouldn't carry the main navigation: it's just one button. When you tap it, it has to open a menu — which means going right back to the hidden-navigation pattern we just wanted to avoid. The Tab Bar handles navigation better because it's always visible and has several slots. The FAB suits a single, clear call to action.

In other words: the Tab Bar and Slide Menu handle "where to go," while the FAB handles "do one thing." Don't let them step on each other.

## Why this pattern is worth getting right

There's a practical reason to care about your phone menu. According to the Baymard Institute, the average cart abandonment rate is around 70%, and on mobile it's even higher, around 80%. When shoppers already struggle to find their way from the menu, they leave before they even think about checking out.

Page speed matters too. A heavy menu can slow loading and cause layout shifts. Google sets the "good" threshold for Core Web Vitals at LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1. The leaner and lighter the menu, the easier it is to stay within those thresholds.

There's one more thing to weigh: the number of apps. A Shopify store usually installs many apps, and each one adds another piece of code running on the page. If a single menu tool can handle the Tab Bar, Slide Menu, and FAB all in one place, you avoid patching together several separate things.

## Build this pattern without code

The hard part of the combined pattern is the configuration. You need a separate Tab Bar for mobile, a Slide Menu connected to it, and possibly a FAB for a CTA — all of which have to fit together and not touch the desktop version.

This is what [Navi+](https://naviplus.io) was made to solve. You configure the Tab Bar and Slide Menu in one place, set them separately for mobile, drag and drop, no code needed. The mobile and desktop configurations are separate, so the desktop version still uses a normal Mega Menu. The menu also stays in place when you change themes, and it's optimized so it doesn't drag down your Core Web Vitals.

What I want to leave you with isn't a specific tool, but the mindset of dividing roles: don't make one menu do everything. Let the Tab Bar handle quick trips, the Slide Menu handle deep browsing, and the FAB handle one action. Your shoppers will find their way more easily, and that's often the first step toward them staying longer.

This article is part of the larger guide on [Mobile navigation — why the hamburger menu is going out of style and what to use instead](/mobile-navigation-beyond-hamburger/).
