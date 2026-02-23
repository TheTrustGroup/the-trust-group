"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatedSection } from "./animated-section";
import { motion } from "framer-motion";
import { faqEntries, condensedFAQCount } from "@/lib/faq-data";

const topFAQs = faqEntries.slice(0, condensedFAQCount);

export function FAQSectionCondensed() {
  return (
    <AnimatedSection variant="default" size="default" animation="fade-in" className="border-t border-hairline">
      <div className="max-w-6xl mx-auto container-padding-apple section-padding-apple">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-headline mb-4 md:mb-6">
            Common Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-12 lg:gap-x-20 lg:gap-y-16">
          {topFAQs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="space-y-3 md:space-y-4"
            >
              <h3 className="text-lg md:text-xl font-semibold text-high-contrast dark:text-high-contrast leading-tight tracking-tight">
                {faq.question}
              </h3>
              <p className="text-base md:text-lg text-medium-contrast dark:text-medium-contrast leading-relaxed">
                {faq.answer}
                {faq.ctaLink && (
                  <>
                    {" "}
                    <Link href={faq.ctaLink.href} className="text-primary hover:underline font-medium">
                      {faq.ctaLink.label}
                    </Link>
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </div>

        {faqEntries.length > condensedFAQCount && (
          <div className="text-center mt-12">
            <Link href="/faq" className="text-sm text-primary hover:underline">
              View all FAQs →
            </Link>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
