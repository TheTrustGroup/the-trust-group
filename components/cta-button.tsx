"use client";

import { ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function CTAScrollButton() {
  const handleClick = () => {
    smoothScrollTo("contact", 80);
  };

  return (
    <button 
      className="btn-apple btn-apple-primary group"
      onClick={handleClick}
    >
      Start Conversation
      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}

