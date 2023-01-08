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
  constructor(private api:ApiserviceService){ }
  loginRead:any;
  ngOnInit():void{
    this.api.getAllUser().subscribe((res)=>{
      this.loginRead=res.data;
    })
  }
}
