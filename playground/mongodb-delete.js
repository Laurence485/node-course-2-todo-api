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

	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=> {
	// 	console.log(result);
	// });
	db.collection('Todos').findOneAndDelete({_id: new ObjectID("5bdf091bf580d54982365714")}).then((result)=> {
	console.log(JSON.stringify(result,undefined,4));
	 });
});