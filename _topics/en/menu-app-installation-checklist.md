---
lang: en
ref: menu-app-installation-checklist
title: "A checklist to run before installing any menu app"
description: "A menu app installation checklist for Shopify stores: four steps to measure PageSpeed and Core Web Vitals before and after installing, so you pick an app that won't slow your pages on mobile or desktop."
image: "/images/navigation-and-page-speed/menu-app-installation-checklist.webp"
image_alt: "A checklist to run before installing any menu app"
parent_title: "Navigation and page speed — choosing a menu app that won't hurt Core Web Vitals"
parent_url: "/navigation-and-page-speed/"
seo_keywords:
  - menu app installation checklist
  - PageSpeed Insights
  - Search Console
date: 2026-06-02
---

Before you click "Add app" for any menu app, there's one small thing worth doing: write down how fast your store is right now. It sounds simple, but this is the part most people skip — and then a few weeks later they notice the site feels slower without knowing which app caused it.

This is a short, **menu app installation checklist** you can follow right away, drawn from running real stores. Nothing fancy — just a few before-and-after measurements, so you don't install a beautiful menu and quietly trade away speed for it. The more apps you install, the more this habit pays off, because every app you add can touch your page speed.

## Why speed is worth caring about

Online shoppers leave easily as it is. According to the Baymard Institute, the average cart abandonment rate hovers around 70%, and that number has barely moved in over a decade. Every extra second of load time, every layout jump while the page is loading, is one more reason for a customer to bounce.

Google also treats page speed and stability as part of the experience, grouped into a set of metrics called Core Web Vitals. The three main numbers, per Google:

- LCP (Largest Contentful Paint): good when under 2.5 seconds.
- INP (Interaction to Next Paint): good when under 200 milliseconds.
- CLS (Cumulative Layout Shift — does the page jump around): good when under 0.1.

You don't need to memorize these. Just remember: a carefully built menu app won't make these three numbers noticeably worse. The checklist below helps you confirm that with data, instead of a gut feeling.

## Menu app installation checklist: four steps, measure before and after

This is the heart of the article. Four steps, in order.

### Step 1: Measure your store's PageSpeed score before installing

Open Google's [PageSpeed Insights](https://pagespeed.web.dev), paste in your homepage URL and a representative product page, and run the test. Record the scores — take a screenshot or save them to a small file.

Why save them? Because without a "before" snapshot, you have nothing to compare against. A few weeks later, when the site feels slow, you won't know whether it's the menu app, the new review app you installed, or the batch of product images you just added.

PageSpeed Insights gives you two kinds of data. The top section is field data from real users (collected from the Chrome User Experience Report); the bottom section is lab data (Google's machine simulating a single page load). At this step, just record the overall score plus the three LCP, INP, and CLS numbers.

### Step 2: Install the app, measure again, compare

Install the menu app you plan to use, then set it up exactly the way you actually will — that means turning on the menu types you'll use: a Tab Bar at the bottom on mobile, a Mega Menu for desktop, or a Slide Menu — rather than measuring with the defaults.

Then run PageSpeed Insights again on the same URLs from Step 1. Put the two results side by side.

One note: right after installing, the field data (top section) usually hasn't changed yet, because it pools the last 28 days. What you can compare right away is the lab data. Don't panic if the lab score drops a few points — what matters is how much. A drop of 2-3 points is usually nothing to worry about; a big drop, or CLS suddenly spiking (the page jolting when the menu appears), is worth a second look.

### Step 3: Check Core Web Vitals in Search Console after 1-2 weeks

This is the step that gives you the real numbers, because it measures the experience of real customers. Open [Google Search Console](https://search.google.com/search-console) and go to Core Web Vitals (Page Experience). This report uses field data from your own users.

Why wait 1-2 weeks? Field data is calculated over a rolling 28-day window. After about two weeks, a meaningful portion of that window is new data — enough for you to see a trend. In Search Console, watch for URLs moving from "Good" to "Needs improvement" or "Poor." If the group of failing URLs balloons right after you install the menu app, that's a signal.

If your store still gets few visits, Search Console may not have enough data to show the report. In that case, lean on PageSpeed Insights and the lab data instead.

### Step 4: If the scores drop noticeably, switch apps or adjust the setup

If, after measuring, the metrics are clearly worse, you have two options.

One is to optimize the configuration: turn off unnecessary animations, reduce the number of items in an oversized Mega Menu, drop the heavy images crammed into the menu. Often the problem isn't the app but how greedily we built the menu.

The other is to switch apps, if the app itself is heavy and there's no way to rein it in. A good menu app should treat speed as its own responsibility, not push that work onto you.

## Don't forget to measure on mobile

Most Vietnamese merchants get more traffic from phones than from desktop — customers scrolling Facebook, tapping a link, opening the store right on their mobile.

Mobile scores are almost always lower than desktop, because phones are weaker and mobile networks are less stable than wifi. In PageSpeed Insights, remember to switch to the Mobile tab to measure — don't just look at the Desktop score because it looks nicer.

This matters especially for the mobile menu. A sloppily built Tab Bar at the bottom of the screen or a Slide Menu can make the page jolt (pushing CLS up) right as a customer opens the store. Try opening your store on your own phone and watch whether anything jumps or stutters as the page loads. Your own eyes often catch things the score hasn't reflected yet.

## A gentle reminder

The checklist above isn't meant to scare you away from menu apps — good navigation helps customers find products faster, and that's worth investing in. The point is simply this: choose an app that's mindful of speed.

[Navi+](https://naviplus.io) was built in exactly that spirit: a no-code, drag-and-drop menu builder for Tab Bars, Mega Menus, Slide Menus, FABs, and Grid Menus; with separate configurations for mobile and desktop; and tuned so it doesn't drag down your Core Web Vitals. Even so, the honest advice stands: run the four measurement steps above with any app, Navi+ included, so you can reassure yourself with your own store's numbers.

This article is part of the larger guide on [Navigation and page speed — choosing a menu app that won't hurt Core Web Vitals](/navigation-and-page-speed/).
