import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./design-system-2025.css";
import "./footer-fixes.css";
import "./parallax-optimization.css";
import "./animation-optimization.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/animations";
import { generateMetadata, generateStructuredData } from "@/lib/seo";
import { ToastProvider } from "@/components/ui/toast";
import { BackToTop } from "@/components/ui/back-to-top";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { ThemeProvider } from "@/components/theme-provider";
import { PageLoader } from "@/components/loading/page-loader";
import { ScrollRestore } from "@/components/scroll-restore";
import dynamic from "next/dynamic";

// Lazy load non-critical components for better performance
const Chatbot = dynamic(() => import("@/components/chatbot").then(mod => ({ default: mod.Chatbot })), { ssr: false });
const KonamiCode = dynamic(() => import("@/components/ui/konami-code").then(mod => ({ default: mod.KonamiCode })), { ssr: false });
const ConsoleMessage = dynamic(() => import("@/components/ui/console-message").then(mod => ({ default: mod.ConsoleMessage })), { ssr: false });

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = generateMetadata({
  title: "Home",
  description: "The Trust Group specializes in AI solutions, custom software development, mobile and web application development, and sophisticated website development.",
  keywords: ["AI solutions", "software development", "web development", "mobile apps", "custom software", "The Trust Group"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateStructuredData("Organization");
  const websiteSchema = generateStructuredData("WebSite");

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resource Hints - Performance Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/globals.css" as="style" />
        
        {/* Favicons */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <PageLoader />
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          <CustomCursor />
          <ToastProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
            >
              Skip to main content
            </a>
            <ScrollProgress />
            <Navigation />
            <main id="main-content">
              <PageTransition>
                {children}
              </PageTransition>
            </main>
          <Footer />
          <BackToTop />
          <Chatbot />
          <KonamiCode />
          <ConsoleMessage />
          <ScrollRestore />
        </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

