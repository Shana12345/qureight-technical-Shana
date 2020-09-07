var mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

var con = mysql.createConnection({
  host: "patientdb.c2lmccmuxyuo.eu-west-2.rds.amazonaws.com",
  user: "admin",
  password: "SC1234567",
  database: "patientdb",
  multipStatements: true
}); 

// GET
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM patient", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

//POST
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO patient (patient_id, patient_name, patient_height, patient_physician_note, patient_physician, dob) VALUES ('2', 'Emma', 5.7, 'out of bedrest and can leave', 'Dr Harris', '1983')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

