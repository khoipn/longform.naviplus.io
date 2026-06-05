---
lang: en
ref: accessible-mobile-navigation
title: "Accessible mobile navigation: touch, voice, and assistive tech"
description: "Mobile-specific accessibility for tabbars, drawers, and touch menus — touch targets, VoiceOver gestures, and making mobile navigation work with assistive technology."
image: "/images/accessibility-navigation/mobile-accessibility-touch-targets.webp"
image_alt: "Accessible mobile navigation: touch, voice, and assistive tech"
parent_title: "Accessible navigation: building for screen readers and keyboard users"
parent_url: "/accessibility-navigation/"
seo_keywords:
  - accessible mobile navigation
  - mobile accessibility ecommerce
  - VoiceOver mobile navigation
  - touch target accessibility
date: 2026-05-02
---

Mobile accessibility overlaps with desktop accessibility but adds its own constraints. Touch replaces keyboard. VoiceOver and TalkBack replace NVDA and JAWS. Screen sizes are smaller. Gestures replace clicks. The principles are the same — semantic HTML, ARIA labels, focus management — but the implementation details differ.

## Touch targets

WCAG 2.2 recommends a minimum touch target size of 24×24 CSS pixels, but Apple's Human Interface Guidelines recommend 44×44 points and Android's Material Design recommends 48×48 dp. For navigation elements that are used frequently (tabbar buttons, menu items, links in dropdowns), larger is always better.

The spacing between touch targets matters as much as the size. Two buttons placed 4 pixels apart are easy to mis-tap, even if each button is 44 pixels wide. A spacing of 8–16 pixels between adjacent touch targets reduces errors.

For a tabbar with five buttons on a 375-pixel-wide phone, each button gets about 75 pixels of width — well above the minimum. But if the tabbar tries to squeeze in six buttons, each gets about 62 pixels, which is still acceptable but leaves less margin for error. Five buttons is the practical maximum for most screen widths.

## VoiceOver and TalkBack gestures

Screen readers on mobile use gestures instead of keyboard commands. On iOS with VoiceOver:
- **Swipe right:** Move to the next element
- **Swipe left:** Move to the previous element
- **Double-tap:** Activate the focused element
- **Three-finger swipe:** Scroll

On Android with TalkBack:
- **Swipe right/left:** Move between elements
- **Double-tap:** Activate
- **Two-finger swipe:** Scroll

These gestures navigate through elements in DOM order, similar to Tab on desktop. The same principles apply: logical DOM order, meaningful labels, proper ARIA states. If the tabbar buttons are in a logical order in the HTML and have `aria-label` attributes, VoiceOver announces them correctly as the user swipes through.

## Slide menus and focus management

When a slide menu opens on mobile, focus should move into the menu so the screen reader user knows the menu is open and can navigate its contents. When the menu closes, focus should return to the element that opened it.

On mobile, this is especially important because VoiceOver and TalkBack users can't see the visual change. If the slide menu opens but focus stays on the trigger button, the user doesn't know the menu is open. They keep swiping through page content behind the menu, confused about why they're not finding menu items.

The close action should be accessible too. A close button with `aria-label="Close menu"` gives the user an explicit way to dismiss the menu. Swiping from the edge (a common gesture for closing slide menus) doesn't work reliably with VoiceOver because VoiceOver intercepts swipe gestures for its own navigation.

## Tabbar accessibility

A bottom tabbar built with proper HTML is inherently accessible:

```html
<nav aria-label="Main navigation">
  <a href="/" aria-current="page" aria-label="Home">
    <svg>...</svg>
    <span>Home</span>
  </a>
  <button aria-label="Categories" aria-expanded="false">
    <svg>...</svg>
    <span>Categories</span>
  </button>
  <a href="/cart/" aria-label="Cart, 3 items">
    <svg>...</svg>
    <span>Cart</span>
  </a>
</nav>
```

Each button has a visible label and an `aria-label` (the `aria-label` includes the item count for the cart). The active tab has `aria-current="page"`. The Categories button has `aria-expanded` to indicate whether the menu is open.

VoiceOver announces: "Main navigation. Home, current page, link. Categories, collapsed, button. Cart, 3 items, link." The user understands the tabbar structure and can navigate it by swiping.

## Voice control

Voice control software (Voice Control on iOS, Voice Access on Android) lets users activate elements by speaking their names. "Tap Home." "Tap Cart." "Tap Categories." This only works if the elements have visible text labels or accessible names that match what the user expects to say.

Icon-only navigation without labels is problematic for voice control. The user sees a magnifying glass icon but doesn't know what to say to activate it. "Tap search"? "Tap magnifying glass"? "Tap icon"? Visible text labels on tabbar buttons solve this — the user sees "Search" and says "Tap Search."

This is another reason visible text labels on tabbar buttons are important. They serve three purposes: helping sighted users identify the button, providing text for screen readers to announce, and giving voice control users a word to speak.

## Testing on mobile

Testing mobile accessibility requires a real device with a real screen reader:

1. **iOS:** Settings → Accessibility → VoiceOver → turn on. Navigate your store by swiping right through elements.
2. **Android:** Settings → Accessibility → TalkBack → turn on. Navigate by swiping.
3. Try to complete a full shopping flow: browse a category, open a product, add to cart, go to checkout.

Simulator-based testing (Xcode simulator, Android emulator) catches some issues but misses touch-specific problems. Real-device testing with real screen readers is the gold standard.

This article is part of the larger guide on [Accessible navigation: building for screen readers and keyboard users](/accessibility-navigation/).
