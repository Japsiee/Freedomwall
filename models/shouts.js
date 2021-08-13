const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shoutSchema = new Schema({
	author: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	}
}, { timestamps: true })

const Shout = mongoose.model('shout', shoutSchema);
module.exports = Shout;