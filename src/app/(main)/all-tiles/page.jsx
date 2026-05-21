'use client'
import TileCard from "@/Components/TileCard";
import { getAllCards } from "@/lib/data";
import React, { useState, useEffect } from 'react';

const AllTiles = () => {

  const [allTiles, setAllTiles] = useState([]);
  const [displayedTiles, setDisplayedTiles] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const loadTiles = async () => {
      const res = await fetch('http://localhost:3000/all-tiles.json');
      const data = await res.json();

      setAllTiles(data);
      setDisplayedTiles(data);
    };
    loadTiles();
  }, []);

  const handleSearchClick = () => {
    const query = searchInput.toLowerCase().trim();

    const filtered = allTiles.filter(tile =>
      tile.title.toLowerCase().includes(query)
    );

    setDisplayedTiles(filtered);
  };



  return (
    <div className="min-h-screen bg-[#fcfcfc]">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center mb-16 px-4">

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-90 mb-6">
            The Gallery
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12">
            Explore our complete collection of premium ceramic, porcelain, and natural stone tiles. Find the perfect foundation for your next architectural project.
          </p>

          <div className="max-w-2xl mx-auto flex gap-2">
            <input type="text" placeholder="Search collections..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className="input input-bordered w-full bg-white border-gray-200 focus:border-gray-900 focus:outline-none rounded-none text-gray-900 transition-colors" />

            <button onClick={handleSearchClick} className="btn bg-[#141311] text-white hover:bg-gray-800 border-none rounded-none px-8 font-bold uppercase  text-xs transition-all duration-300">
              Search
            </button>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

          {
            displayedTiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
          }

        </div>




      </section>



    </div>
  );
};

export default AllTiles;