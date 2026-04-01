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
  "Retail",
  "Retail / Office",
  "Retail / Repair",
  "Auto Services",
  "Auto Sales",
  "Healthcare",
  "Healthcare / Mental Health",
  "Veterinary / Healthcare",
  "Professional Services",
  "Legal Services",
  "Technology Services",
  "Specialty Services",
  "Coworking / Office",
  "Event Venue",
  "Entertainment / Music Venue",
  "Nonprofit / Services",
  "Nonprofit / Youth Services",
  "Property Management",
  "Education",
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
  longitude: -85.7445,
  latitude: 38.2390,
  zoom: 14.8,
} as const;
