import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaGem, FaGraduationCap, FaCertificate, FaCrown, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';

import photo5 from '../../assets/photo5.jpeg';
import photo6 from '../../assets/photo6.jpeg';
import photo9 from '../../assets/photo9.jpeg';
import photo10 from '../../assets/photo10.jpeg';
import divyaImg from '../../assets/divya.jpg';
import certificateImg from '../../assets/certificate.jpeg';

export const About = () => {
  const achievements = [
    { year: "2018", title: "Studio Founded", description: "Divya launched her signature studio with a vision for weightless luxury makeup." },
    { year: "2020", title: "Best Bridal Artist Award", description: "Recognized as South India's Top Bridal Makeup Specialist by Vogue Beauty Guild." },
    { year: "2022", title: "Masterclasses Launched", description: "Expanded to offer professional makeup and hair styling masterclasses." },
    { year: "2024", title: "1000+ Brides Milestone", description: "Celebrated transforming over 1,000 brides across India, UAE, and Europe." },
    { year: "2026", title: "Ultra HD Airbrush Suite", description: "Pioneered medical-grade 4K skin preparation & silicone airbrushing techniques." }
  ];

  const awards = [
    { title: "Vogue Beauty Guild Award", category: "Best Luxury Bridal Artist", year: "2020" },
    { title: "International Beauty Expo", category: "Excellence in Airbrush Technique", year: "2022" },
    { title: "Times Fashion & Style Icon", category: "Master Beauty Educator", year: "2024" }
  ];

  const studioImages = [photo5, photo6, photo9, photo10];

  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-20 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'About Divya' }]} />
          
          <div className="max-w-3xl mt-6">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> Master Artist & Founder
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              The Artistry Behind Divya
            </h1>
            <p className="text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed">
              Dedicated to crafting timeless bridal transformations, weightless skin perfection, and empowering women through high-definition makeup mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Divya & Our Story */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="rounded-[32px] overflow-hidden border border-[#E9DED7] shadow-2xl aspect-[4/5] bg-[#FAF5F2]">
              <img
                src={divyaImg}
                alt="Divya Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white border border-[#E9DED7] p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
              <p className="font-cormorant text-2xl font-bold text-[#C78B74]">Divya</p>
              <p className="text-xs text-[#2B2B2B] font-jakarta font-semibold">Master Artist & Founder</p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaCrown className="text-[#D4AF37]" /> Artist Profile
            </span>
            <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-[#2B2B2B] mb-6">
              "Every Bride Deserves to Feel Like Royalty"
            </h2>
            <p className="text-sm sm:text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed mb-6">
              With over 5 years of specialized experience in international bridal beauty, Divya has transformed over 1,000 brides for high-profile weddings, destination ceremonies, and celebrity events.
            </p>
            <p className="text-sm sm:text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed mb-6">
              Trained under renowned beauty masters in London and Mumbai, Divya's signature style revolves around weightless skin prep, luminous glass skin, and precision eye definition. She believes that makeup should enhance a woman’s natural feature rather than mask them.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#E9DED7] mb-8 font-poppins text-xs">
              <div className="flex items-center gap-2 text-[#2B2B2B] font-semibold">
                <FaCheckCircle className="text-[#C78B74]" /> 100% Authentic Luxury Brands
              </div>
              <div className="flex items-center gap-2 text-[#2B2B2B] font-semibold">
                <FaCheckCircle className="text-[#C78B74]" /> Destination Travel Ready
              </div>
              <div className="flex items-center gap-2 text-[#2B2B2B] font-semibold">
                <FaCheckCircle className="text-[#C78B74]" /> Hospital Grade Sanitation
              </div>
              <div className="flex items-center gap-2 text-[#2B2B2B] font-semibold">
                <FaCheckCircle className="text-[#C78B74]" /> Personalized Skin Prep
              </div>
            </div>

            <LuxuryButton to="/book-appointment" variant="gold">
              Book a Consultation with Divya
            </LuxuryButton>
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-[28px] p-10 border border-[#E9DED7] shadow-luxury flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F7EFEA] flex items-center justify-center text-[#C78B74] text-2xl mb-6">
                <FaGem />
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B] mb-4">Our Mission</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-poppins font-light leading-relaxed">
                To deliver bespoke, long-lasting, camera-ready bridal makeovers that highlight each client's unique facial features while offering a relaxing, stress-free luxury experience on their special day.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-10 border border-[#E9DED7] shadow-luxury flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F7EFEA] flex items-center justify-center text-[#D4AF37] text-2xl mb-6">
                <FaGraduationCap />
              </div>
              <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B] mb-4">Our Vision</h3>
              <p className="text-xs sm:text-sm text-[#666666] font-poppins font-light leading-relaxed">
                To set the benchmark for luxury bridal artistry and empower aspiring beauty professionals through industry-certified hands-on education at Divya Beauty Academy.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold block mb-2">
              Our Journey
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B]">
              Milestones & Achievements
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {achievements.map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 bg-white p-6 rounded-2xl border border-[#E9DED7] shadow-sm">
                <div className="font-cormorant text-3xl font-bold text-[#C78B74] shrink-0 w-20">
                  {item.year}
                </div>
                <div>
                  <h4 className="font-cormorant text-2xl font-bold text-[#2B2B2B] mb-1">{item.title}</h4>
                  <p className="text-xs text-[#666666] font-poppins">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Showcase */}
      <section className="py-24 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto text-center">
          <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold block mb-2">
            The Studio Experience
          </span>
          <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-12">
            Our Luxury Studio Sanctuary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {studioImages.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden aspect-[4/3] border border-[#E9DED7] shadow-md group">
                <img src={img} alt="Studio interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Certificate & Accreditations */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold block mb-2">
              Certified Artistry
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-4">
              Official Master Certification & Recognition
            </h2>
            <p className="text-sm text-[#666666] font-poppins font-light">
              Internationally recognized certification & master training credential awarded to Master Artist Divya.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Certificate Image Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-[28px] overflow-hidden border-2 border-[#D4AF37]/40 shadow-2xl p-3 bg-gradient-to-br from-[#FAF5F2] via-white to-[#FAF5F2] group cursor-pointer">
                <img
                  src={certificateImg}
                  alt="Divya Official Master Certification"
                  className="w-full h-auto rounded-2xl object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 right-6 bg-[#C78B74] text-white text-[11px] font-poppins font-semibold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                  <FaCertificate /> ISO Verified Certificate
                </div>
              </div>
            </div>

            {/* Accreditations Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7]">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E9DED7] text-[#D4AF37] flex items-center justify-center text-xl shrink-0 shadow-sm">
                  <FaCertificate />
                </div>
                <div>
                  <h4 className="font-cormorant text-2xl font-bold text-[#2B2B2B] mb-1">Master Makeup Artistry Credential</h4>
                  <p className="text-xs text-[#666666] font-poppins leading-relaxed">
                    Certified in advanced HD airbrush application, medical-grade skin preparation, and luxury bridal draping.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7]">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E9DED7] text-[#C78B74] flex items-center justify-center text-xl shrink-0 shadow-sm">
                  <FaAward />
                </div>
                <div>
                  <h4 className="font-cormorant text-2xl font-bold text-[#2B2B2B] mb-1">International Standard Protocols</h4>
                  <p className="text-xs text-[#666666] font-poppins leading-relaxed">
                    Adheres strictly to 100% genuine luxury cosmetics (Dior, Charlotte Tilbury, NARS, MAC) and sanitized tool hygiene standards.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 text-center font-poppins">
                <div className="p-4 rounded-xl bg-white border border-[#E9DED7] shadow-sm">
                  <span className="font-cinzel text-3xl font-bold text-[#C78B74] block">5+</span>
                  <span className="text-[10px] text-[#1A1A1A] font-jakarta font-semibold uppercase tracking-wider">Years Exp</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E9DED7] shadow-sm">
                  <span className="font-cormorant text-3xl font-bold text-[#D4AF37] block">1000+</span>
                  <span className="text-[10px] text-[#666666] uppercase tracking-wider">Brides</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E9DED7] shadow-sm">
                  <span className="font-cormorant text-3xl font-bold text-[#C78B74] block">100%</span>
                  <span className="text-[10px] text-[#666666] uppercase tracking-wider">Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C78B74] text-white text-center">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <h2 className="font-cormorant text-4xl font-bold mb-4">Ready to Create Your Timeless Bridal Look?</h2>
          <p className="text-xs sm:text-sm font-poppins font-light mb-8 max-w-xl mx-auto">
            Book your consultation session today and let Divya design your dream transformation.
          </p>
          <LuxuryButton to="/book-appointment" variant="gold">
            Book Appointment Now
          </LuxuryButton>
        </div>
      </section>

    </div>
  );
};
