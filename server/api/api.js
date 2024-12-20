const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Connect to MongoDB through Mongoose
const url =
	'mongodb+srv://admin:admin@cluster0.d8agj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const clientOptions = {
	serverApi: { version: '1', strict: true, deprecationErrors: true },
};

async function run() {
	try {
		await mongoose.connect(url, clientOptions);
		await mongoose.connection.db.admin().command({ ping: 1 });
		console.log(
			'Pinged your deployment. You successfully connected to MongoDB!'
		);
	} catch (error) {
		console.log('Error while connecting to MongoDB', error);
		process.exit(1);
	}
}
run().catch(console.dir);
