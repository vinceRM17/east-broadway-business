"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, Clock, Phone, Globe, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CorridorMap } from "@/components/corridor-map";
import { BUSINESS_CATEGORIES } from "@/lib/constants";
import type { Business } from "@/lib/supabase/types";

interface DirectoryContentProps {
  businesses: Business[];
}

export function DirectoryContent({ businesses }: DirectoryContentProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return businesses.filter((b) => {
      const matchesSearch =
        !search ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || b.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [businesses, search, selectedCategory]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
      {/* Left: Search + List */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search businesses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {selectedCategory && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="h-7 px-2 text-xs"
            >
              <X className="mr-1 h-3 w-3" />
              Clear
            </Button>
          )}
          {BUSINESS_CATEGORIES.map((cat) => (
            <Badge
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() =>
                setSelectedCategory(selectedCategory === cat ? null : cat)
              }
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground">
          {filtered.length} business{filtered.length !== 1 && "es"} found
        </p>

        {/* Business Cards */}
        <div className="space-y-3">
          {filtered.map((business) => (
            <Card
              key={business.id}
              className={`cursor-pointer transition-colors hover:bg-accent/50 ${
                selectedBusiness === business.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedBusiness(business.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold truncate">{business.name}</h3>
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        {business.category}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {business.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {business.address}
                      </span>
                      {business.hours && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {business.hours}
                        </span>
                      )}
                      {business.phone && (
                        <a
                          href={`tel:${business.phone}`}
                          className="flex items-center gap-1 hover:text-foreground"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Phone className="h-3 w-3" />
                          {business.phone}
                        </a>
                      )}
                      {business.website && (
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 hover:text-foreground"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Globe className="h-3 w-3" />
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {filtered.length === 0 && (
            <div className="py-12 text-center text-muted-foreground">
              <p>No businesses match your search.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory(null);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Right: Map */}
      <div className="hidden lg:block">
        <div className="sticky top-20 h-[calc(100vh-6rem)] rounded-lg overflow-hidden border">
          <CorridorMap
            businesses={filtered}
            selectedId={selectedBusiness}
            onSelect={setSelectedBusiness}
          />
        </div>
      </div>

      {/* Mobile Map Toggle */}
      <div className="lg:hidden">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border p-3 text-sm font-medium hover:bg-accent">
            <MapPin className="h-4 w-4" />
            View Map
          </summary>
          <div className="mt-3 h-80 rounded-lg overflow-hidden border">
            <CorridorMap
              businesses={filtered}
              selectedId={selectedBusiness}
              onSelect={setSelectedBusiness}
            />
          </div>
        </details>
      </div>
    </div>
  );
}
