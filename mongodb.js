const mongoose = require('mongoose');
require('dotenv').config();

const mongoUsername = process.env.MONGO_USERNAME;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoDbname = process.env.MONGO_DBNAME;

const mongoPath = `mongodb+srv://${mongoUsername}:${mongoPassword}@practice-1.6oewo.mongodb.net/${mongoDbname}?retryWrites=true&w=majority`;

module.exports = async () => {
	await mongoose.connect(mongoPath, { useUnifiedTopology: true, useNewUrlParser: true })
	return mongoose;
}



