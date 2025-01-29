import { createSlice } from '@reduxjs/toolkit';

const couponSlice = createSlice({
	name: 'coupon',
	initialState: [],
	reducers: {
		addCoupon(state, action) {
			state.push(action.payload);
		},
		removeCoupon(state, action) {
			const index = state.indexOf(action.payload);
			state.splice(index, 1);
		},
	},
});

// Export Action Creators to be used in dispatching
export const { addCoupon, removeCoupon } = couponSlice.actions;
// Export combined reducer to be used in configuring store
export const couponReducer = couponSlice.reducer;
