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
      // Store original overflow value
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      
      return () => {
        // Always restore on cleanup
        document.body.style.overflow = originalOverflow || "";
        document.body.style.paddingRight = originalPaddingRight || "";
      };
    } else {
      // Ensure overflow is reset when menu closes
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
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
          willChange: isVisible ? "auto" : "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background/60 backdrop-blur-sm border-b border-transparent"
        )}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="flex h-16 md:h-20 items-center justify-between gap-2">
            {/* Logo with hover effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex-shrink-0 min-w-0 flex-1 sm:flex-initial"
            >
              <Link
                href="/"
                className="flex items-center flex-shrink-0 min-w-0"
              >
                <Logo variant="full" size="md" className="flex-shrink-0" />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-shrink-0">
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
                        "text-sm font-medium transition-all duration-200 relative group px-3 py-2 rounded-md",
                        isActive
                          ? "text-foreground bg-accent/50"
                          : "text-foreground/80 hover:text-foreground hover:bg-accent/30"
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

              <div className="ml-2 flex items-center gap-2">
                <ThemeToggle />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="sm"
                    className="relative overflow-hidden group"
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

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <ThemeToggle />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 sm:p-3 min-w-[44px] min-h-[44px] rounded-md bg-muted active:bg-accent focus:outline-none focus:ring-2 focus:ring-primary touch-manipulation relative"
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

      {/* Spacer to prevent content from going under fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  );
}

