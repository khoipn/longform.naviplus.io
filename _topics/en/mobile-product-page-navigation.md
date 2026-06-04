---
lang: en
ref: mobile-product-page-navigation
title: "Mobile product page navigation: back buttons, swipe, and sticky bars"
description: "Navigation patterns for mobile product pages where breadcrumbs don't fit — back buttons, bottom bars, swipe gestures, and how to keep shoppers browsing on small screens."
parent_title: "Product page navigation: how shoppers move between products"
parent_url: "/shopify-product-page-navigation/"
seo_keywords:
  - mobile product page navigation
  - mobile back button shopify
  - bottom navigation bar ecommerce
  - mobile product browsing UX
date: 2026-04-15
---

On a phone, the product page is where navigation problems multiply. The screen is small, the thumb reaches only the bottom half comfortably, and the browser's back button — the default escape route — often takes the shopper out of the store entirely if they arrived from an ad, a search engine, or a social media link.

Desktop product pages have breadcrumbs, a wide header menu, and enough screen space for related products to sit beside the main content. On mobile, all of that compresses into a narrow vertical scroll, and the choices that designers made for desktop often fail.

## The thumb zone problem

Steven Hoober's research on how people hold their phones found that most users operate with one hand, using their thumb. The area the thumb reaches most easily is the lower half of the screen. The upper corners — where most stores put the menu icon, the logo, and the breadcrumbs — are the hardest to reach.

This creates a direct conflict with traditional navigation placement. The links the shopper most needs on a product page (back to collection, categories, cart) are all in the hard-to-reach zone. The shopper either has to stretch uncomfortably, shift grip, or use their other hand. This sounds minor, but it adds up across a browsing session. Each small friction is a small reason to stop browsing.

## Pattern 1: bottom navigation bar

A fixed bar at the bottom of the screen is the most direct solution to the thumb zone problem. The bar stays visible as the shopper scrolls, and it puts core actions — Home, Categories, Back, Cart — right where the thumb rests naturally.

This is the pattern native apps use (think Instagram, Amazon, Spotify), and for good reason. Users are already trained to expect important actions at the bottom of the screen. A Shopify store that uses a bottom navigation bar immediately feels more like an app and less like a website, which on mobile is a good thing.

With Navi+, configuring a tabbar with a back button is straightforward. The back button returns the shopper to the previous page — usually the collection they were browsing — without relying on the browser's back button. The Cart button shows the item count, acting as a constant reminder that items are waiting. The Categories button opens the menu without leaving the product page.

The key is restraint: three to five items in the bar, no more. Each additional item shrinks the tap targets and makes the bar harder to parse at a glance. Home, Categories, Cart, and Back cover most needs. If the store has a specific priority action — a chat button, a search shortcut — it can replace one of the defaults.

## Pattern 2: the in-page back link

A simpler approach is to place a "← Back to [Collection Name]" link near the top of the product page, above or below the product title. This gives the shopper one clear way back without requiring a persistent navigation bar.

The advantage is simplicity: it's just a link, no extra UI components. The disadvantage is that it only helps when the shopper is at the top of the page. Once they scroll down to read reviews or check the description, the link is gone. They have to scroll all the way back up to use it.

This approach also breaks when the shopper arrived from somewhere other than a collection — from search, from a blog post, from an external link. The "Back to Dresses" link doesn't make sense if the shopper was never in the Dresses collection. Dynamic implementations that detect the referrer and adjust the link text can solve this, but they add complexity.

## Pattern 3: swipe gestures

Some stores implement swipe navigation on product pages — swipe left to see the next product in the collection, swipe right to see the previous one. This mimics the behavior of a physical store where you pick up items on a rack one after another.

The appeal is obvious: no taps required, just a natural finger movement. The challenge is discoverability. Unless there's a visual hint that swiping is possible (a small peek of the next product at the edge of the screen, or dots indicating position in the collection), most shoppers won't try it.

There's also a conflict with image galleries. Most product pages already use swipe for browsing product photos. If swiping on the page body navigates to the next product, but swiping on the photo gallery navigates to the next photo, the shopper can easily trigger the wrong action. This is solvable with good implementation — confining swipe-to-navigate to a specific area of the page, for example — but many stores get it wrong and end up with a confusing experience.

## The scroll position problem

A persistent frustration on Shopify mobile: when a shopper taps back to return to a collection page, the browser often doesn't restore the scroll position. The shopper was looking at the 15th product in the collection, they tapped into product #15, now they tap back and land at the top of the collection. They have to scroll down again to find where they were.

This is not a navigation design problem per se — it's a browser behavior issue — but it directly affects how shoppers use the product page. If they know that going back means losing their place, they'll hesitate to tap into products at all. They'll try to make decisions from the collection page thumbnails alone, which is less informed and less likely to lead to a purchase.

A bottom navigation bar with a smart back action can mitigate this. Instead of relying on the browser's history navigation, the back button can use JavaScript to return to the collection page and restore the scroll position programmatically. This is one of those details that shoppers don't consciously notice when it works, but feel immediately when it doesn't.

## Combining patterns

The best mobile product page navigation usually combines elements: a bottom bar for persistent access to key actions, a back link at the top for shoppers who prefer it, and related products placed high enough in the scroll that people actually see them. No single pattern covers everything, but together they give the shopper multiple ways to keep moving.

The worst approach is to rely entirely on the browser's default navigation — the back button and the address bar. Those tools are designed for general web browsing, not for shopping. A store that takes navigation seriously on mobile will always outperform one that leaves it to the browser.

This article is part of the larger guide on [Product page navigation: how shoppers move between products](/shopify-product-page-navigation/).
