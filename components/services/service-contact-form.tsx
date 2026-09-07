"use client";

import { ContactForm } from "@/components/contact/contact-form";
import { TTGSectionHeading } from "@/components/ttg/section-heading";

interface ServiceContactFormProps {
  serviceName: string;
  prefillService?: string;
}

export function ServiceContactForm({
  serviceName,
  prefillService,
}: ServiceContactFormProps) {
  return (
    <section
      className="ttg-section border-t border-[var(--ttg-border)] px-6 py-20 md:py-[100px] lg:px-16"
      style={{ background: "var(--ttg-bg)" }}
    >
      <TTGSectionHeading
        title="Start a conversation"
        description={`Discuss how ${serviceName} can support your requirements. Confidential, no obligation.`}
      />
      {prefillService && (
        <p className="ttg-label mb-8">Prefill: {prefillService}</p>
      )}
      <div className="mx-auto max-w-[640px] border border-[var(--ttg-border)] bg-[var(--ttg-bg-white)] p-6 md:p-10">
        <ContactForm defaultService={prefillService ?? serviceName} />
      </div>
    </section>
  );
}
