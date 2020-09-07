const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());


var mysqlConnection = mysql.createConnection({
    host : "localhost",
    user :  "admin",
    password : 'SC1234567',
});

mysqlConnection.connect((err)=>{
    if(!err)
        console.log('Connection success!');
    else
        console.log('Connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
})

app.listen(3000, ()=>console.log('Express server is running on port : 3000'));

app.get('/patient',(res,req)=>{
    mysqlConnection.query('SELECT * FROM patient', (err, rows, fields)=>{
        if(!err)
        console.log(rows);
        else
        console.log(err);
    })
})

app.post('/patient', (req, res) =>{
    if (req.query.patient_id && req.query.patient_name && req.query.patient_height && req.query.patient_physician_note && req.query.patient_physician && req.query.dob){
        console.log('Request recieved');
        con.connect(function(err){
            con.query(`INSERT INTO main.patient (patient_id, patient_name, patient_height, patient_physician_note, patient_physician, dob') VALUES('${req.query.patient_id}','${req.query.patient_name}','${req.query.patient_height}', '${req.query.patient_physician_note}', '${req.query.patient_physician}', '${req.query.dob}')`, function(err, result, fields){
                if (err) res.send(err);
                if (result) res.send({patient_id: req.query.patient_id, patient_name: req.query.patient_name, patient_height: req.query.patient_height, patient_physician_note: req.query.patient_physician_note, patient_physician: req.query.patient_physician, dob: req.query.dob})
                if (fields) console.log(fields);
            });
        });
        }else {
            console.log('Missing a parameter');
        }
});