# 🎨 Popup CSS Customization Guide

**File to Edit:** `styles/popup.css` (Main Site) or `demo/css/popup.css` (Demo Pages)

## 🎯 Quick Reference

### Colors

#### Header Gradient
```css
.popup-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Change colors: #START_COLOR 0%, #END_COLOR 100% */
}
```

#### Shopify Button
```css
.platform-btn.shopify {
  background: linear-gradient(135deg, #96bf48 0%, #5e8e3e 100%);
  /* Shopify green gradient */
}
```

#### Other Platforms Button
```css
.platform-btn.other {
  background: #f8f9fa;  /* Background color */
  color: #1a202c;       /* Text color */
  border-color: #e2e8f0; /* Border color */
}
```

#### Link Colors
```css
.popup-footer a {
  color: #667eea;  /* Link color (matches gradient) */
}
```

---

### Overlay & Backdrop

```css
.popup-overlay {
  background: rgba(0, 0, 0, 0.2);  /* Overlay darkness (0-1) */
  backdrop-filter: blur(3px);       /* Blur strength (0-20px) */
}
```

**Darker overlay:**
```css
background: rgba(0, 0, 0, 0.5);  /* 50% black */
backdrop-filter: blur(8px);       /* More blur */
```

**Lighter overlay:**
```css
background: rgba(0, 0, 0, 0.1);  /* 10% black */
backdrop-filter: blur(1px);       /* Less blur */
```

---

### Sizing

#### Popup Width
```css
.popup-content {
  max-width: 480px;  /* Change width: 400px (narrow) to 600px (wide) */
}
```

#### Icon Sizes
```css
.popup-icon {
  width: 64px;   /* Main icon: 48px (small) to 80px (large) */
  height: 64px;
}

.platform-icon {
  width: 48px;   /* Button icons: 40px (small) to 56px (large) */
  height: 48px;
}
```

#### Padding & Spacing
```css
.popup-header {
  padding: 40px 32px 32px;  /* top right/left bottom */
}

.popup-body {
  padding: 32px;  /* All sides */
}

.platform-btn {
  padding: 20px 24px;  /* top/bottom left/right */
}
```

---

### Border Radius (Roundness)

```css
.popup-content {
  border-radius: 24px;  /* Popup corners: 16px-32px */
}

.popup-icon {
  border-radius: 20px;  /* Icon corners: 12px-24px */
}

.platform-btn {
  border-radius: 16px;  /* Button corners: 12px-20px */
}

.popup-close {
  border-radius: 50%;   /* Close button (keep at 50% for circle) */
}
```

---

### Shadows

#### Popup Shadow
```css
.popup-content {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  /* x-offset y-offset blur spread color */
}
```

**Stronger shadow:**
```css
box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.4);
```

**Softer shadow:**
```css
box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.15);
```

#### Button Shadows
```css
.platform-btn.shopify {
  box-shadow: 0 10px 25px rgba(150, 191, 72, 0.3);
}

.platform-btn.shopify:hover {
  box-shadow: 0 15px 35px rgba(150, 191, 72, 0.4);
}
```

---

### Animations

#### Speed
```css
.popup-overlay {
  animation: fadeIn 0.3s ease-out;  /* Fade duration: 0.2s-0.5s */
}

.popup-content {
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);  /* Slide duration */
}

.platform-btn {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);  /* Hover transition */
}
```

**Faster animations:**
```css
animation: fadeIn 0.2s ease-out;
animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
```

**Slower animations:**
```css
animation: fadeIn 0.5s ease-out;
animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
```

#### Hover Effects
```css
.platform-btn:hover {
  transform: translateY(-4px);  /* Lift distance: -2px to -8px */
}

.popup-close:hover {
  transform: rotate(90deg);  /* Rotation: 45deg, 90deg, 180deg */
}
```

---

### Typography

#### Font Sizes
```css
.popup-title {
  font-size: 28px;  /* Title: 24px-32px */
  font-weight: 700; /* Weight: 600 (semibold), 700 (bold), 800 (extrabold) */
}

.popup-subtitle {
  font-size: 16px;  /* Subtitle: 14px-18px */
}

.platform-text h3 {
  font-size: 18px;  /* Button title: 16px-20px */
  font-weight: 600;
}

.platform-text p {
  font-size: 14px;  /* Button description: 12px-16px */
}

.popup-footer p {
  font-size: 14px;  /* Footer text: 12px-16px */
}
```

---

### Mobile Responsiveness

All mobile styles are in the `@media (max-width: 640px)` section:

```css
@media (max-width: 640px) {
  .popup-content {
    margin: 20px;           /* Screen margin */
    border-radius: 20px;    /* Smaller corners for mobile */
  }
  
  .popup-title {
    font-size: 24px;        /* Smaller title */
  }
  
  .popup-body {
    padding: 24px;          /* Less padding */
  }
  
  .platform-btn {
    padding: 16px 20px;     /* Smaller buttons */
  }
}
```

**Change breakpoint:**
```css
@media (max-width: 768px) {  /* Target tablets instead of phones */
  /* ... mobile styles ... */
}
```

---

## 🎨 Common Customizations

### Make It Darker
```css
/* Overlay */
.popup-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}

/* Header */
.popup-header {
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
}
```

### Make It Bigger
```css
.popup-content {
  max-width: 600px;
}

.popup-title {
  font-size: 32px;
}

.platform-btn {
  padding: 24px 28px;
}
```

### Make It More Rounded
```css
.popup-content {
  border-radius: 32px;
}

.popup-icon {
  border-radius: 24px;
}

.platform-btn {
  border-radius: 20px;
}
```

### Faster Animations
```css
.popup-overlay {
  animation: fadeIn 0.2s ease-out;
}

.popup-content {
  animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.platform-btn {
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Different Button Colors
```css
/* Blue Shopify button */
.platform-btn.shopify {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
}

.platform-btn.shopify:hover {
  box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
}
```

---

## 💡 Tips

1. **Preview Changes:** Test on both desktop and mobile
2. **Color Consistency:** Match colors with your brand
3. **Animation Balance:** Keep transitions smooth (0.2s-0.4s)
4. **Contrast:** Ensure text is readable against backgrounds
5. **Accessibility:** Test keyboard navigation (Tab, ESC)

## 🔄 Reset to Default

If you make a mistake, the default values are clearly marked in the comments throughout `popup.css`.

---

**Need more help?** See `GET_STARTED_POPUP.md` for full documentation.

