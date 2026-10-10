import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for The Trust Group. Read our terms and conditions for using our website and services.",
  keywords: ["terms of service", "terms and conditions", "The Trust Group"],
  url: "/terms",
});

const LAST_UPDATED = "October 9, 2026";

const SECTIONS = [
  {
    title: "1. Agreement to Terms",
    body: (
      <>
        <p>
          This website and the services described on it are provided by The
          Trust Group, operated by a sole proprietor trading as Trust Dynamics,
          Accra, Ghana (&quot;The Trust Group,&quot; &quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing or using The Trust Group&apos;s website and services, you
          agree to be bound by these Terms of Service and all applicable laws
          and regulations. If you do not agree with any of these terms, you are
          prohibited from using or accessing this site.
        </p>
      </>
    ),
  },
  {
    title: "2. Use License",
    body: (
      <>
        <p>
          Permission is granted to temporarily access the materials on The Trust
          Group&apos;s website for personal, non-commercial transitory viewing
          only. This is the grant of a license, not a transfer of title, and
          under this license you may not:
        </p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>
            Use the materials for any commercial purpose or for any public
            display
          </li>
          <li>
            Attempt to reverse engineer any software contained on the website
          </li>
          <li>
            Remove any copyright or other proprietary notations from the
            materials
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Services",
    body: (
      <p>
        The Trust Group provides AI solutions, software development, and
        technology consulting services. All services are provided subject to
        separate service agreements that will be executed between you and The
        Trust Group.
      </p>
    ),
  },
  {
    title: "4. Disclaimer",
    body: (
      <p>
        The materials on The Trust Group&apos;s website are provided on an
        &apos;as is&apos; basis. The Trust Group makes no warranties, expressed
        or implied, and hereby disclaims and negates all other warranties
        including, without limitation, implied warranties or conditions of
        merchantability, fitness for a particular purpose, or non-infringement
        of intellectual property or other violation of rights.
      </p>
    ),
  },
  {
    title: "5. Limitations",
    body: (
      <p>
        In no event shall The Trust Group or its suppliers be liable for any
        damages (including, without limitation, damages for loss of data or
        profit, or due to business interruption) arising out of the use or
        inability to use the materials on The Trust Group&apos;s website.
      </p>
    ),
  },
  {
    title: "6. Contact Information",
    body: (
      <>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:
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

export default function TermsPage() {
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
          Terms of Service
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
