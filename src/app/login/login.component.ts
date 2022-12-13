import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user:any
pass:any
  constructor(private route:Router){}
  ngOnInIt(): void{
  }
  login(){
    if(this.user=='user'&& this.pass=='123'){
      this.route.navigate(['home'])
    }else{
      alert("login failed")
    }
  }

}
