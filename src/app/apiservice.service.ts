import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  // createData(value: any) {
  //   throw new Error('Method not implemented.');
  // }
  apiUrl = "http://localhost:3000/add_employee";
  departmentUrl = "http://localhost:3000/add_department";
  createUrl = "http://localhost:3000/add_employee";
  DepartmentUrl = "http://localhost:3000/add_department";
  constructor(private http:HttpClient) { }

  // Get all data Observe..
  getAllUser():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }
  //Get department data
  getDepartmentData():Observable<any>{
    return this.http.get(`${this.departmentUrl}`);
  }

  // Create Data
  createData(data:any):Observable<any>{
    // console.log(data,'Soumya');
    return this.http.post(`${this.createUrl}`,data);
  }
  //Delete Data
  deleteData(Employee_ID:any):Observable<any>{
    let ids = Employee_ID;
    return this.http.delete(`${this.createUrl}/${ids}`);
  }
  // Update Data
  updateData(data:any,Employee_ID:any):Observable<any>{
    let ids = Employee_ID;
    return this.http.post(`${this.createUrl}/${ids}`,data)
  }
  //Get Single Data
  getSingleData(Employee_ID:any):Observable<any>{
    let ids = Employee_ID;
    return this.http.get(`${this.createUrl}/${ids}`);
  }
}
