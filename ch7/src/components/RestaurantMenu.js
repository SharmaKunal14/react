import { IMG_CDN } from "../config";
import VegImage from "../assets/img/veg.png";
import NonVegImage from "../assets/img/non-veg.png";
const RestaurantMenu = ({
	id,
	name,
	category,
	description,
	price,
	cloudinaryImageId,
	isVeg,
}) => {
	return (
		<div className="restaurant-menu-card">
			<img
				src={`${IMG_CDN}/${cloudinaryImageId}`}
				alt={name}
				className="restaurant-card__image"
			/>
			<h3 className="restaurant-card__name">
				{name}{" "}
				{isVeg ? (
					<img src={VegImage} alt="Vegetarian" className="is-veg" />
				) : (
					<img
						src={NonVegImage}
						alt="Non Vegetarian"
						className="is-veg"
					/>
				)}
			</h3>
			<p>
				<em className="restaurant-card__category">{category}</em>
			</p>
			<p>
				<strong className="restaurant-card__description">
					{description}
				</strong>
			</p>
			<p className="restaurant-card__price">₹{price / 100}</p>
		</div>
	);
};

export default RestaurantMenu;
