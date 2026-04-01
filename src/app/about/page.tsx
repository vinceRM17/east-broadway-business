import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  Handshake,
  TreePine,
  Megaphone,
  Store,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the East Broadway Business Association's mission, vision, and goals for Louisville's East Broadway corridor.",
};

const PILLARS = [
  {
    icon: Store,
    title: "Economic Vitality",
    description:
      "Attract and retain businesses, help members grow, and create a thriving commercial corridor that serves residents and visitors.",
  },
  {
    icon: TreePine,
    title: "Design & Beautification",
    description:
      "Improve the physical appearance of the corridor through streetscape improvements, public art, signage, and green infrastructure.",
  },
  {
    icon: Handshake,
    title: "Organization & Partnership",
    description:
      "Build a sustainable association structure with broad membership, strong partnerships, and transparent governance.",
  },
  {
    icon: Megaphone,
    title: "Promotion & Advocacy",
    description:
      "Market the corridor as a destination, advocate for smart infrastructure investments, and ensure community voices are heard.",
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight">About EBBA</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The East Broadway Business Association (EBBA) is being reactivated in
          2026 to unite businesses, residents, and community partners along one
          of Louisville&apos;s most historically significant corridors.
        </p>
      </div>

      <Separator className="my-10" />

      {/* Mission & Vision */}
      <div className="mx-auto max-w-3xl grid gap-8 sm:grid-cols-2">
        <Card>
          <CardContent className="pt-6">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h2 className="text-xl font-bold">Our Mission</h2>
            <p className="mt-2 text-muted-foreground">
              To strengthen the East Broadway corridor by fostering economic
              growth, building community connections, and advocating for
              equitable development that benefits businesses and residents
              alike.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <Eye className="h-8 w-8 text-primary mb-3" />
            <h2 className="text-xl font-bold">Our Vision</h2>
            <p className="mt-2 text-muted-foreground">
              A vibrant, walkable East Broadway that is a destination for
              dining, shopping, arts, and community — where local businesses
              prosper and every neighbor feels welcome.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-10" />

      {/* Four Pillars */}
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
          Our Four Pillars
        </h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Following the Main Street America framework, EBBA organizes its work
          around four pillars that drive sustainable commercial district
          revitalization.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <Card key={pillar.title}>
              <CardContent className="pt-6">
                <pillar.icon className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold">{pillar.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator className="my-10" />

      {/* Broadway Context */}
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          The Broadway Corridor
        </h2>
        <div className="prose prose-gray max-w-none text-muted-foreground space-y-4">
          <p>
            Broadway is one of Louisville&apos;s most historic streets, stretching
            from the Ohio River to Baxter Avenue and touching 11 distinct
            neighborhoods. For decades, it has been both a commercial lifeline
            and a community gathering place.
          </p>
          <p>
            The <strong>Broadway All The Way</strong> initiative, backed by a
            $5 million federal RAISE grant, is transforming the corridor with
            safer crossings, protected bike lanes, improved transit stops, and
            streetscape investments. The comprehensive master plan, developed
            by Gresham Smith, prioritizes safety, mobility, and equity.
          </p>
          <p>
            EBBA is positioned to ensure that East Broadway&apos;s businesses and
            residents benefit from this investment — that growth is inclusive,
            local businesses are supported, and the corridor&apos;s unique
            character is preserved.
          </p>
        </div>
      </div>

      <Separator className="my-10" />

      {/* Visitor Guide */}
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          Visiting East Broadway
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="font-semibold mb-1">Getting Here</h3>
              <p className="text-sm text-muted-foreground">
                East Broadway is accessible via TARC bus routes 15 and 17.
                Street parking is available along the corridor. The area is
                bikeable via the Broadway bike lane.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="font-semibold mb-1">Where to Park</h3>
              <p className="text-sm text-muted-foreground">
                Free street parking is available on East Broadway and side
                streets. Most spots have a 2-hour limit during business hours.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <h3 className="font-semibold mb-1">First Visit?</h3>
              <p className="text-sm text-muted-foreground">
                Start at Corridor Coffee for a great cup, stroll the shops,
                and grab dinner at The Broadway Tap. Check our events page for
                what&apos;s happening.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold">Ready to Get Involved?</h2>
        <p className="mt-2 text-muted-foreground">
          Whether you&apos;re a business owner, resident, or community partner —
          we&apos;d love to connect.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Button render={<Link href="/get-involved" />}>
            Join EBBA
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" render={<Link href="/leadership" />}>
            Meet Our Leaders
          </Button>
        </div>
      </div>
    </div>
  );
}
