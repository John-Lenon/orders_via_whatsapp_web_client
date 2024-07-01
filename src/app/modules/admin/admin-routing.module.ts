import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent, 
    children: [
      { path: '', redirectTo: 'menu-management', pathMatch: 'full' },
      { path: 'menu-management', component: MenuManagementComponent }, 
      { path: 'users', component: UsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
