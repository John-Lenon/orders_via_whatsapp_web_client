import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EnumStatusProduto } from 'src/app/modules/menu-restaurant/enumeradores/enum-status-produto';
import { Produto } from 'src/app/modules/menu-restaurant/models/produto';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { OptionToSelectList } from 'src/app/shared/models/item-select-list';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent extends FormBase {
  constructor() {
    super();

    this.controlesFormulario = {
      nome: {
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
          email: 'E-mail inválido',
        },
      },
      produtoEscolhido: {
        controle: new FormControl('', [
          CustomValidator.requiredForSingleSelectList,
        ]),
        mensagens: {
          requiredForSingleSelectList: 'Esse campo é obrigatório',
        },
      },
      multiplosProdutos: {
        controle: new FormControl('', [
          CustomValidator.requiredForMultipleSelectList,
        ]),
        mensagens: {
          requiredForMultipleSelectList: 'Esse campo é obrigatório',
        },
      },
      valorDoProduto: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: {
          required: 'Esse campo é obrigatório',
        },
      },
      dataInicioOperacao: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: {
          required: 'Esse campo é obrigatório',
        },
      },
      horarioFuncionamento: {
        controle: new FormControl('', [CustomValidator.required]),
        mensagens: {
          required: 'Campo Obrigatório',
        },
      },
    };
  }

  listaDeProdutos: OptionToSelectList[] = [
    { value: 1, viewValue: 'Teclaro Gamer' },
    { value: 2, viewValue: 'Computador' },
    { value: 3, viewValue: 'Tablet Galaxy S10' },
  ];

  listaMultiplosProdutos: OptionToSelectList[] = [
    {
      viewValue: 'Produto 01',
      value: new Produto(
        '2828',
        1,
        EnumStatusProduto.ATIVO,
        23.99,
        'Temaki 11',
        'Temaki 11',
        'teste/teste01'
      ),
    },
    {
      viewValue: 'Produto 02',
      value: new Produto(
        '2222',
        2,
        EnumStatusProduto.ATIVO,
        988.99,
        'Temaki 02',
        'Temaki 02',
        'teste/teste01'
      ),
    },
    {
      viewValue: 'Produto 03',
      value: new Produto(
        '33333',
        3,
        EnumStatusProduto.ATIVO,
        1378.99,
        'Temaki 03',
        'Temaki 03',
        'teste/teste01'
      ),
    },
  ];

  submitFormulario(): void {
    const novoProduto = this.getFormData<Produto>();
    this.httpService
      .post<Produto, any>(novoProduto, 'produto')
      .subscribe(() => {});
  }
}
