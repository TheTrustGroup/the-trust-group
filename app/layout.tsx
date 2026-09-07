import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import "./ttg-design.css";
import { generateMetadata, generateStructuredData } from "@/lib/seo";
import { ToastProvider } from "@/components/ui/toast";
import { ScrollToTop } from "@/components/scroll-to-top";
import { TTGNav } from "@/components/ttg-nav";
import { TTGFooter } from "@/components/ttg-footer";
import { GoogleAnalytics } from "@/components/analytics";

const ttgJost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ttg-jost",
  display: "swap",
});

const ttgCormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-ttg-cormorant",
  display: "swap",
});

export const metadata: Metadata = generateMetadata({
  title: "Mission-Critical Software Engineering",
  description:
    "We build enterprise software, AI systems, and defense technology trusted by organizations operating at the highest level. Accra, Ghana. Global reach.",
  keywords: [
    "AI solutions",
    "software development",
    "web development",
    "mobile apps",
    "custom software",
    "The Trust Group",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateStructuredData("Organization");
  const websiteSchema = generateStructuredData("WebSite");

  return (
    <html
      lang="en"
      className={`${ttgJost.variable} ${ttgCormorant.variable}`}
    >
      <head>
        {/* Favicons + manifest are declared via metadata in lib/seo.ts. No duplicate link tags here. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ToastProvider>
          <ScrollToTop />
          <a href="#main-content" className="skip-to-main">
            Skip to main content
          </a>
          <TTGNav />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <TTGFooter />
        </ToastProvider>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      </body>
    </html>
  );
}
