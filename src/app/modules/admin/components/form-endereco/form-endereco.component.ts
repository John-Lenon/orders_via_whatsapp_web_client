import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { Empresa } from 'src/app/modules/menu-restaurant/models/empresa';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';

@Component({
  selector: 'app-form-endereco',
  templateUrl: './form-endereco.component.html',
  styleUrls: ['./form-endereco.component.css'],
})
export class FormEnderecoComponent extends FormBase {
  constructor(
    private httpClient: HttpClientService,
    private alertService: AlertService,
    private router: Router
  ) {
    super();

    this.controlesFormulario = {
      cep: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: { required: 'Esse campo é obrigatório' },
      },
      estado: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: { required: 'Esse campo é obrigatório' },
      },
      bairro: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: { required: 'Esse campo é obrigatório' },
      },
      cidade: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: { required: 'Esse campo é obrigatório' },
      },
      rua: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: { required: 'Esse campo é obrigatório' },
      },
      numero: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: { required: 'Esse campo é obrigatório' },
      },
      complemento: {
        controle: new FormControl(''),
      },
    };
  }

  submitFormulario(): void {
    debugger;
    let form = this.getFormData<Empresa>();
  }
}
