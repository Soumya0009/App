import { Component,ViewChild } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-getemployee',
  templateUrl: './getemployee.component.html',
  styleUrls: ['./getemployee.component.css']
})
export class GetemployeeComponent {
  readUser: any;

  constructor(private api:ApiserviceService, private auth: AuthService){}

  getUser:any;
  ngOnInit():void{
    this.getAlldata();
   
  }

  //Delete Id
  deleteId(Employee_ID:any){
    // console.log(Employee_ID,"Selected Id");
    if(confirm('Are You Sureyou want to delete the Record?'))
    this.api.deleteData(Employee_ID).subscribe((res)=>{
      console.log(res,'Deleted Id No');

      // alert("Data Deleted Sucessfully");
      // Instance Delete
      this.getAlldata();
    });
  }

  getAlldata(){
    this.api.getAllUser().subscribe((res)=>{
      console.log('Get all user Data',res);
      this.getUser = res.data;
    });
  }
 
}
