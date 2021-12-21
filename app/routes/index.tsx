import { Link, LoaderFunction, useLoaderData } from "remix";
import { getTrending, getImageUrl } from "../utils/api";

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
    <div>
      <h1>Movies Reviews</h1>
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
