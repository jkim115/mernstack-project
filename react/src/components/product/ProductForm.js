import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveProductToDB } from '../api';
import { addProduct } from '../../store';

function ProductForm() {
	const [product, setProduct] = useState({
		name: '',
		price: 1.0,
		description: '',
		rating: 0,
	});
	const [message, setMessage] = useState('');
	const dispatch = useDispatch();

	const handleInputChange = (event) => {
		const classList = event.target.classList;

		if (classList.contains('name')) {
			setProduct({ ...product, name: event.target.value });
		} else if (classList.contains('description')) {
			setProduct({ ...product, description: event.target.value });
		} else if (classList.contains('price')) {
			setProduct({ ...product, price: event.target.value });
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const statusCode = await saveProductToDB(product);
		if (statusCode === 200) {
			dispatch(addProduct(product));
			setMessage('Product registered successfully!');
		} else {
			setMessage('Product registeration failed');
		}
	};

	return (
		<div className='d-flex justify-content-center align-items-center mt-5'>
			<form onSubmit={handleSubmit}>
				<div>
					<h2 className='fw-bold mb-4 text-center'>Register product</h2>
				</div>

				<div data-mdb-input-init className='form-outline mb-4'>
					<label htmlFor='name' className='form-label'>
						Product Name
					</label>
					<input
						id='name'
						type='text'
						className='form-control name'
						value={product.name}
						onChange={handleInputChange}
					/>
				</div>

				<div data-mdb-input-init className='form-outline mb-4'>
					<label htmlFor='price' className='form-label'>
						Price
					</label>
					<input
						id='price'
						type='number'
						min='1'
						step='any'
						className='form-control price'
						value={product.price}
						onChange={handleInputChange}
					/>
				</div>

				<div data-mdb-input-init className='form-outline mb-4'>
					<label htmlFor='description' className='form-label'>
						Description
					</label>
					<textarea
						id='description'
						className='form-control description'
						value={product.description}
						onChange={handleInputChange}></textarea>
				</div>

				<button
					type='submit'
					data-mdb-button-init
					data-mdb-ripple-init
					className='btn btn-primary btn-block mb-4 w-100'>
					Register
				</button>
				<div>{message}</div>
				<br />
			</form>
		</div>
	);
}

export default ProductForm;
