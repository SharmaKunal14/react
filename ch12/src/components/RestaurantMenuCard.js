import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import FoodItemCard from "./FoodItemCard";

const RestaurantMenuCard = ({ item }) => {
	const dispatch = useDispatch();
	const addFoodItem = (item) => {
		dispatch(addItem(item));
	};
	return (
		<div className="restaurant-menu">
			<FoodItemCard item={item} cart={false} addFoodItem={addFoodItem} />
		</div>
	);
};

export default RestaurantMenuCard;
