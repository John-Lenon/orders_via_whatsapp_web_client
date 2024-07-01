import { Component } from '@angular/core';
import { CarrinhoComponent } from '../../components/carrinho/carrinho.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-restaurant',
  templateUrl: './menu-restaurant.component.html',
  styleUrls: ['./menu-restaurant.component.css']
})
export class MenuRestaurantComponent {

  constructor(private dialog: MatDialog) { }
}
