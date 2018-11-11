var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('user/post');
});


router.post('/', function(request, response){
	//response.render('user/post');
	var user ={
		email: request.session.email,
		title: request.body.title,
		details: request.body.description
	};

	userModel.post(user, function(status){

			if(status){
				
				response.render('user');

			}else{
				response.send('Error');
			}
			
		});
});

module.exports = router;