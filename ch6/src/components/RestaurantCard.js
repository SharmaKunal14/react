import { IMG_CDN } from "../config";
const RestaurantCard = ({ cloudinaryImageId, name, avgRating, cuisines }) => {
	return (
		<div className="card">
			<img
				className="card__img"
				src={`${IMG_CDN}/${cloudinaryImageId}`}
			></img>
			<h2>{name}</h2>
			<h3>{avgRating}</h3>
			<h6>{cuisines.join(", ")}</h6>
		</div>
	);
};

export default RestaurantCard;
