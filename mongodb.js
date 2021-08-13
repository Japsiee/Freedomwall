const mongoose = require('mongoose');
const mongoPath = 'mongodb+srv://fw_admin:fw_admin@practice-1.6oewo.mongodb.net/freedomwall?retryWrites=true&w=majority';

module.exports = async () => {
	await mongoose.connect(mongoPath, { useUnifiedTopology: true, useNewUrlParser: true })
	return mongoose;
}



