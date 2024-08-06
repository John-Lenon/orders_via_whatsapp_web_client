import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CarrinhoComponent } from '../../components/carrinho/carrinho.component';
import { MessageModalComponent } from 'src/app/shared/components/message-modal/message-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';
import { AlertConfig } from 'src/app/shared/models/alertConfig';
import { AlertType } from 'src/app/shared/enums/alertType';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-component-testes',
  templateUrl: './component-testes.component.html',
  styleUrls: ['./component-testes.component.css'],
})
export class ComponentTestesComponent {
  showAlert: boolean = false;

  constructor(
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private alertService: AlertService
  ) {}

  listaAlertas: AlertConfig[] = [
    {
      type: AlertType.INFORMATION,
      text: 'Essa é uma informação de teste',
    },
    {
      type: AlertType.SUCCESS,
      text: 'Parabéns houve sucesso na operação',
    },
    {
      type: AlertType.WARNING,
      text: 'Desculpe mas ocorreu um alerta aqui...',
    },
    {
      type: AlertType.ERROR,
      text: 'Houve um erro interno no servidor',
    },
  ];

  novoAlerta() {
    this.alertService.addNewAlert({
      type: AlertType.WARNING,
      text: 'Ocorreu um novo erro',
    });
  }

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
