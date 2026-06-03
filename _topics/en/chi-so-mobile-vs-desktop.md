---
lang: en
ref: chi-so-mobile-vs-desktop
title: "Metric 4 — Mobile vs Desktop Navigation Behavior"
description: "Compare mobile vs desktop navigation: how to measure it in GA4, the warning signs when mobile exits run higher than desktop, and how to split your Tab Bar layout for each device."
parent_title: "How to Know If Your Menu Is Working — 5 Metrics to Track"
parent_url: "/do-luong-hieu-qua-menu/"
seo_keywords:
  - mobile vs desktop navigation
  - GA4 segments
  - device category
date: 2026-06-02
---

This metric is a little different from the three before it. Instead of looking at a single number, you look at the same number but split by device. This is where you compare **mobile vs desktop navigation** — how people browse on a phone versus on a computer.

I figured this out later than I should have. At first I looked at the combined report, saw that the menu numbers looked fine, and felt reassured. It was only when I split mobile out on its own that I saw half my visitors were having a completely different experience from the one I imagined.

## The same menu, two different stories

When you compare navigation by device, there are three things worth looking at most:

- **CTR (menu click-through rate):** what percentage of visitors actually tap the menu on each type of device.
- **Depth (how far they browse):** after they tap, how many pages they go through.
- **Exit rate:** how many visitors leave having done almost nothing.

The key point is that these three numbers usually differ clearly between mobile and desktop. On desktop, the menu is often horizontal and always visible — a quick glance and the visitor sees everything. On mobile, the menu is often hidden behind a three-line hamburger button, and they have to tap to open it.

This difference is not small. According to the Nielsen Norman Group, hiding your main navigation behind a hamburger nearly halves the chance that visitors find the menu, while also making them spend more time and find the task harder. Same website, but desktop users and mobile users are practically walking through two different stores.

## How to measure it: split by device category in GA4

You don't need any special tools. GA4 can do all of it.

The simplest way is to open Explore, create a Free form report, then add **device category** as a dimension. Now each metric shows up as three rows: desktop, mobile, tablet. You compare bounce rate, engagement, and pages per session directly across the rows.

If you want to go deeper, create separate segments — a "Mobile" segment and a "Desktop" segment — then apply the same report to each. This is handy when you want to layer in extra conditions, for example only looking at visitors who came from Facebook ads, or only visitors on one specific category page.

A note on how GA4 defines things. In GA4, a session counts as a "bounce" when it isn't engaged — meaning the visitor stayed under 10 seconds, viewed only one page, and didn't trigger any key event. Bounce rate is simply the inverse of engagement rate. Keep this in mind so the numbers don't confuse you.

When you measure, don't focus on the absolute numbers. Look at the **gap** between mobile and desktop.

## A setup that works on desktop can fail on mobile

This is the part I want to stress, because it's the easiest one to overlook.

When you build a menu, you're almost certainly sitting in front of a computer. You preview it on a wide screen, see the tidy multi-column mega menu, find everything easy to click, and ship it. The problem is that most of your visitors aren't sitting the way you are.

On mobile, everything changes. The screen is narrow, fingers are bigger than a mouse cursor, and visitors usually tap with one thumb while holding the phone in one hand. According to Steven Hoober's thumb zone research, most interactions on a phone are done with the thumb, and the easiest area to reach is the bottom half of the screen. A menu crammed into the top corner, with small text and items packed tight together — fine on desktop, hard to hit on mobile.

A familiar example: a fashion shop puts its entire catalog into a very detailed desktop mega menu — tops, bottoms, dresses, accessories, by season, by size. Beautiful. But on mobile, all of it gets squeezed into one long, endless list inside the hamburger. The visitor has to tap to open it, scroll down, search, and only then reach the tap. Every extra step is one more chance for the visitor to leave.

This is why you should configure navigation separately for each device. For mobile, many shops switch to a Tab Bar — a fixed navigation bar pinned to the bottom of the screen, right in the thumb zone — for the 3-5 most important items like Home, Categories, Search, and Cart. On desktop, they keep the full mega menu. Two layouts for two contexts.

## Warning sign: mobile exits clearly higher than desktop

The clearest sign is easy to spot: bounce rate on mobile is noticeably higher than on desktop.

To be fair, mobile exiting a bit higher than desktop is normal everywhere, not just for you. According to industry benchmarks, mobile sessions tend to bounce around 50%, while desktop is lower — the average gap is roughly 10 percentage points, and it's been fairly steady for years. So don't panic just because mobile is higher.

What's worth worrying about is when that gap is unusually large. If, on the same pages, mobile exits 20 points higher than desktop or more, that's a signal your mobile experience has a problem — and navigation is one of the first suspects.

A few other signals worth watching at the same time:

- Menu CTR on mobile much lower than desktop: visitors can't find it or are hesitant to tap.
- Depth shallower on mobile: visitors land on one page and close it, without browsing deeper.
- Pages loading slowly on mobile: a heavy menu or app slows things down, and visitors lose patience. Google recommends LCP under 2.5 seconds, INP under 200ms, and CLS under 0.1; mobile is usually where these metrics are worst.

Remember that the average cart abandonment rate is already around 70% according to the Baymard Institute. A hard-to-use mobile navigation only makes that number worse.

## Action: split mobile and desktop into two separate setups

What you need to do fits in one sentence: don't force one menu to serve both worlds.

Specifically, after looking at the numbers in GA4:

1. Split the report by device category, and find the pages where mobile exits unusually higher than desktop.
2. Open those exact pages on your own real phone, and try tapping the menu with one thumb like a customer would. You'll see the friction for yourself.
3. Design a separate mobile layout — prioritize a Tab Bar at the bottom for the main items, trim the list inside the hamburger, and make buttons big enough to tap.
4. Keep desktop with the full mega menu. Two setups, not one.

This is exactly what [Navi+](https://naviplus.io) was built for. You configure mobile and desktop separately: a Tab Bar at the bottom for mobile, a Mega Menu for desktop, each with its own layout, without touching any code. The menu is optimized so it doesn't drag down your Core Web Vitals, and it stays put when you change themes. It's all drag-and-drop.

What I took away in the end is pretty simple. You don't need a perfect menu. You just need to stop judging the mobile experience through the eyes of someone sitting at a desktop. Split the numbers by device once, and there's a good chance you'll see what you've been missing all along.

This article is part of the larger guide on [How to Know If Your Menu Is Working — 5 Metrics to Track](/do-luong-hieu-qua-menu/).