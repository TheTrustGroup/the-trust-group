"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ClickRippleProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function ClickRipple({ children, className, color = "rgba(0, 102, 255, 0.3)" }: ClickRippleProps) {
  const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([]);
  const timeoutRefs = React.useRef<Map<number, NodeJS.Timeout>>(new Map());

  // ✅ GOOD - Cleanup all timeouts on unmount
  React.useEffect(() => {
    const refs = timeoutRefs.current;
    return () => {
      refs.forEach((timeout) => clearTimeout(timeout));
      refs.clear();
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    // ✅ GOOD - Remove ripple after animation with cleanup
    const timeoutId = setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
      timeoutRefs.current.delete(id);
    }, 600);
    
    timeoutRefs.current.set(id, timeoutId);
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            backgroundColor: color,
            transform: "translate(-50%, -50%)",
            animation: "ripple 0.6s ease-out",
          }}
        />
      ))}
      <style jsx>{`
        @keyframes ripple {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

