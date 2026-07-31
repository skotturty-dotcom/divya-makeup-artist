import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaGoogle } from 'react-icons/fa';
import { testimonialsData, googleRatingStats } from '../../data/testimonialsData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const TestimonialsSlider = () => {
  return (
    <div className="w-full">
      {/* Header Rating Badge */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-[24px] border border-[#E9DED7] shadow-luxury mb-12">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] flex items-center justify-center text-[#4285F4]">
            <FaGoogle className="text-2xl" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-cormorant text-3xl font-bold text-[#2B2B2B]">{googleRatingStats.average}</span>
              <div className="flex text-[#D4AF37] text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
            <p className="text-xs text-[#666666] font-poppins">
              Based on {googleRatingStats.totalReviews} verified Google Client Reviews
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-poppins text-[#4CAF50] font-semibold bg-[#4CAF50]/10 px-4 py-2 rounded-full border border-[#4CAF50]/20">
          <FaCheckCircle /> 100% Certified Authentic Reviews
        </div>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 }
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="pb-16"
      >
        {testimonialsData.map((item) => (
          <SwiperSlide key={item.id} className="h-full">
            <div className="bg-white rounded-[24px] p-8 border border-[#E9DED7] shadow-luxury shadow-luxury-hover flex flex-col justify-between h-full min-h-[300px] relative group">
              <FaQuoteLeft className="text-4xl text-[#F7EFEA] group-hover:text-[#C78B74]/20 transition-colors absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex text-[#D4AF37] text-sm mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-xs md:text-sm text-[#2B2B2B] font-poppins leading-relaxed font-light mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E9DED7]/60 mt-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C78B74]"
                />
                <div>
                  <h4 className="font-cormorant text-xl font-bold text-[#2B2B2B] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#666666] font-poppins">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
