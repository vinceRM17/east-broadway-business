"use client";

import { useRef, useCallback, useState } from "react";
import Map, { Marker, Popup, type MapRef } from "react-map-gl/mapbox";
import { MapPin } from "lucide-react";
import type { Business } from "@/lib/supabase/types";
import { MAPBOX_CENTER } from "@/lib/constants";
import "mapbox-gl/dist/mapbox-gl.css";

const CATEGORY_COLORS: Record<string, string> = {
  Restaurant: "#ef4444",
  "Coffee & Drinks": "#a16207",
  Retail: "#2563eb",
  Services: "#7c3aed",
  "Professional Services": "#0d9488",
  "Arts & Culture": "#db2777",
  "Health & Wellness": "#16a34a",
};

interface CorridorMapProps {
  businesses: Business[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
}

export function CorridorMap({ businesses, selectedId, onSelect }: CorridorMapProps) {
  const mapRef = useRef<MapRef>(null);
  const [popup, setPopup] = useState<Business | null>(null);

  const handleMarkerClick = useCallback(
    (business: Business) => {
      setPopup(business);
      onSelect?.(business.id);
      mapRef.current?.flyTo({
        center: [business.longitude, business.latitude],
        zoom: 16,
        duration: 500,
      });
    },
    [onSelect]
  );

  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!token) {
    return (
      <div className="flex h-full items-center justify-center bg-muted rounded-lg border">
        <div className="text-center p-6">
          <MapPin className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">
            Set <code className="font-mono text-xs bg-muted-foreground/10 px-1 py-0.5 rounded">NEXT_PUBLIC_MAPBOX_TOKEN</code> to enable the interactive map.
          </p>
        </div>
      </div>
    );
  }

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={token}
      initialViewState={MAPBOX_CENTER}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      attributionControl={false}
    >
      {businesses.map((b) => (
        <Marker
          key={b.id}
          longitude={b.longitude}
          latitude={b.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            handleMarkerClick(b);
          }}
        >
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white shadow-md cursor-pointer transition-transform hover:scale-110"
            style={{ backgroundColor: CATEGORY_COLORS[b.category] ?? "#6b7280" }}
            title={b.name}
          >
            <MapPin className="h-3.5 w-3.5 text-white" />
          </div>
        </Marker>
      ))}

      {popup && (
        <Popup
          longitude={popup.longitude}
          latitude={popup.latitude}
          anchor="bottom"
          offset={20}
          closeOnClick={false}
          onClose={() => setPopup(null)}
          className="[&_.mapboxgl-popup-content]:!p-3 [&_.mapboxgl-popup-content]:!rounded-lg [&_.mapboxgl-popup-content]:!shadow-lg"
        >
          <div className="max-w-[200px]">
            <h3 className="font-semibold text-sm">{popup.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{popup.category}</p>
            <p className="text-xs text-gray-600 mt-1">{popup.address}</p>
            {popup.hours && (
              <p className="text-xs text-gray-500 mt-1">{popup.hours}</p>
            )}
          </div>
        </Popup>
      )}
    </Map>
  );
}
