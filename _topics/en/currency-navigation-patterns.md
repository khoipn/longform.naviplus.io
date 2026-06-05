---
lang: en
ref: currency-navigation-patterns
title: "Currency in navigation: showing the right prices"
description: "Currency switchers, auto-detection, price display patterns, and how to handle multiple currencies in ecommerce navigation without confusing international shoppers."
image: "/images/international-store-navigation/currency-switcher-patterns.webp"
image_alt: "Currency in navigation: showing the right prices"
parent_title: "Navigation for international stores: language, currency, and regional catalogs"
parent_url: "/international-store-navigation/"
seo_keywords:
  - currency switcher ecommerce
  - multi-currency navigation
  - price display international
  - shopify markets currency
date: 2026-04-27
---

Seeing prices in an unfamiliar currency creates immediate friction. A European shopper who sees $49.99 has to pause and calculate what that means in euros. That pause — even if it's only a few seconds — is cognitive work that doesn't exist for a domestic shopper. Remove the friction by showing prices in the visitor's local currency.

## Auto-detection: the default experience

Shopify Markets detects the visitor's location (via IP address) and serves prices in the corresponding currency automatically. A visitor from Germany sees euros. A visitor from Japan sees yen. No action required from the shopper.

This auto-detection works for the vast majority of visitors. The navigation role is simply confirming which currency is active. A small indicator in the header or footer — "EUR €" or "¥ JPY" — tells the visitor what they're seeing. This confirmation matters because some visitors aren't sure whether the prices have been converted or are still in the store's base currency.

## The currency switcher

When auto-detection fails or the visitor prefers a different currency (they're traveling, comparing prices, or buying a gift for someone in another country), a currency switcher provides manual control.

The switcher is typically paired with the language switcher — a single dropdown or panel showing both language and currency options. This makes sense because a visitor switching from English to French often wants to switch from USD to EUR at the same time.

Design considerations:
- **Show currency code and symbol.** "USD $" is clearer than just "$" (which could be USD, CAD, AUD, or several others).
- **Group by region.** If the store serves many markets, group currencies by region (North America, Europe, Asia-Pacific) to make the list scannable.
- **Persist the selection.** Once the visitor chooses a currency, it should stick across sessions. Asking them to switch again on every visit is frustrating.

## Price display in navigation

Navigation elements sometimes include prices — a "Sale" menu item showing "Up to 50% off," a featured product in the mega menu with its price, a cart icon showing the subtotal. These prices must update when the currency changes.

A mega menu that shows a featured product at "$49.99" while the rest of the page shows prices in euros creates confusion. All prices displayed anywhere in the navigation — menus, tabbars, cart badges — should reflect the active currency.

On Shopify, this is handled automatically for prices in Liquid templates. For prices rendered via JavaScript (in menu apps, cart drawers, or dynamic elements), the app needs to respect the Shopify Markets currency conversion. Navi+ handles this by reading the active currency context and displaying prices accordingly.

## Rounding and formatting

Different currencies have different formatting conventions. USD uses a comma for thousands and a period for decimals: $1,299.99. EUR in France uses a period for thousands and a comma for decimals: 1.299,99 €. Japanese yen has no decimal places: ¥1,500.

Displaying prices in the wrong format — even if the currency is correct — looks unprofessional and can confuse shoppers. Shopify Markets handles formatting for most cases, but custom navigation elements (like prices in a mega menu or cart drawer) need to use the correct locale-aware formatting.

This article is part of the larger guide on [Navigation for international stores: language, currency, and regional catalogs](/international-store-navigation/).
