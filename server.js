'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection( {
  host: 'localhost',
  user: 'root',
  password: 'ep1337',
  database: 'turnomatic'
});

connection.connect();

app.use(bodyParser.json());
app.use(express.static('client'));




app.listen(3000);
