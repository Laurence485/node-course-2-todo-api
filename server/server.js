const express = require('express');
const bodyParser = require('body-parser'); //take json and convert to obj
const {mongoose} = require('./db/mongoose');
const {ObjectID} = require('mongodb');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/users');

var app = express();
const port = process.env.PORT || 3000; //set if running on heroku but wont be set if running locally

app.use(bodyParser.json());

app.post('/todos', (req,res)=> {
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req,res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

// GET /todos/1234324 (using URL params)
app.get('/todos/:id', (req,res) => {
	var id = req.params.id;

	//validate id using isValid
	// 404 if not valid -> send back empty send
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
		console.log('todo found!');
	}).catch((e) => res.status(400).send());
});

app.delete('/todos/:id',(req,res) => {
	//get id
	var id = req.params.id;
	//validate id -> not valid? return 404
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}
	//remove todo by id
	Todo.findByIdAndDelete(id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e)=> res.status(400).send());
});

app.listen(port, () => { 
	console.log(`started on port ${port}`);
});

module.exports = {app};














///////////////////

// var newTodo = new Todo({
// 	text: 'Cook Dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('saved todo', doc);
// }, (e) => {
// 	console.log('unable to save todo', e);
// });


// var otherTodo = new Todo({
// 	text: 'bust nutz',
// 	completed: false
// });

// otherTodo.save().then((doc) => {
// 	console.log('saved todo', doc);
// }, (e) => {
// 	console.log('unable to save todo', e);
// });


//user
//email - required - trim it - set type string - set min length 1


// var user = new Userz({
// 	email:'bigboy@gg.com'
// });

// user.save().then((doc) => {
// 	console.log('user saved', doc);
// }, (e) => {
// 	console.log('unable to save user', e);
// });