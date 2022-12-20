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
    port:3306
});


// Check database connection
db.connect(err => {
    if (err){console.log('err')}
    console.log('Sucessfully connected with database!!!')
})

// Get all data
app.get('/add_employee',(req,res)=>{
    // console.log("Get all elements");
    let qrr = `SELECT * FROM add_employee`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log(err,"Error");
        }
        if(results.length>0){
            res.send({
                massage: 'All data of employees',
                data:results
            });
        }
    });
});

// get single data by id
// app.get('/add_employee/:id',(req,res)=>{
//     // console.log(req.params.id);
//     let qrId = req.params.id;
//     let qr = `SELECT * FROM add_employee where id =${qrId}`;
//     db.query(qr,(err,results)=>{
//         if(err){
//             console.log(err,'Earror');
//         }
//         if(results.length > 0){
//             res.send({
//                 message:'Get data by Id',
//                 data:results
//             });
//         }else{
//             res.send({
//                 message:'Data not fond!!!'
//             })
//         }
//     })
// });

app.post('/add_employee',(req,res)=>{
    // console.log(req.body,'post data sucessfull');
    let employeeId = req.body.Employee_ID;
    let firstName = req.body.First_Name;
    let middleName = req.body.Middle_Name;
    let lastName = req.body.Last_Name;
    let eMail = req.body.Email;
    let mobileNo = req.body.Mobile_No;
    let gender = req.body.Gender;
    let salery = req.body.Salery;

    let qr = `insert into add_employee(Employee_ID,First_Name,Middle_Name,Last_Name,Email,Mobile_No,Gender,Salery)
    value('${employeeId}','${firstName}','${middleName}','${lastName}','${eMail}','${mobileNo}','${gender}','${salery}')`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err)}
            res.send({
                massage:"Data Created Sucessfully",
                data:results
            });
    })
})

app.listen(3000, ()=>{
    console.log("Server is running on 3000 PORT, Designed by Soumya");
});