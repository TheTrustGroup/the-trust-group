"use client";

import * as React from "react";
import Link from "next/link";
import {
  Heart,
  ArrowUp,
  MapPin,
  Mail,
  Phone,
  Clock,
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
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border">
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Main Footer Content */}
      <div className="relative bg-muted/20">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10 sm:py-12 md:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 items-start">
            {/* Column 1: Logo, Tagline, Social */}
            <div className="space-y-5">
              <Link href="/" className="inline-flex items-center group">
                <Logo variant="full" size="md" className="group-hover:opacity-90 transition-opacity duration-200" showText={true} />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {siteConfig.company.tagline}
              </p>
              <div>
                <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
                <SocialIcons />
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group min-h-[36px]"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-primary transition-all duration-200 mr-0 group-hover:mr-2 flex-shrink-0" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-5">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group min-h-[36px]"
                    >
                      <ServiceIcon name={service.name} />
                      <span className="flex-1">{service.name}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary hidden sm:inline">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-5">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                  </div>
                  <address className="text-sm text-muted-foreground not-italic leading-relaxed">
                    {contactInfo.address.line1}
                    {contactInfo.address.line2 && (
                      <>
                        <br />
                        {contactInfo.address.line2}
                      </>
                    )}
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
                      <Mail className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
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
                      <Phone className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                    </div>
                    <span className="group-hover:underline">{contactInfo.phone}</span>
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{contactInfo.businessHours.weekdays}</p>
                    {contactInfo.businessHours.weekends && <p>{contactInfo.businessHours.weekends}</p>}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-left order-3 md:order-1">
              <p>© {currentYear} The Trust Group. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm order-2">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors px-2 py-1"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors px-2 py-1"
              >
                Terms
              </Link>
              <span className="text-muted-foreground/50">•</span>
              <Link
                href="/cookies"
                className="text-muted-foreground hover:text-primary transition-colors px-2 py-1"
              >
                Cookies
              </Link>
            </div>

            {/* Made with Love & Back to Top */}
            <div className="flex items-center gap-4 order-1 md:order-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-error fill-error" />
                <span className="hidden sm:inline">by The Trust Group</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => smoothScrollToTop()}
                className="rounded-full w-9 h-9 border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

