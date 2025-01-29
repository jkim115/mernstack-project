const mongoose = require('mongoose');
require('../api/api'); // Run the script to connect to MongoDB

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	orderId: String,
	orderDate: Date,
	userId: Object,
	address: String,
	products: Object,
	totalPayment: Number,
	isCanceled: { type: Boolean, default: false },
});

// Load schema into mongoose
mongoose.model('orders', orderSchema);

// Get student model class
const Order = mongoose.model('orders');
module.exports = Order;
