"use client";

import * as React from "react";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  Clock,
  Lock,
  Brain,
  Code2,
  Smartphone,
  Globe,
  Cloud,
  Lightbulb,
  Shield,
} from "lucide-react";
import { siteConfig } from "@/lib/cms-client";

const QUICK_LINKS = [
  { label: "Capabilities", href: "/services" },
  { label: "Company", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
] as const;

const SERVICE_ICON_MAP: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  "AI Solutions & Implementation": Brain,
  "Custom Software Development": Code2,
  "Mobile App Development": Smartphone,
  "Web Development": Globe,
  "Cloud Solutions": Cloud,
  "Consulting & Strategy": Lightbulb,
  "Defense Technology": Shield,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = SERVICE_ICON_MAP[name] ?? Code2;
  return (
    <span className="svc-icon" aria-hidden>
      <Icon className="text-[var(--ttg-muted-lt)]" width={14} height={14} strokeWidth={1.8} />
    </span>
  );
}

/**
 * TTG Footer — design-system footer matching live site.
 * Newsletter, brand, quick links, services (config), contact (config). Requires app/ttg-design.css.
 */
export function TTGFooter() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const value = email.trim();
      if (!value) return;
      setSubmitted(true);
      setEmail("");
    },
    [email]
  );

  const { company, contact, navigation } = siteConfig;
  const services = navigation.footer.services;
  const socialLinks = siteConfig.socialLinks;

  const socialIconMap: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    Linkedin,
    Twitter,
    Github,
    Mail,
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="ttg-footer" role="contentinfo">
      <div className="ttg-footer__newsletter">
        <div className="ttg-footer__newsletter-inner">
          <div className="ttg-footer__nl-text">
            <h3>Stay Updated</h3>
            <p>Tech insights on AI, software, and innovation — delivered to your inbox.</p>
          </div>
          <div>
            <form
              className="ttg-footer__nl-form"
              onSubmit={handleSubmit}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email *"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={submitted}
              />
              <button type="submit" disabled={submitted}>
                {submitted ? "Subscribed" : "Subscribe"}
              </button>
            </form>
            <p className="ttg-footer__nl-privacy">
              <Lock width={12} height={12} strokeWidth={2} aria-hidden />
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      <div className="ttg-footer__main">
        <div className="ttg-footer__brand">
          <Link href="/" className="ttg-footer__brand-logo">
            <div className="ttg-footer__brand-icon">
              <Shield
                className="text-white"
                width={20}
                height={20}
                strokeWidth={1.5}
                fill="none"
                stroke="white"
              />
            </div>
            <span className="ttg-footer__brand-name">{company.name}</span>
          </Link>
          {company.tagline && (
            <p className="ttg-footer__tagline">{company.tagline}</p>
          )}
          <p className="ttg-footer__follow-label">Follow</p>
          <div className="ttg-footer__socials">
            {socialLinks.map((link) => {
              const Icon = socialIconMap[link.icon] ?? Mail;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <Icon width={16} height={16} strokeWidth={2} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="ttg-footer__col">
          <h4 className="ttg-footer__col-title">Quick Links</h4>
          <ul>
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ttg-footer__col">
          <h4 className="ttg-footer__col-title">Services</h4>
          <ul>
            {services.map((item) => (
              <li key={item.href} className="with-icon">
                <ServiceIcon name={item.name} />
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ttg-footer__col">
          <h4 className="ttg-footer__col-title">Contact</h4>
          <div className="ttg-footer__contact-item">
            <span className="ttg-footer__contact-icon">
              <Mail width={14} height={14} strokeWidth={1.8} aria-hidden />
            </span>
            <span className="ttg-footer__contact-text">
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </span>
          </div>
          <div className="ttg-footer__contact-item">
            <span className="ttg-footer__contact-icon">
              <Phone width={14} height={14} strokeWidth={1.8} aria-hidden />
            </span>
            <span className="ttg-footer__contact-text">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            </span>
          </div>
          <div className="ttg-footer__contact-item">
            <span className="ttg-footer__contact-icon">
              <MapPin width={14} height={14} strokeWidth={1.8} aria-hidden />
            </span>
            <span className="ttg-footer__contact-text">
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.city}, {contact.address.state}
            </span>
          </div>
          <div className="ttg-footer__contact-item">
            <span className="ttg-footer__contact-icon">
              <Clock width={14} height={14} strokeWidth={1.8} aria-hidden />
            </span>
            <span className="ttg-footer__contact-text">
              {contact.businessHours.weekdays}
              {contact.businessHours.weekends && (
                <>
                  <br />
                  {contact.businessHours.weekends}
                </>
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="ttg-footer__bottom">
        <div className="ttg-footer__bottom-inner">
          <p className="ttg-footer__copy">© {currentYear} {company.name}</p>
          <nav className="ttg-footer__legal" aria-label="Legal links">
            {LEGAL_LINKS.map((item, i) => (
              <React.Fragment key={item.href}>
                {i > 0 && <span>•</span>}
                <Link href={item.href}>{item.label}</Link>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
