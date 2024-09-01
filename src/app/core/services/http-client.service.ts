import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, finalize, map, throwError } from 'rxjs';
import { SpinLoadService } from 'src/app/shared/services/spin-load.service';
import { environment } from '../../../environments/environment';
import { HttpMethod } from '../enums/enum-http-method';
import { HttpResponse } from '../http/http-response';

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
    stopLoadSpin: Boolean = false,
    contentType?: string
  ): Observable<HttpResponse<TResult>> {
    var resultResponse = this.sendHTTPRequest<TBody, TResult>(
      HttpMethod.POST,
      body,
      path,
      undefined,
      stopLoadSpin,
      contentType
    );
    return resultResponse;
  }

  public update<TBody, TResult>(
    codigo: string,
    path?: string,
    body?: TBody,
    stopLoadSpin: Boolean = true,
    contentType?: string
  ): Observable<HttpResponse<TResult>> {
    path += `?codigo=${codigo}`;

    var resultResponse = this.sendHTTPRequest<TBody, TResult>(
      HttpMethod.PUT,
      body,
      path,
      undefined,
      stopLoadSpin,
      contentType
    );
    return resultResponse;
  }

  public get<TResult>(
    path?: string,
    params?: HttpParams,
    stopLoadSpin: Boolean = true,
    contentType?: string
  ): Observable<HttpResponse<TResult>> {
    const resultResponse = this.sendHTTPRequest<any, TResult>(
      HttpMethod.GET,
      null,
      path,
      params,
      stopLoadSpin,
      contentType
    );
    return resultResponse;
  }

  public delete<TResult>(
    path?: string,
    stopLoadSpin: Boolean = true,
    contentType?: string
  ): Observable<HttpResponse<TResult>> {
    const resultResponse = this.sendHTTPRequest<any, TResult>(
      HttpMethod.DELETE,
      null,
      path,
      undefined,
      stopLoadSpin,
      contentType
    );
    return resultResponse;
  }

  public getImage(path?: string): Observable<Blob> {
    this.spinLoadService.enableSpinLoad = true;

    const requestResult = this.httpClient.request<Blob>(
      HttpMethod.GET,
      `${this.apiUrl}${path}`,
      {
        responseType: 'blob' as 'json',
      }
    );

    const resultResponse = requestResult.pipe(
      map((response) => {
        return response;
      }),
      catchError((erro) => {
        this.spinLoadService.enableSpinLoad = false;
        return throwError(() => erro);
      }),
      finalize(() => {
        this.spinLoadService.enableSpinLoad = false;
      })
    );

    return resultResponse;
  }

  public uploadImage(
    file: File,
    path: string
  ): Observable<HttpResponse<boolean>> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this.httpClient.post<HttpResponse<boolean>>(
      `${this.apiUrl}${path}`,
      formData
    );
  }

  public patch() {}

  private sendHTTPRequest<TBody, TResult>(
    method: HttpMethod,
    body?: TBody,
    path?: string,
    params?: HttpParams,
    stopLoadSpin: Boolean = true,
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
    >(
      map((response) => {
        this.spinLoadService.enableSpinLoad = !stopLoadSpin;
        return response;
      }),

      catchError((erro, caught) => {
        this.spinLoadService.enableSpinLoad = false;
        return throwError(() => erro);
      })
    );

    return resultResponse;
  }
}
