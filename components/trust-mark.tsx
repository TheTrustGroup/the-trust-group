import * as React from "react";
import { useId } from "react";

/**
 * TrustMark — the canonical gold diamond mark from the 2026 rebrand.
 *
 * Geometry:
 *   - Outer square rotated 45° → diamond frame (precision)
 *   - Inner square rotated 45° (low opacity) → depth
 *   - Four quadrant squares with descending opacity (0.9 / 0.55 / 0.55 / 0.25)
 *     signifying AI & Engineering / Strategy / Defense / Scale
 *   - Central crosshair (precision point, optional)
 *   - Four corner registration brackets (engineering precision)
 *
 * Source of truth for the identity. Rasterized versions live in
 * public/favicon.svg + public/favicon.ico + public/apple-touch-icon.png etc.
 */

export type TrustMarkTone =
  | "gold-gradient"
  | "gold-gradient-deep"
  | "mono-gold"
  | "mono-navy";

interface TrustMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  tone?: TrustMarkTone;
  showCrosshair?: boolean;
  showBrackets?: boolean;
  title?: string;
}

export function TrustMark({
  size = 32,
  tone = "gold-gradient",
  showCrosshair = true,
  showBrackets = true,
  title,
  ...rest
}: TrustMarkProps) {
  const uid = useId();
  const gradId = `ttg-mark-grad-${uid}`;

  const stroke =
    tone === "mono-gold"
      ? "#c8a96e"
      : tone === "mono-navy"
      ? "#1a1f2e"
      : `url(#${gradId})`;
  const fill = stroke;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      {...rest}
    >
      {(tone === "gold-gradient" || tone === "gold-gradient-deep") && (
        <defs>
          <linearGradient
            id={gradId}
            x1="0"
            y1="0"
            x2="60"
            y2="60"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor={tone === "gold-gradient-deep" ? "#b8944a" : "#e8d4a8"}
            />
            <stop
              offset="100%"
              stopColor={tone === "gold-gradient-deep" ? "#8a6b2e" : "#b8944a"}
            />
          </linearGradient>
        </defs>
      )}

      {title && <title>{title}</title>}

      <rect
        x="4"
        y="4"
        width="52"
        height="52"
        rx="2"
        fill="none"
        stroke={stroke}
        strokeWidth="0.75"
        transform="rotate(45 30 30)"
      />
      <rect
        x="14"
        y="14"
        width="32"
        height="32"
        rx="1"
        fill="none"
        stroke={stroke}
        strokeWidth="0.5"
        transform="rotate(45 30 30)"
        opacity="0.45"
      />

      <rect x="17" y="17" width="12" height="12" rx="0.5" fill={fill} opacity="0.9" />
      <rect x="31" y="17" width="12" height="12" rx="0.5" fill={fill} opacity="0.55" />
      <rect x="17" y="31" width="12" height="12" rx="0.5" fill={fill} opacity="0.55" />
      <rect x="31" y="31" width="12" height="12" rx="0.5" fill={fill} opacity="0.25" />

      {showCrosshair && (
        <>
          <line
            x1="30"
            y1="16"
            x2="30"
            y2="44"
            stroke={stroke}
            strokeWidth="0.5"
            opacity="0.3"
          />
          <line
            x1="16"
            y1="30"
            x2="44"
            y2="30"
            stroke={stroke}
            strokeWidth="0.5"
            opacity="0.3"
          />
        </>
      )}

      {showBrackets && (
        <>
          <path
            d="M4 12 L4 4 L12 4"
            stroke={stroke}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M48 4 L56 4 L56 12"
            stroke={stroke}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M56 48 L56 56 L48 56"
            stroke={stroke}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M12 56 L4 56 L4 48"
            stroke={stroke}
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}
