import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaCalendarAlt } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { LuxuryButton } from '../Buttons/LuxuryButton';
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
        className="bg-white rounded-[32px] p-8 md:p-10 border border-[#E9DED7] shadow-2xl space-y-5"
      >
        <div className="mb-6">
          <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-2">
            <FaSparkles /> Get In Touch
          </span>
          <h3 className="font-cormorant text-3xl font-bold text-[#2B2B2B]">
            Send Us a Message
          </h3>
          <p className="text-xs text-[#666666] font-poppins mt-1">
            Have questions regarding custom packages, academy batches, or dates? Drop us a line.
          </p>
        </div>

        <div>
          <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
            <FaUser className="text-[#C78B74]" /> Name *
          </label>
          <input
            type="text"
            placeholder="Your full name"
            {...register('name', { required: 'Name is required' })}
            className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all"
          />
          {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaEnvelope className="text-[#C78B74]" /> Email Address *
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register('email', { 
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
              })}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all placeholder:text-[#999999]"
            />
            {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaPhoneAlt className="text-[#C78B74]" /> Phone Number *
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register('phone', { required: 'Phone is required' })}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all placeholder:text-[#999999]"
            />
            {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaSparkles className="text-[#C78B74]" /> Inquiry Category
            </label>
            <select
              {...register('service')}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all cursor-pointer"
            >
              <option value="Bridal Makeover Inquiry">Bridal Makeover Inquiry</option>
              <option value="Destination Wedding Travel">Destination Wedding Travel</option>
              <option value="Skin Care & Facial Appointment">Skin Care & Facial Appointment</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
              <FaCalendarAlt className="text-[#C78B74]" /> Tentative Date
            </label>
            <input
              type="date"
              {...register('date')}
              className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-poppins font-semibold uppercase tracking-wider text-[#2B2B2B] mb-2 flex items-center gap-2">
            <FaCommentDots className="text-[#C78B74]" /> Your Message *
          </label>
          <textarea
            rows="4"
            placeholder="Tell us how we can make your special day extraordinary..."
            {...register('message', { required: 'Message is required' })}
            className="w-full px-5 py-3.5 rounded-2xl bg-[#FAF5F2] border border-[#E9DED7] text-sm text-[#2B2B2B] font-poppins focus:outline-none focus:border-[#C78B74] focus:bg-white transition-all resize-none"
          />
          {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
        </div>

        <LuxuryButton type="submit" variant="primary" className="w-full">
          {isSubmitting ? 'Sending Message...' : 'Send Message Now'}
        </LuxuryButton>
      </form>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        details={submittedData}
      />
    </>
  );
};
