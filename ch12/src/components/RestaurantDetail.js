import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenuCard = lazy(() => import("./RestaurantMenuCard"));

const RestaurantDetail = () => {
	const { resId } = useParams();

	const restaurantDetail = useRestaurant(resId);
	return !restaurantDetail ? (
		<Shimmer />
	) : (
		<div className="restaurant-detail">
			<div className="restaurant-image-container">
				<img
					src={`${IMG_CDN}/${restaurantDetail?.data?.cloudinaryImageId}`}
				/>
				<h3>{restaurantDetail?.data?.name}</h3>
				<p>Cuisines - {restaurantDetail?.data?.cuisines.join(" ")}</p>
				<h4>Average Rating - {restaurantDetail?.data?.avgRating}</h4>
			</div>
			<div className="restaurant-menu">
				{Object.entries(restaurantDetail?.data?.menu?.items).map(
					(e) => (
						<RestaurantMenuCard
							key={e[1].id}
							item={e[1]}
							restaurantName={restaurantDetail?.data?.name}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default RestaurantDetail;
