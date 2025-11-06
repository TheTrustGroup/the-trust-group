"use client";

import * as React from "react";
import { useScrollAnimation } from "@/lib/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Section, SectionProps } from "./section";

export interface AnimatedSectionProps extends SectionProps {
  animation?: "fade-in" | "slide-up" | "slide-in-left" | "slide-in-right" | "scale-in";
  delay?: number;
  threshold?: number;
}

const AnimatedSection = React.forwardRef<HTMLElement, AnimatedSectionProps>(
  (
    {
      className,
      animation = "fade-in",
      delay = 0,
      threshold = 0.1,
      children,
      ...props
    },
    ref
  ) => {
    const { ref: animationRef, isVisible } = useScrollAnimation({
      threshold,
      triggerOnce: true,
    });

    const animationClasses = {
      "fade-in": "scroll-fade-in",
      "slide-up": "scroll-slide-up",
      "slide-in-left": "scroll-fade-in",
      "slide-in-right": "scroll-fade-in",
      "scale-in": "scroll-fade-in",
    };

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
        if (animationRef && typeof animationRef !== "function") {
          animationRef.current = node as HTMLDivElement | null;
        }
      },
      [ref, animationRef]
    );

    return (
      <Section
        ref={combinedRef}
        className={cn(
          animationClasses[animation],
          isVisible && "visible",
          className
        )}
        style={{
          transitionDelay: `${delay}ms`,
        }}
        {...props}
      >
        {children}
      </Section>
    );
  }
);
AnimatedSection.displayName = "AnimatedSection";

export { AnimatedSection };

