import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaEnvelope, FaClock, FaCommentDots, FaCalendarCheck } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { servicesData } from '../../data/servicesData';
import { packagesData } from '../../data/packagesData';
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
      time: "Morning (06:00 AM - 11:00 AM)"
    }
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

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
        className="bg-gradient-to-br from-white via-[#FFFDF9] to-[#FAF5F2] rounded-[32px] p-8 md:p-12 border-2 border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/15 space-y-6 relative overflow-hidden"
      >
        {/* Top Metallic Gold Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#C78B74] to-[#D4AF37]" />

        {/* Header Title */}
        <div className="text-center max-w-lg mx-auto mb-8 pt-2">
          <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2 bg-[#FAF5F2] px-4 py-1.5 rounded-full border border-[#E9DED7]">
            <FaSparkles className="text-[#D4AF37]" /> VIP Booking Concierge
          </span>
          <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-[#1A1A1A] mt-2">
            Reserve Your Transformation
          </h3>
          <p className="text-sm text-[#1A1A1A] font-jakarta font-medium mt-2 leading-relaxed">
            Select your service date and details. We will reserve your artist slot immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Full Name */}
          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaUser className="text-[#C78B74]" /> Full Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Ananya Sharma"
              {...register('name', { required: 'Full name is required' })}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm"
            />
            {errors.name && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.name.message}</span>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-[#C78B74]" /> Phone / WhatsApp *
            </label>
            <input
              type="tel"
              placeholder="+91 93818 24540"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Invalid phone number format' }
              })}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm"
            />
            {errors.phone && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.phone.message}</span>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaEnvelope className="text-[#C78B74]" /> Email Address *
            </label>
            <input
              type="email"
              placeholder="divyakumarirockz@gmail.com"
              {...register('email', { required: 'Email address is required' })}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm"
            />
            {errors.email && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.email.message}</span>}
          </div>

          {/* Choose Service / Package */}
          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaSparkles className="text-[#C78B74]" /> Select Service / Package *
            </label>
            <select
              {...register('service', { required: 'Please select a service' })}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm cursor-pointer"
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
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaCalendarAlt className="text-[#C78B74]" /> Preferred Event Date *
            </label>
            <input
              type="date"
              {...register('date', { required: 'Event date is required' })}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm"
            />
          </div>

          {/* Preferred Time Slot */}
          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaClock className="text-[#C78B74]" /> Preferred Time Slot
            </label>
            <select
              {...register('time')}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm cursor-pointer"
            >
              <option value="Morning (06:00 AM - 11:00 AM)">Early Morning (06:00 AM - 11:00 AM)</option>
              <option value="Afternoon (11:00 AM - 03:00 PM)">Afternoon (11:00 AM - 03:00 PM)</option>
              <option value="Evening (03:00 PM - 08:00 PM)">Evening (03:00 PM - 08:00 PM)</option>
            </select>
          </div>

        </div>

        {/* Special Request / Notes */}
        <div>
          <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
            <FaCommentDots className="text-[#C78B74]" /> Special Requests / Event Venue Location
          </label>
          <textarea
            rows="3"
            placeholder="Tell us about your wedding venue, attire color, or specific skin sensitivities..."
            {...register('notes')}
            className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-medium focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all resize-none shadow-sm"
          />
        </div>

        {/* High-Contrast Full Width Metallic Gold Button */}
        <div className="pt-4 text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4.5 px-8 bg-gradient-to-r from-[#D4AF37] via-[#C78B74] to-[#D4AF37] text-white font-cinzel font-bold text-base uppercase tracking-wider rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <FaCalendarCheck className="text-lg" />
            <span>{isSubmitting ? 'Confirming Reservation...' : 'Confirm Appointment Reservation'}</span>
          </button>
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
