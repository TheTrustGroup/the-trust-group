import type { Config } from "tailwindcss";

/**
 * Editorial design system — calm, authoritative, high-trust.
 * Elite engineering / defense-adjacent. Inspired by ralphlauren.com discipline.
 * Zero layout shift: images require explicit width/height in markup.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          muted: "hsl(var(--primary-muted))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        "trust-serif": ["var(--font-trust-serif)", "Georgia", "serif"],
        "trust-mono": ["var(--font-trust-mono)", "monospace"],
        "trust-sans": ["var(--font-trust-sans)", "system-ui", "sans-serif"],
      },
      /* Ralph Lauren–inspired scale: large serif headlines, tight leading; sans body, generous leading */
      fontSize: {
        /* Body (sans) — neutral, precise, comfortable reading */
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        "body": ["1rem", { lineHeight: "1.65" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        /* Headlines (serif) — luxury, editorial, tight leading */
        "headline-sm": ["1.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "headline": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "headline-lg": ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        "headline-xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "headline-2xl": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "headline-3xl": ["4.5rem", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        /* Display — hero / marquee only */
        "display-1": ["5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-2": ["4rem", { lineHeight: "1.06", letterSpacing: "-0.03em" }],
        "display-3": ["3.25rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
      },
      spacing: {
        "editorial-4": "0.25rem",
        "editorial-8": "0.5rem",
        "editorial-12": "0.75rem",
        "editorial-16": "1rem",
        "editorial-24": "1.5rem",
        "editorial-32": "2rem",
        "editorial-40": "2.5rem",
        "editorial-48": "3rem",
        "editorial-64": "4rem",
        "editorial-80": "5rem",
        "editorial-96": "6rem",
        "editorial-128": "8rem",
        "section": "6rem",
        "section-sm": "4rem",
        "section-lg": "8rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      maxWidth: {
        "editorial": "80rem",
        "prose": "65ch",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      /* Reserve aspect ratios for zero layout shift when using width/height */
      aspectRatio: {
        "editorial-4/3": "4 / 3",
        "editorial-3/2": "3 / 2",
        "editorial-16/9": "16 / 9",
        "editorial-1/1": "1 / 1",
      },
      zIndex: {
        base: "var(--z-base)",
        dropdown: "var(--z-dropdown)",
        sticky: "var(--z-sticky)",
        fixed: "var(--z-fixed)",
        modal: "var(--z-modal)",
        popover: "var(--z-popover)",
        tooltip: "var(--z-tooltip)",
        toast: "var(--z-toast)",
        max: "var(--z-maximum)",
      },
    },
  },
  plugins: [],
};

export default config;
