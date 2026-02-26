import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  DM_Serif_Display,
  DM_Mono,
  Instrument_Sans,
} from "next/font/google";
import "./globals.css";
import "./ttg-design.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { generateMetadata, generateStructuredData } from "@/lib/seo";
import { ToastProvider } from "@/components/ui/toast";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";
import { USE_TTG_LAYOUT } from "@/lib/layout-feature";
import { TTGNav } from "@/components/ttg-nav";
import { TTGFooter } from "@/components/ttg-footer";
import dynamic from "next/dynamic";

const Chatbot = dynamic(
  () => import("@/components/chatbot").then((mod) => ({ default: mod.Chatbot })),
  { ssr: false, loading: () => null }
);

const CustomCursor = dynamic(
  () => import("@/components/custom-cursor").then((mod) => ({ default: mod.CustomCursor })),
  { ssr: false, loading: () => null }
);

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const trustSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-trust-serif",
  display: "swap",
  weight: ["400"],
});

const trustMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-trust-mono",
  display: "swap",
  weight: ["300", "400", "500"],
});

const trustSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-trust-sans",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${sans.variable} ${serif.variable} ${trustSerif.variable} ${trustMono.variable} ${trustSans.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ToastProvider>
            <CustomCursor />
            <ScrollToTop />
            <a
              href="#main-content"
              className="skip-to-main"
            >
              Skip to main content
            </a>
            {USE_TTG_LAYOUT ? (
              <>
                <TTGNav />
                <main id="main-content" tabIndex={-1}>{children}</main>
                <TTGFooter />
              </>
            ) : (
              <>
                <Header />
                <main id="main-content" tabIndex={-1}>{children}</main>
                <Footer />
              </>
            )}
            <Chatbot />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
