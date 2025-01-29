const mongoose = require('mongoose');
require('../api/api');	// Run the script to connect to MongoDB

const Schema = mongoose.Schema;

const productSchema = new Schema({
	name: String,
	price: Number,
	description: String,
	rating: Number,
});

// Load schema into mongoose
mongoose.model('products', productSchema);

// Get student model class
const Product = mongoose.model('products');
module.exports = Product;
