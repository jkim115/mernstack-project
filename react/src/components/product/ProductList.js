import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductFromDB } from '../api';
import { addProduct } from '../../store';
import ProductShow from './ProductShow';

function ProductList() {
	const dispatch = useDispatch();
	const productList = useSelector((state) => {
		return state.products;
	});
	console.log(productList);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const products = await fetchProductFromDB();
				// Dispatch each product
				products.forEach((product) => {
					dispatch(addProduct({ ...product, qty: 1 }));
				});
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};
		fetchProduct();
	}, []);

	return (
		<div>
			{productList.map((product) => {
				return <ProductShow key={product._id} product={product} />;
			})}
		</div>
	);
}

export default ProductList;
