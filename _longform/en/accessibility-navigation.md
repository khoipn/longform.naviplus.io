---
lang: en
ref: accessibility-navigation
order: 18
title: "Accessible navigation: building for screen readers and keyboard users"
description: "ARIA labels, keyboard navigation, focus management, and accessible menu patterns — making ecommerce navigation work for assistive technology users."
topic_tag: "Accessibility"
category: "accessibility-seo"
hero_color: "#6b5a8e"
read_time: 7
seo_keywords:
  - accessible navigation
  - screen reader navigation
  - keyboard navigation ecommerce
  - ARIA labels menu
date: 2026-05-02
child_links:
  - title: "Screen reader navigation: what assistive technology users hear"
    url: "/topic/screen-reader-navigation/"
    desc: "How screen readers announce menus, landmarks, and navigation links."
  - title: "Keyboard navigation: tab order and focus management"
    url: "/topic/keyboard-navigation-ecommerce/"
    desc: "Tab order, focus indicators, skip links, and keyboard-only shopping."
  - title: "ARIA labels and landmarks for ecommerce menus"
    url: "/topic/aria-labels-ecommerce-navigation/"
    desc: "Proper ARIA roles, labels, and states for navigation regions."
  - title: "Accessible mobile navigation: touch, voice, and assistive tech"
    url: "/topic/accessible-mobile-navigation/"
    desc: "Mobile-specific accessibility for tabbars, drawers, and touch menus."
---

Accessible navigation means navigation that works for everyone — including people using screen readers, keyboard-only navigation, voice control, or other assistive technologies. It's not a separate version of the menu. It's the same navigation, built in a way that announces correctly to screen readers, can be operated entirely with a keyboard, and makes sense to someone who can't see the visual layout.

Roughly 15% of the global population has some form of disability. Many of these people shop online, and they face significant barriers when ecommerce sites are built without accessibility in mind. A mega menu that requires hover doesn't work for keyboard users. A menu with no ARIA labels confuses screen reader users. A slide menu that traps keyboard focus prevents navigation entirely.

Building accessible navigation isn't about compliance or checking a box. It's about building navigation that actually works for the full range of human abilities and assistive technologies.

<div class="lf-key">
  <span class="lf-key-title">Quick read</span>
  <ul>
    <li>Accessible navigation works for screen readers, keyboard users, voice control, and other assistive technologies.</li>
    <li>ARIA labels, semantic HTML, and proper focus management make menus understandable to assistive tech.</li>
    <li>Keyboard navigation requires visible focus indicators, logical tab order, and escape-key dismissal.</li>
  </ul>
</div>

## Screen readers: what assistive technology users hear

A screen reader user navigates a website by listening to the content. The screen reader announces each element: "heading level 1, navigation region, button, link." The user hears the structure of the page, the labels of interactive elements, and the relationships between them.

For navigation, this means the menu needs semantic structure. A list of links should be a `<nav>` element containing a `<ul>` and `<li>` items. Each link should have meaningful text — not "Click here" but "Women's Clothing." Dropdowns should announce their expanded/collapsed state. The currently active page should be indicated with `aria-current="page"`.

When these basics are in place, the screen reader user hears: "Navigation region, list, 5 items. Women's Clothing, link. Men's Shoes, link. New Arrivals, link..." They understand the menu structure and can navigate it efficiently.

When these basics are missing, the screen reader user hears a jumble of unlabeled buttons, unannounced dropdowns, and links with no context. They can't tell what's a menu and what's not. They can't tell which items have submenus. Navigating becomes guesswork.

<p class="lf-readmore"><span class="lf-readmore-kicker">Deep-dive</span><a href="/topic/screen-reader-navigation/">Read the full guide → Screen reader navigation: what assistive technology users hear</a></p>
<figure>
  <img src="/images/accessibility-navigation/screen-reader-navigation-flow.webp" alt="Screen reader user navigating menu hearing navigation region list items and link labels announced" title="Screen reader navigation experience">
  <figcaption>A screen reader announces navigation structure, link labels, and states — making the menu navigable without seeing it.</figcaption>
</figure>

## Keyboard navigation: tab order and focus

A keyboard user navigates a website using the Tab key (to move forward), Shift+Tab (to move backward), Enter (to activate), and Escape (to dismiss). They can't use a mouse, so every interactive element must be reachable with Tab and operable with Enter or Space.

For navigation, this means:

- All menu items must be in the tab order (not hidden with `display: none` or `visibility: hidden` without removing `tabindex`)
- The tab order must be logical (top to bottom, left to right)
- Focus must be visible (a clear outline or highlight showing which element is focused)
- Dropdowns must open with Enter/Space, not just hover
- Dropdowns must close with Escape
- Focus must not get trapped inside a menu (the user can always Tab out)

A mega menu that only opens on hover is unusable for keyboard users. A slide menu that traps focus (preventing the user from tabbing out) is unusable. A menu with invisible focus indicators leaves the keyboard user guessing where they are.

