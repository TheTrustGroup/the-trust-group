"use client";

import * as React from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
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
  { name: "Portfolio", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

const currentYear = new Date().getFullYear();

export function EnhancedFooter() {
  return (
    <footer className="relative bg-background dark:bg-background border-t border-hairline dark:border-hairline">
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Main Footer Content — compact, sleek */}
      <div className="relative">
        <div className="relative z-10 container mx-auto container-padding-apple max-w-7xl py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
            {/* Column 1: Logo, Tagline, Social */}
            <div className="space-y-3">
              <Link href="/" className="inline-flex items-center group">
                <Logo variant="full" size="sm" className="group-hover:opacity-90 transition-opacity duration-200" showText={true} />
              </Link>
              <p className="text-xs text-medium-contrast leading-snug">
                {siteConfig.company.tagline}
              </p>
              <div>
                <p className="text-xs font-medium text-high-contrast mb-2 uppercase tracking-wider">Follow</p>
                <SocialIcons />
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-xs font-semibold text-high-contrast mb-3 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-1.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center py-1 group"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="text-xs font-semibold text-high-contrast mb-3 uppercase tracking-wider">Services</h4>
              <ul className="space-y-1.5">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-xs text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 flex items-center gap-2 group py-1"
                    >
                      <ServiceIcon name={service.name} />
                      <span className="flex-1">{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact — Email → Phone → Address → Hours */}
            <div>
              <h4 className="text-xs font-semibold text-high-contrast mb-3 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href={`mailto:${contactInfo.email}`}
                    className="text-xs text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2.5 group py-1"
                  >
                    <div className="w-4 h-4 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-3 w-3 text-primary dark:text-primary" strokeWidth={2} />
                    </div>
                    <span className="group-hover:underline break-all">{contactInfo.email}</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="text-xs text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2.5 group py-1"
                  >
                    <div className="w-4 h-4 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-3 w-3 text-primary dark:text-primary" strokeWidth={2} />
                    </div>
                    <span className="group-hover:underline">{contactInfo.phone}</span>
                  </Link>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-3 w-3 text-primary dark:text-primary" strokeWidth={2} />
                  </div>
                  <address className="text-xs text-medium-contrast not-italic leading-snug">
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
                <li className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-3 w-3 text-primary dark:text-primary" strokeWidth={2} />
                  </div>
                  <p className="text-xs text-medium-contrast leading-tight">
                    Mon–Fri 9am–6pm GMT · Sat 10am–2pm GMT
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — compact */}
      <div className="relative border-t border-hairline dark:border-hairline bg-background/50 dark:bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto container-padding-apple py-4 md:py-5">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs">
              <p className="text-medium-contrast dark:text-medium-contrast font-normal tracking-tight">
                © {currentYear} The Trust Group
              </p>
              
              <div className="flex items-center justify-center gap-2 text-xs">
                <Link
                  href="/privacy"
                  className="text-medium-contrast dark:text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 font-normal tracking-tight"
                >
                  Privacy Policy
                </Link>
                <span className="text-medium-contrast/40 dark:text-medium-contrast/50">•</span>
                <Link
                  href="/terms"
                  className="text-medium-contrast dark:text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 font-normal tracking-tight"
                >
                  Terms
                </Link>
                <span className="text-medium-contrast/40 dark:text-medium-contrast/50">•</span>
                <Link
                  href="/cookies"
                  className="text-medium-contrast dark:text-medium-contrast hover:text-primary dark:hover:text-primary transition-colors duration-200 font-normal tracking-tight"
                >
                  Cookies
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

