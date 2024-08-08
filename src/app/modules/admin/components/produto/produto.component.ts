import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EnumStatusProduto } from 'src/app/modules/menu-restaurant/enums/enum-status-produto';
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
      value: {
        codigo: '2828',
        prioridade: 1,
        status: EnumStatusProduto.ATIVO,
        preco: 23.99,
        descricao: 'Temaki 11',
        nome: 'Temaki 11',
        caminhoImagem: 'teste/teste01',
      },
    },
    {
      viewValue: 'Produto 02',
      value: {
        codigo: '22222',
        prioridade: 1,
        status: EnumStatusProduto.ATIVO,
        preco: 222.99,
        descricao: 'Temaki 22',
        nome: 'Temaki 22',
        caminhoImagem: 'teste/teste01',
      },
    },
    {
      viewValue: 'Produto 03',
      value: {
        codigo: '3333',
        prioridade: 1,
        status: EnumStatusProduto.ATIVO,
        preco: 333.33,
        descricao: 'Temaki 33',
        nome: 'Temaki 33',
        caminhoImagem: 'teste/teste01',
      },
    },
  ];

  submitFormulario(): void {
    const novoProduto = this.getFormData<Produto>();
    this.httpService
      .post<Produto, any>(novoProduto, 'produto')
      .subscribe(() => {});
  }
}
