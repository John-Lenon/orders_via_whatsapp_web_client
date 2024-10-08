import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClientService } from 'src/app/core/services/http-client.service';
import { FormBase } from 'src/app/shared/components/base/form-base';
import { CustomValidator } from 'src/app/shared/utils/custom-validator';
import { Login } from '../../models/login';
import { UserToken } from '../../models/user-token';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { AlertType } from 'src/app/shared/enums/alertType';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css'],
})
export class AuthLoginComponent extends FormBase {
  checkboxStoreLoginData: boolean = new Boolean(
    this.getStoredLoging()
  ).valueOf();

  constructor(
    private httpClient: HttpClientService,
    private alertService: AlertService,
    private router: Router
  ) {
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

  submitFormulario(event: Event): void {
    event.preventDefault();
    const form = this.getFormData<Login>();

    this.httpClient
      .post<Login, UserToken>(form, 'usuario/login')
      .subscribe((result) => {
        const token = result?.dados?.token;
        localStorage.setItem('auth_token', token ?? '');

        this.alertService.addNewAlert({
          type: AlertType.SUCCESS,
          text: 'Parabéns você foi logado com sucesso!',
        });

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

  showOrHidePassword(event: Event, inputPassword: any) {
    const showPassword = (<any>event.target)['checked'];
    if (showPassword) inputPassword.type = 'text';
    else inputPassword.type = 'password';
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
