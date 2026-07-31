import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { AppointmentForm } from '../../components/Forms/AppointmentForm';
import { FaShieldAlt, FaStar, FaClock } from 'react-icons/fa';
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
            <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-3">
              <FaSparkles /> VIP Concierge Booking
            </span>
            <h1 className="font-cormorant text-4xl sm:text-6xl font-bold text-[#2B2B2B] mb-4">
              Book Your Appointment
            </h1>
            <p className="text-sm sm:text-base text-[#666666] font-poppins font-light leading-relaxed">
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
            
            <div className="bg-[#FAF5F2] p-8 rounded-[28px] border border-[#E9DED7] shadow-luxury space-y-6">
              <div className="flex items-center gap-3 text-[#C78B74]">
                <FaShieldAlt className="text-3xl" />
                <div>
                  <h4 className="font-cormorant text-2xl font-bold text-[#2B2B2B]">Divya Guarantee</h4>
                  <p className="text-[11px] text-[#666666] font-poppins">Zero Hidden Charges</p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-poppins text-[#666666]">
                <div className="flex items-start gap-2.5">
                  <FaStar className="text-[#D4AF37] mt-0.5 shrink-0" />
                  <span>100% Genuine luxury cosmetic products (Dior, Charlotte Tilbury, NARS).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FaClock className="text-[#C78B74] mt-0.5 shrink-0" />
                  <span>Punctual artist arrival guaranteed for morning callouts.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <FaSparkles className="text-[#C78B74] mt-0.5 shrink-0" />
                  <span>Personalized skin prep and trial discussion included.</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9DED7] text-center">
                <p className="text-xs font-poppins text-[#666666]">Need immediate assistance?</p>
                <a href="tel:+919381824540" className="font-cormorant text-xl font-bold text-[#C78B74] hover:underline">
                  +91 93818 24540
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
