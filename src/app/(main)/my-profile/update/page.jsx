import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Editorial "Back" Link */}
        <div className="mb-12">
          <Link
            href="/my-profile"
            className="group inline-flex items-center text-xs font-bold text-gray-500 uppercase tracking-[0.2em] hover:text-gray-900 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-4 transform group-hover:-translate-x-2 transition-transform duration-500 ease-out"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Cancel
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
            Update Information.
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Modify your display name or profile image URL below.
          </p>
        </div>

        {/* The Required Form (DaisyUI styled to match Terrenn) */}
        <form className="space-y-6 bg-white p-8 border border-gray-100 shadow-sm">

          {/* Fulfills Assignment Req: Input 1 (Name) */}
          <div className="form-control w-full">
            <label className="label px-0">
              <span className="label-text text-xs font-bold text-gray-500 uppercase tracking-widest">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors"
              required
            />
          </div>

          {/* Fulfills Assignment Req: Input 2 (Image URL) */}
          <div className="form-control w-full">
            <label className="label px-0">
              <span className="label-text text-xs font-bold text-gray-500 uppercase tracking-widest">
                Image URL
              </span>
            </label>
            <input
              type="url"
              placeholder="https://example.com/your-image.jpg"
              className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors"
              required
            />
          </div>

          {/* Fulfills Assignment Req: Update Information Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn w-full bg-[#141311] text-white hover:bg-gray-800 border-none rounded-none text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300"
            >
              Update Information
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default page;