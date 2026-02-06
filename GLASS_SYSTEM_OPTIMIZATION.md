# Glass System Optimization
## High-End, Modern Aesthetics

### Blur Hierarchy (Depth Order)
1. **Hero Glass** - `.hero-glass` - `blur(16px)` - Highest depth
2. **Container** - `.glass-container` - `blur(14px)` - Secondary depth
3. **Card** - `.glass-card` - `blur(12px)` - Tertiary depth
4. **Navigation** - `.nav-apple` / `.glass-subtle` - `blur(10px)` - Lowest depth

### Background Opacity (Luxurious, Subtle)
- **Hero**: `rgba(255, 255, 255, 0.65)` / `rgba(15, 23, 42, 0.65)` (dark)
- **Container**: `rgba(255, 255, 255, 0.6)` / `rgba(15, 23, 42, 0.6)` (dark)
- **Card**: `rgba(255, 255, 255, 0.55)` / `rgba(15, 23, 42, 0.55)` (dark)
- **Navigation**: `rgba(255, 255, 255, 0.6)` / `rgba(15, 23, 42, 0.6)` (dark)

### Borders
- Consistent hairline borders: `rgba(0, 0, 0, 0.05)` / `rgba(255, 255, 255, 0.06)` (dark)
- No redundant shadows removed
- Minimal visual noise

### Spacing
- All glass elements use consistent Tailwind spacing utilities
- Padding: `clamp(1.25rem, 3vw, 2rem)` for cards
- Border radius: `12px` (rounded-2xl)

### Usage Examples

#### Hero Section
```tsx
<div className="glass-container hero-glass rounded-2xl p-6 md:p-8 lg:p-10">
  {/* Hero content */}
</div>
```

#### Cards
```tsx
<div className="card-apple glass-card">
  {/* Card content */}
</div>
```

#### Navigation
```tsx
<nav className="nav-apple">
  {/* Navigation content */}
</nav>
```

### Optimizations Applied
✅ Blur hierarchy established (hero > container > card > nav)
✅ Background opacity tuned for luxurious feel
✅ Redundant shadows removed
✅ Consistent borders (hairline, low contrast)
✅ Spacing locked with Tailwind utilities
✅ Apple-style minimalist elegance maintained
