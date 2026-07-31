import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaArrowRight, FaAward, FaStar } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { LuxuryButton } from '../Buttons/LuxuryButton';

import heroPhoto from '../../assets/dm/dm_img10.jpeg';
import bgPhoto from '../../assets/dm/dm_img11.jpeg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#1A1A1A] text-white">
      
      {/* Hero Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgPhoto}
          alt="Luxury Bridal Background"
          className="w-full h-full object-cover object-center opacity-35 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-[#1A1A1A]/60" />
      </div>

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C78B74]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] w-[90%] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Small Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-[#C78B74]/25 to-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F7EFEA] text-[11px] font-jakarta font-medium uppercase tracking-[2.5px] mb-6 backdrop-blur-md shadow-lg">
            <FaSparkles className="text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
            Luxury Bridal & Beauty Studio
          </div>

          {/* Main Headline */}
          <h1 className="font-cinzel text-4xl sm:text-6xl xl:text-7xl font-bold leading-[1.12] mb-6 text-white tracking-tight">
            Enhancing Beauty, <br />
            <span className="gold-gradient-text italic font-normal font-cormorant">Creating Timeless</span> Memories
          </h1>

          {/* Subheading Paragraph */}
          <p className="text-sm sm:text-base text-white/85 font-jakarta font-light leading-relaxed max-w-xl mb-10">
            India's premier luxury bridal artist delivering weightless, long-lasting high-definition transformations for weddings, receptions, and red-carpet galas.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <LuxuryButton 
              to="/book-appointment" 
              variant="gold" 
              size="lg"
              icon={<FaCalendarCheck className="text-base" />}
            >
              Book Appointment
            </LuxuryButton>

            <LuxuryButton 
              to="/services" 
              variant="outline" 
              size="lg"
              className="border-white/40 text-white hover:bg-white hover:text-[#2B2B2B]"
              icon={<FaArrowRight className="text-xs" />}
            >
              Explore Services
            </LuxuryButton>
          </div>

          {/* Bottom Trust Badges */}
          <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/15 w-full max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-inner">
                <FaStar />
              </div>
              <div>
                <p className="font-cinzel text-xl font-bold text-white">4.9 ★</p>
                <p className="text-[11px] text-white/70 font-jakarta">Google Rating</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-[#C78B74]/30 flex items-center justify-center text-[#C78B74] shadow-inner">
                <FaAward />
              </div>
              <div>
                <p className="font-cinzel text-xl font-bold text-white">1000+</p>
                <p className="text-[11px] text-white/70 font-jakarta">Happy Brides</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shadow-inner">
                <FaSparkles />
              </div>
              <div>
                <p className="font-cinzel text-xl font-bold text-white">5+ Yrs</p>
                <p className="text-[11px] text-white/70 font-jakarta">Mastery</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Floating Image Frame Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Main Decorative Frame */}
          <div className="relative w-full max-w-md aspect-[4/5] rounded-[36px] overflow-hidden p-3 bg-gradient-to-tr from-[#D4AF37]/60 via-[#C78B74]/40 to-transparent shadow-2xl backdrop-blur-sm border border-white/20">
            <div className="w-full h-full rounded-[28px] overflow-hidden relative">
              <img
                src={heroPhoto}
                alt="Divya Bridal Transformation"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>

            {/* Floating Glass Tag 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 left-6 bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 p-3.5 px-4 rounded-2xl shadow-2xl text-white flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white flex items-center justify-center font-bold text-xs shadow-md">
                HD
              </div>
              <div>
                <p className="font-cinzel text-sm font-bold text-white">Airbrush Finish</p>
                <p className="text-[10px] text-white/80 font-jakarta">18-Hour Camera Ready</p>
              </div>
            </motion.div>

            {/* Floating Glass Tag 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 right-6 bg-black/75 backdrop-blur-md border border-[#D4AF37]/40 p-3.5 px-4 rounded-2xl shadow-2xl text-white flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C78B74] to-[#D4AF37] text-white flex items-center justify-center font-bold text-xs shadow-md">
                👑
              </div>
              <div>
                <p className="font-cinzel text-sm font-bold text-white">Royal Bridal Suite</p>
                <p className="text-[10px] text-white/80 font-jakarta">Luxury Destination Travel</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
