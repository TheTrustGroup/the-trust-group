"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { smoothScrollTo, throttle } from "@/lib/smooth-scroll";
import { siteConfig } from "@/lib/cms-client";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { NavDropdown } from "./nav-dropdown";
import { MobileMenu } from "./mobile-menu";
import { lockBodyScroll, forceUnlockScroll } from "@/lib/utils/scroll-lock";

export function EnhancedNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollYRef = React.useRef(0);
  const navRef = React.useRef<HTMLElement>(null);
  const scrollUnlockRef = React.useRef<(() => void) | null>(null);

  const navItems = siteConfig.navigation.main.map((item) => ({
    href: item.href,
    label: item.name,
  }));

  const servicesItems = siteConfig.navigation.footer.services;

  // Handle scroll for navbar background and visibility
  React.useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;
    
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const lastScrollY = lastScrollYRef.current;
          
          // Update scrolled state for background
          setIsScrolled(currentScrollY > 20);

          // Hide/show navbar on scroll - faster response
          if (currentScrollY < 10) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down - hide navbar (reduced threshold from 100 to 50)
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar immediately
            setIsVisible(true);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Close mobile menu and always release scroll lock on route change (prevents frozen page)
  React.useEffect(() => {
    forceUnlockScroll();
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open (defer to next frame to avoid freeze when opening)
  React.useEffect(() => {
    if (!isOpen) {
      scrollUnlockRef.current?.();
      scrollUnlockRef.current = null;
      return;
    }
    let rafId = 0;
    rafId = requestAnimationFrame(() => {
      scrollUnlockRef.current = lockBodyScroll();
    });
    return () => {
      cancelAnimationFrame(rafId);
      scrollUnlockRef.current?.();
      scrollUnlockRef.current = null;
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      smoothScrollTo(href.slice(1), 80);
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ 
          duration: 0.2, 
          ease: "easeInOut",
          type: "tween"
        }}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
          zIndex: "var(--z-sticky)",
        }}
        className={cn(
          "navbar-optimized fixed top-0 left-0 right-0 w-full",
          "nav-apple glass-subtle", // Apple design system class
          "h-16 md:h-20", // Mobile-first height
          isScrolled && "scrolled"
        )}
      >
        <div className="container mx-auto container-padding-apple max-w-7xl h-full">
          <div className="flex h-full items-center justify-between gap-apple-sm relative">
            {/* Logo Section - Left Aligned */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex-shrink-0 z-10 min-w-0 flex items-center"
            >
              <Link
                href="/"
                className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded-lg"
                aria-label="The Trust Group - Home"
              >
                <Logo variant="full" size="md" className="flex-shrink-0 transition-opacity group-hover:opacity-90" />
              </Link>
            </motion.div>

            {/* Desktop Navigation - Center/Right Aligned */}
            <nav className="hidden md:flex items-center gap-6 flex-shrink-0 ml-auto" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === "/" && pathname === "/");
                const isServices = item.href === "/services";

                if (isServices && servicesItems) {
                  return (
                    <NavDropdown
                      key={item.href}
                      label={item.label}
                      items={servicesItems}
                    />
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                    className={cn(
                      "text-sm font-medium transition-colors duration-200 relative group",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:rounded",
                      "min-h-[44px] flex items-center", // Thumb-friendly
                      item.href.startsWith("#") && "smooth-scroll",
                      isActive
                        ? "text-high-contrast"
                        : "text-medium-contrast hover:text-high-contrast"
                    )}
                  >
                    {item.label}
                    {!isActive && (
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-200 group-hover:w-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Far Right */}
            <div className="hidden md:flex items-center gap-apple-sm flex-shrink-0 ml-6">
              <ThemeToggle />
              <Button className="btn-apple btn-apple-primary text-sm px-4 py-2 min-h-[44px]" asChild>
                <Link href="/contact">Start Conversation</Link>
              </Button>
            </div>

            {/* Mobile Menu Button & Theme Toggle - Right Aligned */}
            <div className="md:hidden flex items-center gap-2 sm:gap-2.5 flex-shrink-0 z-10 ml-auto">
              <ThemeToggle className="scale-95 sm:scale-100" />
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 sm:p-3 min-w-[44px] min-h-[44px] rounded-lg bg-muted/90 hover:bg-muted active:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background touch-manipulation transition-all duration-200 border border-border/60 hover:border-border hover:shadow-sm flex items-center justify-center"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsOpen((prev) => !prev);
                }}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center"
                    >
                      <X className="h-6 w-6 text-foreground" strokeWidth={2} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center justify-center"
                    >
                      <Menu className="h-6 w-6 text-foreground" strokeWidth={2} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - force unlock scroll on close to prevent frozen page after navigation */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => {
          forceUnlockScroll();
          setIsOpen(false);
        }}
        items={navItems}
        servicesItems={servicesItems}
      />

      {/* Spacer to prevent content from going under fixed nav - Mobile-first height */}
      <div className="h-16 md:h-20 transition-opacity duration-300" />
    </>
  );
}

