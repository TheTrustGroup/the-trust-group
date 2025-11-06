"use client";

import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  location?: string;
  milestone?: boolean;
}

interface CompanyTimelineProps {
  events: TimelineEvent[];
  title?: string;
}

export function CompanyTimeline({
  events,
  title = "Our Journey",
}: CompanyTimelineProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of our growth, milestones, and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

            {/* Events */}
            <div className="space-y-12">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 md:gap-8 items-start"
                >
                  {/* Year Badge */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg border-4 border-background shadow-lg transition-transform hover:scale-110",
                        event.milestone
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-accent-foreground"
                      )}
                    >
                      <Calendar className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-2xl font-bold text-primary">
                        {event.year}
                      </span>
                      {event.milestone && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                          Major Milestone
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-2">
                      {event.description}
                    </p>
                    {event.location && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

