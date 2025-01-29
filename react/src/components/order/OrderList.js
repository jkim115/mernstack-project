import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OrderShow from './OrderShow';
import { fetchOrdersFromDB } from '../api';

function OrderList() {
	const user = useSelector((state) => state.student);
	const [orders, setOrders] = useState([]);

	// Fetch the current user's recent orders
	useEffect(() => {
		const fetchOrders = async () => {
			const fetchedOrders = await fetchOrdersFromDB(user[0]._id);
			setOrders(fetchedOrders); // Update the order state
		};
		fetchOrders();
	}, []);

	return (
		<div>
			<h3>Orders</h3>
			{orders.length > 0 ? (
				<>
					<table className='table table-striped'>
						<thead>
							<tr>
								<th>Order ID</th>
								<th>Date Placed</th>
								<th>Ordered Product(s)</th>
								<th>Payment</th>
								<th>Status</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{orders.map((order) => {
								return <OrderShow key={order._id} order={order} />;
							})}
						</tbody>
					</table>
				</>
			) : (
				<h5>You have no order</h5>
			)}
		</div>
	);
}

export default OrderList;
