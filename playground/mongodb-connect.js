//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new MongoClient();
// console.log(obj);
var user = {name:'ldog', age:22}
var {name} = user; //object destructuring es6

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
	if(err){
		//return exits us from fnc so stops next line from running
		return console.log('unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// db.collection('Todos').insertOne({
	// 	text: 'something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined, 2));
	// });

	//insert new doc into Users collection (name, age, location)
	// db.collection('Users').insertOne({
	// 	name: 'Ldog',
	// 	age: 99,
	// 	location: 'Varrock'
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('cant insert into db', err);
	// 	}
	// 	console.log(result.ops[0]._id.getTimestamp());

	// });
	client.close();
});