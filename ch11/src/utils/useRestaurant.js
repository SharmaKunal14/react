import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant = (resId) => {
	const [restaurant, setRestaurant] = useState(null);
	useEffect(() => {
		getRestaurantDetail(resId);
	}, []);
	const getRestaurantDetail = async (resId) => {
		const data = await fetch(`${FETCH_MENU_URL}${resId}`);
		const json = await data.json();
		// console.log(json);
		setRestaurant(json);
	};
	return restaurant;
};
export default useRestaurant;
