import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { UsersComponent } from './pages/users/users.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AdminHomeComponent, 
    MenuManagementComponent, 
    UsersComponent,
    ProdutoComponent
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
        
    CommonModule
  ],
  exports: [
    ProdutoComponent
  ]
})
export class AdminModule { }
