import { tileDetail } from '@/lib/data';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }) => {
  const { id } = await params;

  const tile = await tileDetail(id);
  console.log(tile);

  return (
    <div className="min-h-screen bg-[#fcfcfc] pt-32 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12">
          <Link href="/all-tiles" className="inline-flex items-center text-xs font-bold text-gray-500 uppercase  hover:text-gray-900 transition-colors">
            Back to Gallery
          </Link>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div className="w-full aspect-square bg-gray-100 overflow-hidden">
            <Image
              src={tile.image}
              alt={tile.title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </div>


          <div className="flex flex-col pt-4 lg:pt-10">


            <span className="uppercase tracking-[0.2em] text-xs font-bold text-gray-500 mb-4 block">
              {tile.category}
            </span>


            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              {tile.title}
            </h1>


            <div className="text-2xl font-medium text-gray-900 mb-8">
              ${tile.price.toFixed(2)} <span className="text-sm text-gray-500 uppercase tracking-widest">{tile.currency}</span>
            </div>


            <p className="text-gray-600 text-base leading-relaxed mb-10">
              {tile.description}
            </p>


            <div className="grid grid-cols-2 gap-y-6 border-t border-b border-gray-200 py-8 mb-10">
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Dimensions</span>
                <span className="text-gray-900 font-medium">{tile.dimensions}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Material</span>
                <span className="text-gray-900 font-medium">{tile.material}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Availability</span>
                <span className={`font-medium ${tile.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  {tile.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

            </div>


            <button className={`w-full py-5 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-300 ${tile.inStock ? 'bg-[#141311] text-white hover:bg-gray-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              {tile.inStock ? 'Buy Now' : 'Currently Unavailable'}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;