import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRestaurantComponent } from './pages/menu-restaurant/menu-restaurant.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ComponentTestesComponent } from './pages/component-testes/component-testes.component';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { ProdutoTableTestComponent } from './components/produto-table-test/produto-table-test.component';
import { AdminModule } from '../admin/admin.module';
import { MenuRestaurantRoutingModule } from './menu-restaurant-routing.module';


@NgModule({
  declarations: [
    MenuRestaurantComponent,
    CarrinhoComponent,
    ComponentTestesComponent,
    CardProdutoComponent,
    ProdutoTableTestComponent
  ],
  imports: [
    // user code
    MenuRestaurantRoutingModule,
    SharedModule, 
    
    // framework
    MatButtonModule, 
    MatDialogModule,
    CommonModule, 
    AdminModule
  ], 

  providers: [
    { 
      provide: MAT_DIALOG_DATA,
      useValue: {} 
    }
  ]
})
export class MenuRestaurantModule { }
