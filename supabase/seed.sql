-- Seed data for East Broadway Business Association

-- Sample businesses along East Broadway corridor, Louisville KY
insert into public.businesses (name, description, category, address, phone, website, latitude, longitude, hours, is_member) values
('Broadway Biscuits', 'Southern-style breakfast and brunch featuring locally sourced ingredients and homemade biscuits.', 'Restaurant', '820 E Broadway, Louisville, KY 40204', '(502) 555-0101', 'https://broadwaybiscuits.example.com', 38.2395, -85.7460, 'Mon-Sat 7am-2pm, Sun 8am-1pm', true),
('East Side Barber Co.', 'Classic barbershop offering cuts, shaves, and grooming services in a vintage setting.', 'Services', '844 E Broadway, Louisville, KY 40204', '(502) 555-0102', null, 38.2393, -85.7450, 'Tue-Sat 9am-6pm', true),
('Corridor Coffee', 'Specialty coffee roaster and cafe with a focus on single-origin beans and community gathering.', 'Coffee & Drinks', '900 E Broadway, Louisville, KY 40204', '(502) 555-0103', 'https://corridorcoffee.example.com', 38.2390, -85.7435, 'Daily 6am-8pm', true),
('Broadway Blooms', 'Full-service florist and plant shop specializing in local arrangements and urban gardening supplies.', 'Retail', '870 E Broadway, Louisville, KY 40204', '(502) 555-0104', null, 38.2392, -85.7445, 'Mon-Fri 9am-6pm, Sat 10am-4pm', true),
('Phoenix Gallery', 'Contemporary art gallery showcasing Louisville artists with rotating exhibitions and community workshops.', 'Arts & Culture', '932 E Broadway, Louisville, KY 40204', '(502) 555-0105', 'https://phoenixgallery.example.com', 38.2388, -85.7425, 'Wed-Sun 11am-7pm', true),
('Metro Legal Partners', 'Full-service law firm specializing in small business, real estate, and community advocacy.', 'Professional Services', '816 E Broadway, Louisville, KY 40204', '(502) 555-0106', null, 38.2396, -85.7462, 'Mon-Fri 8am-5pm', true),
('The Broadway Tap', 'Neighborhood bar and grill featuring Kentucky craft beers, bourbon flights, and live music.', 'Restaurant', '960 E Broadway, Louisville, KY 40204', '(502) 555-0107', 'https://broadwaytap.example.com', 38.2386, -85.7415, 'Mon-Thu 4pm-12am, Fri-Sun 11am-2am', true),
('Baxter & Broadway Fitness', 'Boutique fitness studio offering group classes, personal training, and wellness programs.', 'Health & Wellness', '990 E Broadway, Louisville, KY 40204', '(502) 555-0108', null, 38.2384, -85.7405, 'Mon-Fri 5am-9pm, Sat-Sun 7am-5pm', true);

-- Sample events
insert into public.events (title, description, date, time, location, category, is_approved) values
('East Broadway Spring Market', 'Outdoor market featuring local vendors, food trucks, live music, and family activities along the corridor.', '2026-04-19', '10:00 AM - 4:00 PM', 'East Broadway Corridor', 'Market', true),
('Small Business Workshop: Digital Marketing 101', 'Free workshop for corridor businesses on social media, Google Business profiles, and digital marketing basics.', '2026-04-10', '6:00 PM - 8:00 PM', 'Metro Legal Partners, 816 E Broadway', 'Workshop', true),
('First Friday Art Walk', 'Monthly gallery walk featuring new exhibitions, artist meetups, and refreshments at corridor businesses.', '2026-05-01', '5:00 PM - 9:00 PM', 'Phoenix Gallery & corridor businesses', 'Arts & Culture', true),
('EBBA Monthly Meeting', 'Open association meeting to discuss corridor improvements, upcoming events, and community input.', '2026-04-15', '7:00 PM - 8:30 PM', 'Corridor Coffee, 900 E Broadway', 'Meeting', true),
('Summer on Broadway Block Party', 'Annual block party celebrating the East Broadway community with music, food, and activities.', '2026-06-14', '12:00 PM - 8:00 PM', 'East Broadway (closed to traffic)', 'Festival', true),
('Corridor Cleanup Day', 'Community volunteer day to beautify the East Broadway corridor. Supplies provided.', '2026-04-26', '9:00 AM - 12:00 PM', 'Meet at Corridor Coffee', 'Volunteer', true);

-- Association leaders
insert into public.leaders (name, title, bio, email, "order") values
('Marcus Thompson', 'President', 'Marcus has owned Metro Legal Partners on East Broadway for 12 years and has been a driving force behind the association''s reactivation. He is passionate about equitable development and supporting small businesses along the corridor.', 'president@eastbroadwaylou.org', 1),
('Angela Rivera', 'Vice President', 'Angela is the founder of Broadway Blooms and a lifelong Louisville resident. She brings expertise in community organizing and a deep commitment to preserving the corridor''s character while fostering growth.', 'vp@eastbroadwaylou.org', 2),
('David Chen', 'Treasurer', 'David is a CPA and corridor business consultant who manages the association''s finances. He helps member businesses with financial planning and tax strategy.', 'treasurer@eastbroadwaylou.org', 3),
('Lisa Washington', 'Secretary', 'Lisa is a community activist and writer who has covered Louisville''s neighborhoods for over a decade. She documents the association''s progress and manages communications.', 'secretary@eastbroadwaylou.org', 4),
('James Okafor', 'Events Coordinator', 'James brings 15 years of event planning experience and a talent for bringing people together. He coordinates all corridor events and manages partnerships with Louisville Metro.', 'events@eastbroadwaylou.org', 5);