<p class="lf-readmore"><span class="lf-readmore-kicker">Deep-dive</span><a href="/topic/keyboard-navigation-ecommerce/">Read the full guide → Keyboard navigation: tab order and focus management</a></p>
<figure>
  <img src="/images/accessibility-navigation/keyboard-navigation-focus.webp" alt="Keyboard user navigating menu with visible focus indicators on each link showing tab order progression" title="Keyboard navigation with focus indicators">
  <figcaption>Visible focus indicators show keyboard users where they are in the navigation — without them, keyboard navigation is guesswork.</figcaption>
</figure>

## ARIA labels and landmarks

ARIA (Accessible Rich Internet Applications) provides attributes that help assistive technologies understand dynamic content and complex widgets. For navigation:

**`<nav>` landmark:** The `<nav>` element marks a navigation region. Screen readers announce it as "navigation" or "navigation region," helping users find and skip to the menu.

**`aria-label` on `<nav>`:** If there are multiple navigation regions (header menu, footer menu, sidebar), each should have a unique `aria-label`. "Main navigation," "Footer navigation," "Related products." This lets the screen reader user choose which navigation to use.

**`aria-expanded` on dropdowns:** A button or link that opens a dropdown should have `aria-expanded="false"` when closed and `aria-expanded="true"` when open. The screen reader announces "collapsed" or "expanded," so the user knows the state.

**`aria-current="page"` on the active link:** The link to the current page should have `aria-current="page"`. The screen reader announces "current page," helping the user understand where they are in the site structure.

**`aria-haspopup="true"` for dropdowns:** Indicates that an element has a popup menu or submenu. Combined with `aria-expanded`, this tells the user what to expect when activating the element.

<p class="lf-readmore"><span class="lf-readmore-kicker">Deep-dive</span><a href="/topic/aria-labels-ecommerce-navigation/">Read the full guide → ARIA labels and landmarks for ecommerce menus</a></p>
<figure>
  <img src="/images/accessibility-navigation/aria-labels-navigation.webp" alt="Navigation code showing nav landmark aria-label aria-expanded and aria-current attributes" title="ARIA labels for navigation">
  <figcaption>ARIA attributes tell assistive technology what each navigation element is, what it does, and what state it's in.</figcaption>
</figure>

## Mobile accessibility: touch and assistive tech

Mobile accessibility overlaps with but differs from desktop. Touch targets need to be large enough (44×44 pixels minimum). Focus management needs to account for virtual keyboards. Screen reader gestures on mobile are different from keyboard commands on desktop.

For mobile navigation:

- Touch targets (buttons, links) should be at least 44 pixels tall with adequate spacing
- Swipe gestures should have keyboard equivalents (if swiping opens a menu, a button should too)
- Dismissing menus should work with a close button, not just a swipe or tap-outside
- Focus should return to the trigger when a menu is dismissed

A bottom tabbar (via Navi+) is inherently accessible if built correctly: large touch targets, clear labels, semantic HTML. A slide menu becomes accessible when it has proper focus management, ARIA labels, and keyboard dismissal.

<p class="lf-readmore"><span class="lf-readmore-kicker">Deep-dive</span><a href="/topic/accessible-mobile-navigation/">Read the full guide → Accessible mobile navigation: touch, voice, and assistive tech</a></p>
<figure>
  <img src="/images/accessibility-navigation/mobile-accessibility-touch-targets.webp" alt="Mobile navigation showing 44 pixel minimum touch targets with adequate spacing between buttons" title="Accessible mobile touch targets">
  <figcaption>Mobile accessibility requires large touch targets, clear labels, and navigation that works with assistive technology.</figcaption>
</figure>

## Testing for accessibility

Automated tools (Lighthouse, axe, WAVE) catch some accessibility issues — missing alt text, low contrast, missing ARIA labels. But they can't catch everything. Many navigation issues only reveal themselves through manual testing:

- Navigate the entire site using only the keyboard (no mouse)
- Turn on a screen reader (VoiceOver on Mac/iOS, TalkBack on Android, NVDA on Windows) and try to navigate
- Check that focus indicators are visible on all interactive elements
- Verify that dropdowns announce their state and can be opened/closed with keyboard
- Test that focus doesn't get trapped in modal menus

Real-world accessibility requires real-world testing. If you can't complete a purchase using only the keyboard, your keyboard users can't either. If the screen reader doesn't announce the menu structure, your screen reader users are navigating blind.

## Where to start

<p class="lf-note"><span class="lf-note-title">Quick test</span>Unplug your mouse. Try to navigate your store and complete a purchase using only the keyboard. If you can't, your keyboard users can't either.</p>

Do the keyboard test. Navigate your store without a mouse. Tab through the menu. Open a category with Enter. Navigate to a product. Add it to the cart. Go through checkout. If any step is impossible or confusing without a mouse, that's a barrier for keyboard users and likely for screen reader users too.

Then check the basics:

- Does your menu use semantic HTML (`<nav>`, `<ul>`, `<li>`)?
- Do dropdown triggers have `aria-expanded` that updates when opened/closed?
- Is there a visible focus indicator on links and buttons?
- Can dropdowns be opened with Enter and closed with Escape?

These basics cover a large portion of navigation accessibility. More advanced patterns (complex mega menus, slide-out drawers with nested subcategories) require more detailed ARIA and focus management, but starting with semantic HTML and keyboard operability takes you most of the way there.
