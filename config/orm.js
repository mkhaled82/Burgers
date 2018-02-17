var connection = require('./connection.js');

var orm = {
	all:function(tableInput, callback){
		connection.query('SELECT * FROM '+tableInput+ ';', function(err,
			result){
			if(err) throw err;
			callback(result)
		})
	}
}

module.exports =orm;