var express = require('express');
var bodyParser = require('body-parser'); //take json and convert to obj
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/users');

var app = express();

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

app.listen(3000, () => { 
	console.log('started on port 3000');
});



















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