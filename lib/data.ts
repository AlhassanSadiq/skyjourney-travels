import {
  Destination,
  TourPackage,
  Service,
  TeamMember,
  Testimonial,
  BlogPost,
  FAQ,
  Partner,
} from "@/types";

export const destinations: Destination[] = [
  {
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    description:
      "Experience the pinnacle of luxury in the city of gold. From towering skyscrapers to golden deserts, Dubai offers an unparalleled blend of modern opulence and traditional Arabian charm. Visit the Burj Khalifa, shop at world-class malls, and enjoy desert safaris.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    price: 1299,
    duration: "5-7 Days",
    rating: 4.9,
    highlights: [
      "Burj Khalifa Observation Deck",
      "Desert Safari with BBQ Dinner",
      "Dubai Mall & Fountain Show",
      "Palm Jumeirah Tour",
      "Old Dubai Creek Cruise",
    ],
    featured: true,
  },
  {
    id: "london",
    name: "London",
    country: "United Kingdom",
    description:
      "Discover the timeless elegance of London, where centuries of history meet cutting-edge culture. From Buckingham Palace to the London Eye, explore iconic landmarks, world-class museums, and vibrant neighborhoods.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop",
    price: 1599,
    duration: "6-8 Days",
    rating: 4.8,
    highlights: [
      "Westminster Abbey & Big Ben",
      "Tower of London Tour",
      "Thames River Cruise",
      "British Museum Visit",
      "Camden Market Exploration",
    ],
    featured: true,
  },
  {
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    description:
      "Where East meets West, Istanbul captivates with its stunning architecture, vibrant bazaars, and rich culinary heritage. Walk across the Bosphorus Bridge connecting two continents and explore the Hagia Sophia.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    price: 899,
    duration: "4-6 Days",
    rating: 4.7,
    highlights: [
      "Hagia Sophia & Blue Mosque",
      "Grand Bazaar Shopping",
      "Bosphorus Sunset Cruise",
      "Topkapi Palace Tour",
      "Turkish Bath Experience",
    ],
    featured: true,
  },
  {
    id: "kigali",
    name: "Kigali",
    country: "Rwanda",
    description:
      "The cleanest city in Africa, Kigali offers a remarkable transformation story. Explore vibrant neighborhoods, visit the Genocide Memorial, and embark on life-changing gorilla trekking adventures in nearby Volcanoes National Park.",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=600&fit=crop",
    price: 1899,
    duration: "5-7 Days",
    rating: 4.8,
    highlights: [
      "Gorilla Trekking Experience",
      "Kigali Genocide Memorial",
      "Inema Arts Center Visit",
      "Nyungwe Forest Canopy Walk",
      "Local Market Tour",
    ],
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    country: "Tanzania",
    description:
      "A tropical paradise of white sandy beaches, turquoise waters, and spice plantations. Zanzibar offers the perfect blend of relaxation and adventure with its rich Swahili culture and stunning marine life.",
    image: "https://images.unsplash.com/photo-1586869503467-13e7a3f9c93d?w=800&h=600&fit=crop",
    price: 1099,
    duration: "5-7 Days",
    rating: 4.9,
    highlights: [
      "Stone Town Heritage Walk",
      "Prison Island Tour",
      "Spice Plantation Visit",
      "Mnemba Atoll Snorkeling",
      "Sunset Dhow Cruise",
    ],
    featured: true,
  },
  {
    id: "cairo",
    name: "Cairo",
    country: "Egypt",
    description:
      "Step back in time in the city of a thousand minarets. Cairo offers an extraordinary journey through ancient history with the Pyramids of Giza, the Sphinx, and the treasures of the Egyptian Museum.",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop",
    price: 799,
    duration: "4-6 Days",
    rating: 4.6,
    highlights: [
      "Pyramids of Giza & Sphinx",
      "Egyptian Museum Tour",
      "Khan El-Khalili Bazaar",
      "Nile Felucca Cruise",
      "Coptic Cairo Exploration",
    ],
  },
];

