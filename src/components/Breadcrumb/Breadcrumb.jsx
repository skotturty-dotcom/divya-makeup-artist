import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaHome } from 'react-icons/fa';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-2 text-xs font-poppins text-[#666666]">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-[#C78B74] transition-colors">
            <FaHome className="text-[#C78B74]" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-2">
              <FaChevronRight className="text-[10px] text-[#C78B74]/60" />
              {isLast ? (
                <span className="font-semibold text-[#2B2B2B]">{item.label}</span>
              ) : (
                <Link to={item.path} className="hover:text-[#C78B74] transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
