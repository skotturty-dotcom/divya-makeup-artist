export const packagesData = [
  {
    id: "silver",
    name: "Silver Bridal Package",
    tagline: "Essential Elegance for Intimate Ceremonies",
    price: "₹25,000",
    originalPrice: "₹30,000",
    popular: false,
    badge: "Essential",
    color: "from-slate-200 to-slate-400",
    accentColor: "#94A3B8",
    features: [
      "1 Main Wedding HD Makeup Look",
      "Standard Bridal Hair Styling & Hair Accessories",
      "Saree / Lehenga Draping (Single Dupatta)",
      "High-Quality Eyelashes Included",
      "Basic Skin Prep & Hydration Mask",
      "Nail Polish Application",
      "In-Studio Transformation"
    ],
    notIncluded: [
      "Airbrush Makeup Upgrade",
      "Trial Makeup Session",
      "Bride's Mother / Sister Makeup",
      "Venue Travel Included"
    ]
  },
  {
    id: "gold",
    name: "Gold Bridal Package",
    tagline: "The Perfect Harmony of Luxury & Perfection",
    price: "₹45,000",
    originalPrice: "₹52,000",
    popular: true,
    badge: "Most Popular",
    color: "from-amber-200 to-yellow-500",
    accentColor: "#C78B74",
    features: [
      "2 Event Makeup Looks (Wedding + Engagement/Reception)",
      "HD Airbrush Makeup Upgrade for Main Ceremony",
      "Premium Hair Styling with Real Floral Setup",
      "Double Dupatta & Lehenga Draping",
      "3D Silk Eyelashes & Luminous Body Shimmer",
      "Hydra Glow Skin Treatment 3 days prior",
      "Gel Nail Extensions & Bridal Nail Art",
      "Venue Travel within City Limits Included"
    ],
    notIncluded: [
      "Bride's Family Member Makeup",
      "Outstation Destination Travel"
    ]
  },
  {
    id: "diamond",
    name: "Diamond Bridal Package",
    tagline: "Complete Multi-Ceremony Royal Transformation",
    price: "₹75,000",
    originalPrice: "₹88,000",
    popular: false,
    badge: "Complete Suite",
    color: "from-cyan-200 to-blue-400",
    accentColor: "#38BDF8",
    features: [
      "3 Event Makeup Looks (Haldi/Mehendi + Sangeet + Wedding)",
      "Ultra HD Airbrush Makeup for All Events",
      "International Brand Products (Dior, Charlotte Tilbury, NARS)",
      "Full Bridal Trial Session (Makeup + Hair Concept)",
      "Luxury 24K Gold Hydra Facial 1 week prior",
      "Handmade Mink Eyelashes & Custom Lenses",
      "Bridal Mehendi & Gel Extension Package",
      "2 Party Makeups for Mother/Sister",
      "On-Location Venue Service Anywhere in State"
    ],
    notIncluded: [
      "Airfare for Outstation Destination Weddings"
    ]
  },
  {
    id: "royal",
    name: "Royal Empress Package",
    tagline: "Unrivaled VIP Destination Wedding Experience",
    price: "₹1,25,000",
    originalPrice: "₹1,50,000",
    popular: false,
    badge: "VIP Luxury",
    color: "from-amber-300 via-rose-300 to-amber-500",
    accentColor: "#D4AF37",
    features: [
      "Unlimited Event Looks for 3 Days (Haldi, Mehendi, Sangeet, Wedding, Reception)",
      "Exclusive Artistry by Senior Master Divya Personally",
      "Customized Skin Care Concierge (3 Pre-Bridal Facials)",
      "Full Hair Spa, Keratin Polish & Custom Extensions",
      "Double Dupatta Draping with Pleat Master Assistant",
      "4 Party Makeovers for Mother, Sisters, or Maid of Honor",
      "Touch-up Artist on Standby Throughout Reception Event",
      "Luxury Gift Hamper with After-Care Touchup Kit",
      "Pan-India & International Venue Travel Included"
    ],
    notIncluded: []
  }
];

export const packageComparisonTable = [
  { feature: "Number of Event Looks", silver: "1 Event", gold: "2 Events", diamond: "3 Events", royal: "Unlimited (3 Days)" },
  { feature: "Makeup Technology", silver: "HD Foundation", gold: "HD Airbrush", diamond: "Ultra HD Airbrush", royal: "Custom Bespoke Airbrush" },
  { feature: "Luxury Brands (Dior, Tilbury)", silver: "Standard", gold: "Premium", diamond: "Luxury International", royal: "Ultra Luxury VIP Line" },
  { feature: "Trial Session", silver: "❌", gold: "Discounted", diamond: "Full Free Trial", royal: "2 Custom Trials" },
  { feature: "Pre-Bridal Skin Care", silver: "Basic Prep", gold: "1 Hydra Glow Facial", diamond: "24K Gold Facial", royal: "3 Step Glow Concierge" },
  { feature: "Nail Extensions & Art", silver: "Basic Polish", gold: "Gel Extensions", diamond: "Custom 3D Art", royal: "Swarovski Crystal Art" },
  { feature: "Family Party Makeups", silver: "❌", gold: "Add-on", diamond: "2 Included", royal: "4 Included" },
  { feature: "Venue Location Travel", silver: "In-Studio", gold: "City Limits", diamond: "Statewide Included", royal: "Pan-India & Global" },
  { feature: "Event Touch-up Standby", silver: "❌", gold: "❌", diamond: "Available", royal: "Dedicated Assistant" }
];
