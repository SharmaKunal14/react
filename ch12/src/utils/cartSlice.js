import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			console.log(state, action);
			const found = state.items.findIndex(
				(item) => item.id === action.payload.id
			);
			if (found !== -1) {
				state.items[found].count++;
			} else {
				state.items.push(action.payload);
				state.items[state.items.length - 1].count = 1;
			}
		},
		removeItem: (state, action) => {
			const found = state.items.findIndex(
				(item) => item.id === action.payload.id
			);
			if (found !== -1 && state.items[found].count > 1) {
				state.items[found].count--;
			} else {
				state.items = state.items.filter(
					(item) => item.id !== action.payload?.id
				);
			}
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
