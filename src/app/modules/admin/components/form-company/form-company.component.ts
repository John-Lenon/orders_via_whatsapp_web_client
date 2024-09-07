import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EnumStatusFuncionamento } from 'src/app/modules/menu-restaurant/enums/enum-status-funcionamento';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';
import { Company } from '../../model/company.interface';
import { CompanyService } from '../../services/company/company.service';

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.css'],
})
export class FormCompanyComponent extends FormBase implements OnInit {
  public backgroundImageLogoUrl: string | undefined;
  statusDeFuncionamento: string;
  empresa: Company;

  constructor(private companyService: CompanyService) {
    super();
  }

  ngOnInit() {
    this.getLogoEmpresa();

    this.companyService.getCompany().subscribe({
      next: (response) => {
        console.log('opa');
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
    const form = this.getFormData<Company>();

    form.statusDeFuncionamento = parseInt(
      this.statusDeFuncionamento
    ) as EnumStatusFuncionamento;

    this.companyService.updateCompany(this.empresa.codigo, form);
  }
}
