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
  createUrl = "http://localhost:3000/add_employee";
  constructor(private http:HttpClient) { }

  // Get all data Observe..
  getAllUser():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  // Create Data
  createData(data:any):Observable<any>{
    // console.log(data,'Soumya');
    return this.http.post(`${this.createUrl}`,data);
  }
}
