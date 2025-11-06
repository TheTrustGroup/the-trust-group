"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  triggerRef?: React.RefObject<HTMLElement>;
  isVisible?: boolean;
}

export function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
  isVisible = false,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (end - startValue) * easeOut;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [isVisible, end, duration]);

  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

