import { LoaderFunction, useLoaderData } from "remix";
import { getMediaByType, getImageUrl } from "../../utils/api";

export const loader: LoaderFunction = async ({ params }) => {
  const tvShow = await getMediaByType("tv", params.id);
  return { tvShow };
};

function TvShow() {
  const { tvShow } = useLoaderData();
  console.log("##", { tvShow });
  return (
    <div>
      <img
        src={getImageUrl(tvShow.poster_path, 400)}
        alt={`${tvShow.title} poster`}
      />
      <h1>
        {tvShow.name}{" "}
        <span>({new Date(tvShow.first_air_date).getFullYear()})</span>
      </h1>
      <h4>{tvShow.tagline}</h4>
      <p>{tvShow.overview}</p>
    </div>
  );
}

export default TvShow;
