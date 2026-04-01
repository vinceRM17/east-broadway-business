import type { Business, Event, Leader } from "@/lib/supabase/types";

// Static data mirroring Supabase seed data.
// Once Supabase is connected, replace with server-side queries.

export const businesses: Business[] = [
  {
    id: "1", name: "Chicken King", description: "Louisville institution specializing in fried chicken, wings, seafood, barbecue, and home-style sides. Offers dine-in, drive-thru, and online ordering.", category: "Restaurant", address: "639 E Broadway, Louisville, KY 40202", phone: "(502) 589-5464", email: null, website: "https://www.chickenkingtogo.com/", image_url: null, latitude: 38.2407, longitude: -85.7503, hours: "Mon-Sat 10:30am-9pm (drive-thru), Lobby until 2pm", is_member: true, created_at: "",
  },
  {
    id: "2", name: "Meineke Car Care Center", description: "Full-service auto repair center offering oil changes, brake repair, exhaust/muffler work, tire services, A/C repair, transmission, and diagnostics.", category: "Auto Services", address: "701 E Broadway, Louisville, KY 40202", phone: "(502) 792-7467", email: null, website: "https://www.meineke.com/locations/ky/louisville-1407/", image_url: null, latitude: 38.2404, longitude: -85.7492, hours: null, is_member: true, created_at: "",
  },
  {
    id: "3", name: "Shan the Computer Man", description: "Computer repair, security camera installation, custom computer services, intercom systems, virus/malware removal, printer repair, and alarm services. Owned by Shannon Simpson, est. 2012.", category: "Technology Services", address: "807 E Broadway, Louisville, KY 40204", phone: "(502) 996-7554", email: null, website: null, image_url: null, latitude: 38.2398, longitude: -85.747, hours: "Mon-Fri 11am-7pm, Sat 12pm-4pm", is_member: true, created_at: "",
  },
  {
    id: "4", name: "Muldoon Memorials", description: "Family-owned monument and memorial company in business since 1855 — over 170 years. Professional assistance creating monuments using high-quality materials.", category: "Specialty Services", address: "808 E Broadway, Louisville, KY 40204", phone: "(502) 584-1129", email: null, website: "https://www.muldoonmemorials.com/", image_url: null, latitude: 38.2397, longitude: -85.7468, hours: "Mon-Fri 9am-5pm, Sat 9am-1pm", is_member: true, created_at: "",
  },
  {
    id: "5", name: "Kertis Creative", description: "Multidisciplinary, narrative-based creative agency operating since 2008. Part of the Epping District development on East Broadway.", category: "Professional Services", address: "810 E Broadway, Louisville, KY 40204", phone: null, email: null, website: "https://www.kertiscreative.com", image_url: null, latitude: 38.2397, longitude: -85.7467, hours: null, is_member: true, created_at: "",
  },
  {
    id: "6", name: "Tom Gray Auto Sales", description: "Used car dealership established 1991 offering a wide selection of quality used vehicles. Owner: Tom Gray; Sales Manager: Darrell Tinsley.", category: "Auto Sales", address: "811 E Broadway, Louisville, KY 40204", phone: "(502) 625-0360", email: null, website: "https://www.tomgrayautosales.com/", image_url: null, latitude: 38.2397, longitude: -85.7466, hours: null, is_member: true, created_at: "",
  },
  {
    id: "7", name: "Launch Louisville", description: "Members-managed coworking community and entrepreneurial launchpad since 2018. Offers coworking space, meeting rooms, virtual office, and artist studios with 24/7 access.", category: "Coworking / Office", address: "816 E Broadway, Louisville, KY 40204", phone: "(502) 709-8816", email: null, website: null, image_url: null, latitude: 38.2396, longitude: -85.7464, hours: "24/7 member access", is_member: true, created_at: "",
  },
  {
    id: "8", name: "Encore Venue on Broadway", description: "Historic event space in the former Broadway Theater building (built 1915). Beautifully preserved with ornate facade and vintage tile flooring. Capacity up to 250 guests.", category: "Event Venue", address: "816 E Broadway, Louisville, KY 40204", phone: null, email: null, website: "https://encoreonbroadway.co/", image_url: null, latitude: 38.2396, longitude: -85.7463, hours: null, is_member: true, created_at: "",
  },
  {
    id: "9", name: "GG Strut", description: "Women's clothing store in the Phoenix Hill neighborhood offering curated fashion and accessories.", category: "Retail", address: "821 E Broadway, Louisville, KY 40204", phone: "(502) 569-7777", email: null, website: null, image_url: null, latitude: 38.2395, longitude: -85.7462, hours: null, is_member: true, created_at: "",
  },
  {
    id: "10", name: "Locals Food Hub & Pizza Pub", description: "Connects people to Kentucky-grown food, partnering with 190+ Kentucky farmers. Wood-fired pizzas with locally sourced ingredients, Kentucky cheeses, and seasonal vegetables. Attached food hub grocery features foods from 49 Kentucky counties.", category: "Restaurant", address: "822 E Broadway, Louisville, KY 40204", phone: "(502) 537-7300", email: null, website: "https://localsfoodhub.com/", image_url: null, latitude: 38.2395, longitude: -85.7461, hours: "Mon-Thu 11am-8:30pm, Fri 11am-9pm", is_member: true, created_at: "",
  },
  {
    id: "11", name: "Blue Cross Animal Hospital", description: "Locally owned veterinary facility serving Kentucky and Indiana for over 100 years. Specializes in small animals with emergency care, dental, digital radiography, and preventative care. A+ BBB rating.", category: "Veterinary / Healthcare", address: "827 E Broadway, Louisville, KY 40204", phone: "(502) 587-6677", email: null, website: "https://bluecrossveterinaryhospital.com/", image_url: null, latitude: 38.2394, longitude: -85.7459, hours: "Mon-Fri 8:30am-6pm, Sat 8:30am-2pm", is_member: true, created_at: "",
  },
  {
    id: "12", name: "Family Health Centers - East Broadway", description: "Not-for-profit community health center providing primary and preventive healthcare regardless of ability to pay. Services include adult primary care, pediatrics, dental, counseling, pharmacy, lab, and radiology.", category: "Healthcare", address: "834 E Broadway, Louisville, KY 40204", phone: "(502) 583-1981", email: null, website: "https://www.fhclouisville.org/locations/east-broadway/", image_url: null, latitude: 38.2393, longitude: -85.7457, hours: "Mon-Thu 8am-8pm, Fri 8am-4:30pm", is_member: true, created_at: "",
  },
  {
    id: "13", name: "Goodwill Kentucky - Downtown Opportunity Center", description: "Provides job search assistance, career counseling, and support for young adults with barriers to employment. Also operates a food pantry on 2nd & 4th Fridays.", category: "Nonprofit / Services", address: "909 E Broadway, Louisville, KY 40204", phone: "(502) 259-0427", email: null, website: "https://goodwillky.org/metrolouisville/", image_url: null, latitude: 38.239, longitude: -85.7445, hours: "Mon-Fri 8am-4:30pm", is_member: true, created_at: "",
  },
  {
    id: "14", name: "Seven Counties Services - Child & Family", description: "Community Mental Health Center offering outpatient treatment, mental health counseling, substance abuse treatment, crisis support, and ABA therapy.", category: "Healthcare / Mental Health", address: "914 E Broadway, Louisville, KY 40204", phone: "(502) 589-8731", email: null, website: "https://sevencounties.org/about/locations/child-family-downtown-office-jefferson-county/", image_url: null, latitude: 38.2389, longitude: -85.7443, hours: "Mon-Thu 8am-7pm, Fri 8am-2pm, Sat 9am-12pm", is_member: true, created_at: "",
  },
  {
    id: "15", name: "Broadway Automotive", description: "Used car dealership established 2001 in the Smoketown area, serving the East Broadway corridor.", category: "Auto Sales", address: "924 E Broadway, Louisville, KY 40204", phone: "(502) 830-3757", email: null, website: null, image_url: null, latitude: 38.2388, longitude: -85.744, hours: null, is_member: true, created_at: "",
  },
  {
    id: "16", name: "Woodson & Kratch Memorials", description: "Monument dealer specializing in marble and memorial services. In business for over 106 years along the East Broadway corridor.", category: "Specialty Services", address: "1000 E Broadway, Louisville, KY 40204", phone: "(502) 584-3640", email: null, website: null, image_url: null, latitude: 38.2385, longitude: -85.7428, hours: null, is_member: true, created_at: "",
  },
  {
    id: "17", name: "Communications Electronic Design (CED)", description: "Established 1992. Specializes in complex audio-visual integrations for museums, including complete systems control, interactive programming, and custom automation.", category: "Technology Services", address: "1014 E Broadway, Louisville, KY 40204", phone: "(502) 584-0816", email: null, website: "https://ced.bz", image_url: null, latitude: 38.2384, longitude: -85.7425, hours: "Mon-Fri 8am-5pm", is_member: true, created_at: "",
  },
  {
    id: "18", name: "GIG Louisville", description: "Live music venue and bar near Paristown Pointe. Capacity 288 with music venue and bar area. Showcases emerging local talent and established acts. All shows 21+.", category: "Entertainment / Music Venue", address: "1017 E Broadway, Louisville, KY 40204", phone: "(502) 599-7357", email: null, website: "https://www.giglouisville.com/", image_url: null, latitude: 38.2384, longitude: -85.7424, hours: null, is_member: true, created_at: "",
  },
  {
    id: "19", name: "Grimes Vacuum Sales & Service", description: "In business for over 51 years. Services all makes and models, offers used vacuums and trade-ins, carries bags and belts for all makes. Authorized warranty service center.", category: "Retail / Repair", address: "1020 E Broadway, Louisville, KY 40204", phone: "(502) 585-3391", email: null, website: null, image_url: null, latitude: 38.2383, longitude: -85.7423, hours: "Mon-Fri 8am-5pm, Sat 9am-1pm", is_member: true, created_at: "",
  },
  {
    id: "20", name: "Hanger Clinic: Prosthetics & Orthotics", description: "National prosthetics and orthotics provider. Louisville East Broadway location offering custom prosthetic and orthotic solutions.", category: "Healthcare", address: "1023 E Broadway, Louisville, KY 40204", phone: "(502) 585-2139", email: null, website: "https://hangerclinic.com/clinics/KY/louisville/e-broadway-2/", image_url: null, latitude: 38.2383, longitude: -85.7421, hours: "Mon-Fri 8am-5pm", is_member: true, created_at: "",
  },
  {
    id: "21", name: "Winton & Hiestand Law Group", description: "Personal injury law firm handling car accidents, workers compensation, entertainment law, estate planning, DUI, and medical malpractice. Attorney Jeremy Allen Winton (22+ years).", category: "Legal Services", address: "1177 E Broadway, Louisville, KY 40204", phone: null, email: null, website: "https://louisvillelawoffice.com/", image_url: null, latitude: 38.2379, longitude: -85.7405, hours: null, is_member: true, created_at: "",
  },
  {
    id: "22", name: "Broadway Management Group", description: "Property management, leasing, and brokerage services. In business for 34 years. Available 24/7 for resident needs.", category: "Property Management", address: "1220 E Broadway, Louisville, KY 40204", phone: "(502) 584-4400", email: null, website: "https://www.bmgapts.com/", image_url: null, latitude: 38.2377, longitude: -85.7398, hours: "Mon-Fri 8am-5pm, Wed until 7pm, Sat 10am-5pm", is_member: true, created_at: "",
  },
  {
    id: "23", name: "Smith Imported Car Service", description: "Full-service auto repair specializing in imported/European vehicles since 1966. Services include AC repair, brakes, electrical, engine and transmission work.", category: "Auto Services", address: "1250 E Broadway, Louisville, KY 40204", phone: "(502) 583-4724", email: null, website: "https://www.smithimportedcarservice.com/", image_url: null, latitude: 38.2376, longitude: -85.7393, hours: "Mon-Fri 8am-5:30pm", is_member: true, created_at: "",
  },
];

