import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaCalendarCheck, FaWhatsapp, FaTimes } from 'react-icons/fa';
import { LuxuryButton } from '../Buttons/LuxuryButton';

export const SuccessModal = ({ isOpen, onClose, details = {} }) => {
  if (!isOpen) return null;

  const whatsappText = encodeURIComponent(
    `Hi Divya, I just placed an appointment request on your website!\nName: ${details.name || ''}\nService: ${details.service || ''}\nDate: ${details.date || ''}`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative bg-white text-[#2B2B2B] rounded-[32px] p-8 md:p-10 max-w-lg w-full z-50 shadow-2xl border border-[#E9DED7] text-center"
        >
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FAF5F2] text-[#2B2B2B]"
          >
            <FaTimes className="text-lg" />
          </button>

          <div className="w-20 h-20 rounded-full bg-[#4CAF50]/15 text-[#4CAF50] flex items-center justify-center mx-auto mb-6 border border-[#4CAF50]/30 shadow-inner">
            <FaCheckCircle className="text-4xl" />
          </div>

          <span className="text-xs uppercase tracking-[3px] text-[#C78B74] font-poppins font-semibold block mb-1">
            Appointment Requested
          </span>

          <h3 className="font-cormorant text-3xl md:text-4xl font-bold text-[#2B2B2B] mb-3">
            Thank You, {details.name || 'Valued Guest'}!
          </h3>

          <p className="text-xs md:text-sm text-[#666666] font-poppins leading-relaxed mb-6 font-light">
            Your appointment request has been received. Our team will review your requested date and reach out to confirm your slot within 2 hours.
          </p>

          {/* Details Summary Card */}
          <div className="bg-[#FAF5F2] rounded-2xl p-5 border border-[#E9DED7] text-left text-xs font-poppins space-y-2 mb-8">
            <div className="flex items-center justify-between border-b border-[#E9DED7]/60 pb-2">
              <span className="text-[#666666]">Requested Service:</span>
              <span className="font-semibold text-[#2B2B2B]">{details.service || 'Bridal Makeover'}</span>
            </div>
            <div className="flex items-center justify-between border-b border-[#E9DED7]/60 pb-2">
              <span className="text-[#666666]">Preferred Date:</span>
              <span className="font-semibold text-[#2B2B2B]">{details.date || 'To be confirmed'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#666666]">Contact Number:</span>
              <span className="font-semibold text-[#2B2B2B]">{details.phone || 'N/A'}</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`https://wa.me/919381824540?text=${whatsappText}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-6 rounded-full font-poppins font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20 transition-transform active:scale-95"
            >
              <FaWhatsapp className="text-lg" /> Fast-Track Confirmation via WhatsApp
            </a>

            <LuxuryButton variant="secondary" onClick={onClose} className="w-full">
              Back to Website
            </LuxuryButton>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
