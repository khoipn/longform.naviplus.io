---
lang: en
ref: exit-intent-checkout-recovery
title: "Exit-intent and navigation-based recovery"
description: "How to catch shoppers who navigate away from checkout — exit-intent overlays, back-button interception, and email recovery triggered by navigation signals."
parent_title: "Why shoppers abandon cart at checkout (and how navigation plays a role)"
parent_url: "/checkout-navigation-mistakes/"
seo_keywords:
  - exit intent checkout
  - cart abandonment recovery
  - navigation-based recovery
  - checkout exit popup
date: 2026-04-22
---

Even with a clean checkout flow and minimal navigation distractions, some shoppers will leave before completing their purchase. The question is whether the store has any mechanism to catch them at the exit and give them a reason to stay — or, failing that, a path back later.

Exit-intent detection and navigation-based recovery are two patterns that address this. They work at different points in the abandonment sequence: exit-intent tries to prevent the exit, while email or notification recovery tries to bring the shopper back after they've left.

## How exit-intent works

Exit-intent detection monitors the shopper's behavior for signals that they are about to leave. On desktop, the most common signal is cursor movement toward the browser's address bar, back button, or tab close area. When the system detects this movement, it triggers a lightweight overlay — a small popup that appears before the shopper clicks away.

The overlay typically says something like: "Wait — your items are still in your cart. Complete your order now for free shipping." Or it might offer a discount: "Leave now? Here's 10% off to finish your order." The key is that it's a reminder, not a blocker. The shopper can close the overlay and leave if they want to.

Exit-intent works because many checkout abandonments are not deliberate decisions. The shopper gets distracted — a notification pops up, they remember something they need to check, they instinctively reach for the back button. The overlay interrupts that reflex just long enough for the shopper to reconsider.

## Desktop versus mobile exit-intent

On desktop, exit-intent is relatively reliable because cursor tracking provides clear signals. If the cursor moves rapidly upward and to the left (toward the back button), the shopper is probably leaving. The timing window is narrow, and the popup can appear before the click.

On mobile, exit-intent is harder. There's no cursor to track. The signals are less clear: the shopper might swipe from the edge of the screen (browser back gesture), might tap the phone's back button, or might simply switch to another app. Some exit-intent tools for mobile use scroll behavior as a proxy — rapid upward scrolling toward the header can signal intent to leave — but this is less reliable than desktop cursor tracking.

Another mobile approach is to trigger the overlay when the shopper has been idle for a set period on the checkout page. If someone has been on the payment screen for 30 seconds without interacting, they might be hesitating. A gentle nudge — "Need help? Chat with us" — can re-engage them without feeling intrusive.

## The back button interception

A more aggressive pattern is back-button interception: when the shopper taps the browser's back button during checkout, instead of navigating away, a prompt appears asking "Are you sure you want to leave? Your order is not complete."

This pattern exists in native apps (the "discard changes?" prompt) and in some web checkout flows. It works by pushing an extra entry to the browser's history stack so that the first back-button press triggers a JavaScript event instead of an actual navigation.

The benefit is catching deliberate exits, not just reflexive ones. The risk is that it feels manipulative. Shoppers expect the back button to go back, and intercepting it violates that expectation. Used once, it can be helpful. Used repeatedly (the shopper taps back three times and gets three prompts), it is infuriating.

The consensus in UX research is to use back-button interception sparingly — at most once per checkout session, and only when the shopper has entered some information (like their email address). If the shopper hasn't started filling in the form, intercepting the back button feels like trapping them on a page they haven't engaged with.

## Email recovery after abandonment

When prevention fails and the shopper leaves, email recovery can bring them back. If the shopper entered their email address at any point during checkout (even if they didn't complete the order), the store can send a follow-up email: "You left some items in your cart. Here's what you had."

The email typically includes:

- Thumbnails and names of the items in the cart
- A direct link back to the checkout, pre-filled with their cart
- An optional incentive (free shipping, a small discount)
- A clear call to action ("Complete your order")

Timing matters. The first email typically goes out 1–3 hours after abandonment — soon enough that the shopper remembers what they were looking at, but not so soon that it feels like surveillance. A second email can follow 24 hours later if the shopper hasn't returned.

This is not strictly a navigation pattern, but it is navigation-adjacent. The email provides a shortcut back to checkout that bypasses the entire browsing journey. The shopper doesn't have to find the products again, add them to the cart again, and navigate to checkout again. One click from the email drops them right where they left off.

## Cart save as a soft recovery

For shoppers who haven't entered their email — which is most of them at the early checkout stages — there's a softer recovery pattern: cart persistence. If the cart is saved in a cookie or local storage, the next time the shopper visits the store (even days later), their cart still has the items they added.

This is passive recovery. The store doesn't reach out to the shopper; it just makes sure that if they come back, the friction of re-adding items is eliminated. Combined with a persistent cart icon showing the item count, the returning shopper immediately sees "You have 3 items in your cart" and can jump straight to checkout.

Cart persistence is not a replacement for active recovery (email, exit-intent), but it covers the cases where the store has no way to contact the shopper. It's a safety net that requires no effort from the shopper — they just come back and their cart is waiting.

## Balancing recovery with respect

All recovery mechanisms walk a line between helpful and pushy. Exit-intent overlays can feel like desperation if they pop up on every page. Back-button interception can feel like a trap. Abandonment emails can feel like stalking if sent too frequently or with too-aggressive language.

The guiding principle: one gentle prompt at the point of exit, one follow-up email if you have the address, and cart persistence as a silent fallback. That gives the shopper three chances to return without any of them feeling invasive. More than that, and the store risks damaging the relationship with the very customer it's trying to recover.

This article is part of the larger guide on [Why shoppers abandon cart at checkout (and how navigation plays a role)](/checkout-navigation-mistakes/).
