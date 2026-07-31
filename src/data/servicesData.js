import dm_img10 from '../assets/dm/dm_img10.jpeg';
import img2 from '../assets/media/img2.jpeg';
import img13 from '../assets/media/img13.jpeg';
import img20 from '../assets/media/img20.jpeg';
import dm_img21 from '../assets/dm/dm_img21.jpeg';
import dm_img15 from '../assets/dm/dm_img15.jpeg';
import dm_img16 from '../assets/dm/dm_img16.jpeg';
import dm_img17 from '../assets/dm/dm_img17.jpeg';
import dm_img18 from '../assets/dm/dm_img18.jpeg';
import dm_img19 from '../assets/dm/dm_img19.jpeg';

import svc_img1 from '../assets/services_media/svc_img1.jpeg';
import svc_img2 from '../assets/services_media/svc_img2.jpeg';
import svc_img3 from '../assets/services_media/svc_img3.jpeg';
import svc_img4 from '../assets/services_media/svc_img4.jpeg';

export const servicesData = [
  {
    id: "bridal-makeup",
    title: "Signature Bridal Makeup",
    category: "Bridal Makeup",
    description: "Tailored luxury bridal makeover crafted to highlight your natural radiance with high-definition, long-lasting premium cosmetics.",
    fullDescription: "Our Signature Bridal Makeup is an exclusive experience designed to make every bride look mesmerizing on her special day. Using internationally acclaimed luxury products like Charlotte Tilbury, Dior, MAC, and NARS, Divya customizes every layer to match your skin tone, wedding attire, and personal aesthetic. Includes skin preparation, premium lash extensions, hair styling, and saree/lehenga draping.",
    duration: "3 - 4 Hours",
    popular: true,
    rating: 5.0,
    image: dm_img10,
    benefits: [
      "Waterproof & Sweat-resistant 18-hour HD coverage",
      "Customized skin prep with luxury serums & hydration masks",
      "Premium hand-crafted mink eyelashes included",
      "Hair styling, floral accessory placement & dupatta draping",
      "Personalized trial consultation before wedding week"
    ],
    faqs: [
      { question: "How far in advance should I book my bridal makeover?", answer: "We recommend booking 3 to 6 months prior to your wedding date to secure your slot." },
      { question: "Do you provide home or venue services?", answer: "Yes, Divya and her senior artistry team travel across India and internationally for venue transformations." }
    ]
  },
  {
    id: "hd-makeup",
    title: "HD Airbrush Bridal Makeup",
    category: "Airbrush Makeup",
    description: "Ultra-lightweight, flawless camera-ready perfection with precision airbrush technology for maximum longevity.",
    fullDescription: "Designed for high-definition photography and videography, our HD Airbrush Makeup creates a weightless, porcelain finish that never looks cakey. Using micro-fine silicon-based formulas, it seamlessly hides blemishes and fine lines while allowing your natural beauty to shine through.",
    duration: "3.5 Hours",
    popular: true,
    rating: 5.0,
    image: img2,
    benefits: [
      "Ultra HD non-transferable formula lasting 24 hours",
      "Ideal for sensitive & oily skin types prone to shine",
      "Flawless photo & 4K video-ready porcelain finish",
      "Includes hair styling & luxury jewelry styling support"
    ],
    faqs: [
      { question: "Is airbrush makeup suitable for all skin types?", answer: "Yes, airbrush formula works exceptionally well for oily, combination, and sensitive skin." }
    ]
  },
  {
    id: "reception-makeup",
    title: "Royal Reception Makeup",
    category: "Reception Makeup",
    description: "Glamorous, evening-ready glam with dramatic eye accents, luminous highlighter, and bold statement lips.",
    fullDescription: "Step into your reception glowing like royalty. This service focuses on captivating evening lighting, dramatic smokey or glitter eye work, and luminous sculpted contours.",
    duration: "2.5 Hours",
    popular: false,
    rating: 4.9,
    image: svc_img4,
    benefits: [
      "High-contrast evening lighting optimization",
      "Dramatic 3D shimmer or soft smokey eye artistry",
      "Luminous body glow & collarbone highlighting"
    ]
  },
  {
    id: "engagement-makeup",
    title: "Engagement & Sangeet Glam",
    category: "Engagement Makeup",
    description: "Chic, radiant, and contemporary soft glam designed to elevate your ring ceremony and dance celebrations.",
    fullDescription: "A soft, romantic, and youthful makeover created for engagement ceremonies and sangeet nights. Focuses on glowing glass skin and elegant hair accents.",
    duration: "2 Hours",
    popular: false,
    rating: 4.9,
    image: svc_img1,
    benefits: [
      "Dewy glass-skin finish with soft pastel palettes",
      "Custom braid, bun, or Hollywood waves hair styling",
      "Smudge-proof dance-ready long-lasting formula"
    ]
  },
  {
    id: "party-makeup",
    title: "Luxury Party & Celebrity Makeup",
    category: "Party Makeup",
    description: "Sophisticated glam for bridesmaids, mothers of the bride, cocktail parties, and red-carpet galas.",
    fullDescription: "Make heads turn at every celebration. Tailored for family members, bridesmaids, and event attendees seeking high-end perfection.",
    duration: "1.5 Hours",
    popular: false,
    rating: 4.8,
    image: svc_img2,
    benefits: [
      "Custom eye look matching outfit & theme",
      "Professional hair blowout or soft curls",
      "Long-lasting base with HD setting mist"
    ]
  },
  {
    id: "hair-styling-spa",
    title: "Royal Hair Styling & Hair Spa",
    category: "Hair Styling",
    description: "Intricate bridal updos, Hollywood waves, floral braid artistry, and deep nourishment hair spa.",
    fullDescription: "Transform your tresses with expertly sculpted updos, intricate Dutch floral braids, or sleek modern red-carpet waves paired with our deep conditioning keratin spa.",
    duration: "1.5 Hours",
    popular: false,
    rating: 4.9,
    image: dm_img15,
    benefits: [
      "Heat protection serum & shine infusion treatment",
      "Real floral insertion & hair jewelry anchoring",
      "Volumizing root lift for all day hold"
    ]
  },
  {
    id: "skin-treatments-facial",
    title: "Hydra Gold Facial & Skin Therapy",
    category: "Skin Treatments",
    description: "Deep medical-grade skin rejuvenation, 24K gold facial mask, and bridal radiance glow boost.",
    fullDescription: "Revitalize your skin with our signature 7-step Hydra Gold facial. Removes dead skin cells, unclogs pores, infuses hyaluronic acid, and seals in youthful firmness.",
    duration: "2 Hours",
    popular: true,
    rating: 5.0,
    image: dm_img16,
    benefits: [
      "Deep pore exfoliation with ultrasonic scrubber",
      "24K Gold luxury collagen mask infusion",
      "Instant skin tightening & natural bridal luminosity"
    ]
  },
  {
    id: "nail-extensions-art",
    title: "Luxury Gel Extensions & Nail Art",
    category: "Nail Extensions",
    description: "Custom acrylic/gel extensions, French tips, chrome shimmer, and Swarovski crystal bridal embellishments.",
    fullDescription: "Elevate your hands with bespoke gel nail extensions tailored to complement your wedding rings and bridal henna.",
    duration: "2 Hours",
    popular: false,
    rating: 4.9,
    image: dm_img17,
    benefits: [
      "Chip-resistant formula lasting up to 5 weeks",
      "Handmade 3D jewel accents & gold foil designs",
      "Nail cuticle care & deep hand hydration massage"
    ]
  },
  {
    id: "mehendi-artistry",
    title: "Bridal Mehendi & Henna Artistry",
    category: "Mehendi",
    description: "Intricate organic bridal mehendi designs featuring portrait henna, storytelling motifs, and rich dark stain.",
    fullDescription: "Pure organic henna hand-crafted with intricate bridal portraits, floral vines, and traditional motifs.",
    duration: "4 - 5 Hours",
    popular: false,
    rating: 5.0,
    image: dm_img18,
    benefits: [
      "100% natural chemical-free organic henna cone",
      "Customized bride & groom portrait motifs",
      "Stain intensity oil booster mix included"
    ]
  },
  {
    id: "saree-draping-styling",
    title: "Bridal Saree & Lehenga Draping",
    category: "Saree Draping",
    description: "Precision draping in classic South Indian, Can-Can flared, Gujarati, Dupatta double-setting, and modern styles.",
    fullDescription: "Flawless drape placement ensuring security, sleek silhouette, and zero pin discomfort throughout your wedding rituals.",
    duration: "45 Mins",
    popular: false,
    rating: 4.9,
    image: svc_img3,
    benefits: [
      "Custom pleating & pin concealed locking",
      "Dupatta volume styling for 360-degree photography",
      "Comfortable movement support for long ceremonies"
    ]
  }
];

export const serviceCategories = [
  "All",
  "Bridal Makeup",
  "Airbrush Makeup",
  "Engagement Makeup",
  "Reception Makeup",
  "Party Makeup",
  "Hair Styling",
  "Skin Treatments",
  "Nail Extensions",
  "Mehendi",
  "Saree Draping"
];
