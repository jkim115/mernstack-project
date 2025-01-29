const express = require('express');
const Student = require('../models/Student');
const studentRouter = express.Router({ strict: true, caseSensitive: true });

studentRouter.post('/signup', (req, res) => {
	const newStudent = req.body;

	// Handle a request to sign up
	Student.findOne({ name: newStudent.name })
		.then((result) => {
			if (result) {
				// For now, duplicate student name is not allowed
				res.status(403).send('The student name already exists');
			} else {
				// Create new Model instance for the new student
				const newStd = new Student(newStudent);

				// Save it in MongoDB
				newStd.save().then((result) => {
					console.log('New student signed up', result);
					res.status(200).send(result);
				});
			}
		})
		.catch((error) => {
			console.log('Error while handling a signup request', error);
			res.status(500).send('Server is busy');
		});
});

studentRouter.post('/login', (req, res) => {
	const loggingStudent = req.body;

	Student.findOne({
		name: loggingStudent.name,
		password: loggingStudent.password,
	})
		.then((result) => {
			if (result) {
				res.status(200).send(result);
			} else {
				// Send back an empty response with 401 status code (Unathorized)
				res.status(401).send();
			}
		})
		.catch((error) => {
			console.log('Error while handling a signin request', error);
			res.status(500).send('Server is busy');
		});
});

module.exports = studentRouter;
