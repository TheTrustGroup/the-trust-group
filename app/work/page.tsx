import { Metadata } from "next";
import dynamic from "next/dynamic";
import { generateMetadata as genMeta } from "@/lib/seo";
import { PageContentLoader } from "@/components/loading/page-content-loader";

const WorkPageClient = dynamic(
  () => import("./WorkPageClient").then((m) => ({ default: m.WorkPageClient })),
  { loading: () => <PageContentLoader />, ssr: true }
);

export const metadata: Metadata = genMeta({
  title: "Our Work",
  description:
    "Anonymous summaries of selected engagements. Client identity, screenshots, and production URLs are not published. Detail under NDA.",
  keywords: [
    "engagements",
    "confidential work",
    "defense",
    "enterprise",
    "AI systems",
    "The Trust Group",
  ],
  url: "/work",
});

export default function WorkPage() {
  return <WorkPageClient />;
}
