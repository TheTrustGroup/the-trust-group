"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { siteConfig } from "@/lib/cms-client";

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = siteConfig.navigation.main.map((item) => ({
    href: item.href,
    label: item.name,
  }));

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">The Trust Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    smoothScrollTo(item.href.slice(1), 80);
                  }
                }}
                className="text-sm font-medium text-foreground/80 transition-all duration-200 hover:text-foreground hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 min-w-[44px] min-h-[44px] rounded-md bg-muted active:bg-accent focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border",
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!isOpen}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium text-foreground/80 transition-colors active:text-foreground active:bg-muted rounded-md min-h-[44px] flex items-center touch-manipulation"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button className="w-full min-h-[44px]" size="lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

