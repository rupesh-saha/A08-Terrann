import { getAllCards } from "@/lib/data";

const AllTiles = async () => {
  const Tiles = await getAllCards();
  console.log(Tiles);

  return (
    <div>
      all tiles
    </div>
  );
};

export default AllTiles;