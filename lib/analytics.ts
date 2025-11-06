/**
 * Analytics utility functions
 * 
 * Centralized analytics tracking for the application
 */

// Track page views
export function trackPageView(url: string) {
  if (typeof window === "undefined") return;

  // Google Analytics
  if (window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: url,
    });
  }

  // Plausible (if configured)
  if (window.plausible) {
    window.plausible("pageview", { url });
  }
}

// Track custom events
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window === "undefined") return;

  // Google Analytics
  if (window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Plausible (if configured)
  if (window.plausible) {
    window.plausible(action, {
      props: {
        category,
        label,
        value,
      },
    });
  }
}

// Track form submissions
export function trackFormSubmission(formName: string, success: boolean) {
  trackEvent(
    success ? "form_submit_success" : "form_submit_error",
    "Form",
    formName
  );
}

// Track button clicks
export function trackButtonClick(buttonName: string, location: string) {
  trackEvent("button_click", "Engagement", `${buttonName} - ${location}`);
}

// Track external link clicks
export function trackExternalLink(url: string, linkText: string) {
  trackEvent("external_link_click", "Outbound", linkText, undefined);
  // Small delay to ensure tracking fires before navigation
  setTimeout(() => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, 100);
}

// Track service card interactions
export function trackServiceView(serviceName: string) {
  trackEvent("service_view", "Services", serviceName);
}

// Track project views
export function trackProjectView(projectName: string) {
  trackEvent("project_view", "Portfolio", projectName);
}

// Track contact form interactions
export function trackContactFormStart() {
  trackEvent("contact_form_start", "Contact", "Form Started");
}

export function trackContactFormComplete() {
  trackEvent("contact_form_complete", "Contact", "Form Completed");
}

// Track newsletter signups (if applicable)
export function trackNewsletterSignup(email: string) {
  trackEvent("newsletter_signup", "Marketing", "Newsletter");
}

// Track file downloads
export function trackDownload(fileName: string, fileType: string) {
  trackEvent("file_download", "Downloads", `${fileName} (${fileType})`);
}

// Track video plays (if applicable)
export function trackVideoPlay(videoName: string) {
  trackEvent("video_play", "Media", videoName);
}

// Track search queries (if applicable)
export function trackSearch(query: string, resultsCount: number) {
  trackEvent("search", "Search", query, resultsCount);
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    plausible?: (event: string, options?: Record<string, any>) => void;
  }
}

