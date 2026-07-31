import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { HiSparkles as FaSparkles } from 'react-icons/hi2';
import { LuxuryButton } from '../../components/Buttons/LuxuryButton';

export const NotFound = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#FAF5F2] text-center px-4">
      <div className="max-w-lg mx-auto bg-white p-12 rounded-[32px] border border-[#E9DED7] shadow-2xl space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#F7EFEA] text-[#C78B74] flex items-center justify-center mx-auto text-3xl">
          <FaSparkles />
        </div>

        <h1 className="font-cormorant text-6xl font-bold text-[#C78B74]">404</h1>
        <h2 className="font-cormorant text-3xl font-bold text-[#2B2B2B]">Page Not Found</h2>
        
        <p className="text-xs text-[#666666] font-poppins font-light leading-relaxed">
          The luxury page you are looking for might have been moved or doesn't exist.
        </p>

        <LuxuryButton to="/" variant="gold" icon={<FaHome />}>
          Return to Home Page
        </LuxuryButton>
      </div>
    </div>
  );
};
