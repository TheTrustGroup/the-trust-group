import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us",
  description: "Get in touch with The Trust Group. We're here to help with your AI solutions, software development, and technology needs. Contact us today!",
  keywords: ["contact", "get in touch", "The Trust Group", "software development contact", "AI solutions contact"],
  url: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-4 md:pt-8">
      <ContactSection />
    </div>
  );
}

