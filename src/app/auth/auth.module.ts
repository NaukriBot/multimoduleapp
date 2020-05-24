import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { ChangePasswordComponent } from './change-password.component';
import { ForgotPasswordComponent } from './forgot-password.component';


@NgModule({
  declarations: [LoginComponent, SignupComponent, ChangePasswordComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
