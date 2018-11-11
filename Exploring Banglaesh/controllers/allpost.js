var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();
var session 	= require('express-session');


router.get('/', function(request, response){

	if(request.session.email)
	{
	
		var user_email = request.session.email;
		console.log('session ' + user_email);

		userModel.getpost(user_email, function(result){
			response.render('user/allpost', {result});
			console.log('session ' + result);
		});
	}
	else
	{
		response.render('login');
	}

});

module.exports = router;