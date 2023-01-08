import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { AdddepartmentComponent } from './adddepartment/adddepartment.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { ErrorcomeComponent } from './errorcome/errorcome.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { LogincredentialsComponent } from './logincredentials/logincredentials.component';

const routes: Routes = [

  
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"addemployee",
        component:AddemployeeComponent
       },
      {
        path:"addemployee/:Employee_ID",
        component:AddemployeeComponent
       },
       {
        path:"adddepartment",
        component:AdddepartmentComponent
       },
       {
        path:"user",
        component:UserComponent
      },
      {
        path:"addtask",
        component:AddtaskComponent
       },
       {
        path:"activity",
        component:ActivityComponent
       },
       {
        path:"addcomment",
        component:AddcommentComponent
       },
       {
          path:"getemployee",
          component:GetemployeeComponent
         },
         {
          path:"logincredentials",
          component:LogincredentialsComponent
          }
    ]
  },
  {
    path:"",
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:"**",
    component:ErrorcomeComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
