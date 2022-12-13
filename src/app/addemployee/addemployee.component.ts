import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  constructor(){}
  ngOnInit():void{
  }
  employeeForm = new FormGroup({
    firstname: new FormControl("", [Validators.required]),
    middlename: new FormControl(""),
    lastname: new FormControl("",[Validators.required]),
    email: new FormControl(""),
    mobile: new FormControl(""),
    gender: new FormControl(""),
    employeeid: new FormControl(""),
    salery: new FormControl(""),
  });
  registerSubmited(){
    console.log(this.employeeForm);
  }
  get FirstName(): FormControl{
    return this.employeeForm.get("firstname") as FormControl;
  }
  get LastName(): FormControl{
    return this.employeeForm.get("lastname") as FormControl;
  }
 
}


