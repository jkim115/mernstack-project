const mongoose = require('mongoose');
require('../api/api'); // Run the script to connect to MongoDB

const Schema = mongoose.Schema;

const studentSchema = new Schema({
	name: String,
	password: String,
	address: String,
	phone: String,
	hobbies: Object,
});

// Load schema into mongoose
mongoose.model('students', studentSchema);

// Get student model class
const Student = mongoose.model('students');
module.exports = Student;
