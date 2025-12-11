"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { ThemeToggle } from "@/components/theme-toggle";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{ href: string; label: string }>;
  servicesItems?: Array<{ name: string; href: string }>;
}

export function MobileMenu({ isOpen, onClose, items, servicesItems }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = React.useRef<HTMLDivElement>(null);
  const firstFocusableRef = React.useRef<HTMLButtonElement>(null);
  const lastFocusableRef = React.useRef<HTMLButtonElement>(null);

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      smoothScrollTo(href.slice(1), 80);
    }
    onClose();
  };

  // Handle Escape key to close menu
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Focus first element when menu opens
      setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Focus trap
  React.useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      const focusableElements = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: [0.32, 0.72, 0, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-lg font-semibold">Menu</h2>
                <motion.button
                  ref={firstFocusableRef}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-accent transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 px-6 py-8 space-y-2" aria-label="Main navigation">
                {items.map((item, index) => {
                  const isActive = pathname === item.href || (item.href === "/" && pathname === "/");
                  const isServices = item.href === "/services";

                  return (
                    <motion.div
                      key={item.href}
                      variants={itemVariants}
                      custom={index}
                    >
                      {isServices && servicesItems ? (
                        <div className="space-y-2">
                          <Link
                            href={item.href}
                            onClick={() => handleLinkClick(item.href)}
                            className={cn(
                              "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200",
                              isActive
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground/80 hover:text-foreground hover:bg-accent"
                            )}
                          >
                            {item.label}
                          </Link>
                          <div className="pl-4 space-y-1 border-l-2 border-border" role="menu" aria-label="Services submenu">
                            {servicesItems.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => handleLinkClick(service.href)}
                                className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors min-h-[44px] flex items-center"
                                role="menuitem"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => handleLinkClick(item.href)}
                          className={cn(
                            "block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 min-h-[44px] flex items-center",
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "text-foreground/80 hover:text-foreground hover:bg-accent"
                          )}
                          role="menuitem"
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
                <Button
                  ref={lastFocusableRef}
                  className="w-full"
                  size="lg"
                  onClick={() => {
                    handleLinkClick("/contact");
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

