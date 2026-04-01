export const SITE_NAME = "East Broadway Business Association";
export const SITE_DESCRIPTION =
  "Connecting businesses and community along Louisville's East Broadway corridor.";
export const CONTACT_EMAIL = "info@eastbroadwaylou.org";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/directory", label: "Directory" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/leadership", label: "Leadership" },
  { href: "/get-involved", label: "Get Involved" },
] as const;

export const BUSINESS_CATEGORIES = [
  "Restaurant",
  "Coffee & Drinks",
  "Retail",
  "Services",
  "Professional Services",
  "Arts & Culture",
  "Health & Wellness",
] as const;

export const EVENT_CATEGORIES = [
  "Market",
  "Workshop",
  "Arts & Culture",
  "Meeting",
  "Festival",
  "Volunteer",
  "Community",
] as const;

export const MAPBOX_CENTER = {
  longitude: -85.7435,
  latitude: 38.2390,
  zoom: 15.5,
} as const;
