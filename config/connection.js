// Set up Mysql connection 
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: 'greatness4',
    database: 'bird_db'
});
// make the connection with database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('connection as id: ' + connection.threadId);
});
// export connecton for our ORM to use.
module.exports = connection;