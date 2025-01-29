import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCoupon } from '../../store';

function Coupon() {
	const coupons = useSelector((state) => state.coupon);
	const dispatch = useDispatch();

	const MAX_COUPONS = 3; // Maximum number of coupons users can have

	const generateCoupon = () => {
		if (coupons.length >= MAX_COUPONS) {
			alert('You cannot have more than 3 coupons. Use what you have first!');
			return;
		}
		// Generate new coupon and dispatch it
		const coupon = Math.floor(100000 + Math.random() * 900000);
		dispatch(addCoupon(coupon));
	};

	return (
		<>
			<h3>COUPON</h3>
			<div>
				<button className='btn btn-success' onClick={generateCoupon}>
					Click to generate coupon
				</button>
			</div>
			<br />
			<div>
				{coupons && coupons.length > 0 ? (
					<div>{coupons.join('  ')}</div>
				) : (
					<div>No coupon. Click the button to generate one</div>
				)}
			</div>
		</>
	);
}

export default Coupon;
