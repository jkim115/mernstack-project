import React, { useEffect, useState } from 'react';
import { removeFromCart, updateCart } from '../../store';
import { useDispatch } from 'react-redux';

function CartShow({ product }) {
	const item = { ...product };
	const [quantity, setQuantity] = useState(item.qty);
	const dispatch = useDispatch();

	const handleQuantityChange = (event) => {
		event.preventDefault();
		const newQuantity = parseInt(event.target.value, 10);
		// Ensure the new quantity is a positive integer
		if (newQuantity > 0) {
			// Update quantity and item
			setQuantity(newQuantity);
		}
	};

	const handleRemoveButtonClick = (event) => {
		event.preventDefault();
		dispatch(removeFromCart(product));
	};

	const handleEditButtonClick = (event) => {
		event.preventDefault();
		item.qty = quantity;
		dispatch(updateCart(item));	// Update Cart
	};

	return (
		<div className='card mb-3' style={{ maxWidth: '540px' }}>
			<div className='row g-0'>
				<div className='col-md-8'>
					<div className='card-body'>
						<h5 className='card-title'>{item.name}</h5>
						<p className='card-text'>
							<span className='fw-bold'>Price:</span>${item.price}
						</p>
						<p className='card-text'>
							<span className='fw-bold'>Amount:</span>
							<input
								type='number'
								value={quantity}
								onChange={handleQuantityChange}
							/>
						</p>
						<p className='card-text'>
							<button
								className='btn btn-secondary'
								onClick={handleRemoveButtonClick}>
								Remove
							</button>
							<button className='btn btn-info' onClick={handleEditButtonClick}>
								Edit
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CartShow;
