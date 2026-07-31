import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaCalendarAlt, FaPaperPlane } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { SuccessModal } from './SuccessModal';

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData(data);
      setShowSuccessModal(true);
      reset();
    }, 1000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gradient-to-br from-white via-[#FFFDF9] to-[#FAF5F2] rounded-[32px] p-8 md:p-10 border-2 border-[#D4AF37]/30 shadow-2xl shadow-[#D4AF37]/15 space-y-6 relative overflow-hidden"
      >
        {/* Top Metallic Gold Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#D4AF37] via-[#C78B74] to-[#D4AF37]" />

        {/* Section Header */}
        <div className="mb-6 pt-2">
          <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-2 bg-[#FAF5F2] px-4 py-1.5 rounded-full border border-[#E9DED7]">
            <FaSparkles className="text-[#D4AF37]" /> Get In Touch
          </span>
          <h3 className="font-cinzel text-3xl font-bold text-[#1A1A1A] mt-2">
            Send Us a Message
          </h3>
          <p className="text-sm text-[#1A1A1A] font-jakarta font-medium mt-2 leading-relaxed">
            Have questions regarding custom packages, academy batches, or dates? Drop us a line.
          </p>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
            <FaUser className="text-[#C78B74]" /> Name *
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm placeholder:text-[#999999] placeholder:font-normal"
          />
          {errors.name && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.name.message}</span>}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaEnvelope className="text-[#C78B74]" /> Email Address *
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
              })}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm placeholder:text-[#999999] placeholder:font-normal"
            />
            {errors.email && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-[#C78B74]" /> Phone Number *
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register('phone', { required: 'Phone is required' })}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm placeholder:text-[#999999] placeholder:font-normal"
            />
            {errors.phone && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.phone.message}</span>}
          </div>
        </div>

        {/* Category & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaSparkles className="text-[#C78B74]" /> Inquiry Category
            </label>
            <select
              {...register('service')}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm cursor-pointer"
            >
              <option value="Bridal Makeover Inquiry">Bridal Makeover Inquiry</option>
              <option value="Destination Wedding Travel">Destination Wedding Travel</option>
              <option value="Skin Care & Facial Appointment">Skin Care & Facial Appointment</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
              <FaCalendarAlt className="text-[#C78B74]" /> Tentative Date
            </label>
            <input
              type="date"
              {...register('date')}
              className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-semibold focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-jakarta font-bold uppercase tracking-wider text-[#1A1A1A] mb-2 flex items-center gap-2">
            <FaCommentDots className="text-[#C78B74]" /> Your Message *
          </label>
          <textarea
            rows="4"
            placeholder="Tell us how we can make your special day extraordinary..."
            {...register('message', { required: 'Message is required' })}
            className="w-full px-5 py-4 rounded-2xl bg-white border-2 border-[#E9DED7] text-sm text-[#1A1A1A] font-jakarta font-medium focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/15 transition-all resize-none shadow-sm placeholder:text-[#999999] placeholder:font-normal"
          />
          {errors.message && <span className="text-xs text-red-500 mt-1 block font-medium">{errors.message.message}</span>}
        </div>

        {/* Full-width Gold Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4.5 px-8 bg-gradient-to-r from-[#D4AF37] via-[#C78B74] to-[#D4AF37] text-white font-cinzel font-bold text-base uppercase tracking-wider rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <FaPaperPlane className="text-lg" />
            <span>{isSubmitting ? 'Sending Message...' : 'Send Message Now'}</span>
          </button>
        </div>
      </form>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        details={submittedData}
      />
    </>
  );
};
