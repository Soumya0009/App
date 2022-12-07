import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent,
    children:[]
  },
  {
    path:"",
    redirectTo:'login',
    pathMatch:'full'
  }
 
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
