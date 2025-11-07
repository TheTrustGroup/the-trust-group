"use client";

import Link from "next/link";
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Mail,
  Building2,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { siteConfig } from "@/lib/cms-client";
import * as Icons from "lucide-react";
import { Logo } from "@/components/logo";

// Helper to get icon component by name
function getIconComponent(iconName: string): React.ComponentType<any> {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<any>>)[iconName];
  return IconComponent || Icons.Mail; // Fallback to Mail icon
}

const services = siteConfig.navigation.footer.services;
const companyLinks = siteConfig.navigation.footer.company;
const subsidiaries = siteConfig.navigation.footer.subsidiaries;
const socialLinks = siteConfig.socialLinks.map((link) => ({
  ...link,
  icon: getIconComponent(link.icon),
}));

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="bg-secondary/5 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Column 1 - Company */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div>
              <Link href="/" className="inline-flex items-center mb-4">
                <Logo variant="full" size="lg" className="hover:opacity-80 transition-opacity" />
              </Link>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Building tomorrow&apos;s technology today. Leading innovation across multiple tech ventures.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Connect With Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="icon"
                      className="rounded-lg min-w-[44px] min-h-[44px] touch-manipulation"
                      asChild
                    >
                      <a
                        href={social.href}
                        target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div className="sm:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground active:text-primary transition-colors text-sm min-h-[44px] flex items-center touch-manipulation"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="sm:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground active:text-primary transition-colors text-sm min-h-[44px] flex items-center touch-manipulation"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Subsidiary Companies */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold text-foreground mb-4">Our Ecosystem</h4>
            <ul className="space-y-3 mb-6">
              {subsidiaries.map((subsidiary) => (
                <li key={subsidiary.name}>
                  <Link
                    href={subsidiary.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2"
                  >
                    {subsidiary.name}
                    {subsidiary.status === "coming-soon" && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              variant="outline"
              size="sm"
              className="w-full min-h-[44px] touch-manipulation"
              asChild
            >
              <Link href="/ecosystem">
                Join Our Ecosystem
                <Building2 className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p>
                © {currentYear} The Trust Group. All rights reserved.
              </p>
            </div>

            {/* Built With */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-error fill-error" />
              <span>by The Trust Group</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground active:text-primary transition-colors min-h-[44px] flex items-center px-2 touch-manipulation"
              >
                Privacy
              </Link>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <Link
                href="/terms"
                className="text-muted-foreground active:text-primary transition-colors min-h-[44px] flex items-center px-2 touch-manipulation"
              >
                Terms
              </Link>
              <span className="text-muted-foreground hidden sm:inline">•</span>
              <Link
                href="/cookies"
                className="text-muted-foreground active:text-primary transition-colors min-h-[44px] flex items-center px-2 touch-manipulation"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

