var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();


router.get('/', function(request, response){

	if(request.session.email)
	{
	
		var user_email = request.session.email;
		//console.log('session ' + user_email);

		userModel.getAdmin(user_email, function(result){
			//console.log(result);
			response.render('admin/admin_updateprofile', {result});
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

		userModel.updateAdmin(user, function(status){

			if(status){
				
				response.render('admin');

			}else{
				response.send('Error');
			}
			
		});

});

module.exports = router;