export const tourPackages: TourPackage[] = [
  {
    id: "pkg-1",
    title: "Dubai Luxury Escape",
    destination: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop",
    duration: "7 Days / 6 Nights",
    price: 2499,
    originalPrice: 3299,
    rating: 4.9,
    included: [
      "5-Star Hotel Accommodation",
      "Daily Breakfast & Dinner",
      "Airport Transfers",
      "Desert Safari",
      "Burj Khalifa Tickets",
      "City Tour Guide",
    ],
    description:
      "Experience the ultimate luxury in Dubai with stays at premium hotels, exclusive desert safaris, and VIP access to the Burj Khalifa.",
    featured: true,
    tags: ["Luxury", "Adventure", "City"],
  },
  {
    id: "pkg-2",
    title: "London Heritage Tour",
    destination: "London, UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop",
    duration: "8 Days / 7 Nights",
    price: 2899,
    originalPrice: 3599,
    rating: 4.8,
    included: [
      "Boutique Hotel Stay",
      "English Breakfast Daily",
      "Westminster Walking Tour",
      "Thames River Dinner Cruise",
      "West End Show Tickets",
      "Day Trip to Stonehenge",
    ],
    description:
      "Immerse yourself in British history and culture with guided tours of iconic landmarks, theater experiences, and countryside excursions.",
    featured: true,
    tags: ["Culture", "History", "City"],
  },
  {
    id: "pkg-3",
    title: "Istanbul Cultural Discovery",
    destination: "Istanbul, Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=500&fit=crop",
    duration: "6 Days / 5 Nights",
    price: 1499,
    originalPrice: 1899,
    rating: 4.7,
    included: [
      "Historic Hotel in Sultanahmet",
      "Turkish Breakfast Daily",
      "Hagia Sophia Guided Tour",
      "Bosphorus Dinner Cruise",
      "Grand Bazaar Shopping Tour",
      "Turkish Bath Experience",
    ],
    description:
      "Walk through centuries of history where Europe meets Asia. Discover Ottoman palaces, Byzantine churches, and vibrant bazaars.",
    featured: true,
    tags: ["Culture", "History", "Food"],
  },
  {
    id: "pkg-4",
    title: "Zanzibar Beach Paradise",
    destination: "Zanzibar, Tanzania",
    image: "https://images.unsplash.com/photo-1586869503467-13e7a3f9c93d?w=800&h=500&fit=crop",
    duration: "7 Days / 6 Nights",
    price: 1899,
    originalPrice: 2399,
    rating: 4.9,
    included: [
      "Beachfront Resort",
      "All-Inclusive Meals",
      "Snorkeling at Mnemba",
      "Spice Plantation Tour",
      "Stone Town Walking Tour",
      "Sunset Dhow Cruise",
    ],
    description:
      "Unwind on pristine white beaches, explore coral reefs, and immerse yourself in the rich Swahili culture of this Indian Ocean gem.",
    featured: true,
    tags: ["Beach", "Relaxation", "Adventure"],
  },
  {
    id: "pkg-5",
    title: "Rwanda Gorilla Expedition",
    destination: "Kigali, Rwanda",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=500&fit=crop",
    duration: "5 Days / 4 Nights",
    price: 3499,
    originalPrice: 4299,
    rating: 5.0,
    included: [
      "Luxury Lodge in Volcanoes NP",
      "Gorilla Trekking Permit",
      "Private Guide",
      "Kigali City Tour",
      "All Meals Included",
      "Airport Transfers",
    ],
    description:
      "A once-in-a-lifetime experience tracking mountain gorillas in their natural habitat. Combine wildlife adventure with cultural immersion.",
    featured: true,
    tags: ["Wildlife", "Adventure", "Luxury"],
  },
  {
    id: "pkg-6",
    title: "Cairo Ancient Wonders",
    destination: "Cairo, Egypt",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=500&fit=crop",
    duration: "6 Days / 5 Nights",
    price: 1299,
    originalPrice: 1699,
    rating: 4.6,
    included: [
      "Nile View Hotel",
      "Pyramids & Sphinx Tour",
      "Egyptian Museum Guide",
      "Nile Felucca Cruise",
      "Khan El-Khalili Visit",
      "Daily Breakfast",
    ],
    description:
      "Journey through 5,000 years of history. Stand before the Great Pyramids, explore ancient tombs, and cruise the legendary Nile River.",
    tags: ["History", "Culture", "Adventure"],
  },
  {
    id: "pkg-7",
    title: "European Grand Tour",
    destination: "Multi-City",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&h=500&fit=crop",
    duration: "14 Days / 13 Nights",
    price: 4999,
    originalPrice: 6499,
    rating: 4.8,
    included: [
      "4-Star Hotels Across Europe",
      "Eurail Pass",
      "Guided City Tours",
      "Paris, Rome, Barcelona",
      "Daily Breakfast",
      "Airport Transfers",
    ],
    description:
      "The ultimate European adventure covering Paris, Rome, and Barcelona. Experience the best of art, cuisine, and culture across three iconic cities.",
    tags: ["Multi-City", "Culture", "Luxury"],
  },
  {
    id: "pkg-8",
    title: "Maldives Honeymoon Special",
    destination: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=500&fit=crop",
    duration: "7 Days / 6 Nights",
    price: 4299,
    originalPrice: 5499,
    rating: 4.9,
    included: [
      "Overwater Villa",
      "All-Inclusive Dining",
      "Spa Treatments",
      "Sunset Dolphin Cruise",
      "Private Beach Dinner",
      "Seaplane Transfer",
    ],
    description:
      "The perfect romantic escape in paradise. Stay in a luxurious overwater villa, enjoy world-class dining, and create unforgettable memories.",
    tags: ["Romance", "Beach", "Luxury"],
  },
];

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Flight Booking",
    description:
      "Access to over 500 airlines worldwide with competitive fares. We handle everything from economy to first-class bookings, including multi-city itineraries and group reservations.",
    icon: "Plane",
    features: [
      "Best Price Guarantee",
      "24/7 Booking Support",
      "Flexible Cancellation",
      "Group Discounts",
      "Mileage Optimization",
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop",
  },
  {
    id: "svc-2",
    title: "Hotel Reservations",
    description:
      "From boutique hotels to luxury resorts, we secure the best accommodations worldwide. Enjoy exclusive rates, room upgrades, and complimentary amenities through our partnerships.",
    icon: "Hotel",
    features: [
      "Exclusive Hotel Rates",
      "Room Upgrades",
      "Late Checkout",
      "Complimentary Breakfast",
      "Loyalty Points",
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
  },
  {
    id: "svc-3",
    title: "Visa Assistance",
    description:
      "Navigate complex visa requirements with our expert guidance. We handle documentation, application submission, and follow-up for tourist, business, and transit visas.",
    icon: "FileCheck",
    features: [
      "Document Review",
      "Application Filing",
      "Express Processing",
      "Interview Preparation",
      "Status Tracking",
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
  },
  {
    id: "svc-4",
    title: "Holiday Packages",
    description:
      "Curated vacation packages designed for every traveler. From romantic honeymoons to family adventures, our packages include flights, hotels, transfers, and guided tours.",
    icon: "Palmtree",
    features: [
      "Custom Itineraries",
      "All-Inclusive Options",
      "Local Guides",
      "Travel Insurance",
      "24/7 Support",
    ],
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&h=500&fit=crop",
  },
  {
    id: "svc-5",
    title: "Airport Transfers",
    description:
      "Seamless ground transportation from airport to hotel. Choose from private luxury cars, shared shuttles, or group coaches with professional, English-speaking drivers.",
    icon: "Car",
    features: [
      "Meet & Greet Service",
      "Luxury Vehicles",
      "Flight Monitoring",
      "Child Seats Available",
      "Fixed Pricing",
    ],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
  },
  {
    id: "svc-6",
    title: "Travel Insurance",
    description:
      "Comprehensive travel protection covering medical emergencies, trip cancellations, lost baggage, and flight delays. Travel with complete peace of mind.",
    icon: "Shield",
    features: [
      "Medical Coverage",
      "Trip Cancellation",
      "Baggage Protection",
      "Flight Delay Cover",
      "Emergency Evacuation",
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "tm-1",
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "With 20 years in the travel industry, Sarah founded SkyJourney to make premium travel accessible to everyone. Her vision drives our commitment to excellence.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "tm-2",
    name: "James Okafor",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "James oversees all operations ensuring seamless travel experiences. His expertise in logistics and customer service has been instrumental in our growth.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "tm-3",
    name: "Aisha Patel",
    role: "Head of Destinations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Aisha curates our destination portfolios, personally visiting each location to ensure quality. She has explored over 60 countries and counting.",
    social: { linkedin: "#", twitter: "#" },
  },
  {
    id: "tm-4",
    name: "David Chen",
    role: "Customer Experience Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "David leads our customer experience team, ensuring every traveler receives personalized attention. His mantra: 'Every journey should be extraordinary.'",
    social: { linkedin: "#", twitter: "#" },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    name: "Emily Richardson",
    role: "Business Executive",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    content:
      "SkyJourney planned our family trip to Dubai and it was absolutely flawless. From the hotel selection to the desert safari, every detail was perfect. The team went above and beyond.",
    rating: 5,
    destination: "Dubai",
  },
  {
    id: "t-2",
    name: "Michael Thompson",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    content:
      "As a photographer, I need flexibility in my travel plans. SkyJourney understood my needs perfectly and arranged an incredible photography tour across Istanbul. Highly recommended!",
    rating: 5,
    destination: "Istanbul",
  },
  {
    id: "t-3",
    name: "Priya Sharma",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    content:
      "I've traveled with many agencies, but SkyJourney stands out. Their Zanzibar package was incredible - the resort was stunning, and the local guides were knowledgeable and friendly.",
    rating: 5,
    destination: "Zanzibar",
  },
  {
    id: "t-4",
    name: "Robert Kimani",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    content:
      "The gorilla trekking experience in Rwanda was life-changing. SkyJourney handled all permits, logistics, and accommodations seamlessly. This was the trip of a lifetime.",
    rating: 5,
    destination: "Kigali",
  },
  {
    id: "t-5",
    name: "Sophie Laurent",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    content:
      "Our London heritage tour was magical. The hotel was perfectly located, the guides were exceptional, and the West End show was the cherry on top. Thank you, SkyJourney!",
    rating: 5,
    destination: "London",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Top 10 Hidden Gems in Dubai Beyond the Tourist Trail",
    excerpt:
      "Discover the secret spots that most tourists miss in Dubai, from hidden souks to underground art galleries.",
    content: "",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop",
    category: "Destination Guides",
    author: "Aisha Patel",
    date: "2026-05-15",
    readTime: "8 min read",
    tags: ["Dubai", "Travel Tips", "Hidden Gems"],
  },
  {
    id: "blog-2",
    title: "Visa-Free Travel: Countries You Can Visit Without a Visa",
    excerpt:
      "A comprehensive guide to visa-free destinations for passport holders from various countries, saving you time and money.",
    content: "",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop",
    category: "Visa Information",
    author: "James Okafor",
    date: "2026-05-10",
    readTime: "6 min read",
    tags: ["Visa", "Travel Tips", "Planning"],
  },
  {
    id: "blog-3",
    title: "How to Pack Light for a Two-Week Vacation",
    excerpt:
      "Master the art of minimalist packing with our expert tips, packing lists, and product recommendations for any destination.",
    content: "",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&h=500&fit=crop",
    category: "Travel Tips",
    author: "Sarah Mitchell",
    date: "2026-05-05",
    readTime: "5 min read",
    tags: ["Packing", "Travel Tips", "Minimalism"],
  },
  {
    id: "blog-4",
    title: "Gorilla Trekking in Rwanda: A Complete Guide",
    excerpt:
      "Everything you need to know about gorilla trekking in Rwanda, from permits and preparation to what to expect in the jungle.",
    content: "",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&h=500&fit=crop",
    category: "Destination Guides",
    author: "David Chen",
    date: "2026-04-28",
    readTime: "10 min read",
    tags: ["Rwanda", "Wildlife", "Adventure"],
  },
  {
    id: "blog-5",
    title: "The Best Time to Visit Zanzibar: Seasonal Guide",
    excerpt:
      "Plan your perfect Zanzibar getaway with our seasonal breakdown, covering weather, prices, and the best activities for each month.",
    content: "",
    image: "https://images.unsplash.com/photo-1586869503467-13e7a3f9c93d?w=800&h=500&fit=crop",
    category: "Destination Guides",
    author: "Aisha Patel",
    date: "2026-04-20",
    readTime: "7 min read",
    tags: ["Zanzibar", "Beach", "Seasonal Guide"],
  },
  {
    id: "blog-6",
    title: "Travel Insurance: What You Actually Need to Know",
    excerpt:
      "Demystifying travel insurance with clear explanations of coverage types, common exclusions, and how to choose the right policy.",
    content: "",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    category: "Travel Tips",
    author: "James Okafor",
    date: "2026-04-15",
    readTime: "6 min read",
    tags: ["Insurance", "Safety", "Planning"],
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I book a trip with SkyJourney Travels?",
    answer:
      "You can book through our website by selecting your desired destination or package, filling out the booking form, and making a secure payment. Alternatively, you can contact us via WhatsApp, email, or phone for personalized assistance.",
    category: "Booking",
  },
  {
    id: "faq-2",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), bank transfers, PayPal, and mobile money transfers. Payment plans are available for packages over $2,000.",
    category: "Booking",
  },
  {
    id: "faq-3",
    question: "Can I customize my holiday package?",
    answer:
      "Absolutely! All our packages can be customized to fit your preferences. Whether you want to extend your stay, add activities, or upgrade accommodations, our team will tailor the itinerary to your needs.",
    category: "Packages",
  },
  {
    id: "faq-4",
    question: "What is your cancellation policy?",
    answer:
      "We offer flexible cancellation policies. Cancellations made 30+ days before departure receive a full refund minus a $50 processing fee. Cancellations 15-29 days before receive a 70% refund. Within 14 days, refunds are handled on a case-by-case basis.",
    category: "Booking",
  },
  {
    id: "faq-5",
    question: "Do you offer visa assistance services?",
    answer:
      "Yes, we provide comprehensive visa assistance for most countries. Our team helps with document preparation, application submission, and follow-up. We also offer express processing for urgent travel needs.",
    category: "Services",
  },
  {
    id: "faq-6",
    question: "Are flights included in your packages?",
    answer:
      "Most of our holiday packages include international flights. However, we also offer land-only packages for travelers who prefer to book their own flights. All package details clearly state what's included.",
    category: "Packages",
  },
  {
    id: "faq-7",
    question: "Do you offer travel insurance?",
    answer:
      "Yes, we partner with leading insurance providers to offer comprehensive travel insurance covering medical emergencies, trip cancellation, baggage loss, and more. We highly recommend purchasing insurance for all international trips.",
    category: "Services",
  },
  {
    id: "faq-8",
    question: "What happens if my flight is delayed or cancelled?",
    answer:
      "Our 24/7 support team monitors all flights and will proactively assist you in case of delays or cancellations. We work with airlines to rebook you on the next available flight and adjust your ground arrangements accordingly.",
    category: "Support",
  },
  {
    id: "faq-9",
    question: "Can you accommodate dietary restrictions and special needs?",
    answer:
      "Yes, we accommodate all dietary requirements (vegetarian, vegan, halal, kosher, allergies) and special accessibility needs. Please inform us at the time of booking so we can make appropriate arrangements.",
    category: "Services",
  },
  {
    id: "faq-10",
    question: "Do you offer group discounts?",
    answer:
      "Yes, we offer attractive group discounts for parties of 6 or more travelers. The discount percentage increases with group size. Contact us for a custom group quote.",
    category: "Booking",
  },
];

export const partners: Partner[] = [
  { id: "p-1", name: "Emirates", logo: "Emirates" },
  { id: "p-2", name: "Qatar Airways", logo: "Qatar Airways" },
  { id: "p-3", name: "British Airways", logo: "British Airways" },
  { id: "p-4", name: "Turkish Airlines", logo: "Turkish Airlines" },
  { id: "p-5", name: "Etihad", logo: "Etihad" },
  { id: "p-6", name: "RwandAir", logo: "RwandAir" },
  { id: "p-7", name: "Marriott", logo: "Marriott" },
  { id: "p-8", name: "Hilton", logo: "Hilton" },
];

export const stats = [
  { label: "Happy Travelers", value: 50000, suffix: "+" },
  { label: "Destinations", value: 120, suffix: "+" },
  { label: "Tour Packages", value: 350, suffix: "+" },
  { label: "Years of Experience", value: 15, suffix: "" },
  { label: "Customer Satisfaction", value: 98, suffix: "%" },
  { label: "Awards Won", value: 25, suffix: "+" },
];
