import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent {
  // userForm!: formGroup
  constructor(private api:ApiserviceService){}
  readUser:any;
  ngOnInit():void{
    this.api.getAllUser().subscribe((res)=>{
      console.log('Get all user Data',res);
      this.readUser = res.data;
    })
  }
  departmentForm = new FormGroup({
    'ID': new FormControl(""),
    'Department_Name': new FormControl(""),
    'Status':new FormControl("")
  });

  registerSubmited() {
   console.log(this.departmentForm.value);
   this.api.createData(this.departmentForm.value).subscribe((res)=>{
    console.log(res,'Data Added Sucessfully');
    this.departmentForm.reset();
    alert('Deta Added Sucseefully');
  })
    }
 


}