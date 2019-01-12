var express = require('express');
var app = express();

var mysql = require('mysql');

// connection with mysql database 
var connection = mysql.createConnection({
    host: 3000,

    user: "root",

    password:"greatness4",
    database: "burger_db"
});

app.get('/', function(req, res) {
    res.send('hi, beautiful');
})

app.listen(3000, function() {
    console.log("Listening Cuhz");
})