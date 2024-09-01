import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { FormEmpresaComponent } from './components/form-empresa/form-empresa.component';
import { FormEnderecoComponent } from './components/form-endereco/form-endereco.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { CompanyManagementComponent } from './pages/company-management/company-management.component';
import { MenuManagementComponent } from './pages/menu-management/menu-management.component';
import { UsersComponent } from './pages/users/users.component';
import { ProdutoAdminComponent } from './components/produto-admin/produto-admin.component';
import { CategoriaProdutoAdminComponent } from './components/categoria-produto-admin/categoria-produto-admin.component';

@NgModule({
  declarations: [
    AdminHomeComponent,
    MenuManagementComponent,
    CompanyManagementComponent,
    UsersComponent,
    ProdutoComponent,
    SideNavComponent,
    SubTitleComponent,
    ProdutoAdminComponent,
    CategoriaProdutoAdminComponent,
    FormEmpresaComponent,
    FormEnderecoComponent,
  ],
  imports: [
    SharedModule,
    AdminRoutingModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
  ],
  exports: [ProdutoComponent],
})
export class AdminModule {}
