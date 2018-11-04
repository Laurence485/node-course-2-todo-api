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

	// db.collection('Todos').find({
	// 	_id: new ObjectID('5bdf091bf580d54982365714')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// });
	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('unable to fetch todos', err);
	// });
	db.collection('Users').find({name:'Ldog'}).toArray().then((docs) => {
		console.log(JSON.stringify(docs,undefined,4));
	}, function(error){
		console.log('unable to fetch user', err);
	});
	//client.close();
});