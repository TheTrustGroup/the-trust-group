"use client";

import { useEffect, useState } from "react";

/**
 * Custom cursor dot + trail. Hidden on touch devices and below 900px to match HTML.
 */
export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const media = window.matchMedia("(max-width: 900px)");
    const prefersPointer = window.matchMedia("(pointer: fine)");
    const hidden = media.matches || !prefersPointer.matches;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTimeout(() => setTrail({ x: e.clientX, y: e.clientY }), 70);
    };

    if (hidden) return;
    const prevCursor = document.body.style.cursor;
    document.body.style.cursor = "none";
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.body.style.cursor = prevCursor;
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <div
        id="cursor"
        className="fixed w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          backgroundColor: "var(--ttg-navy, #1a1f2e)",
        }}
        aria-hidden
      />
      <div
        id="cursor-trail"
        className="fixed w-8 h-8 border rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-[120ms] ease-out hidden md:block"
        style={{
          left: trail.x,
          top: trail.y,
          borderColor: "rgba(26, 31, 46, 0.2)",
        }}
        aria-hidden
      />
    </>
  );
}
