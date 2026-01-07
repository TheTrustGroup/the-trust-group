"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const services = [
  "AI Solutions & Implementation",
  "Custom Software Development",
  "Mobile App Development",
  "Web Development",
  "Cloud Solutions",
  "Consulting & Strategy",
  "Other",
];

const budgetRanges = [
  "Under $50K",
  "$50K - $100K",
  "$100K - $250K",
  "$250K - $500K",
  "$500K+",
  "Not sure yet",
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
  budget: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  description?: string;
}

export function ContactForm() {
  const { showToast } = useToast();
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    description: "",
    budget: "",
  });

  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = React.useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Please provide at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      // EmailJS integration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        service: formData.service,
        message: formData.description,
        budget: formData.budget || "Not specified",
        to_email: "info@thetrustgroupsolutions.com",
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      setSubmitMessage("Thank you! We'll get back to you within 24 hours.");
      
      showToast({
        type: "success",
        title: "Message Sent!",
        message: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        description: "",
        budget: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage("Something went wrong. Please try again or email us directly.");
      
      showToast({
        type: "error",
        title: "Error Sending Message",
        message: "Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
          Name <span className="text-error">*</span>
        </label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={cn("min-h-[44px] text-base", errors.name && "border-error")}
          placeholder="John Doe"
          required
          autoComplete="name"
          aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={errors.name ? true : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 text-sm text-error flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
          Email <span className="text-error">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={cn("min-h-[44px] text-base", errors.email && "border-error focus-visible:border-error focus-visible:ring-error/20")}
          placeholder="john@company.com"
          required
          autoComplete="email"
          aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={errors.email ? true : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 text-sm text-error flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2 text-foreground">
          Company Name
        </label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="min-h-[44px] text-base"
          placeholder="Your Company"
          autoComplete="organization"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2 text-foreground">
          Service Interested In <span className="text-error">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={cn(
            "flex min-h-[44px] w-full rounded-md border border-input bg-background px-3 py-2 text-base",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-ring focus-visible:ring-offset-2",
            "transition-all duration-200 focus-visible:border-primary focus-visible:shadow-sm focus-visible:shadow-primary/20",
            errors.service && "border-error focus-visible:border-error focus-visible:ring-error/20"
          )}
          required
          aria-describedby={errors.service ? "service-error" : undefined}
          aria-invalid={errors.service ? true : undefined}
        >
          <option value="">Select a service...</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="mt-1 text-sm text-error flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.service}
          </p>
        )}
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-2 text-foreground">
          Project Description <span className="text-error">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={6}
          className={cn(
            "flex w-full rounded-md border border-input bg-background px-3 py-2 text-base min-h-[120px]",
            "ring-offset-background placeholder:text-muted-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "resize-none transition-all duration-200 focus-visible:border-primary focus-visible:shadow-sm focus-visible:shadow-primary/20",
            errors.description && "border-error focus-visible:border-error focus-visible:ring-error/20"
          )}
          placeholder="Tell us about your project..."
          required
          aria-describedby={errors.description ? "description-error" : undefined}
          aria-invalid={errors.description ? true : undefined}
        />
        {errors.description && (
          <p id="description-error" role="alert" className="mt-1 text-sm text-error flex items-center gap-1">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {errors.description}
          </p>
        )}
        <p className="mt-1 text-xs text-muted-foreground">
          {formData.description.length} characters (minimum 20)
        </p>
      </div>

      {/* Budget Range */}
      <div>
        <label htmlFor="budget" className="block text-sm font-medium mb-2 text-foreground">
          Budget Range (Optional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="flex min-h-[44px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-200 focus-visible:border-primary focus-visible:shadow-sm focus-visible:shadow-primary/20"
        >
          <option value="">Select budget range...</option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Status Messages - Enhanced with animations */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="p-4 rounded-lg bg-success/10 border border-success/30 flex items-start gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
            <p className="text-sm text-success font-medium">{submitMessage}</p>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="p-4 rounded-lg bg-error/10 border border-error/30 flex items-start gap-3"
          >
            <AlertCircle className="h-5 w-5 text-error flex-shrink-0 mt-0.5" />
            <p className="text-sm text-error font-medium">{submitMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full min-h-[48px] touch-manipulation group"
        disabled={isSubmitting}
        aria-label={isSubmitting ? "Sending message" : "Submit contact form"}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
}

