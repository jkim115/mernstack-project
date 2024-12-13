const express = require('express');
const studentRoute = express.Router({ strict: true, caseSensitive: true });
const StudentModel = require('../DataModel/student-model');

studentRoute.get('/api/test', (req, res) => {
	res.send('hello');
});

studentRoute.post('/api/login', (req, res) => {
	let studentObj = req.body;

	StudentModel.findOne({ name: studentObj.name })
		.then((student) => {
			if (student) {
				console.log('student found!')
				res.send(student); // sign in
			} else {
				console.log('No student found -- registering the student...')
				// Save new student data into collection
				let schemaObj = new StudentModel(studentObj);

				schemaObj
					.save()
					.then((newStudent) => {
						res.send(newStudent);
					})
					.catch((error) => {
						console.log(error)
						res.send('Error while saving a new student');
					});
			}
		})
		.catch((error) => {
			console.log(error)
			res.send('Error while fetching student data');
		});
});

module.exports = studentRoute;
