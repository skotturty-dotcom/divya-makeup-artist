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
                <p className="text-sm md:text-base text-[#1A1A1A] font-jakarta leading-relaxed font-medium mb-6 italic">
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
                  <h4 className="font-cinzel text-lg font-bold text-[#1A1A1A] leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#1A1A1A] font-jakarta font-semibold">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
