import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpMethod } from '../enums/enum-http-method';
import { HttpResponse } from '../http/http-response';
import { SpinLoadService } from 'src/app/shared/services/spin-load.service';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private spinLoadService: SpinLoadService
  ) {}

  public post<TBody, TResult>(
    body?: TBody,
    path?: string,
    contentType?: string
  ): Observable<HttpResponse<TResult>> {
    var resultResponse = this.sendHTTPRequest<TBody, TResult>(
      HttpMethod.POST,
      body,
      path,
      undefined,
      contentType
    );
    return resultResponse;
  }

  public get<TResult>(
    path?: string,
    params?: HttpParams,
    contentType?: string
  ): Observable<HttpResponse<TResult>> {
    const resultResponse = this.sendHTTPRequest<any, TResult>(
      HttpMethod.GET,
      null,
      path,
      params,
      contentType
    );
    return resultResponse;
  }

  public delete<TResult>(
    path?: string,
    contentType?: string
  ): Observable<HttpResponse<TResult>> {
    const resultResponse = this.sendHTTPRequest<any, TResult>(
      HttpMethod.DELETE,
      null,
      path,
      undefined,
      contentType
    );
    return resultResponse;
  }

  public patch() {}

  private sendHTTPRequest<TBody, TResult>(
    method: HttpMethod,
    body?: TBody,
    path?: string,
    params?: HttpParams,
    contentType?: string
  ): Observable<HttpResponse<TResult>> {
    const options = {
      headers: new HttpHeaders({
        'content-type': contentType ?? 'application/json',
        authorization: '',
      }),
      params,
      body,
    };

    this.spinLoadService.enableSpinLoad = true;
    const requestResult = this.httpClient.request<HttpResponse<TResult>>(
      method,
      this.apiUrl + (path ?? ''),
      options
    );
    const resultResponse = requestResult.pipe<
      HttpResponse<TResult>,
      HttpResponse<TResult>
    >(this.mapContentObservable(), this.handleErrorObservable());

    return resultResponse;
  }

  private mapContentObservable<TResult>() {
    return map((response: HttpResponse<TResult>) => {
      this.spinLoadService.enableSpinLoad = false;
      return response;
    });
  }

  private handleErrorObservable<TResult>() {
    return catchError<HttpResponse<TResult>, Observable<HttpResponse<TResult>>>(
      (erro: any, caught: Observable<HttpResponse<TResult>>) => {
        this.spinLoadService.enableSpinLoad = false;

        return throwError(() => erro);
        // return new Observable<HttpResponse<TResult>>((subscriber) => {
        //   subscriber.next();
        // });
      }
    );
  }
}
