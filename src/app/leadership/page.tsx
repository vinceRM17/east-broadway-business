import type { Metadata } from "next";
import { Mail, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { leaders } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leaders of the East Broadway Business Association and learn how to contact them.",
};

export default function LeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight">Leadership</h1>
        <p className="mt-2 text-muted-foreground">
          EBBA is led by dedicated business owners and community members who
          volunteer their time to strengthen the East Broadway corridor.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {leaders.map((leader) => (
          <Card key={leader.id}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarFallback className="bg-primary/10 text-primary text-lg">
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <h3 className="font-semibold">{leader.name}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {leader.title}
                  </Badge>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{leader.bio}</p>
              {leader.email && (
                <a
                  href={`mailto:${leader.email}`}
                  className="mt-4 flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {leader.email}
                </a>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg border bg-muted/30 p-6 text-center max-w-2xl mx-auto">
        <User className="mx-auto h-8 w-8 text-muted-foreground mb-3" />
        <h2 className="text-lg font-semibold">Interested in Serving?</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          EBBA is always looking for dedicated individuals to join committees
          and help lead the association. Reach out to{" "}
          <a
            href="mailto:info@eastbroadwaylou.org"
            className="text-primary hover:underline"
          >
            info@eastbroadwaylou.org
          </a>{" "}
          to learn about opportunities.
        </p>
      </div>
    </div>
  );
}
