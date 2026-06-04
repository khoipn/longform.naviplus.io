---
lang: en
ref: mobile-cart-shortcuts
title: "Cart shortcuts on mobile: one-tap access patterns"
description: "Persistent cart icon in the tabbar, mini cart drawer, quick-add from collection pages, and mobile-specific patterns for keeping the cart accessible."
parent_title: "Mobile checkout: why navigation matters more on small screens"
parent_url: "/mobile-checkout-flow/"
seo_keywords:
  - mobile cart shortcuts
  - persistent cart icon
  - mini cart drawer
  - quick add mobile
date: 2026-04-25
---

The cart is the bridge between browsing and buying, and on mobile, it needs to be closer than a scroll away. If the shopper has to scroll to the top of the page, find a small icon in the header, and tap it — that's friction. Multiply that friction across a browsing session, and it adds up to abandoned carts.

## Persistent cart in the tabbar

The most effective mobile cart access pattern is a cart button in the bottom tabbar. It's visible on every page, it shows a badge with the item count, and it's always in the thumb zone. The shopper never has to hunt for the cart — they know exactly where it is and can reach it with one tap.

With Navi+, the cart button in the tabbar can be configured to open a cart drawer (a slide-up panel showing the cart contents) or navigate to the full cart page. The drawer is faster for quick checks — the shopper taps the cart icon, sees a summary of their items, and either proceeds to checkout or dismisses the drawer to continue shopping.

The badge is important. A small number on the cart icon ("3") is a passive reminder that items are waiting. This badge should update in real time — immediately when the shopper adds an item, not after a page reload. The instant feedback confirms the action and maintains the momentum of the shopping session.

## Mini cart drawer

When the shopper taps the cart icon, a mini cart drawer that slides up from the bottom is faster than navigating to a full cart page. The drawer shows:

- Product thumbnails and names
- Quantities and prices
- A subtotal
- A "Checkout" button
- A "View full cart" link for detailed editing

The drawer keeps the shopper in context. They can verify what's in the cart without leaving the page they're on. If they're satisfied, one tap on "Checkout" takes them to the checkout flow. If they need to edit quantities or remove items, "View full cart" takes them to the full cart page.

For mobile, the drawer should slide up from the bottom (matching the natural direction of thumb swipes) and be dismissible by swiping down or tapping outside the drawer. The checkout button should be the most prominent element in the drawer, in the thumb zone.

## Quick-add from collection pages

Quick-add lets the shopper add a product to the cart directly from the collection page, without visiting the product page first. This is a significant navigation shortcut: collection → add to cart replaces collection → product page → add to cart → back to collection.

On mobile, quick-add buttons should be visible on each product card — a small "+" icon or "Add" button. For products with variants (size, color), tapping quick-add shows a compact variant selector (a row of size buttons or color swatches) that the shopper can use without leaving the collection page.

After a successful quick-add, the cart badge updates immediately and a brief confirmation appears — either a toast notification ("Added to cart") or a brief animation on the cart icon. The shopper gets instant feedback and can continue browsing.

## After add-to-cart: the decision moment

The moment after adding an item to the cart is a critical navigation moment. The shopper has committed to wanting this product. Now they need to decide: keep shopping or go to checkout?

The best pattern gives them both options prominently:

- **Continue shopping:** The collection page is still visible (or the mini cart drawer has a close button). The shopper dismisses the confirmation and keeps browsing.
- **View cart / checkout:** A prominent button in the confirmation overlay or drawer takes the shopper directly to the cart or checkout.

What doesn't work: redirecting the shopper to the cart page automatically after every add-to-cart. This interrupts browsing and forces the shopper to navigate back to where they were. Some shoppers want to add several items before checking out, and auto-redirecting them to the cart after each one is frustrating.

This article is part of the larger guide on [Mobile checkout: why navigation matters more on small screens](/mobile-checkout-flow/).
