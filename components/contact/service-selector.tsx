"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Brain, Code, Smartphone, Globe, Cloud, Lightbulb, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

const services = [
  {
    value: "ai-solutions",
    label: "AI Solutions & Implementation",
    icon: Brain,
    description: "Machine learning, AI integration, and intelligent automation",
  },
  {
    value: "custom-software",
    label: "Custom Software Development",
    icon: Code,
    description: "Tailored software solutions for your business needs",
  },
  {
    value: "mobile-apps",
    label: "Mobile App Development",
    icon: Smartphone,
    description: "iOS and Android native and cross-platform apps",
  },
  {
    value: "web-development",
    label: "Web Development",
    icon: Globe,
    description: "Modern, responsive web applications and websites",
  },
  {
    value: "cloud-solutions",
    label: "Cloud Solutions",
    icon: Cloud,
    description: "Cloud infrastructure, migration, and optimization",
  },
  {
    value: "consulting",
    label: "Consulting & Strategy",
    icon: Lightbulb,
    description: "Technology strategy and digital transformation",
  },
  {
    value: "defense-technology",
    label: "Defense Technology",
    icon: Shield,
    description: "Mission-critical defense and intelligence systems",
  },
  {
    value: "other",
    label: "Other",
    icon: Code,
    description: "Something else? Let's discuss",
  },
];

interface ServiceSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

export function ServiceSelector({
  value,
  onChange,
  error,
  required,
  className,
}: ServiceSelectorProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedService = services.find((s) => s.value === value);
  const Icon = selectedService?.icon || Code;

  return (
    <div className={cn("relative", className)}>
      <label className="block text-sm font-medium mb-2 text-foreground">
        Service Interested In {required && <span className="text-error">*</span>}
      </label>
      
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "w-full min-h-[56px] px-4 py-3 text-left bg-background border rounded-lg",
            "flex items-center justify-between gap-3 transition-all duration-200",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            error
              ? "border-error focus:border-error focus:ring-error/20"
              : "border-input focus:border-primary focus:ring-primary/20",
            isOpen && "border-primary"
          )}
        >
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {selectedService ? (
              <>
                <Icon className="h-5 w-5 text-primary flex-shrink-0 stroke-current" strokeWidth={2} fill="none" />
                <span className="text-base font-medium text-foreground truncate">
                  {selectedService.label}
                </span>
              </>
            ) : (
              <span className="text-base text-muted-foreground">
                Select a service...
              </span>
            )}
          </div>
          <ChevronDown
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform duration-200 flex-shrink-0",
              isOpen && "rotate-180"
            )}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0"
                style={{ zIndex: "var(--z-modal-backdrop)" }}
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute w-full mt-2 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
                style={{ zIndex: "var(--z-dropdown)" }}
              >
                <div className="max-h-96 overflow-y-auto">
                  {services.map((service) => {
                    const ServiceIcon = service.icon;
                    return (
                      <button
                        key={service.value}
                        type="button"
                        onClick={() => {
                          onChange(service.value);
                          setIsOpen(false);
                        }}
                        className={cn(
                          "w-full px-4 py-3 text-left hover:bg-accent transition-colors",
                          "flex items-start gap-3 border-b border-border last:border-0",
                          value === service.value && "bg-primary/10"
                        )}
                      >
                        <ServiceIcon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 stroke-current" strokeWidth={2} fill="none" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-foreground">
                            {service.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-0.5">
                            {service.description}
                          </div>
                        </div>
                        {value === service.value && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 rounded-full bg-primary-foreground"
                            />
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 text-sm text-error flex items-center gap-1.5"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </motion.p>
      )}
    </div>
  );
}

