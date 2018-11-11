var express = require('express');
var mysql = require('mysql');
//var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	if(request.session.email)
	{
	response.render('admin/index');
	}
	else
	{
		response.render('login/index');
	}
	
});

module.exports = router;