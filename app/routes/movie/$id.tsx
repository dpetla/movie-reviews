import { LoaderFunction, useLoaderData } from "remix";
import { getMediaByType, getImageUrl, getRatings } from "../../utils/api";

export const loader: LoaderFunction = async ({ params }) => {
  const movie = await getMediaByType("movie", params.id);

  let ratings = {};
  if (movie.imdb_id) {
    ratings = await getRatings(movie.imdb_id);
  }

  return { movie, ratings };
};

function Movie() {
  const { movie, ratings } = useLoaderData();
  // console.log("##", { movie, ratings });
  return (
    <div>
      <img
        src={getImageUrl(movie.poster_path, 400)}
        alt={`${movie.title} poster`}
      />
      <h1>{movie.title}</h1>
    </div>
  );
}

export default Movie;
