var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user_model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('admin/changepass');
});

module.exports = router;