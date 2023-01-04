const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());

// Connecting to Mysql Database
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'app',
    port:3306//3335
});


// Check database connection
db.connect(err => {
    if (err){console.log('err')}
    console.log('Sucessfully connected with database!!!')
})

// Show all data of employee
app.get('/add_employee',(req,res)=>{
    // console.log("Get all elements");
    let qrr = `SELECT * FROM add_employee`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log(err,"Error");
        }
        if(results.length>0){
            res.send({
                message: 'All data of employees',
                data:results
            });
        }
    });
});

// Show single data by id of employee
app.get('/add_employee/:Employee_ID',(req,res)=>{
    // console.log("Get all elements");
    let qrId = req.params.Employee_ID;
    let qr = `SELECT * FROM add_employee where Employee_ID = ${qrId}`;
    db.query(qr,(err,results)=>{
        if(err){
            console.log(err,"Error");
        }
        if(results.length>0){
            res.send({
                message: 'All data of employees',
                data:results
            });
        }else{
            res.send({
                message:"Data Not Found!!!"
            });
        }
    });
});


// Create data of employee
app.post('/add_employee',(req,res)=>{
    // console.log(req.body,'post data sucessfull');
    let firstName = req.body.First_Name;
    let middleName = req.body.Middle_Name;
    let lastName = req.body.Last_Name;
    let eMail = req.body.Email;
    let mobileNo = req.body.Mobile_No;
    let gender = req.body.Gender;
    let salery = req.body.Salery;

    let qr = `insert into add_employee(First_Name,Middle_Name,Last_Name,Email,Mobile_No,Gender,Salery)
    value('${firstName}','${middleName}','${lastName}','${eMail}','${mobileNo}','${gender}','${salery}')`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err)}
            res.send({
                message:"Data Created Sucessfully",
                data:results
            });
    });
});

// Update Data
app.post('/add_employee/:Employee_ID',(req,res)=>{

    let uId = req.params.Employee_ID;
    let firstName = req.body.First_Name;
    let middleName = req.body.Middle_Name;
    let lastName = req.body.Last_Name;
    let eMail = req.body.Email;
    let mobileNo = req.body.Mobile_No;
    let gender = req.body.Gender;
    let salery = req.body.Salery;

    let qr = `UPDATE add_employee set First_Name = '${firstName}', Middle_Name = '${middleName}', Last_Name = '${lastName}', Email = '${eMail}', Mobile_No = '${mobileNo}', Gender = '${gender}',Salery = '${salery}' where Employee_ID = '${uId}'`;
    db.query(qr,(err, results)=>{
        if(err){console.log(err)}
        res.send({
            message:'Data Updated Sucesessfully',
            data:results
        });
    });
});

// delete data
    app.delete('/add_employee/:Employee_ID',(req,res)=>{
        let uID = req.params.Employee_ID;
        let qr = `delete from add_employee where Employee_ID = '${uID}'`;
        db.query(qr,(err,results)=>{
            if (err){console.log(err)}
            res.send({
                message:"Data Deleted Sucessfully!!!"
            });
        });
    });

app.listen(3000, ()=>{
    console.log("Server is running on 3000 PORT, Designed by Soumya");
});