import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Rating {
  rating: number;
  count: number;
}

const Rating = ({ rating, count }: Rating) => {
  return (
    <>
      <div className="flex items-center gap-2 mt-2 mb-1">
        <p className="text-sm">{Math.round(rating).toFixed(1)}</p>
        <div className="flex items-center gap-1">
          {Array(Math.round(rating))
            .fill(null)
            .map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-green-700"
              />
            ))}
          {Array(5 - Math.round(rating))
            .fill(null)
            .map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStarRegular}
                className="text-green-700"
              />
            ))}
        </div>
      </div>
      <p className="mb-3 text-xs text-gray-400">{count} ratings</p>
    </>
  );
};

export default Rating;
