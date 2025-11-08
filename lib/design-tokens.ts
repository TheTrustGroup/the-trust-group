/**
 * Design Tokens - Comprehensive design system values
 * Ensures consistency across the entire application
 */

// ============================================
// COLORS
// ============================================

export const colors = {
  primary: {
    DEFAULT: "hsl(214, 100%, 50%)", // #0066FF
    hover: "hsl(214, 100%, 45%)",
    light: "hsl(214, 100%, 95%)",
    dark: "hsl(214, 100%, 40%)",
    foreground: "hsl(0, 0%, 100%)",
  },
  secondary: {
    DEFAULT: "hsl(220, 50%, 25%)",
    hover: "hsl(220, 50%, 30%)",
    light: "hsl(220, 30%, 95%)",
    dark: "hsl(220, 50%, 20%)",
    foreground: "hsl(0, 0%, 100%)",
  },
  accent: {
    DEFAULT: "hsl(195, 100%, 50%)", // Cyan
    hover: "hsl(195, 100%, 45%)",
    foreground: "hsl(0, 0%, 100%)",
    orange: "hsl(25, 95%, 53%)",
    "orange-foreground": "hsl(0, 0%, 100%)",
  },
  success: {
    DEFAULT: "hsl(142, 71%, 45%)",
    foreground: "hsl(0, 0%, 100%)",
    light: "hsl(142, 71%, 95%)",
  },
  warning: {
    DEFAULT: "hsl(38, 92%, 50%)",
    foreground: "hsl(0, 0%, 100%)",
    light: "hsl(38, 92%, 95%)",
  },
  error: {
    DEFAULT: "hsl(0, 84%, 60%)",
    foreground: "hsl(0, 0%, 100%)",
    light: "hsl(0, 84%, 95%)",
  },
  neutral: {
    background: {
      light: "hsl(0, 0%, 100%)",
      dark: "hsl(220, 30%, 8%)",
    },
    foreground: {
      light: "hsl(220, 15%, 15%)",
      dark: "hsl(0, 0%, 98%)",
    },
    muted: {
      light: "hsl(220, 15%, 96%)",
      dark: "hsl(220, 20%, 20%)",
    },
    "muted-foreground": {
      light: "hsl(220, 10%, 45%)",
      dark: "hsl(220, 10%, 70%)",
    },
    border: {
      light: "hsl(220, 15%, 90%)",
      dark: "hsl(220, 20%, 25%)",
    },
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================

export const typography = {
  fontFamily: {
    sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
    mono: ["ui-monospace", "SFMono-Regular", "monospace"],
  },
  fontSize: {
    xs: ["0.75rem", { lineHeight: "1.25rem" }], // 12px
    sm: ["0.875rem", { lineHeight: "1.5rem" }], // 14px
    base: ["1rem", { lineHeight: "1.75rem" }], // 16px
    lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
    xl: ["1.25rem", { lineHeight: "2rem" }], // 20px
    "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
    "5xl": ["3rem", { lineHeight: "1.1" }], // 48px
    "6xl": ["3.75rem", { lineHeight: "1.1" }], // 60px
    display: {
      1: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 72px
      2: ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 60px
      3: ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }], // 48px
    },
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

// ============================================
// SPACING
// ============================================

export const spacing = {
  // Base unit: 4px
  0: "0px",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  // Semantic spacing
  section: {
    sm: "3rem", // 48px
    md: "5rem", // 80px
    lg: "7rem", // 112px
  },
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  none: "0px",
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
  // Semantic
  card: "0.75rem", // 12px
  button: "0.5rem", // 8px
  input: "0.5rem", // 8px
  badge: "0.375rem", // 6px
} as const;

// ============================================
// SHADOWS (Elevation System)
// ============================================

export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
  // Colored shadows
  primary: {
    sm: "0 1px 2px 0 rgb(0 102 255 / 0.1)",
    md: "0 4px 6px -1px rgb(0 102 255 / 0.2), 0 2px 4px -2px rgb(0 102 255 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 102 255 / 0.2), 0 4px 6px -4px rgb(0 102 255 / 0.1)",
  },
} as const;

// ============================================
// TRANSITIONS
// ============================================

export const transitions = {
  duration: {
    fast: "150ms",
    base: "200ms",
    slow: "300ms",
    slower: "500ms",
  },
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    // Custom easing
    smooth: "cubic-bezier(0.6, -0.05, 0.01, 0.99)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },
  // Standard transitions
  standard: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  colors: "color 200ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  transform: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  opacity: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// ============================================
// Z-INDEX SCALE
// ============================================

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  loading: 9999,
} as const;

// ============================================
// BREAKPOINTS
// ============================================

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// ============================================
// ACCESSIBILITY
// ============================================

export const accessibility = {
  // Minimum touch target size (WCAG 2.5.5)
  touchTarget: {
    min: "44px",
    recommended: "48px",
  },
  // Focus ring
  focus: {
    ring: {
      width: "2px",
      offset: "2px",
      color: "hsl(var(--ring))",
    },
  },
  // Color contrast ratios (WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text)
  contrast: {
    normal: 4.5,
    large: 3,
    enhanced: 7, // WCAG AAA
  },
} as const;

// ============================================
// COMPONENT SPECIFIC TOKENS
// ============================================

export const components = {
  button: {
    minHeight: "44px",
    padding: {
      sm: "0.5rem 0.75rem",
      md: "0.625rem 1rem",
      lg: "0.75rem 2rem",
    },
    borderRadius: borderRadius.button,
    transition: transitions.standard,
  },
  input: {
    minHeight: "44px",
    padding: "0.625rem 1rem",
    borderRadius: borderRadius.input,
    borderWidth: "1px",
    transition: transitions.standard,
  },
  card: {
    padding: "1.5rem",
    borderRadius: borderRadius.card,
    borderWidth: "1px",
    shadow: shadows.md,
  },
  badge: {
    padding: "0.25rem 0.625rem",
    borderRadius: borderRadius.badge,
    fontSize: typography.fontSize.xs[0],
  },
  modal: {
    borderRadius: borderRadius.xl,
    padding: "1.5rem",
    maxWidth: "32rem",
    shadow: shadows["2xl"],
  },
} as const;

// Export all tokens
export const designTokens = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  accessibility,
  components,
} as const;

