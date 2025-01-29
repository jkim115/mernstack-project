const express = require('express');
const Hobby = require('../models/Hobby');
const hobbyRouter = express.Router({ strict: true, caseSensitive: true });

hobbyRouter.post('/add', async (req, res) => {
	try {
		const hobby = new Hobby(req.body);
		hobby
			.save()
			.then((newHobby) => {
				res.send(newHobby);
			})
			.catch((error) => {
				console.log(error);
				res.status(500).send('Error while saving hobby');
			});
	} catch (error) {
		console.error('Error while saving hobby:', error);
		res.status(500).send();
	}
});

hobbyRouter.get('/fetch', async (req, res) => {
	try {
		console.log('Fetching a list of hobbies...');
		const hobbies = await Hobby.find();
		console.log('Hobby fetched successfully:', hobbies);
		res.status(200).send(hobbies);
	} catch (error) {
		console.error('Error while fetching hobbies:', error);
		res.status(500).send();
	}
});

module.exports = hobbyRouter;
