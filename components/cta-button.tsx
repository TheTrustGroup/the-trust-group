"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTAScrollButton() {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      // Respect reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ 
        top: offsetPosition, 
        behavior: prefersReducedMotion ? 'auto' : 'smooth' 
      });
    }
  };

  return (
    <Button 
      size="lg" 
      variant="secondary" 
      className="group"
      onClick={handleClick}
    >
      Contact Us Today
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </Button>
  );
}

