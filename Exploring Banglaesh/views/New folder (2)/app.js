//DECLARATION
var express 		= require('express');
var bodyParser 		= require('body-parser');
var expressSession 	= require('express-session');
var cookieParser 	= require('cookie-parser');
var home 			= require('./controllers/home');
var admin			= require('./controllers/admin');
var user			= require('./controllers/user');
var login 			= require('./controllers/login');
//var logout 			= require('./controllers/logout');
var edit 			= require('./controllers/edit');
var registration = require('./controllers/registration');
var profile 			= require('./controllers/profile');
var details 			= require('./controllers/details');
var changepass			= require('./controllers/changepass');
var adminprofile 			= require('./controllers/adminprofile');
var adminchangepass			= require('./controllers/adminchangepass');

//var login = require('./controllers/login');
var app 			= express();

//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
//app.use(expressSession({secret: 'hhdhdhdhd', saveUninitialized: true, resave: false}));
//app.use(cookieParser());


//ROUTING
app.use('/registration', registration);
app.use('/login', login);
app.use('/admin', admin);
app.use('/user', user);
//app.use('/logout', logout);
app.use('/home', home);
app.use('/details', details);
app.use('/edit', edit);
app.use('/user/profile', profile);
app.use('/user/changepass', changepass);
app.use('/admin/profile', adminprofile);
app.use('/admin/changepass', adminchangepass);
app.use( express.static( "public" ) );

app.get('/', function(request, response){
	response.render('index');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server startead at 3000...");
});
