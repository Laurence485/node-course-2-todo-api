const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/users');

// Todo.remove({}).then((result) =>{
// 	console.log(result);
// });

Todo.findByIdAndRemove('5bdf022370fac72fd50dfddf').then((todo) => {
	console.log(todo);
});
