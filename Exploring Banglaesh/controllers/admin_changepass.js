var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

// router.get('/', function(request, response){
// 	response.render('user/changepass');
// });


router.get('/', function(request, response){

		if(request.session.email)
		{
			var user_email = request.session.email;
			//console.log('session ' + user_email);

			userModel.getAdmin(user_email, function(result){
				response.render('admin/admin_changepass', {result});
				//response.render('user/edit');
			});
		}
		else
		{
			response.render('login/index');
		}
	
		
	});


router.post('/', function(request, response){

		if(request.body.password==request.body.cpassword)
		{
	
		var user = {
			email : request.session.email,
			password: request.body.password
		};


		//console.log('session ' + user_email);

		userModel.updateupassAdmin(user, function(result){
			response.render('admin');
			//response.render('user/edit');
		});
	}
	else{
		response.render('admin_changepass');
	}
});
module.exports = router;