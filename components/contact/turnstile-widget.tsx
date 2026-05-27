"use client";

import * as React from "react";
import Script from "next/script";

type TurnstileAPI = {
  render: (container: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileAPI;
  }
}

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();

export function isTurnstileWidgetEnabled(): boolean {
  return Boolean(siteKey);
}

/**
 * Cloudflare Turnstile (optional). When enabled, parent should require a token before submit.
 */
export function TurnstileWidget({
  onToken,
}: {
  onToken: (token: string | null) => void;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const widgetIdRef = React.useRef<string | null>(null);
  const [scriptReady, setScriptReady] = React.useState(false);

  const renderWidget = React.useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current) return;
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: (token: string) => onToken(token),
      "expired-callback": () => onToken(null),
      "error-callback": () => onToken(null),
    });
  }, [onToken]);

  React.useEffect(() => {
    if (scriptReady) renderWidget();
  }, [scriptReady, renderWidget]);

  React.useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile?.remove) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* ignore */
        }
      }
      widgetIdRef.current = null;
    };
  }, []);

  if (!siteKey) return null;

  return (
    <div className="space-y-2">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={() => setScriptReady(true)}
      />
      <div ref={containerRef} className="min-h-[65px]" aria-live="polite" />
      <p className="text-xs text-muted-foreground">Protected by Cloudflare Turnstile.</p>
    </div>
  );
}
