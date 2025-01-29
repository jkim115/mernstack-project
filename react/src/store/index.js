// This file is the central point where all things related to redux will be imported

import { configureStore } from '@reduxjs/toolkit';
import {
	addStudent,
	removeStudent,
	studentReducer,
} from './slices/StudentSlice';
import {
	addProduct,
	removeProduct,
	productReducer,
} from './slices/ProductSlice';
import {
	addToCart,
	updateCart,
	emptyCart,
	removeFromCart,
	cartReducer,
} from './slices/CartSlice';
import { addCoupon, removeCoupon, couponReducer } from './slices/CouponSlice';

const store = configureStore({
	reducer: {
		student: studentReducer,
		products: productReducer,
		cart: cartReducer,
		coupon: couponReducer,
	},
});

// Export store and re-export addStudent and removeStudent
export {
	store,
	addStudent,
	removeStudent,
	addProduct,
	removeProduct,
	addToCart,
	updateCart,
	emptyCart,
	removeFromCart,
	addCoupon,
	removeCoupon,
};
