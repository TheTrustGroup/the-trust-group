import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/cms-client";

export const metadata: Metadata = generateSEOMetadata({
  title: "Security & Handling of Sensitive Work",
  description:
    "How The Trust Group handles client confidentiality, sensitive material, and vulnerability reports. NDA-first engagement, no public disclosure of client identity.",
  keywords: ["security", "confidentiality", "NDA", "responsible disclosure", "The Trust Group"],
  url: "/security",
});

const SECURITY_TXT_PATH = "/.well-known/security.txt";

export default function SecurityPage() {
  const email = siteConfig.contact.email;

  const sections = [
    {
      title: "Confidential by default",
      body: (
        <>
          <p>
            We do not publish client names, logos, screenshots, or production URLs
            without explicit written permission. Public references to past work are
            limited to industry context and outcome shape, never enough to
            identify the organization.
          </p>
          <p>
            Architecture, metrics, and references are shared only in a private
            briefing after mutual confidentiality is in place.
          </p>
        </>
      ),
    },
    {
      title: "How an engagement begins",
      body: (
        <>
          <p>
            An NDA is available from the first conversation. For sensitive
            or proprietary work we operate under NDA before
            any technical detail is exchanged.
          </p>
          <p>
            Do not send sensitive material through the web form. Use the form or
            email to request a briefing; we will agree a secure channel for
            documents and access before anything confidential moves.
          </p>
          <p>We respond to briefing requests within 24 hours.</p>
        </>
      ),
    },
    {
      title: "This website",
      body: (
        <>
          <p>
            The site is served over HTTPS with a strict Content Security Policy,
            HSTS, and framing disabled. Contact form submissions are used only to
            respond to your request. Analytics, where enabled, is limited to
            aggregate usage measurement; see the{" "}
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/cookies" className="underline underline-offset-4">
              Cookie Policy
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      title: "Reporting a vulnerability",
      body: (
        <>
          <p>
            If you believe you have found a security issue in this website or in
            a system we operate, email{" "}
            <a href={`mailto:${email}`} className="underline underline-offset-4">
              {email}
            </a>{" "}
            with &ldquo;Security&rdquo; in the subject. Include the affected URL or
            component, steps to reproduce, and impact. Machine-readable contact
            details are published at{" "}
            <a href={SECURITY_TXT_PATH} className="underline underline-offset-4">
              {SECURITY_TXT_PATH}
            </a>
            .
          </p>
          <p>
            Please do not test against client systems, access data that is not
            yours, or disrupt service. We will acknowledge your report and keep
            you informed of remediation.
          </p>
        </>
      ),
    },
  ] as const;

  return (
    <article
      className="min-h-screen px-6 py-16 lg:px-16 lg:py-24"
      style={{ background: "var(--ttg-bg)" }}
    >
      <div className="mx-auto max-w-[720px]">
        <p
          className="mb-6 text-[10px] uppercase tracking-[0.18em]"
          style={{ fontFamily: "var(--ttg-font-sans)", color: "var(--ttg-muted)" }}
        >
          Security
        </p>
        <h1
          className="ttg-serif mb-6 text-[clamp(36px,5vw,56px)] leading-[1.02] tracking-[-0.02em]"
          style={{ color: "var(--ttg-navy)" }}
        >
          How we handle sensitive work.
        </h1>
        <p className="ttg-body mb-14 max-w-[560px]">
          The operating rules behind the phrase &ldquo;mission-critical.&rdquo;
          Short, and the same for every client.
        </p>
        <div className="space-y-0">
          {sections.map((section) => (
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
              <div className="ttg-body space-y-4">{section.body}</div>
            </section>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--ttg-border)] pt-10 sm:flex-row sm:items-center sm:gap-8">
          <Link href="/contact" className="ttg-btn-pill">
            Request a Private Briefing
          </Link>
          <a href={`mailto:${email}`} className="ttg-text-link ttg-text-link--plain">
            or email {email}
          </a>
        </div>
      </div>
    </article>
  );
}
