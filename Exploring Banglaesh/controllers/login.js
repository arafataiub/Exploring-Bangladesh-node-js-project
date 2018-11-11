var express = require('express');
var mysql = require('mysql');
var session 	= require('express-session');
var userModel = require.main.require('./models/user_model');
var router = express.Router();



router.get('/', function(request, response){
	//console.log('session ' + request.session.email);
	if(request.session.user_type =='user')
	{
		response.render('user');
	}
	else if(request.session.user_type =='admin')
	{
		response.render('admin');
	}
	else{
	response.render('login/index');
	}
});

router.post('/', function(request, response){



	var user = {
		username : request.body.email,
		password : request.body.password
	};

	userModel.validate(user, function(status){
		if(status=='user'){
			//request.session.un = request.body.username;
			request.session.email=request.body.email;
			request.session.user_type=status;
			response.redirect('/user');
		}else if(status=='admin'){
			request.session.email=request.body.email;
			request.session.user_type=status;
			//console.log('session ' + request.session.status);
			response.redirect('/admin');
		}else{
			response.redirect('/login');
		}
	});

});
module.exports = router;