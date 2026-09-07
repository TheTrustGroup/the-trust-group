import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata: Metadata = generateSEOMetadata({
  title: "Cookie Policy",
  description:
    "Cookie Policy for The Trust Group. Learn about how we use cookies and similar technologies on our website.",
  keywords: ["cookie policy", "cookies", "The Trust Group"],
  url: "/cookies",
});

const SECTIONS = [
  {
    title: "1. What Are Cookies",
    body: (
      <p>
        Cookies are small text files that are placed on your computer or mobile
        device when you visit a website. They are widely used to make websites
        work more efficiently and provide information to the website owners.
      </p>
    ),
  },
  {
    title: "2. How We Use Cookies",
    body: (
      <>
        <p>We use cookies for the following purposes:</p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> Required for the website to
            function properly
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Help us understand how visitors
            interact with our website
          </li>
          <li>
            <strong>Preference Cookies:</strong> Remember your preferences and
            settings
          </li>
          <li>
            <strong>Marketing Cookies:</strong> Used to deliver relevant
            advertisements (if applicable)
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Third-Party Cookies",
    body: (
      <p>
        In addition to our own cookies, we may also use various third-party
        cookies to report usage statistics of the website and deliver
        advertisements on and through the website.
      </p>
    ),
  },
  {
    title: "4. Managing Cookies",
    body: (
      <p>
        You can control and/or delete cookies as you wish. You can delete all
        cookies that are already on your computer and you can set most browsers
        to prevent them from being placed. However, if you do this, you may have
        to manually adjust some preferences every time you visit a site and some
        services and functionalities may not work.
      </p>
    ),
  },
  {
    title: "5. Contact Us",
    body: (
      <>
        <p>
          If you have any questions about our use of cookies, please contact us
          at:
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

export default function CookiesPage() {
  const updated = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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
          Cookie Policy
        </h1>
        <p className="ttg-body mb-14 text-[13px]">Last updated: {updated}</p>
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
