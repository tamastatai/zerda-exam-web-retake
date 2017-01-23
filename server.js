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

connection.connect(function (err) {
  if (err) {
    console.log('Error connecting to database', err);
    return;
  }
  console.log('Server up and running');
});

app.use(bodyParser.json());
app.use(express.static('client'));

app.post('/turnomatic', function(req, res) {
  if (true) {
    var data = {
      "status": "ok",
      "number": req.body.case
    };
  } else {
    data = {
      "status": "error",
      "message": "server error, please find a member of staff to get your number"
    }
  }

  connection.query('INSERT INTO cases (case_type) VALUES (?)', [req.body.case], function (err, rows) {
    if (err) throw err;
  });

  var serverResponse = data;
  res.status(200).send(JSON.stringify(serverResponse));
});


app.listen(3000);
