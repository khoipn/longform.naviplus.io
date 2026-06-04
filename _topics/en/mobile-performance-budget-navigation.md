---
lang: en
ref: mobile-performance-budget-navigation
title: "Mobile performance budget for navigation"
description: "Setting a performance budget for menu scripts — JavaScript weight, CSS size, DOM nodes, and render time thresholds that keep navigation fast on real phones."
parent_title: "Mobile menu performance: why every millisecond matters"
parent_url: "/mobile-menu-performance/"
seo_keywords:
  - performance budget navigation
  - mobile menu budget
  - javascript budget ecommerce
  - core web vitals menu
date: 2026-05-09
---

A performance budget is a set of thresholds for how much resource a feature is allowed to consume. Without a budget, features grow heavier over time — each update adds a little more JavaScript, a few more DOM nodes, one more animation — until the cumulative weight degrades the experience noticeably.

For navigation, a performance budget keeps the menu fast on the devices your customers actually use. Not on the developer's M3 MacBook Pro, but on the mid-range Android phone that accounts for the majority of global mobile web traffic.

## Recommended thresholds

Based on what mid-range phones (Moto G Power, Samsung Galaxy A series, Xiaomi Redmi) can handle without perceptible delay:

| Resource | Budget | Why |
|---|---|---|
| JavaScript (compressed) | Under 50KB | Parses in under 50ms on mid-range |
| CSS (compressed) | Under 10KB | Minimal render-blocking impact |
| DOM nodes (menu elements) | Under 100 | Smooth layout and paint |
| First render | Under 100ms | Menu appears instantly |
| Tap-to-visible (INP) | Under 200ms | Feels responsive |
| Layout shift (CLS) | Under 0.05 | No visible content jumping |

These are budget numbers, not absolute limits. A menu that's 55KB compressed but renders in 80 milliseconds is fine. A menu that's 30KB but causes 400 milliseconds of INP has a problem. The numbers work together — the budget is a guideline for where to start investigating if performance degrades.

## Measuring against the budget

**JavaScript weight:** Open Chrome DevTools → Network tab → filter by JS. Find your menu app's script. Check the "Size" column (compressed over the wire) and the "Resource Size" column (uncompressed). Compare to the 50KB budget.

**DOM nodes:** Open DevTools → Elements tab. Search for the menu's root element and count the nodes inside it. Or use `document.querySelectorAll('.your-menu-class *').length` in the console.

**First render:** Open DevTools → Performance tab. Record a page load. Find the first paint of the menu elements in the timeline. Measure from navigation start to menu visible.

**INP:** Record a performance trace, tap the menu button, and measure the time from the tap event to the next paint. Or use Google's web-vitals library to log INP automatically.

**CLS:** PageSpeed Insights reports CLS. If the menu causes content to shift when it loads (pushing the page content down, for example), it contributes to CLS.

## What breaks the budget

Common things that push menus over budget:

**Animation libraries.** GreenSock (GSAP), Anime.js, or similar libraries add 20–80KB of JavaScript for animation that CSS transitions can often handle. Unless the menu needs complex sequenced animations, CSS is lighter.

**Icon font packages.** Loading a full icon font (Font Awesome, Material Icons) for five menu icons means downloading 50–100KB of font data. Using inline SVG for just the needed icons is a fraction of the size.

**Analytics and tracking inside the menu.** Some menu apps include their own analytics, adding JavaScript weight and main-thread work. If the store already uses Google Analytics or a similar tool, redundant tracking in the menu is wasted budget.

**Images in the menu.** Mega menus with category images are visually appealing but add download weight. Lazy-loading menu images (only loading when the user opens the relevant section) keeps the initial load within budget.

## Building with the budget in mind

A menu designed with a performance budget from the start stays lean. The developer knows that every feature — hover animations, lazy-loaded images, analytics hooks — needs to fit within the budget. Trade-offs become explicit: "Adding this animation costs 15KB of JavaScript. Is it worth 15% of our JS budget?"

Navi+ is built with this discipline. The total JavaScript payload is kept minimal, the CSS is scoped to what's needed, and the DOM is created efficiently. The result is a menu that stays within the performance budget on mid-range phones and earns strong Core Web Vitals scores — which is part of why Navi+ holds the Built for Shopify badge.

This article is part of the larger guide on [Mobile menu performance: why every millisecond matters](/mobile-menu-performance/).
