# The Trust Group Design System

A comprehensive design system for The Trust Group website, built with Tailwind CSS and React components.

## Color Palette

### Primary Colors
- **Primary Blue**: `#0066FF` (hsl(214, 100%, 50%))
  - Used for: Primary actions, links, brand elements
  - Variants: `primary`, `primary-hover`, `primary-light`, `primary-dark`
  - Usage: `bg-primary`, `text-primary`, `border-primary`

### Secondary Colors
- **Navy Blue**: Trust-inducing dark blue (hsl(220, 50%, 25%))
  - Used for: Secondary actions, supporting elements
  - Variants: `secondary`, `secondary-hover`, `secondary-light`, `secondary-dark`
  - Usage: `bg-secondary`, `text-secondary`

### Accent Colors
- **Cyan**: Innovation accent (hsl(195, 100%, 50%))
  - Used for: Highlights, special features
  - Variants: `accent`, `accent-hover`
  - Usage: `bg-accent`, `text-accent`

- **Orange**: Innovation accent (hsl(25, 95%, 53%))
  - Used for: Call-to-action highlights
  - Variants: `accent-orange`
  - Usage: `bg-accent-orange`

### Status Colors
- **Success**: Green (hsl(142, 71%, 45%))
  - Usage: `bg-success`, `text-success`, `bg-success-light`

- **Warning**: Orange/Yellow (hsl(38, 92%, 50%))
  - Usage: `bg-warning`, `text-warning`, `bg-warning-light`

- **Error**: Red (hsl(0, 84%, 60%))
  - Usage: `bg-error`, `text-error`, `bg-error-light`

### Neutral Colors
- **Background**: White/Light gray
- **Foreground**: Dark gray for text
- **Muted**: Light gray for subtle elements
- **Border**: Light gray borders

## Typography

### Font Family
- **Primary**: Inter (sans-serif)
- Applied globally via `font-sans` class

### Type Scale

#### Headings
- **H1**: `text-4xl md:text-5xl lg:text-6xl` - Display headings
- **H2**: `text-3xl md:text-4xl lg:text-5xl` - Section headings
- **H3**: `text-2xl md:text-3xl` - Subsection headings
- **H4**: `text-xl md:text-2xl` - Card titles
- **H5**: `text-lg md:text-xl` - Small headings
- **H6**: `text-base md:text-lg` - Smallest headings

#### Body Text
- **Body**: `text-base` (16px) - Default paragraph text
- **Small**: `text-small` (14px) - Secondary text
- **Extra Small**: `text-xs` (12px) - Captions, labels

#### Display Sizes
- `text-display-1` - 4.5rem (72px)
- `text-display-2` - 3.75rem (60px)
- `text-display-3` - 3rem (48px)

## Components

### Button

Multiple variants and sizes available:

```tsx
import { Button } from "@/components/ui/button";

// Variants
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="destructive">Delete</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="accent">Accent</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Icon /></Button>
```

### Input

Form input component:

```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Enter text" />
<Input type="email" placeholder="Email address" />
<Input type="password" />
```

### Card

Card container component:

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content
  </CardContent>
</Card>
```

### Service Card

Specialized card for services:

```tsx
import { ServiceCard } from "@/components/ui/service-card";
import { Brain } from "lucide-react";

<ServiceCard
  icon={Brain}
  title="AI Solutions"
  description="Description text"
  variant="default" // or "primary" or "accent"
/>
```

### Section

Container component for page sections:

```tsx
import { Section } from "@/components/ui/section";

<Section variant="default" size="default" container>
  Content here
</Section>

// Variants: default, muted, primary, secondary
// Sizes: sm, default, lg
// container: boolean (adds container wrapper)
```

### Animated Section

Section with scroll-triggered animations:

```tsx
import { AnimatedSection } from "@/components/ui/animated-section";

<AnimatedSection
  animation="fade-in" // or "slide-up", "slide-in-left", "slide-in-right", "scale-in"
  delay={100}
  threshold={0.1}
>
  Content here
</AnimatedSection>
```

## Animation Utilities

### CSS Classes

Available animation classes:

- `animate-fade-in` - Fade in animation
- `animate-slide-up` - Slide up animation
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right
- `animate-scale-in` - Scale in animation

### Scroll-Triggered Animations

Classes that work with scroll:

- `scroll-fade-in` - Fades in on scroll
- `scroll-slide-up` - Slides up on scroll

Use with the `useScrollAnimation` hook:

```tsx
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";

function MyComponent() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div ref={ref} className={`scroll-fade-in ${isVisible ? 'visible' : ''}`}>
      Content
    </div>
  );
}
```

## Spacing System

### Section Spacing
- `py-section-sm` - 3rem (48px)
- `py-section` - 5rem (80px)
- `py-section-lg` - 7rem (112px)

### Container
- Standard container: `container mx-auto px-4 sm:px-6 lg:px-8`

## Usage Examples

### Complete Page Section

```tsx
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";

<Section variant="muted" size="default">
  <div className="text-center mb-12">
    <h2>Our Services</h2>
    <p className="text-muted-foreground">Description</p>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <ServiceCard
      icon={Brain}
      title="AI Solutions"
      description="Description"
    />
  </div>
  <div className="text-center mt-8">
    <Button size="lg">Get Started</Button>
  </div>
</Section>
```

### Form Example

```tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

<form className="space-y-4 max-w-md">
  <div>
    <label className="text-sm font-medium mb-2 block">Email</label>
    <Input type="email" placeholder="your@email.com" />
  </div>
  <div>
    <label className="text-sm font-medium mb-2 block">Message</label>
    <Input type="text" placeholder="Your message" />
  </div>
  <Button type="submit" size="lg" className="w-full">
    Submit
  </Button>
</form>
```

## Best Practices

1. **Consistency**: Always use design system components instead of custom styles
2. **Responsive**: All components are responsive by default
3. **Accessibility**: Components include proper ARIA attributes
4. **Performance**: Use `useScrollAnimation` hook for scroll animations
5. **Color Usage**: Stick to the defined color palette
6. **Typography**: Use semantic HTML headings (h1-h6) for proper hierarchy

## Tailwind Classes Reference

### Colors
- `bg-primary`, `text-primary`, `border-primary`
- `bg-secondary`, `text-secondary`, `border-secondary`
- `bg-accent`, `text-accent`, `border-accent`
- `bg-success`, `bg-warning`, `bg-error`
- `bg-muted`, `text-muted-foreground`

### Typography
- `font-sans` - Inter font family
- `text-display-1`, `text-display-2`, `text-display-3`
- `text-small`, `text-xs`

### Spacing
- `py-section-sm`, `py-section`, `py-section-lg`

### Animations
- `animate-fade-in`, `animate-slide-up`, etc.
- `scroll-fade-in`, `scroll-slide-up`

