import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarrinhoComponent } from '../../components/carrinho/carrinho.component';
import { MessageModalComponent } from 'src/app/shared/components/message-modal/message-modal.component';

@Component({
  selector: 'app-component-testes',
  templateUrl: './component-testes.component.html',
  styleUrls: ['./component-testes.component.css']
})
export class ComponentTestesComponent {

  constructor(private dialog: MatDialog) { }
  
  exibirCarrinho(){
    // Abre o Modal e atribui uma referência dele a variável "dialogRef"
    this.dialog.open(CarrinhoComponent);    
  }

  pedirParaConfirmarOperacao(){
    this.dialog.open(MessageModalComponent, {
      data: {
        textCancelButton: 'Não',
        textConfirmButton: 'Sim',
        textMessage: `Deseja continuar a operação? Se você decidir continuar com essa operação saiba que os seguintes registros serão modificados devido as alterações realizadas, 
        então.`,
        //textMessage: 'Tem certeza que deseja deletar o item?',
        fnConfirm: () => {
          alert('Operação confirmada!');
        }, 
        fnCancel: () => {
          alert('Operação cancelada!');
        }
      }
    });
  }
}
