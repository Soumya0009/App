import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-assigned-task',
  templateUrl: './assigned-task.component.html',
  styleUrls: ['./assigned-task.component.css']
})
export class AssignedTaskComponent {
    constructor (private api: ApiserviceService){ }
    readTasks:any;
    readUser:any;
    ngOnInit():void{
      this.api.gettaskdata().subscribe((res)=>{
        // console.log('Get all Data',res);
        this.readTasks = res.data;
      });
      this.api.getDepartmentData().subscribe((res)=>{
        this.readUser = res.data;
      });
    }
}
