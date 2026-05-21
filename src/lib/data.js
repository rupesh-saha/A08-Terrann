export const getFeaturedCard = async() => {
  const res = await fetch('https://a08-terrann.vercel.app/featured.json', {cache: 'no-cache'});
  return res.json();
}

export const getAllCards = async() => {
  const res = await fetch('https://a08-terrann.vercel.app/all-tiles.json', {cache: 'no-cache'});
  return res.json();
}

export const tileDetail = async(id) => {
  const res = await fetch('https://a08-terrann.vercel.app/all-tiles.json', {cache: 'no-cache'});
  
  const allTiles = await res.json();

  return allTiles.find((tile) => tile.id === id);
}