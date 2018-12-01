const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/users');

var id = '5c0313a21f138d2be9b0da62';
var userId = '5be8a1c9251bef0578e27844';

if(!ObjectID.isValid(id)) {
	console.log('ID not valid');
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('ID not found');
// 	}
// 	console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.find({
	_id:userId
}).then((user) => {
	console.log('Users', user);
});


User.findById(userId).then((user) => {
	if(!user) {
		return console.log('user not found!');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
})

