import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Calendar,
  Users,
  MapPin,
  Heart,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const IMPACT_STATS = [
  { label: "Corridor Businesses", value: "55+", icon: Building2 },
  { label: "Neighborhoods Connected", value: "3", icon: MapPin },
  { label: "Corridor Investment", value: "$5M+", icon: TrendingUp },
  { label: "Years of History", value: "110+", icon: Calendar },
];

const GOALS = [
  {
    title: "Support Local Businesses",
    description:
      "Provide resources, networking, and collective marketing to help corridor businesses thrive.",
  },
  {
    title: "Beautify the Corridor",
    description:
      "Partner with Louisville Metro on streetscape improvements, public art, and greenspace.",
  },
  {
    title: "Build Community",
    description:
      "Host events that bring residents, businesses, and visitors together along East Broadway.",
  },
  {
    title: "Advocate for the Corridor",
    description:
      "Represent business and community interests in zoning, infrastructure, and development decisions.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-secondary/20 to-background">
        <div className="container mx-auto px-4 py-20 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Est. 2026 &middot; Louisville, KY
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              East Broadway
              <span className="block text-primary">Business Association</span>
            </h1>
            <p className="mt-2 text-sm font-medium tracking-widest uppercase text-primary/60">
              From the Historic Broadway Theater to Paristown
            </p>
            <p className="mt-4 text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              Uniting businesses, nonprofits, and neighbors along Louisville&apos;s
              East Broadway corridor — from Smoketown through Phoenix Hill to
              Paristown. Together, we&apos;re building something great.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button size="lg" render={<Link href="/directory" />}>
                Explore the Corridor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" render={<Link href="/get-involved" />}>
                <Heart className="mr-2 h-4 w-4" />
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Goals</h2>
          <p className="mt-3 text-muted-foreground">
            The East Broadway Business Association is focused on four key areas
            to strengthen our corridor.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GOALS.map((goal) => (
            <Card key={goal.title} className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">{goal.title}</h3>
                <p className="text-sm text-muted-foreground">{goal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Broadway All The Way Callout */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="mb-4">
            Corridor Investment
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            Broadway All The Way
          </h2>
          <p className="mt-4 text-muted-foreground">
            East Broadway is part of Louisville&apos;s historic Broadway corridor,
            stretching from the Ohio River to Baxter Avenue across 11 neighborhoods.
            With a $5 million federal RAISE grant and a comprehensive master plan,
            the corridor is being transformed into a safer, more walkable, and more
            vibrant destination for all.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button variant="outline" render={<Link href="/about" />}>
              Learn More About Our Vision
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16 text-center">
          <Users className="mx-auto mb-4 h-10 w-10" />
          <h2 className="text-3xl font-bold tracking-tight">
            Join the Movement
          </h2>
          <p className="mt-3 mx-auto max-w-xl opacity-90">
            Whether you own a business on the corridor, live nearby, or just love
            East Broadway — there&apos;s a place for you. Help us build something
            great together.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              variant="secondary"
              render={<Link href="/get-involved" />}
            >
              Become a Member
            </Button>
            <Button
              size="lg"
              className="bg-white/15 text-white border border-white/40 hover:bg-white/25"
              render={<Link href="/events" />}
            >
              View Upcoming Events
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
