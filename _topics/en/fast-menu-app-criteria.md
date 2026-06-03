---
lang: en
ref: fast-menu-app-criteria
title: "How to Tell if a Menu App Is Actually Fast: 5 Criteria"
description: "Five criteria for a fast menu app you can check yourself: lazy loading, lean JavaScript, no render-blocking, CDN, and the Built for Shopify badge. Measured against Core Web Vitals."
parent_title: "Navigation and page speed — choosing a menu app that does not hurt Core Web Vitals"
parent_url: "/navigation-and-page-speed/"
seo_keywords:
  - fast menu app criteria
  - lazy loading
  - CDN
  - Built for Shopify
date: 2026-06-02
---

The menu is something nearly every visitor touches. So a slow menu app makes the whole page feel slow. But "fast" is a vague word. When shopping for an app, we keep hearing claims like "ultra-light" and "won't slow your page down," with no clear way to verify any of it.

This article pulls together five **criteria for a fast menu app** that you can check yourself, without being a technical person. These are the things I learned after running a store for a while and going back through the documentation from both Google and Shopify.

One reference point before we start. Google measures page-load experience with the Core Web Vitals set, where the "good" thresholds are LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1 ([web.dev](https://web.dev/articles/vitals)). A good menu app is one that does not make these numbers worse.

## 1. Lazy loading: only load when needed

Lazy loading means the app does not load everything the moment the page opens. Whatever isn't needed yet stays on hold, and only loads when a visitor hovers or clicks.

A desktop mega menu can hold dozens of items, along with icons and thumbnails. If the app tries to load all of it up front, it competes for resources with the main content the visitor actually wants to see, like product images and prices. With lazy loading, the submenu layer only appears when the visitor actually hovers over it.

How to check: open the page on a computer and notice whether the menu hesitates for a beat when it drops open. A small pause on the first hover is usually a sign that the app is loading at the right moment, rather than cramming everything in from the start. This matters most for stores with many categories, like general stores or fashion shops with many product lines.

## 2. Lean JavaScript

This is the hardest criterion to judge by eye, but it is worth asking the vendor about. The idea is simple: a menu should not drag in a whole heavy framework just to show a few links.

JavaScript is the "running" part of the app. The bigger the JavaScript bundle, the more time the browser spends loading and processing it, which directly affects INP, the responsiveness when a visitor clicks. A leanly written menu app carries only the code it needs to open and close the menu, nothing more.

You don't need to read code to judge this. Run the page through Google's [PageSpeed Insights](https://pagespeed.web.dev/) and look at the unused JavaScript section. If this part swells noticeably after installing the menu app, that is a signal to think twice.

This is also why an app that does one thing well is usually lighter than an app that tries to do a dozen things. The more you cram in, the harder it is to keep the JavaScript bundle lean.

## 3. No render-blocking

Render-blocking is when the app's script stops the browser from drawing the main content onto the screen. The visitor has to wait for the menu app to finish loading before the rest of the page shows up.

According to Google's documentation, a script loaded the default way will block the browser from parsing and displaying the page until that script has finished loading, reading, and running ([web.dev](https://web.dev/articles/render-blocking-resources)). This pushes back milestones like First Contentful Paint and LCP. In other words, a menu app placed in the wrong spot can leave the screen blank for longer, even if the menu itself is nothing complicated.

A well-built app loads its script asynchronously (async or defer), so the page shows its main content first, and the menu attaches afterward with a delay the visitor barely notices. This point is hard to check yourself, but PageSpeed Insights has a specific warning about "render-blocking resources," and you can compare the score before and after installing the app.

## 4. Assets served over a CDN

A CDN is a network of servers spread across many places around the world. When the menu's icons, images, and files are served over a CDN, they are pulled from the server closest to the visitor, so they load quickly and evenly in every region.

This is practical for Vietnamese merchants targeting international customers. If the menu files sit on a single server located far away, visitors in Europe or the US will wait longer for each small icon. With a CDN, that distance is shortened.

It is also easy to ask the vendor: where are the icons and images in the menu served from? A serious app will be able to answer, and will often bring up its use of a CDN as a plus. On Shopify, most assets go through the built-in CDN infrastructure, but it is still worth checking the images and icons that the menu app itself loads in.

## 5. The "Built for Shopify" badge

If you use Shopify and would rather not check every technical criterion above yourself, the **Built for Shopify** badge is a reliable shortcut. It is a label Shopify grants to apps that meet their quality standards, and Shopify reviews fairly strictly.

What's notable is that this set of criteria includes a performance part, drawn straight from Core Web Vitals. According to [Shopify's documentation](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements), an app must hit LCP of 2.5 seconds or less, CLS of 0.1 or less, and INP of 200 milliseconds or less, measured at the 75th percentile of loads. On top of that, the app must not drop the storefront's Lighthouse performance score by more than 10 points.

In other words, an app with this badge means it has already passed a portion of the technical vetting that you would otherwise have to do yourself. The badge doesn't replace measuring on your own store, but it narrows the shortlist very quickly.

Among menu apps, [Navi+](https://naviplus.io) has the "Built for Shopify" badge and is optimized along the criteria above: it loads lean, doesn't block rendering, and avoids shifting the layout when the menu appears. Navi+ can build a bottom Tab Bar for mobile, a Mega Menu, Slide Menu, FAB, and Grid Menu, with separate mobile and desktop configurations, no code required. I mention it here because it is a close example of the five points just discussed, not to say it is the only option.

## Pulling it together into a checking habit

The five criteria above come down to a few small things you can do in ten minutes:

- Hover over the menu and see whether it hesitates from loading everything at once (lazy loading).
- Run PageSpeed Insights before and after installing the app, and compare the unused JavaScript and the render-blocking warnings.
- Ask the vendor about a CDN for icons and images.
- Prefer apps with the "Built for Shopify" badge if you sell on Shopify.

A store usually installs many apps, and each one adds a little to the overall speed. Because the menu appears on nearly every page, that is a spot worth being a bit more demanding about. Choosing right from the start saves you from having to uninstall and reinstall later.

This article is part of the larger guide on [Navigation and page speed — choosing a menu app that does not hurt Core Web Vitals](/navigation-and-page-speed/).