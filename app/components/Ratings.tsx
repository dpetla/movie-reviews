type Props = { ratings: any };
function Ratings({ ratings }: Props): React.ReactElement {
  return ratings.length > 0
    ? ratings.map((rating: any) => (
        <div key={rating.Source} className="rating-item">
          <span>{rating.Source}</span>: <span>{rating.Value}</span>
        </div>
      ))
    : "No ratings!!";
}

export default Ratings;
