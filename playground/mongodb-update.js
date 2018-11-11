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

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5bdf022370fac72fd50dfddf')}, {
	// 		$set: {
	// 			completed: true
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	}).then((result) => {
	// 		console.log(result);
	// 	});

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5bdf03560d9eb130a2629a53')}, {
			$inc: {
				age: 1
			}
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(result);
		});

	});

	