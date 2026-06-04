---
lang: en
ref: menu-render-cost
title: "Menu render cost: JavaScript, CSS, and DOM weight"
description: "What makes a menu heavy — script size, DOM node count, CSS complexity, layout reflow, and how each contributes to slow performance on mobile devices."
parent_title: "Mobile menu performance: why every millisecond matters"
parent_url: "/mobile-menu-performance/"
seo_keywords:
  - menu render cost
  - javascript weight menu
  - DOM nodes performance
  - CSS complexity menu
date: 2026-05-09
---

A menu is made of three things: JavaScript (the logic), CSS (the appearance), and HTML/DOM nodes (the structure). Each has a performance cost, and on mobile devices those costs are amplified because processors are slower, memory is limited, and the GPU handles less before stuttering.

## JavaScript weight

JavaScript cost has three phases: download, parse, and execute.

**Download** depends on file size and network speed. A 100KB script takes about 250 milliseconds on a 3G connection and 50 milliseconds on 4G. On a fast Wi-Fi connection, it's nearly instant. Compression (gzip or Brotli) reduces download size by 60–80%, so a 100KB uncompressed script becomes 20–40KB over the wire.

**Parse and compile** depend on the script complexity and the device's CPU. V8 (Chrome's JavaScript engine) benchmarks show that parsing takes roughly 1 millisecond per 10KB on a flagship phone and 3–5 milliseconds per 10KB on a mid-range phone. A 200KB menu script might take 20 milliseconds to parse on a flagship and 60–100 milliseconds on a budget device.

**Execute** depends on what the script does at startup. A menu script that reads the DOM, calculates positions, and renders elements immediately is doing work on the main thread. If that work takes more than 50 milliseconds, it's a "long task" that can delay user interactions.

For menu apps, the JavaScript weight varies dramatically. A simple tabbar might need 15–20KB. A mega menu with animations, lazy-loaded images, and analytics might need 150–300KB. The difference in mobile performance is significant.

## DOM node count

Every DOM node the browser has to manage has a cost: layout calculation, paint, composite. A few hundred nodes are fine. A few thousand can cause visible stuttering on mobile.

Menu apps add DOM nodes for every category, subcategory, link, image, and wrapper element. A mega menu with 50 categories, each with 5 subcategories and an image, easily generates 300+ nodes — plus wrapper divs, icons, and decorative elements.

The practical impact: when the menu opens and the browser has to lay out and paint 300 new nodes, there's a visible delay. The menu animation stutters instead of being smooth. On a mid-range phone, this can take 30–50 milliseconds — enough to feel janky.

Reducing DOM weight means: fewer wrapper divs, no unnecessary decorative elements, lazy-rendering for deep subcategories (only create DOM nodes when the user expands that level), and using CSS pseudo-elements instead of HTML elements for visual effects.

## CSS complexity

CSS cost is often underestimated. Complex selectors (deeply nested, using multiple pseudo-classes, or matching against large DOM trees) take longer to evaluate. Large CSS files take longer to parse. Complex layouts with many positioned elements, z-index stacking, and transforms create expensive compositing work.

For menus, common CSS performance pitfalls include:
- **Box shadows and filters on every item.** Each shadow/filter requires GPU compositing. Ten items with shadows are fine; a hundred creates noticeable lag.
- **Complex animations.** Animating width, height, or top/left causes layout recalculation (reflow). Animating transform and opacity is much cheaper because these only affect compositing.
- **Large background images.** A mega menu with full-width background images for each category downloads and renders those images even on mobile, where they're barely visible.

## Measuring render cost

Chrome DevTools Performance tab shows exactly what happens when the menu renders:

1. Open DevTools → Performance → Start recording
2. Open the menu
3. Stop recording

The timeline shows:
- **Scripting** (yellow): JavaScript execution time
- **Rendering** (purple): Layout calculation time
- **Painting** (green): Visual painting time

If scripting or rendering takes more than 16 milliseconds (one frame at 60fps), the animation won't be smooth. If it takes more than 100 milliseconds, the user perceives a delay.

This article is part of the larger guide on [Mobile menu performance: why every millisecond matters](/mobile-menu-performance/).
