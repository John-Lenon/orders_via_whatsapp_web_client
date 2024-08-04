import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarrinhoComponent } from '../../components/carrinho/carrinho.component';
import { MessageModalComponent } from 'src/app/shared/components/message-modal/message-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-component-testes',
  templateUrl: './component-testes.component.html',
  styleUrls: ['./component-testes.component.css'],
})
export class ComponentTestesComponent {
  constructor(private dialog: MatDialog, private _snackBar: MatSnackBar) {}

  exibirCarrinho() {
    // Abre o Modal e atribui uma referência dele a variável "dialogRef"
    this.dialog.open(CarrinhoComponent);
  }

  pedirParaConfirmarOperacao() {
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
        },
      },
    });
  }

  showSnackBar(): void {
    this._snackBar.openFromComponent(AlertComponent, {
      //duration: 1 * 1000,
    });
  }
}
