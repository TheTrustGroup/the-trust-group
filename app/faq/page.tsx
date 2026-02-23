import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata, generateBreadcrumbs } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/seo-utils";
import { FAQSection } from "@/components/ui/faq-section";
import { faqEntries } from "@/lib/faq-data";

export const metadata: Metadata = generateSEOMetadata({
  title: "Frequently Asked Questions",
  description:
    "Common questions about The Trust Group: project timelines, industries we serve, technologies, how we start projects, post-launch support, and mission-critical engineering.",
  keywords: [
    "FAQ",
    "project timeline",
    "enterprise software",
    "mission-critical",
    "NDA",
    "discovery phase",
    "The Trust Group",
  ],
  url: "/faq",
});

export default function FAQPage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", url: "/" },
    { name: "FAQ", url: "/faq" },
  ]);

  const faqSchema = generateFAQSchema(
    faqEntries.map((faq) => ({
      question: faq.question,
      answer: faq.ctaLink ? `${faq.answer} ${faq.ctaLink.label}` : faq.answer,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <div className="min-h-screen border-t border-hairline">
        <section className="container-padding-apple section-padding-apple">
          <FAQSection />
        </section>
      </div>
    </>
  );
}
