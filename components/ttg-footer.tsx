import * as React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Brain,
  Code2,
  Smartphone,
  Globe,
  Cloud,
  Lightbulb,
  Shield,
  Cpu,
} from "lucide-react";
import { siteConfig } from "@/lib/cms-client";
import { TrustMark } from "@/components/trust-mark";

const QUICK_LINKS = [
  { label: "Capabilities", href: "/services" },
  { label: "Company", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/blog" },
] as const;

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Security", href: "/security" },
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
  "Secure & Defense-Adjacent Systems": Shield,
  "Robotics & Edge AI": Cpu,
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
 * TTG Footer — brand, quick links, services, contact. Requires app/ttg-design.css.
 */
export function TTGFooter() {
  const { company, contact, navigation } = siteConfig;
  const services = navigation.footer.services;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="ttg-footer" role="contentinfo">
      <div className="ttg-footer__main">
        <div className="ttg-footer__brand">
          <Link href="/" prefetch className="ttg-footer__brand-logo" aria-label={`${company.name}, home`}>
            <span className="ttg-footer__brand-icon" aria-hidden>
              <TrustMark size={40} tone="gold-gradient" showCrosshair={false} showBrackets={false} />
            </span>
            <span className="ttg-footer__brand-name">{company.name}</span>
          </Link>
          {company.tagline && (
            <p className="ttg-footer__tagline">{company.tagline}</p>
          )}
          <Link
            href="/contact"
            prefetch
            className="mt-8 flex max-w-[280px] items-start gap-3 no-underline"
            aria-label="Trust Dynamics, our autonomous systems division. Briefings by request."
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/trust-dynamics-mark-gold.svg"
              alt=""
              width={28}
              height={28}
              className="mt-[1px] h-7 w-7 shrink-0"
            />
            <span className="ttg-footer__tagline">
              Trust Dynamics — our autonomous systems division. Briefings by
              request.
            </span>
          </Link>
        </div>

        <div className="ttg-footer__col">
          <h4 className="ttg-footer__col-title">Quick Links</h4>
          <ul>
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} prefetch>{label}</Link>
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
                <Link href={item.href} prefetch>{item.name}</Link>
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
              <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>{contact.phone}</a>
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
          <p className="ttg-footer__copy">
            © {currentYear} TTG Trust Dynamics. {company.name} is a brand of TTG
            Trust Dynamics, a sole proprietorship registered in Ghana.
          </p>
          <nav className="ttg-footer__legal" aria-label="Legal links">
            {LEGAL_LINKS.map((item, i) => (
              <React.Fragment key={item.href}>
                {i > 0 && <span>•</span>}
                <Link href={item.href} prefetch>{item.label}</Link>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
