---
lang: en
ref: collection-page-exit-rate
title: "Metric 3 — Exit rate on the collection page"
description: "A high collection page exit rate often comes from menu labels that don't match what the page shows. How to measure it with GA4 Explorations, and how to review and fix your menu to keep customers."
parent_title: "How to tell whether your menu is working — 5 metrics worth tracking"
parent_url: "/measuring-menu-performance/"
seo_keywords:
  - collection page exit rate
  - collection page
  - GA4
date: 2026-06-02
---

This is the third metric in the series of five, and it tells a very different story from the first two. Earlier we asked, "did the customer click the menu?" Now the question is: after they click through and land on the collection page, do they keep going or do they leave the site?

Measuring the **collection page exit rate** lets you see exactly where the break happens. When a customer takes the trouble to reach a collection page and still leaves, it usually isn't because they lost interest in buying. It's usually because what they see doesn't match what they expected when they clicked the menu. And very often, the root cause is how we named the menu item.

## What collection page exit rate is

Exit rate is the share of sessions that end on a given page, calculated as the number of exits divided by the number of views for that page. Any page where a customer looks, then leaves the site without viewing another page, counts as an exit.

Applied to the collection page, the meaning is very concrete. A customer lands on a collection page — say "Men's jackets" or "Kitchen accessories" — then clicks no product, applies no filter, moves to no other category, and closes the tab. That's an exit on the collection page.

It helps to separate this from bounce rate. A bounce is a customer who comes in and leaves without interacting at all, usually counted for the first page they entered on. Exit is broader: the customer may have viewed a few pages already, but the collection page is the last one they saw before leaving. For the collection page, exit rate is the more interesting figure, because it tells you the customer got "stuck" while browsing and couldn't move forward into a product.

## How to measure collection page exit rate in GA4

There's a small snag worth mentioning first. In GA4, Google has hidden the Exits and Exit rate metrics from the Standard Reports. If you open the Pages and screens report directly, you won't find an Exit rate column there anymore. This is different from the old Universal Analytics, so many people search and never find it.

The way to get it is to use Explorations, with these short steps:

- Go to **Explore** in the left sidebar and choose a **Free form** report.
- Add the dimension **Page path and screen class**.
- Add two metrics: **Views** and **Exits**.
- Filter the path to the URL portion of your collection pages. On Shopify, collection pages usually look like `/collections/...`, so filter the page path to contain `/collections/`.

GA4 doesn't include an Exit rate column in this table by default, so you work it out yourself by dividing Exits by Views for each page. A category with 1,000 views and 300 exits has a 30% exit rate. The quick way is to export to Google Sheets and add a division column.

Don't fixate on the absolute number, because every industry differs. A more useful exercise is to compare your categories against each other and against your own store's average. The category whose exit rate stands out clearly from the rest — that's the one to examine.

## How to read it: why exits are high on the collection page

When a collection page has an unusually high exit rate, the cause usually falls into one of two groups.

**Group one — the customer landed in the wrong place.** They clicked a menu item expecting to see A, but the page shows B. For example, the menu says "Sale" but clicking it shows nothing but full-price goods. Or the menu says "New arrivals" while the page still shows last season's styles. The customer isn't wrong; they're simply disappointed and they leave. In this case the collection page takes the blame for a mislabeled menu item.

**Group two — the collection page is unappealing or hard to use.** It's the right category, but inside there are only a handful of products, the photos are poor, there's no way to filter by size or price, or the page loads slowly. The customer gets stuck at the category level and can't move deeper into a product page — perhaps because the products are organized messily or the page layout is cluttered.

These two groups call for different fixes. Group two is a job for the collection page: rearrange the products, add filters, make the page lighter. Group one — which is very common and often overlooked — is a job for the menu. That's where I want to dwell a little longer.

## The menu connection: labels that don't match the page

A collection page rarely draws traffic on its own. Most visits to a collection page come from a single click on the menu. That means the menu label is the first promise you make to the customer. The collection page is where you either keep that promise or break it.

The gap between the promise and the reality is where exits are born. A few situations familiar to Vietnamese merchants:

- The menu says "50% off," the customer clicks expecting deep discounts, but the page mixes 10%-off items with full-price ones.
- The menu still has "Tet collection" hanging there after Tet; clicking it leads to a nearly empty page.
- The desktop menu and the mobile menu lead to two different pages, one in stock and one sold out.
- The label uses internal wording ("S/S Collection") while customers are used to searching for "Dresses" or "Shirts."

In every case, the customer did nothing wrong. They trusted the words on the menu, clicked, found it wasn't right, and left. That collection page's exit rate climbs, and it's easy for us to misread it as "the collection page has a problem" and fix the wrong thing.

Worth adding: this early exit happens even before the cart. People tend to worry about cart abandonment — according to the Baymard Institute, around 70% of carts are left behind on average. But at the category level, the customer leaves before they've even looked at a product. This is an earlier stage, one fewer people watch, and fixing it is usually cheap and quick.

## Action: review menu labels against collection page content

What you should do is very simple, with no complicated tools needed. Open GA4, filter the list of collection pages, sort by exit rate descending, and pull out the top few categories.

For each high-exit category, walk the customer's own journey:

- What does the menu item leading to this page actually say?
- When you click it, does the page that appears match what the label promised?
- Are there enough products for the customer to feel there's "something to look at"?
- On mobile, where does this menu item sit, and does clicking it lead to the same page as on desktop?

If the menu label and the page content don't line up, there are two ways to fix it: rename the item to match what the page actually shows, or keep the name and adjust the page to meet the expectation. Which way you choose depends on your business intent, but the two must match.

A small tip: name items in the customer's language, not your internal one. Customers type "air fryer," not many search for "premium household appliances collection." The closer the label is to the words customers actually use, the easier expectations are to match, and the lower the exits.

The work of editing the menu can be tedious if you have to touch the theme code. This is why many stores use [Navi+](https://naviplus.io) to build and edit menus by drag-and-drop, without code — renaming an item, reordering, or pointing an item to the right collection page takes only a few minutes. Navi+ lets you configure mobile and desktop separately, so you avoid the bug where the two sides lead to different pages, and the menu stays intact even when you switch themes. The rest — deciding which name matches which page — is still yours, because only you understand your own products.

In short, a high exit rate on the collection page isn't always the collection page's fault. Very often it starts with a menu label that promises one thing and delivers another. Making the two match is usually the fastest way to keep customers around long enough to actually see a product.

This article is part of the larger guide on [How to tell whether your menu is working — 5 metrics worth tracking](/measuring-menu-performance/).
