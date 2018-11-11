var express = require('express');
var mysql = require('mysql');
//var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('index');
});

router.post('/', function(request, response){
	response.render('index');
});

module.exports = router;