import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../config";
function filterData(search, restaurantList) {
	const data = restaurantList.filter((restaurant) =>
		restaurant.data.name.toLowerCase().includes(search)
	);
	return data;
}
const Body = () => {
	const [search, setSearch] = useState("");
	const [restaurants, setRestaurants] = useState(restaurantList);
	return (
		<>
			<div className="search_container">
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search"
				/>
				<button
					onClick={() => {
						const data = filterData(search, restaurantList);
						setRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{restaurants.map((restaurant) => (
					<RestaurantCard {...restaurant.data} />
				))}
			</div>
		</>
	);
};
export default Body;
