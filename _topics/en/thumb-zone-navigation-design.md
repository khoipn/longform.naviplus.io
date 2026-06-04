---
lang: en
ref: thumb-zone-navigation-design
title: "Thumb zone design: building for one-handed use"
description: "How people hold their phones, where the thumb comfortably reaches, and how to place navigation elements in the easy zone instead of the stretch zone."
parent_title: "Building a mobile-first navigation strategy (not mobile-friendly)"
parent_url: "/mobile-first-navigation-strategy/"
seo_keywords:
  - thumb zone design
  - one handed mobile use
  - mobile navigation placement
  - thumb reach mobile UX
date: 2026-04-18
---

Most mobile UX decisions trace back to one question: where can the user's thumb comfortably reach? Steven Hoober's research on mobile device usage found that 49% of people hold their phone with one hand, using the thumb for all interactions. Another 36% hold with two hands but still use one thumb for tapping. Only 15% use two hands with both thumbs or fingers.

This means that for 85% of mobile users, navigation design is thumb design. The thumb has a natural arc of movement, and anything outside that arc requires the user to stretch, shift grip, or use a second hand. Each of these workarounds is friction.

## The three zones

Mobile screens can be divided into three zones based on thumb reach:

**Easy zone (bottom third to half).** The thumb rests naturally here and can reach any part of this area without moving the hand. This is where primary actions should live — the navigation bar, the add-to-cart button, the checkout button.

**Stretch zone (middle to upper-middle).** The thumb can reach this area by extending, but it's not comfortable for repeated taps. Secondary content works here — product images, descriptions, reviews. Interactive elements should be minimal.

**Hard zone (top corners and edges).** The thumb can barely reach these areas without shifting grip. Many users will use a second hand for taps in this zone. This is where non-critical elements should be — the logo, account links, settings.

The traditional mobile layout violates this entirely. The header (with menu icon, search, cart) is in the hard zone. The product add-to-cart button floats somewhere in the middle. The navigation the user needs most is in the place their thumb reaches least.

## Bottom navigation bars

The most thumb-friendly navigation pattern is a fixed bar at the bottom of the screen with three to five buttons. This is the pattern Instagram, Amazon, Spotify, and most native apps use. It's the pattern mobile-first stores should use too.

A bottom tabbar (configured via Navi+) places Home, Categories, Search, Cart, and Account in the easy zone. The user's thumb is already resting near the bottom of the screen — tapping any of these buttons requires minimal movement. The bar stays visible as the user scrolls, so navigation is always one tap away regardless of where they are on the page.

The alternative — placing navigation in a header that scrolls out of view — forces the user to scroll back to the top every time they want to navigate. This is manageable on desktop (scrolling with a mouse wheel is effortless), but on mobile (scrolling requires swipes and careful finger placement), it's noticeable friction.

## Tap targets and spacing

Thumb-friendly navigation also requires appropriate tap target sizes and spacing. Apple's Human Interface Guidelines recommend a minimum tap target of 44×44 points. Android's Material Design guidelines recommend 48×48 dp. Both are based on research showing that smaller targets lead to more mis-taps and user frustration.

On a bottom tabbar, this means each button should be at least 44 pixels tall and have enough spacing that the user doesn't accidentally tap the wrong one. A tabbar with five buttons squeezed into a 320-pixel-wide screen (64 pixels per button) is at the lower limit of usability. Four buttons (80 pixels each) is more comfortable.

Icons in the tabbar should be simple and recognizable. Text labels below or beside the icons help, especially for less common functions. A shopping cart icon is universally understood. A Categories icon (often three horizontal lines or a grid) is less obvious and benefits from a label.

## Swipe gestures in the easy zone

Swipe gestures are thumb-friendly when they happen in the easy zone. Swiping horizontally to browse product images, swiping up to reveal a bottom sheet menu, swiping down to refresh — these all work within the natural thumb movement.

Gestures in the stretch or hard zones are less reliable. Swiping down from the very top of the screen (a common pattern for revealing hidden headers) requires the user to reach uncomfortably. Some users will tap the top of the screen instead, which does nothing, leading to confusion.

This is why pull-to-refresh gestures work better when triggered from the middle of the screen rather than requiring a swipe from the absolute top. The thumb can comfortably swipe down from anywhere in the easy zone, but only reaches the top edge with effort.

This article is part of the larger guide on [Building a mobile-first navigation strategy (not mobile-friendly)](/mobile-first-navigation-strategy/).
