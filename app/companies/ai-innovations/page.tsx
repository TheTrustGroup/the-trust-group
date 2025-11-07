import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "AI Innovations - Coming Soon",
  description: "AI Innovations - Leading AI research and development. Coming soon as part of The Trust Group ecosystem.",
  keywords: ["AI Innovations", "AI research", "coming soon", "The Trust Group"],
  url: "/companies/ai-innovations",
});

export default function AIInnovationsPage() {
  return (
    <div className="min-h-screen pt-4 md:pt-8">
      <Section variant="default" size="lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <Brain className="h-20 w-20 md:h-24 md:w-24 text-primary mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              AI Innovations
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8">
              Leading AI research and development
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Coming Soon</CardTitle>
              <CardDescription className="text-base">
                We&apos;re working on something amazing. AI Innovations will be launching soon as part of The Trust Group ecosystem.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                AI Innovations will focus on cutting-edge artificial intelligence research, development, and implementation. 
                We&apos;re building innovative AI solutions that will transform industries and drive technological advancement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get Notified
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/ecosystem">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Ecosystem
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
}

