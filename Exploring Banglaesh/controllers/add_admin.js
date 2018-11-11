var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/', function(request, response){
	if(request.session.email)
	{
	response.render('admin/add_admin');
	}
	else
	{
		response.render('login/index');
	}
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
		userModel.insertAdmin(user, function(status){
			
			if(status == true){
				response.redirect('/admin');
			}else{
				response.send('Error in adding admin');
			}
			
		});
 	}
 	else{
 		response.send('Error in adding admin');
 	}

});

module.exports = router;