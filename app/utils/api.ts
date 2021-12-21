import { MediaType } from "~/types/media.types";
import { MovieResponse } from "~/types/movie.types";
import { TvResponse } from "~/types/tv.types";

async function get(url: string) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// TMDB
export const baseUrl = "https://api.themoviedb.org/3";

export const getImageUrl = (pathSuffix: string, width: number = 200) =>
  `https://image.tmdb.org/t/p/w${width}/${pathSuffix}`;

export async function getTrending() {
  const url = `${baseUrl}/trending/all/day?api_key=${process.env.TMDB_API_KEY}`;
  return get(url);
}

export async function getMediaByType<T extends MediaType>(
  mediaType: T,
  id: string = ""
): Promise<T extends "movie" ? MovieResponse : TvResponse> {
  const url = `${baseUrl}/${mediaType}/${id}?api_key=${process.env.TMDB_API_KEY}`;
  return get(url);
}

// OMDB
export const getRatings = async (id: string) => {
  const url = `http://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`;
  const data = await get(url);
  return data.Ratings;
};
