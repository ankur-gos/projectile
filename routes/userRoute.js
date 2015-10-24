// userRoute.js
// Ankur Goswami

var express = require('express');
var router = express.Router();

// User presses link in email

router.get('/:key?', function (req, res, next) {
	if(req.params.key){
	    var session = req.session;
	    session.token = req.params.key;
		res.redirect('/')
	}
	else{
		next();
	}
});

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