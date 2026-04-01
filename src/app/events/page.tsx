import type { Metadata } from "next";
import { EventsContent } from "./events-content";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events Calendar",
  description:
    "Upcoming events along Louisville's East Broadway corridor. Markets, workshops, art walks, and community gatherings.",
};

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Events Calendar</h1>
        <p className="mt-2 text-muted-foreground">
          Stay connected with what&apos;s happening along the corridor. Community
          members can suggest events for consideration.
        </p>
      </div>
      <EventsContent events={events} />
    </div>
  );
}
