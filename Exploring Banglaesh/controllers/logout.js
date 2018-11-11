var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/', function(request, response){

	request.session.email = "";
	request.session.user_type = "";
	response.redirect('login');
});


module.exports = router;