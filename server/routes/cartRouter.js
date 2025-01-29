const express = require('express');
const Cart = require('../models/Cart');
const cartRouter = express.Router({ strict: true, caseSensitive: true });

cartRouter.post('/add', async (req, res) => {
	try {
		const cartFound = await Cart.findOne({ userId: req.body.userId });

		if (cartFound) {
			// Update / replace the cart
			cartFound.cart = req.body.cart;
			res.status(200).send(await cartFound.save());
		} else {
			// Create a new cart if not found
			const newCart = new Cart(req.body);
			res.status(200).send(await newCart.save());
		}
	} catch (error) {
		console.error('Error while saving cart:', error);
		res.status(500);
	}
});

cartRouter.get('/fetch', async (req, res) => {
	try {
		console.log('Fetching cart...');
		const cart = await Cart.findOne({ userId: req.body.userId });
		console.log('Cart fetched successfully:', cart);
		res.status(200).send(cart);
	} catch (error) {
		console.error('Error while fetching cart:', error);
		res.status(500);
	}
});

module.exports = cartRouter;
