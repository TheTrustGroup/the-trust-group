"use client";

import * as React from "react";
import { StandardizedButton } from "@/components/ui/standardized-button";
import { StandardizedCard } from "@/components/ui/standardized-card";
import { StandardizedInput } from "@/components/ui/standardized-input";
import { StandardizedTextarea } from "@/components/ui/standardized-textarea";
import { StandardizedSelect } from "@/components/ui/standardized-select";
import { StandardizedCheckbox } from "@/components/ui/standardized-checkbox";
import { StandardizedRadio } from "@/components/ui/standardized-radio";
import { StandardizedBadge } from "@/components/ui/standardized-badge";
import { designTokens } from "@/lib/design-tokens";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Separator } from "@/components/ui/separator";

export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <AnimatedSection variant="default" size="lg" className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Design System</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive style guide for The Trust Group website
            </p>
          </div>

          {/* Colors */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StandardizedCard variant="default" padding="md">
                <h3 className="font-semibold mb-3">Primary</h3>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-primary" />
                  <div className="h-16 rounded-md bg-primary-hover" />
                  <div className="h-16 rounded-md bg-primary-light" />
                  <div className="h-16 rounded-md bg-primary-dark" />
                </div>
              </StandardizedCard>
              <StandardizedCard variant="default" padding="md">
                <h3 className="font-semibold mb-3">Secondary</h3>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-secondary" />
                  <div className="h-16 rounded-md bg-secondary-hover" />
                  <div className="h-16 rounded-md bg-secondary-light" />
                  <div className="h-16 rounded-md bg-secondary-dark" />
                </div>
              </StandardizedCard>
              <StandardizedCard variant="default" padding="md">
                <h3 className="font-semibold mb-3">Status</h3>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-success" />
                  <div className="h-16 rounded-md bg-warning" />
                  <div className="h-16 rounded-md bg-error" />
                </div>
              </StandardizedCard>
              <StandardizedCard variant="default" padding="md">
                <h3 className="font-semibold mb-3">Neutral</h3>
                <div className="space-y-2">
                  <div className="h-16 rounded-md bg-muted" />
                  <div className="h-16 rounded-md border-2 border-border" />
                </div>
              </StandardizedCard>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Typography */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Typography</h2>
            <StandardizedCard variant="default" padding="lg">
              <div className="space-y-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">Heading 1</h1>
                  <p className="text-sm text-muted-foreground mt-2">Display heading</p>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold">Heading 2</h2>
                  <p className="text-sm text-muted-foreground mt-2">Section heading</p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">Heading 3</h3>
                  <p className="text-sm text-muted-foreground mt-2">Subsection heading</p>
                </div>
                <div>
                  <p className="text-base">Body text - Regular paragraph text</p>
                  <p className="text-sm text-muted-foreground mt-2">Small text</p>
                </div>
              </div>
            </StandardizedCard>
          </section>

          <Separator className="my-12" />

          {/* Buttons */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Buttons</h2>
            <StandardizedCard variant="default" padding="lg">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Variants</h3>
                  <div className="flex flex-wrap gap-3">
                    <StandardizedButton variant="default">Default</StandardizedButton>
                    <StandardizedButton variant="secondary">Secondary</StandardizedButton>
                    <StandardizedButton variant="outline">Outline</StandardizedButton>
                    <StandardizedButton variant="ghost">Ghost</StandardizedButton>
                    <StandardizedButton variant="link">Link</StandardizedButton>
                    <StandardizedButton variant="destructive">Destructive</StandardizedButton>
                    <StandardizedButton variant="success">Success</StandardizedButton>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Sizes</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <StandardizedButton size="sm">Small</StandardizedButton>
                    <StandardizedButton size="default">Default</StandardizedButton>
                    <StandardizedButton size="lg">Large</StandardizedButton>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">States</h3>
                  <div className="flex flex-wrap gap-3">
                    <StandardizedButton>Normal</StandardizedButton>
                    <StandardizedButton disabled>Disabled</StandardizedButton>
                  </div>
                </div>
              </div>
            </StandardizedCard>
          </section>

          <Separator className="my-12" />

          {/* Cards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StandardizedCard variant="default" padding="md">
                <h3 className="font-semibold mb-2">Default Card</h3>
                <p className="text-sm text-muted-foreground">
                  Standard card with default styling
                </p>
              </StandardizedCard>
              <StandardizedCard variant="elevated" padding="md">
                <h3 className="font-semibold mb-2">Elevated Card</h3>
                <p className="text-sm text-muted-foreground">
                  Card with elevated shadow
                </p>
              </StandardizedCard>
              <StandardizedCard variant="interactive" padding="md">
                <h3 className="font-semibold mb-2">Interactive Card</h3>
                <p className="text-sm text-muted-foreground">
                  Clickable card with hover effects
                </p>
              </StandardizedCard>
            </div>
          </section>

          <Separator className="my-12" />

          {/* Form Elements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Form Elements</h2>
            <StandardizedCard variant="default" padding="lg">
              <div className="space-y-6 max-w-2xl">
                <div>
                  <h3 className="font-semibold mb-3">Input</h3>
                  <div className="space-y-3">
                    <StandardizedInput placeholder="Default input" />
                    <StandardizedInput placeholder="Error input" error />
                    <StandardizedInput placeholder="Success input" success />
                    <StandardizedInput placeholder="Disabled input" disabled />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Textarea</h3>
                  <StandardizedTextarea placeholder="Enter your message..." rows={4} />
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Select</h3>
                  <StandardizedSelect>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </StandardizedSelect>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Checkbox</h3>
                  <div className="space-y-2">
                    <StandardizedCheckbox label="Checkbox option 1" />
                    <StandardizedCheckbox label="Checkbox option 2" defaultChecked />
                    <StandardizedCheckbox label="Error checkbox" error />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Radio</h3>
                  <div className="space-y-2">
                    <StandardizedRadio name="radio-group" label="Radio option 1" />
                    <StandardizedRadio name="radio-group" label="Radio option 2" />
                    <StandardizedRadio name="radio-group" label="Error radio" error />
                  </div>
                </div>
              </div>
            </StandardizedCard>
          </section>

          <Separator className="my-12" />

          {/* Badges */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Badges</h2>
            <StandardizedCard variant="default" padding="lg">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Variants</h3>
                  <div className="flex flex-wrap gap-2">
                    <StandardizedBadge variant="default">Default</StandardizedBadge>
                    <StandardizedBadge variant="secondary">Secondary</StandardizedBadge>
                    <StandardizedBadge variant="outline">Outline</StandardizedBadge>
                    <StandardizedBadge variant="success">Success</StandardizedBadge>
                    <StandardizedBadge variant="warning">Warning</StandardizedBadge>
                    <StandardizedBadge variant="error">Error</StandardizedBadge>
                    <StandardizedBadge variant="accent">Accent</StandardizedBadge>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Sizes</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <StandardizedBadge size="sm">Small</StandardizedBadge>
                    <StandardizedBadge size="md">Medium</StandardizedBadge>
                    <StandardizedBadge size="lg">Large</StandardizedBadge>
                  </div>
                </div>
              </div>
            </StandardizedCard>
          </section>

          <Separator className="my-12" />

          {/* Spacing */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Spacing Scale</h2>
            <StandardizedCard variant="default" padding="lg">
              <div className="space-y-4">
                {Object.entries(designTokens.spacing).map(([key, value]) => {
                  if (typeof value === "string") {
                    return (
                      <div key={key} className="flex items-center gap-4">
                        <div className="w-24 text-sm font-mono">{key}</div>
                        <div className="flex-1">
                          <div
                            className="bg-primary h-4"
                            style={{ width: value }}
                          />
                        </div>
                        <div className="text-sm text-muted-foreground font-mono">
                          {value}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </StandardizedCard>
          </section>

          <Separator className="my-12" />

          {/* Shadows */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Shadows (Elevation)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["sm", "md", "lg", "xl", "2xl"].map((shadow) => (
                <StandardizedCard
                  key={shadow}
                  variant="default"
                  padding="lg"
                  className={`shadow-${shadow}`}
                >
                  <h3 className="font-semibold mb-2 capitalize">{shadow}</h3>
                  <p className="text-sm text-muted-foreground">
                    Shadow elevation level
                  </p>
                </StandardizedCard>
              ))}
            </div>
          </section>
        </div>
      </AnimatedSection>
    </div>
  );
}

