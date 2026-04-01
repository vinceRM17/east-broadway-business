import type { Business, Event, Leader } from "@/lib/supabase/types";

// Static data mirroring Supabase seed data.
// Once Supabase is connected, replace with server-side queries.

export const businesses: Business[] = [
  {
    id: "1", name: "Chicken King", description: "Louisville institution specializing in fried chicken, wings, seafood, barbecue, and home-style sides. Offers dine-in, drive-thru, and online ordering.", category: "Restaurant", address: "639 E Broadway, Louisville, KY 40202", phone: "(502) 589-5464", email: null, website: "https://www.chickenkingtogo.com/", image_url: null, latitude: 38.2452, longitude: -85.7420, hours: "Mon-Sat 10:30am-9pm (drive-thru), Lobby until 2pm", is_member: true, created_at: "",
  },
  {
    id: "2", name: "Meineke Car Care Center", description: "Full-service auto repair center offering oil changes, brake repair, exhaust/muffler work, tire services, A/C repair, transmission, and diagnostics.", category: "Auto Services", address: "701 E Broadway, Louisville, KY 40202", phone: "(502) 792-7467", email: null, website: "https://www.meineke.com/locations/ky/louisville-1407/", image_url: null, latitude: 38.2452, longitude: -85.7412, hours: null, is_member: true, created_at: "",
  },
  {
    id: "3", name: "Shan the Computer Man", description: "Computer repair, security camera installation, custom computer services, intercom systems, virus/malware removal, printer repair, and alarm services. Owned by Shannon Simpson, est. 2012.", category: "Technology Services", address: "807 E Broadway, Louisville, KY 40204", phone: "(502) 996-7554", email: null, website: null, image_url: null, latitude: 38.2450, longitude: -85.7390, hours: "Mon-Fri 11am-7pm, Sat 12pm-4pm", is_member: true, created_at: "",
  },
  {
    id: "4", name: "Muldoon Memorials", description: "Family-owned monument and memorial company in business since 1855 — over 170 years. Professional assistance creating monuments using high-quality materials.", category: "Specialty Services", address: "808 E Broadway, Louisville, KY 40204", phone: "(502) 584-1129", email: null, website: "https://www.muldoonmemorials.com/", image_url: null, latitude: 38.2443, longitude: -85.7391, hours: "Mon-Fri 9am-5pm, Sat 9am-1pm", is_member: true, created_at: "",
  },
  {
    id: "5", name: "Kertis Creative", description: "Multidisciplinary, narrative-based creative agency operating since 2008. Part of the Epping District development on East Broadway.", category: "Professional Services", address: "810 E Broadway, Louisville, KY 40204", phone: null, email: null, website: "https://www.kertiscreative.com", image_url: null, latitude: 38.2444, longitude: -85.7389, hours: null, is_member: true, created_at: "",
  },
  {
    id: "6", name: "Tom Gray Auto Sales", description: "Used car dealership established 1991 offering a wide selection of quality used vehicles. Owner: Tom Gray; Sales Manager: Darrell Tinsley.", category: "Auto Sales", address: "811 E Broadway, Louisville, KY 40204", phone: "(502) 625-0360", email: null, website: "https://www.tomgrayautosales.com/", image_url: null, latitude: 38.2450, longitude: -85.7388, hours: null, is_member: true, created_at: "",
  },
  {
    id: "7", name: "Red Line Performing Arts / The Broadway Theater", description: "Performing arts organization occupying the historic Broadway Theater building (built 1915) at 816 E Broadway. The space, formerly Launch Louisville coworking, now serves as a venue for live performance, theater, and community arts programming.", category: "Arts & Culture", address: "816 E Broadway, Louisville, KY 40204", phone: null, email: null, website: null, image_url: null, latitude: 38.2443, longitude: -85.7386, hours: null, is_member: true, created_at: "",
  },
  {
    id: "8", name: "Encore Venue on Broadway", description: "Historic event space in the former Broadway Theater building (built 1915). Beautifully preserved with ornate facade and vintage tile flooring. Capacity up to 250 guests.", category: "Event Venue", address: "816 E Broadway, Louisville, KY 40204", phone: null, email: null, website: "https://encoreonbroadway.co/", image_url: null, latitude: 38.2443, longitude: -85.7386, hours: null, is_member: true, created_at: "",
  },
  {
    id: "9", name: "GG Strut", description: "Women's clothing store in the Phoenix Hill neighborhood offering curated fashion and accessories.", category: "Retail", address: "821 E Broadway, Louisville, KY 40204", phone: "(502) 569-7777", email: null, website: null, image_url: null, latitude: 38.2450, longitude: -85.7384, hours: null, is_member: true, created_at: "",
  },
  {
    id: "10", name: "Locals Food Hub & Pizza Pub", description: "Connects people to Kentucky-grown food, partnering with 190+ Kentucky farmers. Wood-fired pizzas with locally sourced ingredients, Kentucky cheeses, and seasonal vegetables. Attached food hub grocery features foods from 49 Kentucky counties.", category: "Restaurant", address: "822 E Broadway, Louisville, KY 40204", phone: "(502) 537-7300", email: null, website: "https://localsfoodhub.com/", image_url: null, latitude: 38.2443, longitude: -85.7384, hours: "Mon-Thu 11am-8:30pm, Fri 11am-9pm", is_member: true, created_at: "",
  },
  {
    id: "11", name: "Blue Cross Animal Hospital", description: "Locally owned veterinary facility serving Kentucky and Indiana for over 100 years. Specializes in small animals with emergency care, dental, digital radiography, and preventative care. A+ BBB rating.", category: "Veterinary / Healthcare", address: "827 E Broadway, Louisville, KY 40204", phone: "(502) 587-6677", email: null, website: "https://bluecrossveterinaryhospital.com/", image_url: null, latitude: 38.2450, longitude: -85.7381, hours: "Mon-Fri 8:30am-6pm, Sat 8:30am-2pm", is_member: true, created_at: "",
  },
  {
    id: "12", name: "Family Health Centers - East Broadway", description: "Not-for-profit community health center providing primary and preventive healthcare regardless of ability to pay. Services include adult primary care, pediatrics, dental, counseling, pharmacy, lab, and radiology.", category: "Healthcare", address: "834 E Broadway, Louisville, KY 40204", phone: "(502) 583-1981", email: null, website: "https://www.fhclouisville.org/locations/east-broadway/", image_url: null, latitude: 38.2442, longitude: -85.7378, hours: "Mon-Thu 8am-8pm, Fri 8am-4:30pm", is_member: true, created_at: "",
  },
  {
    id: "13", name: "Goodwill Kentucky - Downtown Opportunity Center", description: "Provides job search assistance, career counseling, and support for young adults with barriers to employment. Also operates a food pantry on 2nd & 4th Fridays.", category: "Nonprofit / Services", address: "909 E Broadway, Louisville, KY 40204", phone: "(502) 259-0427", email: null, website: "https://goodwillky.org/metrolouisville/", image_url: null, latitude: 38.2450, longitude: -85.7368, hours: "Mon-Fri 8am-4:30pm", is_member: true, created_at: "",
  },
  {
    id: "14", name: "Seven Counties Services - Child & Family", description: "Community Mental Health Center offering outpatient treatment, mental health counseling, substance abuse treatment, crisis support, and ABA therapy.", category: "Healthcare / Mental Health", address: "914 E Broadway, Louisville, KY 40204", phone: "(502) 589-8731", email: null, website: "https://sevencounties.org/about/locations/child-family-downtown-office-jefferson-county/", image_url: null, latitude: 38.2434, longitude: -85.7363, hours: "Mon-Thu 8am-7pm, Fri 8am-2pm, Sat 9am-12pm", is_member: true, created_at: "",
  },
  {
    id: "15", name: "Broadway Automotive", description: "Used car dealership established 2001 in the Smoketown area, serving the East Broadway corridor.", category: "Auto Sales", address: "924 E Broadway, Louisville, KY 40204", phone: "(502) 830-3757", email: null, website: null, image_url: null, latitude: 38.2438, longitude: -85.7364, hours: null, is_member: true, created_at: "",
  },
  {
    id: "16", name: "Woodson & Kratch Memorials", description: "Monument dealer specializing in marble and memorial services. In business for over 106 years along the East Broadway corridor.", category: "Specialty Services", address: "1000 E Broadway, Louisville, KY 40204", phone: "(502) 584-3640", email: null, website: null, image_url: null, latitude: 38.2440, longitude: -85.7351, hours: null, is_member: true, created_at: "",
  },
  {
    id: "17", name: "Communications Electronic Design (CED)", description: "Established 1992. Specializes in complex audio-visual integrations for museums, including complete systems control, interactive programming, and custom automation.", category: "Technology Services", address: "1014 E Broadway, Louisville, KY 40204", phone: "(502) 584-0816", email: null, website: "https://ced.bz", image_url: null, latitude: 38.2440, longitude: -85.7346, hours: "Mon-Fri 8am-5pm", is_member: true, created_at: "",
  },
  {
    id: "18", name: "GIG Louisville", description: "Live music venue and bar near Paristown Pointe. Capacity 288 with music venue and bar area. Showcases emerging local talent and established acts. All shows 21+.", category: "Entertainment / Music Venue", address: "1017 E Broadway, Louisville, KY 40204", phone: "(502) 599-7357", email: null, website: "https://www.giglouisville.com/", image_url: null, latitude: 38.2447, longitude: -85.7345, hours: null, is_member: true, created_at: "",
  },
  {
    id: "19", name: "Grimes Vacuum Sales & Service", description: "In business for over 51 years. Services all makes and models, offers used vacuums and trade-ins, carries bags and belts for all makes. Authorized warranty service center.", category: "Retail / Repair", address: "1020 E Broadway, Louisville, KY 40204", phone: "(502) 585-3391", email: null, website: null, image_url: null, latitude: 38.2440, longitude: -85.7344, hours: "Mon-Fri 8am-5pm, Sat 9am-1pm", is_member: true, created_at: "",
  },
  {
    id: "20", name: "Hanger Clinic: Prosthetics & Orthotics", description: "National prosthetics and orthotics provider. Louisville East Broadway location offering custom prosthetic and orthotic solutions.", category: "Healthcare", address: "1023 E Broadway, Louisville, KY 40204", phone: "(502) 585-2139", email: null, website: "https://hangerclinic.com/clinics/KY/louisville/e-broadway-2/", image_url: null, latitude: 38.2447, longitude: -85.7340, hours: "Mon-Fri 8am-5pm", is_member: true, created_at: "",
  },
  {
    id: "21", name: "Winton & Hiestand Law Group", description: "Personal injury law firm handling car accidents, workers compensation, entertainment law, estate planning, DUI, and medical malpractice. Attorney Jeremy Allen Winton (22+ years).", category: "Legal Services", address: "1177 E Broadway, Louisville, KY 40204", phone: null, email: null, website: "https://louisvillelawoffice.com/", image_url: null, latitude: 38.2443, longitude: -85.7304, hours: null, is_member: true, created_at: "",
  },
  {
    id: "22", name: "Broadway Management Group", description: "Property management, leasing, and brokerage services. In business for 34 years. Available 24/7 for resident needs.", category: "Property Management", address: "1220 E Broadway, Louisville, KY 40204", phone: "(502) 584-4400", email: null, website: "https://www.bmgapts.com/", image_url: null, latitude: 38.2437, longitude: -85.7285, hours: "Mon-Fri 8am-5pm, Wed until 7pm, Sat 10am-5pm", is_member: true, created_at: "",
  },
  {
    id: "23", name: "Smith Imported Car Service", description: "Full-service auto repair specializing in imported/European vehicles since 1966. Services include AC repair, brakes, electrical, engine and transmission work.", category: "Auto Services", address: "1250 E Broadway, Louisville, KY 40204", phone: "(502) 583-4724", email: null, website: "https://www.smithimportedcarservice.com/", image_url: null, latitude: 38.2431, longitude: -85.7275, hours: "Mon-Fri 8am-5:30pm", is_member: true, created_at: "",
  },
  // Additional E Broadway businesses
  {
    id: "24", name: "The UPS Store #0830", description: "Locally owned UPS Store offering shipping, packing, printing, shredding, mailbox rental, and notary services.", category: "Retail", address: "743 E Broadway, Louisville, KY 40202", phone: "(502) 584-2802", email: null, website: "https://locations.theupsstore.com/ky/louisville/743-e-broadway", image_url: null, latitude: 38.2450, longitude: -85.7396, hours: "Mon-Fri 7:30am-6:30pm, Sat 10am-2pm", is_member: true, created_at: "",
  },
  {
    id: "25", name: "Concordia Lutheran Church", description: "Lutheran church (LCMS) serving the Phoenix Hill / East Broadway corridor with Sunday services and community outreach.", category: "Church", address: "1127 E Broadway, Louisville, KY 40204", phone: "(502) 585-4459", email: null, website: "https://concordia-lutheran.com/", image_url: null, latitude: 38.2445, longitude: -85.7326, hours: "Sunday Services 7:45 AM and 10:00 AM", is_member: false, created_at: "",
  },
  {
    id: "26", name: "Christ Is King Baptist Church", description: "Baptist church with a 30-year ministry to the homeless and those struggling with addiction on the East Broadway corridor.", category: "Church", address: "1143 E Broadway, Louisville, KY 40204", phone: "(502) 584-3639", email: null, website: null, image_url: null, latitude: 38.2444, longitude: -85.7319, hours: "Sunday 11:00 AM", is_member: false, created_at: "",
  },
  // One block south - E Breckinridge St
  {
    id: "27", name: "Fleur de Flea Vintage Urban Market", description: "35,000+ sq ft permanent indoor vintage warehouse with 150+ vendors selling vintage, vinyl, antiques, mid-century, art deco, plants, books, and repurposed items.", category: "Retail", address: "947 E Breckinridge St, Louisville, KY 40204", phone: "(502) 365-3563", email: null, website: "https://www.thefleurdeflea.com/", image_url: null, latitude: 38.2425, longitude: -85.7360, hours: "Wed-Sat 11am-6pm, Sun 12pm-6pm", is_member: true, created_at: "",
  },
  {
    id: "28", name: "Wiltshire Pantry Bakery & Cafe", description: "Bakery and cafe offering rotating artisan breads, breakfast pastries, sweets, and lunch. Locally loved Louisville institution.", category: "Restaurant", address: "1310 E Breckinridge St, Louisville, KY 40204", phone: "(502) 581-8560", email: null, website: "https://wiltshirepantry.com/", image_url: null, latitude: 38.2418, longitude: -85.7270, hours: "Mon-Sat 9am-5pm", is_member: true, created_at: "",
  },
  {
    id: "29", name: "Schempp Realty and Management", description: "Full-service real estate sales and property management company since 1983. Portfolio includes single family homes, multi-plex rentals, and commercial space.", category: "Property Management", address: "1228 E Breckinridge St, Louisville, KY 40204", phone: "(502) 562-0016", email: null, website: "https://www.srmky.com/", image_url: null, latitude: 38.2420, longitude: -85.7290, hours: "Mon-Thu 9am-4:30pm", is_member: true, created_at: "",
  },
  {
    id: "30", name: "Highlands Community Ministries", description: "Nonprofit providing community services including a food pantry, emergency assistance, and community programs in the Highlands area.", category: "Nonprofit / Services", address: "1228 E Breckinridge St, Louisville, KY 40204", phone: "(502) 451-3695", email: null, website: "https://hcmlouisville.org/", image_url: null, latitude: 38.2420, longitude: -85.7291, hours: "Wed-Fri 10am-1pm", is_member: false, created_at: "",
  },
  // One block north - E Chestnut St
  {
    id: "31", name: "Wellspring", description: "Integrates affordable housing with essential mental health support services, offering clients a stable home base to aid recovery. Licensed mental health facility.", category: "Healthcare / Mental Health", address: "841 E Chestnut St, Louisville, KY 40204", phone: "(502) 561-1051", email: null, website: "https://wellspringky.org/", image_url: null, latitude: 38.2460, longitude: -85.7380, hours: "24 hours (residential)", is_member: false, created_at: "",
  },
  {
    id: "32", name: "CreoSalus Inc.", description: "Multi-division life-sciences company specializing in custom peptide synthesis, R&D, process development, and cGMP contract manufacturing of peptide drug substances.", category: "Professional Services", address: "1044 E Chestnut St, Louisville, KY 40204", phone: "(502) 515-1100", email: null, website: "https://creosalus.com/", image_url: null, latitude: 38.2458, longitude: -85.7340, hours: null, is_member: true, created_at: "",
  },
  // Adjacent Paristown Pointe (bordering E Broadway at eastern end)
  {
    id: "33", name: "Louisville Stoneware (Stoneware & Co.)", description: "Est. 1815. Handmade stoneware pottery with factory tours twice daily Mon-Fri, paint-your-own pottery experience, and retail store. Louisville institution for over 200 years.", category: "Retail", address: "731 Brent St, Louisville, KY 40204", phone: "(502) 582-1900", email: null, website: "https://www.stonewareandco.com/", image_url: null, latitude: 38.2435, longitude: -85.7300, hours: "Mon-Sat 10am-4pm, Sun 11am-3pm", is_member: true, created_at: "",
  },
  {
    id: "34", name: "Old Forester's Paristown Hall", description: "Standing-room concert venue for national touring acts, collaborative projects, and local/regional artists. Kentucky Performing Arts venue.", category: "Entertainment / Music Venue", address: "724 Brent St, Louisville, KY 40204", phone: "(502) 584-7777", email: null, website: "https://www.paristown.com/paristownhall", image_url: null, latitude: 38.2437, longitude: -85.7298, hours: null, is_member: true, created_at: "",
  },
  // Resolve KY and member organizations (702 Logan St)
  {
    id: "36", name: "Resolve KY", description: "Nonprofit innovation and coworking community built to support mission-driven entrepreneurs and nonprofit leaders. 4,500 sq ft space with collaborative work areas, meeting/board rooms, and education center. Founded 2025. Tagline: \"Community. Working. Space.\"", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: "(502) 232-5029", email: "info@resolveky.org", website: "https://www.resolveky.org/", image_url: null, latitude: 38.2435, longitude: -85.7350, hours: null, is_member: true, created_at: "",
  },
  {
    id: "37", name: "Kentucky Advocates for Inclusion & Accessibility (KAIA)", description: "Formerly KY IEP Advocate. Supports community members, parents, and caregivers with accurate, reliable information to become the best advocates for inclusion and accessibility in home, school, and community settings. Based at Resolve KY.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: "(502) 386-1072", email: null, website: "https://www.kaiaky.org/", image_url: null, latitude: 38.2435, longitude: -85.7351, hours: "Mon-Fri 8am-8pm", is_member: true, created_at: "",
  },
  {
    id: "38", name: "Louisville Makes Games / Warp Zone Louisville", description: "Kentucky's first collaborative workspace focused on game creators. 501(c)(3) nonprofit supporting video game and tabletop game developers. Runs Local Game Harvest, the biggest indie game showcase in Kentucky. Based at Resolve KY.", category: "Technology Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://louisvillemakesgames.org/", image_url: null, latitude: 38.2435, longitude: -85.7349, hours: "24/7 member access", is_member: true, created_at: "",
  },
  {
    id: "35", name: "The Village Market Food Hall", description: "Louisville's first collective food hall with 5+ restaurant concepts, Jeff's Donuts, and a full bar under one roof.", category: "Restaurant", address: "712 Brent St, Louisville, KY 40204", phone: "(502) 676-7843", email: null, website: "https://www.villagemarketfoodhall.com/", image_url: null, latitude: 38.2438, longitude: -85.7296, hours: "Mon-Thu 11am-8pm, Fri-Sat 11am-9pm, Sun 11am-8pm", is_member: true, created_at: "",
  },
  // Resolve KY additional member organizations
  {
    id: "39", name: "Beargrass Thunder", description: "Resolve KY member organization. Led by Jody Dahmer.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.beargrassthunder.com", image_url: null, latitude: 38.2435, longitude: -85.7347, hours: null, is_member: true, created_at: "",
  },
  {
    id: "40", name: "CrossRoads Missions", description: "Resolve KY member organization. Led by Rich Shanks.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://crossroadsmissions.com", image_url: null, latitude: 38.2435, longitude: -85.7346, hours: null, is_member: true, created_at: "",
  },
  {
    id: "41", name: "Dacy Day Wash", description: "Resolve KY member organization. Led by Richard Debow.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.dacydaywash.com", image_url: null, latitude: 38.2435, longitude: -85.7345, hours: null, is_member: true, created_at: "",
  },
  {
    id: "42", name: "Digado", description: "Resolve KY member organization. Led by Steve Bates.", category: "Technology Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://digado.com/", image_url: null, latitude: 38.2435, longitude: -85.7344, hours: null, is_member: true, created_at: "",
  },
  {
    id: "43", name: "EOS Worldwide (Zach Wardlaw)", description: "Resolve KY member. EOS Implementer helping organizations gain traction. Led by Zach Wardlaw.", category: "Professional Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.eosworldwide.com/zach-wardlaw", image_url: null, latitude: 38.2435, longitude: -85.7343, hours: null, is_member: true, created_at: "",
  },
  {
    id: "44", name: "Grant Ready Kentucky", description: "Resolve KY member organization helping nonprofits become grant-ready. Led by Sarah McIntee.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.grantreadyky.org", image_url: null, latitude: 38.2435, longitude: -85.7342, hours: null, is_member: true, created_at: "",
  },
  {
    id: "45", name: "Honey Bear Financials", description: "Resolve KY member organization. Led by Alex Clifton.", category: "Professional Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.honeybearfinancials.com", image_url: null, latitude: 38.2435, longitude: -85.7341, hours: null, is_member: true, created_at: "",
  },
  {
    id: "46", name: "IDEAS xLab", description: "Resolve KY member organization. Led by Josh Miller.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://ideasxlab.com", image_url: null, latitude: 38.2436, longitude: -85.7350, hours: null, is_member: true, created_at: "",
  },
  {
    id: "47", name: "Imagination Library of Louisville", description: "Resolve KY member organization promoting childhood literacy. Led by Maria Gurren.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://imaginationlibrarylouisville.org", image_url: null, latitude: 38.2436, longitude: -85.7349, hours: null, is_member: true, created_at: "",
  },
  {
    id: "48", name: "MedWater", description: "Resolve KY member organization. Led by Darrell Adams.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.medwater.org", image_url: null, latitude: 38.2436, longitude: -85.7348, hours: null, is_member: true, created_at: "",
  },
  {
    id: "49", name: "Nest Community Marketing", description: "Resolve KY member organization. Led by Robin Miller.", category: "Professional Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://nestcommunitymarketing.com", image_url: null, latitude: 38.2436, longitude: -85.7347, hours: null, is_member: true, created_at: "",
  },
  {
    id: "50", name: "Olmsted Parks Conservancy", description: "Resolve KY member organization preserving Louisville's Olmsted-designed parks. Led by Rachel Firkins.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.olmstedparks.org", image_url: null, latitude: 38.2436, longitude: -85.7346, hours: null, is_member: true, created_at: "",
  },
  {
    id: "51", name: "Open Eye", description: "Resolve KY member organization. Led by Eric Seto.", category: "Professional Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.openeye.partners", image_url: null, latitude: 38.2436, longitude: -85.7345, hours: null, is_member: true, created_at: "",
  },
  {
    id: "52", name: "Peace Catalyst International", description: "Resolve KY member organization. Led by Michelle West.", category: "Nonprofit / Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.peacecatalyst.org", image_url: null, latitude: 38.2436, longitude: -85.7344, hours: null, is_member: true, created_at: "",
  },
  {
    id: "53", name: "Reece Johns", description: "Resolve KY member. Led by Reece Johns.", category: "Professional Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://reecejohns.com", image_url: null, latitude: 38.2436, longitude: -85.7343, hours: null, is_member: true, created_at: "",
  },
  {
    id: "54", name: "Right Mind Growth Consulting", description: "Strategy consulting for nonprofits and mission-driven organizations. Based at Resolve KY.", category: "Professional Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://rightmindky.com", image_url: null, latitude: 38.2436, longitude: -85.7342, hours: null, is_member: true, created_at: "",
  },
  {
    id: "55", name: "Ryan Fenwick AAL", description: "Resolve KY member. Led by Ryan Fenwick.", category: "Professional Services", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://www.fenwickpartnersllc.com", image_url: null, latitude: 38.2436, longitude: -85.7341, hours: null, is_member: true, created_at: "",
  },
  {
    id: "56", name: "The Monarch Music & Arts Community", description: "Resolve KY member organization supporting music and arts community. Led by Drew Crawley.", category: "Arts & Culture", address: "702 Logan St, Louisville, KY 40204", phone: null, email: null, website: "https://themonarchmac.org", image_url: null, latitude: 38.2436, longitude: -85.7340, hours: null, is_member: true, created_at: "",
  },
];

