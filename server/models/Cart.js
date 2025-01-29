const mongoose = require('mongoose');
require('../api/api'); // Run the script to connect to MongoDB

const Schema = mongoose.Schema;

const cartSchema = new Schema({
	userId: { type: String, required: true },
	cart: Object,
});

// Load schema into mongoose
mongoose.model('cart', cartSchema);

// Get student model class
const Cart = mongoose.model('cart');
module.exports = Cart;
