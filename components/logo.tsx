"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { TrustMark, type TrustMarkTone } from "@/components/trust-mark";

interface LogoProps {
  variant?: "full" | "icon" | "text" | "stacked";
  size?: "sm" | "md" | "lg" | "xl";
  tone?: TrustMarkTone;
  showText?: boolean;
  showTagline?: boolean;
  className?: string;
}

const SIZE_MAP = {
  sm: { mark: 28, wordmarkPx: 16, taglinePx: 8, gap: 10 },
  md: { mark: 36, wordmarkPx: 20, taglinePx: 9, gap: 12 },
  lg: { mark: 52, wordmarkPx: 28, taglinePx: 10, gap: 14 },
  xl: { mark: 72, wordmarkPx: 40, taglinePx: 12, gap: 18 },
} as const;

/**
 * Logo — The Trust Group identity lockup per 2026 rebrand.
 *
 * variants:
 *   - "full"     → mark + wordmark (no sub-tagline) for nav, inline
 *   - "stacked"  → mark above wordmark + sub-tagline for hero / splash
 *   - "icon"     → mark only
 *   - "text"     → wordmark only
 */
export function Logo({
  variant = "full",
  size = "md",
  tone = "gold-gradient-deep",
  showText = true,
  showTagline = variant === "stacked",
  className,
}: LogoProps) {
  const s = SIZE_MAP[size];

  if (variant === "icon") {
    return (
      <span
        className={cn("inline-flex items-center", className)}
        aria-hidden={false}
      >
        <TrustMark
          size={s.mark}
          tone={tone}
          title="The Trust Group"
          showCrosshair={s.mark >= 32}
        />
      </span>
    );
  }

  if (variant === "text") {
    return (
      <span
        className={cn(
          "font-normal uppercase text-foreground",
          "tracking-[0.22em] leading-none",
          className
        )}
        style={{
          fontFamily: "var(--font-ttg-cormorant), Georgia, serif",
          fontSize: s.wordmarkPx,
        }}
      >
        The Trust Group
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <div
        className={cn("inline-flex flex-col items-center text-center", className)}
        style={{ gap: s.gap }}
      >
        <TrustMark size={s.mark} tone={tone} />
        <div className="flex flex-col items-center" style={{ gap: Math.max(4, s.gap / 3) }}>
          {showText && (
            <span
              className="font-normal uppercase leading-none text-foreground"
              style={{
                fontFamily: "var(--font-ttg-cormorant), Georgia, serif",
                fontSize: s.wordmarkPx,
                letterSpacing: "0.22em",
              }}
            >
              The Trust Group
            </span>
          )}
          {showTagline && (
            <span
              className="font-light uppercase leading-none"
              style={{
                fontFamily: "var(--font-ttg-jost), system-ui, sans-serif",
                fontSize: s.taglinePx,
                letterSpacing: "0.38em",
                color: "#c8a96e",
              }}
            >
              Engineering · Strategy · Defense
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("inline-flex items-center", className)}
      style={{ gap: s.gap }}
    >
      <TrustMark size={s.mark} tone={tone} showCrosshair={s.mark >= 32} />
      {showText && (
        <div className="flex flex-col justify-center" style={{ gap: 3 }}>
          <span
            className="font-normal uppercase leading-none text-foreground whitespace-nowrap"
            style={{
              fontFamily: "var(--font-ttg-cormorant), Georgia, serif",
              fontSize: s.wordmarkPx,
              letterSpacing: "0.22em",
            }}
          >
            The Trust Group
          </span>
          {showTagline && (
            <span
              className="font-light uppercase leading-none whitespace-nowrap"
              style={{
                fontFamily: "var(--font-ttg-jost), system-ui, sans-serif",
                fontSize: s.taglinePx,
                letterSpacing: "0.38em",
                color: "#c8a96e",
              }}
            >
              Engineering · Strategy · Defense
            </span>
          )}
        </div>
      )}
    </div>
  );
}
