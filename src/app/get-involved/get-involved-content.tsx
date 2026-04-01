"use client";

import { useState } from "react";
import {
  Building2,
  HandHelping,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BENEFITS = [
  "Listing in the EBBA online business directory and interactive map",
  "Promotion through EBBA social media and events",
  "Networking with fellow corridor business owners",
  "Voice in corridor development and advocacy decisions",
  "Access to workshops, grants, and Louisville Metro resources",
  "Participation in collective marketing campaigns",
];

const VOLUNTEER_OPPORTUNITIES = [
  {
    title: "Corridor Cleanup Crew",
    description:
      "Help keep East Broadway clean and beautiful with monthly cleanup events.",
  },
  {
    title: "Events Committee",
    description:
      "Plan and execute corridor events like the Spring Market and Summer Block Party.",
  },
  {
    title: "Marketing & Social Media",
    description:
      "Help tell the East Broadway story through content, photography, and social media.",
  },
  {
    title: "Beautification & Public Art",
    description:
      "Work on streetscape improvements, planters, murals, and public art installations.",
  },
];

export function GetInvolvedContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-md py-16 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-primary mb-4" />
        <h2 className="text-2xl font-bold">Thank You!</h2>
        <p className="mt-2 text-muted-foreground">
          We&apos;ve received your inquiry and will be in touch soon. Welcome to the
          East Broadway community!
        </p>
        <Button className="mt-6" onClick={() => setSubmitted(false)}>
          Submit Another
        </Button>
      </div>
    );
  }

  return (
    <Tabs defaultValue="business" className="max-w-3xl">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="business" className="gap-1.5">
          <Building2 className="h-4 w-4" />
          <span className="hidden sm:inline">Business</span> Membership
        </TabsTrigger>
        <TabsTrigger value="volunteer" className="gap-1.5">
          <HandHelping className="h-4 w-4" />
          Volunteer
        </TabsTrigger>
        <TabsTrigger value="contact" className="gap-1.5">
          <Mail className="h-4 w-4" />
          Contact
        </TabsTrigger>
      </TabsList>

      {/* Business Membership */}
      <TabsContent value="business" className="mt-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Business Membership</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Join EBBA and help shape the future of the East Broadway corridor.
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-3">Member Benefits</h3>
            <ul className="space-y-2">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="biz-name">Your Name</Label>
              <Input id="biz-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="biz-business">Business Name</Label>
              <Input id="biz-business" required />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="biz-email">Email</Label>
              <Input id="biz-email" type="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="biz-phone">Phone</Label>
              <Input id="biz-phone" type="tel" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="biz-message">Tell us about your business</Label>
            <Textarea
              id="biz-message"
              rows={3}
              placeholder="What does your business do? How long have you been on the corridor?"
            />
          </div>
          <Button type="submit" size="lg">
            Apply for Membership
          </Button>
        </form>
      </TabsContent>

      {/* Volunteer */}
      <TabsContent value="volunteer" className="mt-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Volunteer</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Help us build a stronger East Broadway. No experience needed — just enthusiasm.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {VOLUNTEER_OPPORTUNITIES.map((opp) => (
            <Card key={opp.title}>
              <CardContent className="pt-6">
                <h3 className="font-semibold">{opp.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {opp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="vol-name">Your Name</Label>
              <Input id="vol-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="vol-email">Email</Label>
              <Input id="vol-email" type="email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="vol-message">
              What interests you? (optional)
            </Label>
            <Textarea
              id="vol-message"
              rows={3}
              placeholder="Which opportunities interest you? Any skills you'd like to contribute?"
            />
          </div>
          <Button type="submit" size="lg">
            Sign Up to Volunteer
          </Button>
        </form>
      </TabsContent>

      {/* Contact */}
      <TabsContent value="contact" className="mt-6 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Questions, ideas, or just want to say hello? We&apos;d love to hear
            from you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="gen-name">Your Name</Label>
              <Input id="gen-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gen-email">Email</Label>
              <Input id="gen-email" type="email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="gen-message">Message</Label>
            <Textarea
              id="gen-message"
              required
              rows={4}
              placeholder="How can we help?"
            />
          </div>
          <Button type="submit" size="lg">
            Send Message
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}
