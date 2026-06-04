---
lang: en
ref: screen-reader-navigation
title: "Screen reader navigation: what assistive technology users hear"
description: "How screen readers announce menus, landmarks, and navigation links — and how to structure ecommerce navigation so it makes sense when read aloud."
parent_title: "Accessible navigation: building for screen readers and keyboard users"
parent_url: "/accessibility-navigation/"
seo_keywords:
  - screen reader navigation
  - assistive technology ecommerce
  - VoiceOver navigation
  - NVDA menu navigation
date: 2026-05-02
---

A sighted user looks at a page and instantly sees the layout: the logo is in the top left, the menu stretches across the header, the cart icon is in the top right. A screen reader user hears elements announced one by one, in the order they appear in the HTML. The visual layout is invisible — only the structure and labels matter.

This means that navigation needs to be logical in the HTML source, not just on screen. A menu that looks like a horizontal bar on desktop might be a `<div>` full of styled `<span>` elements in the code — which a screen reader announces as meaningless text, not navigation.

## What screen readers announce

When a screen reader encounters a `<nav>` element, it announces "navigation" or "navigation region." This tells the user: "you've reached a navigation section of the page." If the `<nav>` has an `aria-label` ("Main navigation"), the screen reader says "Main navigation, navigation region."

Inside the `<nav>`, links in a list (`<ul>/<li>`) are announced as "list, 6 items." Each link is announced with its text: "Women's Clothing, link." If a link is the current page, `aria-current="page"` makes the screen reader say "Women's Clothing, current page, link."

For dropdowns, a button with `aria-expanded="false"` announces as "Women's Clothing, collapsed, button." After opening, `aria-expanded="true"` makes it say "Women's Clothing, expanded, button." The user knows the submenu is open without seeing the visual change.

## Semantic HTML versus styled divs

The difference between accessible and inaccessible navigation often comes down to HTML choice:

**Accessible:**
```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/women/">Women's Clothing</a></li>
    <li><a href="/men/">Men's Shoes</a></li>
  </ul>
</nav>
```

**Inaccessible:**
```html
<div class="menu-wrapper">
  <div class="menu-item" onclick="navigate('/women/')">Women's Clothing</div>
  <div class="menu-item" onclick="navigate('/men/')">Men's Shoes</div>
</div>
```

The first version uses semantic HTML: `<nav>` marks it as navigation, `<ul>/<li>` marks it as a list, `<a>` marks each item as a link. Screen readers announce all of these correctly. The second version uses `<div>` elements with JavaScript click handlers — screen readers don't know these are navigation links. They're just text.

## Navigation landmarks

Screen reader users often navigate by landmarks — jumping from one `<nav>`, `<main>`, `<header>`, or `<footer>` to the next. This is like using a table of contents instead of reading every word. If the page has a `<nav>` element, the user can jump directly to it from anywhere on the page.

If a page has multiple navigation regions (header menu, breadcrumbs, footer links), each should have a unique `aria-label`. "Main navigation" for the header, "Breadcrumb" for the breadcrumb, "Footer navigation" for the footer. This lets the user choose which navigation to jump to.

Without landmarks, the screen reader user has to Tab through every element on the page to find the menu. On a page with a header, sidebar, content area, and footer, this could mean tabbing through dozens of elements before reaching the navigation.

## Skip links

A skip link is a hidden link at the very top of the page that becomes visible when focused (via keyboard Tab). It says "Skip to main content" and jumps the user past the navigation directly to the page content. This is essential for screen reader and keyboard users who don't want to Tab through the entire menu on every page.

Skip links should be the first focusable element on the page. When the user presses Tab, the skip link appears. Pressing Enter jumps to the main content area (usually marked with `<main>` or an element with `id="main-content"`).

Most Shopify themes include a skip link, but it's worth verifying that it works — some themes add the HTML but forget to make it focusable or link it to the correct target.

## Testing with a screen reader

The best way to understand screen reader navigation is to use one. On Mac, VoiceOver is built in (Cmd+F5 to toggle). On Windows, NVDA is free. On iOS, VoiceOver is in Settings → Accessibility. On Android, TalkBack is in Settings → Accessibility.

Turn on the screen reader, close your eyes, and try to navigate your store's menu. Can you hear the menu structure? Can you tell which items have submenus? Can you open a dropdown and hear its contents? If the experience is confusing with your eyes closed, it's confusing for your screen reader users all the time.

This article is part of the larger guide on [Accessible navigation: building for screen readers and keyboard users](/accessibility-navigation/).
