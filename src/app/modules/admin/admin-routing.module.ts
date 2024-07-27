import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CompanyManagementComponent } from './pages/company-management/company-management.component';
import { DeliveryAreaComponent } from './pages/delivery-area/delivery-area.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { NpsComponent } from './pages/nps/nps.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      { path: '', redirectTo: 'menu-management', pathMatch: 'full' },
      { path: 'menu-management', component: MenuManagementComponent },
      { path: 'users', component: UsersComponent },
      { path: 'manage-company', component: CompanyManagementComponent },
      { path: 'delivery-area', component: DeliveryAreaComponent },
      { path: 'nps', component: NpsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
