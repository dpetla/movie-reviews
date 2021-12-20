import { Link, LoaderFunction, useLoaderData } from "remix";
import { getTrending, getImageUrl } from "../utils/tmdb.helper";

export const loader: LoaderFunction = async () => {
  const data = await getTrending();
  const trending = data.results.map(
    ({ id, poster_path, media_type, title }: any) => ({
      id,
      poster_path,
      media_type,
      title,
    })
  );

  return { trending };
};

export default function Index() {
  const { trending } = useLoaderData();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Movies Reviews</h1>
      <ul>
        <li>
          <Link to="/movie">Movie</Link>
        </li>
      </ul>
      <div className="trending-container">
        {trending.map((media: any) => (
          <Link to={`${media.media_type}/${media.id}`} key={media.id}>
            <img src={getImageUrl(media.poster_path)} />
          </Link>
        ))}
      </div>
    </div>
  );
}
