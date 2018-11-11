//DECLARATION
var express 		= require('express');
var bodyParser 		= require('body-parser');
var session 	    = require('express-session');
var cookieParser 	= require('cookie-parser');
var home 			= require('./controllers/home');
var admin			= require('./controllers/admin');
var user			= require('./controllers/user');
var login 			= require('./controllers/login');
var logout 			= require('./controllers/logout');
var edit 			= require('./controllers/edit');
var uedit 			= require('./controllers/uedit');
var post			= require('./controllers/post');
var uprofile		= require('./controllers/uprofile');
var allpost			= require('./controllers/allpost');
var admin_updateprofile			= require('./controllers/admin_updateprofile');
var userlist 			= require('./controllers/userlist');
var admin_postlist 			= require('./controllers/admin_postlist');
var registration = require('./controllers/registration');
var add_admin = require('./controllers/add_admin');
var details 			= require('./controllers/details');
var changepass			= require('./controllers/changepass');
var admin_changepass			= require('./controllers/admin_changepass');

//var login = require('./controllers/login');
var app 			= express();

//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'iloveu', saveUninitialized: true, resave: false}));
//app.use(cookieParser());




//ROUTING
app.use('/registration', registration);
app.use('/add_admin', add_admin);
app.use('/login', login);
app.use('/admin', admin);
app.use('/logout', logout);
app.use('/user', user);
app.use('/admin_updateprofile', admin_updateprofile);
app.use('/profile', uprofile);
app.use('/allpost', allpost);

app.use('/changepass', changepass);
app.use('/admin_changepass', admin_changepass);
//app.use('/logout', logout);
app.use('/home', home);
app.use('/details', details);
app.use('/edit', edit);
app.use('/uedit', uedit);
app.use('/userlist', userlist);
app.use('/admin_postlist',admin_postlist );
app.use('/post', post);
app.use( express.static( "public" ) );

app.get('/', function(request, response){
	response.render('index');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server startead at 3000...");
});
