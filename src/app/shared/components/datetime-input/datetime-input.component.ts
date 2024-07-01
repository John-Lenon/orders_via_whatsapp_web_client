import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { InputBase } from '../base/input-base';
import { CustomErrorStateMatcher } from '../../utils/custom-error-state-matcher';
import { FormControlConfig } from '../base/form-base';
import { CustomValidator } from '../../utils/custom-validator';

@Component({
  selector: 'app-datetime-input',
  templateUrl: './datetime-input.component.html',
  styleUrls: ['./datetime-input.component.css']
})
export class DatetimeInputComponent extends InputBase implements OnInit {

  @Input()
  formControlConfig!: FormControlConfig;

  @Input()
  label?: string;

  ngOnInit(): void {
    this.formControlConfig.controle.addValidators(CustomValidator.dateValidatorDDMMYYYY);
    this.formControlConfig.mensagens['dateValidatorDDMMYYYY'] = 'Formato de data inválido';
    this.matcher = new CustomErrorStateMatcher(this.formControlConfig, this);
  }

  override onFocusout(): void {
    if(this.mensagemErroAtual)
      this.mensagemErroAplicada = this.mensagemErroAtual;
    else 
      this.mensagemErroAplicada = '';
  }

  onDateInput(event: any) {
    if(!this.formControlConfig.controle.errors){
      this.mensagemErroAplicada = '';
    }
  }

}
