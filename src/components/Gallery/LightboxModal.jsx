import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';

export const LightboxModal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md z-40"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative bg-[#1A1A1A] text-white rounded-[24px] overflow-hidden max-w-4xl w-full z-50 shadow-2xl border border-[#D4AF37]/30 flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#C78B74] text-white flex items-center justify-center transition-colors border border-white/20"
          >
            <FaTimes className="text-lg" />
          </button>

          {/* Media View */}
          <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden min-h-[300px]">
            {item.video ? (
              <video
                src={item.video}
                controls
                autoPlay
                className="w-full h-full max-h-[75vh] object-contain"
              />
            ) : item.videoUrl ? (
              <iframe
                src={item.videoUrl}
                title={item.title}
                className="w-full h-full min-h-[350px]"
                allowFullScreen
              />
            ) : (
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            )}
          </div>

          {/* Details Sidebar */}
          <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-[#222222]">
            <div>
              <span className="text-xs uppercase tracking-[2px] text-[#C78B74] font-poppins font-semibold inline-flex items-center gap-1.5 mb-2">
                <FaSparkles /> {item.category}
              </span>
              <h3 className="font-cormorant text-3xl font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-xs text-white/70 font-poppins leading-relaxed mb-6 font-light">
                {item.description}
              </p>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-poppins">
                {item.client && (
                  <div className="flex items-center gap-2 text-white/80">
                    <FaUser className="text-[#C78B74]" />
                    <span>Client: <strong className="text-white">{item.client}</strong></span>
                  </div>
                )}
                {item.location && (
                  <div className="flex items-center gap-2 text-white/80">
                    <FaMapMarkerAlt className="text-[#C78B74]" />
                    <span>Location: <strong className="text-white">{item.location}</strong></span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider text-white/40 font-poppins">
                Divya Portfolio
              </span>
              <button
                onClick={onClose}
                className="text-xs text-[#C78B74] hover:text-[#D4AF37] font-semibold font-poppins"
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </AnimatePresence>
  );
};
