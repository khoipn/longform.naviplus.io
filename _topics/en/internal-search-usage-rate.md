---
lang: en
ref: internal-search-usage-rate
title: "Metric 5 — Internal Search Usage Rate"
description: "What search usage rate is, how to measure it with GA4, and how to read your top search queries so you can name menu items in your customers' language and cut down on how often they have to search the store themselves."
image: "/images/measuring-menu-performance/internal-search-menu-gaps.webp"
image_alt: "Metric 5 — Internal Search Usage Rate"
parent_title: "How to Tell Whether Your Menu Is Working — 5 Metrics to Track"
parent_url: "/measuring-menu-performance/"
seo_keywords:
  - search usage rate
  - view_search_results
  - top search queries
date: 2026-06-02
---

Of all the metrics for gauging menu health, this is the one most often overlooked. **Search usage rate** — the share of customers who use the search bar instead of the menu to get where they need to go — tells you a story that menu click metrics can't: the portion of customers who have quietly bypassed your menu.

The search bar and the menu sound like two separate things. In reality they are two sides of the same question: did the customer find what they needed, and how?

## What search usage rate is

Put simply, it's the share of sessions with at least one internal search, divided by total sessions. If 100 people visit the store and 18 of them type into the search box, your search usage rate is around 18%.

There is no absolute "correct" level for this number. According to the Baymard Institute, the share of customers who prefer searching over browsing the menu varies a great deal by store and by product type: a fashion store with a few hundred styles is very different from an electronics-parts store with tens of thousands of SKUs.

So don't compare your number to a general benchmark. Compare it against yourself over time, and more importantly — read *what* customers are searching for.

## How to measure search usage rate with GA4

You hardly have to do anything to get started. GA4 has Enhanced Measurement, which is on by default. When it's enabled, GA4 automatically fires the **view_search_results** event every time a customer runs a search.

Here's how it works: GA4 recognizes a search from a parameter in the results page URL. By default it looks for the parameters `q`, `s`, `search`, `query`, and `keyword`. If your search results URL looks like `?q=white-shirt`, everything works right away.

On Shopify, the default search URL uses `?q=`, so `view_search_results` usually starts counting without any adjustment. If your store uses an unusual parameter, you just need to add it to your data stream settings in GA4.

To see the data, go to Reports → Engagement → Events and look for the **view_search_results** event. Open it and you'll find the `search_term` parameter — which is the list of keywords customers typed. To calculate the rate, take the number of sessions with `view_search_results` and divide it by total sessions over the same period.

## High search usage isn't necessarily bad

This is where it's easy to misread things. High search usage can sometimes be a good sign. Customers who buy through search usually know exactly what they want, and according to the Baymard Institute, this is a group with high purchase intent. A search bar that's used a lot, and used effectively, is an asset.

The issue is *what* customers are searching for.

If a customer types a very specific product name, a SKU, or a brand — that's healthy search behavior. The menu can't, and shouldn't, list every single item.

But if customers keep typing things that should be visible right on the menu — "white shirt", "sale", "new arrivals", "new" — that's a signal the menu isn't clear enough. Customers don't search because they enjoy searching. They glance up at the menu, can't find a way in, and turn to the search box as an escape hatch.

Baymard describes this phenomenon exactly: many "product type" queries are really customers trying to reach a category faster, or doing so because they couldn't find that category through the main menu. In other words, the search bar is carrying work the menu should have done.

## Reading your top search queries

Don't stop at the total number. The most valuable part is your **top search queries** — the list of most-searched keywords, drawn from the `search_term` parameter.

Print out the top 30–50 queries and set them next to your current menu. Then ask yourself, line by line: does what the customer typed already have a clear way in on the menu?

Three groups usually show up:

- **Matches a category name already on the menu.** The customer types "dress" while the menu says "Skirts." The customer types "discount" while the menu says "Outlet." This is the clearest signal: the category *exists*, but its name on the menu doesn't match the language customers use, so they don't recognize it and have to type it out by hand.
- **Something you carry but the menu never mentions.** Customers type "gifts", "plus size", "matching sets" — you have stock for this group but haven't made it a section of its own. This is a hint to add a new category or filter.
- **Something you don't sell.** Customers type the name of a product you haven't brought in. This group has nothing to do with the menu, but it's valuable data for purchasing.

The first group is the one worth fixing right away. Every query that matches a category name is a customer who had to take an extra step they shouldn't have needed.

## Name your menu in your customers' language

The conclusion is very simple: rename your menu items the way customers refer to them, not the way you — the merchant — do.

Merchants tend to name menus in their own internal language: "Spring/Summer Collection", "Premium Line", "Group A". It reads fine to us because we live inside that way of categorizing. Customers don't. Customers type what's in their heads: "short-sleeve shirt", "high-end", "cheap".

The rule that emerges: your top search queries are the dictionary your customers wrote for you. If a lot of people type "sale", consider a menu item named plainly "Sale" instead of "Outlet" or "Deals". If a lot of people type "dress", put "Dresses" first, or use it in place of "Skirts".

The testing is gentle too: change a few labels, then watch over the next few weeks whether search usage for those exact queries drops. If customers stop having to search for something that now sits right on the menu, you know you fixed the right thing.

The hard part isn't technical — it's being willing to change the labels. Renaming a menu sounds small, but it touches on how we define our own store. A drag-and-drop tool like [Navi+](https://naviplus.io) takes some of the discomfort out of this — you edit labels, reorder, and try new layouts on a Mega Menu or Tab Bar without code and without fear of breaking your theme. When changing a label is cheap, you'll be more willing to listen to your customers.

Search usage rate, read the right way, is the voice of the customers who tried the menu and found it lacking. They stayed and searched anyway. Our job is to hear what they're telling us.

---

This article is part of the larger guide on [How to Tell Whether Your Menu Is Working — 5 Metrics to Track](/measuring-menu-performance/).