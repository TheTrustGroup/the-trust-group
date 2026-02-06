# Dark/Light Mode Glass System
## Optimized for Harmony & Premium Feel

### Opacity Ranges
- **Light Mode**: `rgba(255, 255, 255, 0.65-0.8)`
- **Dark Mode**: `rgba(15, 23, 42, 0.6-0.8)`

### Blur Hierarchy (Consistent Across Modes)

| Element | Blur | Light Opacity | Dark Opacity |
|---------|------|---------------|--------------|
| Hero Glass | 16px → 20px (scroll) | 0.7 | 0.7 |
| Container | 14px | 0.65 | 0.65 |
| Card | 12px → 14px (hover) | 0.65 | 0.65 |
| Navigation | 10px → 12px (scroll) | 0.65 → 0.8 | 0.6 → 0.8 |

---

## Light Mode Values

### Hero Glass
```css
.glass-container.hero-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
}

.glass-container.hero-glass.scrolled {
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}
```

### Container
```css
.glass-container {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
}
```

### Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
}

.glass-card:hover {
  backdrop-filter: blur(14px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
```

### Navigation
```css
.glass-subtle,
.nav-apple {
  background: rgba(255, 255, 255, 0.65);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
}

.glass-subtle.scrolled,
.nav-apple.scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}
```

---

## Dark Mode Values

### Hero Glass
```css
.dark .glass-container.hero-glass {
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.dark .glass-container.hero-glass.scrolled {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
```

### Container
```css
.dark .glass-container {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
```

### Card
```css
.dark .glass-card {
  background: rgba(15, 23, 42, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.dark .glass-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}
```

### Navigation
```css
.dark .glass-subtle,
.dark .nav-apple {
  background: rgba(15, 23, 42, 0.6);
  border-bottom-color: rgba(255, 255, 255, 0.06);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.dark .glass-subtle.scrolled,
.dark .nav-apple.scrolled {
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
```

---

## Harmonized Elements

### Borders
```css
/* Light */
border-color: rgba(0, 0, 0, 0.05);

/* Dark */
border-color: rgba(255, 255, 255, 0.06);
```

### Shadows
```css
/* Light - Subtle */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);

/* Dark - Slightly stronger for visibility */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
```

### Typography
- **Light Mode**: High contrast text (`hsl(var(--foreground))`)
- **Dark Mode**: Softened contrast (`hsl(var(--foreground))` at 92%)
- Consistent line-height and letter-spacing across modes

---

## Tailwind Classes

### Glass Elements
```tsx
// Hero
<div className="glass-container hero-glass">
  {/* Content */}
</div>

// Container
<div className="glass-container">
  {/* Content */}
</div>

// Card
<div className="card-apple glass-card">
  {/* Content */}
</div>

// Navigation
<nav className="nav-apple">
  {/* Navigation */}
</nav>
```

### Dark Mode Support
```tsx
// Automatically handled by .dark class
// No additional classes needed
<div className="glass-card">
  {/* Works in both light and dark */}
</div>
```

---

## Usage Examples

### Hero with Scroll Blur
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

### Card Grid
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-apple">
  {items.map(item => (
    <div key={item.id} className="card-apple glass-card card-padding-apple">
      {/* Card content */}
    </div>
  ))}
</div>
```

---

## Design Principles
✅ Consistent opacity ranges (0.65-0.8)
✅ Blur hierarchy maintained across modes
✅ Harmonized borders (0.05 light / 0.06 dark)
✅ Balanced shadows for depth
✅ Typography contrast optimized for both modes
✅ Apple-style minimalism preserved
✅ Premium, luxurious feel
