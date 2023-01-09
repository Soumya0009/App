import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-logincredentials',
  templateUrl: './logincredentials.component.html',
  styleUrls: ['./logincredentials.component.css']
})
export class LogincredentialsComponent {

  
  constructor(private api:ApiserviceService, private router:ActivatedRoute){}
  [x: string]: any;
  loginRead:any;
  getparamid:any;
  logincredentialsForm: any;

  ngOnInit():void{
    this.api.getAllUser().subscribe((res)=>{
      this.loginRead=res.data;
    })
  }
  serchText:any;
  logincredentialsform = new FormGroup({
    'Name': new FormControl(""),
    'Password': new FormControl(""),
    'Confirm_password': new FormControl(""),
  });

  registerSubmited() {
    console.log(this.logincredentialsform.value);
     this.api.createlogincredentialsdata(this.logincredentialsform.value).subscribe((res)=>{
       console.log(res,'Data Added Sucessfully');
       this.logincredentialsform.reset();
       alert('login Successfull');
     })
     }

}
