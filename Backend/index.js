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
    port:3335
});

// Check database connection
db.connect(err => {
    if (err){console.log('err')}
    console.log('Sucessfully connected with database!!!')
})

// Show/get all data of employee
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

// Show/get single data by id of employee
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

// Show/get all data of User
app.get('/user',(req,res)=>{
    // console.log("Get all elements");
    let qrr = `SELECT * FROM user`;
    db.query(qrr,(err,results)=>{
        if(err){
            console.log(err,"Error");
        }
        if(results.length>0){
            res.send({
                message: 'All data of User',
                data:results
            });
        }
    });
});

//Get Single Data Of User
app.get('/user/:Id',(req,res)=>{
    // console.log("Get all elements");
    let qrId = req.params.Id;
    let qr = `SELECT * FROM user where Id = ${qrId}`;
    db.query(qr,(err,results)=>{
        if(err){
            console.log(err,"Error");
        }
        if(results.length>0){
            res.send({
                message: 'All data of User',
                data:results
            });
        }else{
            res.send({
                message:"Data Not Found!!!"
            });
        }
    });
});

//show/get all data of department table
app.get('/add_department',(req,res)=>{
    //console.log("Get all elements");
    let rrr=`SELECT * FROM add_department`;
    db.query(rrr,(err,results)=>{
        if(err){
            console.log(err,"Error");
        }
        if(results.length>0){
            res.send({
                message:'All data of department',
                data:results
            });
        }
    });
});

//show/get single data by id of department
app.get('/add_department/:id',(req,res)=>{
    //console.log(req.params.id);
    let qrId=req.params.id;
    let qr=`SELECT * FROM add_department where id =${qrId}`;
    db.query(qr,(err,results)=>{
        if(err){
            console.log(err,'Error');
        }
        if(results.length > 0){
            res.send({
                message:'Get data by ID',
                data:results

            });

        }else{
            res.send({
                message:'Data not Found!!'
            })
        }
    })
})

// Show/get all data of task
app.get('/tbl_task',(req,res)=>{
    // console.log("Get all elements");
    let sss = `SELECT * FROM tbl_task`;
    db.query(sss,(err,results)=>{
        if(err){
            console.log(err,"Error");
        }
        if(results.length>0){
            res.send({
                message: 'All data ',
                data:results
            });
        }
    });
});

//show/get single data by id of task
app.get('/tbl_task/:id',(req,res)=>{
    //console.log(req.params.id);
    let qrId=req.params.id;
    let qr=`SELECT * FROM tbl_task where id =${qrId}`;
    db.query(qr,(err,results)=>{
        if(err){
            console.log(err,'Error');
        }
        if(results.length > 0){
            res.send({
                message:'Get data by ID',
                data:results

            });

        }else{
            res.send({
                message:'Data not Found!!'
            })
        }
    })
})

// Show/get all data of logincredentials
app.get('/login_credentials',(req,res)=>{
    // console.log("Get all elements");
    let mmm = `SELECT * FROM login_credentials`;
    db.query(mmm,(err,results)=>{
        if(err){
            console.log(err,"Error");
        }
        if(results.length>0){
            res.send({
                message: 'All data ',
                data:results
            });
        }
    });
});

// Show/get single data by id of logincredentials
app.get('/login_credentials/:ID',(req,res)=>{
    // console.log("Get all elements");
    let qrId = req.params.ID;
    let qr = `SELECT * FROM login_credentials where ID = ${qrId}`;
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


// Create/post data of employee
app.post('/add_employee',(req,res)=>{
    // console.log(req.body,'post data sucessfull');
    let firstName = req.body.First_Name;
    let middleName = req.body.Middle_Name;
    let lastName = req.body.Last_Name;
    let eMail = req.body.Email;
    let mobileNo = req.body.Mobile_No;
    let gender = req.body.Gender;
    let dob = req.body.DOB;
    let doj = req.body.DOJ;
    let salery = req.body.Salery;
    let status = req.body.Status;

    let qr = `insert into add_employee(First_Name,Middle_Name,Last_Name,Email,Mobile_No,Gender,Salery,DOB,DOJ,Status)
    value('${firstName}','${middleName}','${lastName}','${eMail}','${mobileNo}','${gender}','${salery}','${dob}','${doj}','${status}')`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err)}
            res.send({
                message:"Data Created Sucessfully",
                data:results
            });
    });
});

// Create/post data of User
app.post('/user',(req,res)=>{
    // console.log(req.body,'post data sucessfull');
    let employeeId = req.body.Employee_Id;
    let pass = req.body.Password;
    let createdOn = req.body.Created_On;
    let modifiedOn = req.body.Modified_On;
    let status = req.body.Status;

    let qr = `insert into user(Employee_Id,Password,Created_On,Modified_On,Status)
    value('${employeeId }','${pass}','${createdOn}','${modifiedOn}','${status}')`;
    db.query(qr,(err,results)=>{
        if(err){console.log(err)}
            res.send({
                message:"Data Created Sucessfully",
                data:results
            });
    });
});

// Create/post data of Login Credentials
app.post('/login_credentials',(req,res)=>{
    // console.log(req.body,'post data sucessfull');
    let name= req.body.Name;
    let password = req.body.Password;
    let Confirmpassword = req.body.Confirm_password;

    let pr = `insert into login_credentials(Name,Password,Confirm_password)
    value('${name}','${password}','${Confirmpassword}')`;
    db.query(pr,(err,results)=>{
        if(err){console.log(err)}
            res.send({
                message:"Data Created Sucessfully",
                data:results
            });
    });
});

//create/post data of department
app.post('/add_department',(req,res)=>{
    //console.log(req.body,'post data sucessfull');
    let departmentName=req.body.Department_Name;
    let status=req.body.Status;
 
    let rr = `insert into add_department(Department_Name,Status)
     value('${departmentName}','${status}')`;
     db.query(rr,(err,results)=>{
        if(err){console.log(err)}
            res.send({
             message:"Data Created Succeesfully",
             data:results
            });
     });    
 });

 //Create/Post data of Task
app.post('/tbl_task',(req,res)=>{
    //console.log(req.body,'post data sucessfull');
    let Name =req.body.Name;
    let Description=req.body.Description;
    let Department_ID=req.body.Department_ID;
    let Status=req.body.Status;
 
    let ss = `insert into tbl_task(Name,Description,Department_ID,Status)
     value('${Name}','${Description}','${Department_ID}','${Status}')`;
     db.query(ss,(err,results)=>{
        if(err){console.log(err)}
            res.send({
             message:"Data Created Succeesfully",
             data:results
            });
     });    
 });

// Update Employee Data 
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

// Update User Data 
app.post('/user/:Id',(req,res)=>{
    let userId = req.params.Id;
    let employeeId = req.body.Employee_Id;
    let pass = req.body.Password;
    let createdOn = req.body.Created_On;
    let modifiedOn = req.body.Modified_On;
    let status = req.body.Status;

    let qr = `UPDATE user set Employee_Id = '${employeeId }', Password='${pass}', Created_On='${createdOn}', Modified_On='${modifiedOn}', Status='${status}' where Id = '${userId}'`;
    db.query(qr,(err, results)=>{
        if(err){console.log(err)}
        res.send({
            message:'Data Updated Sucesessfully',
            data:results
        });
    });
});

// delete employee data
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