import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';

@Component({
  selector: 'app-categoria-produto-admin',
  templateUrl: './categoria-produto-admin.component.html',
  styleUrl: './categoria-produto-admin.component.css',
})
export class CategoriaProdutoAdminComponent extends FormBase {
  constructor() {
    super();

    this.controlesFormulario = {
      nomeDaCategoria: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: {
          required: 'Esse campo é obrigatório',
        },
      },
    };
  }
}
