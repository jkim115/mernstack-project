import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: [],
	reducers: {
		addToCart(state, action) {
			console.log(action.payload);
			if (state.find((product) => product._id == action.payload._id)) {
				return state;
			}
			return [...state, action.payload];
		},
		updateCart(state, action) {
			return state.map((product) => {
				if (product._id == action.payload._id) {
					return { ...product, qty: action.payload.qty };
				}
				return product;
			});
		},
		emptyCart(state, action) {
			return [];
		},

		removeFromCart(state, action) {
			return state.filter((product) => product._id !== action.payload._id);
		},
	},
});

export const { addToCart, updateCart, emptyCart, removeFromCart } =
	cartSlice.actions;
export const cartReducer = cartSlice.reducer;
