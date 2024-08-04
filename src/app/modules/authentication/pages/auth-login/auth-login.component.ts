import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';
import { Login } from '../../models/login';
import { UserToken } from '../../models/user-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
})
export class AuthLoginComponent extends FormBase {
  checkboxStoreLoginData: boolean = new Boolean(
    this.getStoredLoging()
  ).valueOf();

  constructor(private httpClient: HttpClientService, private router: Router) {
    super();

    this.controlesFormulario = {
      email: {
        controle: new FormControl(this.getStoredLoging()?.email, [
          CustomValidator.required,
          CustomValidator.email,
        ]),
        mensagens: {
          required: 'Esse campo é obrigatório',
          email: 'Formato de E-mail inválido',
        },
      },
      senha: {
        controle: new FormControl(
          this.getStoredLoging()?.senha,
          CustomValidator.required
        ),
        mensagens: {
          required: 'Esse campo é obrigatório',
        },
      },
    };
  }

  submitFormulario(): void {
    const form = this.getFormData<Login>();

    this.httpClient
      .post<Login, UserToken>(form, 'usuario/login')
      .subscribe((result) => {
        const token = result?.token;
        localStorage.setItem('auth_token', token ?? '');
        this.router.navigateByUrl('admin');
      });
  }

  storeLoginData(event: Event): void {
    this.checkboxStoreLoginData = (<any>event.target)['checked'];

    if (this.checkboxStoreLoginData) {
      const form = this.getFormData<Login>();
      localStorage.setItem('stored_password', form.senha);
      localStorage.setItem('stored_email', form.email);
    } else {
      localStorage.removeItem('stored_password');
      localStorage.removeItem('stored_email');
    }
  }

  getStoredLoging(): Login | null {
    const login: Login = {
      email: localStorage.getItem('stored_email') ?? '',
      senha: localStorage.getItem('stored_password') ?? '',
    };
    if (!login.email && !login.senha) return null;
    return login;
  }
}
