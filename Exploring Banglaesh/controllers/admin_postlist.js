var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/', function(request, response){

	if(request.session.email)
		{
			userModel.getAllPost(function(result){
			response.render('admin/postlist', {result});
			});
		}
		else
		{
			response.render('login/index');
		}

	
	
	

});

router.get('/:id', function(request, response){

	
	
	userModel.deletePost(request.params.id, function(result){
		response.render('admin/index', {result});
	});

});



module.exports = router;