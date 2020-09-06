const mysql = require('mysql');

const con = mysql.createConnection({
    host : "patientdb.c2lmccmuxyuo.eu-west-2.rds.amazonaws.com",
    user :  "admin",
    password : 'SC1234567',
    server : "localhost",
    port :  3306
});

con.connect(function (err) {
    if(err) throw err;
    console.log("Connected!");
    con.end();
});


