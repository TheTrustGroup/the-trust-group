# Homepage Flow Implementation Guide
## Tailwind + React Structure for Optimal Flow

---

## 🎯 Key Changes Required

### 1. Reorder Sections in `app/page.tsx`

**Current Order:**
```tsx
Hero → Selected Work → Services → What We Do → Why Trust Us → Process → Testimonials → FAQ → CTA → Contact
```

**New Order:**
```tsx
Hero → Services → Selected Work → Why Trust Us → Contact → Process → FAQ → Testimonials
```

---

## 📝 Implementation Code

### Updated `app/page.tsx`

```tsx
import { Section, WhyTrustUs } from "@/components/ui";
import { HeroSection } from "@/components/hero";
import { ServicesSection } from "@/components/services";
import dynamic from "next/dynamic";
import { ProcessSectionSimplified } from "@/components/ui/process-section-simplified";
import { FAQSectionCondensed } from "@/components/ui/faq-section-condensed";

import { SelectedWork } from "@/components/portfolio";

// Lazy load heavy sections below the fold
const TestimonialsSectionLazy = dynamic(() => import("@/components/testimonials").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="min-h-[400px]" />
});
const ContactSectionLazy = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-[400px]" />
});

export default function Home() {
  return (
    <>
      {/* 1. Hero Section - Value proposition + Primary CTA */}
      <HeroSection />

      {/* 2. Services Section - What we offer (3 featured) */}
      <ServicesSection maxItems={3} />

      {/* 3. Selected Work - Proof of capability */}
      <SelectedWork />

      {/* 4. Why Trust Us - Consolidated trust indicators */}
      <WhyTrustUs />

      {/* 5. Contact - Primary conversion point */}
      <ContactSectionLazy />

      {/* Below fold - Supporting content */}
      
      {/* 6. Process - Simplified version */}
      <ProcessSectionSimplified />

      {/* 7. FAQ - Condensed (4-5 questions) */}
      <FAQSectionCondensed />

      {/* 8. Testimonials - Full gallery (lazy loaded) */}
      <TestimonialsSectionLazy />
    </>
  );
}
```

**Key Changes:**
- ✅ Removed "What We Do" section (redundant with Services)
- ✅ Removed standalone CTA section (CTAs integrated into flow)
- ✅ Moved Contact section earlier (after Trust)
- ✅ Reordered: Services before Case Studies
- ✅ Added simplified Process and condensed FAQ components

---

### 2. Enhanced Hero with Trust Indicator

**Updated `components/hero/hero-section.tsx`:**

```tsx
"use client";

import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { useScrollGlass } from "@/lib/hooks/use-scroll-glass";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const isScrolled = useScrollGlass(50);

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
      <div className="relative z-10 w-full mx-auto container-padding-apple max-w-3xl section-padding-apple">
        <motion.div
          className={cn(
            "glass-container hero-glass rounded-2xl p-6 md:p-8 lg:p-10 text-center",
            isScrolled && "scrolled"
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Primary headline */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="text-headline font-semibold text-high-contrast mb-4 md:mb-5"
          >
            We build mission-critical systems organizations can rely on.
          </motion.h1>

          {/* Supporting subline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05, ease: [0.4, 0, 0.2, 1] }}
            className="text-body-medium text-medium-contrast mb-8 md:mb-10 max-w-2xl mx-auto"
          >
            Engineered for reliability, security, and long-term scale.
          </motion.p>

          {/* Subtle trust indicator - NEW */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-medium-contrast mb-8 md:mb-10"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Trusted by enterprise organizations</span>
            </span>
            <span className="hidden sm:inline text-border">•</span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary flex-shrink-0" />
              <span>Response within 24 hours</span>
            </span>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex justify-center"
          >
            <button 
              className="btn-apple btn-apple-primary px-8 md:px-10 py-3.5 md:py-4 min-h-[52px] md:min-h-[56px]"
              onClick={() => smoothScrollTo("contact", 80)}
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
```

**Key Changes:**
- ✅ Added subtle trust indicators below subline
- ✅ Mobile-responsive layout (stacked on mobile, inline on desktop)
- ✅ Smooth fade-in animation
- ✅ Reduced padding slightly for mobile optimization

---

### 3. Simplified Process Section

**New Component: `components/ui/process-section-simplified.tsx`:**

```tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "./animated-section";
import Link from "next/link";

const steps = [
  { number: "01", title: "Discovery", duration: "1-2 weeks" },
  { number: "02", title: "Design", duration: "2-3 weeks" },
  { number: "03", title: "Development", duration: "6-12 weeks" },
  { number: "04", title: "Launch", duration: "Ongoing" },
];

export function ProcessSectionSimplified() {
  return (
    <AnimatedSection variant="muted" size="default" animation="slide-up" className="border-t border-hairline">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-headline mb-4 md:mb-6">
          How We Work
        </h2>
        <p className="text-body text-medium-contrast max-w-2xl mx-auto mb-6">
          A systematic approach to delivering reliable systems.
        </p>
        <Link 
          href="/process" 
          className="text-sm text-primary hover:underline inline-flex items-center gap-1"
        >
          View detailed process
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-primary/20 mb-2">
              {step.number}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-1 text-high-contrast">
              {step.title}
            </h3>
            <p className="text-sm text-medium-contrast">{step.duration}</p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
```

