# Typography & Spacing System
## Premium, Deliberate, Ultra-Clean

### Typography Scale

#### Headings (SF Pro / Inter, Semibold 600-700, Line-height 1.25-1.5)
```tsx
// Display - Largest headings
<h1 className="text-display">Display Text</h1>
// Tailwind: text-5xl md:text-6xl lg:text-7xl font-semibold
// Weight: 600, Line-height: 1.25, Letter-spacing: -0.02em

// Headline - Section titles
<h2 className="text-headline">Headline Text</h2>
// Tailwind: text-3xl md:text-4xl lg:text-5xl font-semibold
// Weight: 600, Line-height: 1.3, Letter-spacing: -0.01em

// Title - Subsection titles
<h3 className="text-title">Title Text</h3>
// Tailwind: text-xl md:text-2xl font-semibold
// Weight: 600, Line-height: 1.35, Letter-spacing: -0.01em

// Standard headings (h4-h6)
<h4 className="text-xl md:text-2xl font-semibold">Heading</h4>
// Weight: 600, Line-height: 1.4
```

#### Body Text (Weight 400-500, Reduced Letter-spacing)
```tsx
// Body - Default paragraph
<p className="text-body">Body text content</p>
// Tailwind: text-base md:text-lg
// Weight: 400, Line-height: 1.65, Letter-spacing: -0.01em

// Body Medium - Emphasized body
<p className="text-body-medium">Medium weight body</p>
// Weight: 500, Line-height: 1.65, Letter-spacing: -0.01em

// Caption - Small text
<p className="text-caption">Caption text</p>
// Tailwind: text-sm
// Weight: 400, Line-height: 1.6, Letter-spacing: -0.005em
```

### Spacing System

#### Section Padding
```tsx
// Standard section
<section className="section-padding-apple">
  {/* Mobile: 64px, Tablet: 80px, Desktop: 96px */}
</section>

// Small section
<section className="section-padding-apple-sm">
  {/* Mobile: 48px, Tablet: 64px */}
</section>
```

#### Container Padding
```tsx
<div className="container-padding-apple">
  {/* Mobile: 16px, Tablet: 24px, Desktop: 32px */}
</div>
```

#### Card Padding
```tsx
<div className="card-apple card-padding-apple">
  {/* Mobile: 24px, Tablet+: 32px */}
</div>
```

#### Gap Spacing (Grid/Flex)
```tsx
// Standard gap
<div className="grid gap-apple">
  {/* Mobile: 24px, Tablet+: 32px */}
</div>

// Small gap
<div className="flex gap-apple-sm">
  {/* Mobile: 16px, Tablet+: 24px */}
</div>

// Large gap
<div className="grid gap-apple-lg">
  {/* Mobile: 32px, Tablet+: 48px */}
</div>
```

#### Hero Spacing
```tsx
<section className="hero-padding-apple">
  {/* Mobile: 80px, Tablet+: 96px */}
</section>
```

#### Navigation Spacing
```tsx
<nav className="nav-apple nav-padding-apple">
  {/* Height: 64px, Padding: 16px (mobile) / 24px (tablet+) */}
</nav>
```

### Alignment Utilities

#### Grid Alignment
```tsx
// Perfect grid alignment
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-apple">
  {/* Locked spacing, pixel-perfect */}
</div>
```

#### Flex Alignment
```tsx
// Centered flex
<div className="flex items-center justify-center gap-apple">
  {/* Consistent spacing */}
</div>

// Space between
<div className="flex items-center justify-between gap-apple-sm">
  {/* Locked spacing */}
</div>
```

### Typography Classes Reference

| Class | Font Size | Weight | Line Height | Letter Spacing |
|-------|-----------|--------|-------------|----------------|
| `.text-display` | 5xl/6xl/7xl | 600 | 1.25 | -0.02em |
| `.text-headline` | 3xl/4xl/5xl | 600 | 1.3 | -0.01em |
| `.text-title` | xl/2xl | 600 | 1.35 | -0.01em |
| `.text-body` | base/lg | 400 | 1.65 | -0.01em |
| `.text-body-medium` | base/lg | 500 | 1.65 | -0.01em |
| `.text-caption` | sm | 400 | 1.6 | -0.005em |

### Spacing Values Reference

| Utility | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| `.section-padding-apple` | 64px | 80px | 96px |
| `.section-padding-apple-sm` | 48px | 64px | - |
| `.container-padding-apple` | 16px | 24px | 32px |
| `.card-padding-apple` | 24px | 32px | 32px |
| `.gap-apple` | 24px | 32px | 32px |
| `.gap-apple-sm` | 16px | 24px | 24px |
| `.gap-apple-lg` | 32px | 48px | 48px |
| `.hero-padding-apple` | 80px | 96px | 96px |
| `.nav-padding-apple` | 16px | 24px | 24px |

### Usage Examples

#### Hero Section
```tsx
<section className="hero-padding-apple">
  <div className="container-padding-apple max-w-3xl mx-auto">
    <h1 className="text-display mb-6">Hero Title</h1>
    <p className="text-body-medium mb-8">Hero subtitle</p>
  </div>
</section>
```

#### Card Grid
```tsx
<section className="section-padding-apple">
  <div className="container-padding-apple">
    <h2 className="text-headline mb-12">Section Title</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-apple">
      {items.map(item => (
        <div key={item.id} className="card-apple card-padding-apple">
          <h3 className="text-title mb-4">{item.title}</h3>
          <p className="text-body">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

### Design Principles
✅ Consistent spacing creates rhythm
✅ Locked values ensure pixel-perfect alignment
✅ Typography hierarchy guides reading flow
✅ Reduced letter-spacing for premium feel
✅ Semibold headings (600) for authority without heaviness
