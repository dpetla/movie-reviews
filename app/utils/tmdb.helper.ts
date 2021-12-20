export const baseUrl = "https://api.themoviedb.org/3";

export const getImageUrl = (pathSuffix: string, width: number = 200) =>
  `https://image.tmdb.org/t/p/w${width}/${pathSuffix}`;

async function get(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getTrending() {
  const url = `${baseUrl}/trending/all/day?api_key=${process.env.TMDB_API_KEY}`;
  return get(url);
}

export async function getMediaByType(mediaType: string, id: string = "") {
  const url = `${baseUrl}/${mediaType}/${id}?api_key=${process.env.TMDB_API_KEY}`;
  return get(url);
}
