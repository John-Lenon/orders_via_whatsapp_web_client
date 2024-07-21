import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthHomeComponent, 
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' }, 
      { path: 'login', component: AuthLoginComponent }, 
      { path: 'register', component: AuthRegisterComponent }
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
