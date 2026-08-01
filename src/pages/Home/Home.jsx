import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaAward, FaHeart, FaStar, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { SEO } from '../../components/SEO/SEO';
import { Hero } from '../../components/Hero/Hero';
import { ServiceCard } from '../../components/Cards/ServiceCard';
import { WhyChooseCard } from '../../components/Cards/WhyChooseCard';
import { PackageCard } from '../../components/Cards/PackageCard';
import { CounterSection } from '../../components/Counter/CounterSection';
import { BeforeAfterSlider } from '../../components/Gallery/BeforeAfterSlider';
import { MasonryGallery } from '../../components/Gallery/MasonryGallery';
import { VideoModalBanner } from '../../components/Video/VideoModal';
import { FAQAccordion } from '../../components/FAQ/FAQAccordion';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';
import { servicesData } from '../../data/servicesData';
import { packagesData } from '../../data/packagesData';
import { whyChooseUsData } from '../../data/whyUsData';
import { homeFaqs } from '../../data/faqData';
import divyaCertImg from '../../assets/divya_certificate.jpg';

export const Home = () => {
  const featuredServices = servicesData.slice(0, 6);

  // Schema.org LocalBusiness & ProfessionalService
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.makeoverbydivyas.in/#business",
        "name": "Makeover by Divyas",
        "url": "https://www.makeoverbydivyas.in/",
        "telephone": "+919381824540",
        "priceRange": "₹₹₹",
        "image": "https://www.makeoverbydivyas.in/src/assets/logo.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nizampet Main Road",
          "addressLocality": "Nizampet, Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500090",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.5169,
          "longitude": 78.3842
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "21:00"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": homeFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="overflow-hidden">
      <SEO 
        title="Makeover by Divyas | Best Bridal Makeup Artist in Nizampet Hyderabad"
        description="Looking for the best bridal makeup artist in Nizampet, Hyderabad? Makeover by Divyas offers bridal makeup, reception makeup, HD & airbrush makeup, saree draping, and hairstyling."
        keywords="Bridal Makeup Artist in Nizampet Hyderabad, Best Bridal Makeup Artist in Nizampet, Professional Makeup Artist Nizampet Hyderabad, HD Makeup Artist Nizampet, Airbrush Makeup Nizampet Hyderabad, Reception Makeup Artist Nizampet, Engagement Makeup Artist Nizampet, Party Makeup Artist Nizampet, Saree Draping Services Nizampet Hyderabad, Bridal Hairstylist Nizampet, Wedding Makeup Artist Hyderabad, Bridal Makeup Near Me Nizampet, Luxury Bridal Makeup Hyderabad, Makeup Studio Nizampet Hyderabad"
        canonicalUrl="https://www.makeoverbydivyas.in/"
        schemaData={homeSchema}
      />

      {/* Hero Component */}
      <Hero />

      {/* H1 SEO Headline & Intro Section */}
      <section className="bg-gradient-to-r from-[#FAF4F0] via-white to-[#FAF4F0] py-12 border-b border-[#E8D5C8]/40">
        <div className="max-w-[1280px] w-[90%] mx-auto text-center">
          <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
            <FaSparkles /> Premier Local Studio & Destination Artist
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B2B2B] mb-4 leading-tight">
            Best Bridal Makeup Artist in Nizampet, Hyderabad
          </h1>
          <p className="text-base sm:text-lg text-[#555] font-sans max-w-3xl mx-auto leading-relaxed">
            Welcome to <strong>Makeover by Divyas</strong>—Nizampet Hyderabad's premiere studio for luxury HD bridal makeup, weightless silicone airbrush makeovers, royal reception glam, traditional South Indian Pelli Kuthuru styling, Poola Jada, and saree draping.
          </p>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative flex flex-col justify-center"
          >
            <div className="relative rounded-[28px] overflow-hidden border-2 border-[#D4AF37]/30 shadow-2xl aspect-[4/3] sm:aspect-[16/11] w-full max-w-lg lg:max-w-none mx-auto bg-[#FAF5F2]">
              <img
                src={divyaCertImg}
                alt="Divya Best Bridal Makeup Artist in Nizampet Hyderabad"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              
              <div className="absolute top-4 right-4 bg-[#C78B74] text-white p-3 px-4 rounded-xl shadow-xl flex flex-col items-center justify-center border border-white/20">
                <span className="font-cinzel text-xl font-bold leading-none">5+</span>
                <span className="text-[9px] uppercase font-jakarta tracking-wider mt-0.5">Years Exp</span>
              </div>
            </div>

            <div className="w-full max-w-lg lg:max-w-none mt-4 bg-gradient-to-r from-[#FAF5F2] via-white to-[#FAF5F2] p-4.5 rounded-2xl border-2 border-[#D4AF37]/30 shadow-md text-center">
              <p className="font-cinzel text-2xl font-bold text-[#1A1A1A]">Divya</p>
              <p className="text-xs text-[#C78B74] font-jakarta font-semibold uppercase tracking-wider mt-1">
                ISO Certified Master Artist & Founder • Nizampet, Hyderabad
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> Our Philosophy & Story
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-6 leading-tight">
              Crafting Radiant Confidence for Every Bride in Hyderabad
            </h2>
            <p className="text-sm sm:text-base text-[#444] font-sans leading-relaxed mb-6">
              Founded by master artist Divya, <strong>Makeover by Divyas</strong> has redefined luxury bridal transformations across Nizampet, Kukatpally, Bachupally, Miyapur, KPHB Colony, Madhapur, and Gachibowli in Hyderabad. We believe bridal makeup should feel weightless while providing 18+ hour sweat-resistant coverage.
            </p>
            <p className="text-sm sm:text-base text-[#444] font-sans leading-relaxed mb-8">
              Using strictly genuine luxury products from Charlotte Tilbury, Dior, NARS, MAC, and Huda Beauty, we customize every layer to match your skin undertone, wedding outfit, and personal aesthetic.
            </p>

            <LuxuryButton to="/about" variant="primary" icon={<FaArrowRight className="text-xs" />}>
              Read Full Story
            </LuxuryButton>
          </motion.div>

        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> What We Offer
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] mb-4">
              Professional Bridal Makeup Services in Nizampet
            </h2>
            <p className="text-sm md:text-base text-[#555] font-sans">
              From HD bridal bases to 4K airbrushing, reception glam, saree pleating, and Poola Jada hairstyling in Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 md:p-7 rounded-2xl border border-[#E8D5C8] shadow-xs hover:shadow-md transition-all">
              <h3 className="text-xl font-outfit font-bold tracking-tight text-[#1A1A1A] mb-2">HD & Airbrush Bridal Makeup</h3>
              <p className="text-sm text-[#666] mb-4 leading-relaxed">Poreless 24-hour waterproof base tailored for high-definition photography and Hyderabad climate.</p>
              <Link to="/bridal-makeup" className="text-xs font-bold text-[#C78B74] inline-flex items-center gap-1 hover:gap-2 transition-all">Learn More <FaArrowRight /></Link>
            </div>

            <div className="bg-white p-6 md:p-7 rounded-2xl border border-[#E8D5C8] shadow-xs hover:shadow-md transition-all">
              <h3 className="text-xl font-outfit font-bold tracking-tight text-[#1A1A1A] mb-2">Reception Makeup</h3>
              <p className="text-sm text-[#666] mb-4 leading-relaxed">High-glam evening reception looks with dramatic smokey eyes, rose gold cut-crease & collarbone glow.</p>
              <Link to="/reception-makeup" className="text-xs font-bold text-[#C78B74] inline-flex items-center gap-1 hover:gap-2 transition-all">Learn More <FaArrowRight /></Link>
            </div>

            <div className="bg-white p-6 md:p-7 rounded-2xl border border-[#E8D5C8] shadow-xs hover:shadow-md transition-all">
              <h3 className="text-xl font-outfit font-bold tracking-tight text-[#1A1A1A] mb-2">Engagement & Pelli Kuthuru Makeup</h3>
              <p className="text-sm text-[#666] mb-4 leading-relaxed">Chic, romantic soft glam featuring dewy glass skin, pastel tones, and dance-proof long hold.</p>
              <Link to="/engagement-makeup" className="text-xs font-bold text-[#C78B74] inline-flex items-center gap-1 hover:gap-2 transition-all">Learn More <FaArrowRight /></Link>
            </div>

            <div className="bg-white p-6 md:p-7 rounded-2xl border border-[#E8D5C8] shadow-xs hover:shadow-md transition-all">
              <h3 className="text-xl font-outfit font-bold tracking-tight text-[#1A1A1A] mb-2">Party Makeup</h3>
              <p className="text-sm text-[#666] mb-4 leading-relaxed">Sophisticated makeover for bridesmaids, cocktail galas, and special event attendees in Nizampet.</p>
              <Link to="/party-makeup" className="text-xs font-bold text-[#C78B74] inline-flex items-center gap-1 hover:gap-2 transition-all">Learn More <FaArrowRight /></Link>
            </div>

            <div className="bg-white p-6 md:p-7 rounded-2xl border border-[#E8D5C8] shadow-xs hover:shadow-md transition-all">
              <h3 className="text-xl font-outfit font-bold tracking-tight text-[#1A1A1A] mb-2">Saree Draping Services</h3>
              <p className="text-sm text-[#666] mb-4 leading-relaxed">Precision pleating for Kanjivaram silk, Gujarati style, and double-dupatta canopy setting.</p>
              <Link to="/saree-draping" className="text-xs font-bold text-[#C78B74] inline-flex items-center gap-1 hover:gap-2 transition-all">Learn More <FaArrowRight /></Link>
            </div>

            <div className="bg-white p-6 md:p-7 rounded-2xl border border-[#E8D5C8] shadow-xs hover:shadow-md transition-all">
              <h3 className="text-xl font-outfit font-bold tracking-tight text-[#1A1A1A] mb-2">Bridal Hair Styling & Poola Jada</h3>
              <p className="text-sm text-[#666] mb-4 leading-relaxed">Intricate Poola Jada floral braids, Hollywood retro waves, updos, and hair extension integration.</p>
              <Link to="/bridal-hairstyle" className="text-xs font-bold text-[#C78B74] inline-flex items-center gap-1 hover:gap-2 transition-all">Learn More <FaArrowRight /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> Excellence Guaranteed
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Why Choose Makeover by Divyas
            </h2>
            <p className="text-sm text-[#555] font-sans">
              Discover why brides across Nizampet, Kukatpally, Bachupally, Miyapur, and Hyderabad trust us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsData.map((item, idx) => (
              <WhyChooseCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Counter Statistics */}
      <CounterSection />

      {/* Gallery Showcase */}
      <section className="py-20 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> Visual Proof
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Our Bridal Gallery
            </h2>
            <p className="text-sm text-[#555] font-sans">
              Real bridal transformations captured in high definition.
            </p>
          </div>

          <MasonryGallery limit={8} showFilters={true} />

          <div className="mt-12 text-center">
            <LuxuryButton to="/gallery" variant="outline">
              Explore Complete Photo Gallery
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* Google Business & Local MAP Section */}
      <section className="py-20 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaMapMarkerAlt /> Visit Us / Contact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-6">
              Makeover by Divyas Studio in Nizampet, Hyderabad
            </h2>
            
            <div className="space-y-4 text-sm text-[#444] mb-8">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C78B74] text-lg shrink-0 mt-0.5" />
                <div>
                  <strong>Address:</strong> Makeover by Divyas Studio, Nizampet Main Road, Nizampet, Hyderabad, Telangana - 500090
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#C78B74] text-lg shrink-0" />
                <div>
                  <strong>Phone:</strong> +91 93818 24540
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-[#C78B74] text-lg shrink-0" />
                <div>
                  <strong>Hours:</strong> Mon - Sun: 09:00 AM - 09:00 PM
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#C78B74] text-lg shrink-0" />
                <div>
                  <strong>Service Areas:</strong> Nizampet, Kukatpally, Bachupally, Miyapur, KPHB Colony, Pragathi Nagar, Madhapur, Gachibowli, Kondapur, Jubilee Hills
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/919381824540" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium shadow-md">
                <FaWhatsapp className="text-xl" /> WhatsApp Now
              </a>
              <a href="tel:+919381824540" className="inline-flex items-center justify-center gap-2 bg-[#C78B74] text-white px-6 py-3 rounded-xl font-medium shadow-md">
                <FaPhoneAlt /> Call +91 93818 24540
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E8D5C8] h-80 lg:h-96">
            <iframe 
              title="Makeover by Divyas Google Maps Location Nizampet Hyderabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.8329618175593!2d78.3841982!3d17.5168862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9210214a1a5b%3A0xc3160a2b8e3a2410!2sNizampet%2C%20Hyderabad%2C%20Telangana%20500090!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-[#FAF5F2] border-t border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> Search Intent FAQs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#555] font-sans">
              Got questions about bridal makeup, pricing, airbrushing, or venue travel in Hyderabad? Find all answers below.
            </p>
          </div>

          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* Bottom Booking Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#1A1A1A] via-[#2B2B2B] to-[#1A1A1A] text-white text-center border-t-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="text-xs uppercase tracking-[3px] text-[#D4AF37] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-3 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
            <FaSparkles /> Book Your Makeup Appointment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mb-4 text-white">
            Book Your Makeup Appointment in Nizampet, Hyderabad
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-jakarta font-medium mb-8 max-w-xl mx-auto">
            Reserve your wedding dates with Nizampet's best bridal makeup artist. Dates fill up fast!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LuxuryButton to="/book-appointment" variant="primary" size="lg">
              Book Appointment Concierge
            </LuxuryButton>
            <a
              href="https://wa.me/919381824540"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-jakarta font-semibold text-sm hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="text-lg text-emerald-400" /> Direct WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
