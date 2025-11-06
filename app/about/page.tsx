"use client";

import { ServiceHero } from "@/components/services/service-hero";
import { Section } from "@/components/ui/section";
import { CompanyTimeline } from "@/components/about/company-timeline";
import { LeadershipTeam } from "@/components/about/leadership-team";
import { AwardsSection } from "@/components/about/awards-section";
import { CareersTeaser } from "@/components/about/careers-teaser";
import { EcosystemSection } from "@/components/about/ecosystem-section";
import { ValuesGrid } from "@/components/about/values-grid";
import { StatisticsSection } from "@/components/about/statistics-section";
import { Target, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, Heart, Lightbulb } from "lucide-react";

const timelineEvents = [
  {
    year: "2014",
    title: "The Trust Group Founded",
    description: "Started as a small team of passionate technologists with a vision to transform businesses through innovative solutions.",
    location: "San Francisco, CA",
    milestone: true,
  },
  {
    year: "2016",
    title: "First Major Enterprise Client",
    description: "Secured our first Fortune 500 client, establishing credibility in enterprise software solutions.",
    location: "New York, NY",
  },
  {
    year: "2018",
    title: "AI Division Launch",
    description: "Launched our AI Solutions division, becoming one of the early adopters of machine learning in business applications.",
    milestone: true,
  },
  {
    year: "2020",
    title: "Ecosystem Expansion",
    description: "Established The Trust Group as a parent company, launching multiple specialized subsidiaries under our umbrella.",
    location: "Multiple Locations",
    milestone: true,
  },
  {
    year: "2022",
    title: "500+ Projects Milestone",
    description: "Reached a major milestone of delivering over 500 successful projects across various industries and technologies.",
  },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Received multiple industry awards and recognitions for excellence in AI, software development, and innovation.",
    milestone: true,
  },
];

const leadershipTeam = [
  {
    name: "Alexandra Chen",
    role: "Chief Executive Officer",
    bio: "With over 15 years of experience in technology leadership, Alexandra has been instrumental in shaping The Trust Group's vision and strategic direction. She holds an MBA from Stanford and previously led technology initiatives at major tech companies.",
    linkedin: "https://linkedin.com/in/alexandrachen",
    email: "alexandra@thetrustgroup.com",
  },
  {
    name: "Marcus Rodriguez",
    role: "Chief Technology Officer",
    bio: "Marcus is a renowned expert in AI and machine learning with a PhD in Computer Science from MIT. He has published over 50 research papers and led the development of several groundbreaking AI solutions.",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    email: "marcus@thetrustgroup.com",
  },
  {
    name: "Sarah Johnson",
    role: "Chief Operating Officer",
    bio: "Sarah brings extensive experience in operations and business strategy. She has successfully scaled multiple technology companies and is passionate about building high-performing teams and operational excellence.",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah@thetrustgroup.com",
  },
  {
    name: "David Kim",
    role: "VP of Engineering",
    bio: "David leads our engineering teams with a focus on innovation and quality. With expertise in cloud architecture and scalable systems, he has been key to our technical excellence and delivery success.",
    linkedin: "https://linkedin.com/in/davidkim",
    email: "david@thetrustgroup.com",
  },
  {
    name: "Emily Martinez",
    role: "VP of Client Success",
    bio: "Emily ensures our clients achieve exceptional results. Her background in consulting and customer success has helped us maintain a 98% client satisfaction rate and build lasting partnerships.",
    linkedin: "https://linkedin.com/in/emilymartinez",
    email: "emily@thetrustgroup.com",
  },
  {
    name: "James Wilson",
    role: "VP of Business Development",
    bio: "James drives our growth strategy and partnerships. His extensive network and business acumen have been crucial in expanding our client base and establishing strategic alliances across industries.",
    linkedin: "https://linkedin.com/in/jameswilson",
    email: "james@thetrustgroup.com",
  },
];

const awards = [
  {
    title: "Best AI Solutions Provider",
    organization: "Tech Innovation Awards",
    year: "2024",
    category: "Artificial Intelligence",
    icon: "trophy" as const,
  },
  {
    title: "Excellence in Software Development",
    organization: "Software Industry Association",
    year: "2023",
    category: "Enterprise Solutions",
    icon: "award" as const,
  },
  {
    title: "Top Cloud Services Provider",
    organization: "Cloud Computing Awards",
    year: "2023",
    category: "Cloud Infrastructure",
    icon: "star" as const,
  },
  {
    title: "Innovation in Technology",
    organization: "Global Tech Summit",
    year: "2024",
    category: "Innovation",
    icon: "trophy" as const,
  },
  {
    title: "Best Workplace Culture",
    organization: "Tech Culture Awards",
    year: "2024",
    category: "Human Resources",
    icon: "star" as const,
  },
  {
    title: "Outstanding Client Satisfaction",
    organization: "Customer Excellence Awards",
    year: "2023",
    category: "Client Services",
    icon: "award" as const,
  },
];

const cultureValues = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We encourage creative thinking and embrace new technologies to solve complex challenges.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "We believe in the power of teamwork and open communication across all levels.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We support our team members with flexible schedules and comprehensive wellness programs.",
  },
  {
    icon: Building2,
    title: "Growth Opportunities",
    description: "We invest in our people through continuous learning, mentorship, and career development.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        title="About The Trust Group"
        subtitle="Our Story"
        description="A parent company leading innovation across multiple tech ventures, transforming businesses through cutting-edge technology solutions."
        icon={Building2}
        features={[
          "10+ years of excellence",
          "500+ successful projects",
          "50+ team members",
          "Multiple industry awards"
        ]}
      />

      {/* Company Story Timeline */}
      <CompanyTimeline
        events={timelineEvents}
        title="Our Journey"
      />

      {/* Mission, Vision, Values */}
      <Section variant="muted" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Mission, Vision & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="p-6 border-2 border-primary/20 bg-primary/5">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses through innovative technology solutions that drive 
              growth, efficiency, and competitive advantage. We are committed to 
              delivering excellence in every project and building lasting partnerships 
              with our clients.
            </p>
          </Card>

          <Card className="p-6 border-2 border-accent/20 bg-accent/5">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-8 w-8 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To be the most trusted technology partner, recognized globally for 
              excellence, innovation, and transformative impact. We envision a future 
              where technology seamlessly enhances human potential and business success.
            </p>
          </Card>
        </div>

        {/* Core Values */}
        <div className="max-w-4xl mx-auto">
          <ValuesGrid />
        </div>
      </Section>

      {/* Statistics */}
      <Section variant="default" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            By The Numbers
          </h2>
          <p className="text-lg text-muted-foreground">
            Our track record speaks for itself
          </p>
        </div>
        <StatisticsSection />
      </Section>

      {/* Leadership Team */}
      <LeadershipTeam members={leadershipTeam} />

      {/* Company Culture */}
      <Section variant="default" size="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Culture
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We foster an environment where innovation thrives and people grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cultureValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Ecosystem */}
      <Section variant="muted" size="default">
        <EcosystemSection />
      </Section>

      {/* Awards & Recognitions */}
      <AwardsSection awards={awards} />

      {/* Career Opportunities */}
      <CareersTeaser />
    </main>
  );
}

