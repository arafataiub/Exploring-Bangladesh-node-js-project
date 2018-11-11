var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/edit/:id', function(request, response){
	
		var userId = request.params.id;

		userModel.get(userId, function(result){
			response.render('user/edit', {user: result});
		});

});


// router.post('/edit/:id', function(request, response){
	
// 		var user = {
// 			id 		: request.body.id,
// 			username: request.body.username,
// 			password: request.body.password,
// 			type	: request.body.type

// 		};

// 		console.log(user);

// 		userModel.update(user, function(status){

// 			if(status){
				
// 				response.redirect(request.body.id);
// 			}else{
// 				response.send('Error');
// 			}
			
// 		});

// });

module.exports = router;