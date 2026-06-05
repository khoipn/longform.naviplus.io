---
lang: en
ref: aria-labels-ecommerce-navigation
title: "ARIA labels and landmarks for ecommerce menus"
description: "Proper ARIA roles, labels, and states for navigation regions — making ecommerce menus understandable to screen readers and assistive technology."
image: "/images/accessibility-navigation/aria-labels-navigation.webp"
image_alt: "ARIA labels and landmarks for ecommerce menus"
parent_title: "Accessible navigation: building for screen readers and keyboard users"
parent_url: "/accessibility-navigation/"
seo_keywords:
  - ARIA labels navigation
  - ARIA landmarks ecommerce
  - aria-expanded menu
  - accessible menu markup
date: 2026-05-02
---

ARIA (Accessible Rich Internet Applications) is a set of HTML attributes that add meaning to elements for assistive technologies. When native HTML isn't enough to describe what an element does or what state it's in, ARIA fills the gap.

For ecommerce navigation, ARIA serves three purposes: identifying navigation regions, describing the state of interactive elements (open/closed, current/not current), and labeling elements that have no visible text.

## Navigation landmarks

The `<nav>` element is a landmark — screen readers recognize it as a navigation section and let users jump to it directly. If a page has one navigation region, a simple `<nav>` is enough. The screen reader announces "navigation region."

If a page has multiple navigation regions (header menu, breadcrumbs, footer links, sidebar filters), each needs a unique `aria-label`:

```html
<nav aria-label="Main navigation">...</nav>
<nav aria-label="Breadcrumb">...</nav>
<nav aria-label="Footer links">...</nav>
```

The screen reader announces "Main navigation, navigation region" — the user knows which menu they've reached and can decide whether to explore it or skip to the next landmark.

## aria-expanded for dropdowns

Any element that opens a submenu or dropdown should have `aria-expanded` that reflects its current state:

```html
<button aria-expanded="false" aria-haspopup="true">Women's Clothing</button>
```

When the dropdown opens, JavaScript updates the attribute:

```html
<button aria-expanded="true" aria-haspopup="true">Women's Clothing</button>
```

The screen reader announces "Women's Clothing, expanded, button" — the user knows the submenu is open. Without `aria-expanded`, the user can't tell whether the dropdown is open or closed, leading to confusion and repeated clicks.

## aria-current for the active page

The menu item that corresponds to the current page should have `aria-current="page"`:

```html
<a href="/women/dresses/" aria-current="page">Dresses</a>
```

The screen reader announces "Dresses, current page, link" — the user knows they're on the Dresses page. This is the accessible equivalent of the visual "active" style (highlighted, underlined, bold) that sighted users see.

## aria-label for icon-only elements

Navigation often includes icon-only elements: a magnifying glass for search, a shopping bag for cart, three lines for menu. These icons have no visible text, so screen readers have nothing to announce.

Each icon-only element needs an `aria-label`:

```html
<button aria-label="Open search"><svg>...</svg></button>
<a href="/cart/" aria-label="Cart, 3 items"><svg>...</svg></a>
<button aria-label="Open menu"><svg>...</svg></button>
```

Without `aria-label`, the screen reader announces "button" or "link" — no context about what the element does. The user has to activate it and see what happens, which is the accessible equivalent of clicking random buttons.

For the cart icon, include the item count in the label: "Cart, 3 items" instead of just "Cart." Sighted users see the badge; screen reader users need the same information in the label.

## role attributes for custom elements

When semantic HTML isn't used (custom `<div>` or `<span>` elements styled to look like navigation), ARIA roles can compensate:

```html
<div role="navigation" aria-label="Main navigation">
  <div role="list">
    <div role="listitem"><a href="/women/">Women</a></div>
  </div>
</div>
```

But this is a workaround, not a best practice. Semantic HTML (`<nav>`, `<ul>`, `<li>`, `<a>`, `<button>`) is always preferred because it carries built-in accessibility. ARIA roles should supplement semantic HTML when needed, not replace it.

## Common ARIA mistakes in navigation

**Adding roles that duplicate semantic HTML.** `<nav role="navigation">` is redundant — `<nav>` already has the navigation role. No harm, but unnecessary.

**Forgetting to update aria-expanded.** Setting `aria-expanded="false"` in the HTML but never updating it with JavaScript when the dropdown opens. The screen reader always says "collapsed" even when the menu is open.

**Using aria-label when there's visible text.** If a button already has text ("Women's Clothing"), adding `aria-label="Navigation to women's section"` overrides the visible text. Use `aria-label` only for elements without visible text.

**Missing aria-label on multiple `<nav>` elements.** Two `<nav>` elements without labels are both announced as "navigation region" — the user can't tell them apart.

This article is part of the larger guide on [Accessible navigation: building for screen readers and keyboard users](/accessibility-navigation/).