**Key Features:**
- ✅ Simplified to 4 steps with numbers
- ✅ Visual timeline (grid layout)
- ✅ Link to detailed process page
- ✅ Mobile-optimized (2 columns on mobile, 4 on desktop)

---

### 4. Condensed FAQ Section

**New Component: `components/ui/faq-section-condensed.tsx`:**

```tsx
"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { AnimatedSection } from "./animated-section";
import { cn } from "@/lib/utils";
import Link from "next/link";

const topFAQs = [
  {
    question: "What types of systems do you build?",
    answer: "We help organizations build mission-critical AI systems, enterprise software, secure infrastructure, and defense applications. Built for reliability, security, and performance.",
  },
  {
    question: "How do you approach security and reliability?",
    answer: "Security and reliability are foundational. We implement defense-in-depth strategies, conduct threat modeling, perform security audits, and maintain compliance standards. We follow secure-by-design principles and meet standards including SOC 2, ISO 27001, and defense-specific frameworks.",
  },
  {
    question: "How do engagements typically begin?",
    answer: "Engagements start with a technical discovery phase where we assess requirements, constraints, and existing infrastructure. We provide a detailed technical proposal outlining architecture, approach, timeline, and resource allocation.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes. We help organizations maintain systems with 24/7 monitoring, incident response, security updates, performance optimization, and capacity management. For mission-critical systems, we provide dedicated on-call engineering support.",
  },
];

export function FAQSectionCondensed() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AnimatedSection variant="default" size="default" animation="fade-in" className="border-t border-hairline">
      <div className="max-w-3xl mx-auto container-padding-apple section-padding-apple">
        <div className="text-center mb-12">
          <h2 className="text-headline mb-4 md:mb-6">
            Common Questions
          </h2>
          <Link 
            href="/faq" 
            className="text-sm text-primary hover:underline inline-flex items-center gap-1"
          >
            View all FAQs
            <span>→</span>
          </Link>
        </div>

        <div className="space-y-4">
          {topFAQs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "border border-border rounded-lg transition-all duration-150",
                openIndex === index && "border-primary/30"
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={cn(
                  "w-full text-left p-6 md:p-8 transition-colors duration-150",
                  "hover:bg-muted/30",
                  openIndex === index && "bg-muted/20"
                )}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-start justify-between gap-6">
                  <h3 className="text-base md:text-lg font-semibold text-high-contrast leading-snug pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-150 flex-shrink-0 mt-0.5",
                      openIndex === index && "rotate-180"
                    )} 
                    strokeWidth={2}
                  />
                </div>
                
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-150 ease-out",
                    openIndex === index ? "max-h-[1000px] opacity-100 mt-6 pt-6 border-t border-border/50" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-sm md:text-base text-medium-contrast leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
```

**Key Features:**
- ✅ Reduced to 4 most common questions
- ✅ Link to full FAQ page
- ✅ Same accordion interaction as before
- ✅ Mobile-optimized spacing

---

### 5. Enhanced Services Section with Secondary CTA

**Updated `components/services/services-section.tsx`:**

```tsx
"use client";

import { PremiumServiceCard } from "./premium-service-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { StaggerGrid, StaggerItem } from "@/components/animations";
import { services } from "@/lib/cms-client";
import type { Service } from "@/data/types";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServicesSectionProps {
  servicesToShow?: Service[];
  maxItems?: number;
}

export function ServicesSection({ 
  servicesToShow, 
  maxItems = 3 
}: ServicesSectionProps = {}) {
  const displayedServices = servicesToShow || 
    services
      .filter(service => service.featured)
      .slice(0, maxItems)
      .concat(
        services
          .filter(service => !service.featured)
          .slice(0, Math.max(0, maxItems - services.filter(s => s.featured).length))
      )
      .slice(0, maxItems);

  return (
    <AnimatedSection 
      id="services" 
      variant="default" 
      size="default" 
      animation="slide-up"
      className="relative overflow-hidden border-t border-hairline"
    >
      <div className="relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-headline mb-4 md:mb-6">
            Solutions
          </h2>
          <p className="text-body text-medium-contrast max-w-2xl mx-auto">
            What we build.
          </p>
        </div>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-apple mb-8 md:mb-12">
          {displayedServices.map((service, index) => (
            <StaggerItem key={service.id || index}>
              <div className="relative">
                {service.featured && (
                  <div className="absolute -top-3 right-4 z-20 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-apple">
                    Strategic
                  </div>
                )}
                <PremiumServiceCard
                  serviceId={service.id}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  learnMoreHref={service.href || `/services/${service.id}`}
                  variant={service.variant}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Secondary CTA */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="btn-apple inline-flex items-center gap-2"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
```

