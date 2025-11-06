"use client";

import { Award, Trophy, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AwardItem {
  title: string;
  organization: string;
  year: string;
  category?: string;
  icon?: "award" | "trophy" | "star";
}

interface AwardsSectionProps {
  awards: AwardItem[];
  title?: string;
}

const iconMap = {
  award: Award,
  trophy: Trophy,
  star: Star,
};

export function AwardsSection({
  awards,
  title = "Awards & Recognitions",
}: AwardsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {awards.map((award, index) => {
            const Icon = award.icon ? iconMap[award.icon] : Award;
            return (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary mb-1">
                    {award.organization}
                  </p>
                  {award.category && (
                    <p className="text-xs text-muted-foreground mb-2">
                      {award.category}
                    </p>
                  )}
                  <p className="text-sm font-semibold text-foreground">
                    {award.year}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

