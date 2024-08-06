import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { AlertType } from 'src/app/shared/enums/alertType';
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router, private alertService: AlertService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('auth_token');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(authReq).pipe(
      catchError((erro: any, caught: Observable<any>) => {
        if (erro.status === 0) {
          this.alertService.addNewAlert({
            type: AlertType.ERROR,
            text: `Não foi possível conectar ao servidor web`,
          });
        } else if (erro.status === 401) {
          this.notificar(erro, AlertType.WARNING);
          this.router.navigateByUrl('auth/login');
        } else {
          this.notificar(erro);
        }

        return throwError(() => erro);
      })
    );
  }

  notificar(erro: any, alertType: AlertType | null = null) {
    if (erro.error?.mensagens) {
      for (let item of erro.error.mensagens) {
        this.alertService.addNewAlert({
          type: alertType ?? item.tipo / 100,
          text: item.descricao,
        });
      }
    } else {
      this.alertService.addNewAlert({
        type: AlertType.ERROR,
        text: 'Erro desconhecido',
      });
    }
  }
}
