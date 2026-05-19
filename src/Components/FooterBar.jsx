import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaPinterestP, FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';

const FooterBar = () => {
  return (
    <div className="bg-[#141311] text-gray-300 py-16 md:py-20 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        
        <div className="max-w-md">
          
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/navicon2.png"
              alt="Terrenn Interiors"
              width={200}
              height={65}
              className="w-40 md:w-48 h-auto object-contain hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
          
          <p className="text-gray-400 leading-relaxed mb-8 text-justify">
            Curating premium artisan tiles from studios worldwide. Quality you can feel underfoot. Elevating everyday spaces with modern geometric patterns and rustic textures.
          </p>

          
          <div>
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">
              Contact Us
            </h3>
            <p>hello@terrenn.com</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
        
        <p className="text-sm text-gray-500">
          © 2026 Terrenn Interior. All rights reserved.
        </p>

        
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-pink-400 transition-all duration-300">
            <FaInstagram size={18} />
          </a>
          
          <a className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-400 transition-all duration-300">
            <FaPinterestP size={18} />
          </a>
          
          <a className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-all duration-300">
            <FaXTwitter size={18} />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default FooterBar;