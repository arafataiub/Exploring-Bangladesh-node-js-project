var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/', function(request, response){

	if(request.session.email){
		var user_email = request.session.email;
		//console.log('session ' + user_email);

		userModel.getAll(function(result){
		response.render('admin/userlist', {result});
		});

			}
			else
			{
				response.render('login/index');
			}

	
	
	
});

router.get('/:id', function(request, response){

	
	
	userModel.delete(request.params.id, function(result){
		response.render('admin/index', {result});
	});

});

router.post('/', function(request, response){

	user=request.body.typeahead;
	//console.log(user);

	
	
	userModel.search(user,function(result){
		response.render('admin/userlist', {result});
	});

});



module.exports = router;