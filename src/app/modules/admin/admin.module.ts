import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ProdutoComponent } from './components/produto/produto.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    MenuManagementComponent,
    UsersComponent,
    ProdutoComponent,
    SideNavComponent,
  ],
  imports: [SharedModule, AdminRoutingModule, CommonModule],
  exports: [ProdutoComponent],
})
export class AdminModule {}
