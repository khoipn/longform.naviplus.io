---
lang: en
ref: checkout-header-patterns
title: "Checkout header patterns: when to hide the menu"
description: "Why most high-converting checkout flows simplify the header — removing category menus, search bars, and secondary links to keep shoppers focused on completing the purchase."
parent_title: "Why shoppers abandon cart at checkout (and how navigation plays a role)"
parent_url: "/checkout-navigation-mistakes/"
seo_keywords:
  - checkout header design
  - minimal checkout navigation
  - ecommerce checkout UX
  - checkout page header
date: 2026-04-22
---

The header on a checkout page has a different job from the header on a collection page. On a collection page, the header invites exploration — categories, search, promotions. On a checkout page, the header's only job is to keep the shopper moving toward "Complete order."

Most stores use the same header everywhere, including on checkout. That means the shopper who is filling in their credit card details can see links to the blog, the sale section, the about page, and the full category menu. Each of those links is a potential exit from the purchase flow.

## The case for minimal headers

Baymard Institute's checkout usability research found that simplifying the header during checkout reduces unintentional exits. The top-performing stores typically use a checkout header that includes just two or three elements: the store logo (sometimes linked to the cart rather than the homepage), a progress indicator showing which step the shopper is on, and a support link (phone number, chat, or email) in case something goes wrong.

Everything else — category navigation, search bar, promotional banners, footer links — is removed. Not hidden behind a hamburger icon; removed entirely. The visual signal is clear: you are in the checkout flow, and the path forward is to complete your order.

This pattern is so common among high-performing stores that Shopify's own checkout uses it by default. When a shopper enters Shopify's checkout, the full store header disappears and is replaced with a minimal one showing only the logo and an order summary toggle. Shopify's team arrived at this design through extensive conversion testing — and the conclusion was that less navigation during checkout means more completed orders.

## What to keep in the checkout header

Minimal doesn't mean empty. A checkout header that's too bare can feel unfamiliar or even suspicious. Shoppers need at least:

- **The store logo.** This confirms they are still on the right website. On checkout, linking the logo to the cart page (rather than the homepage) is a better default — it lets the shopper review their items without leaving checkout entirely.
- **A progress indicator.** Something like "Shipping → Payment → Review" tells the shopper how close they are to finishing. Progress bars reduce perceived friction because the shopper can see the end.
- **A support link.** If something goes wrong during checkout — a question about shipping, a payment error — the shopper needs an obvious way to get help. A phone number, a live chat icon, or an email link is enough. Without this, the shopper's only option when stuck is to leave.

## What to remove

- **Category navigation.** The shopper is done browsing. Showing them the menu now invites them to start browsing again, which is the opposite of what you want.
- **Search bar.** Same reason. If the shopper uses search during checkout, they are navigating away from the purchase.
- **Promotional banners.** A banner advertising a sale in another category pulls attention away from the order.
- **Footer links.** Privacy policy, terms of service, FAQ — these are useful elsewhere, but during checkout they are exit ramps. If any policy information is needed (like a return policy to reassure the shopper), it should be inline within the checkout form, not as a link to another page.

## The trust signal balance

Some stores worry that stripping the header removes trust signals — the logo, the security badges, the familiar branding. This concern is valid but solvable. Trust signals during checkout should be embedded in the checkout form itself: padlock icons near the payment field, payment provider logos (Visa, Mastercard, PayPal), a brief reassurance like "Your payment is encrypted." These work better than header-level branding because they are right where the shopper's anxiety is highest — at the moment of entering payment details.

Baymard's research on perceived security during checkout found that trust signals placed near the payment form are more effective than general site-level indicators. A Norton or McAfee seal in the header has some effect, but the same seal placed next to the credit card field has significantly more impact.

## Implementing on Shopify

Shopify's native checkout already uses a minimal header by default. If your store uses a custom checkout app or a headless checkout, you may need to implement minimal headers manually.

For the pre-checkout flow — the cart page, the "review order" page — the decision is yours. Some stores keep the full header on the cart page (since the shopper might want to continue shopping) but switch to minimal navigation as soon as they click "Proceed to checkout." Others simplify from the cart page onward, treating the entire checkout flow as a focused funnel.

If you use a tabbar (via Navi+, for example), consider hiding it on checkout pages. A tabbar is excellent during browsing because it keeps navigation accessible with one tap. But during checkout, the same tabbar shows a Home button, a Categories button, and a Search button — three ways to leave the flow. Configuring the tabbar to hide on checkout pages takes a few seconds and can reduce exit points significantly.

This article is part of the larger guide on [Why shoppers abandon cart at checkout (and how navigation plays a role)](/checkout-navigation-mistakes/).
