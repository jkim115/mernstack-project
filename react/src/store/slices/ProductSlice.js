import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
	name: 'product',
	initialState: [],
	reducers: {
		addProduct(state, action) {
			if (state.find((product) => product._id == action.payload._id)) {
				return state;
			}
			return [...state, action.payload]
		},
		removeProduct(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

export const { addProduct, removeProduct } = productsSlice.actions;
export const productReducer = productsSlice.reducer;
