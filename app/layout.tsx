import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
import { Chatbot } from "@/components/chatbot";
import { PageLoader } from "@/components/loading/page-loader";

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
        </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

