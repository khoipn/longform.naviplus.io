---
lang: en
ref: tap-delay-menu-responsiveness
title: "Tap delay and interaction responsiveness"
description: "Why menus feel slow to respond on mobile — main thread blocking, CSS animation cost, and techniques to achieve sub-200ms interaction response."
parent_title: "Mobile menu performance: why every millisecond matters"
parent_url: "/mobile-menu-performance/"
seo_keywords:
  - tap delay mobile
  - menu responsiveness
  - INP navigation
  - interaction delay fix
date: 2026-05-09
---

When a shopper taps a menu button on their phone, they expect an immediate response. Research on human perception shows that delays under 100 milliseconds feel instant. Between 100 and 300 milliseconds, the user notices a delay but tolerates it. Over 300 milliseconds, the experience feels sluggish. Over 500 milliseconds, the user thinks something is broken.

Google's INP (Interaction to Next Paint) metric measures this precisely: the time from a user interaction (tap, click, keypress) to the next visual change on screen. INP under 200 milliseconds is "good." Over 500 milliseconds is "poor."

## What happens between tap and response

When the shopper taps the menu button, a sequence of events occurs:

1. **Touch event fires** — the browser detects the tap
2. **Event listener executes** — JavaScript processes the tap
3. **DOM changes** — the menu elements are created, shown, or animated
4. **Layout calculation** — the browser calculates the position and size of new elements
5. **Paint** — the browser draws the new elements on screen
6. **Composite** — the GPU composites the layers

Steps 2–5 happen on the main thread. If any step takes too long, the visual response is delayed. The total time is the INP for that interaction.

## Common causes of tap delay

**Heavy JavaScript in the event handler.** If the menu's tap handler does too much work — reading DOM properties, calculating positions, loading data from the network — the response is slow. The fix: do the minimum work needed to trigger the visual change (toggle a CSS class), and defer heavy work to after the animation starts.

**Synchronous layout reads.** Reading layout properties (like `offsetHeight`, `getBoundingClientRect`) forces the browser to calculate layout before returning the value. If the script alternates between reading and writing layout properties (read-write-read-write), the browser recalculates layout multiple times. This is called layout thrashing and can add 50–100 milliseconds to the response.

**Complex CSS animations.** Animating properties that trigger layout (width, height, top, left, margin, padding) forces a full layout recalculation on every animation frame. Animating `transform` and `opacity` instead uses the GPU compositor and avoids layout, making animations much smoother.

**Third-party scripts competing for the main thread.** Analytics scripts, chat widgets, and other third-party code running on the main thread can delay the menu's response. If a 50-millisecond analytics task runs at the moment the user taps, the menu response is delayed by 50 milliseconds before the event handler even starts.

## Techniques for sub-200ms response

**Pre-render the menu.** Instead of creating DOM elements when the menu opens, create them when the page loads (or when the page is idle) and hide them with CSS. When the user taps, the handler just toggles visibility — no DOM creation, no layout calculation for new elements.

**Use CSS transitions.** CSS transitions are handled by the browser's optimized animation pipeline. A `transition: transform 0.3s ease` on the menu panel lets the browser animate smoothly without JavaScript involvement. The handler adds a class, and CSS does the rest.

**Avoid layout thrashing.** Batch DOM reads and writes. Read all needed properties first, then make all changes. Use `requestAnimationFrame` to defer visual changes to the next frame.

**Minimize main-thread work.** Keep the event handler lean — toggle a class, update an ARIA attribute, and let CSS handle the visual transition. Any heavy work (loading images, fetching data, calculating positions) should happen after the first visual frame.

This article is part of the larger guide on [Mobile menu performance: why every millisecond matters](/mobile-menu-performance/).
