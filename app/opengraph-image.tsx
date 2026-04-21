import { ImageResponse } from "next/og";

/**
 * Dynamic Open Graph image for The Trust Group.
 *
 * Rendered at request time by @vercel/og (Satori). Next.js auto-registers
 * this file at `/opengraph-image` and injects it into <meta og:image>
 * for every page under `app/`. No static og-image.jpg is required.
 *
 * Fonts are fetched from Google Fonts' CSS2 endpoint at runtime so the
 * typography exactly matches the site (Cormorant Garamond + Jost).
 */

export const runtime = "edge";
export const alt =
  "The Trust Group — Engineering · Strategy · Defense. Mission-critical software.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CORMORANT_CSS_URL =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400&display=swap";
const JOST_CSS_URL =
  "https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap";

async function loadGoogleFont(cssUrl: string): Promise<ArrayBuffer | null> {
  try {
    const cssRes = await fetch(cssUrl, {
      headers: {
        // Google Fonts serves different files per User-Agent; this UA is served woff2.
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    const css = await cssRes.text();
    const match = css.match(/src:\s*url\(([^)]+)\)\s*format\('woff2'\)/);
    if (!match) return null;
    const fontRes = await fetch(match[1]);
    return fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

// Mark SVG — same geometry as public/logo.svg but scaled for 280px crop,
// with a body-color-matched navy backdrop so the gold reads clearly.
const MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#e8d4a8"/>
      <stop offset="100%" stop-color="#b8944a"/>
    </linearGradient>
  </defs>
  <rect x="4" y="4" width="52" height="52" rx="2" fill="none" stroke="url(#g)" stroke-width="0.75" transform="rotate(45 30 30)"/>
  <rect x="14" y="14" width="32" height="32" rx="1" fill="none" stroke="url(#g)" stroke-width="0.5" opacity="0.45" transform="rotate(45 30 30)"/>
  <rect x="17" y="17" width="12" height="12" rx="0.5" fill="url(#g)" opacity="0.9"/>
  <rect x="31" y="17" width="12" height="12" rx="0.5" fill="url(#g)" opacity="0.55"/>
  <rect x="17" y="31" width="12" height="12" rx="0.5" fill="url(#g)" opacity="0.55"/>
  <rect x="31" y="31" width="12" height="12" rx="0.5" fill="url(#g)" opacity="0.25"/>
  <line x1="30" y1="16" x2="30" y2="44" stroke="url(#g)" stroke-width="0.5" opacity="0.3"/>
  <line x1="16" y1="30" x2="44" y2="30" stroke="url(#g)" stroke-width="0.5" opacity="0.3"/>
  <path d="M4 12 L4 4 L12 4" stroke="url(#g)" stroke-width="1" fill="none" stroke-linecap="round"/>
  <path d="M48 4 L56 4 L56 12" stroke="url(#g)" stroke-width="1" fill="none" stroke-linecap="round"/>
  <path d="M56 48 L56 56 L48 56" stroke="url(#g)" stroke-width="1" fill="none" stroke-linecap="round"/>
  <path d="M12 56 L4 56 L4 48" stroke="url(#g)" stroke-width="1" fill="none" stroke-linecap="round"/>
</svg>`;

const MARK_DATA_URL = `data:image/svg+xml;utf8,${encodeURIComponent(MARK_SVG)}`;

export default async function OpengraphImage() {
  const [cormorantData, jostData] = await Promise.all([
    loadGoogleFont(CORMORANT_CSS_URL),
    loadGoogleFont(JOST_CSS_URL),
  ]);

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: 300 | 400;
    style: "normal";
  }[] = [];
  if (cormorantData) {
    fonts.push({
      name: "Cormorant Garamond",
      data: cormorantData,
      weight: 400,
      style: "normal",
    });
  }
  if (jostData) {
    fonts.push({ name: "Jost", data: jostData, weight: 300, style: "normal" });
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1a1f2e",
          backgroundImage:
            "radial-gradient(ellipse at top, rgba(200,169,110,0.08) 0%, transparent 55%), radial-gradient(ellipse at bottom, rgba(200,169,110,0.04) 0%, transparent 60%)",
          padding: "64px 96px",
          fontFamily: "Cormorant Garamond, Georgia, serif",
        }}
      >
        {/* Top-left: tiny corner registration text */}
        <div
          style={{
            position: "absolute",
            top: 44,
            left: 64,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "Jost, sans-serif",
            fontSize: 12,
            fontWeight: 300,
            color: "rgba(200,169,110,0.7)",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 24,
              height: 1,
              backgroundColor: "rgba(200,169,110,0.5)",
            }}
          />
          <span>Mission-Critical Software</span>
        </div>

        {/* Top-right: location */}
        <div
          style={{
            position: "absolute",
            top: 44,
            right: 64,
            fontFamily: "Jost, sans-serif",
            fontSize: 12,
            fontWeight: 300,
            color: "rgba(200,169,110,0.7)",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
          }}
        >
          Accra · Global
        </div>

        {/* The mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 56,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK_DATA_URL} width={220} height={220} alt="" />
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 400,
            letterSpacing: "0.16em",
            color: "#f5f3f0",
            textTransform: "uppercase",
            lineHeight: 1,
            marginBottom: 30,
            display: "flex",
          }}
        >
          The Trust Group
        </div>

        {/* Hairline rule + sub-tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 56,
              height: 1,
              backgroundColor: "rgba(200,169,110,0.55)",
            }}
          />
          <div
            style={{
              fontFamily: "Jost, sans-serif",
              fontSize: 22,
              fontWeight: 300,
              letterSpacing: "0.38em",
              color: "#c8a96e",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Engineering · Strategy · Defense
          </div>
          <div
            style={{
              width: 56,
              height: 1,
              backgroundColor: "rgba(200,169,110,0.55)",
            }}
          />
        </div>

        {/* Bottom: URL */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            fontFamily: "Jost, sans-serif",
            fontSize: 13,
            fontWeight: 300,
            color: "rgba(245,243,240,0.5)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          thetrustgroupsolutions.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}
