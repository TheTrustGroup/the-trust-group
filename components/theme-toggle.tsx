"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn("min-w-[44px] min-h-[44px]", className)}
        aria-label="Toggle theme"
        disabled
      >
        <div className="h-5 w-5" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "min-w-[44px] min-h-[44px] relative overflow-hidden",
          "hover:bg-muted/50 transition-colors duration-200",
          className
        )}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Sun className="h-5 w-5 text-foreground" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{
            rotate: isDark ? 0 : -180,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Moon className="h-5 w-5 text-foreground" />
        </motion.div>
      </Button>
    </motion.div>
  );
}

