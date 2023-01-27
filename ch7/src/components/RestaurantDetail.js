import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";
const RestaurantDetail = () => {
	const { resId } = useParams();

	const [restaurantDetail, setRestaurantDetail] = useState(null);
	useEffect(() => {
		getRestaurantDetail(resId);
	}, []);
	const getRestaurantDetail = async (resId) => {
		const data = await fetch(
			`https://www.swiggy.com/dapi/menu/v4/full?lat=31.226736&lng=75.778295&menuId=${resId}`
		);
		const json = await data.json();
		// console.log(json);
		setRestaurantDetail(json);
	};
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
						<RestaurantMenu key={e[1].id} {...e[1]} />
					)
				)}
			</div>
		</div>
	);
};

export default RestaurantDetail;
