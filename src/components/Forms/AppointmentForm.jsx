import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaEnvelope, FaClock, FaCommentDots } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { servicesData } from '../../data/servicesData';
import { packagesData } from '../../data/packagesData';
import { LuxuryButton } from '../Buttons/LuxuryButton';
import { SuccessModal } from './SuccessModal';

export const AppointmentForm = ({ preselectedService = "", preselectedPackage = "", preselectedCourse = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      service: preselectedService || preselectedPackage || preselectedCourse || "Signature Bridal Makeup",
      date: new Date().toISOString().split('T')[0],
      time: "10:00 AM"
    }
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

    // Simulate EmailJS API or Backend dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(data);
      setShowSuccessModal(true);
      reset();
    }, 1200);
  };

  return (
    <>
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="bg-white rounded-[32px] p-8 md:p-12 border border-[#E9DED7] shadow-2xl space-y-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#C78B74]/5 rounded-bl-full pointer-events-none" />

        <div className="text-center max-w-lg mx-auto mb-8">
          <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-2">
            <FaSparkles /> VIP Booking Concierge
          </span>
          <h3 className="font-cormorant text-3xl md:text-4xl font-bold text-[#2B2B2B]">
            Reserve Your Transformation
          </h3>
          <p className="text-xs text-[#666666] font-poppins mt-2">
            Select your service date and details. We will reserve your artist slot immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaUser className="text-[#C78B74]" /> Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Ananya Sharma"
              {...register('name', { required: 'Full name is required' })}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all"
            />
            {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-[#C78B74]" /> Phone / WhatsApp *
            </label>
            <input
              type="tel"
              placeholder="+91 93818 24540"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Invalid phone number format' }
              })}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all"
            />
            {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaEnvelope className="text-[#C78B74]" /> Email Address *
            </label>
            <input
              type="email"
              placeholder="divyakumarirockz@gmail.com"
              {...register('email', { required: 'Email address is required' })}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all"
            />
            {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
          </div>

          {/* Choose Service / Package */}
          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaSparkles className="text-[#C78B74]" /> Select Service / Package *
            </label>
            <select
              {...register('service', { required: 'Please select a service' })}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all cursor-pointer"
            >
              <optgroup label="Bridal Packages">
                {packagesData.map((pkg) => (
                  <option key={pkg.id} value={pkg.name}>{pkg.name}</option>
                ))}
              </optgroup>
              <optgroup label="Individual Services">
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>{svc.title}</option>
                ))}
              </optgroup>
            </select>
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaCalendarAlt className="text-[#C78B74]" /> Preferred Event Date *
            </label>
            <input
              type="date"
              {...register('date', { required: 'Event date is required' })}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all"
            />
          </div>

          {/* Preferred Time Slot */}
          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaClock className="text-[#C78B74]" /> Preferred Time Slot
            </label>
            <select
              {...register('time')}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all cursor-pointer"
            >
              <option value="Morning (06:00 AM - 11:00 AM)">Early Morning (06:00 AM - 11:00 AM)</option>
              <option value="Afternoon (11:00 AM - 03:00 PM)">Afternoon (11:00 AM - 03:00 PM)</option>
              <option value="Evening (03:00 PM - 08:00 PM)">Evening (03:00 PM - 08:00 PM)</option>
            </select>
          </div>

        </div>

        {/* Special Request / Notes */}
        <div>
          <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
            <FaCommentDots className="text-[#C78B74]" /> Special Requests / Event Venue Location
          </label>
          <textarea
            rows="3"
            placeholder="Tell us about your wedding venue, attire color, or specific skin sensitivities..."
            {...register('notes')}
            className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all resize-none"
          />
        </div>

        <div className="pt-4 text-center">
          <LuxuryButton
            type="submit"
            variant="gold"
            size="lg"
            className="w-full md:w-auto min-w-[280px]"
          >
            {isSubmitting ? 'Confirming Reservation...' : 'Confirm Appointment Reservation'}
          </LuxuryButton>
        </div>
      </form>

      {/* Confirmation Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        details={submittedData}
      />
    </>
  );
};
