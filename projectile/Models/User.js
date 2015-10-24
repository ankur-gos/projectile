// User.js
// Ankur Goswami

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.ObjectId;

var userSchema = new Schema({
	email: String,
	hash: String,
	groups: [ ObjectId ]
})