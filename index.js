var mysql = require('mysql');

var con = mysql.createConnection({
  host: "patientdb.c2lmccmuxyuo.eu-west-2.rds.amazonaws.com",
  user: "admin",
  password: "SC1234567",
  database: "patientdb"
}); 


con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM patient", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  }); 
  
