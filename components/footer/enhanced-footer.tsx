"use client";

import * as React from "react";
import Link from "next/link";
import {
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
    <footer className="relative bg-background dark:bg-background border-t border-hairline dark:border-hairline">
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Main Footer Content */}
      <div className="relative">
        <div className="relative z-10 container mx-auto container-padding-apple max-w-7xl section-padding-apple-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-apple-lg items-start">
            {/* Column 1: Logo, Tagline, Social */}
            <div className="space-y-5">
              <Link href="/" className="inline-flex items-center group">
                <Logo variant="full" size="md" className="group-hover:opacity-90 transition-opacity duration-200" showText={true} />
              </Link>
              <p className="text-sm text-medium-contrast">
                {siteConfig.company.tagline}
              </p>
              <div>
                <p className="text-sm font-medium text-high-contrast mb-3">Follow Us</p>
                <SocialIcons />
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-high-contrast mb-5">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center group min-h-[44px]"
              >
                <span>{link.name}</span>
              </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-sm font-semibold text-high-contrast mb-5">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-sm text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center gap-2 group min-h-[44px]"
                    >
                      <ServiceIcon name={service.name} />
                      <span className="flex-1">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-high-contrast mb-5">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-3.5 w-3.5 text-primary dark:text-primary" strokeWidth={2} />
                  </div>
                  <address className="text-sm text-medium-contrast not-italic">
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
                    className="text-sm text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-3 group min-h-[44px]"
                  >
                    <div className="w-5 h-5 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-3.5 w-3.5 text-primary dark:text-primary" strokeWidth={2} />
                    </div>
                    <span className="group-hover:underline break-all">{contactInfo.email}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-sm text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-3 group min-h-[44px]"
                  >
                    <div className="w-5 h-5 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3.5 w-3.5 text-primary dark:text-primary" strokeWidth={2} />
                    </div>
                    <span className="group-hover:underline">{contactInfo.phone}</span>
                  </Link>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-3.5 w-3.5 text-primary dark:text-primary" strokeWidth={2} />
                  </div>
                  <div className="text-sm text-medium-contrast space-y-1">
                    <p>{contactInfo.businessHours.weekdays}</p>
                    {contactInfo.businessHours.weekends && <p>{contactInfo.businessHours.weekends}</p>}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Minimal, Premium */}
      <div className="relative border-t border-hairline dark:border-hairline bg-background/50 dark:bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto container-padding-apple py-6 md:py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-medium-contrast text-center md:text-left">
              <p>© {currentYear} The Trust Group. All rights reserved.</p>
            </div>

            {/* Legal Links - Subtle hover interactions */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 px-2 py-1 min-h-[44px] flex items-center"
              >
                Privacy Policy
              </Link>
              <span className="text-medium-contrast/40 dark:text-medium-contrast/50">•</span>
              <Link
                href="/terms"
                className="text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 px-2 py-1 min-h-[44px] flex items-center"
              >
                Terms
              </Link>
              <span className="text-medium-contrast/40 dark:text-medium-contrast/50">•</span>
              <Link
                href="/cookies"
                className="text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 px-2 py-1 min-h-[44px] flex items-center"
              >
                Cookies
              </Link>
            </div>

            {/* Back to Top - Refined */}
            <div className="flex items-center justify-end">
              <button
                onClick={() => smoothScrollToTop()}
                className="rounded-full w-10 h-10 min-w-[44px] min-h-[44px] border border-hairline hover:border-primary dark:hover:border-primary/60 hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-200 flex items-center justify-center group"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4 text-medium-contrast group-hover:text-primary dark:group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

