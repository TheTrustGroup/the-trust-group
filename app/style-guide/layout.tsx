import type { Metadata } from "next";

// Internal design reference: keep it out of search engines.
export const metadata: Metadata = {
  title: "Design System | The Trust Group",
  robots: { index: false, follow: false },
  alternates: { canonical: null },
};

export default function StyleGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
