import React from 'react';
import Marquee from "react-fast-marquee";


const HightlightFeature = () => {
  return (
    <div className="overflow-hidden bg-[#f9f9f9] py-6 md:py-10 border-b border-gray-200">
      
      <Marquee 
        autoFill={true} 
        pauseOnHover={true} 
        speed={70} 
        gradient={false}
      >
        <span className="mx-6 md:mx-12 font-semibold tracking-wide uppercase text-black">
          Weekly Feature: Modern Geometric Patterns
        </span>
        <span className="text-gray-400">→</span>
        
        <span className="mx-6 md:mx-12 font-semibold tracking-wide uppercase text-black">
          New Arrivals: Cobalt Blue Ceramic
        </span>
        <span className="text-gray-400">→</span>
        
        <span className="mx-6 md:mx-12 font-semibold tracking-wide uppercase text-black">
          Join the Community
        </span>
        <span className="text-gray-400">→</span>
      </Marquee>
    </div>
  );
};

export default HightlightFeature;