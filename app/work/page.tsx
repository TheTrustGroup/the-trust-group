import { Metadata } from "next";
import {
  DM_Serif_Display,
  DM_Mono,
  Instrument_Sans,
} from "next/font/google";
import { generateMetadata as genMeta } from "@/lib/seo";
import { WorkPageClient } from "./WorkPageClient";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-work-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-work-mono",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = genMeta({
  title: "Our Work",
  description:
    "A curated selection of engagements across defense, enterprise, and emerging technology. Systems built for permanence.",
  keywords: [
    "case studies",
    "portfolio",
    "defense",
    "enterprise",
    "AI systems",
    "The Trust Group",
  ],
  url: "/work",
});

export default function WorkPage() {
  return (
    <div
      className={`${dmSerif.variable} ${dmMono.variable} ${instrumentSans.variable}`}
    >
      <WorkPageClient />
    </div>
  );
}