export const events: Event[] = [
  {
    id: "1", title: "Logan Street Market — Live Music Tuesdays", description: "Weekly live music every Tuesday evening at Logan Street Market, just blocks from East Broadway. Local artists perform 6:30-8:30pm. Free admission.", date: "2026-04-08", end_date: null, time: "6:30 PM - 8:30 PM", location: "Logan Street Market, 1001 Logan St", category: "Arts & Culture", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "2", title: "Louisville Stoneware Factory Tour", description: "Twice-daily factory tours at Louisville Stoneware, handcrafting pottery since 1815. See artisans at work and try the paint-your-own experience. Tours Mon-Fri.", date: "2026-04-14", end_date: null, time: "10:30 AM & 1:00 PM", location: "Louisville Stoneware, 731 Brent St", category: "Community", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "3", title: "Rhiannon Giddens at Paristown Hall", description: "Grammy and Pulitzer Prize-winning artist Rhiannon Giddens performs at Old Forester's Paristown Hall, just steps from the East Broadway corridor.", date: "2026-04-19", end_date: null, time: "7:00 PM", location: "Old Forester's Paristown Hall, 724 Brent St", category: "Arts & Culture", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "4", title: "Smoketown Neighborhood Association Meeting", description: "Monthly neighborhood association meeting. Open to all Smoketown residents and business owners. Held 3rd Monday of every month.", date: "2026-04-20", end_date: null, time: "6:30 PM - 8:00 PM", location: "YouthBuild & Bates Church, Smoketown", category: "Meeting", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "5", title: "Kentucky Derby Festival miniMarathon & Marathon", description: "The annual Humana Kentucky Derby Festival miniMarathon & Marathon winds through downtown Louisville. Cheer on runners from the East Broadway corridor!", date: "2026-04-25", end_date: null, time: "7:00 AM", location: "Downtown Louisville", category: "Festival", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "6", title: "Winsday — Derby Week Nonprofit Celebration", description: "A Derby Week event celebrating local nonprofits. Connect with Louisville's mission-driven community during the city's biggest week.", date: "2026-04-29", end_date: null, time: "5:00 PM - 9:00 PM", location: "Downtown Louisville", category: "Community", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "7", title: "Sepultura at Paristown Hall", description: "Sepultura's Celebrating Life Through Death Final North American Tour 2026 at Old Forester's Paristown Hall.", date: "2026-05-05", end_date: null, time: "6:30 PM", location: "Old Forester's Paristown Hall, 724 Brent St", category: "Arts & Culture", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "8", title: "Fleur de Flea Outdoor Vintage Market", description: "The popular Fleur de Flea Vintage Urban Market hosts an outdoor market event. 150+ vendors selling vintage, vinyl, antiques, mid-century, art deco, and more.", date: "2026-05-23", end_date: null, time: "10:00 AM - 5:00 PM", location: "Waterfront Plaza, 231 Witherspoon St", category: "Market", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "9", title: "Give for Good Louisville — Registration Opens", description: "Registration opens for Louisville's annual online giving day (September 10). Corridor nonprofits: sign up to participate and rally your supporters.", date: "2026-06-01", end_date: null, time: "All Day", location: "Online — giveforgoodlouisville.org", category: "Community", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
  {
    id: "10", title: "Give for Good Louisville — Giving Day", description: "Louisville's biggest day of giving. Support corridor nonprofits like Resolve KY, KAIA, Louisville Makes Games, and more through the Community Foundation of Louisville.", date: "2026-09-10", end_date: null, time: "All Day", location: "Online — giveforgoodlouisville.org", category: "Community", image_url: null, is_approved: true, submitted_by: null, submitted_email: null, created_at: "",
  },
];

export const leaders: Leader[] = [
  {
    id: "1", name: "Terry Zink", title: "On Broadway Louisville", bio: "Terry Zink runs On Broadway Louisville and the Epping District, a multi-building revitalization project spanning 70,000+ sq ft across 6 historic buildings on the 800 block of East Broadway. The buildings have been in the Zink family for 40+ years. The development includes the historic Broadway Theater (built 1915), Encore Venue, Red Line Performing Arts, and Locals Food Hub.", image_url: null, email: "info@onbroadwaylouisville.com", phone: null, order: 1, created_at: "",
  },
];
