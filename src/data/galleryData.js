import img1 from '../assets/media/img1.jpeg';
import img2 from '../assets/media/img2.jpeg';
import img6 from '../assets/media/img6.jpeg';
import img7 from '../assets/media/img7.jpeg';
import img8 from '../assets/media/img8.jpeg';
import img9 from '../assets/media/img9.jpeg';
import img10 from '../assets/media/img10.jpeg';

import dm_img7 from '../assets/dm/dm_img7.jpeg';
import dm_img10 from '../assets/dm/dm_img10.jpeg';
import dm_img11 from '../assets/dm/dm_img11.jpeg';
import dm_img12 from '../assets/dm/dm_img12.jpeg';
import dm_img13 from '../assets/dm/dm_img13.jpeg';
import dm_img14 from '../assets/dm/dm_img14.jpeg';
import dm_img15 from '../assets/dm/dm_img15.jpeg';
import dm_img16 from '../assets/dm/dm_img16.jpeg';
import dm_img17 from '../assets/dm/dm_img17.jpeg';
import dm_img18 from '../assets/dm/dm_img18.jpeg';
import dm_img19 from '../assets/dm/dm_img19.jpeg';
import dm_img20 from '../assets/dm/dm_img20.jpeg';
import dm_img21 from '../assets/dm/dm_img21.jpeg';

import vid1 from '../assets/media/vid1.mp4';
import vid2 from '../assets/media/vid2.mp4';
import vid3 from '../assets/media/vid3.mp4';
import dm_vid1 from '../assets/dm/dm_vid1.mp4';

import k_img1 from '../assets/k_photos/k_img1.jpeg';

export const galleryCategories = [
  "All",
  "Bridal",
  "Reception",
  "Party",
  "Hair",
  "Skin",
  "Nails",
  "Mehendi",
  "Before After",
  "Videos"
];

