import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { EnumStatusFuncionamento } from 'src/app/modules/menu-restaurant/enums/enum-status-funcionamento';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';
import { Empresa } from '../../../admin/model/empresa.interface';
import { CompanyService } from '../../services/company/company.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css'],
})
export class FormEmpresaComponent extends FormBase {
  public backgroundImageLogoUrl: string | undefined;
  statusDeFuncionamento: string;
  empresa: Empresa;

  constructor(
    private httpClientService: HttpClientService,
    private companyService: CompanyService
  ) {
    super();
    this.getLogoEmpresa();
    this.initFormEmpresa();
  }

  get backgroundImageLogoStyle(): { [key: string]: string } {
    if (this.backgroundImageLogoUrl) {
      return {
        'background-image': `url(${this.backgroundImageLogoUrl})`,
        'background-color': 'transparent',
      };
    } else {
      return {
        'background-image': 'none',
        'background-color': '#e0e0e0',
      };
    }
  }

  initFormEmpresa() {
    this.httpClientService.get<Empresa>('empresa').subscribe({
      next: (response) => {
        this.empresa = response.dados;

        this.controlesFormulario = {
          nomeFantasia: {
            controle: new FormControl(this.empresa.nomeFantasia, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          razaoSocial: {
            controle: new FormControl(this.empresa.razaoSocial, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          cnpj: {
            controle: new FormControl(this.empresa.cnpj, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          dominio: {
            controle: new FormControl(this.empresa.dominio, [
              CustomValidator.required,
            ]),
            mensagens: { required: 'Esse campo é obrigatório' },
          },
          numeroDoWhatsapp: {
            controle: new FormControl(this.empresa.numeroDoWhatsapp, [
              CustomValidator.required,
            ]),
            mensagens: {
              required: 'Esse campo é obrigatório',
            },
          },
          email: {
            controle: new FormControl(this.empresa.email, [
              CustomValidator.required,
              CustomValidator.email,
            ]),
            mensagens: {
              required: 'Esse campo é obrigatório',
              email: 'Email inválido.',
            },
          },
        };

        this.getStatusDeFuncionamentoEmpresa();
      },
    });
  }

  getStatusDeFuncionamentoEmpresa() {
    switch (this.empresa.statusDeFuncionamento) {
      case EnumStatusFuncionamento.Fechado:
        this.statusDeFuncionamento = '0';
        break;
      case EnumStatusFuncionamento.Pausado:
        this.statusDeFuncionamento = '1';
        break;
      case EnumStatusFuncionamento.AbertoAgora:
        this.statusDeFuncionamento = '2';
        break;
    }
  }

  //#region Logo
  getLogoEmpresa() {
    this.companyService.getLogoEmpresa().subscribe({
      next: (imageBlob) => {
        if (imageBlob.size > 150) {
          const objectURL = URL.createObjectURL(imageBlob);
          this.backgroundImageLogoUrl = objectURL;
        }
      },
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      this.companyService.uploadLogoEmpresa(file).subscribe({
        next: (success) => {
          if (success) {
            const objectURL = URL.createObjectURL(file);
            this.backgroundImageLogoUrl = objectURL;
          }
        },
      });
    }
  }

  fileInputClick(fileInput: HTMLInputElement): void {
    fileInput.click();
  }
  //#endregion

  submitFormulario(): void {
    let form = this.getFormData<Empresa>();

    form.statusDeFuncionamento = parseInt(
      this.statusDeFuncionamento
    ) as EnumStatusFuncionamento;

    this.httpClientService
      .update(this.empresa.codigo, 'empresa', form)
      .subscribe();
  }
}
