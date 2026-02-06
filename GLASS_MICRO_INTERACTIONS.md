# Glass Micro-Interactions System
## Luxurious, Smooth, Premium Feel

### Overview
Enhanced micro-interactions for all glass elements with smooth, GPU-accelerated animations that feel expensive and deliberate.

---

## 1. Glass Cards (`.card-apple.glass-card`)

### Hover Effects
- **Lift**: 4px upward (`translateY(-4px)`)
- **Blur Increase**: 12px → 14px on hover
- **Shadow**: Subtle shadow transition
- **Duration**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### CSS Implementation
```css
.glass-card {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              backdrop-filter 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-card:hover {
  transform: translateY(-4px) translateZ(0);
  backdrop-filter: blur(14px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

### Framer Motion Component
```tsx
import { GlassCard } from "@/components/ui/glass-interactions";

<GlassCard className="card-padding-apple">
  {/* Card content */}
</GlassCard>
```

### Tailwind Classes
```tsx
<div className="card-apple glass-card">
  {/* Automatic hover effects applied */}
</div>
```

---

## 2. Hero Glass (`.hero-glass`)

### Scroll-Based Blur Increase
- **Default**: `blur(16px)`
- **Scrolled**: `blur(20px)` (when scrollY > 50px)
- **Transition**: 0.4s smooth cubic-bezier

### React Implementation
```tsx
import { useScrollGlass } from "@/lib/hooks/use-scroll-glass";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const isScrolled = useScrollGlass(50);

  return (
    <div className={cn(
      "glass-container hero-glass",
      isScrolled && "scrolled"
    )}>
      {/* Hero content */}
    </div>
  );
}
```

### CSS
```css
.glass-container.hero-glass {
  backdrop-filter: blur(16px);
  transition: backdrop-filter 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-container.hero-glass.scrolled {
  backdrop-filter: blur(20px);
}
```

---

## 3. Navigation Glass (`.nav-apple` / `.glass-subtle`)

### Scroll-Based Transparency Fade
- **Default**: `rgba(255, 255, 255, 0.6)` / `blur(10px)`
- **Scrolled**: `rgba(255, 255, 255, 0.75)` / `blur(12px)`
- **Transition**: 0.3s smooth fade

### Implementation
```tsx
// Already implemented in EnhancedNavigation
// Uses isScrolled state to toggle "scrolled" class
<nav className={cn(
  "nav-apple",
  isScrolled && "scrolled"
)}>
```

### CSS
```css
.nav-apple {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  transition: background-color 0.3s, backdrop-filter 0.3s;
}

.nav-apple.scrolled {
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
}
```

---

## 4. Buttons & Links Inside Glass

### Button Interactions
- **Hover**: `scale(1.02)` + `opacity(0.95)` + `translateY(-1px)`
- **Active**: `scale(0.98)`
- **Duration**: 0.2s smooth

### CSS
```css
.glass-card button,
.glass-card a,
.glass-card [role="button"] {
  transition: transform 0.2s, opacity 0.2s;
}

.glass-card button:hover {
  transform: scale(1.02);
  opacity: 0.9;
}

.glass-card button:active {
  transform: scale(0.98);
}
```

### Framer Motion Components
```tsx
import { GlassButton, GlassLink } from "@/components/ui/glass-interactions";

// Button
<GlassButton className="btn-apple-primary">
  Click me
</GlassButton>

// Link
<GlassLink href="/path" className="text-primary">
  Learn more
</GlassLink>
```

### Tailwind Classes
```tsx
// Buttons automatically get interactions when inside .glass-card
<button className="btn-apple btn-apple-primary">
  {/* Hover effects applied automatically */}
</button>
```

---

## 5. Link Interactions Inside Glass

### Subtle Movement
- **Hover**: `translateX(2px)` + `opacity(0.8)`
- **Smooth**: 0.2s transition

### CSS
```css
.glass-card a:not(.btn-apple):hover {
  opacity: 0.8;
  transform: translateX(2px);
}
```

---

## Performance Optimizations

### GPU Acceleration
- All transforms use `translateZ(0)` for GPU acceleration
- `will-change` hints for smooth animations
- Only transform and opacity properties animated

### Smooth Transitions
- Cubic-bezier easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Consistent timing across all interactions
- Respects `prefers-reduced-motion`

---

## Usage Examples

### Card with Hover Effect
```tsx
<div className="card-apple glass-card card-padding-apple">
  <h3 className="text-title mb-4">Card Title</h3>
  <p className="text-body mb-6">Card content</p>
  <button className="btn-apple btn-apple-primary">
    Action
  </button>
</div>
```

### Hero with Scroll Blur
```tsx
import { useScrollGlass } from "@/lib/hooks/use-scroll-glass";

export function HeroSection() {
  const isScrolled = useScrollGlass(50);
  
  return (
    <div className={cn(
      "glass-container hero-glass",
      isScrolled && "scrolled"
    )}>
      {/* Content */}
    </div>
  );
}
```

### Navigation with Scroll Fade
```tsx
// Already implemented in EnhancedNavigation
// Automatically fades on scroll
```

---

## Animation Values Reference

| Element | Property | Default | Hover/Active | Duration |
|---------|----------|---------|--------------|----------|
| Glass Card | Transform | `translateY(0)` | `translateY(-4px)` | 0.3s |
| Glass Card | Blur | `12px` | `14px` | 0.3s |
| Hero Glass | Blur | `16px` | `20px` (scroll) | 0.4s |
| Nav Glass | Background | `0.6` | `0.75` (scroll) | 0.3s |
| Nav Glass | Blur | `10px` | `12px` (scroll) | 0.3s |
| Button | Scale | `1` | `1.02` (hover) / `0.98` (active) | 0.2s |
| Button | Opacity | `1` | `0.95` (hover) | 0.2s |
| Link | Transform | `translateX(0)` | `translateX(2px)` | 0.2s |
| Link | Opacity | `1` | `0.8` | 0.2s |

---

## Design Principles
✅ Smooth, luxurious feel
✅ GPU-accelerated for performance
✅ Consistent timing across all interactions
✅ Subtle, not distracting
✅ Respects user preferences (reduced motion)
✅ Feels expensive and deliberate
