import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  opened = false;

  saveData(){
    let data = {name:'user', pass: 'abcd' };

    localStorage.setItem('session', JSON.stringify(data));
  }
}
