"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/cms-client";

interface SocialIconProps {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
  brandColor?: string;
}

function SocialIcon({ href, icon: Icon, label, brandColor }: SocialIconProps) {
  const IconComponent = Icon as React.ComponentType<any>;
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-lg",
          "bg-muted hover:bg-primary/10 transition-all duration-300",
          "border border-border hover:border-primary/30",
          "group relative overflow-hidden"
        )}
        aria-label={label}
        style={brandColor ? ({ "--icon-color": brandColor } as React.CSSProperties) : undefined}
      >
        <div
          className={cn(
            "transition-colors duration-300",
            brandColor ? "" : "text-muted-foreground dark:text-foreground/80 group-hover:text-primary dark:group-hover:text-primary"
          )}
          style={brandColor ? { color: brandColor } : undefined}
        >
          <Icon className="h-5 w-5 stroke-current dark:stroke-current" strokeWidth={2} />
        </div>
        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100"
          initial={false}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  );
}

export function SocialIcons() {
  const socialLinks = siteConfig.socialLinks;

  const iconMap: Record<string, React.ComponentType<any>> = {
    Linkedin,
    Twitter,
    Github,
    Mail,
  };

  const brandColors: Record<string, string> = {
    Linkedin: "#0077B5",
    Twitter: "#1DA1F2",
    Github: "#181717",
    Mail: "#EA4335",
  };

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon] || Mail;
        const brandColor = brandColors[link.icon];

        return (
          <SocialIcon
            key={link.name}
            href={link.href}
            icon={Icon}
            label={link.name}
            brandColor={brandColor}
          />
        );
      })}
    </div>
  );
}

