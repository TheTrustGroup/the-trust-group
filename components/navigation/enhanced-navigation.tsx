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
import { lockBodyScroll } from "@/lib/utils/scroll-lock";

export function EnhancedNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollYRef = React.useRef(0);
  const navRef = React.useRef<HTMLElement>(null);

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

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      // ✅ GOOD - Use optimized scroll lock utility (handles iOS and layout shift)
      const unlock = lockBodyScroll();
      
      return () => {
        unlock();
      };
    }
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
        }}
        className={cn(
          "navbar-optimized fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          "supports-[backdrop-filter]:bg-background/80 supports-[backdrop-filter]:backdrop-blur-md",
          "h-20", // Fixed height to prevent layout reflow
          isScrolled
            ? "navbar-scrolled bg-background/95 backdrop-blur-lg border-b border-border/60 shadow-lg shadow-black/5"
            : "bg-background/80 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 max-w-7xl h-full">
          <div className="flex h-full items-center justify-between gap-3 sm:gap-4 relative">
            {/* Logo Section - Left Aligned */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex-shrink-0 z-10 min-w-0"
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
            <div className="hidden md:flex items-center gap-1 lg:gap-2 flex-shrink-0 ml-auto flex-1 justify-end max-w-3xl">
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
                  <motion.div
                    key={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }
                      }}
                      className={cn(
                        "text-[0.9375rem] font-medium transition-all duration-200 relative group px-3 py-2 rounded-md",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                        isActive
                          ? "text-foreground bg-accent/50 shadow-sm"
                          : "text-slate-700 hover:text-primary hover:bg-accent/30"
                      )}
                    >
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      {!isActive && (
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="ml-4 lg:ml-6 flex items-center gap-2 lg:gap-3 flex-shrink-0">
                <ThemeToggle />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="sm"
                    className="relative overflow-hidden group font-semibold shadow-sm hover:shadow-md transition-shadow whitespace-nowrap"
                    onClick={() => handleNavClick("/contact")}
                  >
                    <span className="relative z-10">Get Started</span>
                    <motion.span
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Mobile Menu Button & Theme Toggle - Right Aligned */}
            <div className="md:hidden flex items-center gap-2 sm:gap-2.5 flex-shrink-0 z-10 ml-auto">
              <ThemeToggle className="scale-95 sm:scale-100" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2.5 sm:p-3 min-w-[44px] min-h-[44px] rounded-lg bg-muted/90 hover:bg-muted active:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background touch-manipulation transition-all duration-200 border border-border/60 hover:border-border hover:shadow-sm flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
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
                    >
                      <X className="h-6 w-6 stroke-current dark:stroke-current" strokeWidth={2} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6 stroke-current dark:stroke-current" strokeWidth={2} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={navItems}
        servicesItems={servicesItems}
      />

      {/* Spacer to prevent content from going under fixed nav - Fixed height to prevent reflow */}
      <div className="h-20 transition-opacity duration-300" />
    </>
  );
}