export const events: Event[] = [
  {
    id: "1", title: "EBBA Reactivation Meeting", description: "Open community meeting to discuss reactivating the East Broadway Business Association. All corridor businesses and residents welcome.", date: "2026-04-15", end_date: null, time: "6:00 PM - 8:00 PM", location: "Launch Louisville, 816 E Broadway", category: "Meeting", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "2", title: "East Broadway Corridor Walk", description: "Guided walking tour of East Broadway businesses and the Epping District revitalization project. Meet local business owners and learn about corridor history.", date: "2026-04-26", end_date: null, time: "10:00 AM - 12:00 PM", location: "Meet at Locals Food Hub, 822 E Broadway", category: "Community", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "3", title: "Small Business Workshop: Digital Marketing 101", description: "Free workshop for corridor businesses on social media, Google Business profiles, and digital marketing basics.", date: "2026-05-08", end_date: null, time: "6:00 PM - 8:00 PM", location: "Launch Louisville, 816 E Broadway", category: "Workshop", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "4", title: "East Broadway Spring Market", description: "Outdoor market featuring local vendors, food trucks, live music, and family activities along the corridor.", date: "2026-05-17", end_date: null, time: "10:00 AM - 4:00 PM", location: "East Broadway Corridor (800 block)", category: "Market", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "5", title: "First Friday at GIG Louisville", description: "Monthly live music night showcasing local talent. Special EBBA member pricing on food and drinks.", date: "2026-06-05", end_date: null, time: "7:00 PM - 11:00 PM", location: "GIG Louisville, 1017 E Broadway", category: "Arts & Culture", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "6", title: "Corridor Cleanup Day", description: "Community volunteer day to beautify the East Broadway corridor. Supplies provided. All ages welcome.", date: "2026-06-14", end_date: null, time: "9:00 AM - 12:00 PM", location: "Meet at Family Health Centers, 834 E Broadway", category: "Volunteer", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
];

export const leaders: Leader[] = [
  {
    id: "1", name: "Rachel Zink", title: "Corridor Development Lead", bio: "Rachel is co-founder of On Broadway Louisville and the Epping District, a multi-building revitalization project spanning 70,000+ sq ft across 6 historic buildings on the 800 block of East Broadway. The buildings have been in the Zink family for 40+ years.", image_url: null, email: "info@onbroadwaylouisville.com", phone: null, order: 1, created_at: "",
  },
  {
    id: "2", name: "Anna Sorrell", title: "Corridor Development Lead", bio: "Anna is co-founder of On Broadway Louisville and the Epping District alongside Rachel Zink. Together they are leading the revitalization of the 800 block, including the historic Broadway Theater (built 1915), Launch Louisville, and Encore Venue.", image_url: null, email: "info@onbroadwaylouisville.com", phone: null, order: 2, created_at: "",
  },
];
