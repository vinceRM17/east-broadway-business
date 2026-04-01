"use client";

import { useState, useMemo } from "react";
import { format, parseISO, isPast } from "date-fns";
import {
  Calendar,
  MapPin,
  Clock,
  Filter,
  Plus,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EVENT_CATEGORIES } from "@/lib/constants";
import type { Event } from "@/lib/supabase/types";

interface EventsContentProps {
  events: Event[];
}

export function EventsContent({ events }: EventsContentProps) {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [showPast, setShowPast] = useState(false);
  const [suggestOpen, setSuggestOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => {
    return events
      .filter((e) => {
        const matchesCategory = !categoryFilter || e.category === categoryFilter;
        const matchesTime = showPast || !isPast(parseISO(e.date));
        return matchesCategory && matchesTime;
      })
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [events, categoryFilter, showPast]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would POST to a Supabase server action
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          {categoryFilter && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCategoryFilter(null)}
              className="h-7 px-2 text-xs"
            >
              <X className="mr-1 h-3 w-3" />
              Clear
            </Button>
          )}
          {EVENT_CATEGORIES.map((cat) => (
            <Badge
              key={cat}
              variant={categoryFilter === cat ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() =>
                setCategoryFilter(categoryFilter === cat ? null : cat)
              }
            >
              {cat}
            </Badge>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPast(!showPast)}
          >
            <Filter className="mr-1 h-3 w-3" />
            {showPast ? "Hide Past" : "Show Past"}
          </Button>

          <Dialog open={suggestOpen} onOpenChange={setSuggestOpen}>
            <DialogTrigger render={<Button size="sm" />}>
              <Plus className="mr-1 h-3 w-3" />
              Suggest Event
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Suggest an Event</DialogTitle>
                <DialogDescription>
                  Submit an event for the East Broadway corridor. Events are
                  reviewed before being published.
                </DialogDescription>
              </DialogHeader>

              {submitted ? (
                <div className="py-8 text-center">
                  <Calendar className="mx-auto h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold text-lg">Thank You!</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your event suggestion has been submitted for review.
                  </p>
                  <Button
                    className="mt-4"
                    onClick={() => {
                      setSubmitted(false);
                      setSuggestOpen(false);
                    }}
                  >
                    Close
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-title">Event Title</Label>
                    <Input id="event-title" required placeholder="e.g., Community BBQ" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-desc">Description</Label>
                    <Textarea
                      id="event-desc"
                      required
                      placeholder="What is this event about?"
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="event-date">Date</Label>
                      <Input id="event-date" type="date" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-time">Time</Label>
                      <Input id="event-time" required placeholder="e.g., 6-8 PM" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-location">Location</Label>
                    <Input
                      id="event-location"
                      required
                      placeholder="Address or venue name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-category">Category</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {EVENT_CATEGORIES.map((cat) => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="event-name">Your Name</Label>
                      <Input id="event-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-email">Your Email</Label>
                      <Input id="event-email" type="email" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Event
                  </Button>
                </form>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event) => {
          const eventDate = parseISO(event.date);
          const past = isPast(eventDate);

          return (
            <Card key={event.id} className={past ? "opacity-60" : ""}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <Badge variant={past ? "secondary" : "default"} className="shrink-0">
                    {event.category}
                  </Badge>
                  {past && (
                    <Badge variant="outline" className="text-xs">
                      Past
                    </Badge>
                  )}
                </div>
                <h3 className="mt-3 font-semibold leading-tight">{event.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                  {event.description}
                </p>
                <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3 shrink-0" />
                    {format(eventDate, "EEEE, MMMM d, yyyy")}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3 shrink-0" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3 w-3 shrink-0" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">
          <Calendar className="mx-auto mb-3 h-10 w-10" />
          <p>No upcoming events match your filter.</p>
          <Button
            variant="link"
            onClick={() => {
              setCategoryFilter(null);
              setShowPast(true);
            }}
          >
            Show all events
          </Button>
        </div>
      )}
    </div>
  );
}
