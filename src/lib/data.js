export const getFeaturedCard = async() => {
  const res = await fetch('http://localhost:3000/featured.json', {cache: 'no-cache'});
  return res.json();
}

export const getAllCards = async() => {
  const res = await fetch('http://localhost:3000/all-tiles.json', {cache: 'no-cache'});
  return res.json();
}

export const tileDetail = async(id) => {
  const res = await fetch('http://localhost:3000/all-tiles.json', {cache: 'no-cache'});
  
  const allTiles = await res.json();

  return allTiles.find((tile) => tile.id === id);
}