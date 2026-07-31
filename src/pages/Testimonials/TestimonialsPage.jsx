import React from 'react';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { TestimonialsSlider } from '../../components/Testimonials/TestimonialsSlider';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';
import { FaHeart, FaStar, FaGoogle, FaCheckCircle } from 'react-icons/fa';
import { testimonialsData, googleRatingStats } from '../../data/testimonialsData';

export const TestimonialsPage = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'Testimonials' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaHeart className="text-[#C78B74]" /> Verified Love
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              Client Reviews & Love Notes
            </h1>
            <p className="text-sm sm:text-base text-[#666666] font-poppins font-light leading-relaxed">
              Read real stories and experiences from brides, family members, and academy students who experienced our signature luxury transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reviews Grid */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <TestimonialsSlider />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonialsData.map((item) => (
              <div key={item.id} className="bg-[#FAF5F2] p-8 rounded-[28px] border border-[#E9DED7] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-[#D4AF37] text-sm">
                      {[...Array(item.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <span className="text-[11px] font-poppins text-[#4CAF50] font-semibold flex items-center gap-1">
                      <FaCheckCircle /> Verified Google Review
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] font-poppins italic leading-relaxed mb-6 font-light">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#E9DED7] mt-auto">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#C78B74]" />
                  <div>
                    <h4 className="font-cormorant text-xl font-bold text-[#2B2B2B]">{item.name}</h4>
                    <p className="text-[11px] text-[#666666] font-poppins">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2B2B2B] text-white text-center">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <h2 className="font-cormorant text-4xl font-bold mb-4">Ready to Create Your Own Unforgettable Story?</h2>
          <p className="text-xs sm:text-sm font-poppins text-white/70 mb-8 max-w-xl mx-auto">
            Book your appointment now and let us craft a flawless makeover for your upcoming event.
          </p>
          <LuxuryButton to="/book-appointment" variant="gold">
            Book Appointment Now
          </LuxuryButton>
        </div>
      </section>

    </div>
  );
};
