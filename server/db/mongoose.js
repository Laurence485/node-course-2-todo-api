var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

//ES6...property and variable with same name...can shorten it (destructuring)
module.exports = {mongoose};
