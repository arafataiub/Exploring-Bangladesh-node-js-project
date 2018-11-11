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
			response.render('user/edit', {result});
			console.log(result);
			//response.render('user/edit');
		});
	}
	else
	{
		response.render('login');
	}

});




router.post('/', function(request, response){
	
		var user = {
			username: request.body.name,
			email: request.body.email,
			phone	: request.body.phone,
			oldmail: request.session.email

		};
		request.session.email=user.email;

		//console.log(user);

		userModel.update(user, function(status){

			if(status){
				
				response.render('user');

			}else{
				response.send('Error');
			}
			
		});

});

module.exports = router;