import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';
import { Address } from '../../model/address.interface';
import { AddressService } from '../../services/company/address.service';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css'],
})
export class FormAddressComponent extends FormBase implements OnInit {
  endereco: Address;

  constructor(private addressService: AddressService) {
    super();
  }

  ngOnInit(): void {
    this.addressService.getAddress().subscribe({
      next: (response) => {
        this.endereco = response.dados;

        this.controlesFormulario = {
          cep: {
            controle: new FormControl(this.endereco.cep, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          uf: {
            controle: new FormControl(this.endereco.uf, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          bairro: {
            controle: new FormControl(this.endereco.bairro, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          cidade: {
            controle: new FormControl(this.endereco.cidade, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          logradouro: {
            controle: new FormControl(this.endereco.logradouro, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          numeroLogradouro: {
            controle: new FormControl(this.endereco.numeroLogradouro, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          complemento: {
            controle: new FormControl(this.endereco.complemento),
          },
        };
      },
    });
  }

  submitFormulario(): void {
    const form = this.getFormData<Address>();

    this.addressService.updateAddress(this.endereco.codigo, form);
  }
}
