import { getFeaturedCard } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeaturedCard = async () => {
  const featureDetails = await getFeaturedCard();

  return (
    <div className="mb-10">

      <div className="text-center mb-12 mt-10 md:mt-20 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          Featured Collections
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Discover our handpicked selection of premium ceramic and stoneware, designed to elevate your everyday spaces.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5">

        {
          featureDetails.map(feature => {
            
            return (
              <div key={feature.id} className="flex flex-col items-center text-center group h-full">

                
                <div className="w-full aspect-square overflow-hidden mb-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed px-2 mb-6 line-clamp-3">
                  {feature.description}
                </p>

                
                <Link
                  href={`/tile/${feature.id}`}
                  className="mt-auto text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors"
                >
                  More details
                </Link>

              </div>
            );
          })
        }

      </div>

    </div>


  );
};

export default FeaturedCard;