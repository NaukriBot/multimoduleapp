import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ChangePasswordComponent } from './change-password.component';
import { ForgotPasswordComponent } from './forgot-password.component';


const routes: Routes = [
  {
    path:'auth/login',component:LoginComponent
  },
  {
    path:'auth/signup',component:SignupComponent
  },
  {
    path:'auth/change-passsword',component:ChangePasswordComponent
  },
  {
    path:'auth/forgot-password',component:ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
