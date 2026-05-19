import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TileCard = ({ tile }) => {
  return (
    <div className="flex flex-col items-center text-center group h-full">

      <div className="w-full aspect-square overflow-hidden mb-6">
        <Image
          src={tile.image}
          alt={tile.title}
          width={600}
          height={600}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
        {tile.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed px-2 mb-6 line-clamp-3">
        {tile.description}
      </p>

      
      <Link
        href={`/tile/${tile.id}`}
        className="mt-auto text-sm font-bold text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-gray-500 hover:border-gray-500 transition-colors uppercase tracking-widest">
        More details
      </Link>

    </div>
  );
};

export default TileCard;