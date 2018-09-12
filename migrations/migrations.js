// npm install -g mysql-migrations
// migration.js for database seeding
// tutorial:  https://www.npmjs.com/package/mysql-migrations#prerequisites

var mysql = require('mysql');
var migration = require('mysql-migration');

var connection = mysql.createPool({
  connectionLimit : 10,
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'developer_search'
});

migration.init(connection, __dirname + '/migrations');