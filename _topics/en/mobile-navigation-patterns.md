---
lang: en
ref: mobile-navigation-patterns
title: "Mobile navigation patterns: tabbar, slide, and bottom sheet"
description: "The navigation patterns that work on phones — bottom tabbars, slide-up menus, full-screen overlays — and the desktop patterns that don't translate to mobile."
parent_title: "Building a mobile-first navigation strategy (not mobile-friendly)"
parent_url: "/mobile-first-navigation-strategy/"
seo_keywords:
  - mobile navigation patterns
  - bottom tabbar mobile
  - slide menu mobile
  - mobile menu patterns
date: 2026-04-18
---

Desktop navigation patterns — mega menus, hover dropdowns, sidebar navigation — don't work on phones. There's no hover, sidebars take up too much of the narrow screen, and mega menus can't expand wide when there's no width. Mobile needs its own patterns, designed for touch, small screens, and thumb reach.

## Bottom tabbar

The bottom tabbar is the most reliable mobile navigation pattern. Three to five buttons fixed at the bottom of the screen, always visible, each representing a primary navigation destination: Home, Categories, Search, Cart, Account.

**Strengths:**
- Always accessible without scrolling
- In the thumb's natural reach zone
- Familiar pattern (matches native apps)
- Shows multiple navigation options simultaneously

**Limitations:**
- Can only hold 3–5 items before becoming crowded
- No room for secondary navigation
- Takes up screen real estate (though not much)

The tabbar works best for stores where the primary navigation needs are clear and limited. If the shopper's main tasks are browsing categories, searching, and checking the cart, a tabbar with those three buttons (plus Home and Account) covers everything. With Navi+, the tabbar is configured once and appears on every page, giving the store a consistent mobile-first navigation.

## Slide menu (hamburger)

The slide menu pattern hides navigation behind an icon (usually three horizontal lines, the "hamburger"). Tapping the icon slides a menu panel in from the left or right, covering part or all of the screen.

**Strengths:**
- Can hold many items without cluttering the screen
- Supports deep category hierarchies
- Allows for rich content (images, featured products) in the menu

**Limitations:**
- Hidden by default — discovery is lower
- The trigger icon is often at the top of the screen (hard to reach)
- "Out of sight, out of mind" — users forget the menu exists

The slide menu's biggest problem is the trigger placement. Most themes put the hamburger icon in the top-left corner, which is the hardest place for the thumb to reach. Moving the trigger to a bottom tabbar (a "Categories" button) solves this — the shopper taps Categories in the easy zone, and the slide menu opens from the side or bottom.

## Bottom sheet menu

A bottom sheet is a menu panel that slides up from the bottom of the screen, covering the lower portion of the viewport. The user can drag it up to see more items, swipe it down to dismiss, or tap an item to navigate.

**Strengths:**
- Appears in the easy zone (bottom of screen)
- Gesture-driven (swipe up/down feels natural)
- Can show as much or as little content as needed

**Limitations:**
- Less common than tabbars or slide menus (lower familiarity)
- Can obscure content if it slides up automatically
- Requires careful design to avoid accidental dismissal

Bottom sheets work well for context-specific navigation — a product page that shows a bottom sheet with size and color options, or a cart page that shows a bottom sheet with shipping options. For primary navigation, tabbars are more predictable, but bottom sheets offer a modern, app-like interaction for stores that want to differentiate.

## Full-screen overlay menu

A full-screen menu takes over the entire viewport when opened, replacing the current page content. The shopper sees categories, search, featured items, and navigation options with no distractions.

**Strengths:**
- Maximum space for navigation content
- Clear focus — the shopper is in "navigation mode"
- Works well for complex menus with many categories

**Limitations:**
- Hides the content the shopper was browsing
- Requires a clear exit (close button or back gesture)
- Can feel heavy-handed for simple navigation needs

Full-screen menus work for stores with large catalogs that need room to organize categories, show featured products, and provide search. The shopper taps a menu button (ideally in a bottom tabbar), the screen transitions to a full-screen menu, they choose a category, and they land on a collection page. The transition is clear and deliberate, which reduces confusion.

## Patterns that don't work on mobile

**Hover-based menus.** Touch screens don't have hover. A menu that only reveals subcategories on hover is unusable on mobile.

**Top-aligned hamburger menus.** If the hamburger icon is at the top of the screen and requires stretching to reach, it's mobile-friendly at best — not mobile-first.

**Tiny tap targets.** Menu items that are less than 44 pixels tall or spaced too closely lead to mis-taps and frustration.

**Multi-level dropdowns.** Desktop-style dropdown menus with three or four levels of nesting don't translate to mobile. The screen is too narrow, and navigating deep hierarchies with tiny tap targets is painful.

This article is part of the larger guide on [Building a mobile-first navigation strategy (not mobile-friendly)](/mobile-first-navigation-strategy/).
