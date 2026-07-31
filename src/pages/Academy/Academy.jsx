import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCheckCircle, FaStar } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { CourseCard } from '../../components/Cards/CourseCard';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';
import { academyCourses, studentReviews } from '../../data/academyData';

export const Academy = () => {
  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'Beauty Academy' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaGraduationCap className="text-[#D4AF37]" /> Divya Beauty Academy
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              Master Professional Makeup & Hair Artistry
            </h1>
            <p className="text-sm sm:text-base text-[#666666] font-poppins font-light leading-relaxed">
              Launch your career in high-end bridal makeup. Learn ISO-certified techniques, airbrush equipment handling, client management, and portfolio building directly from Master Divya.
            </p>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-2">
              <FaSparkles /> ISO Certified Programs
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B] mb-4">
              Available Courses & Masterclasses
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] font-poppins font-light">
              Small batch sizes ensuring individual attention and 100% practical training on live models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academyCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews & Testimonials */}
      <section className="py-24 bg-[#FAF5F2] border-y border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold block mb-2">
              Student Success Stories
            </span>
            <h2 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#2B2B2B]">
              Graduates Feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentReviews.map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[28px] border border-[#E9DED7] shadow-luxury flex flex-col justify-between">
                <div>
                  <div className="flex text-[#D4AF37] text-sm mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] font-poppins italic leading-relaxed mb-6 font-light">
                    "{review.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-[#E9DED7] mt-auto">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#C78B74]" />
                  <div>
                    <h4 className="font-cormorant text-xl font-bold text-[#2B2B2B]">{review.name}</h4>
                    <p className="text-[11px] text-[#C78B74] font-poppins font-medium">{review.course} ({review.batch})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C78B74] text-white text-center">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <h2 className="font-cormorant text-4xl font-bold mb-4">Ready to Become a Certified Makeup Artist?</h2>
          <p className="text-xs sm:text-sm font-poppins font-light mb-8 max-w-xl mx-auto">
            Limited seats available for upcoming monthly batches. Enroll today or request a syllabus counselor call.
          </p>
          <LuxuryButton to="/contact" variant="gold">
            Request Academy Prospectus
          </LuxuryButton>
        </div>
      </section>

    </div>
  );
};
