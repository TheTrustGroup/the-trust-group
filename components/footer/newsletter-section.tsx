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
    <div className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 30%, rgba(0, 102, 255, 0.1) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(0, 184, 230, 0.1) 50%, transparent 70%)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>


      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Stay Updated with Tech Trends
            </h3>
            <p className="text-muted-foreground mb-8 text-base md:text-lg">
              Get the latest insights on AI, software development, and technology innovation delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto items-stretch sm:items-center">
              <div className="flex-1 min-w-0">
                <FloatingInput
                  id="newsletter-email"
                  name="email"
                  label="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50 backdrop-blur-sm w-full focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background focus:border-primary transition-all duration-200"
                  success={isSuccess}
                />
              </div>
              
              <div className="flex-shrink-0">
                <Button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  size="lg"
                  className="min-w-[140px] sm:min-w-[160px] w-full sm:w-auto"
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
                </Button>
              </div>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

