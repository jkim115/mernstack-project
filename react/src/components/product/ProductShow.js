import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store';

function ProductShow({ product }) {
	const dispatch = useDispatch();
	const [showHide, toggleShowHide] = useState(false);

	const addProductToCart = (product) => {
		dispatch(addToCart(product));
	};

	return (
		<ul className='product col-md-11'>
			<li className='product' onClick={() => toggleShowHide(!showHide)}>
				{product.name}
				{showHide ? (
					<ul>
						<li>
							<span>Price: $</span>
							{product.price}
						</li>
						<li>
							<span>Description: </span>
							{product.description}
						</li>
						<li>
							<span>Rating: </span>
							{product.rating}
						</li>
						<button
							className='btn btn-primary'
							onClick={() => addProductToCart(product)}>
							Add to cart
						</button>
					</ul>
				) : (
					<div></div>
				)}
			</li>
		</ul>
	);
}

export default ProductShow;
