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
    firstname: new FormControl(""),
    middlename: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    mobile: new FormControl(""),
    gender: new FormControl(""),
    employeeid: new FormControl(""),
    salery: new FormControl(""),
  });

  registerSubmited() {
   console.log(this.employeeForm);
    }
 
}


