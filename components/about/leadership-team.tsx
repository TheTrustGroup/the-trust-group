"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  linkedin?: string;
  email?: string;
}

interface LeadershipTeamProps {
  members: TeamMember[];
  title?: string;
}

export function LeadershipTeam({
  members,
  title = "Leadership Team",
}: LeadershipTeamProps) {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary leaders driving innovation at The Trust Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                {/* Photo */}
                <div className="mb-6">
                  {member.photo ? (
                    <div className="relative w-full aspect-square rounded-xl mb-4 overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={`${member.name}, ${member.role}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-full aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4" aria-hidden="true">
                      <span className="text-6xl font-bold text-primary/40">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-2">
                  {member.linkedin && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-lg"
                      asChild
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {member.email && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-lg"
                      asChild
                    >
                      <a
                        href={`mailto:${member.email}`}
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

