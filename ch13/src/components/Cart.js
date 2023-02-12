import React from "react";
import { useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { removeItem, clearCart, addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	const addFoodItem = (item) => {
		dispatch(addItem(item));
	};
	const removeFoodItem = (item) => {
		dispatch(removeItem(item));
	};
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<div className="cart__section">
			<button className="btn btn__red" onClick={handleClearCart}>
				Clear Cart
			</button>
			<div className="restaurant-menu">
				{/* <button className="btn btn-primary">Clear Cart</button> */}
				{cartItems.map((cartItem) => (
					<FoodItemCard
						item={cartItem}
						key={cartItem.id}
						cart={true}
						removeFoodItem={removeFoodItem}
						addFoodItem={addFoodItem}
					/>
				))}
			</div>
		</div>
	);
};

export default Cart;
