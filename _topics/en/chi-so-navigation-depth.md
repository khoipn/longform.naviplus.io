---
lang: en
ref: chi-so-navigation-depth
title: "Metric 2 — Navigation Depth"
description: "Navigation depth measures the number of steps from the homepage to a product. How to measure it in GA4, the 2-3 step benchmark, and how to use a mega menu and Tab Bar to shorten the path to purchase."
parent_title: "How to Know Whether Your Menu Is Working — 5 Metrics to Track"
parent_url: "/do-luong-hieu-qua-menu/"
seo_keywords:
  - navigation depth
  - GA4 funnel
  - click depth
date: 2026-06-02
---

The first metric tells you whether shoppers *click* into your menu at all. The second answers a different question: once they've clicked, how far do they have to travel to reach the thing they want to buy?

That's **navigation depth**. Put simply, it's the average number of steps a person has to take from the homepage to a product page. The fewer the steps, the shorter the path to the cart. The more steps, the more places for a shopper to get tired, get distracted, and close the tab.

I once had a store where I — the person who built it — still had to click four times to find a hot product. That was the moment it hit me: if the shop owner gets lost, how could a first-time visitor not?

## What navigation depth is, and how it differs from "how many pages a shopper views"

There are two things that are easy to confuse, and they need to be kept apart.

One is *pages per session* — the total number of pages a shopper views, including the time they spend browsing, comparing, and reading reviews. A high number here isn't necessarily bad.

The other is **navigation depth**, or **click depth** — the number of steps *required* to go from point A (the homepage, or a top-level category) to point B (a product page). This is the structural cost you impose on shoppers, whether they like it or not.

A typical path on a large store often looks like this: Homepage → Category → Subcategory → Deeper subcategory → Product. Four steps. Each added step is one more time the shopper has to read, understand, decide, and wait for a page to load.

## How to measure navigation depth in GA4

You don't have to guess. GA4 lets you look directly at the real path your shoppers take.

There are two common approaches:

- **User Explorer**: see the journey of a specific user, step by step. Good for examining a few representative cases and getting a feel for where shoppers are wandering.
- **Path Exploration** (or building a Funnel Exploration): see the sequence in which shoppers move from homepage → category → product → add to cart. More important than the number, it shows you the *drop-off points* — the step where the most shoppers fall away.

Path Exploration draws a Sankey-style diagram: the branches that swell are where many people pass through, and the branches that shrink are dead ends. A few minutes of looking and you'll see right away which path real shoppers take, and whether it matches the path you *assumed* they would take.

One tip: don't just look at the average number. Break it down by device. Mobile and desktop often have very different depths, because mobile menus tend to force shoppers to tap more times to open each layer.

## A benchmark — and one important caveat

As a general rule of thumb, the path to your main products should fit within **2-3 steps**. When paths regularly run to five steps or more, your structure is likely too deep.

But here's where I have to be honest. The famous "three-click rule" is actually a myth. Nielsen Norman Group points out that it was never backed by any data, and in the studies they cite, the abandonment rate did not rise when a task exceeded three steps, nor did satisfaction drop. What tires a shopper out is not the number of clicks.

What tires a shopper out is the *effort* of each click. A step with a clear label, leading exactly where the shopper expects, is almost free. A vague step, one that makes the shopper stop and guess where to click, is the expensive one.

So treat the 2-3 step benchmark as a warning signal, not a hard law. High depth is a cue for you to go investigate *why* it's deep — not a number to force down at all costs.

## Why menus get deep

When I go investigating, I usually find three culprits.

**Too many levels of hierarchy.** You add a subcategory, then a sub-subcategory, then a sub-sub-subcategory. Each layer made sense when you added it, but together they form a maze. According to Baymard Institute, as many as 37% of e-commerce websites cram their entire catalog into a single menu item (something like "Shop" or "Products") — a structure that causes all sorts of problems when shoppers try to dig down.

**No shortcuts.** There are no shortcuts to your best-selling categories. A shopper who wants "Men's Shoes" has to go through "Fashion" → "Men" → "Footwear" → "Men's Shoes" in turn, even though most of your revenue sits right there.

**No featured blocks in the mega menu.** Your mega menu just lists bare category names, with no block leading straight to a trending collection, new arrivals, or the deal of the week. Shoppers have to fend for themselves instead of being invited in.

## The fix: let shoppers "leapfrog"

The good news: fixing depth isn't hard, and it usually doesn't require touching your catalog.

**Flatten the structure.** Merge layers that are nearly identical. Ask each layer one question: does this layer genuinely help the shopper narrow their choices, or is it just one more door to open? If it's the latter, remove it.

**Use the mega menu to leapfrog.** This is the key point. A good mega menu lays the hierarchy flat in front of the shopper, so they can *jump straight* to the category they need instead of going step by step. Nielsen Norman Group notes that mega menus work well for navigation because they let shoppers *see* their options instead of having to remember them. Baymard also shows that the mega menu is the most common navigation style on large retail sites, because it's fast and easy to scan.

To make it concrete for sellers: instead of making shoppers wade through four layers to reach "Men's T-Shirts," put "T-Shirts," "Jeans," "New Arrivals," and "50% Off" right on the desktop mega menu. On mobile, a **Tab Bar** at the bottom of the screen lets you anchor your 4-5 most important shortcuts always within thumb's reach — one tap and the shopper is there, no need to open the hamburger and dig down.

This is exactly what [Navi+](https://naviplus.io) was built to do: create a Mega Menu, Tab Bar, and Slide Menu by drag-and-drop, with no code, configure mobile and desktop separately, and let you attach a featured collection block that leads straight to a best-selling collection. The goal isn't a prettier menu — it's a shorter path from the homepage to the "Buy" button.

One last note, so you don't overdo it: don't get so obsessed with cutting steps that you cram everything onto one cluttered screen. Each shortcut you add should have a clear label and match what shoppers want. Less effort, not just fewer clicks — that's the real spirit of this metric.

---

This article is part of the larger guide on [How to Know Whether Your Menu Is Working — 5 Metrics to Track](/do-luong-hieu-qua-menu/).
