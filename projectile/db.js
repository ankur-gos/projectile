// db.js
// Ankur Goswami

var mongoose = require('mongoose');
var databaseURI = 'mongodb://localhost/freetime';
mongoose.connect(databaseURI);

mongoose.connection.on('connected', function(){
	console.log('Mongoose connection made to ' + databaseURI);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose default connection is disconnected.');
});

process.on('SIGINT', function(){
	mongoose.connection.close(function() {
		console.log('Mongoose default connection disconnected.')
		process.exit(0);
	});
});


require('../models/User')