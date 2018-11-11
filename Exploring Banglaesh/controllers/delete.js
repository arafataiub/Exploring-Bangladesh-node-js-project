var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/', function(request, response){
	
	userModel.delete(function(result){
		response.render('admin/userlist', {result});
	});

});

module.exports = router;