import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';
import { Empresa } from '../../model/empresa.interface';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css'],
})
export class FormEmpresaComponent extends FormBase {
  constructor(
    private httpClient: HttpClientService,
    private alertService: AlertService,
    private router: Router
  ) {
    super();

    this.controlesFormulario = {
      nome: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: { required: 'Esse campo é obrigatório' },
      },
      numero: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: {
          required: 'Esse campo é obrigatório',
        },
      },
      email: {
        controle: new FormControl('', [
          CustomValidator.required,
          CustomValidator.email,
        ]),
        mensagens: {
          required: 'Esse campo é obrigatório',
          email: 'Email inválido.',
        },
      },
    };
  }

  submitFormulario(): void {
    debugger;
    let form = this.getFormData<Empresa>();
  }
}
