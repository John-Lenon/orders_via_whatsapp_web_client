import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpMethod } from '../enums/HttpMethod';
import { Response } from '../models/http/response';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  public post<TBody, TResult>(
    body?: TBody,
    path?: string,
    contentType?: string
  ): Observable<TResult | null> {
    var resultResponse = this.sendHTTPRequest<TBody, TResult | null>(
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
  ): Observable<TResult | null> {
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
  ): Observable<TResult | null> {
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
  ): Observable<TResult> {
    const options = {
      headers: new HttpHeaders({
        'content-type': contentType ?? 'application/json',
        authorization: '',
      }),
      params,
      body,
    };

    const requestResult = this.httpClient.request<Response<TResult>>(
      method,
      this.apiUrl + path ?? '',
      options
    );
    const resultResponse = requestResult.pipe<TResult, TResult>(
      this.mapContentObservable(),
      this.handleErrorObservable()
    );

    return resultResponse;
  }

  private mapContentObservable<TResult>() {
    return map((response: Response<TResult>) => {
      return response?.dados;
    });
  }

  private handleErrorObservable<TResult>() {
    return catchError<TResult, Observable<TResult>>(
      (erro: any, caught: Observable<TResult>) => {
        //dlkjdçlkjdçl
        return new Observable<TResult>();
      }
    );
  }
}
