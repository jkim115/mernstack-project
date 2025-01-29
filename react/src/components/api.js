import axios from 'axios';

// redux hooks cannot be used here, as the function is not a component
export const saveStudentToDB = async (student) => {
	try {
		const response = await axios.post(
			'http://localhost:9000/student/signup',
			student
		);
		return response.status;
	} catch (error) {
		const statusCode = error.response?.status || 500;
		console.error('Error saving user:', error.message);
		return statusCode;
	}
};

export const authenticateStudent = async (student) => {
	try {
		const response = await axios.post(
			'http://localhost:9000/student/login',
			student
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching user:', error.message);
		return error;
	}
};

export const saveProductToDB = async (product) => {
	try {
		const response = await axios.post(
			'http://localhost:9000/product/add',
			product
		);
		return response.status;
	} catch (error) {
		const statusCode = error.response?.status || 500;
		console.error('Error saving product:', error.message);
		return statusCode;
	}
};

export const fetchProductFromDB = async () => {
	try {
		const response = await axios.get('http://localhost:9000/product/fetch');
		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error.message);
		return [];
	}
};

export const saveCartToDB = async (userId, cart) => {
	try {
		const response = await axios.post('http://localhost:9000/cart/add', {
			userId,
			cart,
		});
		return response.status;
	} catch (error) {
		const statusCode = error.response?.status || 500;
		console.error('Error saving cart:', error.message);
		return statusCode;
	}
};

export const fetchCartFromDB = async (userId) => {
	try {
		const response = await axios.get(
			'http://localhost:9000/cart/fetch',
			userId
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching cart:', error.message);
		return [];
	}
};

export const saveOrderToDB = async (order) => {
	try {
		const response = await axios.post('http://localhost:9000/order/add', order);
		return response.status;
	} catch (error) {
		const statusCode = error.response?.status || 500;
		console.error('Error saving order:', error.message);
		return statusCode;
	}
};

export const fetchOrdersFromDB = async (userId) => {
	try {
		const response = await axios.get('http://localhost:9000/order/fetch', {
			params: { userId },
		});
		return response.data;
	} catch (error) {
		console.error('Error fetching orders:', error.message);
		return [];
	}
};

export const cancelOrderInDB = async (orderId) => {
	console.log(orderId);
	try {
		const response = await axios.put(
			'http://localhost:9000/order/cancel',
			null, // No body for PUT request, since orderId is sent as a query param
			{
				params: { orderId }, // Pass orderId as query parameter
			}
		);
		return response.data;
	} catch (error) {
		console.error('Error fetching orders:', error.message);
		return [];
	}
};
