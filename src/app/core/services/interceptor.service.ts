import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var obs = new Observable();
    obs.subscribe((item) => {
      console.log(item);
    });

    const token = localStorage.getItem('auth_token');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(authReq).pipe(
      catchError((erro: any, caught: Observable<any>) => {
        if (erro.status === 401) {
          this.router.navigateByUrl('auth/login');
        }
        return throwError(() => erro);
      })
    );
  }
}
