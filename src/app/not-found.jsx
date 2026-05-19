import React from 'react';
import Link from 'next/link';

export const ErrorLayout = () => {
  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center px-6 text-center bg-[#fcfcfc]">
      
      
      <div className="mb-6 tracking-[0.2em] text-xs font-bold text-gray-400 uppercase">
        Error 404
      </div>

      
      <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tighter mb-6">
        Collection Not Found.
      </h1>

      
      <p className="text-gray-500 max-w-md mx-auto text-base md:text-lg leading-relaxed mb-12">
        The tile or gallery page you are looking for does not exist, has been moved, or is currently unavailable in our catalog.
      </p>

      
      <Link
        href="/"
        className="text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors uppercase tracking-widest"
      >
        Return to Home
      </Link>
      
    </div>
  );
};

export default ErrorLayout;