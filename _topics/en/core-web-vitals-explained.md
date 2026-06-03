---
lang: en
ref: core-web-vitals-explained
title: "What Are Core Web Vitals and Why You Should Care"
description: "What are Core Web Vitals? A plain-language explanation of LCP, CLS, and INP, with Google's good thresholds and why these three metrics affect your store's SEO and revenue."
parent_title: "Navigation and page speed — choosing a menu app that doesn't hurt Core Web Vitals"
parent_url: "/navigation-and-page-speed/"
seo_keywords:
  - Core Web Vitals
  - LCP
  - INP
  - CLS
  - SEO
date: 2026-06-02
---

When I first started selling online, I thought page speed was a developer's problem. That was until my store slipped in search rankings even though the content hadn't changed. That's when I sat down and learned it from scratch. It turns out Google has a set of three metrics that measure the real experience of your customers, called **Core Web Vitals**. Understanding these three numbers isn't hard, and it tells you whether your store feels fast or slow in your customers' eyes — and in Google's.

In this article I'll explain the three metrics in plain language, with the "good" thresholds Google publishes, and then talk about why they matter for rankings and revenue.

## What Are Core Web Vitals

Put simply, Core Web Vitals are three measures Google uses to judge how fast and smooth a web page is when real people use it. They aren't measured on an ideal lab machine, but on the actual phones and networks of the people visiting your store.

The three metrics are LCP (does the page appear quickly), CLS (does the layout jump around) and INP (does it respond right away when you tap). Each one corresponds to a specific feeling a customer has when they open the page.

Google scores based on the 75th percentile — that is, 75% of visits — and separates mobile from desktop. In plain terms: most of your customers have to find the page acceptable for it to count as "good," not just a few lucky visits.

## LCP — Does the Page Appear Quickly or Slowly

LCP is Largest Contentful Paint, the moment when the largest element on the screen appears. That's usually the banner image at the top of the page, the main product image, or a large heading block. When the customer sees that, they feel the page has finished loading.

According to Google, the good threshold is under 2.5 seconds. Over 4 seconds is considered poor. Anything in between is "needs improvement."

Imagine a customer tapping a product link from a Facebook ad, standing in the middle of the street waiting on a blank white screen. Every second that passes is a slice of the chance they'll leave. For fashion or cosmetics stores — where images are usually heavy — LCP is the easiest place to slow down.

The things that usually drag LCP down: images that are too heavy and not compressed, too many apps running in the background when the page opens, or a theme that loads all sorts of unnecessary things before showing the main content.

## CLS — Does the Layout Jump Around

CLS is Cumulative Layout Shift, which measures how much elements move during loading. According to Google, the good threshold is under 0.1.

This is the annoyance everyone has run into. You're about to tap "Add to Cart," and then a banner or a slow-loading image slips in, pushing the button down, and your finger taps somewhere else by mistake. Sometimes you tap an ad by accident. That's exactly what a layout shift is.

The menu is a familiar culprit. If the navigation bar loads after the content, it can push everything below it down right when the customer is reading or tapping. The customer can't name that feeling, but they see a messy page and lose trust.

The usual way to reduce CLS is to reserve space ahead of time for images, banners, and menus, so that when they load they fill into the slot already set aside without shoving the rest around. When choosing a menu app, prefer one that doesn't make content jump when it appears.

## INP — Does It Respond Right Away When You Tap

INP is Interaction to Next Paint, which measures the delay from when a customer interacts (taps, touches, types) to when the screen responds. According to Google, the good threshold is under 200 milliseconds.

One detail worth remembering: INP officially replaced FID (First Input Delay) in the Core Web Vitals set on March 12, 2024, according to Google. The reason is that FID only measured the first interaction, while INP tracks all interactions across the whole session — closer to reality. If you read older documentation that still mentions FID, the number to care about now is INP.

INP is closely tied to the feeling of "is this page sluggish." A customer opens the hamburger menu on their phone, taps once, and half a second later the menu finally springs open. In that half second they think the device has frozen, tap again, and then get frustrated. The more code a menu runs in the background, the worse this delay gets.

This is when I started paying close attention to the menu app I had installed. I switched to Navi+ ([naviplus.io](https://naviplus.io)) partly because it's optimized not to slow the page down. With a Tab Bar menu at the bottom of mobile or a Slide Menu, how responsive it feels when a customer taps directly affects INP, so a lightweight app makes this number easier to keep in check.

## Why You Should Care About Core Web Vitals: SEO and Revenue

The blunt question: are these three numbers worth worrying about, or are they just a technical matter?

They are. Google has confirmed that page experience, which includes Core Web Vitals, is a ranking factor. It isn't the most important factor — good content is still the foundation — but when two pages have equally good content, speed can be the factor that helps Google choose which one to put on top. A slow store can easily lose to a faster page on exactly the keywords you're competing for.

The knock-on effect is fairly simple: a slow store ranks lower, a lower rank means less organic traffic, less traffic means fewer orders. For sellers who rely heavily on SEO instead of running ads, this is a free source of customers you don't want to leak away.

Speed doesn't just affect rankings, it affects the conversion rate too. The average cart abandonment rate in ecommerce is around 70%, according to Baymard Institute (a figure compiled from 50 studies). There are many causes, but a page that loads slowly or stutters certainly doesn't help. When a customer has already reached the cart and still has to wait, or taps the wrong thing because the layout jumped, the odds of them leaving go up.

The comforting part is that these three metrics are measurable and improvable. You don't need to guess. Go to Google Search Console or PageSpeed Insights, enter your store's URL, and the tool will show you where LCP, INP, and CLS stand and where they're in the red.

A practical order for the busy:

- Check whether images are too heavy (affects LCP).
- Review the apps you've installed, looking for ones that run a lot of background code (affects INP).
- Check whether menus and banners make content jump when they load (affects CLS).

Many stores pile up apps over time, and the menu shows up on every page — so a lightweight navigation app that doesn't shove the layout around is an investment worth considering.

You don't need to turn yourself into an engineer. You just need to understand what the three numbers say about how your customers feel, check them periodically, and when choosing tools — especially a menu app that appears on every page — pay attention to whether it's slowing your store down.

This article is part of the larger guide on [Navigation and page speed — choosing a menu app that doesn't hurt Core Web Vitals](/navigation-and-page-speed/).
