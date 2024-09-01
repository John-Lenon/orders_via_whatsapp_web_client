import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesTitlesEnum } from './enums/pages-titles.enum';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CompanyManagementComponent } from './pages/company-management/company-management.component';
import { DeliveryAreaComponent } from './pages/delivery-area/delivery-area.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { NpsComponent } from './pages/nps/nps.component';
import { UsersComponent } from './pages/users/users.component';
import { RoutePathAdmin } from './utils/route-path-admin';

const routes: Routes = [
  {
    path: RoutePathAdmin.EMPTY,
    component: AdminHomeComponent,
    children: [
      {
        path: RoutePathAdmin.EMPTY,
        redirectTo: RoutePathAdmin.MENU_MANAGEMENT,
        pathMatch: 'full',
      },
      {
        path: RoutePathAdmin.MENU_MANAGEMENT,
        component: MenuManagementComponent,
      },
      { path: RoutePathAdmin.USERS, component: UsersComponent },
      {
        title: PagesTitlesEnum.manageCompany,
        path: RoutePathAdmin.MANAGE_COMPANY,
        component: CompanyManagementComponent,
      },
      {
        path: RoutePathAdmin.DELIVERY_AREA,
        component: DeliveryAreaComponent,
      },
      { path: RoutePathAdmin.NPS, component: NpsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
