import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaAward, FaHeart } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
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

  return (
    <div className="overflow-hidden">
      {/* Hero Component */}
      <Hero />

      {/* 2. About Preview Section */}
      <section className="py-24 bg-[#FFFDFC]">
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
                alt="Divya Certified Master Makeup Artist"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Floating Experience Badge */}
              <div className="absolute top-4 right-4 bg-[#C78B74] text-white p-3 px-4 rounded-xl shadow-xl flex flex-col items-center justify-center border border-white/20">
                <span className="font-cinzel text-xl font-bold leading-none">5+</span>
                <span className="text-[9px] uppercase font-jakarta tracking-wider mt-0.5">Years Exp</span>
              </div>
            </div>

            {/* Clean Title Card Below the Image */}
            <div className="w-full max-w-lg lg:max-w-none mt-4 bg-gradient-to-r from-[#FAF5F2] via-white to-[#FAF5F2] p-4.5 rounded-2xl border-2 border-[#D4AF37]/30 shadow-md text-center">
              <p className="font-cinzel text-2xl font-bold text-[#1A1A1A]">Divya</p>
              <p className="text-xs text-[#C78B74] font-jakarta font-semibold uppercase tracking-wider mt-1">
                ISO Certified Master Artist & Founder
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
            <h2 className="font-cinzel text-3xl sm:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-6 leading-tight">
              Crafting Radiant Confidence for Every Bride
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed mb-6">
              Founded by acclaimed master artist Divya, Divya Makeup Artist has redefined luxury bridal transformations across India. We believe bridal makeup should never feel like a mask—it should be an ethereal enhancement of your unique beauty.
            </p>
            <p className="text-sm sm:text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed mb-8">
              Using only top-tier luxury cosmetics from Paris and New York, our artistry combines long-lasting silicone airbrush techniques with individualized skin preparation to ensure effortless radiance from your morning pheras to your evening reception gala.
            </p>

            <LuxuryButton to="/about" variant="primary" icon={<FaArrowRight className="text-xs" />}>
              Read Full Story
            </LuxuryButton>
          </motion.div>

        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-24 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> The Gold Standard
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-4">
              Why Choose Divya Makeup Artist?
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A] font-jakarta font-medium">
              Experience unparalleled luxury, hygiene, customized artistry, and peace of mind on your most memorable day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsData.map((item, idx) => (
              <WhyChooseCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Services Section */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
                <FaSparkles /> Signature Artistry
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl xl:text-5xl font-bold text-[#2B2B2B]">
                Our Featured Services
              </h2>
            </div>
            <LuxuryButton to="/services" variant="outline" size="sm">
              View All Services
            </LuxuryButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bridal Packages Preview Section */}
      <section className="py-24 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> Luxury Collections
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-4">
              Signature Bridal Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A] font-jakarta font-medium">
              Carefully curated packages blending HD airbrush makeup, pre-bridal skincare, hair architecture, and double dupatta draping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
            {packagesData.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <LuxuryButton to="/bridal-packages" variant="secondary">
              Compare Full Package Features & Details
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* 6. Animated Statistics Counter Section */}
      <CounterSection />

      {/* 7. Interactive Before & After Section */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* 8. Gallery Preview Section */}
      <section className="py-24 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> Portfolio Showcase
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-4">
              Real Brides, Real Radiance
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A] font-jakarta font-medium">
              Explore our recent transformations across weddings, receptions, sangeets, and fashion shoots.
            </p>
          </div>

          <MasonryGallery limit={8} showFilters={true} />

          <div className="mt-12 text-center">
            <LuxuryButton to="/gallery" variant="outline">
              Explore Complete Photo & Video Gallery
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* 9. Cinematic Video Showcase Banner */}
      <section className="py-12 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <VideoModalBanner />
        </div>
      </section>

      {/* 11. FAQ Preview Section */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> Clarifications
            </span>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#2B2B2B] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#1A1A1A] font-jakarta font-medium">
              Answers to common queries regarding trial sessions, venue bookings, products, and packages.
            </p>
          </div>

          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* 12. Bottom Booking Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#1A1A1A] via-[#2B2B2B] to-[#1A1A1A] text-white text-center border-t-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="text-xs uppercase tracking-[3px] text-[#D4AF37] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-3 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#D4AF37]/40">
            <FaSparkles /> Secure Your Wedding Date
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold mb-4 text-white">
            Ready to Look Ethereal on Your Big Day?
          </h2>
          <p className="text-sm sm:text-base text-white/90 font-jakarta font-medium mb-8 max-w-xl mx-auto">
            Book your consultation with Master Divya today. Peak wedding season dates fill up 3 to 6 months in advance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <LuxuryButton to="/book-appointment" variant="primary" size="lg">
              Book Appointment Concierge
            </LuxuryButton>
            <a
              href="https://wa.me/919381824540"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-jakarta font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Instant WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
