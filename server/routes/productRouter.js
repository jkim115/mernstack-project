const express = require('express');
const Product = require('../models/Product');
const productRouter = express.Router({ strict: true, caseSensitive: true });

productRouter.post('/add', (req, res) => {
	const product = new Product(req.body);
	product
		.save()
		.then((newProduct) => {
			res.send(newProduct);
		})
		.catch((error) => {
			console.log(error);
			res.status(500).send('Error while saving product');
		});
});

productRouter.get('/fetch', async (req, res) => {
  try {
    console.log("Fetching products...");
    const products = await Product.find();
    console.log("Products fetched successfully:", products);
    res.status(200).send(products);
  } catch (error) {
    console.error("Error while fetching products:", error);
    res.status(500);
  }
});

module.exports = productRouter;
