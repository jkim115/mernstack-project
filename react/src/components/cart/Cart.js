import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartShow from './CartShow';
import { saveCartToDB, saveOrderToDB } from '../api';
import CartSummary from './CartSummary';
import { NavLink } from 'react-router-dom';
import { removeCoupon } from '../../store';

function Cart({ isCheckout }) {
	const user = useSelector((state) => state.student);
	const cart = useSelector((state) => state.cart);
	const coupons = useSelector((state) => state.coupon);
	const [total, setTotal] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [couponValue, setCouponValue] = useState('');
	const dispatch = useDispatch();

	// Initial total and quantity
	useEffect(() => {
		let totalPrice = 0,
			totalQuantity = 0;
		cart.forEach((product) => {
			totalPrice += product.price * (product.qty || 1); // Default qty == 1
			totalQuantity += product.qty || 1;
		});
		setTotal(totalPrice);
		setQuantity(totalQuantity);
	}, [cart]);

	const handleSaveButtonClick = (event) => {
		event.preventDefault();
		if (user.length > 0) {
			console.log('saving cart...');
			saveCartToDB(user[0], cart);
			alert('Cart has been saved');
		} else {
			alert('Please log in');
		}
	};

	// Prevent users from going to checkout page before logging in
	const handleCheckoutButton = (event) => {
		if (!user || user.length == 0) {
			event.preventDefault();
			alert('Please log in');
		}
	};

	const handleCouponInputChange = (event) => {
		event.preventDefault();
		setCouponValue(event.target.value);
	};

	const applyCoupon = (event) => {
		event.preventDefault();

		// Check if the given coupon is in the coupon list
		if (coupons && coupons.length > 0) {
			const matchingCoupon = coupons.find((coupon) => coupon == couponValue);
			if (matchingCoupon) {
				// Adjust the total price and remove the used coupon from the list
				setTotal((prevTotal) => prevTotal * 0.9);
				dispatch(removeCoupon(matchingCoupon));
				alert('Coupon applied!');
			} else {
				alert('Invalid coupon');
			}
		} else {
			alert('Invalid coupon');
		}
	};

	// Create an order object and save it to DB
	const handlePayment = async (event) => {
		const order = {
			orderId: generateOrderNumber(),
			orderDate: new Date().getTime(),
			userId: user[0]._id,
			address: user[0].address,
			products: cart,
			totalPayment: total,
		};
		const response = await saveOrderToDB(order);
		console.log(response);
	};

	const generateOrderNumber = () => {
		const timestamp = new Date().getTime();
		const randomPart = Math.floor(1000 + Math.random() * 9000);
		const orderNumber = `${timestamp}-${randomPart}`;
		return orderNumber;
	};

	return (
		<div>
			{cart && cart.length > 0 ? (
				<>
					<h3>CART</h3>
					<div>
						{cart.map((product) => (
							<CartShow key={product._id} product={product} />
						))}
					</div>
					<div>
						<CartSummary total={total} quantity={quantity} />
					</div>
					<div>
						{!isCheckout ? (
							<div>
								<button
									className='btn btn-primary'
									onClick={handleSaveButtonClick}>
									Save Cart
								</button>
								<NavLink to='/checkout'>
									<button
										className='btn btn-success'
										onClick={handleCheckoutButton}>
										Go to checkout
									</button>
								</NavLink>
							</div>
						) : (
							<div>
								<div>
									<form onSubmit={applyCoupon}>
										Coupon:
										<input
											type='text'
											value={couponValue}
											onChange={handleCouponInputChange}></input>
										<button className='btn btn-secondary'>Apply</button>
									</form>
								</div>
								<NavLink to='/orderSuccess'>
									<button className='btn btn-primary' onClick={handlePayment}>
										Go to payment
									</button>
								</NavLink>
							</div>
						)}
					</div>
				</>
			) : (
				<h3>Cart is empty</h3>
			)}
		</div>
	);
}

export default Cart;
