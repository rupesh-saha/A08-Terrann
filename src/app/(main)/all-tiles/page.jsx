import TileCard from "@/Components/TileCard";
import { getAllCards } from "@/lib/data";

const AllTiles = async () => {
  const Tiles = await getAllCards();
  console.log(Tiles);

  return (
    <div className="min-h-screen bg-[#fcfcfc]">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="text-center mb-16 px-4">

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            The Gallery
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-12">
            Explore our complete collection of premium ceramic, porcelain, and natural stone tiles. Find the perfect foundation for your next architectural project.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

          {
            Tiles.map(tile => <TileCard key={tile.id} tile={tile}></TileCard>)
          }

        </div>




      </section>



    </div>
  );
};

export default AllTiles;