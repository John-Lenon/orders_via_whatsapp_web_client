import { Component } from '@angular/core';
import { AlertType } from '../../enums/alertType';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  [x: string]: any;
  alertColors: any = {
    1: 'blue',
    2: 'rgb(93 201 120)',
    4: 'rgb(255 162 0)',
    5: 'rgb(255 99 99)',
  };

  alertTitle: any = {
    1: 'Informação',
    2: 'Sucesso',
    4: 'Alerta',
    5: 'Erro Interno',
  };

  constructor(public alertService: AlertService) {}

  closeAlert(): void {
    this.alertService.alertList.pop();
    if (this.alertService.alertList.length === 0)
      this.alertService.showAlert = false;
  }
}
