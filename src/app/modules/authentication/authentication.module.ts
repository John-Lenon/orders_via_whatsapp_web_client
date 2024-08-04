import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [AuthLoginComponent, AuthRegisterComponent, AuthHomeComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    MatCheckboxModule,
  ],
})
export class AuthenticationModule {}
