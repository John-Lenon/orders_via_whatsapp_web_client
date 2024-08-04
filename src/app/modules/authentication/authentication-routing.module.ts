import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';
import { RoutePathAuth } from './utils/route-path-auth';

const routes: Routes = [
  {
    path: '',
    component: AuthHomeComponent,
    children: [
      {
        path: RoutePathAuth.EMPTY,
        redirectTo: RoutePathAuth.LOGIN,
        pathMatch: 'full',
      },
      { path: RoutePathAuth.LOGIN, component: AuthLoginComponent },
      { path: RoutePathAuth.REGISTER, component: AuthRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
