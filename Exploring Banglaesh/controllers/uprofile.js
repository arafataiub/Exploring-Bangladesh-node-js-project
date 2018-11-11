var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();


router.get('/', function(request, response){

	if(request.session.email)
	{
	
		var user_email = request.session.email;
		//console.log('session ' + user_email);

		userModel.get(user_email, function(result){
			response.render('user/profile', {result});
			//response.render('user/edit');
		});
	}
	else
	{
		response.render('login');
	}

});

module.exports = router;