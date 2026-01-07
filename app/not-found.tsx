"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

// Note: Metadata export doesn't work in "use client" components
// This is handled by Next.js automatically for not-found pages
// But we can still ensure proper heading hierarchy

export default function NotFound() {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <AnimatedSection variant="default" size="lg" className="relative z-10">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* 404 with animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8"
          >
            <h1 className="text-9xl md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-[length:200%_auto]">
              404
            </h1>
          </motion.div>

          {/* Floating rocket */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <Rocket className="h-24 w-24 text-primary dark:text-primary mx-auto stroke-current" strokeWidth={2} />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Oops! Page Not Found
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground mb-8"
          >
            Looks like this page took a wrong turn and got lost in the digital universe. 
            Don&apos;t worry, even the best developers encounter 404s!
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="h-5 w-5 mr-2 stroke-current dark:stroke-current" strokeWidth={2} />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                <Search className="h-5 w-5 mr-2 stroke-current dark:stroke-current" strokeWidth={2} />
                Explore Services
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 mr-2 stroke-current dark:stroke-current" strokeWidth={2} />
              Go Back
            </Button>
          </motion.div>

          {/* Fun fact */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-4 rounded-lg bg-muted/50 border border-border"
          >
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Fun fact:</span>{" "}
              The 404 error got its name from room 404 at CERN, where the web was born. 
              The room didn&apos;t exist, just like this page!
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

