---
lang: en
ref: mobile-checkout-nav-visibility
title: "Mobile checkout navigation: what to show and what to hide"
description: "When to keep the tabbar during checkout, when to hide it, and how to simplify mobile navigation so shoppers focus on completing their purchase."
image: "/images/mobile-checkout-flow/checkout-nav-simplified.webp"
image_alt: "Mobile checkout navigation: what to show and what to hide"
parent_title: "Mobile checkout: why navigation matters more on small screens"
parent_url: "/mobile-checkout-flow/"
seo_keywords:
  - mobile checkout navigation
  - hide tabbar checkout
  - checkout header mobile
  - checkout navigation visibility
date: 2026-04-25
---

Navigation during checkout serves a different purpose than navigation during browsing. During browsing, the goal is exploration — helping the shopper discover products and move between sections. During checkout, the goal is completion — helping the shopper fill out the form and submit the order. Every navigation element that doesn't serve completion is a potential distraction.

On mobile, where screen space is precious, this distinction is even more important. A tabbar that takes 56 pixels during browsing is 56 pixels well spent. The same tabbar during checkout is 56 pixels wasted on navigation the shopper doesn't need.

## Hiding the tabbar during checkout

A bottom tabbar with Home, Categories, Search, Cart, and Account is valuable during browsing because it gives the shopper instant access to key destinations. During checkout, those same buttons become exit ramps:

- **Home** takes the shopper away from checkout entirely
- **Categories** opens the menu, inviting browsing instead of buying
- **Search** starts a new product discovery session
- **Cart** is redundant (the order summary already shows cart contents)
- **Account** opens a page unrelated to the current purchase

With Navi+, the tabbar can be configured to hide on specific pages — including the checkout page. This is a one-setting change that removes five exit ramps from the checkout flow.

## What to show instead

A minimal checkout header replacing the full site header:

- **Store logo.** Small, non-distracting. Linked to the cart page (not the homepage) so tapping it doesn't exit checkout.
- **Progress indicator.** "Shipping → Payment → Review" or "Step 2 of 3." Keeps the shopper oriented.
- **Help link.** A chat icon or "Need help?" link. If something goes wrong, the shopper needs a way to get support without leaving checkout.

Nothing else. No menu, no search, no promotional banners, no footer links.

## The order summary toggle

One piece of navigation that should remain during checkout is access to the order summary. The shopper needs to be able to verify what they're buying without leaving the checkout flow.

The most common mobile pattern is a collapsible order summary at the top of the checkout page. A bar showing "Order summary (3 items) — $89.00" with a toggle to expand and see the full list. When collapsed, it takes up one line. When expanded, it shows product thumbnails, quantities, and prices.

This pattern keeps the order visible without competing with the form for screen space. The shopper can expand it to double-check, then collapse it to focus on the form.

## In-page back navigation

The browser's back button is unreliable during multi-step checkout. It might go to the previous checkout step, the cart, the product page, or out of the store. The shopper doesn't know until they tap it.

An explicit in-page back action — a "← Back to shipping" link at the top of the payment step, or a "← Back to cart" link at the top of the shipping step — gives predictable behavior. The shopper knows exactly where they'll go, and they stay within the checkout flow.

This in-page back link should be clearly visible but not as prominent as the forward action ("Continue to payment"). The visual hierarchy should guide the shopper forward, with back as a safety net.

## Edge case: cart modification during checkout

Sometimes the shopper wants to change their order during checkout — remove an item, change a quantity, add a forgotten product. If the only way to do this is to leave checkout, navigate to the cart page, make the change, and re-enter checkout (potentially losing form progress), the friction is high.

A better pattern: make the order summary editable within checkout. The shopper expands the order summary, taps a quantity selector, changes it, and the total updates. No leaving checkout, no re-entering form data.

If in-checkout editing isn't possible, the order summary should include a clear "Edit cart" link that goes to the cart page. The important part: when the shopper finishes editing and returns to checkout, the form should remember what they entered. Losing form progress because of a cart edit is a significant frustration that drives abandonment.

This article is part of the larger guide on [Mobile checkout: why navigation matters more on small screens](/mobile-checkout-flow/).