export const galleryItems = [
  // --- AUTHENTIC BRIDAL MAKEOVERS ---
  {
    id: 101,
    title: "Signature Royal South Indian Bride",
    category: "Bridal",
    image: dm_img10,
    client: "Divya Studio Bride",
    location: "Hyatt Convention Hall",
    description: "Classic gold kanjeevaram drape with defined eyes, dewy skin finish, and traditional temple jewelry."
  },
  {
    id: 102,
    title: "North Indian Velvet Crimson Bridal Look",
    category: "Bridal",
    image: dm_img11,
    client: "Divya Studio Bride",
    location: "Destination Wedding Palace",
    description: "Rich red velvet lehenga with royal double dupatta draping, custom mink lashes, and airbrush base."
  },
  {
    id: 103,
    title: "Outdoor Ceremony Bridal Radiance",
    category: "Bridal",
    image: dm_img19,
    client: "Divya Studio Bride",
    location: "Outdoor Lawn Venue",
    description: "Dewy glass skin with fresh marigold floral jewelry styling and long-lasting waterproof base."
  },
  {
    id: 104,
    title: "Heritage South Indian Bridal Makeover",
    category: "Bridal",
    image: img1,
    client: "Divya Studio Bride",
    location: "Hyderabad Grand Venue",
    description: "High-definition bridal makeover with ornate gold jewelry and fresh floral braid styling."
  },
  {
    id: 105,
    title: "Luxury Royal Bridal Airbrush Look",
    category: "Bridal",
    image: img2,
    client: "Divya Studio Bride",
    location: "Taj Palace",
    description: "Radiant dewy skin finish with soft smokey eye artistry and bridal veil placement."
  },

  // --- RECEPTION GALLERY PORTRAITS ---
  {
    id: 801,
    title: "Ethereal Pastel Reception Suite",
    category: "Reception",
    image: dm_img12,
    client: "Divya Studio Bride",
    location: "The Leela Palace",
    description: "Soft peach monochromatic glam with champagne highlighter and glossy nude lip polish."
  },
  {
    id: 802,
    title: "Sangeet Dance-Ready Soft Glam",
    category: "Reception",
    image: dm_img13,
    client: "Divya Studio Client",
    location: "Taj Krishna Ballroom",
    description: "Smudge-proof 18-hour HD foundation base designed to remain pristine through dance celebrations."
  },
  {
    id: 803,
    title: "Evening Glam & Cocktail Suite",
    category: "Reception",
    image: dm_img14,
    client: "Divya Studio Client",
    location: "JW Marriott",
    description: "Luminous highlighter flush with delicate shimmer eyeshadow and romantic hair styling."
  },
  {
    id: 804,
    title: "Red Carpet Statement Glam",
    category: "Reception",
    image: dm_img21,
    client: "Celebrity Client",
    location: "Red Carpet Gala",
    description: "Winged eyeliner precision with bold classic red lip polish and sculpted contour."
  },

  // --- OTHER SPECIALIZED SERVICES ---
  {
    id: 405,
    title: "Celebrity Party & Gala Makeover",
    category: "Party",
    image: dm_img14,
    client: "Maid of Honor",
    location: "JW Marriott",
    description: "Camera-ready evening glam featuring bronzed contouring and 3D glitter eye accents."
  },
  {
    id: 406,
    title: "Bridal Veni Floral Braid Styling",
    category: "Hair",
    image: dm_img15,
    client: "Divya Studio Bride",
    location: "Divya Studio",
    description: "Traditional poola jada hair architecture woven with fresh jasmine and orchids."
  },
  {
    id: 407,
    title: "Pre-Bridal 24K Gold Hydra Glow Therapy",
    category: "Skin",
    image: dm_img16,
    client: "Pre-Bridal Client",
    location: "Divya Studio Sanctuary",
    description: "Medical grade hydration prep producing natural lit-from-within bridal skin luminosity."
  },
  {
    id: 408,
    title: "Swarovski Crystal Gel Extensions",
    category: "Nails",
    image: dm_img17,
    client: "Divya Studio Client",
    location: "Nail Lounge",
    description: "Custom rose-gold chrome extensions matching wedding ring jewelry."
  },
  {
    id: 409,
    title: "Organic Groom & Bride Storytelling Henna",
    category: "Mehendi",
    image: dm_img18,
    client: "Bridal Henna Client",
    location: "Private Residence",
    description: "Pure organic henna hand-crafted with intricate portrait motifs and rich stain intensity."
  },
  {
    id: 411,
    title: "Masterclass Student Training Session",
    category: "Skin",
    image: dm_img20,
    client: "Divya Academy Students",
    location: "Divya Beauty Academy",
    description: "Hands-on student training on live models guided by Master Divya."
  },
  {
    id: 901,
    title: "Traditional South Indian Half-Saree Makeover",
    category: "Party",
    image: k_img1,
    client: "Divya Studio Client",
    location: "Hyderabad Event Hall",
    description: "Vibrant traditional makeover with ornate jewelry, fresh hair veni, and dewy HD skin finish."
  },

  // --- BEFORE AFTER CATEGORY ITEMS ---
  {
    id: 701,
    title: "Bridal Airbrush Skin Transformation",
    category: "Before After",
    image: dm_img10,
    client: "South Indian Bride",
    location: "Divya Studio",
    description: "High-definition skin correction & weightless airbrush coverage."
  },
  {
    id: 702,
    title: "North Indian Velvet Lehenga Transformation",
    category: "Before After",
    image: dm_img11,
    client: "Royal Bride",
    location: "Destination Wedding",
    description: "Sculpted contouring, double dupatta setting, and custom mink lashes."
  },
  {
    id: 703,
    title: "Reception Glass Skin Radiance",
    category: "Before After",
    image: dm_img12,
    client: "Reception Bride",
    location: "The Leela Palace",
    description: "Luminous glass skin prep and champagne monochromatic glam."
  },

  // --- REAL CLIENT VIDEOS ---
  {
    id: 501,
    title: "Live Bridal Suite Transformation Film",
    category: "Videos",
    video: dm_vid1,
    image: dm_img10,
    client: "Divya Studio Live Reel",
    location: "Divya Studio",
    description: "Behind the scenes 4K transformation reel showcasing hair sculpting, drape setting, and airbrushing."
  },
  {
    id: 502,
    title: "Bridal Backstage Reel",
    category: "Videos",
    video: vid1,
    image: img1,
    client: "Behind the Scenes",
    location: "Divya Studio",
    description: "4K backstage transformation film showing hair sculpting and airbrushing."
  },
  {
    id: 503,
    title: "Royal Bridal Transformation Reel",
    category: "Videos",
    video: vid2,
    image: img2,
    client: "Divya Studio Bride",
    location: "Bridal Suite",
    description: "Watch Divya craft an ethereal bridal look step-by-step."
  },
  {
    id: 504,
    title: "Live Studio Glam Reveal",
    category: "Videos",
    video: vid3,
    image: dm_img12,
    client: "Divya Studio Client",
    location: "Divya Studio",
    description: "Step-by-step skin preparation, airbrushing, and hair styling reel."
  }
];

export const beforeAfterPairs = [
  {
    id: 1,
    title: "Bridal Skin Correction & Airbrush HD Glow",
    subtitle: "Airbrush HD Waterproof Finish",
    before: dm_img16,
    after: dm_img10,
    notes: "Achieved seamless glow without heavy layering using silicone airbrush color correction."
  },
  {
    id: 2,
    title: "Royalty Reception Sculpting",
    subtitle: "Contour & Eye Artistry",
    before: dm_img20,
    after: dm_img11,
    notes: "Enhanced cheekbone dimension, defined cut-crease eye makeup, and veil placement."
  },
  {
    id: 3,
    title: "Sangeet Radiant Soft Glam",
    subtitle: "Glass Skin & Nude Polish",
    before: dm_img7,
    after: dm_img12,
    notes: "Dewy skin texture transformation with long-lasting dance-proof setting spray."
  },
  {
    id: 4,
    title: "Celebrity Evening Gala Transformation",
    subtitle: "3D Eye Artistry & Bronzed Glow",
    before: dm_img15,
    after: dm_img14,
    notes: "High-contrast evening lighting optimization and camera-ready airbrushing."
  }
];
