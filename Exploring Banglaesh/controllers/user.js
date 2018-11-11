var express = require('express');
var mysql = require('mysql');
//var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('user/index');
});

module.exports = router;