**Key Changes:**
- ✅ Default `maxItems` changed to 3 (from 4)
- ✅ Added secondary CTA: "View all services"
- ✅ Mobile-optimized grid (1 col mobile, 2 tablet, 3 desktop)

---

### 6. Mobile-First Spacing Optimizations

**Update `app/apple-design-system.css`:**

```css
/* Mobile-first spacing adjustments */
@media (max-width: 768px) {
  .section-padding-apple {
    padding-top: 3rem; /* 48px - reduced from 4rem */
    padding-bottom: 3rem; /* 48px - reduced from 4rem */
  }

  .container-padding-apple {
    padding-left: 1rem; /* 16px */
    padding-right: 1rem; /* 16px */
  }

  .gap-apple {
    gap: 1rem; /* 16px - reduced from 1.5rem */
  }
}

@media (min-width: 769px) {
  .section-padding-apple {
    padding-top: 4rem; /* 64px */
    padding-bottom: 4rem; /* 64px */
  }

  .container-padding-apple {
    padding-left: 1.5rem; /* 24px */
    padding-right: 1.5rem; /* 24px */
  }

  .gap-apple {
    gap: 1.5rem; /* 24px */
  }
}

@media (min-width: 1024px) {
  .section-padding-apple {
    padding-top: 5rem; /* 80px */
    padding-bottom: 5rem; /* 80px */
  }

  .container-padding-apple {
    padding-left: 2rem; /* 32px */
    padding-right: 2rem; /* 32px */
  }

  .gap-apple {
    gap: 2rem; /* 32px */
  }
}
```

---

## 📱 Mobile-First Tailwind Classes

### Section Spacing:
```tsx
className="py-12 md:py-16 lg:py-20"
// Reduced from py-16 md:py-20 lg:py-24
```

### Container Padding:
```tsx
className="px-4 md:px-6 lg:px-8"
// Consistent across all sections
```

### Gap Spacing:
```tsx
className="gap-4 md:gap-6 lg:gap-8"
// Tighter on mobile
```

### Typography:
```tsx
// Headings
className="text-2xl md:text-3xl lg:text-4xl"
// Reduced from text-3xl md:text-4xl lg:text-5xl

// Body text
className="text-sm md:text-base"
// Slightly smaller on mobile
```

### Grid Layouts:
```tsx
// Services & Case Studies
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Trust Indicators
className="grid grid-cols-1 md:grid-cols-3"

// Process Steps
className="grid grid-cols-2 md:grid-cols-4"
```

---

## ✅ Implementation Checklist

### Phase 1: Critical Changes
- [ ] Update `app/page.tsx` with new section order
- [ ] Remove "What We Do" section code
- [ ] Remove standalone CTA section
- [ ] Move Contact section earlier (after WhyTrustUs)

### Phase 2: Component Updates
- [ ] Enhance Hero with trust indicators
- [ ] Create `ProcessSectionSimplified` component
- [ ] Create `FAQSectionCondensed` component
- [ ] Update Services section with secondary CTA

### Phase 3: Mobile Optimizations
- [ ] Update spacing utilities in CSS
- [ ] Test mobile layout (320px, 375px, 414px)
- [ ] Verify scroll depth to contact form
- [ ] Test all CTAs on mobile

### Phase 4: Testing & Refinement
- [ ] Test conversion flow (Hero → Services → Contact)
- [ ] Verify trust indicators visibility
- [ ] Check lazy loading performance
- [ ] Validate accessibility (keyboard navigation, screen readers)

---

## 🎯 Expected Results

### Before:
- **Sections before contact**: 8
- **Scroll distance (mobile)**: ~3000px+
- **Redundant content**: "What We Do" section
- **Trust indicators**: Scattered

### After:
- **Sections before contact**: 4
- **Scroll distance (mobile)**: ~1500px
- **Redundant content**: None
- **Trust indicators**: Consolidated + Hero

### Key Improvements:
✅ 50% reduction in scroll distance to contact
✅ Clearer narrative flow (Services → Proof → Trust → Contact)
✅ Consolidated trust indicators
✅ Mobile-optimized spacing and typography
✅ Strategic CTA placement throughout flow

---

## 📊 Metrics to Track

1. **Time to Contact Form Visibility** (mobile)
2. **Scroll Depth** before conversion
3. **Bounce Rate** on homepage
4. **Contact Form Conversion Rate**
5. **Section Engagement** (scroll tracking)

---

## 🎨 Design Principles Applied

✅ **Clarity** - One message per section
✅ **Progressive Disclosure** - Essential info first
✅ **Mobile-First** - Optimized for smallest screens
✅ **Trust Building** - Visible, consolidated indicators
✅ **Conversion Focus** - Contact accessible early
✅ **Minimalism** - Removed redundancy
