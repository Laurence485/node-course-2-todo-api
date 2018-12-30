var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

//ES6...property and variable with same name...can shorten it (destructuring)
module.exports = {mongoose};


