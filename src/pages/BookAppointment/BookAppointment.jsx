import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { AppointmentForm } from '../../components/Forms/AppointmentForm';
import { FaShieldAlt, FaStar, FaClock, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';

export const BookAppointment = () => {
  const [searchParams] = useSearchParams();
  const preService = searchParams.get('service');
  const prePackage = searchParams.get('package');
  const preCourse = searchParams.get('course');

  return (
    <div className="pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#FAF5F2] py-16 border-b border-[#E9DED7]">
        <div className="max-w-[1280px] w-[90%] mx-auto">
          <Breadcrumb items={[{ label: 'Book Appointment' }]} />
          
          <div className="max-w-3xl mt-4">
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> VIP Concierge Booking
            </span>
            <h1 className="font-cinzel text-4xl sm:text-6xl font-bold text-[#1A1A1A] mb-4">
              Book Your Appointment
            </h1>
            <p className="text-base text-[#1A1A1A] font-jakarta font-medium leading-relaxed">
              Reserve your wedding, reception, or party makeover slot with Divya. Quick confirmation & venue setup support.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Container */}
      <section className="py-24 bg-[#FFFDFC]">
        <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-8">
            <AppointmentForm 
              preselectedService={preService}
              preselectedPackage={prePackage}
              preselectedCourse={preCourse}
            />
          </div>

          {/* Sidebar Guarantee Card */}
          <div className="lg:col-span-4 space-y-6 sticky top-28">
            
            <div className="bg-gradient-to-br from-[#1A1A1A] via-[#2B2B2B] to-[#1A1A1A] text-white p-8 rounded-[32px] border-2 border-[#D4AF37]/40 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white flex items-center justify-center text-2xl shadow-md shrink-0">
                  <FaShieldAlt />
                </div>
                <div>
                  <h4 className="font-cinzel text-2xl font-bold text-white">Divya Guarantee</h4>
                  <p className="text-xs text-[#D4AF37] font-jakarta font-semibold uppercase tracking-wider">Zero Hidden Charges</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm font-jakarta text-white/90">
                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                  <FaCheckCircle className="text-[#D4AF37] text-base mt-0.5 shrink-0" />
                  <span><strong>100% Genuine Luxury Cosmetics</strong> (Dior, Charlotte Tilbury, NARS, MAC).</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                  <FaClock className="text-[#C78B74] text-base mt-0.5 shrink-0" />
                  <span><strong>Punctual Artist Guarantee</strong> for morning pheras and callouts.</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                  <FaSparkles className="text-[#D4AF37] text-base mt-0.5 shrink-0" />
                  <span><strong>Personalized Skin Prep</strong> and trial discussion included.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 text-center">
                <p className="text-xs font-jakarta text-white/70 mb-2">Need immediate booking assistance?</p>
                <a 
                  href="tel:+919381824540" 
                  className="inline-flex items-center justify-center gap-2 font-cinzel text-lg font-bold text-[#D4AF37] hover:text-white bg-white/10 py-3 px-6 rounded-2xl border border-[#D4AF37]/40 w-full transition-all"
                >
                  <FaPhoneAlt /> +91 93818 24540
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
