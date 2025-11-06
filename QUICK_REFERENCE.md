# Design System Quick Reference

## Color Classes

### Primary (Tech Blue #0066FF)
```tsx
bg-primary text-primary-foreground border-primary
bg-primary-hover bg-primary-light bg-primary-dark
```

### Secondary (Navy Blue)
```tsx
bg-secondary text-secondary-foreground border-secondary
bg-secondary-hover bg-secondary-light bg-secondary-dark
```

### Accent (Cyan/Orange)
```tsx
bg-accent text-accent-foreground bg-accent-hover
bg-accent-orange text-accent-orange-foreground
```

### Status Colors
```tsx
bg-success text-success-foreground bg-success-light
bg-warning text-warning-foreground bg-warning-light
bg-error text-error-foreground bg-error-light
```

### Neutral
```tsx
bg-background text-foreground
bg-muted text-muted-foreground
border-border
```

## Typography Classes

```tsx
// Headings (automatically applied to h1-h6)
<h1>Display Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>

// Body text
<p>Body text</p>
<span className="text-small">Small text</span>
<span className="text-xs">Extra small</span>

// Display sizes
<h1 className="text-display-1">Large Display</h1>
```

## Component Usage

### Button
```tsx
<Button variant="default" size="lg">Click Me</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
```

### Input
```tsx
<Input type="email" placeholder="Email" />
<Input type="password" />
```

### Section
```tsx
<Section variant="default" size="default">
  Content
</Section>

<Section variant="muted" size="lg">
  Muted background
</Section>
```

### Service Card
```tsx
<ServiceCard
  icon={Brain}
  title="Service Name"
  description="Description"
  variant="primary"
/>
```

### Animated Section
```tsx
<AnimatedSection animation="slide-up" delay={100}>
  Content that animates on scroll
</AnimatedSection>
```

## Animation Classes

### Immediate Animations
```tsx
<div className="animate-fade-in">Fades in</div>
<div className="animate-slide-up">Slides up</div>
<div className="animate-slide-in-left">From left</div>
<div className="animate-slide-in-right">From right</div>
<div className="animate-scale-in">Scales in</div>
```

### Scroll Animations (with hook)
```tsx
"use client";
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";

function Component() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
      Content
    </div>
  );
}
```

## Spacing

```tsx
// Section padding
<Section size="sm">   // py-section-sm (3rem)
<Section size="default"> // py-section (5rem)
<Section size="lg">   // py-section-lg (7rem)
```

## Common Patterns

### Hero Section
```tsx
<Section variant="primary" size="lg" className="text-center">
  <h1>Title</h1>
  <p className="text-muted-foreground">Subtitle</p>
  <Button size="lg">CTA</Button>
</Section>
```

### Services Grid
```tsx
<AnimatedSection animation="slide-up">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {services.map(service => (
      <ServiceCard {...service} />
    ))}
  </div>
</AnimatedSection>
```

### Form
```tsx
<form className="space-y-4 max-w-md">
  <div>
    <label className="text-sm font-medium mb-2 block">Label</label>
    <Input type="text" placeholder="Enter text" />
  </div>
  <Button type="submit" className="w-full">Submit</Button>
</form>
```

