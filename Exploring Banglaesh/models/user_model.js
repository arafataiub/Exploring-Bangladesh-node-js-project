var db = require('./ebdb');

module.exports={
	
	/*get: function(userId, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	}
*/
	get: function(userId, callback){
		var sql = "select * from user_details where user_email=?";
		db.getResult(sql, [userId], function(result){
			console.log(result);
			callback(result[0]);
		});
	},

	search: function(userId, callback){
		var sql = "select * from user_details where user_name=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result);
		});
	},

	getAdmin: function(userId, callback){
		var sql = "select * from admin_details where Email=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(callback){
		var sql = "SELECT * FROM user_details";
		db.getResult(sql,[], function(result){
			callback(result);
		});
	},

	getpost: function(userId, callback){
		var sql = "select * from post where user_email='"+userId+"'";
		db.getResult(sql, [], function(result){
			console.log(result);
			callback(result[0]);
		});
	},

	getAllPost: function(callback){
		var sql = "SELECT * FROM post";
		db.getResult(sql,[], function(result){
			callback(result);
		});
	},

	validate: function(user, callback){
		var sql = "select * from user where user_email=? and user_password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			
			if(result.length > 0){
				callback(result[0].user_type);
			}else{
				callback(false);
			}
		});
	},

	insert: function(user, callback){

		var sql1 = "INSERT INTO user values(?,?,'user')";

		var sql = "INSERT INTO user_details values(?,null,?, ?,?)";
		db.execute(sql, [user.name, user.email, user.phone,user.password], function(success){
			
				db.execute(sql1, [user.email,user.password],function(success){
				//callback(success);
			});
			callback(success);
		});

	},


	insertAdmin: function(user, callback){

		var sql1 = "INSERT INTO user values(?,?,'admin')";

		var sql = "INSERT INTO admin_details values(?,null,?, ?,?)";
		db.execute(sql, [user.name, user.email, user.phone,user.password], function(success){
			
				db.execute(sql1, [user.email,user.password],function(success){
				//callback(success);
			});
			callback(success);
		});

	},

	update: function(user, callback){
		var sql = "UPDATE user_details set user_name=?, user_email=?, user_phoneno=? where user_email=?";
	
		db.execute(sql, [user.username, user.email, user.phone,user.oldmail], function(status){
			callback(status);
		});
	},
	updateAdmin: function(user, callback){
		var sql1 = "update user set user_email=? where user_email=?";
		var sql = "UPDATE admin_details set name=?, Email=?, phone=? where Email=?";
	
		db.execute(sql, [user.username, user.email, user.phone,user.oldmail], function(status){
			db.execute(sql1, [user.email,user.oldmail], function(status){
			//callback(status);
		});
			callback(status);
		});
	},

	updateupass: function(user, callback){
		var sql1 = "UPDATE user set user_password=? where user_email=?";
	
		


		var sql = "UPDATE user_details set user_password=? where user_email=?";
	
		db.execute(sql, [user.password, user.email], function(status){
			db.execute(sql1, [user.password, user.email],function(status){
				//callback(status);
			});
			callback(status);
		});
	},

	updateupassAdmin: function(user, callback){
		var sql1 = "UPDATE user set user_password=? where user_email=?";
	
		


		var sql = "UPDATE admin_details set password=? where Email=?";
	
		db.execute(sql, [user.password, user.email], function(status){
			db.execute(sql1, [user.password, user.email],function(status){
				//callback(status);
			});
			callback(status);
		});
	},

	post: function(user, callback){

		

		var sql = "INSERT INTO post values(?,null,?, ?)";
		db.execute(sql, [user.email, user.title, user.details], function(success){
			
			callback(success);
		});

	},

	delete: function(user, callback){
		var sql = "DELETE from user_details where user_email=?";
	
		db.execute(sql, [user] , function(status){
			callback(status);
		});
	},

	deletePost: function(user, callback){
		var sql = "DELETE from post where post_id=?";
	
		db.execute(sql, [user] , function(status){
			callback(status);
		});
	},
}	