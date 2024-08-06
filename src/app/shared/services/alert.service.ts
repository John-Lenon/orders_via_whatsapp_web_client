import { Injectable } from '@angular/core';
import { AlertConfig } from '../models/alertConfig';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  showAlert: boolean = false;
  private _alertList: AlertConfig[] = [];

  set alertList(value: AlertConfig[]) {}

  get alertList(): AlertConfig[] {
    return this._alertList;
  }

  addNewAlert(alert: AlertConfig) {
    if (this._alertList.length === 0) {
      this._alertList.push(alert);
      setTimeout(() => {
        this.showAlert = true;
      }, 100);
    } else {
      this._alertList.push(alert);
    }
  }

  constructor() {}
}
