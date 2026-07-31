import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { statisticsData } from '../../data/whyUsData';

const CounterItem = ({ count, suffix, label, icon, decimal }) => {
  const [currentCount, setCurrentCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = count;
    const duration = 2000; // ms
    const incrementTime = 30;
    const steps = duration / incrementTime;
    const stepValue = (end - start) / steps;

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setCurrentCount(end);
        clearInterval(timer);
      } else {
        setCurrentCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, count]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6 rounded-[24px] bg-white/60 backdrop-blur-md border border-[#E9DED7] shadow-luxury">
      <span className="text-3xl mb-2">{icon}</span>
      <div className="font-cormorant text-4xl lg:text-5xl font-bold text-[#C78B74] mb-1">
        {decimal ? currentCount.toFixed(1) : Math.floor(currentCount)}
        <span>{suffix}</span>
      </div>
      <p className="text-xs uppercase tracking-[2px] font-poppins font-medium text-[#2B2B2B]">
        {label}
      </p>
    </div>
  );
};

export const CounterSection = () => {
  return (
    <section className="py-16 bg-[#FAF5F2] border-y border-[#E9DED7]">
      <div className="max-w-[1280px] w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {statisticsData.map((stat, idx) => (
          <CounterItem key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};
