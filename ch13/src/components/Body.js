import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/utils";
import useOnline from "../utils/useOnline";
const Body = () => {
	const [search, setSearch] = useState("");
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const isOnline = useOnline();
	if (!isOnline) {
		return <h1 data-testid="online-status">You are offline</h1>;
	}
	useEffect(() => {
		getRestaurants();
	}, []);
	const getRestaurants = async () => {
		const resp = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2231589&lng=75.7670466&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await resp.json();
		// console.log(json.data.cards[2].data.data.cards);
		// Optional chaining is must
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	};

	if (!allRestaurants) return null;
	return allRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="search_container">
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search"
					data-testid="search-input"
				/>
				<button
					data-testid="search-btn"
					onClick={() => {
						const data = filterData(search, allRestaurants);
						setFilteredRestaurants(data);
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list" data-testid="res-list">
				{filteredRestaurants.length === 0 ? (
					<h1>No restaurants found</h1>
				) : (
					filteredRestaurants.map((restaurant) => (
						<Link to={`restaurant/${restaurant?.data?.id}`}>
							<RestaurantCard
								key={restaurant.data.id}
								{...restaurant.data}
							/>
						</Link>
					))
				)}
			</div>
		</>
	);
};
export default Body;
