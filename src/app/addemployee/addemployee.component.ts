import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  // userForm!: FormGroup
  constructor(private api:ApiserviceService){}
  readUser:any;
  ngOnInit():void{
    this.api.getAllUser().subscribe((res)=>{
      console.log('Get all user Data',res);
      this.readUser = res.data;
    })
  }
  employeeForm = new FormGroup({
    'Mobile_No': new FormControl(""),
    'First_Name': new FormControl(""),
    'Middle_Name': new FormControl(""),
    'Last_Name': new FormControl(""),
    'Email': new FormControl(""),
    'Salery': new FormControl(""),
    'Gender': new FormControl("")
  });

  registerSubmited() {
   console.log(this.employeeForm.value);
    this.api.createData(this.employeeForm.value).subscribe((res)=>{
      console.log(res,'Data Added Sucessfully');
      this.employeeForm.reset();
      alert('Deta Added Sucseefully');
    })
    }
 
}


