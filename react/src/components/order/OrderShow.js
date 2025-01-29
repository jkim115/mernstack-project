import React from 'react';
import { cancelOrderInDB } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart } from '../../store';

function OrderShow({ order }) {
	const currentTime = new Date().getTime();
	const orderTime = new Date(order.orderDate).getTime();

	const timeDiff = currentTime - orderTime; // in ms
	const hourDiff = timeDiff / (1000 * 60 * 60); // Convert ms to hours

	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	// Update the isCanceled field of the order to true
	const cancelOrder = async (event) => {
		event.preventDefault();
		try {
			console.log(order._id);
			const canceledOrder = await cancelOrderInDB(order._id);
			console.log(canceledOrder);

			if (!(canceledOrder instanceof Error)) {
				alert('The order has been canceled successfully!');
			} else {
				console.log('Error while canceling the order');
			}
		} catch (error) {
			console.error('Error occurred while canceling the order:', error);
		}
	};

	// Empty the current cart and push a list of products from the order into it
	const reorder = (event) => {
		event.preventDefault();
		console.log(cart);

		dispatch(emptyCart());
		order.products.forEach((product) => {
			dispatch(addToCart(product));
		});
		alert('Cart has been updated. Please checkout.');
		// TODO: direct users to checkout page?
	};

	return (
		<tr>
			<td>{order.orderId}</td>
			<td>{order.orderDate.replace('T', '  ').substring(0, 17)}</td>
			<td>{order.products.map((product) => product.name).join(' ')}</td>
			<td>${order.totalPayment}</td>
			{hourDiff >= 5 ? (
				<>
					<td>Delivered</td>
					<td></td>
				</>
			) : (
				<>
					{!order.isCanceled ? (
						<>
							<td>Ordered</td>
							<td>
								<button className='btn btn-danger' onClick={cancelOrder}>
									Cancel
								</button>
							</td>
						</>
					) : (
						<>
							<td>Canceled</td>
							<td>
								<button className='btn btn-secondary' onClick={reorder}>
									Reorder
								</button>
							</td>
						</>
					)}
				</>
			)}
		</tr>
	);
}

export default OrderShow;
