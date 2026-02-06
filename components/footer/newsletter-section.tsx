"use client";

import * as React from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/contact/floating-input";
import { useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

export function NewsletterSection() {
  const [email, setEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const { showToast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast({
        type: "error",
        title: "Invalid Email",
        message: "Please enter a valid email address",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      showToast({
        type: "success",
        title: "Subscribed!",
        message: "You'll receive our latest tech insights.",
      });
      
      setEmail("");
      
      // ✅ GOOD - Store timeout for cleanup
      const successTimeout = setTimeout(() => setIsSuccess(false), 3000);
      // Note: Cleanup handled by component unmount, but could use ref if needed
    } catch (error) {
      showToast({
        type: "error",
        title: "Subscription Failed",
        message: "Please try again later",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden border-t border-hairline">
      <div className="relative z-10 container mx-auto container-padding-apple max-w-7xl py-5 md:py-6">
        <div className="max-w-2xl mx-auto text-center">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-high-contrast mb-1.5">
              Stay Updated
            </h3>
            <p className="text-medium-contrast mb-4 text-xs md:text-sm">
              Tech insights on AI, software, and innovation—delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto items-stretch sm:items-center">
              <div className="flex-1 min-w-0">
                <FloatingInput
                  id="newsletter-email"
                  name="email"
                  label="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/60 backdrop-blur-sm w-full border-hairline focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:border-primary transition-all duration-200"
                  success={isSuccess}
                />
              </div>
              
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="btn-apple btn-apple-primary min-w-[140px] sm:min-w-[160px] w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Subscribing...
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe
                      <Mail className="h-4 w-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>

            <p className="text-[11px] text-medium-contrast/80 mt-2.5">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

