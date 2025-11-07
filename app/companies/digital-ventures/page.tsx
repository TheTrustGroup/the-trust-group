import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = generateSEOMetadata({
  title: "Digital Ventures - Coming Soon",
  description: "Digital Ventures - Digital transformation consulting. Coming soon as part of The Trust Group ecosystem.",
  keywords: ["Digital Ventures", "digital transformation", "coming soon", "The Trust Group"],
  url: "/companies/digital-ventures",
});

export default function DigitalVenturesPage() {
  return (
    <div className="min-h-screen pt-4 md:pt-8">
      <Section variant="default" size="lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <TrendingUp className="h-20 w-20 md:h-24 md:w-24 text-primary mx-auto mb-6" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Digital Ventures
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8">
              Digital transformation consulting
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Coming Soon</CardTitle>
              <CardDescription className="text-base">
                We're crafting something transformative. Digital Ventures will be launching soon as part of The Trust Group ecosystem.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Digital Ventures will focus on digital transformation consulting, helping organizations 
                navigate their digital journey and leverage technology for competitive advantage.
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

