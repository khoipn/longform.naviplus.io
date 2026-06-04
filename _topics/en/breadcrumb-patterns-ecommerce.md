---
lang: en
ref: breadcrumb-patterns-ecommerce
title: "Breadcrumb patterns that actually help shoppers navigate"
description: "Where to place breadcrumbs, how to handle mobile screens, and what Baymard Institute's research says about making them work on product pages."
parent_title: "Product page navigation: how shoppers move between products"
parent_url: "/shopify-product-page-navigation/"
seo_keywords:
  - breadcrumb navigation ecommerce
  - mobile breadcrumbs
  - Baymard breadcrumb research
  - product page breadcrumbs
date: 2026-04-15
---

Breadcrumbs are the small text trail near the top of the page — Home → Women → Dresses → Summer Dress — and they do something most navigation elements don't: they tell shoppers where they are and give them a clear path back without relying on the browser's back button.

But they only work if they're implemented well. A breadcrumb trail that's too small to tap on mobile, or placed where nobody looks, or showing the user's history instead of the site's structure, creates confusion instead of clarity.

## Location: above the product title, below the main menu

Nielsen Norman Group's breadcrumb guidelines are consistent on this: breadcrumbs should sit below the primary navigation but above the page title. This placement signals that they're a secondary navigation aid — helpful but not the main way to move around the site.

On desktop, this works cleanly. There's usually enough space in the header area to fit the breadcrumb trail without crowding the logo, search bar, and main menu. On mobile, space is tighter, and many implementations either hide the breadcrumbs entirely or show them in text so small that nobody can read them.

Baymard Institute's research on mobile hierarchy breadcrumbs identified this as a common failure point. The study found that breadcrumbs on mobile product pages need to be large enough to tap (at least 44×44 pixels per Apple's guidelines, similar for Android), and they need to truncate gracefully when the category path is too long for a small screen.

## Structure: site hierarchy, not user history

There are two kinds of breadcrumbs: hierarchy breadcrumbs, which show the structure of the site (Home → Women → Dresses), and history breadcrumbs, which show the user's clickpath (Home → Sale → Dresses → Product → Back to Sale). History breadcrumbs tend to confuse more than they help, especially when the user arrived from a search result or an external link.

Hierarchy breadcrumbs work because they're predictable. The shopper can look at the trail and understand the store's category structure. If they want to see all dresses, they click "Dresses." If they want to go back to the women's section, they click "Women." The path is logical, and it matches the menu.

Shopify's default breadcrumb implementation uses hierarchy, not history, which is the right choice. Some custom themes or apps override this, and it's worth checking whether your breadcrumbs are showing site structure or user path — the former is almost always better.

## Mobile: truncation and tap targets

On mobile, a breadcrumb trail like Home → Women → Clothing → Dresses → Summer Collection → Floral Sundress doesn't fit. Most implementations either wrap the text to multiple lines (which takes up valuable screen space) or shrink the font to fit (which makes it unreadable).

Baymard's mobile breadcrumb research recommends showing the immediate parent category at minimum, with an option to expand the full trail if needed. For example, the breadcrumb might display as "← Dresses" with a small arrow indicating there are more levels above. Tapping it reveals the full path.

Another pattern is to show only the last two levels: "Women → Dresses." This gives enough context for most shoppers without overwhelming the small screen. If someone needs to go higher, they can use the menu.

The tap target is critical. On mobile, a breadcrumb link that's less than 44 pixels tall or wide is frustrating to tap accurately. Many themes style breadcrumbs with small font sizes for aesthetic reasons, but this trades usability for appearance. The link should be easy to tap without zooming or multiple attempts.

## Handling products in multiple categories

One complication: a product can live in multiple collections on Shopify. A black dress might be in Women → Dresses, but also in Sale → Clearance, and also in New Arrivals. The breadcrumb can only show one path. Which one?

The most common approach is to show the canonical category — the primary collection assigned to the product. This keeps the breadcrumb consistent no matter how the shopper arrived. The downside is that if they arrived via the Sale collection, the breadcrumb might say Women → Dresses, and clicking back takes them to the full dresses collection instead of the sale page they were just browsing.

A more sophisticated approach is to use dynamic breadcrumbs that reflect the referrer. If the shopper came from the Sale collection, the breadcrumb shows Home → Sale → Black Dress, and clicking "Sale" takes them back there. This requires JavaScript to track the referrer and adjust the breadcrumb accordingly. Not all themes support this, and it adds complexity, but it solves the "back to where I was" problem that frustrates many shoppers.

## When breadcrumbs aren't enough

Breadcrumbs are a secondary navigation aid. They help, but they don't replace a clear way back to the collection. On mobile especially, where breadcrumbs are hard to fit, a persistent bottom bar with a back button can do the same job — return the shopper to where they were browsing — without the screen real estate problem.

The key is giving the shopper a clear path back. Whether that's a breadcrumb, a back button, or both, the goal is the same: don't force them to use the browser's back button, because that takes them out of your store as often as it keeps them in it.

This article is part of the larger guide on [Product page navigation: how shoppers move between products](/shopify-product-page-navigation/).
