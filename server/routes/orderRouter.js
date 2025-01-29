const express = require('express');
const Order = require('../models/Order');
const orderRouter = express.Router({ strict: true, caseSensitive: true });

orderRouter.post('/add', (req, res) => {
	const order = new Order(req.body);
	order
		.save()
		.then((newOrder) => {
			res.send(newOrder);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('Error while saving order');
		});
});

orderRouter.get('/fetch', async (req, res) => {
	const { userId } = req.query;
	console.log(userId);
	try {
		console.log('Fetching orders...');
		const orders = await Order.find({ userId });
		console.log('Orders fetched successfully:', orders);
		res.status(200).send(orders);
	} catch (error) {
		console.error('Error while fetching orders:', error);
		res.status(500);
	}
});

orderRouter.put('/cancel', async (req, res) => {
	const { orderId } = req.query;
	console.log(orderId);
	try {
		console.log('Canceling order...');
		// Update the isCanceled field to true
		const order = await Order.findOneAndUpdate(
			{ _id: orderId }, // Find the order by its ID
			{ $set: { isCanceled: true } }, // Update the isCanceled field
			{ new: true } // Return the updated document
		);

		if (!order) {
			// Handle case where order is not found
			console.log('Order not found:', orderId);
			return res.status(404).send({ message: 'Order not found' });
		}

		console.log('Orders canceled successfully:', order);
		res.status(200).send(order);
	} catch (error) {
		console.error('Error while canceling order:', error);
		res.status(500);
	}
});

module.exports = orderRouter;
