"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Clock,
  Brain,
  Code,
  Smartphone,
  Globe,
  Cloud,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { smoothScrollToTop } from "@/lib/smooth-scroll";
import { siteConfig } from "@/lib/cms-client";
import { Logo } from "@/components/logo";
import { NewsletterSection } from "./newsletter-section";
import { SocialIcons } from "./social-icons";
import { ServiceIcon } from "./service-icons";
import { cn } from "@/lib/utils";

const services = siteConfig.navigation.footer.services;
const companyLinks = siteConfig.navigation.footer.company;
const contactInfo = siteConfig.contact;

const quickLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

const currentYear = new Date().getFullYear();

export function EnhancedFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-background via-secondary/20 to-secondary/40 border-t border-border">
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Wave Separator */}
      <div className="relative h-8 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 Q300,40 600,20 T1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-secondary/40"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative bg-secondary/30 backdrop-blur-sm">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(0, 102, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(0, 184, 230, 0.1) 0%, transparent 50%)
              `,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(0, 102, 255, 0.05) 1px, transparent 1px),
                linear-gradient(rgba(0, 102, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Column 1: Logo, Tagline, Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Link href="/" className="inline-flex items-center group">
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Logo variant="full" size="md" className="group-hover:opacity-90 transition-opacity" showText={true} />
                </motion.div>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed break-words">
                {siteConfig.company.tagline}
              </p>
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
                <div className="flex items-center justify-start">
                  <SocialIcons />
                </div>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-base font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-sm text-muted-foreground hover:text-primary",
                        "transition-all duration-200 flex items-center group",
                        "min-h-[32px] break-words"
                      )}
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2 flex-shrink-0" />
                      <span className="truncate">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Services with Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-base font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className={cn(
                        "text-sm text-muted-foreground hover:text-primary",
                        "transition-all duration-200 flex items-center gap-3 group",
                        "min-h-[32px]"
                      )}
                    >
                      <ServiceIcon name={service.name} />
                      <span className="flex-1 truncate break-words">{service.name}</span>
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0"
                      >
                        →
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-base font-semibold text-foreground mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-primary stroke-current" strokeWidth={2} fill="none" />
                  </div>
                  <address className="text-sm text-muted-foreground not-italic leading-relaxed break-words">
                    {contactInfo.address.line1}
                    <br />
                    {contactInfo.address.line2}
                    <br />
                    {contactInfo.address.city}, {contactInfo.address.state}
                  </address>
                </li>
                <li>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-3.5 w-3.5 text-primary stroke-current" strokeWidth={2} fill="none" />
                    </div>
                    <span className="group-hover:underline break-all">{contactInfo.email}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 group"
                  >
                    <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3.5 w-3.5 text-primary stroke-current" strokeWidth={2} fill="none" />
                    </div>
                    <span className="group-hover:underline break-words">{contactInfo.phone}</span>
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-3.5 w-3.5 text-primary stroke-current" strokeWidth={2} fill="none" />
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{contactInfo.businessHours.weekdays}</p>
                    <p>{contactInfo.businessHours.weekends}</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-border/50 bg-secondary/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>© {currentYear} The Trust Group. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors min-h-[32px] flex items-center px-2"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors min-h-[32px] flex items-center px-2"
              >
                Terms of Service
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-primary transition-colors min-h-[32px] flex items-center px-2"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Made with Love */}
            <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Made with</span>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="h-4 w-4 text-error fill-error" />
                </motion.span>
                <span>by The Trust Group</span>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-muted-foreground/70 italic"
              >
                Made by humans (and some AI)
              </motion.p>
            </div>

            {/* Back to Top Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => smoothScrollToTop()}
                className="rounded-full w-10 h-10 border border-border hover:border-primary hover:bg-primary/10"
                aria-label="Back to top"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

