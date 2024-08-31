import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { AlertService } from 'src/app/shared/services/alert.service';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';
import { Empresa } from '../../model/empresa.interface';
import { CompanyService } from '../../services/company/company.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css'],
})
export class FormEmpresaComponent extends FormBase {
  public backgroundImageLogoUrl: string | undefined;

  constructor(
    private httpClient: HttpClientService,
    private companyService: CompanyService,

    private alertService: AlertService,
    private router: Router
  ) {
    super();
    this.onInit();
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

  get backgroundImageLogoStyle(): { [key: string]: string } {
    if (this.backgroundImageLogoUrl) {
      return {
        'background-image': `url(${this.backgroundImageLogoUrl})`,
        'background-color': 'none', // ou você pode simplesmente omitir esta linha se desejar
      };
    } else {
      return {
        'background-image': 'none',
        'background-color': '#e0e0e0',
      };
    }
  }

  onInit() {
    this.getLogoEmpresa();
  }

  getLogoEmpresa() {
    this.companyService.getLogoEmpresa('12345678000101').subscribe({
      next: (imageBlob) => {
        const objectURL = URL.createObjectURL(imageBlob);
        this.backgroundImageLogoUrl = objectURL;
      },
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const cnpj = '12345678000101';

    if (file) {
      this.companyService.uploadLogoEmpresa(cnpj, file).subscribe({
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

  submitFormulario(): void {
    debugger;
    let form = this.getFormData<Empresa>();
  }
}
