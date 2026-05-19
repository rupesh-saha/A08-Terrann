export const getFeaturedCard = async() => {
  const res = await fetch('http://localhost:3000/featured.json');
  return res.json();
}

export const getAllCards = async() => {
  const res = await fetch('http://localhost:3000/all-tiles.json');
  return res.json();
}