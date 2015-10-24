// EmailSender.js
// Ankur Goswami

var aws = require('aws-sdk');

exports.sendEmail = function(){
	aws.config.loadFromPath('config.json');
	var ses = new aws.SES({apiVersion: '2012-12-01'});
	var to = ['agoswam3@ucsc.edu'];

	var from = 'agoswam3@ucsc.edu';

	ses.sendEmail({
		Source: from,
		Destination: { ToAddresses: to },
		Message: {
			Subject: {
				Data: 'Hello world!'
			},
			Body: {
				Text: {
					Data: 'The email has landed'
				}
			}
		}
	}, function (err, data){
			if (err) throw err
			console.log('Email send\n');
			console.log(data)
	})
}

exports.sendEmailURL = function(email, url){
	aws.config.loadFromPath('config.json');
	var ses = new aws.SES({apiVersion: '2012-12-01'});
	var to = [email];
	var from = 'agoswam3@ucsc.edu';

	ses.sendEmail({
		Source: from,
		Destination: { ToAddresses: to },
		Message: {
			Subject: {
				Data: 'freetime Verification Email!'
			},
			Body: {
				Text: {
					Data: url
				}
			}
		}
	}, function (err, data){
			if (err) throw err
			console.log('Email sent\n');
	})
}