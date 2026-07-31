import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExpandAlt, FaPlay } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { galleryCategories, galleryItems } from '../../data/galleryData';
import { LightboxModal } from './LightboxModal';
import { LuxuryButton } from '../Buttons/LuxuryButton';

export const MasonryGallery = ({ limit = 0, showFilters = true }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleCount, setVisibleCount] = useState(limit || 8);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="w-full">
      
      {/* Category Filter Pills */}
      {showFilters && (
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(8);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-poppins font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#C78B74] text-white shadow-lg shadow-[#C78B74]/25 scale-105'
                  : 'bg-white text-[#666666] border border-[#E9DED7] hover:border-[#C78B74] hover:text-[#C78B74]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence>
          {displayedItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-[24px] overflow-hidden bg-[#FAF5F2] border border-[#E9DED7] shadow-luxury shadow-luxury-hover aspect-[4/5] cursor-pointer"
            >
              {item.video ? (
                <video
                  src={item.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              )}

              {/* Hover Dark Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-white">
                <span className="self-start text-[11px] font-poppins uppercase tracking-widest bg-[#C78B74] text-white px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>

                <div>
                  <h4 className="font-cormorant text-2xl font-bold mb-1 leading-snug">
                    {item.title}
                  </h4>
                  {item.client && (
                    <p className="text-xs text-white/80 font-poppins mb-3 font-light">
                      {item.client} • {item.location}
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 text-xs font-poppins font-medium text-[#D4AF37]">
                    {item.videoUrl || item.video ? (
                      <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white">
                        <FaPlay className="text-xs" /> Watch Video
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-white">
                        <FaExpandAlt className="text-xs" /> Zoom Photo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button */}
      {visibleCount < filteredItems.length && (
        <div className="mt-12 text-center">
          <LuxuryButton 
            variant="secondary" 
            onClick={() => setVisibleCount(prev => prev + 4)}
          >
            Load More Photos & Videos
          </LuxuryButton>
        </div>
      )}

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </div>
  );
};
