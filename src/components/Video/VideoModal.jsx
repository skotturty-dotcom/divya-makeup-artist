import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import dm_vid1 from '../../assets/dm/dm_vid1.mp4';
import img2 from '../../assets/media/img2.jpeg';

export const VideoModalBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* Luxury Video Section Banner */}
      <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 min-h-[420px] flex items-center justify-center p-8 text-center text-white my-16 group">
        
        {/* Video Thumbnail Background Cover Photo */}
        <img
          src={img2}
          alt="Divya Royal Bridal Transformation Cover"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/85" />

        {/* Content Container */}
        <div className="relative z-10 max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-[3px] text-[#D4AF37] font-jakarta font-semibold inline-flex items-center gap-1.5 mb-3 bg-black/50 backdrop-blur-md px-4.5 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-md">
            <FaSparkles /> Cinematic Showcase
          </span>
          <h3 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-white">
            Witness the Magic Behind Timeless Bridal Artistry
          </h3>
          <p className="text-sm md:text-base text-white/90 font-jakarta font-medium leading-relaxed mb-8 max-w-xl">
            Experience our backstage transformation film showcasing Divya's signature airbrush application, hair sculpting, and royal bridal drape.
          </p>

          {/* Animated Play Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsVideoOpen(true)}
            aria-label="Play video"
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C78B74] text-white flex items-center justify-center shadow-2xl shadow-[#D4AF37]/50 border-4 border-white/40 cursor-pointer relative group/play"
          >
            <span className="absolute inset-0 rounded-full bg-[#D4AF37] animate-ping opacity-30" />
            <FaPlay className="text-2xl translate-x-0.5" />
          </motion.button>
        </div>
      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative bg-black rounded-[24px] overflow-hidden max-w-4xl w-full aspect-video z-50 shadow-2xl border border-[#D4AF37]/40 flex items-center justify-center"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video"
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-[#C78B74] text-white flex items-center justify-center transition-colors border border-white/30 cursor-pointer"
              >
                <FaTimes className="text-lg" />
              </button>

              <video
                src={dm_vid1}
                controls
                autoPlay
                className="w-full h-full max-h-[80vh] object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
