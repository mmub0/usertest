var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qpalzm1029',
    database: 'usertable'
});
db.connect();

module.exports = db;