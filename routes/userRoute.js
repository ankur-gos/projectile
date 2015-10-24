// userRoute.js
// Ankur Goswami

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/verify', function(req, res){
	res.render('verify');
})

// POST email

router.post('/', function(req, res){
	res.render('verify');
})

// POST login

router.post('/login', function(req, res){
	res.render('verify');
})

module.exports = router;