"use client";

import { useRef, useCallback, useState, useMemo } from "react";
import Map, { Marker, Popup, type MapRef } from "react-map-gl/mapbox";
import { MapPin } from "lucide-react";
import type { Business } from "@/lib/supabase/types";
import { MAPBOX_CENTER } from "@/lib/constants";
import "mapbox-gl/dist/mapbox-gl.css";

const CATEGORY_COLORS: Record<string, string> = {
  Restaurant: "#ef4444",
  "Coffee & Drinks": "#a16207",
  Retail: "#2563eb",
  "Retail / Office": "#2563eb",
  "Retail / Repair": "#2563eb",
  "Auto Services": "#6b7280",
  "Auto Sales": "#6b7280",
  Healthcare: "#16a34a",
  "Healthcare / Mental Health": "#16a34a",
  "Veterinary / Healthcare": "#16a34a",
  "Professional Services": "#0d9488",
  "Legal Services": "#0d9488",
  "Technology Services": "#7c3aed",
  "Specialty Services": "#a16207",
  "Coworking / Office": "#0284c7",
  "Event Venue": "#db2777",
  "Entertainment / Music Venue": "#db2777",
  "Arts & Culture": "#db2777",
  "Nonprofit / Services": "#ea580c",
  "Nonprofit / Youth Services": "#ea580c",
  "Property Management": "#6b7280",
  Education: "#6b7280",
  Church: "#8b5cf6",
};

interface LocationGroup {
  key: string;
  latitude: number;
  longitude: number;
  businesses: Business[];
}

interface CorridorMapProps {
  businesses: Business[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
}

export function CorridorMap({ businesses, selectedId, onSelect }: CorridorMapProps) {
  const mapRef = useRef<MapRef>(null);
  const [popupGroup, setPopupGroup] = useState<LocationGroup | null>(null);

  // Group businesses by address to prevent stacking
  const groups = useMemo(() => {
    const groupMap: Record<string, LocationGroup> = {};
    for (const b of businesses) {
      const key = b.address;
      if (groupMap[key]) {
        groupMap[key].businesses.push(b);
      } else {
        groupMap[key] = {
          key,
          latitude: b.latitude,
          longitude: b.longitude,
          businesses: [b],
        };
      }
    }
    return Object.values(groupMap);
  }, [businesses]);

  const handleMarkerClick = useCallback(
    (group: LocationGroup) => {
      setPopupGroup(group);
      onSelect?.(group.businesses[0].id);
      mapRef.current?.flyTo({
        center: [group.longitude, group.latitude],
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
      {groups.map((group) => {
        const count = group.businesses.length;
        const primary = group.businesses[0];
        const color = CATEGORY_COLORS[primary.category] ?? "#6b7280";

        return (
          <Marker
            key={group.key}
            longitude={group.longitude}
            latitude={group.latitude}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              handleMarkerClick(group);
            }}
          >
            <div className="relative cursor-pointer transition-transform hover:scale-110">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: color }}
                title={count > 1 ? `${count} businesses` : primary.name}
              >
                {count > 1 ? (
                  <span className="text-[10px] font-bold text-white">{count}</span>
                ) : (
                  <MapPin className="h-3.5 w-3.5 text-white" />
                )}
              </div>
            </div>
          </Marker>
        );
      })}

      {popupGroup && (
        <Popup
          longitude={popupGroup.longitude}
          latitude={popupGroup.latitude}
          anchor="bottom"
          offset={20}
          closeOnClick={false}
          onClose={() => setPopupGroup(null)}
          className="[&_.mapboxgl-popup-content]:!p-3 [&_.mapboxgl-popup-content]:!rounded-lg [&_.mapboxgl-popup-content]:!shadow-lg"
        >
          <div className="max-w-[240px]">
            {popupGroup.businesses.length === 1 ? (
              <div>
                <h3 className="font-semibold text-sm">{popupGroup.businesses[0].name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{popupGroup.businesses[0].category}</p>
                <p className="text-xs text-gray-600 mt-1">{popupGroup.businesses[0].address}</p>
                {popupGroup.businesses[0].hours && (
                  <p className="text-xs text-gray-500 mt-1">{popupGroup.businesses[0].hours}</p>
                )}
              </div>
            ) : (
              <div>
                <p className="text-xs text-gray-500 mb-1.5">{popupGroup.businesses[0].address}</p>
                <div className="space-y-1.5 max-h-48 overflow-y-auto">
                  {popupGroup.businesses.map((b) => (
                    <div
                      key={b.id}
                      className="flex items-start gap-2 cursor-pointer hover:bg-gray-50 rounded p-1 -mx-1"
                      onClick={() => onSelect?.(b.id)}
                    >
                      <div
                        className="mt-1 h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: CATEGORY_COLORS[b.category] ?? "#6b7280" }}
                      />
                      <div className="min-w-0">
                        <h4 className="font-medium text-xs leading-tight">{b.name}</h4>
                        <p className="text-[10px] text-gray-500">{b.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Popup>
      )}
    </Map>
  );
}
