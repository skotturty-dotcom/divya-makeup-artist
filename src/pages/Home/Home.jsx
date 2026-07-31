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
import { TestimonialsSlider } from '../../components/Testimonials/TestimonialsSlider';
import { FAQAccordion } from '../../components/FAQ/FAQAccordion';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';
import { servicesData } from '../../data/servicesData';
import { packagesData } from '../../data/packagesData';
import { whyChooseUsData } from '../../data/whyUsData';
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
            className="lg:col-span-6 relative flex justify-center"
          >
            <div className="relative rounded-[28px] overflow-hidden border border-[#E9DED7] shadow-2xl aspect-[4/3] sm:aspect-[16/11] w-full max-w-lg lg:max-w-none mx-auto bg-[#FAF5F2]">
              <img
                src={divyaCertImg}
                alt="Divya Certified Master Makeup Artist"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-[#E9DED7] shadow-md">
                <p className="font-cinzel text-xl font-bold text-[#2B2B2B]">Divya</p>
                <p className="text-[11px] text-[#C78B74] font-jakarta font-semibold">ISO Certified Master Artist & Founder</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#C78B74] text-white p-3.5 px-4 rounded-xl shadow-xl hidden sm:flex flex-col items-center justify-center border border-white/20">
              <span className="font-cinzel text-2xl font-bold leading-none">5+</span>
              <span className="text-[9px] uppercase font-jakarta tracking-wider mt-0.5">Years Exp</span>
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
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> All-Inclusive Packages
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-4">
              Bridal Transformation Suites
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] font-poppins font-light">
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
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> Portfolio Showcase
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-4">
              Real Brides, Real Radiance
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] font-poppins font-light">
              Explore our recent transformations across weddings, receptions, sangeets, and fashion shoots.
            </p>
          </div>

          <MasonryGallery limit={8} showFilters={true} />

          <div className="mt-12 text-center">
            <LuxuryButton to="/gallery" variant="gold">
              Explore Complete Photo & Video Gallery
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* 9. Video Section Banner */}
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
            <h2 className="font-cinzel text-3xl sm:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] font-jakarta font-light">
              Find quick answers to common questions about bridal makeup, venue travel, products, and trials.
            </p>
          </div>

          <FAQAccordion faqs={homeFaqs} />
        </div>
      </section>

      {/* 12. Call To Action Banner */}
      <section className="py-20 bg-gradient-to-r from-[#1A1A1A] via-[#2B2B2B] to-[#1A1A1A] text-white border-t border-[#D4AF37]/30 relative overflow-hidden">
        <div className="max-w-[1280px] w-[90%] mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-[3px] text-[#D4AF37] font-poppins font-semibold inline-flex items-center gap-1.5 mb-4 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            <FaSparkles /> Reserve Your Special Date
          </span>
          <h2 className="font-cormorant text-4xl sm:text-6xl font-bold mb-6 text-white leading-tight">
            Book Your Dream Bridal Look Today
          </h2>
          <p className="text-xs sm:text-base text-white/80 font-poppins font-light max-w-xl mx-auto mb-10">
            Dates for the upcoming wedding season are filling quickly. Reserve your slot with Divya to guarantee uncompromised luxury and perfection.
          </p>

          <LuxuryButton to="/book-appointment" variant="gold" size="lg">
            Schedule Your Appointment Now
          </LuxuryButton>
        </div>
      </section>

    </div>
  );
};
