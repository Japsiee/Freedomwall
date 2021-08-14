const express = require('express');
const mongoose = require('mongoose');
const app = express();
const myMongo = require('./mongodb');

const Shout = require('./models/shouts');
const Comment = require('./models/comments');

app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.urlencoded({ extended: true }));

const connectToMongoDB = async () => {
	await myMongo()

	.then(connection => {
		app.listen(process.env.PORT || 3000, () => {
			console.log('Listening');
		})
	})

	.catch(err => {
		console.log(err);
	})
}

connectToMongoDB();

app.get('/', (req, res) => {
	res.render('index', { title: 'Home' });
})

app.get('/shout', (req, res) => {
	Shout.find().sort({createdAt: -1})

	.then(result => {
		res.render('shout', { title: 'Shout', shouts: result });
	})
	.catch(err => {
		console.log(err);
	})
})

app.get('/shout/:id', (req, res) => {
	const id = req.params.id;
	Shout.findById(id)
	
	.then(shoutResult => {
		Comment.find()
		
		.then(commentResult => {
			res.render('shoutdetails', { title: 'Shout Details', singleShout: shoutResult, comments: commentResult });
		})
	})
	.catch(err => {
		res.render('404', { title: "Shout doesn't exist" });
	})

	Comment.findById(id)

})

app.post('/shout/:id', (req, res) => {
	const comment = new Comment(req.body);
	comment.save()

	.then(result => {
		res.redirect(`/shout/${req.body.toId}`);
	})
	.catch(err => {
		console.log(err);
		res.render('404', { title: "Shout doesn't exist" });
	})
})

app.get('/make/shout', (req, res) => {
	res.render('makeshout', { title: 'Make Shout' });
})

app.post('/shout', (req, res) => {
	const shout = new Shout(req.body)
	shout.save()

	.then(result => {
		res.redirect('shout');
	})
	.catch(err => {
		console.log(err);
	})
})

app.use((req,res) => {
	res.render('404', { title: '404' });
})