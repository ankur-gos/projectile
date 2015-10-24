// insertUser.js
// Ankur Goswami

var mongoose = require('mongoose');
var User = mongoose.model('User');
var hashCreator = require('./hashCreator');

exports.insertUser = function(email, callback){
	if (typeof email === 'string' || email instanceof String){
		if (!userExistsInDb(email)){
			var generatedHash = hashCreator.getHashKey(email);
			User.create({
				email: email,
				hash: generatedHash
			}, function(err, user){
				callback(err, user);
			});
		}
		else{
			console.log('insertUser.js: User exists in database');
			callback(new Error('Signup error: User exists'), null);
		}
	}
	else{
		console.log('insertUser.js: args invalid')
		callback(new Error('Invalid args', null);
	}
}

var userExistsInDb = function (email) {
	var user = User.findOne({ email: email }, function (err, user){
		if(user)
			return true;
		else
			return false;
	})
}