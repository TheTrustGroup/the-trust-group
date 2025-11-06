# Animation System Documentation

The Trust Group website uses Framer Motion for smooth, performant animations throughout the site.

## Installation

Framer Motion is already installed:
```bash
npm install framer-motion
```

## Animation Components

### ScrollAnimation
Fade-in and slide-up animations triggered when elements scroll into view.

```tsx
import { ScrollAnimation } from "@/components/animations";

<ScrollAnimation variant="fadeInUp" delay={0.2}>
  <div>Content that animates on scroll</div>
</ScrollAnimation>
```

**Variants:**
- `fadeInUp` - Fades in and slides up (default)
- `fadeIn` - Simple fade in
- `slideInLeft` - Slides in from left
- `slideInRight` - Slides in from right
- `scaleIn` - Scales in

### StaggerGrid & StaggerItem
Staggered animations for grids and lists.

```tsx
import { StaggerGrid, StaggerItem } from "@/components/animations";

<StaggerGrid className="grid grid-cols-3 gap-4" staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <Card>{item.content}</Card>
    </StaggerItem>
  ))}
</StaggerGrid>
```

### ParallaxSection
Parallax scrolling effects (disabled for reduced motion).

```tsx
import { ParallaxSection } from "@/components/animations";

<ParallaxSection speed={0.5}>
  <div>Content with parallax effect</div>
</ParallaxSection>
```

### PageTransition
Smooth page transitions between routes.

Already integrated in `app/layout.tsx` - no additional setup needed.

## Performance

- **60fps animations**: All animations use GPU-accelerated properties
- **Reduced motion support**: Automatically respects `prefers-reduced-motion`
- **Intersection Observer**: Efficient scroll detection
- **Once animations**: Most animations trigger once when scrolled into view

## Accessibility

The animation system automatically:
- Detects `prefers-reduced-motion` preference
- Disables animations for users who prefer reduced motion
- Uses instant transitions instead of animated ones

## Usage Examples

### Section Header
```tsx
<ScrollAnimation variant="fadeInUp">
  <h2>Section Title</h2>
</ScrollAnimation>
```

### Card Grid
```tsx
<StaggerGrid className="grid grid-cols-3 gap-6">
  {cards.map((card) => (
    <StaggerItem key={card.id}>
      <Card>{card.content}</Card>
    </StaggerItem>
  ))}
</StaggerGrid>
```

### Hero Section
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Hero content
</motion.div>
```

## Customization

Animation variants can be customized in `lib/animations.ts`:
- Duration
- Easing functions
- Delays
- Transform values

## Best Practices

1. Use `ScrollAnimation` for content that should animate on scroll
2. Use `StaggerGrid` for lists and grids
3. Keep animation durations between 0.3-0.8 seconds
4. Use delays sparingly to avoid overwhelming users
5. Test with reduced motion enabled

