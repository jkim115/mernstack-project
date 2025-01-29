const mongoose = require('mongoose');
require('../api/api'); // Run the script to connect to MongoDB

const Schema = mongoose.Schema;

const hobbySchema = new Schema({
	name: String,
});

// Load schema into mongoose
mongoose.model('hobby', hobbySchema);

// Get student model class
const Hobby = mongoose.model('hobby');
module.exports = Hobby;
