"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn("text-center mb-12 md:mb-16", className)}
    >
      <h2 className="text-headline mb-4 md:mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-body text-medium-contrast max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
