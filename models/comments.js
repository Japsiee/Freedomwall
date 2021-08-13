const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
	toId: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	}
}, { timestamps: true })

const Comment = mongoose.model('comment', commentSchema);
module.exports = Comment;