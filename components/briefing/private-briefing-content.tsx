"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/toast";

const SERVICE_OPTIONS = [
  "Defense Technology & Intelligence Systems",
  "AI Solutions & Implementation",
  "Custom Enterprise Software",
  "Mobile Application Development",
  "Cloud Infrastructure & DevOps",
  "Legacy System Modernization",
  "Consulting & Technology Strategy",
  "Multiple / Unsure",
] as const;

const BUDGET_PILLS = [
  "Under $50K",
  "$50K – $150K",
  "$150K – $500K",
  "$500K+",
  "To Be Discussed",
] as const;

interface BriefingFormData {
  firstName: string;
  lastName: string;
  workEmail: string;
  phone: string;
  organization: string;
  role: string;
  serviceArea: string;
  budget: string;
  projectOverview: string;
  requiresNda: boolean;
  privacyAccepted: boolean;
}

const initialFormState: BriefingFormData = {
  firstName: "",
  lastName: "",
  workEmail: "",
  phone: "",
  organization: "",
  role: "",
  serviceArea: "",
  budget: "",
  projectOverview: "",
  requiresNda: false,
  privacyAccepted: false,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" as const },
};

export function PrivateBriefingContent() {
  const { showToast } = useToast();
  const [formData, setFormData] = React.useState<BriefingFormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const updateField = <K extends keyof BriefingFormData>(
    key: K,
    value: BriefingFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            from_email: formData.workEmail,
            phone: formData.phone || "Not provided",
            organization: formData.organization,
            role: formData.role,
            service_area: formData.serviceArea,
            budget: formData.budget || "Not specified",
            project_overview: formData.projectOverview,
            requires_nda: formData.requiresNda ? "Yes" : "No",
            to_email: "info@thetrustgroupsolutions.com",
            reply_to: formData.workEmail,
          },
          publicKey
        );
      }

      setShowSuccess(true);
      showToast({
        type: "success",
        title: "Briefing request received",
        message: "We'll reach out within 24 hours.",
      });
    } catch {
      showToast({
        type: "error",
        title: "Something went wrong",
        message: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)] lg:min-h-screen bg-[var(--trust-black)]"
      style={{ marginTop: 0 }}
    >
      {/* Left panel */}
      <aside
        className="relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[var(--trust-border)] bg-[var(--trust-slate)] lg:sticky lg:top-0 lg:h-screen overflow-hidden pt-24 lg:pt-40 pb-16 lg:pb-20 px-6 lg:px-16"
        style={{ minHeight: "50vh" }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `linear-gradient(rgba(200,169,110,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,169,110,0.08) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 100%, black 20%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 50% 100%, black 20%, transparent 70%)",
          }}
        />
        <div className="relative z-10">
          <motion.p
            className="font-trust-mono text-[10px] text-[var(--trust-gold)] tracking-[0.18em] uppercase flex items-center gap-3 mb-8"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
          >
            <span
              className="w-6 h-px shrink-0"
              style={{ background: "var(--trust-gold)" }}
            />
            Private Briefing
          </motion.p>
          <motion.h1
            className="font-trust-serif text-4xl lg:text-[clamp(2.25rem,3.5vw,3.25rem)] leading-[1.05] tracking-[-0.02em] mb-7"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.5 }}
          >
            Let&apos;s discuss
            <br />
            what you&apos;re
            <br />
            <em className="text-[var(--trust-gold)] not-italic">building.</em>
          </motion.h1>
          <motion.p
            className="text-[15px] text-[var(--trust-muted)] leading-[1.75] max-w-[380px] mb-14"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.7 }}
          >
            A private briefing is a confidential, no-obligation conversation about
            your project. We&apos;ll discuss your requirements, constraints, and
            objectives — and tell you honestly whether we&apos;re the right fit.
          </motion.p>
          <motion.div
            className="flex flex-col gap-5"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.9 }}
          >
            <p className="font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.14em] uppercase">
              What to expect
            </p>
            {[
              {
                num: "01",
                strong: "Response within 24 hours.",
                rest: "A senior member of our team will reach out to confirm receipt and schedule a time.",
              },
              {
                num: "02",
                strong: "A 45-minute discovery call.",
                rest: "We'll ask the right questions about your system, your timeline, and your constraints.",
              },
              {
                num: "03",
                strong: "A detailed proposal within 5 business days.",
                rest: "Approach, timeline, resource allocation, and fixed or milestone-based pricing.",
              },
              {
                num: "04",
                strong: "Full NDA available.",
                rest: "For sensitive, classified, or proprietary projects — we operate under NDA from the first conversation.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <span className="font-trust-mono text-[10px] text-[var(--trust-gold)] tracking-[0.1em] pt-0.5 shrink-0">
                  {item.num}
                </span>
                <span className="text-[13px] text-[var(--trust-muted)] leading-[1.6]">
                  <strong className="text-[#b8b4ac] font-semibold">
                    {item.strong}
                  </strong>{" "}
                  {item.rest}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        <footer
          className="relative z-10 flex flex-col gap-3 pt-10 border-t border-[var(--trust-border)]"
          aria-label="Contact information"
        >
          <motion.div
            className="flex gap-4 items-center"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.1 }}
          >
            <span className="font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.1em] uppercase w-[60px] shrink-0">
              Email
            </span>
            <a
              href="mailto:info@thetrustgroupsolutions.com"
              className="text-[13px] text-[#b8b4ac] no-underline hover:text-[var(--trust-gold)]"
            >
              info@thetrustgroupsolutions.com
            </a>
          </motion.div>
          <motion.div
            className="flex gap-4 items-center"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.1 }}
          >
            <span className="font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.1em] uppercase w-[60px] shrink-0">
              Phone
            </span>
            <a
              href="tel:+233575895601"
              className="text-[13px] text-[#b8b4ac] no-underline hover:text-[var(--trust-gold)]"
            >
              +233 (057) 589-5601
            </a>
          </motion.div>
          <motion.div
            className="flex gap-4 items-center"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.1 }}
          >
            <span className="font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.1em] uppercase w-[60px] shrink-0">
              Location
            </span>
            <span className="text-[13px] text-[#b8b4ac]">
              Airport Residential Area, Accra, Ghana
            </span>
          </motion.div>
          <motion.div
            className="flex gap-4 items-center"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.1 }}
          >
            <span className="font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.1em] uppercase w-[60px] shrink-0">
              Hours
            </span>
            <span className="text-[13px] text-[#b8b4ac]">
              Mon–Fri 9am–6pm GMT · Sat 10am–2pm
            </span>
          </motion.div>
        </footer>
      </aside>

      {/* Right panel — form or success */}
      <div className="flex flex-col justify-center pt-20 lg:pt-40 pb-20 lg:pb-20 px-6 lg:px-16 bg-[var(--trust-black)]">
        <AnimatePresence mode="wait">
          {showSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20 px-10 flex flex-col items-center justify-center"
            >
              <div
                className="w-16 h-16 rounded-full border border-[var(--trust-gold)] flex items-center justify-center text-2xl text-[var(--trust-gold)] mb-8"
                aria-hidden
              >
                ✓
              </div>
              <h2 className="font-trust-serif text-3xl mb-4">
                Briefing Request Received.
              </h2>
              <p className="text-[15px] text-[var(--trust-muted)] leading-[1.7] max-w-[380px]">
                A senior member of our team will reach out within 24 hours to
                confirm and schedule your discovery call. We look forward to
                learning about your project.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              id="form-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="font-trust-serif text-3xl mb-2">
                Tell us about your project.
              </h2>
              <p className="text-[13px] text-[var(--trust-muted)] mb-12 leading-[1.6]">
                All enquiries are treated with strict confidentiality. Fields
                marked{" "}
                <span className="text-[var(--trust-gold)]">*</span> are
                required.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-0"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label
                      htmlFor="briefing-first-name"
                      className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2"
                    >
                      First Name <span className="text-[var(--trust-gold)]">*</span>
                    </label>
                    <input
                      id="briefing-first-name"
                      type="text"
                      placeholder="John"
                      required
                      value={formData.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      className="w-full bg-[var(--trust-slate)] border border-[var(--trust-border)] text-[var(--trust-white)] font-sans text-sm py-3.5 px-4 outline-none transition-colors focus:border-[var(--trust-gold)] focus:bg-[rgba(200,169,110,0.04)] placeholder:text-[var(--trust-muted)] rounded-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="briefing-last-name"
                      className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2"
                    >
                      Last Name <span className="text-[var(--trust-gold)]">*</span>
                    </label>
                    <input
                      id="briefing-last-name"
                      type="text"
                      placeholder="Smith"
                      required
                      value={formData.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      className="w-full bg-[var(--trust-slate)] border border-[var(--trust-border)] text-[var(--trust-white)] font-sans text-sm py-3.5 px-4 outline-none transition-colors focus:border-[var(--trust-gold)] focus:bg-[rgba(200,169,110,0.04)] placeholder:text-[var(--trust-muted)] rounded-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label
                      htmlFor="briefing-email"
                      className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2"
                    >
                      Work Email <span className="text-[var(--trust-gold)]">*</span>
                    </label>
                    <input
                      id="briefing-email"
                      type="email"
                      placeholder="you@organization.com"
                      required
                      value={formData.workEmail}
                      onChange={(e) => updateField("workEmail", e.target.value)}
                      className="w-full bg-[var(--trust-slate)] border border-[var(--trust-border)] text-[var(--trust-white)] font-sans text-sm py-3.5 px-4 outline-none transition-colors focus:border-[var(--trust-gold)] focus:bg-[rgba(200,169,110,0.04)] placeholder:text-[var(--trust-muted)] rounded-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="briefing-phone"
                      className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="briefing-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full bg-[var(--trust-slate)] border border-[var(--trust-border)] text-[var(--trust-white)] font-sans text-sm py-3.5 px-4 outline-none transition-colors focus:border-[var(--trust-gold)] focus:bg-[rgba(200,169,110,0.04)] placeholder:text-[var(--trust-muted)] rounded-none"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  <div>
                    <label
                      htmlFor="briefing-org"
                      className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2"
                    >
                      Organization <span className="text-[var(--trust-gold)]">*</span>
                    </label>
                    <input
                      id="briefing-org"
                      type="text"
                      placeholder="Company or Agency Name"
                      required
                      value={formData.organization}
                      onChange={(e) => updateField("organization", e.target.value)}
                      className="w-full bg-[var(--trust-slate)] border border-[var(--trust-border)] text-[var(--trust-white)] font-sans text-sm py-3.5 px-4 outline-none transition-colors focus:border-[var(--trust-gold)] focus:bg-[rgba(200,169,110,0.04)] placeholder:text-[var(--trust-muted)] rounded-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="briefing-role"
                      className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2"
                    >
                      Your Role <span className="text-[var(--trust-gold)]">*</span>
                    </label>
                    <input
                      id="briefing-role"
                      type="text"
                      placeholder="CTO, VP Engineering, Founder..."
                      required
                      value={formData.role}
                      onChange={(e) => updateField("role", e.target.value)}
                      className="w-full bg-[var(--trust-slate)] border border-[var(--trust-border)] text-[var(--trust-white)] font-sans text-sm py-3.5 px-4 outline-none transition-colors focus:border-[var(--trust-gold)] focus:bg-[rgba(200,169,110,0.04)] placeholder:text-[var(--trust-muted)] rounded-none"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="briefing-service"
                    className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2"
                  >
                    Service Area <span className="text-[var(--trust-gold)]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="briefing-service"
                      required
                      value={formData.serviceArea}
                      onChange={(e) => updateField("serviceArea", e.target.value)}
                      className="w-full bg-[var(--trust-slate)] border border-[var(--trust-border)] text-[#b8b4ac] font-sans text-sm py-3.5 pl-4 pr-10 outline-none transition-colors focus:border-[var(--trust-gold)] focus:bg-[rgba(200,169,110,0.04)] rounded-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>
                        Select the primary capability area
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--trust-muted)] text-xs font-trust-mono pointer-events-none"
                      aria-hidden
                    >
                      ↓
                    </span>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2">
                    Estimated Project Budget
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {BUDGET_PILLS.map((label) => (
                      <button
                        key={label}
                        type="button"
                        onClick={() => updateField("budget", label)}
                        className={`font-trust-mono text-[11px] tracking-[0.06em] uppercase py-2 px-4 border transition-colors rounded-none ${
                          formData.budget === label
                            ? "border-[var(--trust-gold)] text-[var(--trust-gold)] bg-[var(--trust-gold-dim)]"
                            : "border-[var(--trust-border)] text-[var(--trust-muted)] hover:border-[rgba(200,169,110,0.4)] hover:text-[#b8b4ac]"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="briefing-overview"
                    className="block font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.12em] uppercase mb-2"
                  >
                    Project Overview <span className="text-[var(--trust-gold)]">*</span>
                  </label>
                  <textarea
                    id="briefing-overview"
                    placeholder="Describe the system you need built, the problem it solves, any existing infrastructure to consider, and your target timeline. The more detail here, the more useful our first conversation will be."
                    required
                    rows={5}
                    value={formData.projectOverview}
                    onChange={(e) => updateField("projectOverview", e.target.value)}
                    className="w-full bg-[var(--trust-slate)] border border-[var(--trust-border)] text-[var(--trust-white)] font-sans text-sm py-3.5 px-4 outline-none transition-colors focus:border-[var(--trust-gold)] focus:bg-[rgba(200,169,110,0.04)] placeholder:text-[var(--trust-muted)] rounded-none resize-y min-h-[120px] leading-[1.6]"
                  />
                </div>
                <div
                  className="flex gap-3.5 items-start mb-6 cursor-pointer"
                  onClick={() => updateField("requiresNda", !formData.requiresNda)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      updateField("requiresNda", !formData.requiresNda);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={formData.requiresNda}
                  aria-label="Toggle NDA requirement"
                >
                  <div
                    className={`w-[18px] h-[18px] shrink-0 mt-0.5 border flex items-center justify-center text-[11px] font-bold transition-colors ${
                      formData.requiresNda
                        ? "bg-[var(--trust-gold)] border-[var(--trust-gold)] text-[var(--trust-black)]"
                        : "border-[var(--trust-border)] bg-[var(--trust-slate)]"
                    }`}
                  >
                    {formData.requiresNda ? "✓" : ""}
                  </div>
                  <label
                    htmlFor="briefing-nda"
                    className="text-[13px] text-[var(--trust-muted)] leading-[1.6] cursor-pointer"
                  >
                    <strong className="text-[#b8b4ac]">
                      This project requires NDA coverage from the outset.
                    </strong>{" "}
                    We will prepare a mutual NDA for execution before our first
                    call.
                  </label>
                  <input
                    id="briefing-nda"
                    type="checkbox"
                    checked={formData.requiresNda}
                    onChange={(e) => updateField("requiresNda", e.target.checked)}
                    className="sr-only"
                    aria-hidden
                  />
                </div>
                <div
                  className="flex gap-3.5 items-start mb-6 cursor-pointer"
                  onClick={() => updateField("privacyAccepted", !formData.privacyAccepted)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      updateField("privacyAccepted", !formData.privacyAccepted);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-pressed={formData.privacyAccepted}
                  aria-label="Accept privacy policy"
                >
                  <div
                    className={`w-[18px] h-[18px] shrink-0 mt-0.5 border flex items-center justify-center text-[11px] font-bold transition-colors ${
                      formData.privacyAccepted
                        ? "bg-[var(--trust-gold)] border-[var(--trust-gold)] text-[var(--trust-black)]"
                        : "border-[var(--trust-border)] bg-[var(--trust-slate)]"
                    }`}
                  >
                    {formData.privacyAccepted ? "✓" : ""}
                  </div>
                  <label
                    htmlFor="briefing-privacy"
                    className="text-[13px] text-[var(--trust-muted)] leading-[1.6] cursor-pointer"
                  >
                    I agree to The Trust Group&apos;s{" "}
                    <Link
                      href="/privacy"
                      className="text-[var(--trust-gold)] underline hover:no-underline"
                    >
                      Privacy Policy
                    </Link>
                    . I understand this submission is treated as confidential.
                  </label>
                  <input
                    id="briefing-privacy"
                    type="checkbox"
                    required
                    checked={formData.privacyAccepted}
                    onChange={(e) =>
                      updateField("privacyAccepted", e.target.checked)
                    }
                    className="sr-only"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="trust-btn-gold bg-[var(--trust-gold)] text-[var(--trust-black)] border-none font-trust-mono text-xs tracking-[0.1em] uppercase py-4 px-10 cursor-pointer transition-all duration-300 disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending…" : "Submit Briefing Request →"}
                  </button>
                  <p className="font-trust-mono text-[10px] text-[var(--trust-muted)] tracking-[0.08em] max-w-[200px] text-right sm:text-right leading-[1.5]">
                    We respond to all submissions within 24 business hours.
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
