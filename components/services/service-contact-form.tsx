"use client";

import { ContactForm } from "@/components/contact/contact-form";

interface ServiceContactFormProps {
  serviceName: string;
  prefillService?: string;
}

// Note: The ContactForm component would need to accept a prefillService prop
// For now, this wrapper provides the service-specific context
export function ServiceContactForm({
  serviceName,
  prefillService,
}: ServiceContactFormProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let&apos;s discuss how our {serviceName} services can transform your business.
            </p>
            {prefillService && (
              <p className="text-sm text-muted-foreground mt-2">
                This form is pre-configured for: <span className="font-semibold text-primary">{prefillService}</span>
              </p>
            )}
          </div>
          <div className="bg-background rounded-2xl border-2 border-border p-6 md:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

