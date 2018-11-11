var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('registration/index');
});

router.post('/', function(request, response){

	var user = {
		name : request.body.name,
		email : request.body.email,
		phone : request.body.phone,
		password : request.body.password,
		cpassword : request.body.cpassword
	};

    if(user.password == user.cpassword){
		userModel.insert(user, function(status){
			
			if(status == true){
				response.redirect('/registration');
			}else{
				response.send('Error in adding user');
			}
			
		});
 	}
 	else{
 		response.send('Error in adding user');
 	}

});

module.exports = router;