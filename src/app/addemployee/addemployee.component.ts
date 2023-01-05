import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  // userForm!: FormGroup
  constructor(private api:ApiserviceService, private router:ActivatedRoute){}
  readUser:any;
  errMsg:any;
  sucessMsg:any;
  getparamid:any;
  ngOnInit():void{
    this.getparamid = this.router.snapshot.paramMap.get('Employee_ID');
    this.api.getSingleData(this.getparamid).subscribe((res)=>{
      console.log(res,'selected data update..');
      this.employeeForm.patchValue({
        // Employee_ID: res.data[].Employee_ID,
        Mobile_No:res.data[0].Mobile_No,
        First_Name:res.data[0].First_Name,
        Middle_Name:res.data[0].Middle_Name,
        Last_Name:res.data[0].Last_Name,
        Email:res.data[0].Email,
        Salery:res.data[0].Salery,
        Gender:res.data[0].Gender,
        Status:res.data[0].Gender,
      });
    });
  }
  serchText:any;
  employeeForm = new FormGroup({
    'Mobile_No': new FormControl(""),
    'First_Name': new FormControl(""),
    'Middle_Name': new FormControl(""),
    'Last_Name': new FormControl(""),
    'Email': new FormControl(""),
    'Salery': new FormControl(""),
    'Gender': new FormControl(""),
    'Status': new FormControl("")
  });

  registerSubmited() {
   console.log(this.employeeForm.value);
    this.api.createData(this.employeeForm.value).subscribe((res)=>{
      console.log(res,'Data Added Sucessfully');
      this.employeeForm.reset();
      alert('Deta Added Sucseefully');
    })
    }
    
    registerUpdated() {
      // console.log(this.employeeForm.value);
      if(this.employeeForm.valid){
        this.api.updateData(this.employeeForm.value,this.getparamid).subscribe((res)=>{
          console.log(res,'Data Updated Sucessfully.');
          this.employeeForm.reset();
          alert('Deta Updated Sucseefully');
        })
      }else{
        this.errMsg = 'All fildes are required.'
      }
    }
}


