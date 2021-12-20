import { LoaderFunction, useLoaderData } from "remix";
import { getMediaByType, getImageUrl } from "../../utils/tmdb.helper";

export const loader: LoaderFunction = async ({ params }) => {
  const movie = await getMediaByType("movie", params.id);
  return movie;
};

function Movie() {
  const movie = useLoaderData();
  console.log("@@@@", movie);
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
