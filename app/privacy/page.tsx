import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for The Trust Group. Learn how we collect, use, and protect your personal information.",
  keywords: ["privacy policy", "data protection", "The Trust Group"],
  url: "/privacy",
});

const LAST_UPDATED = "October 9, 2026";

const SECTIONS = [
  {
    title: "1. Introduction",
    body: (
      <>
        <p>
          This website is operated by The Trust Group, operated by a sole
          proprietor trading as Trust Dynamics, Accra, Ghana (&quot;The Trust
          Group,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). The
          Trust Group is the data controller for personal information collected
          through this website.
        </p>
        <p>
          We are committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information
          when you visit our website thetrustgroupsolutions.com.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We Collect",
    body: (
      <>
        <p>We may collect information about you in a variety of ways:</p>
        <ul>
          <li>
            <strong>Personal Data:</strong> Name, email address, phone number,
            company name, and other information you voluntarily provide when
            contacting us or using our services.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you access and
            use our website, including IP address, browser type, pages visited,
            and time spent on pages.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies and similar tracking
            technologies to track activity on our website and hold certain
            information.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you marketing communications (with your consent)</li>
          <li>Analyze website usage and trends</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Data Security",
    body: (
      <p>
        We implement appropriate technical and organizational security measures
        to protect your personal information. However, no method of transmission
        over the Internet or electronic storage is 100% secure.
      </p>
    ),
  },
  {
    title: "5. Your Rights",
    body: (
      <>
        <p>You have the right to:</p>
        <ul>
          <li>Access and receive a copy of your personal data</li>
          <li>Rectify inaccurate personal data</li>
          <li>Request deletion of your personal data</li>
          <li>Object to processing of your personal data</li>
          <li>Request restriction of processing</li>
          <li>Data portability</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Contact Us",
    body: (
      <>
        <p>
          If you have questions about this Privacy Policy, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> info@thetrustgroupsolutions.com
          <br />
          <strong>Address:</strong> 1, Nortei Abio St, Airport Residential Area,
          Accra, Greater Accra, 00233, Ghana
        </p>
      </>
    ),
  },
] as const;

export default function PrivacyPage() {
  return (
    <article
      className="min-h-screen px-6 py-16 lg:px-16 lg:py-24"
      style={{ background: "var(--ttg-bg)" }}
    >
      <div className="mx-auto max-w-[720px]">
        <h1
          className="ttg-serif mb-4 text-[clamp(36px,5vw,56px)] leading-[1.02]"
          style={{ color: "var(--ttg-navy)" }}
        >
          Privacy Policy
        </h1>
        <p className="ttg-body mb-14 text-[13px]">Last updated: {LAST_UPDATED}</p>
        <div className="space-y-0">
          {SECTIONS.map((section) => (
            <section
              key={section.title}
              className="border-t border-[var(--ttg-border)] py-10"
            >
              <h2
                className="ttg-serif mb-5 text-[24px] leading-[1.15]"
                style={{ color: "var(--ttg-navy)" }}
              >
                {section.title}
              </h2>
              <div className="ttg-body space-y-4 [&>ul]:list-disc [&>ul]:space-y-2 [&>ul]:pl-5">
                {section.body}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
