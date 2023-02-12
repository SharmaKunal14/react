import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IMG_CDN } from "../config";
import VegImage from "../assets/img/veg.png";
import NonVegImage from "../assets/img/non-veg.png";
const FoodItemCard = ({ item, cart, addFoodItem, removeFoodItem }) => {
	const {
		name,
		category,
		description,
		price,
		cloudinaryImageId,
		isVeg,
		restaurantName,
	} = {
		...item,
	};
	return (
		<div className="restaurant-menu-card">
			<LazyLoadImage
				src={`${IMG_CDN}/${cloudinaryImageId}`}
				alt={name}
				className="restaurant-card__image"
				effect="blur"
			/>
			{cart ? <em>{restaurantName}</em> : <></>}
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
			{!cart ? (
				<div className="restaurant-card__price-section">
					<p className="restaurant-card__price">₹{price / 100}</p>
					<button
						className="btn btn__green"
						onClick={() => addFoodItem(item)}
					>
						Add item
					</button>
				</div>
			) : (
				<div className="restaurant-card__count-section">
					<div className="item-counter">
						<button
							className="btn btn__green"
							onClick={() => addFoodItem(item)}
						>
							+
						</button>
						<p className="item-counter__count">{item.count}</p>
						<button
							className="btn btn__red"
							onClick={() => removeFoodItem(item)}
						>
							-
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default FoodItemCard;
