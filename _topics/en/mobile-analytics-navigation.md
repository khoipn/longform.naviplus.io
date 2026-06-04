---
lang: en
ref: mobile-analytics-navigation
title: "Mobile analytics: what your data says about phone shoppers"
description: "How to read mobile-specific analytics to understand navigation problems — bounce rate, pages per session, conversion gap, and mobile-vs-desktop behavior patterns."
parent_title: "Building a mobile-first navigation strategy (not mobile-friendly)"
parent_url: "/mobile-first-navigation-strategy/"
seo_keywords:
  - mobile analytics navigation
  - mobile bounce rate
  - mobile conversion rate
  - mobile ecommerce analytics
date: 2026-04-18
---

Most store owners know their overall mobile traffic percentage — "60% of our visitors are on mobile" — but few dig deeper into how phone shoppers behave differently. Mobile analytics reveal navigation problems that aren't obvious from aggregate numbers.

## Bounce rate by device

Bounce rate is the percentage of visitors who land on a page and leave without viewing another page. A high bounce rate suggests the visitor didn't find what they needed quickly enough.

Compare mobile bounce rate to desktop. If mobile is significantly higher (desktop 40%, mobile 65%), navigation is a likely contributor. The mobile visitor couldn't find the menu, couldn't use the search bar, or gave up because the site was too hard to navigate on a small screen.

In Shopify Analytics or Google Analytics, segment bounce rate by device. If the gap is more than 10–15 percentage points, investigate the mobile experience. Open the store on a phone and try to navigate as a first-time visitor. Count how many taps it takes to reach a product. Check whether the menu is easy to find and use.

## Pages per session by device

Pages per session measures how many pages a visitor views in one session. Desktop visitors typically view more pages because navigation is easier — larger screens, mouse hover, faster scrolling. But a large gap (desktop 5 pages, mobile 2 pages) signals that mobile visitors are struggling to navigate between sections.

Low pages per session on mobile can mean:
- Navigation is hidden or hard to reach
- The mobile menu is confusing or incomplete
- Product pages don't offer clear paths to related products or categories
- The shopper is using search instead of browsing (and search is failing)

The fix often involves improving mobile menu accessibility. A bottom tabbar with a Categories button ensures the menu is always reachable. Breadcrumbs and related products on mobile give the shopper more paths to explore without going back to the menu.

## Conversion rate gap: mobile vs desktop

The conversion rate gap between mobile and desktop is common, but the size of the gap matters. A small gap (desktop 3%, mobile 2.5%) is normal — checkout on phones is harder. A large gap (desktop 3%, mobile 0.8%) suggests mobile-specific friction, often in navigation or checkout flow.

Trace the mobile conversion funnel:
- **Homepage to collection:** Are mobile visitors finding and tapping into categories?
- **Collection to product:** Are they viewing products, or bouncing from the collection page?
- **Product to cart:** Are they adding items, or leaving without engaging the add-to-cart button?
- **Cart to checkout:** Are they starting checkout, or abandoning at the cart?
- **Checkout to purchase:** Are they completing payment, or dropping off mid-checkout?

Each step where mobile drops significantly more than desktop is a friction point. If mobile visitors browse collections but don't view products, the collection page UI might be broken on phones. If they add to cart but don't check out, the cart or checkout navigation might be hard to reach.

## Session duration vs engagement

Session duration alone is misleading. A long session can mean deep engagement or aimless wandering. Segment by device and compare:

- **Long session + high pages per session:** Deep engagement (good)
- **Long session + low pages per session:** Stuck on one page, possibly confused (bad)
- **Short session + high bounce rate:** Couldn't find what they needed (bad)
- **Short session + conversion:** Efficient navigation (good)

For mobile, short sessions with conversions are often better than long sessions without. The mobile shopper who lands on the store, finds a product in two taps, adds to cart, and checks out in under two minutes is having a successful experience. The mobile shopper who browses for ten minutes, views three pages, and leaves without adding anything is lost.

## Device-specific collection metrics

In Shopify Analytics, you can see which collections mobile visitors browse most. Compare this to desktop. If mobile visitors disproportionately browse certain collections, those collections might be easier to find on mobile (featured prominently on the homepage, linked in a tabbar) or harder to find (the only ones visible without opening a hidden menu).

If mobile visitors rarely browse certain collections that desktop visitors use frequently, those collections might be buried in the mobile menu. Adding them to the homepage or creating a shortcut in the mobile tabbar can improve discoverability.

This article is part of the larger guide on [Building a mobile-first navigation strategy (not mobile-friendly)](/mobile-first-navigation-strategy/).
