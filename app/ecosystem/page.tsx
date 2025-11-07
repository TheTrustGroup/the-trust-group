import type { Metadata } from "next";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ScrollAnimation } from "@/components/animations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/cms-client";

export const metadata: Metadata = generateSEOMetadata({
  title: "Our Ecosystem",
  description: "Explore The Trust Group's ecosystem of innovative companies and subsidiaries. Join our network of technology ventures.",
  keywords: ["ecosystem", "subsidiaries", "companies", "The Trust Group"],
  url: "/ecosystem",
});

export default function EcosystemPage() {
  const subsidiaries = siteConfig.navigation.footer.subsidiaries;

  return (
    <div className="min-h-screen pt-4 md:pt-8">
      <AnimatedSection variant="default" size="lg" animation="fade-in">
        <ScrollAnimation variant="fadeInUp">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Our Ecosystem
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-foreground">
              Building Tomorrow&apos;s Technology Today
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              The Trust Group is a parent company with multiple innovative businesses under our umbrella, each specializing in cutting-edge technology solutions.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {subsidiaries.map((subsidiary, index) => (
            <ScrollAnimation key={subsidiary.name} variant="fadeInUp" delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Building2 className="h-8 w-8 text-primary" />
                    {subsidiary.status === "coming-soon" && (
                      <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{subsidiary.name}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {subsidiary.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full"
                    asChild
                    disabled={subsidiary.status === "coming-soon"}
                  >
                    <Link href={subsidiary.href}>
                      {subsidiary.status === "coming-soon" ? "Coming Soon" : "Learn More"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation variant="fadeInUp" delay={0.4}>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Join Our Ecosystem</CardTitle>
              <CardDescription className="text-base md:text-lg">
                Are you building innovative technology solutions? Partner with The Trust Group and become part of our growing ecosystem.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </AnimatedSection>
    </div>
  );
}

