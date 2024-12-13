let mongoose = require('mongoose');
SchemaClass = mongoose.Schema;

const url = "mongodb+srv://admin:admin@demo.d8agj.mongodb.net/?retryWrites=true&w=majority&appName=demo";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(url, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir);

let studentSchema = new SchemaClass({
	name: { type: String, required: true },
	password: { type: String, required: true },
});

let StudentModel = mongoose.model('students', studentSchema);

module.exports = StudentModel;