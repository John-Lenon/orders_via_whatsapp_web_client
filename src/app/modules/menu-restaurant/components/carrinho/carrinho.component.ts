import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  confirmarClick(modalRef: MatDialogRef<any>): void {      
    modalRef?.close();
  }

  cancelarClick(): void {
    
  }
}
