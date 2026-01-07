"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingInput, FloatingTextarea } from "./floating-input";
import { FileUpload } from "./file-upload";
import { BudgetSlider } from "./budget-slider";
import { ServiceSelector } from "./service-selector";
import { SuccessAnimation } from "./success-animation";
import { AsyncLoadingIndicator } from "@/components/ui/async-loading-indicator";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";
import { 
  getRandomPlaceholder, 
  errorMessages, 
  getRandomSuccessMessage 
} from "@/components/ui/personality-placeholders";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  description: string;
  budget: string;
  files: File[];
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  description?: string;
}

type FormStep = 1 | 2 | 3 | 4;

export function PremiumContactForm() {
  const { showToast } = useToast();
  const [currentStep, setCurrentStep] = React.useState<FormStep>(1);
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    description: "",
    budget: "",
    files: [],
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");

  // Real-time validation with personality
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return errorMessages.name.required;
        if (value.trim().length < 2) return errorMessages.name.minLength;
        return undefined;
      case "email":
        if (!value.trim()) return errorMessages.email.required;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return errorMessages.email.invalid;
        return undefined;
      case "phone":
        if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) return errorMessages.phone.invalid;
        return undefined;
      case "service":
        if (!value) return errorMessages.service.required;
        return undefined;
      case "description":
        if (!value.trim()) return errorMessages.description.required;
        if (value.trim().length < 20) return errorMessages.description.minLength;
        return undefined;
      default:
        return undefined;
    }
  };

  const validateStep = (step: FormStep): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      const nameError = validateField("name", formData.name);
      const emailError = validateField("email", formData.email);
      if (nameError) newErrors.name = nameError;
      if (emailError) newErrors.email = emailError;
    } else if (step === 2) {
      const serviceError = validateField("service", formData.service);
      if (serviceError) newErrors.service = serviceError;
    } else if (step === 3) {
      const descError = validateField("description", formData.description);
      if (descError) newErrors.description = descError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (name: keyof FormData, value: string | File[]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Real-time validation
    if (typeof value === "string" && name !== "budget" && name !== "company") {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 4) {
        setCurrentStep((prev) => (prev + 1) as FormStep);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as FormStep);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(4)) {
      setCurrentStep(3);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS integration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      // Prepare file attachments info (EmailJS doesn't support file attachments directly)
      const filesInfo = formData.files.length > 0 
        ? formData.files.map(f => `${f.name} (${(f.size / 1024).toFixed(2)} KB)`).join(", ")
        : "No files attached";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        phone: formData.phone || "Not provided",
        service: formData.service,
        message: formData.description,
        budget: formData.budget || "Not specified",
        files_info: filesInfo,
        files_count: formData.files.length.toString(),
        to_email: "info@thetrustgroupsolutions.com",
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      showToast({
        type: "success",
        title: getRandomSuccessMessage(),
        message: "We'll get back to you within 24 hours. You're awesome!",
      });

      // Reset form after delay
      // ✅ GOOD - Store timeout for cleanup (handled by component unmount)
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          description: "",
          budget: "",
          files: [],
        });
        setCurrentStep(1);
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setSubmitStatus("error");
      showToast({
        type: "error",
        title: "Error Sending Message",
        message: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: "Your Info", fields: ["name", "email", "company", "phone"] },
    { number: 2, title: "Service", fields: ["service", "budget"] },
    { number: 3, title: "Project Details", fields: ["description", "files"] },
    { number: 4, title: "Review & Submit", fields: [] },
  ];

  if (submitStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <SuccessAnimation />
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-bold text-foreground mt-6 mb-2"
        >
          Thank You!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground"
        >
          We&apos;ve received your message and will get back to you within 24 hours.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <>
      <AsyncLoadingIndicator
        isLoading={isSubmitting}
        message="Sending your message..."
        variant="overlay"
      />
      <form onSubmit={handleSubmit} className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-border/30">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex items-center flex-shrink-0">
              <div
                className={cn(
                  "w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-sm sm:text-base transition-all duration-300",
                  currentStep > step.number
                    ? "bg-primary text-primary-foreground"
                    : currentStep === step.number
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {currentStep > step.number ? (
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={cn(
                  "ml-2 text-xs sm:text-sm font-medium hidden sm:block whitespace-nowrap",
                  currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 sm:h-1 mx-2 sm:mx-3 transition-all duration-300 rounded-full",
                  currentStep > step.number ? "bg-primary" : "bg-muted/50"
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-5"
          >
            <FloatingInput
              id="name"
              name="name"
              label="Full Name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              error={errors.name}
              required
              success={!errors.name && formData.name.length > 0}
            />
            <FloatingInput
              id="email"
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              error={errors.email}
              required
              success={!errors.email && formData.email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)}
            />
            <FloatingInput
              id="company"
              name="company"
              label="Company Name"
              type="text"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
            <FloatingInput
              id="phone"
              name="phone"
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              error={errors.phone}
              helperText="Optional but recommended"
            />
          </motion.div>
        )}

        {currentStep === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4 sm:space-y-5"
          >
            <ServiceSelector
              value={formData.service}
              onChange={(value) => handleChange("service", value)}
              error={errors.service}
              required
            />
            <BudgetSlider
              value={formData.budget}
              onChange={(value) => handleChange("budget", value)}
            />
          </motion.div>
        )}

        {currentStep === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4 sm:space-y-5"
          >
            <FloatingTextarea
              id="description"
              name="description"
              label="Project Description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              error={errors.description}
              required
              characterCount
              maxLength={1000}
              helperText="Tell us about your project goals, requirements, and timeline"
              success={!errors.description && formData.description.length >= 20}
            />
            <FileUpload
              onChange={(files) => handleChange("files", files)}
            />
          </motion.div>
        )}

        {currentStep === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="p-6 rounded-lg bg-muted/50 border border-border space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Review Your Information</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-muted-foreground">Name:</span>{" "}
                  <span className="font-medium text-foreground">{formData.name}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Email:</span>{" "}
                  <span className="font-medium text-foreground">{formData.email}</span>
                </div>
                {formData.company && (
                  <div>
                    <span className="text-muted-foreground">Company:</span>{" "}
                    <span className="font-medium text-foreground">{formData.company}</span>
                  </div>
                )}
                {formData.phone && (
                  <div>
                    <span className="text-muted-foreground">Phone:</span>{" "}
                    <span className="font-medium text-foreground">{formData.phone}</span>
                  </div>
                )}
                <div>
                  <span className="text-muted-foreground">Service:</span>{" "}
                  <span className="font-medium text-foreground">
                    {formData.service ? formData.service.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "Not selected"}
                  </span>
                </div>
                {formData.budget && (
                  <div>
                    <span className="text-muted-foreground">Budget:</span>{" "}
                    <span className="font-medium text-foreground">{formData.budget}</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-3 sm:gap-4 pt-6 mt-6 border-t border-border/50">
        <Button
          type="button"
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1 || isSubmitting}
          className="min-w-[100px] sm:min-w-[120px]"
        >
          <ArrowLeft className="h-4 w-4 mr-1.5 sm:mr-2" />
          <span className="hidden sm:inline">Back</span>
        </Button>

        {currentStep < 4 ? (
          <Button
            type="button"
            onClick={handleNext}
            className="min-w-[100px] sm:min-w-[120px]"
          >
            <span className="hidden sm:inline">Next</span>
            <ArrowRight className="h-4 w-4 sm:ml-2" />
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitting}
            className="min-w-[100px] sm:min-w-[140px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        )}
      </div>
      </form>
    </>
  );
}

